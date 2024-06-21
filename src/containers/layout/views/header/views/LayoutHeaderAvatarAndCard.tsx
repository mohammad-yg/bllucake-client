import { ProfileIcon } from '@/components/icons/ProfileIcon'
import { ShoppingCartIcon } from '@/components/icons/ShoppingCartIcon'
import React, { FC } from 'react'

type Props = {
  currentUser?: {
    image: string | null
  },
  orderCount?: number
}

export const LayoutHeaderAvatarAndCard: FC<Props> = ({ currentUser, orderCount }) => {
  return (
    <div className='flex items-center'>
      <div className='ms-[32px]'>
        {
          currentUser ?
            <div className='flex items-center'>
              <div className='h-[40px] w-[84px] flex items-center justify-between bg-[#6F899B] rounded-max p-[5px]'>
                <div className='rounded-full bg-white w-[32px] h-[32px] text-[#154160] flex items-center justify-center'>
                  {orderCount}
                </div>
                <div className='me-1'>
                  <ShoppingCartIcon />
                </div>
              </div>
              <div className='w-[3rem] h-[3rem] rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer ms-[1rem]'>
                <ProfileIcon />
              </div>
            </div>
            :
            <div className='bg-[#154160] text-[2rem] text-base font-medium rounded-2xl shadow'>
              ورود
            </div>
        }
      </div>
    </div>
  )
}