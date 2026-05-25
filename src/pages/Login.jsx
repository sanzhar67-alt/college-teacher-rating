import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Уақытша логика (кейін Supabase-қа қосамыз)
    if (email === 'admin@test.com' && password === 'admin123') {
      localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Админ', email, role: 'admin' }))
      navigate('/')
    } else if (email === 'user@test.com' && password === 'user123') {
      localStorage.setItem('user', JSON.stringify({ id: 2, name: 'Қолданушы', email, role: 'user' }))
      navigate('/')
    } else if (email && password) {
      // Тестілеу үшін
      localStorage.setItem('user', JSON.stringify({ id: 2, name: 'Қонақ', email, role: 'user' }))
      navigate('/')
    } else {
      setError('Қате email немесе құпия сөз')
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
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>Кіру</h2>
        
        {error && <div className="error" style={{ marginBottom: '1rem' }}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
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
            Кіру
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#718096' }}>
          Тіркелмегенсіз бе? <Link to="/register" style={{ color: '#667eea' }}>Тіркелу</Link>
        </p>
        
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#f7fafc', borderRadius: '8px' }}>
          <small style={{ color: '#718096' }}>
            Тестілеу үшін:<br/>
            admin@test.com / admin123 (Админ)<br/>
            user@test.com / user123 (Қолданушы)
          </small>
        </div>
      </div>
    </div>
  )
}

export default Login
