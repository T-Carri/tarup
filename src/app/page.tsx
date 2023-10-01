import Image from 'next/image'
import { ServerAuthProvider } from '@/auth/server-auth-provider'
export default function Home() {
  return (
    <ServerAuthProvider>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

<h3>test</h3>


    </main>
    </ServerAuthProvider>
  )
}
