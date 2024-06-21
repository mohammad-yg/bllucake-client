import { Settings } from '@/apis'
import React, { FC } from 'react'
import { LayoutHeader } from './views/header/LayoutHeader'
import { LayoutSidebar } from './views/sidebar/LayoutSidebar'
import { LayoutFooter } from './views/footer/LayoutFooter'

type Props = {
    currentUser?: {
        image: string | null
    }
    appSettings: Settings,
    orderCount?: number,
    children?: Readonly<React.ReactNode>
}

export const Layout: FC<Props> = ({ appSettings, orderCount, children, currentUser }) => {
    return (
        <div className='flex h-full'>
            <LayoutSidebar />
            <div className='flex flex-col h-full justify-between w-full'>
                <div className='w-full'>
                    <LayoutHeader appSettings={appSettings} orderCount={orderCount} currentUser={currentUser} />
                    <div>
                        {children}
                    </div>
                </div>
                <LayoutFooter appSettings={appSettings} />
            </div>
        </div>
    )
}
