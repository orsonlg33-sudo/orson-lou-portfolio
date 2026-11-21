import type { Metadata } from 'next'
import { Blueprint } from '../Blueprint'

export const metadata: Metadata = { title: 'Option A2 · Signal', robots: { index: false } }

export default function A2() {
  return (
    <>
      <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=khand@500,600&f[]=general-sans@400,500,600&display=swap" />
      <Blueprint variant="2" current="a2" />
    </>
  )
}
