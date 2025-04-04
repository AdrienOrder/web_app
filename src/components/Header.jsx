// components/Header.js
import React from 'react'; // Импортируем React для создания компонентов
import Menu from './Menu'; // Импортируем компонент Menu для отображения меню навигации
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme для доступа к информации о теме
import { useAuth } from '../auto/AuthContext'; // Импортируем хук useAuth для работы с аутентификацией пользователя
import '../components/Header.css'; // Импортируем стили для компонента Header
import { useNavigate } from 'react-router-dom'; // Импортируем для маршрутизации

const Header = () => {
    const { isDarkTheme, toggleTheme } = useTheme(); // использует хук useTheme для получения текущего состояния темы isDarkTheme 
    // и функции для переключения темы toggleTheme
    const { isAuthenticated, logout, userEmail } = useAuth(); // использует хук useAuth для получения данных о статусе 
    // аутентификации пользователя (isAuthenticated), функции выхода (logout) и электронной почте пользователя (userEmail)
    const navigate = useNavigate(); // получаем navigate для навигации 

    const handleEmailClick = () => {
        navigate('/profile'); // переход на страницу профиля пользователя 
    };

    return (
        <header className={`header ${isDarkTheme ? 'dark' : 'light'}`}>
            {isAuthenticated && <Menu />} {/* Условие для отображения Menu */}

            <button className="theme-toggle-button" onClick={toggleTheme}>
                {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
            </button>
            {isAuthenticated ? (
                <>
                    <span className="user-email" onClick={handleEmailClick}> {/* Отображаем email пользователя, 
                    который можно кликнуть */}
                        {userEmail} {/* Email пользователя */}
                    </span>
                    <button className="logout-button" onClick={logout}>Выйти</button> {/* Кнопка выхода из аккаунта */}
                </>
            ) : (
                <button className="auth-button" onClick={() => alert('Заполните форму')}>Войти</button> 
                // Кнопка для входа из аккаунта
            )}
        </header>
    );
};

export default Header;