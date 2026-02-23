import { Shield, Truck, RefreshCcw, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Garantia incluida",
    description:
      "Todos nuestros productos incluyen garantia. 6 meses para usados, 12 meses para nuevos.",
  },
  {
    icon: Truck,
    title: "Envio a todo el pais",
    description:
      "Envios a toda la Argentina por correo o moto mensajeria. Retiro en sucursal disponible.",
  },
  {
    icon: RefreshCcw,
    title: "Devolucion 72hs",
    description:
      "Si el producto no cumple con lo descrito, podes devolverlo dentro de las primeras 72 horas.",
  },
  {
    icon: Headphones,
    title: "Soporte personalizado",
    description:
      "Atencion directa por WhatsApp para resolver cualquier duda antes y despues de tu compra.",
  },
]

export function GuaranteeSection() {
  return (
    <section id="garantia" className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Compra segura
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tu tranquilidad es nuestra prioridad
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
