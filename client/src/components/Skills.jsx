import { usePersona } from '../context/usePersona'

function Skills() {
  const { persona, loading, error } = usePersona()

  if (loading) return <p className="loading">Cargando...</p>
  if (error) return <p className="loading">Error al cargar datos.</p>

  return (
    <section id="skills">
      <div className="skills-content">
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="skills-list">
          {persona.skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span className="skill-name">{skill.nombre}</span>
                <span className="skill-nivel">{skill.nivel}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.nivel}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title certificates-title">My <span>Certificates</span></h2>
        <div className="certificates-list">
          {persona.certificados.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <span className="certificate-icon">🏆</span>
              <div className="certificate-info">
                <p className="certificate-nombre">{cert.nombre}</p>
                <p className="certificate-institucion">{cert.institucion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills