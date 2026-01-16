import { Button } from '@/components/ui/Button'
import { Armchair, Car, Home, Check } from 'lucide-react'

const categories = [
    {
        title: "Envío de Muebles",
        price: "45",
        icon: Armchair,
        items: ["Sofás y Camas", "Tablas y Sillas", "Electrodomésticos"]
    },
    {
        title: "Transporte de Vehículos",
        price: "120",
        icon: Car,
        items: ["Coches y Motos", "Barcos y Yates", "Caravanas"]
    },
    {
        title: "Mudanzas",
        price: "250",
        icon: Home,
        items: ["Pisos de 1 hab", "Casas de 3 hab", "Mudanzas de Oficina"]
    }
]

export function PopularCategories() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Categorías Populares</h2>
                    <p className="text-slate-500 text-sm">Mira el ahorro medio para nuestros tipos de envío más comunes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-slate-50/50 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 border border-slate-100 group hover:bg-white">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                                <cat.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-1">{cat.title}</h3>
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-slate-900 tracking-tight">Desde ${cat.price}</span>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ahorro Medio en Precio</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[13px] text-slate-600 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" className="w-full rounded-2xl border-slate-200 text-slate-700 font-bold hover:bg-white">Pedir Presupuesto</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
