

function Button(but) {
  return (
            <a href="#" className='button' style={{background: but.background , color : but.color, alignSelf: but.alignSelf}}>{but.text}</a>
  );
}

export default Button;
