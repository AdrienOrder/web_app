// src/components/AuthContainer.jsx
import React, { useState } from 'react'; // позволяет управлять состоянием в функциональных компонентах
import AuthForm from './AuthForm';
import './AuthContainer.css';
import { useAuth } from './AuthContext';
import { useTheme } from '../ThemeContext';

const AuthContainer = () => {
    const { isAuthenticated } = useAuth();
    const [isLogin, setIsLogin] = useState(true); // создаем состояние isLogin, которое по умолчанию установлено в true, 
    // что означает, что форма будет отображать авторизацию. Функция setIsLogin используется для обновления этого состояния
    const { isDarkTheme } = useTheme();

    return (
        <div className={`auth-container ${isDarkTheme ? 'dark' : 'light'}`}>
            {isAuthenticated ? ( // проверка авторизации пользователя
                <h2>Вы уже авторизованы как {isAuthenticated.userEmail}</h2>
            ) : (
                <> {/* Используется для группировки нескольких элементов без добавления лишнего узла в DOM */}
                    <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                    <AuthForm isLogin={isLogin} onSwitchToLogin={() => setIsLogin(true)} /> {/* рендерим компонент AuthForm, 
                    передавая ему два пропса: isLogin (для определения, в каком режиме находится форма) и onSwitchToLogin, 
                    который устанавливает isLogin в true, когда пользователь хочет переключиться на режим авторизации */}
                    <button onClick={() => setIsLogin(prev => !prev)}>
                        {isLogin ? "Нет аккаунта? Пройдите регистрацию." : "Имеется аккаунт? Авторизуйтесь."}
                    </button>
                </>
            )}
        </div>
    );
};

export default AuthContainer;