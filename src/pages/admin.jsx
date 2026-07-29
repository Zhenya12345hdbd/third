import './admin.css'

import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';




let menulis

function Admin() {
  const [items, setItems] = useState(null); // Переименовали data в items для ясности
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');




  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://project/data.json?t=' + new Date().getTime());
      if (!res.ok) throw new Error('Network error');
      const result = await res.json();
      setItems(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const checkAuth = async () => {
  try {
    const res = await fetch('http://project/login.php', {
      method: 'GET',
      credentials: 'include', // <-- важно: отправляет куки (сессию)
    });

     if (!res.ok) {
      throw new Error('Network response was not ok');
    } 

    const data = await res.json();

    if (data.authenticated) {
      setUser(data.user);
       console.log(data.authenticated);
      setMessage('');
    } else {
      setUser(null);
    }
  } catch (err) {
    console.error('Auth check failed:', err);
    setUser(null);
  }
};

  useEffect(() => {
    checkAuth();
    fetchData();
    
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки: {error.message}</div>;

 const handleDelete = async (id) => {
  try {
    const res = await fetch('http://project/handler.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) throw new Error('Ошибка при удалении');
    await res.json();
    fetchData();
  } catch (err) {
    console.error(err);
  }
};

const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://project/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password }),
      credentials: 'include',
    });
    const data = await res.json();

    if (data.success) {
      setUser(data.user);
      setLogin('');
      setPassword('');
      setMessage('');
    } else {
      setMessage(data.message || 'Ошибка авторизации');
    }
  };

  
   const handleLogout = async () => {
    await fetch('http://project/logout.php', { 
        method: 'GET',
        credentials: 'include' // <-- Обязательно!
    });
    setUser(null);
    // Очистить items, если они приватные
    setItems(null); 
  };



  
  return (
  <section>
    <div className='container admin'>
    <div>
      {user ? (
        <div>
          <p>Вы авторизованы как: <b>{user}</b></p>
          <button onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '8px' }}>
            <label>Логин: </label>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label>Пароль: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {message && <p style={{ color: 'red' }}>{message}</p>}
          <button type="submit">Войти</button>
        </form>
      )}
    </div>
      
       {user ? (<div className='spread'>
        <h1>Подписались на рассылку</h1>
        {items && items.map((item, index) => (
          <div key={index} className='admin_items'>
            <p className='gray_small'>{item.emailForPost}</p>
            <button
              className='button adm_but'
              onClick={() => handleDelete(item.id)}
            >
              Удалить
            </button>
          </div>
        ))}

        <button className='button' onClick={fetchData}>Обновить</button>
      </div>):(<></>)}
       
    </div>
  </section>
);
}


export default Admin;
