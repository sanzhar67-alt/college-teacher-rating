import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminPanel() {
  const navigate = useNavigate()
  const [teachers, setTeachers] = useState([])
  const [form, setForm] = useState({ name: '', subject: '', description: '', avatar: '👨‍🏫' })

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user || JSON.parse(user).role !== 'admin') {
      navigate('/')
      return
    }
    
    // Оқытушыларды жүктеу
    const mockTeachers = [
      { id: 1, name: "Айгуль Ахметова", subject: "Информатика", rating: 4.5, reviews: 24, avatar: "👩‍🏫", description: "Информатика пәнінің мұғалімі" },
      { id: 2, name: "Ержан Оразов", subject: "Математика", rating: 4.8, reviews: 31, avatar: "👨‍🏫", description: "Математика пәнінің мұғалімі" },
    ]
    setTeachers(mockTeachers)
  }, [navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTeacher = {
      id: Date.now(),
      ...form,
      rating: 0,
      reviews: 0
    }
    setTeachers([...teachers, newTeacher])
    setForm({ name: '', subject: '', description: '', avatar: '👨‍🏫' })
    alert('Жаңа оқытушы қосылды!')
  }

  const deleteTeacher = (id) => {
    if (confirm('Бұл оқытушыны өшіру керек пе?')) {
      setTeachers(teachers.filter(t => t.id !== id))
    }
  }

  return (
    <div className="container">
      <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>⚙️ Әкімші панелі</h2>
      
      <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>➕ Жаңа оқытушы қосу</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Аты-жөні"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Пәні"
              value={form.subject}
              onChange={(e) => setForm({...form, subject: e.target.value})}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <textarea
              placeholder="Сипаттама"
              value={form.description}
              onChange={(e) => setForm({...form, description: e.target.value})}
              rows="3"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <select value={form.avatar} onChange={(e) => setForm({...form, avatar: e.target.value})}>
              <option value="👨‍🏫">👨‍🏫 Ер мұғалім</option>
              <option value="👩‍🏫">👩‍🏫 Әйел мұғалім</option>
              <option value="👨‍🔬">👨‍🔬 Ер ғалым</option>
              <option value="👩‍🔬">👩‍🔬 Әйел ғалым</option>
            </select>
          </div>
          <button type="submit" className="btn">Қосу</button>
        </form>
      </div>

      <div style={{ background: 'white', borderRadius: '16px', padding: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>📋 Оқытушылар тізімі</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Аватар</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Аты</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Пәні</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Рейтинг</th>
                <th style={{ padding: '0.5rem', textAlign: 'left' }}>Әрекет</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map(teacher => (
                <tr key={teacher.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.5rem', fontSize: '1.5rem' }}>{teacher.avatar}</td>
                  <td style={{ padding: '0.5rem' }}>{teacher.name}</td>
                  <td style={{ padding: '0.5rem' }}>{teacher.subject}</td>
                  <td style={{ padding: '0.5rem' }}>{teacher.rating} ★</td>
                  <td style={{ padding: '0.5rem' }}>
                    <button
                      onClick={() => deleteTeacher(teacher.id)}
                      style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Өшіру
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
