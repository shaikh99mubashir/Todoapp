import Todo from './Component/Todo';
import Navbars from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import './App.css';

function App() {
  return (
    <div>
      <Navbars/>
      <Todo/>
    </div>
  );
}

export default App;
