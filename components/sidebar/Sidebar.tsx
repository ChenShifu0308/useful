import { SearchIcon } from '@heroicons/react/outline';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import sidebarData from '../../public/sidebar.json';

/* TODO: 大屏幕放在左边，小屏幕作为左侧侧边栏伸缩 */

export default function Sidebar() {
    const { systemTheme, theme: menuTheme, setTheme } = useTheme();
    const { t } = useTranslation()

    const router = useRouter()
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e.key);
        /* TODO: 先检查目标页面是否存在 */
        router.push(`/items/${e.key}`)
    };

    /* Items */
    const items: MenuProps['items'] = constructMemuItems(sidebarData as SideBarData[], t);

    return (
        <div className='hidden md:flex flex-col w-56 border-r border-neutral-200 dark:border-neutral-700'>
            {/* Search Bar */}
            <div className="flex h-8 after:items-center p-2 rounded-full relative m-2 ">
                <SearchIcon className="h-4 z-50 text-gray-500 dark:text-gray-200" />
                <input
                    className=" text-sm absolute inset-0 rounded-full pl-8 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100
                     dark:bg-gray-700 dark:text-gray-200 dark:focus:bg-gray-700 dark:focus:shadow-lg "
                    type="text"
                    placeholder="Search Something Cool"
                />
            </div>
            {/* Menus - 内容可以用json配置，便于之后修改*/}
            {/* 可以用antd的menu来做 https://ant.design/components/menu-cn */}
            <Menu
                onClick={onClick}
                theme={menuTheme === 'dark' ? 'dark' : 'light'}
                style={{ width: 220 }}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
    )
}

type MenuItem = Required<MenuProps>['items'][number];

type SideBarData = {
    label: string;
    key: string;
    children: SideBarData[];
}

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

function constructMemuItems(sidebarData: SideBarData[], t: Function): MenuItem[] | undefined {
    if (sidebarData == null) return undefined;
    const items: MenuItem[] = [];
    sidebarData.forEach((item) => {
        items.push(getItem(t(item.label), item.key, null, constructMemuItems(item.children, t)));
    });
    return items;
}
