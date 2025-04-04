// App.js
import React from 'react'; // Импортируем библиотеку React
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter для маршрутизации
import { ThemeProvider } from './ThemeContext'; // Импортируем ThemeProvider для управления темой приложения
import { AuthProvider } from './auto/AuthContext'; // Импортируем AuthProvider для управления аутентификацией пользователей
import { FeedbackProvider } from './feedback/FeedbackContext'; // Импортируем FeedbackProvider для управления обратной связью
import FeedbackBlock from './FeedbackBlock'; // Импортируем компонент FeedbackBlock для отображения отзывов
import Header from './components/Header'; // Импортируем компонент Header для отображения заголовка приложения
import Content from './components/Content'; // Импортируем компонент Content для основного содержимого приложения
import Footer from './components/Footer'; // Импортируем компонент Footer для отображения нижнего колонтитула приложения

// Основной компонент приложения
const App = () => {
    return (
        <BrowserRouter> {/* Оборачиваем приложение в BrowserRouter для поддержки маршрутизации */}
            <ThemeProvider> {/* Оборачиваем в ThemeProvider для доступа к теме во всех дочерних компонентах */}
                <FeedbackProvider> {/* Оборачиваем в FeedbackProvider для доступа к контексту обратной связи */}
                    <AuthProvider> {/* Оборачиваем в AuthProvider для управления аутентификацией */}
                        <Header /> {/* Вставляем компонент Header */}
                        <Content /> {/* Вставляем компонент Content */}
                        <FeedbackBlock /> {/* Вставляем компонент FeedbackBlock для отображения отзывов */}
                        <Footer /> {/* Вставляем компонент Footer */}
                    </AuthProvider>
                </FeedbackProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App; // Экспортируем основной компонент App по умолчанию
