import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    price: "",
    oldPrice: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price) {
      alert("Заполните обязательные поля!");
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="container">
      <h1>Создание карточки на Wildberries</h1>

      <div className="content">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Название товара *"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="brand"
            placeholder="Бренд"
            value={formData.brand}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Цена *"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            type="number"
            name="oldPrice"
            placeholder="Старая цена"
            value={formData.oldPrice}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Описание товара"
            value={formData.description}
            onChange={handleChange}
          />

          <input type="file" onChange={handleImage} />

          <button type="submit">Создать карточку</button>

          {success && <p className="success">Карточка успешно создана!</p>}
        </form>

        <div className="preview">
          <h2>Предпросмотр</h2>

          {preview && <img src={preview} alt="preview" />}

          <h3>{formData.title}</h3>

          {formData.brand && <p className="brand">{formData.brand}</p>}

          <div className="prices">
            {formData.price && <span className="price">{formData.price} ₽</span>}
            {formData.oldPrice && (
              <span className="oldPrice">{formData.oldPrice} ₽</span>
            )}
          </div>

          <p className="description">{formData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;