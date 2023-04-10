'use client'
import { FC, useState } from 'react'
import { Button } from '@/components'
import Image from 'next/image'
import {signIn} from 'next-auth/react'
import {toast} from 'react-hot-toast'

interface LoginProps {
}

const Login: FC<LoginProps> = ({  }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      // dispaly error message to user
      toast.error('Something went wrong with your login. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center max-w-md space-y-8">
        <div className="flex flex-col items-center gap-8">
          <Image src='/logo.png' alt='MyChatApp' width={160} height={160} />
          <h2 className='mt-6 text-center text-3xl font-black tracking-tight text-gray-800'>Sign In to your account</h2>
        </div>
        <Button isLoading={isLoading} type='button' className='max-w-sm mx-auto w-full' onClick={loginWithGoogle}>
          {isLoading ? null : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chrome mr-1"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" x2="12" y1="8" y2="8"></line><line x1="3.95" x2="8.54" y1="6.06" y2="14"></line><line x1="10.88" x2="15.46" y1="21.94" y2="14"></line></svg>}
          Google
        </Button>
      </div>
    </div>
    </>
  )
}

export default Login