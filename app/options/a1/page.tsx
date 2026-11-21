import type { Metadata } from 'next'
import { Blueprint } from '../Blueprint'

export const metadata: Metadata = { title: 'Option A1 · Drafting Table', robots: { index: false } }

export default function A1() {
  return (
    <>
      <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600&f[]=satoshi@400,500,700&display=swap" />
      <Blueprint variant="1" current="a1" />
    </>
  )
}
