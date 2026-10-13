import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { pageSeo, notFoundSeo, siteUrl, socialImage } from '../src/data/seo.js'

const distRoot = new URL('../dist/', import.meta.url)
const template = await readFile(new URL('index.html', distRoot), 'utf8')

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function replaceMeta(html, route, metadata) {
  const canonical = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`
  let output = html.replace(/<title>[^<]*<\/title>/, `<title>${metadata.title}</title>`)
  output = output.replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(metadata.description)}$2`)
  output = output.replace(/(<meta\s+name="robots"\s+content=")[^"]*("\s*\/?>)/, `$1${metadata.robots}$2`)
  output = output.replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/, `$1${canonical}$2`)
  output = output.replace(/(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(metadata.title)}$2`)
  output = output.replace(/(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(metadata.description)}$2`)
  output = output.replace(/(<meta\s+property="og:url"\s+content=")[^"]*("\s*\/?>)/, `$1${canonical}$2`)
  output = output.replace(/(<meta\s+property="og:image"\s+content=")[^"]*("\s*\/?>)/, `$1${socialImage}$2`)
  output = output.replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(metadata.title)}$2`)
  output = output.replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*("\s*\/?>)/, `$1${escapeAttribute(metadata.description)}$2`)
  output = output.replace(/(<meta\s+name="twitter:image"\s+content=")[^"]*("\s*\/?>)/, `$1${socialImage}$2`)
  const schema = metadata.schema ? JSON.stringify(metadata.schema, null, 2) : ''
  return output.replace(/<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="structured-data" type="application/ld+json">${schema}</script>`)
}

for (const [route, metadata] of Object.entries(pageSeo)) {
  const directory = new URL(`.${route === '/' ? '' : route}/`, distRoot)
  await mkdir(directory, { recursive: true })
  await writeFile(new URL('index.html', directory), replaceMeta(template, route, metadata))
}

const notFound = replaceMeta(template, '/404', notFoundSeo).replace(/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, '')
await writeFile(new URL('404.html', distRoot), notFound)
