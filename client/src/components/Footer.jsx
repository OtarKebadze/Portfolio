import { usePersona } from '../context/usePersona'

function Footer() {
  const { persona, loading, error } = usePersona()
  const year = new Date().getFullYear()

  if (loading) return null
  if (error) return null

  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-redes">
          <a href={persona.redes.github} target="_blank" className="footer-link">
            <span>🐙</span>
            <span>GitHub</span>
          </a>
          <a href={persona.redes.linkedin} target="_blank" className="footer-link">
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${persona.redes.email}`} className="footer-link">
            <span>📧</span>
            <span>Email</span>
          </a>
        </div>
        <p className="footer-copy">
          © {year} <span>{persona.nombre}</span> — All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer