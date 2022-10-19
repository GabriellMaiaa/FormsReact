import React, { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
  // 3 - Gerenciamneto de dados
  const[name, setName] = useState();
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    setName(e.target.value)
  }

//console.log(name);
//console.log(email)

  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log('Enviando o formulário')
      console.log(name, email)
   
  }

  return (
    <div>
      {/** 5 - Envio de Fomrulário */}
        <form onSubmit={handleSubmit}>
            {/**1 - Criação de Formss */}
            <div>
                <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleChange}/>
                    
            </div>
            {/**Label envolvendo o Input */}
            <label>
              {/**Simplificação de manipulação de State */}
                <span>E-mail</span>
                <input type="email" name="email" placeholder='Digite o seu email' 
                onChange={(e) => setEmail(e.target.value)}/> {/**Como por a função diretamente no valor */}
            </label>
            <input type="submit" value="enviar" />
        </form>
       
    </div>
  )
}

export default MyForm
