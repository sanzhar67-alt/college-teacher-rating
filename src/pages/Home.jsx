import { useState, useEffect } from 'react'
import TeacherCard from '../components/TeacherCard'

function Home() {
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('')

  useEffect(() => {
    // Mock деректер (кейін Supabase-қа қосамыз)
    const mockTeachers = [
      { id: 1, name: "Айгуль Ахметова", subject: "Информатика", rating: 4.5, reviews: 24, avatar: "👩‍🏫" },
      { id: 2, name: "Ержан Оразов", subject: "Математика", rating: 4.8, reviews: 31, avatar: "👨‍🏫" },
      { id: 3, name: "Гульнар Толеген", subject: "Физика", rating: 4.2, reviews: 18, avatar: "👩‍🔬" },
      { id: 4, name: "Бауыржан Мырзабаев", subject: "Ағылшын тілі", rating: 4.9, reviews: 45, avatar: "👨‍🏫" },
      { id: 5, name: "Динара Сапарбаева", subject: "Химия", rating: 4.7, reviews: 29, avatar: "👩‍🔬" },
      { id: 6, name: "Марат Жұмабеков", subject: "Тарих", rating: 4.4, reviews: 22, avatar: "👨‍🏫" },
    ]
    setTeachers(mockTeachers)
    setLoading(false)
  }, [])

  const filtered = teachers.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) &&
    (subject === '' || t.subject === subject)
  )

  const subjects = [...new Set(teachers.map(t => t.subject))]

  if (loading) return <div className="loading">Жүктелуде...</div>

  return (
    <div className="container">
      <div style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="🔍 Оқытушыны іздеу..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <select value={subject} onChange={(e) => setSubject(e.target.value)} style={{ width: '100%' }}>
          <option value="">Барлық пәндер</option>
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {filtered.map(teacher => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white', padding: '3rem' }}>
          Оқытушы табылмады
        </div>
      )}
    </div>
  )
}

export default Home
