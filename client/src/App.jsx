import { useEffect, useState } from 'react';
import { createUser, fetchUsers } from './api';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [users, setUsers] = useState([]);

  const handleChange = (e) =>
    console.log(e.target.name, e.target.value)||
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(form);
    setForm({ name: '', email: '' });
    loadUsers();
  };

  const loadUsers = async () => {
    const res = await fetchUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Saved Users</h3>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
