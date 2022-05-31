import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AgregarCategoria = ({setCategoria}) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
  
    setInputValue(e.target.value);
  }

  const handleSubmit = (e)=>{
   e.preventDefault();
   if(inputValue.trim().length > 2){
     //console.log(inputValue);  
     setCategoria(inputValue);
     setInputValue('');
   }
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
        Buscador
        <input type="text" value={inputValue}
        onChange={handleChange}
        placeholder="categoria"
        />
    </form>
    </>
  )
}

AgregarCategoria.prototype = {
   setCategoria: PropTypes.func.isRequired 
}