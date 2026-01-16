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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <Package2 className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-bold text-gray-900">ShipBridge</span>
                                <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-600">International</span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Cómo Funciona</Link>
                        <Link href="#transporters" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Para Transportistas</Link>

                        {user ? (
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/dashboard">Panel de Control</Link>
                            </Button>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-blue-600">Entrar</Link>
                                <Button size="sm" asChild>
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
