const murals = [
  {
    title: "Mural orgánico verde",
    kicker: "Fachada urbana",
    description:
      "Composición de gran formato con energía vegetal, personajes centrales y detalles mecánicos sobre fondo oscuro.",
    tags: ["mural", "color", "fachada"],
    className: "mural1",
  },
  {
    title: "Mural sci-fi azul",
    kicker: "Pared industrial",
    description:
      "Intervención con personaje robótico, capas de graffiti y contraste azul, violeta y magenta.",
    tags: ["mural", "graffiti", "sci-fi"],
    className: "mural2",
  },
  {
    title: "Mural ornamental blanco y negro",
    kicker: "Interior gráfico",
    description:
      "Patrones florales y formas simbólicas en alto contraste para una pared envolvente y decorativa.",
    tags: ["mural", "blackwork", "ornamental"],
    className: "mural3",
  },
];

const links = [
  { label: "Instagram", href: "https://www.instagram.com/tekazthg/" },
  { label: "Flickr", href: "https://www.flickr.com/photos/gregorinijeronimo" },
];

const whatsappHref =
  "https://wa.me/5491139360510?text=Hola%20TEKAZ%2C%20quiero%20consultar%20por%20un%20proyecto%2C%20turno%20o%20encargo.";

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
        <p className="eyebrow">Murales destacados</p>
        <h2>Tres intervenciones murales de TEKAZ</h2>
        <div className="grid">
          {murals.map((mural) => (
            <article className="card" key={mural.title}>
              <div className={`art ${mural.className}`} aria-label={mural.title} />
              <p>{mural.kicker}</p>
              <h3>{mural.title}</h3>
              <span>{mural.description}</span>
              <ul>
                {mural.tags.map((tag) => <li key={tag}>{tag}</li>)}
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
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            Escribime por WhatsApp
          </a>
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
