import { useState } from 'react'

function StarRating({ rating, onRate, readonly = false }) {
  const [hover, setHover] = useState(0)

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => !readonly && onRate(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
          style={{
            cursor: readonly ? 'default' : 'pointer',
            fontSize: '28px',
            color: (hover || rating) >= star ? '#fbbf24' : '#d1d5db',
            transition: 'transform 0.1s'
          }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default StarRating
