import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MaxwidthWrappers from './MaxwidthWrappers'
import { buttonVariants } from './ui/button'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
  
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxwidthWrappers>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            Customize<span className='text-pink-600'>store</span>
          </Link>

       <div  className='h-full flex items-center space-x-4'>
        {user ? (
        <>
<Link href='/api/auth/logout' className={
    buttonVariants({
        size:'sm',
        variant:'ghost'
    })
}>Sign out</Link>
{isAdmin ? <Link href='/api/auth/logout' className={
    buttonVariants({
        size:'sm',
        variant:'ghost'
    })
}>Dashbaoard </Link>: null}
 <Link href='/configure/upload'
     className={
    buttonVariants({
        size:'sm',
       className:"hidden sm:flex items-center gap-1"
    })
}>Create one</Link>
<ArrowRight className='ml-1.5 h-5 w-5'></ArrowRight>
        </>
        ):( 
            <>
            <Link href='/api/auth/register' className={
                buttonVariants({
                    size:'sm',
                    variant:'ghost'
                })
            }>Sign in</Link>
         
             <Link href='/api/auth/login'
                 className={
                buttonVariants({
                    size:'sm',
                    variant:'ghost'      
                      })
            }>Login</Link>
<div className='h-8 w-px bg-zinc-200 hidden sm:block'></div>      
       </>)  }
       
       </div> 
        </div>
      </MaxwidthWrappers>
    </nav>
  )
}

export default Navbar