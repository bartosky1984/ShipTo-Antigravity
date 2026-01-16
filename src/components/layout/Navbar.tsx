'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { Package2 } from 'lucide-react'

export function Navbar() {
    const [user, setUser] = useState<any>(null)
    const supabase = createClient()

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }
        getUser()

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [supabase.auth])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-indigo-600 p-1 rounded-lg">
                                <Package2 className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-bold text-slate-900 tracking-tight">ShipBridge</span>
                                <span className="text-[9px] uppercase tracking-widest font-bold text-indigo-600">International</span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="#how-it-works" className="text-[13px] font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Cómo Funciona</Link>
                        <Link href="#transporters" className="text-[13px] font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Para Transportistas</Link>

                        {user ? (
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/dashboard">Panel</Link>
                            </Button>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link href="/login" className="text-[13px] font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Entrar</Link>
                                <Button size="sm" asChild className="h-9 px-4 rounded-xl">
                                    <Link href="/signup">Registrarse</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
