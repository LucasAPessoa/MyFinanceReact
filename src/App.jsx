
import './App.css';
import './index.css';

import { Routes ,Route, BrowserRouter } from 'react-router-dom';


import  MainLayout  from './layouts/MainLayout.jsx';
import RegistrationsPage from './pages/RegistrationsPage.jsx';
import Updates from './pages/Updates.jsx';
import LoginPage from './pages/LoginPage.jsx';


function App() {


  return (


        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route path="" element={<LoginPage />} />
          {/* Colocar a página de login como index */}
            <Route path="cadastros" element={<RegistrationsPage/>} />
            <Route path="updates" element={<Updates/>} />
          </Route>
        </Routes>
        </BrowserRouter>

  )

}

export default App
