import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formData, setFormData] = useState([]);  // State to store fetched form data

  const apiUrl = import.meta.env.VITE_API_BASE_URL; // Using Vite environment variable

  // Fetch form data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}api/form`);
        setFormData(response.data); // Store fetched data in state
      } catch (err) {
        console.error('Error fetching form data:', err);
      }
    };
    fetchData();
  }, [apiUrl]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}api/form`, form);
      alert('Form submitted!');
      setForm({ name: '', email: '', message: '' });
      // Fetch updated data after form submission
      const response = await axios.get(`${apiUrl}api/form`);
      setFormData(response.data);
    } catch (err) {
      alert('Error submitting form');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        /><br />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        /><br />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
        /><br />
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Form Data:</h2>
      <ul>
        {formData.map((entry, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {entry.name}</p>
            <p><strong>Email:</strong> {entry.email}</p>
            <p><strong>Message:</strong> {entry.message}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;