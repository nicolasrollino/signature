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

    case "playstation":
      return "PlayStation"

    default:
      return category
  }
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* BADGES */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">

          {/* categoria */}
          <span className="inline-flex rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {categoryLabel(product.category)}
          </span>

          {/* condicion */}
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${conditionColor(
              product.condition
            )}`}
          >
            {product.condition}
          </span>

        </div>

        {/* gradient premium */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/15 to-transparent" />
      </div>

      {/* INFO */}
      <div className="flex flex-1 flex-col gap-2 p-4">

        <h3 className="line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
          {product.name}
        </h3>

        <p className="text-xl font-bold text-foreground">
          USD {product.price.toLocaleString("es-AR")}
        </p>

      </div>
    </Link>
  )
}
