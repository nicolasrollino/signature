export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  condition: "Nuevo" | "Usado - Como nuevo" | "Usado - Muy bueno" | "Usado - Bueno"
  stock: number
  description: string
  specs: string[]
}

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "iphone", label: "iPhone" },
  { id: "macbook", label: "MacBook" },
  { id: "ipad", label: "iPad" },
  { id: "apple-watch", label: "Apple Watch" },
  { id: "airpods", label: "AirPods" },
  { id: "playstation", label: "PlayStation" },
  { id: "accesorios", label: "Accesorios" },
]

export const products: Product[] = [
  {
    id: "iphone-15-pro-max-256",
    name: "iPhone 15 Pro Max 256GB",
    category: "iphone",
    price: 1099,
    image: "/images/iphone-15-pro.jpg",
    condition: "Usado - Como nuevo",
    stock: 3,
    description:
      "iPhone 15 Pro Max en excelente estado. Titanio Natural, pantalla Super Retina XDR de 6.7 pulgadas, chip A17 Pro, sistema de camara triple de 48MP. Incluye caja original y cable.",
    specs: [
      "Pantalla: 6.7\" Super Retina XDR",
      "Chip: A17 Pro",
      "Almacenamiento: 256GB",
      "Camara: Triple 48MP + 12MP + 12MP",
      "Bateria: Hasta 29h de reproduccion de video",
      "Color: Titanio Natural",
    ],
  },
  {
    id: "iphone-14-pro-128",
    name: "iPhone 14 Pro 128GB",
    category: "iphone",
    price: 450,
    image: "/images/iphone-15-pro.jpg",
    condition: "Usado - Como nuevo",
    stock: 5,
    description:
      "iPhone 14 Pro en muy buen estado. Color Blanco, Dynamic Island, pantalla Always-On, camara de 48MP. Bateria al 88%.",
    specs: [
      "Pantalla: 6.1\" Super Retina XDR",
      "Chip: A16 Bionic",
      "Almacenamiento: 128GB",
      "Camara: Triple 48MP + 12MP + 12MP",
      "Bateria: 88% de salud",
      "Color: Blanco",
    ],
  },
  {
    id: "iphone-13-128",
    name: "iPhone 13 128GB",
    category: "iphone",
    price: 499,
    image: "/images/iphone-15-pro.jpg",
    condition: "Usado - Bueno",
    stock: 2,
    description:
      "iPhone 13 en buen estado general. Algunas marcas leves de uso en los bordes. Pantalla perfecta. Bateria al 84%.",
    specs: [
      "Pantalla: 6.1\" Super Retina XDR",
      "Chip: A15 Bionic",
      "Almacenamiento: 128GB",
      "Camara: Dual 12MP",
      "Bateria: 84% de salud",
      "Color: Medianoche",
    ],
  },
  {
    id: "macbook-air-m2-256",
    name: "MacBook Air M2 256GB",
    category: "macbook",
    price: 899,
    image: "/images/macbook-air-m2.jpg",
    condition: "Usado - Como nuevo",
    stock: 2,
    description:
      "MacBook Air con chip M2, practicamente sin uso. Pantalla Liquid Retina de 13.6 pulgadas, 8GB de RAM. Solo 12 ciclos de carga. Incluye caja y cargador original.",
    specs: [
      "Pantalla: 13.6\" Liquid Retina",
      "Chip: Apple M2",
      "RAM: 8GB",
      "Almacenamiento: 256GB SSD",
      "Ciclos de carga: 12",
      "Color: Medianoche",
    ],
  },
  {
    id: "macbook-pro-m3-512",
    name: "MacBook Pro M3 14\" 512GB",
    category: "macbook",
    price: 1499,
    image: "/images/macbook-air-m2.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "MacBook Pro con chip M3, completamente nuevo y sellado. Pantalla Liquid Retina XDR de 14 pulgadas, 18GB de RAM unificada.",
    specs: [
      "Pantalla: 14\" Liquid Retina XDR",
      "Chip: Apple M3",
      "RAM: 18GB unificada",
      "Almacenamiento: 512GB SSD",
      "Puertos: 2x Thunderbolt, HDMI, MagSafe",
      "Color: Gris Espacial",
    ],
  },
  {
    id: "ipad-pro-m2-128",
    name: "iPad Pro M2 11\" 128GB",
    category: "ipad",
    price: 699,
    image: "/images/ipad-pro.jpg",
    condition: "Usado - Como nuevo",
    stock: 1,
    description:
      "iPad Pro 11 pulgadas con chip M2. Pantalla ProMotion 120Hz, compatible con Apple Pencil 2. Incluye caja y cable USB-C.",
    specs: [
      "Pantalla: 11\" Liquid Retina 120Hz",
      "Chip: Apple M2",
      "Almacenamiento: 128GB",
      "Camara: 12MP + LiDAR",
      "Conectividad: Wi-Fi 6E",
      "Color: Gris Espacial",
    ],
  },
  {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9 45mm",
    category: "apple-watch",
    price: 349,
    image: "/images/apple-watch.jpg",
    condition: "Nuevo",
    stock: 4,
    description:
      "Apple Watch Series 9 nuevo y sellado. Caja de aluminio de 45mm, GPS. Chip S9 SiP con doble toque.",
    specs: [
      "Caja: Aluminio 45mm",
      "Chip: S9 SiP",
      "Pantalla: Always-On Retina LTPO",
      "Conectividad: GPS",
      "Resistencia: WR50",
      "Color: Medianoche",
    ],
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2 USB-C",
    category: "airpods",
    price: 199,
    image: "/images/airpods-pro.jpg",
    condition: "Nuevo",
    stock: 8,
    description:
      "AirPods Pro de segunda generacion con estuche de carga USB-C. Cancelacion activa de ruido, modo transparencia adaptativo y audio espacial personalizado.",
    specs: [
      "Cancelacion activa de ruido",
      "Modo Transparencia adaptativo",
      "Audio Espacial personalizado",
      "Hasta 6h de escucha con ANC",
      "Estuche de carga USB-C",
      "Resistencia: IPX4",
    ],
  },
  {
    id: "ps5-slim-digital",
    name: "PlayStation 5 Slim Digital",
    category: "playstation",
    price: 399,
    image: "/images/ps5-console.jpg",
    condition: "Nuevo",
    stock: 3,
    description:
      "PlayStation 5 Slim edicion digital, nueva y sellada. Incluye control DualSense, cable HDMI y cable de alimentacion.",
    specs: [
      "Almacenamiento: 1TB SSD",
      "GPU: AMD RDNA 2",
      "CPU: AMD Zen 2, 8 nucleos",
      "Salida: 4K a 120fps",
      "Audio 3D Tempest",
      "Control DualSense incluido",
    ],
  },
  {
    id: "ps5-disc-edition",
    name: "PlayStation 5 con Lector",
    category: "playstation",
    price: 499,
    image: "/images/ps5-console.jpg",
    condition: "Usado - Como nuevo",
    stock: 2,
    description:
      "PlayStation 5 con lector de discos en perfecto estado. Poco uso, con caja original, control DualSense y todos los cables.",
    specs: [
      "Almacenamiento: 825GB SSD",
      "GPU: AMD RDNA 2",
      "CPU: AMD Zen 2, 8 nucleos",
      "Lector de Blu-ray Ultra HD",
      "Salida: 4K a 120fps",
      "2 controles DualSense",
    ],
  },
  {
    id: "cargador-magsafe",
    name: "Cargador MagSafe Apple",
    category: "accesorios",
    price: 39,
    image: "/images/airpods-pro.jpg",
    condition: "Nuevo",
    stock: 15,
    description:
      "Cargador MagSafe original de Apple. Carga inalambrica rapida para iPhone 12 en adelante. Compatible con fundas MagSafe.",
    specs: [
      "Carga inalambrica: hasta 15W",
      "Compatible: iPhone 12+",
      "Conector: USB-C",
      "Alineacion magnetica",
      "Original Apple",
      "Cable de 1 metro",
    ],
  },
  {
    id: "funda-silicona-iphone15",
    name: "Funda Silicona iPhone 15 Pro",
    category: "accesorios",
    price: 29,
    image: "/images/airpods-pro.jpg",
    condition: "Nuevo",
    stock: 20,
    description:
      "Funda de silicona original Apple para iPhone 15 Pro. Interior de microfibra suave, exterior de silicona suave al tacto. Compatible con MagSafe.",
    specs: [
      "Material: Silicona suave",
      "Interior: Microfibra",
      "Compatible: MagSafe",
      "Modelo: iPhone 15 Pro",
      "Original Apple",
      "Color: Medianoche",
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "todos") return products
  return products.filter((p) => p.category === category)
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  )
}
