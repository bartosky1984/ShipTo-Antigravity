import { Button } from '@/components/ui/Button'
import { Search, MapPin, Package, Star, ShieldCheck, ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Background Image with Overlay */}
            <div className="absolute inset-x-0 top-0 bottom-0 md:left-1/2 z-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                    style={{ backgroundImage: 'url("/hero_delivery_1768578052827.png")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent hidden md:block" />
                <div className="absolute inset-0 bg-white/60 md:hidden" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-2xl text-center md:text-left">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-bold tracking-widest mb-6 border border-indigo-100">
                        SIMPLE & SEGURO
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Envíos hechos <br />
                        <span className="text-indigo-600 italic">simples</span>
                    </h1>

                    <p className="text-[17px] text-slate-500 max-w-lg mb-10 leading-relaxed font-medium">
                        Ya sea que muevas un sofá o un auto, conecta con miles de transportistas verificados al instante y ahorra hasta un 75%.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <span className="text-[13px] font-semibold text-slate-500">4.9/5 basado en 10k+ reseñas</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="px-10 rounded-2xl shadow-lg shadow-indigo-200">
                            Obtener Presupuesto
                        </Button>
                        <Button size="lg" variant="outline" className="px-10 rounded-2xl bg-white border-slate-200">
                            Ver Transportistas
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
