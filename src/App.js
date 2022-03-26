import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;

