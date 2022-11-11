import './App.css';
import { BrowserRouter, Route, Routes, unstable_HistoryRouter as History_Router } from 'react-router-dom'
import {history} from './utils/history'
import TrangChu from './pages/TrangChu/TrangChu';

function App() {
    return (
        <History_Router history={history}>
            <Routes>
                <Route to='/trangchu' element={<TrangChu />} />
            </Routes>
        </History_Router>
    );
}

export default App;
