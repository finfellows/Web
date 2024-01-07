'use client';
import React from 'react';
import Link from 'next/link';

type TMenuItemProps = {
  menuItem: {
    name: string;
    href: string;
    subMenu?: { name: string; href: string }[];
  };
  activeMenu?: string | null;
  handleMenuHover?: (menuName: string) => void;
  handleMenuLeave?: () => void;
};

type TMenuItems = {
  name: string;
  href: string;
  subMenu?: TMenuItems[];
};

export const menuItems: TMenuItems[] = [
  {
    name: '서비스 소개',
    href: '/introduction',
    subMenu: [
      { name: '서비스 소개', href: '#' },
      { name: '공지사항', href: '#' },
    ],
  },
  {
    name: '금융, 뭐하지?',
    href: '/whatToDo',
    subMenu: [
      { name: '예금', href: '#' },
      { name: '적금', href: '#' },
      { name: 'CMA', href: '#' },
    ],
  },
  {
    name: '금융, 배우자!',
    href: '/learnWithUs',
    subMenu: [
      { name: '금융 교육', href: '#' },
      { name: '금융 뉴스', href: '#' },
    ],
  },
  { name: '금융, 고마워!', href: '/thankYou', subMenu: [{ name: '청년 금융 정책', href: '#' }] },
];

const MenuItem = ({ menuItem, activeMenu, handleMenuHover, handleMenuLeave, ...props }: TMenuItemProps) => {
  return (
    <div
      {...props}
      className={
        'mb-7 tablet:p-10 tablet:mr-10 text-black transition-all relative active:text-main hover:text-main z-header'
      }
      onMouseEnter={() => handleMenuHover && handleMenuHover(menuItem.name)}
      onMouseLeave={handleMenuLeave && (() => handleMenuLeave())}
    >
      <Link className=' tablet:text-18 tablet:min-w-max whitespace-nowrap ' href={menuItem.href}>
        {menuItem.name}
      </Link>
      {/* 서브 메뉴 */}
      {activeMenu === menuItem.name && menuItem.subMenu && (
        <ul className='hidden tablet:block shadow-lg rounded-tl-0 rounded-xl w-120 absolute  left-0 px-10 pt-10 pb-5 text-center font-pretendard bg-white'>
          {menuItem.subMenu.map((subItem) => (
            <li
              className=' mb-10  box-border flex-nowrap gap-10 text-16 text-primary font-semibold '
              key={subItem.name}
            >
              <Link href={subItem.href}>{subItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
