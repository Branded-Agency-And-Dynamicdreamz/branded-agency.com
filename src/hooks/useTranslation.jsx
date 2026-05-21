import { useState, useEffect } from "react"

// Define all your translations here
const translations = {
  EN: {
    "Get in touch": "Get in touch",
    "Read more": "Read more",
    "Show All": "Show All",
    "Articles": "Articles",
    "News": "News",
    "Video": "Video",
    "Load More": "Load More",
    "Contact us": "Contact us",
    "Submit": "Submit",
    "View all": "View all",
    "See more": "See more",
    "Previous": "Previous",
    "Next": "Next",
    "Close": "Close",
    "Search": "Search",
    "LinkedIn": "LinkedIn",
    "Book a Call": "Book a Call",
    "Instagram": "Instagram",
    "UK": "UK",
    "US": "US",
    "Privacy Policy": "Privacy Policy",
    "Cookie Policy": "Cookie Policy",
    "GDPR Statement": "GDPR Statement",
    "Equal Opportunities Policy": "Equal Opportunities Policy",
    "Corporate Responsibility Policy": "Corporate Responsibility Policy",
    "Modern Slavery Act Statement": "Modern Slavery Act Statement",
    "Environmental And Ethical Purchasing Policy": "Environmental And Ethical Purchasing Policy",
    "Quality & Environmental Policy": "Quality & Environmental Policy",
    "Terms of Use": "Terms of Use",
    "Our Story": "Our Story",
    "Team": "Team",
    "Careers": "Careers",
    "Sustainability": "Sustainability",
    "Client Login": "Client Login",
    "Work": "Work",
    "Services": "Services",
    "Company": "Company",
    "Insights": "Insights",
    "Contact": "Contact",
    "Login": "Login",
    "Contact us now to see how BRANDED can help you.": "Contact us now to see how BRANDED can help you.",
    "See more case studies": "See more case studies",
    "Contact us to see how BRANDED can help": "Contact us to see how BRANDED can help"
  },
  ES: {
    "Get in touch": "Ponte en contacto",
    "Read more": "Leer más",
    "Show All": "Mostrar todo",
    "Articles": "Artículos",
    "News": "Noticias",
    "Video": "Video",
    "Load More": "Cargar más",
    "Contact us": "Contáctenos",
    "Submit": "Enviar",
    "View all": "Ver todo",
    "See more": "Ver más",
    "Previous": "Anterior",
    "Next": "Siguiente",
    "Close": "Cerrar",
    "Search": "Buscar",
    "LinkedIn": "LinkedIn",
    "Book a Call": "Reservar una llamada",
    "Instagram": "Instagram",
    "UK": "Reino Unido",
    "US": "EE. UU.",
    "Privacy Policy": "Política de privacidad",
    "Cookie Policy": "Política de cookies",
    "GDPR Statement": "Declaración GDPR",
    "Equal Opportunities Policy": "Política de igualdad de oportunidades",
    "Corporate Responsibility Policy": "Política de responsabilidad corporativa",
    "Modern Slavery Act Statement": "Declaración de la Ley de Esclavitud Moderna",
    "Environmental And Ethical Purchasing Policy": "Política de compras éticas y medioambientales",
    "Quality & Environmental Policy": "Política de calidad y medio ambiente",
    "Terms of Use": "Términos de uso",
    "Our Story": "Nuestra historia",
    "Team": "Equipo",
    "Careers": "Carreras",
    "Sustainability": "Sostenibilidad",
    "Client Login": "Inicio de sesión del cliente",
    "Work": "Trabajo",
    "Services": "Servicios",
    "Company": "Compañía",
    "Insights": "Perspectivas",
    "Contact": "Contacto",
    "Login": "Iniciar sesión",
    "Contact us now to see how BRANDED can help you.": "Contáctenos ahora para ver cómo BRANDED puede ayudarle.",
    "See more case studies": "Ver más casos de estudio",
    "Contact us to see how BRANDED can help": "Contáctenos para ver cómo BRANDED puede ayudar"
  }
}

const getCurrentLanguage = () => {
  if (typeof window === "undefined") return "EN"
  const pathname = window.location.pathname
  if (pathname === "/es/" || pathname.startsWith("/es/")) return "ES"
  return "EN"
}

export const useTranslation = () => {
  const [language, setLanguage] = useState("EN")

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  const t = (key) => {
    return translations[language]?.[key] || translations["EN"][key] || key
  }

  return { t, language }
}