import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
  // 6 -Controled Inputs
  // 3 - Gerenciamneto de dados
  const[name, setName] = useState(user ? user.name : "");
  const[email, setEmail] = useState(user ? user.email : "");
  const[bio, setBio] = useState("")
  const[teste, setTeste] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

//console.log(name);
//console.log(email)

  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log('Enviando o formulário')
      console.log(name, email, bio, teste)

  // 7 - Limpando formulários - Tudo é executado após todas
  // as funções acima
    setName("");
    setEmail("");
    setBio("");
    setTeste("");
  }

  return (
    <div>
      {/** 5 - Envio de Fomrulário */}
        <form onSubmit={handleSubmit}>
            {/**1 - Criação de Formss */}
            <div>
                <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder='Digite o seu nome' 
                    onChange={handleChange} value={name}/>
                    
            </div>
            {/**Label envolvendo o Input */}
            <label>
              {/**Simplificação de manipulação de State */}
                <span>E-mail</span>
                <input type="email" name="email" placeholder='Digite o seu email' 
                onChange={(e) => setEmail(e.target.value)} value={email}/> {/**Como por a função diretamente no valor */}
            </label>
            {/**8 - Textarea */}
            <label>
              <span>Bio:</span>
              <textarea name="bio" placeholder='Descrição do usuário'
              onChange={(e) => {setBio(e.target.value)}} value={bio}></textarea>
            </label>
            <label>
              <span>Sobre você</span>
              <input type="textarea" name='Sobre você' 
              placeholder='Digite aqui suas experiências' onChange={(e) => {setTeste(e.target.value)}}
              value={teste}/>
            </label>
            {/** 9 - SELECT no React */}
            <label>
              <span>Função Nova</span>
            </label>
            <input type="submit" value="enviar" />

        </form>
       
    </div>
  )
}

export default MyForm
