import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu } from 'antd';
import { useTheme } from 'next-themes';

/* 大屏幕放在左边，小屏幕作为左侧侧边栏伸缩 */
export default function Sidebar() {
    const { systemTheme, theme: menuTheme, setTheme } = useTheme();
    // const [menuTheme, setMenuTheme] = useState<MenuTheme>(theme === 'dark' ? 'dark' : 'light');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    /* Test items */
    const items: MenuProps['items'] = [
        { type: 'divider' },
        getItem('Developer Tools', 'dev_tools', <AppstoreOutlined />, [
            getItem('Converters', 'sub1'),
            getItem('Encode&Decode', 'sub2'),
            getItem('Formatters', 'sub3', null, [getItem('Json', 'json'), getItem('XML', 'xml')]),
        ]),
        getItem('Navigation Three', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
          ]),
    ];

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
                style={{ width: 220  }}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
    )
}

type MenuItem = Required<MenuProps>['items'][number];

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