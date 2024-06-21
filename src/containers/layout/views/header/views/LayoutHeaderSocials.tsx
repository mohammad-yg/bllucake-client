import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { TellIcon } from '@/components/icons/TellIcon'
import React, { FC } from 'react'

type Props = {
  phone_number: string,
  instagram: string,
  instagram_id: string,
}

export const LayoutHeaderSocials: FC<Props> = ({ instagram_id, phone_number }) => {
  return (
    <div className='flex h-[56px] items-center font-normal text-base'>
      <div className='flex border-e border-s-[#E5E2E2] pe-6 items-center h-full'>
        <span className='me-2'>{phone_number}</span>
        <TellIcon />
      </div>
      <div className='flex ps-6 items-center'>
        <span className='me-2'>{instagram_id}</span>
        <InstagramIcon />
      </div>
    </div>
  )
}