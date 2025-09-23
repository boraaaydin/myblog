import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect('/tr/blog')

  return null
}