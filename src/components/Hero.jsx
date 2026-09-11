import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <h1 className="hero-title">
        Aprende <span className="hero-title-accent">React</span> desde cero
      </h1>
      <p className="hero-description">
        Domina la librería más popular del frontend con proyectos prácticos y reales.
      </p>
      <button className="hero-button" type="button">
        Ver Cursos
      </button>
    </section>
  )
}

export default Hero