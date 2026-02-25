import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, MessageCircle, Shield, Truck } from "lucide-react"
import { getProductById, products } from "@/lib/products"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

const WHATSAPP_NUMBER = "5493515297636"

// 👇 Esto ayuda a que OpenGraph use URLs absolutas correctamente
const SITE_URL = "https://signaturecba.vercel.app"

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return { title: "Producto no encontrado" }

  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : `${SITE_URL}${product.image}`

  return {
    metadataBase: new URL(SITE_URL),
    title: `${product.name} - Signature`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Signature`,
      description: product.description,
      url: `${SITE_URL}/producto/${product.id}`,
      images: [{ url: imageUrl }],
      type: "website",
    },
  }
}

function conditionColor(condition: string): string {
  switch (condition) {
    case "Nuevo":
      return "bg-green-500/15 text-green-400 border border-green-500/30"

    case "Usado - Como nuevo":
      return "bg-blue-500/15 text-blue-400 border border-blue-500/30"

    case "Usado - Muy bueno":
      return "bg-amber-500/15 text-amber-400 border border-amber-500/30"

    case "Usado - Bueno":
      return "bg-orange-500/15 text-orange-400 border border-orange-500/30"

    default:
      return "bg-muted text-muted-foreground"
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()

  const inStock = product.stock > 0

  // ✅ Mensaje WhatsApp más "cerrador"
  const whatsappMessage = encodeURIComponent(
    `Hola! Quiero el ${product.name} (USD ${product.price}).\n` +
      `Condición: ${product.condition}.\n` +
      `Stock: ${product.stock}.\n\n` +
      `¿Lo puedo retirar hoy? ¿Qué medios de pago aceptan?`
  )
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <Link
            href="/#productos"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a productos
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-secondary">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-4 top-4">
                <span
                  className={`inline-flex rounded-md px-3 py-1.5 text-xs font-medium ${conditionColor(
                    product.condition
                  )}`}
                >
                  {product.condition}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {product.category === "playstation"
                    ? "PlayStation"
                    : product.category.charAt(0).toUpperCase() +
                      product.category.slice(1)}
                </p>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">
                  {"USD "}
                  {product.price.toLocaleString("es-AR")}
                </span>

                <span
                  className={`text-sm font-medium ${
                    inStock ? "text-primary" : "text-destructive"
                  }`}
                >
                  {inStock ? `${product.stock} en stock` : "Sin stock"}
                </span>
              </div>

              {/* ✅ Entrega inmediata */}
              {inStock && (
                <p className="text-sm font-medium text-green-500">
                  ✅ Entrega inmediata
                </p>
              )}

              <p className="leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Specs */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Especificaciones
                </h3>
                <ul className="flex flex-col gap-2">
                  {product.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ Qué incluye */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  ¿Qué incluye?
                </h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    Equipo
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    Caja (si aplica)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    Cable / cargador (consultar según modelo)
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar por WhatsApp
              </a>

              {/* ✅ Botón volver (para no scrollear) */}
              <Link
                href="/#productos"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                Ver más productos
              </Link>

            {/* Info */}
<div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
  <div className="flex items-center gap-3 text-sm text-muted-foreground">
    <Check className="h-4 w-4 text-primary" />
     Entrega en Córdoba Capital
  </div>

  <div className="flex items-center gap-3 text-sm text-muted-foreground">
    <Check className="h-4 w-4 text-primary" />
    Equipos originales y verificados
  </div>

  <div className="flex items-center gap-3 text-sm text-muted-foreground">
    <Check className="h-4 w-4 text-primary" />
    Se puede probar al momento de la entrega
  </div>

  <div className="flex items-center gap-3 text-sm text-muted-foreground">
    <Check className="h-4 w-4 text-primary" />
    Coordinación por WhatsApp
  </div>
</div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
