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
  { id: "samsung", label: "Samsung" },
  { id: "macbook", label: "MacBook" },
  { id: "ipad", label: "iPad" },
  { id: "apple-watch", label: "Apple Watch" },
  { id: "airpods", label: "AirPods" },
  { id: "playstation", label: "PlayStation" },
  { id: "accesorios", label: "Accesorios" },
  
]

export const products: Product[] = [
  {
  id: "macbook-air-m1-256",
  name: "MacBook Air M1 8CPU 8GB 256GB A2337 13.3\"",
  category: "macbook",
  price: 750,
  image: "/images/macbook-air-m1.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "MacBook Air M1 en excelente estado. Modelo A2337 de 13.3 pulgadas.",
  specs: [
    "Chip: Apple M1",
    "CPU: 8 Core",
    "RAM: 8GB",
    "SSD: 256GB",
    "Pantalla: 13.3\""
  ],

},
{
  id: "macbook-air-m2-16-256",
  name: "MacBook Air M2 16GB 256GB 13.6\"",
  category: "macbook",
  price: 920,
  image: "/images/macbook-air-m2.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "MacBook Air M2 nueva y sellada.",
  specs: [
    "Chip: Apple M2",
    "RAM: 16GB",
    "SSD: 256GB",
    "Pantalla: 13.6\""
  ],
},
{
  id: "macbook-air-m2-8-256",
  name: "MacBook Air M2 8CPU 8GB 256GB A2681 13.6\"",
  category: "macbook",
  price: 950,
  image: "/images/macbook-air-m2.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "MacBook Air M2 modelo A2681 nueva y sellada.",
  specs: [
    "Chip: Apple M2",
    "CPU: 8 Core",
    "RAM: 8GB",
    "SSD: 256GB",
    "Pantalla: 13.6\""
  ],
},
{
  id: "macbook-air-m3-16-256-15",
  name: "MacBook Air M3 16GB 256GB 15\"",
  category: "macbook",
  price: 1130,
  image: "/images/macbook-air-m3.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "MacBook Air M3 nueva de 15 pulgadas.",
  specs: [
    "Chip: Apple M3",
    "RAM: 16GB",
    "SSD: 256GB",
    "Pantalla: 15\""
  ],
},
{
  id: "macbook-air-m3-16-512",
  name: "MacBook Air M3 8CPU 16GB 512GB 13\"",
  category: "macbook",
  price: 1180,
  image: "/images/macbook-air-m3.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "MacBook Air M3 nueva y sellada.",
  specs: [
    "Chip: Apple M3",
    "CPU: 8 Core",
    "RAM: 16GB",
    "SSD: 512GB",
    "Pantalla: 13\""
  ],
},
{
  id: "macbook-air-m3-8-256",
  name: "MacBook Air M3 8CPU 8GB 256GB A3113 13\"",
  category: "macbook",
  price: 1110,
  image: "/images/macbook-air-m3.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "MacBook Air M3 modelo A3113 nueva y sellada.",
  specs: [
    "Chip: Apple M3",
    "CPU: 8 Core",
    "RAM: 8GB",
    "SSD: 256GB",
    "Pantalla: 13\""
  ],
},

  {
  id: "samsung-a06-128",
  name: "Samsung Galaxy A06 4GB 128GB",
  category: "samsung",
  price: 140,
  image: "/images/samsung-a06.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A06 nuevo y sellado.",
  specs: ["4GB RAM", "128GB", "Nuevo"],
},
{
  id: "samsung-a06-64",
  name: "Samsung Galaxy A06 4GB 64GB",
  category: "samsung",
  price: 130,
  image: "/images/samsung-a06.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A06 nuevo y sellado.",
  specs: ["4GB RAM", "64GB", "Nuevo"],
},
{
  id: "samsung-a07-128",
  name: "Samsung Galaxy A07 4GB 128GB",
  category: "samsung",
  price: 148,
  image: "/images/samsung-a07.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A07 nuevo y sellado.",
  specs: ["4GB RAM", "128GB", "Nuevo"],
},
{
  id: "samsung-a07-64",
  name: "Samsung Galaxy A07 4GB 64GB",
  category: "samsung",
  price: 152,
  image: "/images/samsung-a07.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A07 nuevo y sellado.",
  specs: ["4GB RAM", "64GB", "Nuevo"],
},
{
  id: "samsung-a07-256",
  name: "Samsung Galaxy A07 8GB 256GB",
  category: "samsung",
  price: 180,
  image: "/images/samsung-a07.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A07 nuevo y sellado. Incluye cargador.",
  specs: ["8GB RAM", "256GB", "Incluye cargador"],
},
{
  id: "samsung-a16-128",
  name: "Samsung Galaxy A16 4GB 128GB",
  category: "samsung",
  price: 158,
  image: "/images/samsung-a16.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A16 nuevo y sellado.",
  specs: ["4GB RAM", "128GB", "Nuevo"],
},
{
  id: "samsung-a17-128",
  name: "Samsung Galaxy A17 4GB 128GB",
  category: "samsung",
  price: 195,
  image: "/images/samsung-a17.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A17 nuevo y sellado.",
  specs: ["4GB RAM", "128GB", "Nuevo"],
},
{
  id: "samsung-a17-5g-256",
  name: "Samsung Galaxy A17 5G 8GB 256GB",
  category: "samsung",
  price: 252,
  image: "/images/samsung-a17.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A17 5G nuevo y sellado.",
  specs: ["8GB RAM", "256GB", "5G"],
},
{
  id: "samsung-a26-256",
  name: "Samsung Galaxy A26 5G 8GB 256GB",
  category: "samsung",
  price: 257,
  image: "/images/samsung-a26.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A26 5G nuevo y sellado.",
  specs: ["8GB RAM", "256GB", "5G"],
},
{
  id: "samsung-a35-128",
  name: "Samsung Galaxy A35 5G 6GB 128GB",
  category: "samsung",
  price: 265,
  image: "/images/samsung-a35.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A35 5G nuevo y sellado.",
  specs: ["6GB RAM", "128GB", "5G"],
},
{
  id: "samsung-a36-256",
  name: "Samsung Galaxy A36 5G 8GB 256GB",
  category: "samsung",
  price: 315,
  image: "/images/samsung-a36.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A36 5G nuevo y sellado.",
  specs: ["8GB RAM", "256GB", "5G"],
},
{
  id: "samsung-a56-256",
  name: "Samsung Galaxy A56 5G 8GB 256GB",
  category: "samsung",
  price: 395,
  image: "/images/samsung-a56.jpg",
  condition: "Nuevo",
  stock: 1,
  description: "Samsung Galaxy A56 5G nuevo y sellado.",
  specs: ["8GB RAM", "256GB", "5G"],
},
    {
    id: "samsung-s25-fe-256",
    name: "Samsung Galaxy S25 FE 8GB 256GB",
    category: "samsung",
    price: 720,
    image: "/images/samsung-s25-fe.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "Samsung Galaxy S25 FE nuevo y sellado. Excelente rendimiento y gran capacidad de almacenamiento.",
    specs: [
      "RAM: 8GB",
      "Almacenamiento: 256GB",
      "Condicion: Nuevo",
      "Pantalla AMOLED",
      "Equipo sellado",
    ],
  },
  {
    id: "samsung-s25-fe-512",
    name: "Samsung Galaxy S25 FE 8GB 512GB",
    category: "samsung",
    price: 760,
    image: "/images/samsung-s25-fe.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "Samsung Galaxy S25 FE nuevo y sellado. Version de 512GB ideal para quienes necesitan mayor capacidad.",
    specs: [
      "RAM: 8GB",
      "Almacenamiento: 512GB",
      "Condicion: Nuevo",
      "Pantalla AMOLED",
      "Equipo sellado",
    ],
  },
  {
    id: "samsung-s25-ultra-256",
    name: "Samsung Galaxy S25 Ultra 12GB 256GB",
    category: "samsung",
    price: 1050,
    image: "/images/samsung-s25-ultra.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "Samsung Galaxy S25 Ultra nuevo y sellado. Maximo rendimiento y camara profesional.",
    specs: [
      "RAM: 12GB",
      "Almacenamiento: 256GB",
      "Condicion: Nuevo",
      "Pantalla Dynamic AMOLED",
      "Camara avanzada",
    ],
  },
  {
    id: "samsung-s25-ultra-512",
    name: "Samsung Galaxy S25 Ultra 12GB 512GB",
    category: "samsung",
    price: 1100,
    image: "/images/samsung-s25-ultra.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "Samsung Galaxy S25 Ultra nuevo y sellado. Version de 512GB para almacenamiento superior.",
    specs: [
      "RAM: 12GB",
      "Almacenamiento: 512GB",
      "Condicion: Nuevo",
      "Pantalla Dynamic AMOLED",
      "Camara avanzada",
    ],
  },
  {
    id: "samsung-zfold-7-512",
    name: "Samsung Galaxy Z Fold 7 5G 12GB 512GB",
    category: "samsung",
    price: 1800,
    image: "/images/samsung-zfold-7.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "Samsung Galaxy Z Fold 7 5G nuevo y sellado. Dispositivo plegable premium con gran pantalla y alto rendimiento.",
    specs: [
      "RAM: 12GB",
      "Almacenamiento: 512GB",
      "5G",
      "Pantalla plegable AMOLED",
      "Equipo sellado",
    ],
  },
    {
    id: "iphone-16-128",
    name: "iPhone 16 128GB",
    category: "iphone",
    price: 800,
    image: "/images/iphone-15-pro.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "iPhone 16 nuevo. Equipo sellado, listo para usar. Consultanos por disponibilidad y colores.",
    specs: [
      "Almacenamiento: 128GB",
      "Condicion: Nuevo",
      "Equipo sellado",
    ],
  },
  {
    id: "iphone-16e-512",
    name: "iPhone 16e 512GB",
    category: "iphone",
    price: 950,
    image: "/images/iphone-15-pro.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "iPhone 16e nuevo. Equipo sellado, gran capacidad de almacenamiento. Consultanos por disponibilidad y colores.",
    specs: [
      "Almacenamiento: 512GB",
      "Condicion: Nuevo",
      "Equipo sellado",
    ],
  },
  {
    id: "iphone-17-pro-256-naranja",
    name: "iPhone 17 Pro 256GB (Naranja)",
    category: "iphone",
    price: 1330,
    image: "/images/iphone-15-pro.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "iPhone 17 Pro nuevo, color naranja. Equipo sellado. Consultanos por disponibilidad.",
    specs: [
      "Almacenamiento: 256GB",
      "Color: Naranja",
      "Condicion: Nuevo",
      "Equipo sellado",
    ],
  },
  {
    id: "iphone-17-pro-max-256-naranja",
    name: "iPhone 17 Pro Max 256GB (Naranja)",
    category: "iphone",
    price: 1420,
    image: "/images/iphone-15-pro.jpg",
    condition: "Nuevo",
    stock: 1,
    description:
      "iPhone 17 Pro Max nuevo, color naranja. Equipo sellado. Consultanos por disponibilidad.",
    specs: [
      "Almacenamiento: 256GB",
      "Color: Naranja",
      "Condicion: Nuevo",
      "Equipo sellado",
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
    price: 560,
    image: "/images/ps5-console.jpg",
    condition: "Nuevo",
    stock: 1,
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
