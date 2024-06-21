import { Settings } from '@/apis'
import React, { FC } from 'react'
import { LayoutHeaderSearchBox } from './views/LayoutHeaderSearchBox'
import { LayoutHeaderSocials } from './views/LayoutHeaderSocials'
import { LayoutHeaderAvatarAndCard } from './views/LayoutHeaderAvatarAndCard'

type Props = {
    currentUser?: {
        image: string | null
    }
    appSettings: Settings,
    orderCount?: number
}

export const LayoutHeader: FC<Props> = ({ appSettings, orderCount, currentUser }) => {
    return (
        <div className='h-[117px] flex justify-between items-center p-4'>
            <div className='w-full max-w-[572px]'>
                <LayoutHeaderSearchBox />
            </div>
            <div className='flex items-center'>
                <LayoutHeaderSocials {...appSettings} />
                <LayoutHeaderAvatarAndCard currentUser={currentUser} orderCount={orderCount} />
            </div>
        </div>
    )
}
