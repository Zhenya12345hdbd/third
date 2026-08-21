import { useEffect, useState } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';



function Admin2() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items3, setItems3] = useState([]);
  const [fullText, setFullText] = useState();
  const [openFull, setOpenFull] = useState('none');
    const [currentPage2, setCurrentPage2] = useState(1); // Текущая страница
const ITEMS_PER_PAGE = 6;
const totalPages2 = items3 ? Math.ceil(items3.length / ITEMS_PER_PAGE) : 1;



    const fetchData3 = async () => {
      try {
       /*  const response = await fetch('/api/finish.json'); */
        /* const response = await fetch('http://q90828s0.beget.tech/api/end.json'); */
        const response = await fetch('/api/end.php');
        if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
        const data3 = await response.json();
        const sorted = [...data3].sort((b, a) =>
          new Date(a.date) - new Date(b.date)
        );
        setItems3(sorted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    

  useEffect(() => {
   
    fetchData3();
  }, []);

  const fullMessage = (id) =>{
        const item4 = items3.find(i => i.id === id);
    setFullText(item4.message)
    setOpenFull('');
  }

  const generatePdf = (id) => {
    const item4 = items3.find(i => i.id === id);
    const content = [
    { text: `Заявка №${item4.id}`, style: 'header' },
    [
      [{ text: 'Дата', bold: true }, { text: item4.date }],
      [{ text: 'Имя', bold: true }, { text: item4.name }],
      [{ text: 'Фамилия', bold: true }, { text: item4.last_name }],
      [{ text: 'Email', bold: true }, { text: item4.email }],
      [{ text: 'Телефон', bold: true }, { text: item4.phone }],
      [{ text: 'Статус', bold: true }, { text: item4.status }],
      [{ text: 'Сообщение', bold: true }, { text: item4.message }],
    ],
  ];

    const docDefinition = {
      content,
      styles: {
        header: { fontSize: 18, bold: true, margin: [50, 0, 20, 0] },
      },
    };

    pdfMake.createPdf(docDefinition).download('items.pdf');
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;


  const getPaginatedItems2 = () => {
    if (!items3) return [];
    const startIndex = (currentPage2 - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return items3.slice(startIndex, endIndex);
  };

  return (
    <section>
    <div className='container admin'>
      
      <div className='information_main_form'>
                  <h1 className='black_text_middle'>Выполненные заявки</h1>
                  <div className='rass'>
                {getPaginatedItems2().map((item2, index2) => (
                  <div key={index2} className='admin_items '>
                    <div className='line_admin_form'><p className='black_text_middle'>Поступило</p> <p className='gray_small'>{item2.created_at}</p></div>
                    <div className='line_admin_form'><p className='black_text_middle'>Выполненно</p> <p className='gray_small'>{item2.finished_at}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'> Имя:</p> <p className='gray_small'>{item2.name}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Фамилия:</p> <p className='gray_small'>{item2.last_name}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Email:</p> <p className='gray_small'>{item2.email}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Телефон</p> <p className='gray_small'>{item2.phone}</p></div>
                   <div className='line_admin_form'><p className='black_text_middle'>Статус</p> <p className='complate'>{item2.status}</p></div>


                   <div className='line_admin_form message'><p className='black_text_middle'>Сообщение</p> <p className='gray_small_for'>{item2.message}</p></div>
                   <div className='admin_item_but'>

                    <button className='button adm_but' onClick={() => generatePdf(item2.id)}>Скачать чек</button>
                    <button className='button adm_but' onClick={() => fullMessage(item2.id)}>Показать полностью</button>
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
                    {Array.from({ length: totalPages2 }, (_, i) => i + 1).map((pageNum1) => (
                      <button
                        key={pageNum1}
                        className={`button adm_but ${currentPage2 === pageNum1 ? 'active1' : ''}`}
                        onClick={() => setCurrentPage2(pageNum1)} // Меняем страницу, не делаем запрос
                      >
                        {pageNum1}
                      </button>
                    ))}
                    </div>
                    
        </div>



    </div>
    </section>

  );
}

export default Admin2;
