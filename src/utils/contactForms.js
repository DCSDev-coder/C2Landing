const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim()
const CONTACT_RECEIVER_EMAIL = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL?.trim()
const CONTACT_FORM_URL = import.meta.env.VITE_CONTACT_FORM_URL?.trim()

function buildDefaultEndpoint() {
  if (!CONTACT_RECEIVER_EMAIL) {
    return null
  }

  return `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_RECEIVER_EMAIL)}`
}

export function getContactConfigurationError() {
  if (CONTACT_FORM_ENDPOINT || CONTACT_RECEIVER_EMAIL) {
    return null
  }

  return 'Contact form is not configured yet. Set VITE_CONTACT_FORM_ENDPOINT or VITE_CONTACT_RECEIVER_EMAIL.'
}

export async function submitContactForm({ subject, payload }) {
  const configurationError = getContactConfigurationError()

  if (configurationError) {
    throw new Error(configurationError)
  }

  const endpoint = CONTACT_FORM_ENDPOINT || buildDefaultEndpoint()
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...payload,
      _subject: subject,
      _captcha: 'false',
      _template: 'table',
      ...(CONTACT_FORM_URL ? { _url: CONTACT_FORM_URL } : {}),
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
    throw new Error(responseBody.message || 'Form provider rejected the submission.')
  }

  return {
    mode: CONTACT_FORM_ENDPOINT ? 'endpoint' : 'formsubmit',
    message: responseBody?.message || null,
  }
}
