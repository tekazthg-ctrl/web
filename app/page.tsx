const sections = [
  {
    title: "Tattoos",
    kicker: "Piel como soporte",
    description:
      "Diseños con línea gráfica, símbolos propios y composición pensada para acompañar el cuerpo.",
    tags: ["flash", "custom", "blackwork"],
  },
  {
    title: "Murales",
    kicker: "Escala pública",
    description:
      "Intervenciones de gran formato con energía urbana, naturaleza y color para espacios vivos.",
    tags: ["pared", "comunidad", "color"],
  },
  {
    title: "Ilustraciones / obras",
    kicker: "Laboratorio gráfico",
    description:
      "Piezas originales, dibujos y exploraciones visuales entre lo orgánico, lo callejero y lo simbólico.",
    tags: ["papel", "digital", "originales"],
  },
];

const links = [
  { label: "Instagram", href: "https://www.instagram.com/tekazthg/" },
  { label: "Flickr", href: "https://www.flickr.com/photos/gregorinijeronimo" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Principal">
        <a href="#inicio" className="brand">TEKAZ</a>
        <div>
          <a href="#portfolio">Portfolio</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section id="inicio" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Jerónimo Gregorini</p>
          <h1>TEKAZ transforma muros, piel y papel en lenguaje gráfico.</h1>
          <p className="intro">
            Artista gráfico enfocado en tattoos, murales, ilustraciones y obras. Un portfolio
            directo para descubrir trabajos recientes y abrir nuevas colaboraciones.
          </p>
          <div className="actions">
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                Ver {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="poster" aria-label="Composición abstracta TEKAZ">
          <span>T</span><span>E</span><span>K</span><span>A</span><span>Z</span>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <p className="eyebrow">Tres líneas de trabajo</p>
        <h2>Tattoos, murales e ilustraciones / obras</h2>
        <div className="grid">
          {sections.map((section, index) => (
            <article className="card" key={section.title}>
              <div className={`art art${index + 1}`} />
              <p>{section.kicker}</p>
              <h3>{section.title}</h3>
              <span>{section.description}</span>
              <ul>
                {section.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="contact">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Seguime y escribime para proyectos, turnos o encargos.</h2>
        </div>
        <div className="contactLinks">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
