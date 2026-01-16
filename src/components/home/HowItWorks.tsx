import { ClipboardList, RefreshCw, CheckCircle2, ChevronDown, ShieldCheck, Award, TrendingDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const steps = [
    {
        icon: ClipboardList,
        title: "Pasifica tu envío (gratis)",
        description: "Dinos qué necesitas mover y a dónde debe ir. Toma menos de un minuto y nos ayuda a emparejarte con los expertos adecuados.",
        image: "/step1_laptop_post_delivery_1768578067252.png",
        step: "PASO 1"
    },
    {
        icon: RefreshCw,
        title: "Recibe presupuestos",
        description: "Transportistas verificados pujan por tu envío. Mira cómo llegan las ofertas y compara precios al instante.",
        image: "/step2_receive_quotes_1768578082250.png",
        step: "PASO 2"
    },
    {
        icon: CheckCircle2,
        title: "Elige proveedor y ahorra",
        description: "Selecciona al mejor proveedor basado en reseñas reales y precio. Reserva de forma segura y rastrea tu envío.",
        image: "/step3_truck_delivery_1768578094630.png",
        step: "PASO 3"
    }
]

const faqs = [
    {
        question: "¿Es realmente gratis publicar un envío?",
        answer: "Sí, publicar tu envío en ShipBridge International es completamente gratuito y no conlleva obligaciones. Solo pagas cuando eliges a un transportista y decides reservar."
    },
    {
        question: "¿Cómo se verifican los transportistas?",
        answer: "Todos los transportistas pasan por una rigurosa verificación de documentos, incluyendo licencias de transporte, seguros de carga y antecedentes. Además, mantenemos un sistema de reseñas reales de clientes anteriores."
    },
    {
        question: "¿Qué pasa si mi artículo se daña?",
        answer: "Ofrecemos opciones de seguros de carga premium que cubren tus artículos desde la recogida hasta la entrega. Te recomendamos revisar el nivel de cobertura de cada transportista en su presupuesto."
    },
    {
        question: "¿Cómo pago al transportista?",
        answer: "Ofrecemos un sistema de pago seguro a través de nuestra plataforma. Puedes pagar con tarjeta o transferencia. El pago se retiene de forma segura y solo se libera al transportista una vez que confirmas la entrega satisfactoria."
    }
]

export function HowItWorks() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div className="bg-slate-50/50">
            {/* Steps Section */}
            <section id="how-it-works" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Cómo Funciona ShipBridge</h2>
                    <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
                        Hemos simplificado el proceso de envío para hacerlo más rápido, seguro y económico para todos.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={cn(
                                "relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
                                index % 2 !== 0 && "md:flex-row-reverse"
                            )}>
                                {/* Circle Icon */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center z-10 shadow-sm transition-transform hover:scale-110">
                                    {index === 0 ? (
                                        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                                            <step.icon className="w-5 h-5" />
                                        </div>
                                    ) : (
                                        <span className="text-xl font-bold text-indigo-600">{index + 1}</span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 w-full md:w-1/2 pt-20 md:pt-0">
                                    <div className={cn(
                                        "bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300",
                                        index % 2 === 0 ? "md:text-left" : "md:text-left"
                                    )}>
                                        <span className="text-indigo-600 text-[10px] font-bold tracking-widest block mb-2">{step.step}</span>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed mb-6">{step.description}</p>
                                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100">
                                            <img src={step.image} alt={step.title} className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">¿Por qué elegir ShipBridge?</h2>
                            <p className="text-slate-500 text-sm">Somos más que un mercado. Somos tu socio en envíos seguros, confiables y económicos.</p>
                        </div>
                        <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 text-xs gap-1 group">
                            Saber más sobre seguridad <ChevronDown className="w-3 h-3 -rotate-90 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 font-bold">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3">Conductores Verificados</h3>
                            <p className="text-[13px] text-slate-500 leading-relaxed">Cada conductor pasa una estricta verificación de antecedentes, validación de licencias y seguros de carga.</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold">
                                <Award className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3">Seguro a Todo Riesgo</h3>
                            <p className="text-[13px] text-slate-500 leading-relaxed">Tus artículos están cubiertos en cada paso del camino con nuestros planes de protección de carga premium.</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 font-bold">
                                <TrendingDown className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3">Mejor Precio Garantizado</h3>
                            <p className="text-[13px] text-slate-500 leading-relaxed">Encontramos o mejoramos las tarifas del mercado. Ahorra hasta un 75% comparado con servicios estándar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center tracking-tight">Preguntas Frecuentes</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
                                >
                                    <span className="font-semibold text-slate-900 text-sm">{faq.question}</span>
                                    <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform duration-300", openFaq === i && "rotate-180")} />
                                </button>
                                <div className={cn(
                                    "px-6 overflow-hidden transition-all duration-300",
                                    openFaq === i ? "max-h-40 pb-5" : "max-h-0"
                                )}>
                                    <p className="text-[13px] text-slate-500 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-indigo-600 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700/30 rounded-full blur-3xl -ml-48 -mb-48" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">¿Listo para mover tus artículos?</h2>
                        <p className="text-indigo-100 text-base md:text-lg mb-10 max-w-xl mx-auto opacity-90">
                            Únete a miles de clientes satisfechos que encontraron al transportista perfecto en ShipBridge hoy.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-indigo-50 border-none px-10">
                                Empezar ahora (Gratis)
                            </Button>
                            <Button size="lg" variant="outline" className="border-indigo-400 text-white hover:bg-indigo-700/50 px-10">
                                Ver Transportistas
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
