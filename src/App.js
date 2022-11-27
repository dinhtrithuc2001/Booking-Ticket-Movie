import { Route, Routes, unstable_HistoryRouter as History_Router } from 'react-router-dom'
import { history } from './utils/history'
import AdminTemplate from './templates/AdminTemplate/AdminTemplate'
import Contact from './pages/Contact';
import New from './pages/New';
import Login from './pages/Login';
import Register from './pages/Register';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Home from './pages/Home';
import InforUser from './pages/InforUser';


function App() {
    return (
        <History_Router history={history}>
            <Routes>
                <Route path='/' element={<UserTemplate />}>
                    <Route index path='/' element={<Home />} />
                    <Route path='*' element={<Home />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='inforUser' element={<InforUser />} />
                    <Route path='new' element={<New />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
                <Route path='/admin' element={<AdminTemplate />}>
                    
                </Route>    
            </Routes>
        </History_Router>
    );
}

export default App;
