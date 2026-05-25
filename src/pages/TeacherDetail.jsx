import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

function TeacherDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [teacher, setTeacher] = useState(null)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    // Оқытушы деректерін жүктеу
    const mockTeachers = {
      1: { id: 1, name: "Айгуль Ахметова", subject: "Информатика", rating: 4.5, avatar: "👩‍🏫", description: "Информатика пәнінің тәжірибелі мұғалімі. 10 жылдық тәжірибесі бар." },
      2: { id: 2, name: "Ержан Оразов", subject: "Математика", rating: 4.8, avatar: "👨‍🏫", description: "Математика пәнінің үздік мұғалімі. Оқушылар арасында өте танымал." },
      3: { id: 3, name: "Гульнар Толеген", subject: "Физика", rating: 4.2, avatar: "👩‍🔬", description: "Физика пәнінің маманы. Ғылыми жобаларға жетекшілік етеді." },
    }
    setTeacher(mockTeachers[id])
    
    // Пікірлерді жүктеу
    const mockReviews = [
      { id: 1, user: "Аслан", rating: 5, comment: "Өте жақсы мұғалім!", date: "2024-01-15" },
      { id: 2, user: "Меруерт", rating: 4, comment: "Түсіндіруі түсінікті", date: "2024-01-10" },
    ]
    setReviews(mockReviews)
  }, [id])

  const handleSubmitReview = (e) => {
    e.preventDefault()
    if (rating === 0) {
      alert("Жұлдызшамен бағалаңыз")
      return
    }
    const newReview = {
      id: Date.now(),
      user: "Қолданушы",
      rating,
      comment,
      date: new Date().toISOString().split('T')[0]
    }
    setReviews([newReview, ...reviews])
    setRating(0)
    setComment('')
    alert("Пікіріңіз қосылды!")
  }

  if (!teacher) return <div className="loading">Жүктелуде...</div>

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="btn" style={{ marginBottom: '1rem' }}>
        ← Артқа
      </button>
      
      <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ textAlign: 'center', fontSize: '5rem' }}>{teacher.avatar}</div>
        <h1 style={{ textAlign: 'center', margin: '1rem 0', color: '#2d3748' }}>{teacher.name}</h1>
        <p style={{ textAlign: 'center', color: '#718096', fontSize: '1.1rem' }}>{teacher.subject}</p>
        <div style={{ textAlign: 'center', margin: '1rem 0' }}>
          <StarRating rating={teacher.rating} readonly={true} />
          <span style={{ marginLeft: '0.5rem', color: '#718096' }}>({teacher.rating})</span>
        </div>
        <p style={{ textAlign: 'center', color: '#4a5568', marginTop: '1rem' }}>{teacher.description}</p>
      </div>

      <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>📝 Пікір қалдыру</h3>
        <form onSubmit={handleSubmitReview}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Бағаңыз:</label>
            <StarRating rating={rating} onRate={setRating} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Пікіріңізді жазыңыз..."
              rows="4"
              required
            />
          </div>
          <button type="submit" className="btn">Пікір жіберу</button>
        </form>
      </div>

      <div style={{ background: 'white', borderRadius: '16px', padding: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>💬 Пікірлер ({reviews.length})</h3>
        {reviews.map(review => (
          <div key={review.id} style={{ borderBottom: '1px solid #e2e8f0', padding: '1rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <strong>{review.user}</strong>
              <StarRating rating={review.rating} readonly={true} />
              <small style={{ color: '#a0aec0' }}>{review.date}</small>
            </div>
            <p style={{ color: '#4a5568' }}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeacherDetail
