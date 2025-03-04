'use client'

interface PlaceholderImageProps {
  name: string
  width?: number
  height?: number
  bgColor?: string
  textColor?: string
}

export default function PlaceholderImage({
  name,
  width = 400,
  height = 400,
  bgColor = '#0984E3',
  textColor = '#FFFFFF'
}: PlaceholderImageProps) {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()

  const svgString = encodeURIComponent(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="${width * 0.25}"
        fill="${textColor}"
        text-anchor="middle"
        dy=".3em"
      >${initials}</text>
    </svg>
  `)

  return `data:image/svg+xml;utf8,${svgString}`
} 