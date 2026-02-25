"use client"

export default function WhatsAppFloating() {
  const phone = "5493515297636"
  const text = encodeURIComponent("Hola! Quiero consultar por un equipo")
  const href = `https://wa.me/${phone}?text=${text}`

  return (
    <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 9999 }}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          width: 64,
          height: 64,
          background: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012.01 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.18 1.6 6.02L0 24l6.18-1.61A11.94 11.94 0 0012.01 24c6.62 0 11.99-5.37 11.99-12 0-3.2-1.25-6.2-3.48-8.52z"/>
        </svg>
      </a>
    </div>
  )
}
