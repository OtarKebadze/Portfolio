import { usePersona } from '../context/usePersona'
import lyfegym from '../assets/projects/life-gym.png'
import healthyfood from '../assets/projects/happy-salad.png'
import allcomputer from '../assets/projects/allcomputers.png'
import movieapp from '../assets/projects/movies.png'

const projectImages = {
  'Life Gym': lyfegym,
  'Healthy Food': healthyfood,
  'AllComputers': allcomputer,
  'Movie App': movieapp,
}

function Projects() {
  const { persona, loading, error } = usePersona()

  if (loading) return <p className="loading">Cargando...</p>
  if (error) return <p className="loading">Error al cargar datos.</p>

  return (
    <section id="projects">
      <div className="projects-content">
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="projects-grid">
          {persona.proyectos.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={projectImages[project.nombre]} alt={project.nombre} />
              </div>
              <div className="project-info">
                <h3 className="project-nombre">{project.nombre}</h3>
                <p className="project-descripcion">{project.descripcion}</p>
                <div className="project-stack">
                  {project.stack.map((tech, i) => (
                    <span className="project-tag" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.github} target="_blank" className="project-link">
                    GitHub ↗
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" className="project-link project-demo">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects