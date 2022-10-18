import React from 'react'
import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        <form>
            {/**1 - Criação de Formss */}
            <div>
                <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder='Digite o seu nome' />
                    
            </div>
            {/**Label envolvendo o Input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder='Digite o seu email' />
            </label>
            <input type="submit" value="enviar" />
        </form>
      
    </div>
  )
}

export default MyForm
