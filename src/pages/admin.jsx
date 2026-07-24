import './admin.css'

import { useState } from "react";
import { useEffect } from "react";



let menulis

function Admin() {
  const [items, setItems] = useState(null); // Переименовали data в items для ясности
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
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

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки: {error.message}</div>;

 const handleDelete = async (id) => {
  try {
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

  return (
    <section>
      <div className='container admin'>
        <div className='spread'>
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
   

        </div>
       
      
    </div>



    </section>
   
  );
}


export default Admin;
