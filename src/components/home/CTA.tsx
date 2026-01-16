import { Button } from '@/components/ui/Button'

export function CTA() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-50 rounded-[40px] p-8 md:p-16 text-center overflow-hidden relative">
                    {/* Decorative backgrounds */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -ml-32 -mb-32" />

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
                        ¿Listo para ahorrar en tu envío?
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
                        Únete a miles de clientes que ya han ahorrado dinero usando la tecnología avanzada de ShipBridge International.
                    </p>

                    <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
                        <input
                            type="text"
                            placeholder="¿Qué quieres mover?"
                            className="flex-1 px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                        <Button size="lg" className="rounded-2xl">Siguiente Paso</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
