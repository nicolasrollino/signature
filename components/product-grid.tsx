"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { products, categories } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

function sectionSubtitle(categoryId: string) {
  switch (categoryId) {
    case "iphone":
      return "Modelos nuevos y usados verificados."
    case "samsung":
      return "Gama A y S, listo para usar."
    case "ipad":
      return "Para estudiar, laburar y entretenimiento."
    case "macbook":
      return "Potencia y portabilidad para todo."
    case "playstation":
      return "Consolas para jugar al máximo."
    default:
      return "Elegí el que más te guste."
  }
}

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">(
    "default"
  )
  const [showFilters, setShowFilters] = useState(false)

  const categorySections = useMemo(
    () => categories.filter((c) => c.id !== "todos"),
    []
  )

  const filteredProducts = useMemo(() => {
    let result =
      activeCategory === "todos"
        ? products
        : products.filter((p) => p.category === activeCategory)

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price)
    }

    return result
  }, [activeCategory, searchQuery, sortBy])

  const groupedByCategory = useMemo(() => {
    const map = new Map<string, typeof products>()
    for (const p of filteredProducts) {
      const arr = map.get(p.category) ?? []
      arr.push(p)
      map.set(p.category, arr)
    }
    return map
  }, [filteredProducts])

  return (
    <section id="productos" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="mb-8 flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Nuestros productos
        </h2>

        {/* Search bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-secondary pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Limpiar busqueda"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex h-10 items-center gap-2 rounded-lg border border-border bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-border sm:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="h-10 rounded-lg border border-border bg-secondary px-3 text-sm text-secondary-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="default">Ordenar</option>
              <option value="price-asc">Menor precio</option>
              <option value="price-desc">Mayor precio</option>
            </select>
          </div>
        </div>

        {/* Category filters */}
        <div
          className={`flex flex-wrap gap-2 ${
            showFilters ? "flex" : "hidden sm:flex"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-secondary text-muted-foreground hover:bg-border hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENIDO */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-20">
          <Search className="h-10 w-10 text-muted-foreground" />
          <p className="text-lg font-medium text-foreground">
            No se encontraron productos
          </p>
          <p className="text-sm text-muted-foreground">
            Intenta con otro termino de busqueda o categoria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("")
              setActiveCategory("todos")
            }}
            className="mt-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Ver todos los productos
          </button>
        </div>
      ) : activeCategory === "todos" ? (
        // ✅ SECCIONES POR CATEGORÍA CON BANNER
        <div className="space-y-12">
          {categorySections.map((cat) => {
            const items = groupedByCategory.get(cat.id) ?? []
            if (items.length === 0) return null

            // Mostramos 6 por sección (podés bajar a 4 si querés)
            const preview = items.slice(0, 6)

            return (
              <div key={cat.id} className="space-y-4">
                {/* BANNER */}
                <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        {cat.label}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {sectionSubtitle(cat.id)}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90"
                    >
                      Ver todos
                    </button>
                  </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {preview.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        // ✅ GRID NORMAL PARA UNA CATEGORÍA ESPECÍFICA
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
