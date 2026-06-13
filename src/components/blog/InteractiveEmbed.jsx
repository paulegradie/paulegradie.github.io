import { useEffect, useRef, useState } from 'react'

function ExpandIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 2H2v4M10 2h4v4M6 14H2v-4M10 14h4v-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NewTabIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 3.5H3.5v9h9v-3M9.5 3.5h3v3M12.5 3.5L7 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Frames a self-contained interactive HTML page (served from /public) as an
 * embedded, fullscreen-able iframe. Used for the spacetime animations.
 */
export function InteractiveEmbed({ src, title, caption, tall = false }) {
  const frameRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const toggleFullscreen = () => {
    const el = frameRef.current
    if (!el) return
    if (document.fullscreenElement) {
      ;(document.exitFullscreen || document.webkitExitFullscreen)?.call(document)
    } else {
      ;(el.requestFullscreen || el.webkitRequestFullscreen)?.call(el)
    }
  }

  const heightClass = tall ? 'h-[600px] sm:h-[720px]' : 'h-[520px] sm:h-[640px]'

  return (
    <figure className="not-prose my-8 flex w-full flex-col items-center">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-300/70 bg-slate-950 shadow-md dark:border-slate-600/70">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-slate-900/80 px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex flex-shrink-0 gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </span>
            {title && (
              <span className="truncate text-xs font-medium tracking-wide text-slate-300">
                {title}
              </span>
            )}
          </div>
          <div className="flex flex-shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex items-center gap-1.5 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-100 transition hover:bg-cyan-300/20"
            >
              <ExpandIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
            </button>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200 transition hover:bg-white/10"
            >
              <NewTabIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">New tab</span>
            </a>
          </div>
        </div>
        <iframe
          ref={frameRef}
          src={src}
          title={title || 'Interactive animation'}
          loading="lazy"
          allowFullScreen
          className={`block w-full ${heightClass} border-0 bg-[#04060c]`}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 max-w-3xl px-2 text-center text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
