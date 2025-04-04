// src/components/UserProfile.jsx
import React from 'react'; // Импортируем React для создания компонента
import { useAuth } from '../auto/AuthContext'; // Импортируем хук useAuth для доступа к данным о пользователе и аутентификации в контексте

// Этот компонент будет отображать информацию о пользователе
const UserProfile = () => {
    const { userEmail } = useAuth(); // Получаем email пользователя из хука useAuth, это значение будет содержать 
    // электронную почту пользователя, если он аутентифицирован

    return (
        <div> {/* Контейнер для информации о пользователе */}
            <h3>Профиль пользователя</h3> {/* Заголовок для секции профиля пользователя */}
            <p>Электронная почта: {userEmail}</p> {/* Отображаем электронную почту пользователя */}
        </div>
    );
};

export default UserProfile; // Экспортируем компонент UserProfile по умолчанию
