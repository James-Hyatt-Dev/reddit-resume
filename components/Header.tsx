import Image from 'next/image'
import React from 'react'
import RedditLogo from '../public/RedditLogo.png'
import RedditLogoGuy from '../public/RedditLogoGuy.png'
import KarmaIcon from '../public/KarmaIcon.png'
import Link from 'next/link'
import { 
    ChevronDownIcon, 
    HomeIcon,
    MenuIcon,
    SearchIcon
} from '@heroicons/react/solid'
import { 
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,
    SpeakerphoneIcon,
    VideoCameraIcon 
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'



function Header() {
    const { data: session } = useSession();

  return (
    <div className='flex items-center bg-white px-4 py-2 shadow-sm sticky top-0 z-50'>

        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
            {/* Reddit Logo in Header */}
            <Link href="/" >
                <Image 
                    objectFit='contain'
                    src={RedditLogo} 
                    alt='Reddit color logo with Reddit'
                    layout='fill'
                    priority        
                />
            </Link>
                
        </div>

        {/* Home icon and text within header */}
        <div className='flex items-center mx-7 xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5' />
            <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5'/>
        </div>

        {/* search box in header */}
        <form className='flex flex-1 items-center space-x-2 border-gray-200 rounded-sm border bg-gray-100 px-3 py-1'>
            <SearchIcon className='h-6 w-6 text-gray-400' />
            <input 
                className='bg-transparent flex-1 outline-none'
                type='text' 
                placeholder='Search Reddit'                
            />
            <button 
                type='submit' 
                hidden 
            />
        </form>

        {/* icons on top right of header */}
        <div className='flex text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex'>
            <SparklesIcon className='icon' />
            <GlobeIcon className='icon' />
            <VideoCameraIcon className='icon' />
                <hr className='h-10 border border-gray-100' />
            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <PlusIcon className='icon' />
            <SpeakerphoneIcon className='icon' />
        </div>

        {/* mobile hamburger icon in header, not operational */}
        <div className='ml-5 flex- items-center lg:hidden'>
            <MenuIcon className='text-gray-500 h5 w-6' />
        </div>

        {/* Sign in / sign out button in header */}
        {session ? (
            <div
                onClick={() => signOut()}
                className="-m-1 hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
                >
                    <div className='h-6 w-6 relative flex-shrink-0'>
                        <Image 
                            objectFit='contain'     
                            layout='fill'      
                            src={RedditLogoGuy} 
                            alt='Reddit Logo Icon Head Only'
                        />
                    </div>
                    <div className='flex-1 text-xs'>
                        <p className='truncate'>{session?.user?.name}</p>
                        <div className='flex gap-1 items-center'>
                            <Image 
                                height={12}
                                width={12}
                                objectFit='contain'
                                src={KarmaIcon}
                                alt='Karma Icon' 
                            />
                                
                            <p className='text-gray-400'>1 Karma</p>  
                            <div>
                                <ChevronDownIcon className='h-5 w-5 flex-shrink-0 text-gray-400' />                      
                            </div>
                        </div>

                    </div>

                            
            </div>
        ) : (
            <div
                onClick={() => signIn()}
                className="-m-1 hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
                >
                    <div className='h-6 w-6 relative flex-shrink-0'>
                        <Image 
                            objectFit='contain'     
                            layout='fill'      
                            src={RedditLogoGuy} 
                            alt='Reddit Logo Icon Head Only'
                        />
                    </div>
                    <p className='text-gray-400'>Sign In</p>
            </div>
        )}
        
        
       
    </div>
  )
}

export default Header