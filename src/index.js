import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import 'antd/dist/antd.min.css'
import './assets/sass/main.scss'
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import { DOMAIN_BE } from './utils/constant';
// Cấu hình realtime (websocket với signalR)
import * as signalR from '@aspnet/signalr'

// Đoạn code để kết nối đến server lắng nghe sự kiện từ server
export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN_BE}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();

connection.start().then(()=>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}).catch((error)=>{
    console.log(error)
})


