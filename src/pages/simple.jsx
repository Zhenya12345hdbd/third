import React, { useState, useEffect } from 'react';

// Допустим, этот JSON приходит откуда-то (из API, Redux, контекста и т.д.)
const mockJsonData = { id: 1, status: 'updated' }; 

const SimplePopup = ({ jsonData }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Эффект срабатывает каждый раз, когда меняется jsonData
  useEffect(() => {
    // Если JSON изменился (или просто пришел новый) - показываем окно
    if (jsonData) {
      setIsVisible(true);
      
      // Таймер на 10 секунд
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);

      // Важно: очищаем таймер при размонтировании или перед следующим запуском эффекта
      return () => clearTimeout(timer);
    }
  }, [jsonData]); // Зависимость: следим за изменениями этого объекта

  const handleJsonChange = (newJsonString) => {
  try {
    const data = JSON.parse(newJsonString); // Пытаемся распарсить
    setIsVisible(true); // Если успешно - показываем окно
    
    setTimeout(() => setIsVisible(false), 10000);
  } catch (error) {
    console.error('Ошибка парсинга JSON:', error);
    // Можно показать ошибку вместо окна
  }
};

  return (
    <div style={{ position: 'relative' }}>
      {/* Кнопки больше нет, окно появляется само */}

      {isVisible && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '300px',
          padding: '20px',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 1000,
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <strong>Данные обновлены!</strong><br/>
          Проверьте новый JSON. Окно исчезнет через 10 сек.
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default SimplePopup;