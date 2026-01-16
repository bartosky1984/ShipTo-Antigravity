import { ClipboardList, RefreshCw, CheckCircle2 } from 'lucide-react'

const steps = [
    {
        icon: ClipboardList,
        title: "1. Publica tu envío",
        description: "Dinos qué necesitas mover y a dónde debe ir usando nuestro sencillo formulario.",
        color: "blue"
    },
    {
        icon: RefreshCw,
        title: "2. Recibe presupuestos",
        description: "Recibe ofertas competitivas de transportistas calificados en minutos por email.",
        color: "blue"
    },
    {
        icon: CheckCircle2,
        title: "3. Elige y Ahorra",
        description: "Selecciona la mejor oferta basada en precio y reseñas, luego reserva online de forma segura.",
        color: "blue"
    }
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Cómo Funciona ShipBridge International</h2>
                <p className="text-lg text-gray-500 mb-16">Sencillo, rápido y seguro. Emparejamiento de envíos en tres pasos.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-500 max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
