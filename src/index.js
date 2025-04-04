import React, { StrictMode } from 'react'; // Импортируем библиотеку React и компонент StrictMode для проверки на наличие проблем в приложении
import ReactDOM from 'react-dom/client'; // Импортируем библиотеку ReactDOM для работы с DOM в приложении React
import App from './App'; // Импортируем основной компонент приложения App

// Получаем корневой элемент из DOM, в который будет монтироваться приложение
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение внутри корневого элемента
root.render(
    <StrictMode> {/* Включаем строгий режим для выявления потенциальных проблем в коде */}
        <App /> {/* Вставляем основной компонент приложения App */}
    </StrictMode>
);
