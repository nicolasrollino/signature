"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Como se realiza el pago?",
    answer:
      "Aceptamos Transferencia bancaria, Mercado Pago, efectivo y criptomonedas (USDT). Los precios estan publicados en USD y se convierte al tipo de cambio del dia al momento de la compra.",
  },
  {
    question: "Puedo probar el producto antes de comprarlo?",
    answer:
      "Por supuesto. Si estas en Cordoba, podes coordinar una visita para probar el producto en persona antes de realizar la compra.",
  },
  {
    question: "Que significa cada condicion de producto?",
    answer:
      "Nuevo: producto sellado de fabrica. Usado - Como nuevo: sin marcas visibles, funciona perfectamente. Usado - Muy bueno: minimas marcas de uso, perfecto funcionamiento. Usado - Bueno: marcas visibles de uso pero funciona correctamente.",
  },
  {
    question: "Hacen permutas o toman equipos a cuenta?",
    answer:
      "Si, tomamos equipos Apple como parte de pago. Contactanos por WhatsApp con los detalles de tu equipo para hacerte una cotizacion.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Resolvemos tus dudas mas comunes
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="border-t border-border px-5 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
