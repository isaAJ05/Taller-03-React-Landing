import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        React<span className="brand-accent">Academy</span>
      </div>
      <nav>
        <ul className="nav-list">
          <li><a className="nav-link" href="#inicio">Inicio</a></li> 
          <li><a className="nav-link" href="#cursos">Cursos</a></li>
          <li><a className="nav-link" href="#nosotros">Nosotros</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header