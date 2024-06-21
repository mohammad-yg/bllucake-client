import { Settings } from '@/apis'
import React, { FC } from 'react'
import Link from 'next/link'
import { LayoutFooterInstagramIcon } from './views/LayoutFooterInstagramIcon'
import { LayoutFooterTelegramIcon } from './views/LayoutFooterTelegramIcon'
import { LayoutFooterWhatsAppIcon } from './views/LayoutFooterWhatsAppIcon'


type Props = {
    appSettings: Settings,
}

export const LayoutFooter: FC<Props> = ({ appSettings }) => {
    return (
        <div className={'h-[86px] w-full bg-[#154160] rounded-tl-xl flex items-center justify-end px-[32px] [&>a]:ms-[24px]'}>
            <Link href={appSettings.instagram}>
                <LayoutFooterInstagramIcon />
            </Link>
            <Link href={appSettings.telegram}>
                <LayoutFooterTelegramIcon />
            </Link>
            <Link href={appSettings.whatsapp}>
                <LayoutFooterWhatsAppIcon />
            </Link>
        </div>
    )
}
