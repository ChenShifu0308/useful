import React from 'react'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl flex flex-col">
                <div className='h-56 w-full text-lg border-slate-950 border-y border-x'>HEADER</div>
                <div className="grid grid-cols-4 h-full">
                    <Sidebar />
                    <div className="col-span-3  border-x-[1px]   border-neutral-800  ">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
