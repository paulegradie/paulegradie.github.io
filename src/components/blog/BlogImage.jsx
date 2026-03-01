
import Image from 'next/image'

export function BlogImage({ src, link = null, className = '', ...styles }) {
  const classNames = `mt-4 h-auto w-full max-h-[70vh] max-w-5xl rounded-2xl shadow-md object-contain ${className}`.trim()

  let cursor = ''
  if (link) cursor = 'cursor-pointer'

  const linkCallback = () => {
    if (link) {
      window.open(link)
    }
  }

  return (
    <div className={`flex w-full justify-center ${cursor}`} onClick={linkCallback}>
      <Image
        alt="Article visual"
        src={src}
        className={classNames}
        sizes="(min-width: 1024px) 56rem, 92vw"
        style={{ ...styles }}
      />
    </div>
  )
}
