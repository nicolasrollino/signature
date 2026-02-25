import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

function conditionColor(condition: string) {
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

function categoryLabel(category: string) {
  switch (category) {
    case "iphone":
      return "iPhone"
    case "samsung":
      return "Samsung"
    case "ipad":
      return "iPad"
    case "macbook":
      return "MacBook"
    case "apple-watch":
      return "Apple Watch"
    case "airpods":
      return "AirPods"
    case "playstation":
      return "PlayStation"
    default:
      return category
  }
}

export function ProductCard({ product }: { product: Product }) {
  const inStock = product.stock > 0

  return (
    <Link
      href={`/producto/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* BADGES */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">

          {/* categoria */}
          <span className="inline-flex rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
            {categoryLabel(product.category)}
          </span>

          {/* condicion */}
          <span
            className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${conditionColor(
              product.condition
            )}`}
          >
            {product.condition}
          </span>

        </div>

        {/* SIN STOCK */}
        {!inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/70">
            <span className="rounded-lg bg-destructive/90 px-4 py-2 text-sm font-semibold text-destructive-foreground">
              Sin stock
            </span>
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* stock info */}
        {inStock && product.stock === 1 && (
          <span className="text-xs font-semibold text-amber-500">
            Última unidad
          </span>
        )}

        <div className="mt-auto flex items-end justify-between">
          <p className="text-xl font-bold text-foreground">
            USD {product.price.toLocaleString("es-AR")}
          </p>

          <span
            className={`text-xs font-medium ${
              inStock ? "text-primary" : "text-destructive"
            }`}
          >
            {inStock
              ? `${product.stock} disponible${product.stock > 1 ? "s" : ""}`
              : "Agotado"}
          </span>
        </div>
      </div>
    </Link>
  )
}
