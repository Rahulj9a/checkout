
"use client"

import { AiOutlineShoppingCart } from 'react-icons/ai'
import IconButton from './ui/icon_button'
import { useRouter } from 'next/navigation'
import useCart from '@/hooks/useCart'
 

const NavActions = () => {
    const router = useRouter()
    const cart = useCart()
    const cartIcon = (
        <div className='relative'>

            {cart.items.length > 0 && <div className='absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-red-300'>
                <p className='text-sm text-white font-semibold'> {cart.items.length}</p>
            </div>}
            <AiOutlineShoppingCart size="30px" />
        </div>
    )
    return (
        <>
            <IconButton onClick={() => router.push('/cart')} icon={cartIcon} />

        </>
    )
}

export default NavActions