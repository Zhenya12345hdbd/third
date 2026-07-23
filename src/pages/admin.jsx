import './admin.css'

import { useState } from "react";
import { useEffect } from "react";
import { data } from "react-router-dom";


let menulis

function Admin(all) {
   const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [status, setStatus] = useState(null);

    const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/data.json?t=' + new Date().getTime());
      if (!res.ok) throw new Error('Network error');
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки: {error.message}</div>;


   

  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost/delete.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Успешно! Первый элемент удален.');
        // Тут можно вызвать функцию обновления списка в React, 
        // чтобы интерфейс сразу отразил изменения
        // setLoading(); 
        await fetchData(); 
      } else {
        setStatus(`Ошибка: ${result.message}`);
      }
    } catch (error) {
      setStatus('Произошла ошибка сети или сервера');
      console.error(error);
    }
  };
 



  return (
    <section>
         <div className='container admin'>
            <div className='spread'>
                <h1>Подписались на рассылку</h1>
                    {data.map((item, index) => (
                        <div key={index} className='admin_items'>
                        <p className='gray_small'>{item.emailForPost}</p>
                         </div>
      ))}
        <div className='buttons'>
            <button className='button' onClick={handleDelete}>Удалить</button> 
            <button className='button' onClick={fetchData}>Обновить</button>
      </div>
            

        </div>
        <div className='input_form'>
                <h1>Форма обратной связи</h1>
                    {data.map((item, index) => (
                        <div key={index} className='admin_items'>
                        <h3>{item.name}</h3>
                        <p>{item.emailForPost}</p>
                        <p>{item.id}</p>
                        <h3>{item.date}</h3>
          
                         </div>
      ))}
            <div className='buttons'>
            <button className='button' onClick={handleDelete}>Удалить</button> 
            <button className='button' onClick={fetchData}>Обновить</button>
      </div>

        </div>
       
      
    </div>



    </section>
   
  );
}


export default Admin;
