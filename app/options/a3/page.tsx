import type { Metadata } from 'next'
import { Blueprint } from '../Blueprint'

export const metadata: Metadata = { title: 'Option A3 · Night Shift', robots: { index: false } }

export default function A3() {
  return (
    <>
      <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800&f[]=satoshi@400,500,700&display=swap" />
      <Blueprint variant="3" current="a3" />
    </>
  )
}
