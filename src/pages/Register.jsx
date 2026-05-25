import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && password) {
      // Уақытша тіркелу логикасы
      localStorage.setItem('user', JSON.stringify({ id: Date.now(), name, email, role: 'user' }))
      navigate('/')
    } else {
      setError('Барлық өрістерді толтырыңыз')
    }
  }

  return (
    <div className="container">
      <div style={{
        maxWidth: '400px',
        margin: '2rem auto',
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>Тіркелу</h2>
        
        {error && <div className="error" style={{ marginBottom: '1rem' }}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568' }}>Аты-жөні</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Толық аты-жөніңіз"
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@test.com"
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568' }}>Құпия сөз</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
            />
          </div>
          
          <button type="submit" className="btn" style={{ width: '100%' }}>
            Тіркелу
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#718096' }}>
          Есептік жазбаңыз бар ма? <Link to="/login" style={{ color: '#667eea' }}>Кіру</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
