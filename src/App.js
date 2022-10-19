
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Formulário Teste</h2>
      <MyForm user={{name: "Gabriel Ribeiro Maia", email: "gribeiromaia736@gmail.com"}}/>
    </div>
  );
}

export default App;
