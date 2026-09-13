import React, { useState } from 'react';
import Button from './Button';

function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onFormSubmit(formData);
    setFormData({ title: '', description: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" value={formData.title} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <Button variant="primary">Add Card</Button>
    </form>
  );
}

export default Form;