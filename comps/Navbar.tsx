"use client"

import * as React from "react"
import Link from "./link"
import {Menu} from 'lucide-react'
import "../app/globals.css"

import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger,} from "@/components/ui/sheet"
import {Separator} from "@/components/ui/separator"

const navItems = [
    {name: "Dashboard", href: "/"},
    {name: "IPD", href: "/ipd"},
    {name: "Appointments", href: "/appointments"},
    {name: "Inventory", href: "/inventory"},
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="bg-background sticky text-white top-0 z-40 w-full border-b px-20 bg-slate-800">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="h-6 w-6 rounded-full bg-primary"/>
                        <span className="font-bold">medREST</span>
                    </Link>
                    <Separator orientation="vertical" className="mx-4 h-6 hidden md:flex"/>
                    <div className="hidden md:flex md:items-center md:gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium transition-colors text-gray-400 hover:text-white"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Button className="hidden md:flex bg-white text-black hover:bg-black hover:text-white">New Appointment</Button>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost"
                                    className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                                <Menu className="h-6 w-6"/>
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0">
                            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                                <span className="h-6 w-6 rounded-full bg-primary"/>
                                <span className="font-bold">MedREST</span>
                            </Link>
                            <Separator className="my-4"/>
                            <div className="flex flex-col space-y-3">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-2 py-1 text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link href="/appointments/new" onClick={() => setIsOpen(false)}
                                      className="block px-2 py-1 text-lg">
                                    New Appointment
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}


