import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_qsyrayj'
const TEMPLATE_ID = 'template_dnehulj'
const PUBLIC_KEY = '46gQQrvN6jafC_N-B'

function Contact() {
  const form = useRef()
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setError(false)

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      setEnviado(true)
      form.current.reset()
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section id="contact">
      <div className="contact-content">
        <h2 className="section-title">Contact <span>Me</span></h2>
        <p className="contact-subtitle">Have a project in mind or want to work together? Send me a message!</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" required />          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="from_email" placeholder="Your email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" placeholder="Your message..." rows="6" required></textarea>
          </div>

          {enviado && <p className="form-success">✅ Message sent successfully!</p>}
          {error && <p className="form-error">❌ Something went wrong. Please try again.</p>}

          <button type="submit" className="form-btn" disabled={enviando}>
            {enviando ? 'Sending...' : 'Send Message ↗'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact