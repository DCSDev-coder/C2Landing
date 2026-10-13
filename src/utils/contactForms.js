const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim()
const PUBLIC_API_BASE_URL = (
  import.meta.env.VITE_PUBLIC_API_BASE_URL || 'https://api.c2coffeeandcandle.com/v1'
).replace(/\/$/, '')

export function getContactConfigurationError() {
  return CONTACT_FORM_ENDPOINT || PUBLIC_API_BASE_URL
    ? null
    : 'Contact form is not configured yet. Set VITE_PUBLIC_API_BASE_URL.'
}

export async function submitContactForm({ subject, payload }) {
  const configurationError = getContactConfigurationError()

  if (configurationError) {
    throw new Error(configurationError)
  }

  const endpoint = CONTACT_FORM_ENDPOINT || `${PUBLIC_API_BASE_URL}/public/contact`
  const { formType, ...formPayload } = payload
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...formPayload,
      form_type: formType,
      subject,
    }),
  })

  let responseBody = null

  try {
    responseBody = await response.json()
  } catch {
    try {
      const fallbackText = await response.text()
      responseBody = fallbackText ? JSON.parse(fallbackText) : null
    } catch {
      responseBody = null
    }
  }

  if (!response.ok) {
    throw new Error(responseBody?.message || 'Unable to send the form right now. Please try again.')
  }

  if (responseBody && `${responseBody.success}`.toLowerCase() === 'false') {
    throw new Error(responseBody?.message || 'Form submission was rejected.')
  }

  return {
    mode: CONTACT_FORM_ENDPOINT ? 'custom-endpoint' : 'api',
    message: responseBody?.message || null,
  }
}
