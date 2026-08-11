import './admin.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Docxtemplater from 'docxtemplater';
import JSZipUtils from 'jszip-utils';

import 'pizzip';



let menulis

function Admin() {
  const [items, setItems] = useState(null); 
  const [items1, setItems1] = useState(null);// Переименовали data в items для ясности
  const [items2, setItems2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('initial');

   const [fullText, setFullText] = useState();
  const [openFull, setOpenFull] = useState('none');

const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage1, setCurrentPage1] = useState(1); // Текущая страница
const ITEMS_PER_PAGE = 6;
const totalPages = items1 ? Math.ceil(items1.length / ITEMS_PER_PAGE) : 1;
  const totalPages1 = items2 ? Math.ceil(items2.length / ITEMS_PER_PAGE) : 1;

const [isBlinking, setIsBlinking] = useState(true);








  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      /* const res = await fetch('http://q90828s0.beget.tech/data.json?t=' + new Date().getTime()); */
      const res = await fetch('/data.json?t=' + new Date().getTime());
      if (!res.ok) throw new Error('Network error');
      const result = await res.json();
      setItems(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchData1 = async () => {
  setLoading(true);
  setError(null);
  try {
    /* const res = await fetch('http://q90828s0.beget.tech/api/form.json?t=' + new Date().getTime()); */
    const res = await fetch('/api/form.json?t=' + new Date().getTime());
    if (!res.ok) throw new Error('Network error');
    const result1 = await res.json();
    
   const sorted = [...result1].sort((b, a) =>
          new Date(a.date) - new Date(b.date)
        );
    setItems1(sorted); 
    
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
};
const fetchData2 = async () => {
  setLoading(true);
  setError(null);
  try {
    /* const res = await fetch('http://q90828s0.beget.tech/api/finish.json?t=' + new Date().getTime()); */
    const res = await fetch('/api/finish.json?t=' + new Date().getTime());
      if (!res.ok) throw new Error('Network error');
      const result2 = await res.json();
      const sorted = [...result2].sort((b, a) => new Date(a.date) - new Date(b.date));
      setItems2(sorted);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

 const getPaginatedItems = () => {
    if (!items1) return [];
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return items1.slice(startIndex, endIndex);
  };

  const getPaginatedItems1 = () => {
    if (!items2) return [];
    const startIndex = (currentPage1 - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return items2.slice(startIndex, endIndex);
  };


// Функция для расчета общего количества страниц

  const checkAuth = async () => {
  try {
    /* const res = await fetch('http://q90828s0.beget.tech/login.php', { */
      const res = await fetch('/login.php', {
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
    fetchData1();
    fetchData2();
    
  }, []);
const handleRefresh = () => {
  fetchData();
  fetchData1();
  fetchData2();
};
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки: {error.message}</div>;

 const handleDelete = async (id) => {
  try {
    /* const res = await fetch('http://q90828s0.beget.tech/handler.php', { */
      const res = await fetch('/handler.php', {
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
const handleDelete1 = async (id) => {
  try {
    /* const res = await fetch('http://q90828s0.beget.tech/handler1.php', { */
      const res = await fetch('/handler1.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) throw new Error('Ошибка при удалении');
    await res.json();
    fetchData2();
  } catch (err) {
    console.error(err);
  }
};
const handleDelete2 = async (id) => {
  try {
    /* const res = await fetch('http://q90828s0.beget.tech/api/handler2.php', { */
      const res = await fetch('/api/handler2.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) throw new Error('Ошибка при удалении');
    await res.json();
    fetchData2();
  } catch (err) {
    console.error(err);
  }
};

const handleLogin = async (e) => {
    e.preventDefault();
    /* const res = await fetch('http://q90828s0.beget.tech/login.php', { */
      const res = await fetch('/login.php', {
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
      handleRefresh();
    } else {
      setMessage(data.message || 'Ошибка авторизации');
    }
  };

  
   const handleLogout = async () => {
    /* await fetch('http://q90828s0.beget.tech/logout.php', { */
      await fetch('/logout.php', {
        method: 'GET',
        credentials: 'include' // <-- Обязательно!
    });
    setUser(null);
    // Очистить items, если они приватные
    setItems(null); 
  };

const handleTakeInWork = async (id) => {
  try {
    /* const res = await fetch('http://q90828s0.beget.tech/api/update.php', { */
      const res = await fetch('/api/update.php', { // <-- проверь имя файла на сервере
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: 'В работе' }), // новый статус
      credentials: 'include', // если нужна авторизация на сервере
    });

    if (!res.ok) {
      throw new Error('Ошибка при обновлении статуса');
    }

    const result = await res.json();
    console.log('Статус обновлён:', result);
    fetchData1(); // перезагружаем список заявок
    fetchData2();
  } catch (err) {
    console.error(err);
    alert('Не удалось обновить статус: ' + err.message);
  }
};

const fullMessage = (id) =>{
        const item4 = items1.find(i => i.id === id);
    setFullText(item4.message)
    setOpenFull('block');
  }



  return (
  <section>
    <div className='container admin'>
    <div className='autorisation_form'>
      {user ? (
        <div>
          <p className='black_text_middle'>Вы авторизованы как: <b>{user}</b></p>
          <button className='form_label_text' onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        
        <form onSubmit={handleLogin}>
          <h1 className='black_text_middle'>Авторизируйтесь</h1>
          <div className='admin_form' style={{ marginBottom: '8px' }}>
            <label className='form_label_text'>Логин: </label>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              className='input_small'
            />
          </div>
          <div className='admin_form' style={{ marginBottom: '8px' }}>
            <label className='form_label_text'>Пароль: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='input_small'
            />
          </div>
          {message && <p style={{ color: 'red' }}>{message}</p>}
          <button type="submit" className='form_label_text' >Войти</button>
        </form>
      )}
    </div>
    {user ? (
       <div className='information'>
          <div className='information_first_form'>
            
              <h1 className='black_text_middle'>Подписались на рассылку</h1>
              <div className='rass'>
                {items && items.map((item, index) => (
                  <div key={index} className='admin_items admin_small_items'>
                    <p className='gray_small'>{item.emailForPost}</p>
                  <button
                    className='button adm_but'
                    onClick={() => handleDelete(item.id)}
                  >
                    Удалить
                    </button>
                  </div>
                 ))}
                 </div>

            
        </div>
        
        <div className='information_main_form'>
                  <h1 className='black_text_middle'>Новые заявки</h1>
                  <div className='rass'>
                {getPaginatedItems().map((item1, index1) => (
                  <div key={index1} className='admin_items '>
                    <div className='line_admin_form'><p className='black_text_middle'>Дата(принятия)</p> <p className='gray_small'>{item1.date}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'> Имя:</p> <p className='gray_small'>{item1.name}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Фамилия:</p> <p className='gray_small'>{item1.last_name}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Email:</p> <p className='gray_small'>{item1.email}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Телефон</p> <p className='gray_small'>{item1.phone}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Статус</p> <p className='in_work' className={`${item1.status === "Отработано" ? 'in_work' : 'dont_work'}`}>{item1.status}</p></div>

                   <div className='line_admin_form message'><p className='black_text_middle'>Сообщение</p> <p className='gray_small_for'>{item1.message}</p></div>
                   <div className='admin_item_but'>
                      <button
                    className='button adm_but'
                    onClick={() => handleDelete1(item1.id)}
                    >
                    Удалить
                    </button>
                    <button className='button adm_but' onClick={() => fullMessage(item1.id)}>Показать полностью</button>
                    <button
                    className='button adm_but'
                    onClick={() => handleTakeInWork(item1.id)}
                    
                  >
                    Взять в работу
                    </button>
                   </div>

                  </div>
                  
                 ))}
                 </div>
                 <div className='fill_message' style={{display : openFull, position : 'fixed',}}>
                    <div className='full_text'>
                        <p className='gray_small'>{fullText}</p> 
                        <button className='button adm_but' onClick={()=>setOpenFull('none')}>закрыть</button>

                    </div>
                    </div>
                 <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        className={`button adm_but ${currentPage === pageNum ? 'active1' : ''}`}
                        onClick={() => setCurrentPage(pageNum)} // Меняем страницу, не делаем запрос
                      >
                        {pageNum}
                      </button>
                    ))}
                    </div>
                    
        </div>
         <div className='information_main_form'>
                  <h1 className='black_text_middle'>Активные заявки</h1>
                  <div className='rass'>
                {getPaginatedItems1().map((item2, index2) => (
                  <div key={index2} className='admin_items '>
                    <div className='line_admin_form'><p className='black_text_middle'>Поступило</p> <p className='gray_small'>{item2.date}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'> Имя:</p> <p className='gray_small'>{item2.name}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Фамилия:</p> <p className='gray_small'>{item2.last_name}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Email:</p> <p className='gray_small'>{item2.email}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Телефон</p> <p className='gray_small'>{item2.phone}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Статус</p> <p className='in_work' className={`${item2.status === "В работе" ? 'in_work' : 'dont_work'}`}>{item2.status}</p></div>

                   <div className='line_admin_form message'><p className='black_text_middle'>Сообщение</p> <p className='gray_small_for'>{item2.message}</p></div>
                   <div className='admin_item_but'>
                      <button
                    className='button adm_but'
                    onClick={() => handleDelete2(item2.id)}
                    >
                    Отметить как выполненную
                    </button>
                   </div>

                  </div>
                  
                 ))}
                 </div>
                 <div className="pagination">
                    {Array.from({ length: totalPages1 }, (_, i) => i + 1).map((pageNum1) => (
                      <button
                        key={pageNum1}
                        className={`button adm_but ${currentPage1 === pageNum1 ? 'active1' : ''}`}
                        onClick={() => setCurrentPage1(pageNum1)} // Меняем страницу, не делаем запрос
                      >
                        {pageNum1}
                      </button>
                    ))}
                    </div>
                    
        </div>
    
        
      <button className='button admin_button' onClick={handleRefresh}>Обновить</button>
      <Link className='button admin_button' to="/Admin2">Выполненные заявки</Link>
        </div>
         
        ):(<></>)}
    
        
    </div>
  </section>
);
}


export default Admin;