import React, { useEffect, useState } from 'react'
import c2Logo from '../assets/brand/c2_logo.webp'
import './CounterDownload.css'

const releaseManifestUrl = '/download/counterdownload/latest.json'
const allowedHosts = new Set(['c2coffeeandcandle.com', 'www.c2coffeeandcandle.com'])

function parseRelease(payload) {
  const versionName = String(payload?.version_name ?? '').trim()
  const versionCode = Number(payload?.version_code)
  const apkUrl = new URL(String(payload?.apk_url ?? ''), window.location.origin)

  if (!/^[A-Za-z0-9._-]{1,40}$/.test(versionName) || !Number.isInteger(versionCode) || versionCode < 1) {
    throw new Error('The published version information is invalid.')
  }
  if (apkUrl.protocol !== 'https:' || !allowedHosts.has(apkUrl.hostname) || !apkUrl.pathname.startsWith('/download/counterdownload/')) {
    throw new Error('The published download address is invalid.')
  }

  return {
    versionName,
    versionCode,
    apkUrl: apkUrl.href,
    releaseNotes: String(payload?.release_notes ?? '').trim(),
  }
}

export default function CounterDownload() {
  const [state, setState] = useState({ status: 'loading', release: null, message: '' })

  useEffect(() => {
    const controller = new AbortController()

    async function loadRelease() {
      try {
        const response = await fetch(`${releaseManifestUrl}?t=${Date.now()}`, {
          cache: 'no-store',
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`The update server returned ${response.status}.`)
        const release = parseRelease(await response.json())
        setState({ status: 'ready', release, message: '' })
      } catch (error) {
        if (error?.name === 'AbortError') return
        setState({
          status: 'error',
          release: null,
          message: error instanceof Error ? error.message : 'The release could not be loaded.',
        })
      }
    }

    loadRelease()
    return () => controller.abort()
  }, [])

  const release = state.release

  return (
    <main className="counter-download">
      <div className="counter-download__glow counter-download__glow--one" aria-hidden="true" />
      <div className="counter-download__glow counter-download__glow--two" aria-hidden="true" />

      <section className="counter-download__shell" aria-labelledby="counter-download-title">
        <a className="counter-download__brand" href="/" aria-label="C2 Coffee and Candle home">
          <img src={c2Logo} alt="C2 Coffee + Candle" />
        </a>

        <div className="counter-download__eyebrow">
          <span className="counter-download__pulse" aria-hidden="true" />
          C2 store deployment
        </div>

        <h1 id="counter-download-title">Install C2 Store</h1>
        <p className="counter-download__lead">
          The Counter and Barista workspace for authorised C2 Coffee outlet devices.
        </p>

        <div className="counter-download__card">
          <div className="counter-download__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 18.5h14" strokeLinecap="round" />
            </svg>
          </div>

          {state.status === 'loading' ? (
            <div className="counter-download__status" role="status">Checking the latest release…</div>
          ) : null}

          {state.status === 'error' ? (
            <div className="counter-download__status counter-download__status--error" role="alert">
              <strong>Download is temporarily unavailable.</strong>
              <span>{state.message}</span>
            </div>
          ) : null}

          {release ? (
            <>
              <div className="counter-download__version">
                <span>Latest Android version</span>
                <strong>{release.versionName}</strong>
                <small>Build {release.versionCode}</small>
              </div>

              {release.releaseNotes ? (
                <div className="counter-download__notes">
                  <span>Release notes</span>
                  <p>{release.releaseNotes}</p>
                </div>
              ) : null}

              <a className="counter-download__button" href={release.apkUrl} rel="nofollow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Android APK
              </a>
            </>
          ) : null}
        </div>

        <div className="counter-download__steps">
          <div><span>1</span><p>Download the APK on the authorised Android outlet device.</p></div>
          <div><span>2</span><p>Allow installation from this browser when Android requests it.</p></div>
          <div><span>3</span><p>Install and reopen C2 Store. Existing device activation is preserved during an update.</p></div>
        </div>

        <p className="counter-download__notice">
          Internal staff distribution only. This unlisted page is not linked from the public website.
        </p>
      </section>
    </main>
  )
}
