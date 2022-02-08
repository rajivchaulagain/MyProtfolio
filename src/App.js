import './App.css';
import Navbar from './components/molecules/Navbar'
import Header from './components/molecules/Header'
import 'bootstrap/dist/css/bootstrap.css';
import TodoList from './components/layout/TodoList'

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
