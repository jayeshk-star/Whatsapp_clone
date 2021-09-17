
import './App.css';
import Actualchat from './compoents/Actualchat';
import Sidebar from './compoents/Sidebar';

function App() {
  return (
    <>
    <div className="main">
      <div className="main_continer">
       <Sidebar />
       <Actualchat />
      </div>

    </div>
    </>
  );
}

export default App;
