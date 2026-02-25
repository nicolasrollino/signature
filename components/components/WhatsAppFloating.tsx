"use client"

export default function WhatsAppFloating() {
  const phone = "5493515297636" // ← TU NÚMERO
  const text = encodeURIComponent("Hola! Quiero consultar por un equipo 👋")
  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <div
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 9999,
      }}
    >
      <a href={href} target="_blank" rel="noreferrer">
        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            cursor: "pointer",
          }}
        />
      </a>
    </div>
  )
}
