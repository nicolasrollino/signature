import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo-signature.png"
              alt="Signature"
              width={560}
              height={140}
              className="h-32 w-auto brightness-0 invert"
            />
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
