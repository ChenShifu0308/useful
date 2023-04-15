import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

/* 大屏幕放在左边，小屏幕作为左侧侧边栏伸缩 */
export default function Sidebar() {
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
        </div>
    )
}
