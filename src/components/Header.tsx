import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LogOut } from "@deemlol/next-icons";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

const Header = () => {
  return (
    <div className='p-8 bg-zinc-200 w-full flex justify-between items-center'>
        <div className='logo rounded-full'>
            <Image
            src='/next.svg'
            alt='logo'
            width={60}
            height={60}
            priority
            />
        </div>
        <div className='links flex text-center gap-2 items-center'>
            <Link href='/'>Home</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/create'>Create Post</Link>
        </div>  
    </div>
  )
}

export default Header