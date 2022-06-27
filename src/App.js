import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Options from './Components/Options/Options';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element=
              {<DialogsContainer />} />
            <Route path='/profile/*' element=
              {<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/options' element={<Options />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

