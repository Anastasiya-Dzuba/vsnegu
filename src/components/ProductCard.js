import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ProductCard({ product, onLike, onClose }) {
  const handleLikeClick = (e) => {
    e.stopPropagation() // Останавливаем всплытие события
    onLike(product.id)
  }

  const handleCloseClick = (e) => {
    e.stopPropagation() // Останавливаем всплытие события
    onClose(product.id)
  }

  return (
    <div className="container">
      <div className="icons">
        {product.liked ? (
          <FaHeart size={30} className="heart like" onClick={handleLikeClick} />
        ) : (
          <FaRegHeart
            size={30}
            className="heart dislike"
            onClick={handleLikeClick}
          />
        )}
        <IoIosCloseCircleOutline
          size={35}
          className="close"
          onClick={handleCloseClick}
        />
      </div>
      <Link to={`/product/${product.id}`} className="card-link">
        <div className="card">
          <img className="earphone" src={product.image} alt={product.name} />
          <div className="name">{product.name}</div>
          <div className="info">{product.info}</div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
