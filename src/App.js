import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Options from './Components/Options/Options';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music />}/>
            <Route path='/options' element={<Options/>}/>
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

