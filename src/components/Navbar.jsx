import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
  
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none'
        }}>
          📚 College Teacher Rating
        </Link>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#4a5568', fontWeight: '500' }}>Басты бет</Link>
          <Link to="/favorites" style={{ textDecoration: 'none', color: '#4a5568', fontWeight: '500' }}>❤️ Таңдаулылар</Link>
          
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link to="/admin" style={{ textDecoration: 'none', color: '#4a5568', fontWeight: '500' }}>⚙️ Админ</Link>
              )}
              <span style={{ color: '#667eea' }}>👋 {user.name}</span>
              <button onClick={handleLogout} style={{
                background: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>Шығу</button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: 'none', color: '#4a5568', fontWeight: '500' }}>Кіру</Link>
              <Link to="/register" style={{
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}>Тіркелу</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
