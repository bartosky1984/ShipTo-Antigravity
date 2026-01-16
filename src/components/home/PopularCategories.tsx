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
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Categorías Populares</h2>
                    <p className="text-gray-500">Mira el ahorro medio para nuestros tipos de envío más comunes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                                <cat.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-1">{cat.title}</h3>
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-gray-900">Desde ${cat.price}</span>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">Ahorro Medio en Precio</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" className="w-full rounded-2xl">Pedir Presupuesto</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
