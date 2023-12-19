import './App.css';

// Import components
import SideBar from './components/side-bar/side-bar';
import NavBar from './components/nav-bar/nav-bar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <SideBar />
          <div className="main-panel">
            <div className="content-wrapper">
                <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
