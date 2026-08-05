import { usePersona } from '../context/usePersona'

const aboutCards = [
  { icon: '📍', text: 'Mendoza, Argentina' },
  { icon: '💼', text: 'Available for remote work' },
  { icon: '🎓', text: 'UTN Mendoza' },
  { icon: '🌐', text: 'Intermediate English' },
]

function About() {
  const { persona, loading, error } = usePersona()

  if (loading) return <p className="loading">Cargando...</p>
  if (error) return <p className="loading">Error al cargar datos.</p>

  return (
    <section id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">About <span>Me</span></h2>
          <p>{persona.descripcion}</p>
        </div>
        <div className="about-cards">
          {aboutCards.map((card, index) => (
            <div className="about-card" key={index}>
              <span>{card.icon}</span>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About