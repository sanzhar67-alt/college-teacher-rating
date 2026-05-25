import { useState, useEffect } from 'react'
import TeacherCard from '../components/TeacherCard'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    // Таңдаулыларды жүктеу (уақытша)
    const saved = localStorage.getItem('favorites')
    if (saved) {
      const favoriteIds = JSON.parse(saved)
      const allTeachers = {
        1: { id: 1, name: "Айгуль Ахметова", subject: "Информатика", rating: 4.5, reviews: 24, avatar: "👩‍🏫" },
        2: { id: 2, name: "Ержан Оразов", subject: "Математика", rating: 4.8, reviews: 31, avatar: "👨‍🏫" },
        3: { id: 3, name: "Гульнар Толеген", subject: "Физика", rating: 4.2, reviews: 18, avatar: "👩‍🔬" },
      }
      const favTeachers = favoriteIds.map(id => allTeachers[id]).filter(t => t)
      setFavorites(favTeachers)
    }
  }, [])

  const removeFavorite = (id) => {
    const updated = favorites.filter(t => t.id !== id)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated.map(t => t.id)))
  }

  if (favorites.length === 0) {
    return (
      <div className="container">
        <div style={{
          textAlign: 'center',
          background: 'white',
          borderRadius: '16px',
          padding: '3rem',
          marginTop: '2rem'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>❤️</div>
          <h2 style={{ color: '#2d3748' }}>Таңдаулылар тізімі бос</h2>
          <p style={{ color: '#718096', marginTop: '0.5rem' }}>
            Әлі ешбір оқытушыны таңдаулыларға қоспадыңыз
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>❤️ Таңдаулы оқытушылар</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {favorites.map(teacher => (
          <div key={teacher.id} style={{ position: 'relative' }}>
            <button
              onClick={() => removeFavorite(teacher.id)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                zIndex: 1
              }}
            >
              ✕
            </button>
            <TeacherCard teacher={teacher} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
