import { useNavigate } from 'react-router-dom'
import StarRating from './StarRating'

function TeacherCard({ teacher }) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/teacher/${teacher.id}`)} style={{
      background: 'white',
      borderRadius: '16px',
      padding: '1.5rem',
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)'
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>
        {teacher.avatar || '👨‍🏫'}
      </div>
      <h3 style={{ margin: '0.5rem 0', color: '#2d3748' }}>{teacher.name}</h3>
      <p style={{ color: '#718096', marginBottom: '0.5rem' }}>{teacher.subject}</p>
      <StarRating rating={teacher.rating} readonly={true} />
      <div style={{ marginTop: '0.5rem', color: '#a0aec0', fontSize: '0.875rem' }}>
        📝 {teacher.reviews || 0} пікір
      </div>
    </div>
  )
}

export default TeacherCard
