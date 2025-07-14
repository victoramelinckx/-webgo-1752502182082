
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio rápido y fácil con soporte 24/7." cta1="Empieza Ya" />
<How step1Title="Envía tu idea" step1Desc="Contáctanos con tu propuesta comercial." step2Title="Construimos rápido" step2Desc="Web de ventas lista en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para optimizar tus ventas online." />
<Aboutus headline="WebGo: Impulsa tus Ventas Online" subheadline="Digitalizamos tu negocio y gestionamos tu web para ventas sin complicaciones." beneficiotitulo1="Ahorro de Tiempo" beneficio1="Gestionamos tu sitio web completamente." beneficiotitulo2="Ventas Digitales" beneficio2="Convertimos recomendaciones en ventas online." />
<Services heading="Transforma Tu Negocio Digitalmente en 24 Horas" description="Ofrecemos soluciones integrales para generar ventas online sin complicaciones." services={[{"name":"Desarrollo Web Exprés","icon":"rocket","description":"Lanza tu sitio de ventas en 24 horas."},{"name":"Gestión de Contenido","icon":"edit","description":"Actualizamos tu sitio para mantener relevancia."},{"name":"SEO Avanzado","icon":"search","description":"Atrae más tráfico con optimización SEO."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Integración de Pagos","icon":"credit-card","description":"Configura pagos online fácilmente."},{"name":"Análisis y Reportes","icon":"chart-line","description":"Monitorea el rendimiento de tu sitio."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en proyectos web excepcionales y exitosos." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo transforma tus recomendaciones en ventas online, creando una tienda digital atractiva y fácil de usar. Esto te permite llegar a más clientes sin esfuerzo."},{"pregunta":"¿Qué beneficios ofrece WebGo para alguien que no tiene tiempo de gestionar un sitio web?","respuesta":"WebGo se encarga de todo, desde el diseño hasta el mantenimiento de tu sitio web, ahorrándote tiempo y permitiéndote enfocarte en lo que mejor haces: tu negocio."},{"pregunta":"¿Cómo puede WebGo ayudarme a generar ventas online si no tengo experiencia?","respuesta":"WebGo simplifica el proceso de ventas online con herramientas intuitivas y soporte constante, ayudándote a convertir visitantes en clientes sin necesidad de experiencia previa."},{"pregunta":"¿Qué hace a WebGo diferente a otras soluciones de venta online?","respuesta":"WebGo ofrece un servicio personalizado que se adapta a tus necesidades específicas, con un enfoque centrado en maximizar tus ventas de manera efectiva y sencilla."},{"pregunta":"¿WebGo también ayuda a mejorar la visibilidad de mi negocio en internet?","respuesta":"Sí, WebGo optimiza tu presencia en línea con técnicas de SEO avanzadas, asegurando que más personas encuentren tu negocio cuando lo busquen en internet."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio en Línea" 
                      description="WebGo te ayuda a digitalizar tus ventas rápidamente, sin complicaciones técnicas. Aumenta tus ingresos sin perder tiempo gestionando un sitio web."
                      formPostUrl="api/contact-us"
                      projectId="HfYLyykJKvVFz27xVitJSrtD9XO2"
                    />
<Footer />
    </main>
  );
}
