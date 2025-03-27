import { useParams, Link } from 'react-router-dom'

const ProductDetails = ({ products }) => {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return <div>Карточка не найдена</div>
  }

  return (
    <div className="product-details">
      <Link to="/">
        <button className="home-button">На главную</button>
      </Link>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.info}</p>
    </div>
  )
}

export default ProductDetails
