"use client"

import Link from "next/link"

export default function WhatsAppFloating() {
  const phone = "5493515297636" // <-- CAMBIÁ ESTO por tu número
  const text = encodeURIComponent("Hola! Quiero consultar por un equipo 👋")
  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 9999 }}>
      <Link
        href={href}
        target="_blank"
        style={{
          background: "#25D366",
          color: "white",
          padding: "12px 16px",
          borderRadius: 999,
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
        }}
      >
        WhatsApp
      </Link>
    </div>
  )
}
