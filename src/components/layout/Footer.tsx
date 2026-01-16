import { Package2, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <Package2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Shipto</span>
                        </Link>
                        <p className="text-sm text-gray-500 mb-6">
                            La forma más inteligente de enviar cualquier cosa, a cualquier lugar. Ahorra tiempo y dinero con nuestra red de transportistas verificados.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Empresa</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-blue-600">Sobre Nosotros</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Cómo Funciona</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Empleo</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Prensa</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Soporte</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-blue-600">Centro de Ayuda</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Contacto</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Confianza y Seguridad</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Términos y Privacidad</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Transportistas</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-blue-600">Únete como Transportista</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Historias de Éxito</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">App para Transportistas</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">© 2026 Shipto. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-gray-400 hover:text-blue-600"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="text-gray-400 hover:text-blue-600"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="text-gray-400 hover:text-blue-600"><Instagram className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
