import bpy
import math
import os


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT = os.path.join(ROOT, 'public', 'models', 'c2-phone.glb')


def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)


def make_material(name, color, metallic=0.0, roughness=0.45):
    material = bpy.data.materials.new(name)
    material.diffuse_color = (*color, 1.0)
    material.use_nodes = True
    principled = material.node_tree.nodes.get('Principled BSDF')
    principled.inputs['Base Color'].default_value = (*color, 1.0)
    principled.inputs['Metallic'].default_value = metallic
    principled.inputs['Roughness'].default_value = roughness
    return material


def rounded_box(name, location, dimensions, bevel_width, material):
    bpy.ops.mesh.primitive_cube_add(location=location)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = dimensions
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    bevel = obj.modifiers.new(name='Rounded edges', type='BEVEL')
    bevel.width = bevel_width
    bevel.segments = 8
    bevel.limit_method = 'ANGLE'
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.modifier_apply(modifier=bevel.name)
    obj.data.materials.append(material)
    return obj


def rounded_screen(width, height, radius, depth_y, material, segments=10, name='Screen'):
    points = []
    corners = [
        (width / 2 - radius, -height / 2 + radius, -90),
        (width / 2 - radius, height / 2 - radius, 0),
        (-width / 2 + radius, height / 2 - radius, 90),
        (-width / 2 + radius, -height / 2 + radius, 180),
    ]

    for center_x, center_z, start_angle in corners:
        for step in range(segments + 1):
            angle = math.radians(start_angle + (90 * step / segments))
            points.append((center_x + radius * math.cos(angle), center_z + radius * math.sin(angle)))

    vertices = [(0.0, depth_y, 0.0)] + [(x, depth_y, z) for x, z in points]
    faces = []
    for index in range(1, len(vertices)):
        next_index = index + 1 if index < len(vertices) - 1 else 1
        faces.append((0, next_index, index))

    mesh = bpy.data.meshes.new(f'{name}Mesh')
    mesh.from_pydata(vertices, [], faces)
    mesh.update()

    screen = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(screen)
    screen.data.materials.append(material)

    uv_layer = mesh.uv_layers.new(name='UVMap')
    for polygon in mesh.polygons:
        for loop_index in polygon.loop_indices:
            vertex = mesh.vertices[mesh.loops[loop_index].vertex_index].co
            uv_layer.data[loop_index].uv = ((vertex.x / width) + 0.5, (vertex.z / height) + 0.5)

    return screen


def rounded_prism(name, width, height, depth, radius, material, segments=16):
    """Create a rounded-rectangle enclosure without bevel-radius clamping."""
    points = []
    corners = [
        (width / 2 - radius, -height / 2 + radius, -90),
        (width / 2 - radius, height / 2 - radius, 0),
        (-width / 2 + radius, height / 2 - radius, 90),
        (-width / 2 + radius, -height / 2 + radius, 180),
    ]

    for center_x, center_z, start_angle in corners:
        for step in range(segments):
            angle = math.radians(start_angle + (90 * step / segments))
            points.append((center_x + radius * math.cos(angle), center_z + radius * math.sin(angle)))

    half_depth = depth / 2
    vertices = [(x, -half_depth, z) for x, z in points]
    vertices += [(x, half_depth, z) for x, z in points]
    count = len(points)

    faces = [tuple(reversed(range(count))), tuple(range(count, count * 2))]
    for index in range(count):
        next_index = (index + 1) % count
        faces.append((index, next_index, count + next_index, count + index))

    mesh = bpy.data.meshes.new(f'{name}Mesh')
    mesh.from_pydata(vertices, [], faces)
    mesh.validate()
    mesh.update()

    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(material)

    bevel = obj.modifiers.new(name='Soft aluminum edges', type='BEVEL')
    bevel.width = 0.028
    bevel.segments = 3
    bevel.limit_method = 'ANGLE'
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.modifier_apply(modifier=bevel.name)
    return obj


clear_scene()
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)

frame_material = make_material('DeepBlueAluminum', (0.025, 0.036, 0.052), metallic=0.72, roughness=0.23)
edge_material = make_material('ButtonDetail', (0.035, 0.047, 0.062), metallic=0.66, roughness=0.25)
glass_material = make_material('CeramicShieldGlass', (0.004, 0.005, 0.006), metallic=0.0, roughness=0.12)
screen_material = make_material('ScreenMaterial', (0.005, 0.005, 0.005), metallic=0.0, roughness=0.18)

# Official iPhone 17 Pro dimensions scaled at 0.045 Blender units per millimetre:
# 71.9 x 150.0 x 8.75 mm enclosure and a 2622 x 1206 px display at 460 ppi.
body_width = 71.9 * 0.045
body_height = 150.0 * 0.045
body_depth = 8.75 * 0.045
screen_width = (1206 / 460 * 25.4) * 0.045
screen_height = (2622 / 460 * 25.4) * 0.045

rounded_prism('iPhone17ProFrame', body_width, body_height, body_depth, 12.0 * 0.045, frame_material)
rounded_screen(body_width - 0.045, body_height - 0.045, 0.52, -(body_depth / 2 + 0.006), glass_material, segments=18, name='FrontGlass')
rounded_screen(screen_width, screen_height, 0.49, -(body_depth / 2 + 0.014), screen_material, segments=18, name='Screen')

# The recording is vertically cropped, so the physical Dynamic Island is modelled separately.
dynamic_island = rounded_screen(0.88, 0.25, 0.125, -(body_depth / 2 + 0.021), glass_material, segments=12, name='DynamicIsland')
dynamic_island.location.z = screen_height / 2 - 0.27

# Left-side Action and volume controls.
button_x = body_width / 2 + 0.032
rounded_box('ActionButton', (-button_x, 0.0, 2.22), (0.064, 0.21, 0.34), 0.03, edge_material)
rounded_box('VolumeUpButton', (-button_x, 0.0, 1.38), (0.064, 0.21, 0.62), 0.03, edge_material)
rounded_box('VolumeDownButton', (-button_x, 0.0, 0.55), (0.064, 0.21, 0.62), 0.03, edge_material)

# Right-side power and camera controls.
rounded_box('PowerButton', (button_x, 0.0, 1.23), (0.064, 0.21, 0.94), 0.03, edge_material)
rounded_box('CameraControl', (button_x, 0.0, -1.63), (0.064, 0.21, 0.70), 0.03, edge_material)

for obj in bpy.context.scene.objects:
    obj.select_set(True)

bpy.ops.export_scene.gltf(
    filepath=OUTPUT,
    export_format='GLB',
    use_selection=True,
    export_apply=True,
)

print(f'Exported {OUTPUT}')
