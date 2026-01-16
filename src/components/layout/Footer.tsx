import { Package2, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-indigo-600 p-1.5 rounded-lg">
                                <Package2 className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-bold text-slate-900 tracking-tight">ShipBridge</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600">International</span>
                            </div>
                        </Link>
                        <p className="text-[13px] text-slate-500 mb-6 leading-relaxed">
                            La forma más inteligente de enviar cualquier cosa, a cualquier lugar. Ahorra tiempo y dinero con nuestra red de transportistas verificados.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm">Empresa</h4>
                        <ul className="space-y-4 text-[13px] text-slate-500">
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Cómo Funciona</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Empleo</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Prensa</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm">Soporte</h4>
                        <ul className="space-y-4 text-[13px] text-slate-500">
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Centro de Ayuda</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Contacto</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Confianza y Seguridad</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Términos y Privacidad</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm">Transportistas</h4>
                        <ul className="space-y-4 text-[13px] text-slate-500">
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Únete como Transportista</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">Historias de Éxito</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600 transition-colors">App para Transportistas</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[12px] font-medium text-slate-400">© 2026 ShipBridge International. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Instagram className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
