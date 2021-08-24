import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Image() {
  return (
    <Image
      alt="Picture of the author"
      src="/me.png"
      layout='responsive'
      width={500}
      height={500}
    />
  )
}