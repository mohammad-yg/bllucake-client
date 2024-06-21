'use client'
import { ActivateIcon } from '@/components/icons/interfaces'
import Image from 'next/image'
import React, { ComponentType, useEffect, useState } from 'react'
import { LayoutSidebarHomeIcon } from './views/LayoutSidebarHomeIcon'
import { LayoutSidebarElementIcon } from './views/LayoutSidebarElementIcon'
import { LayoutSidebarTellIcon } from './views/LayoutSidebarTellIcon'
import { LayoutSidebarMessageQuestionIcon } from './views/LayoutSidebarMessageQuestionIcon'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'

type NavbarItem = {
  link: string,
  icon: ComponentType<ActivateIcon>,
  isActive: boolean
}

const initialNavbarItems: NavbarItem[] = [
  {
    isActive: false,
    icon: LayoutSidebarHomeIcon,
    link: '/'
  },
  {
    isActive: false,
    icon: LayoutSidebarElementIcon,
    link: '/category'
  },
  {
    isActive: false,
    icon: LayoutSidebarTellIcon,
    link: '/contact-us'
  },
  {
    isActive: false,
    icon: LayoutSidebarMessageQuestionIcon,
    link: '/about-us'
  },
]

export const LayoutSidebar = () => {
  const [navbarItems, setNavbarItems] = useState<NavbarItem[]>(initialNavbarItems);
  const pathName = usePathname();

  useEffect(() => {
    setNavbarItems(prev => {
      const newState = prev.map((_, i) => ({ ..._, isActive: _.link === pathName }));
      return newState
    })
  }, [pathName])


  return (
    <div className='w-[118px] flex flex-col items-center border-e border-[#F0F0F0]' >
      <div className='mt-[22px] mb-[20px]'>
        <Image
          className='w-[80px] h-[80px]'
          src={'/medias/logo.png'}
          alt={'bllucake logo'}
          width={80}
          height={80} />
      </div>

      {
        navbarItems.map((_, index) => (
          <Link
            href={_.link}
            key={index}>
            <div
              className={clsx('flex justify-center items-center rounded-full mb-[48px] shadow-md shadow-slate-300', _.isActive ?
                'bg-[#154160] w-[56px] h-[56px]' :
                'bg-[#F5F5F5] w-[48px] h-[48px]')}>
              <_.icon active={_.isActive} />
            </div>
          </Link>
        ))
      }
    </div>
  )
}
