import React from 'react'
import Sidebar from './Sidebar'
import Header from './header/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl flex flex-col">
                <Header />
                <div className="flex h-full">
                    <Sidebar />
                    <div className="">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
