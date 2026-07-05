import './form.css'

function Form() {
    
  return (
    <section>
       <div className='container form'>
            <div className='form_top'>
                <form action="" >
                    <label htmlFor="name" className='form_label_text'>First Name</label>
                    <input type='text' className='input_small' placeholder='First Name' name='name'/>
                </form>
                <form>
                    <label htmlFor="last_name" className='form_label_text'>First Name</label>
                    <input type='text' className='input_small' placeholder='Last Name' name='last_name'/>
                </form>
                
            </div>
            <div className='form_bottom'>
                <form>
                    <label htmlFor="email" className='form_label_text'>Email</label>
                    <input type='email' className='input_big' placeholder='Email' name='email'/>
                </form>

                <form>
                    <label htmlFor="phone" className='form_label_text'>Phone Number</label>
                    <input type='tel' className='input_big' placeholder='Phone' name='phone'/>
                </form>
                
                    <form>
                        <label htmlFor="message" className='form_label_text'>First Name</label>
                        <input type='text'  className='input_area' placeholder='Message' name='message'/>
                    </form>
                <button className='button pos'>Send Massage</button>
            </div>

       </div>
    </section>
    
  );
}

export default Form;
