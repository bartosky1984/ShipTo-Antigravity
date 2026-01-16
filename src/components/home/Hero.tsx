import { Button } from '@/components/ui/Button'
import { Search, MapPin, Package, Star, ShieldCheck, ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000"
                style={{
                    backgroundImage: 'url("/hero-bg.png")',
                }}
            >
                <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
                    Envía lo que quieras, a donde quieras.<br />
                    <span className="text-blue-400">Por menos.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
                    Conecta con miles de transportistas calificados y ahorra hasta un 75% en costos de envío.
                </p>

                {/* Search Bar / CTA Box */}
                <div className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl animate-fade-in-up delay-200">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative group">
                            <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                            <input
                                type="text"
                                placeholder="¿Qué quieres enviar?"
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                        </div>

                        <div className="flex-1 relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Código postal de origen"
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                        </div>

                        <div className="flex-1 relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Código postal de destino"
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                        </div>

                        <Button className="md:w-48 h-14 group">
                            Presupuesto Gratis
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fade-in-up delay-300">
                    <div className="glass-morphism px-4 py-2 rounded-full flex items-center gap-2">
                        <div className="bg-yellow-400 p-1 rounded-full">
                            <Star className="w-3 h-3 text-black fill-black" />
                        </div>
                        <span className="text-sm font-medium">Calificado con 4.9/5 por usuarios</span>
                    </div>

                    <div className="glass-morphism px-4 py-2 rounded-full flex items-center gap-2">
                        <div className="bg-green-500 p-1 rounded-full">
                            <ShieldCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-medium">Transportistas Verificados</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
