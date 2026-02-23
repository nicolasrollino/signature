import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
            Signa<span className="text-primary">ture</span>
          </Link>
          <p className="mt-1 text-xs text-muted-foreground">
            Tecnologia premium al mejor precio
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
          <Link href="/#productos" className="hover:text-foreground transition-colors">Productos</Link>
          <Link href="/#garantia" className="hover:text-foreground transition-colors">Garantia</Link>
          <Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          {'2026 Signature. Todos los derechos reservados.'}
        </p>
      </div>
    </footer>
  )
}
