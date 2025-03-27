import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CreateProduct = ({ addProduct }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    info: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    image: '',
    info: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = { name: '', image: '', info: '' }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Название обязательно'
      isValid = false
    }

    if (!formData.image.trim()) {
      newErrors.image = 'Ссылка на изображение обязательна'
      isValid = false
    }

    if (!formData.info.trim()) {
      newErrors.info = 'Описание обязательно'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        image: formData.image,
        info: formData.info,
        liked: false,
      }

      addProduct(newProduct)

      navigate('/')
    }
  }

  return (
    <div className="create-product">
      <Link to="/">
        <button className="home-button">На главную</button>
      </Link>
      <h2>Создание нового продукта</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Название:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Ссылка на изображение:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          {errors.image && <span className="error">{errors.image}</span>}
        </div>

        <div className="form-group">
          <label>Описание:</label>
          <textarea name="info" value={formData.info} onChange={handleChange} />
          {errors.info && <span className="error">{errors.info}</span>}
        </div>

        <button type="submit">Создать продукт</button>
      </form>
    </div>
  )
}

export default CreateProduct
