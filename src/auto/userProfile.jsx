// src/components/UserProfile.jsx
import React from 'react';
import { useAuth } from '../auto/AuthContext'; // этот хук будет использоваться для доступа к данным о пользователе 
// и аутентификации в контексте

// этот компонент будет отображать информацию о пользователе
const UserProfile = () => {
    const { userEmail } = useAuth(); // Получаем email пользователя из хука, это значение будет содержать 
    // электронную почту пользователя, если он аутентифицирован

    return (
        <div>
            <h3>Профиль пользователя</h3>
            <p>Электронная почта: {userEmail}</p>
        </div>
    );
};

export default UserProfile;