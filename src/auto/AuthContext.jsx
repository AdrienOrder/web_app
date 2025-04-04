// src/auto/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react'; // Импортируем необходимые функции из React

// createContext: Создает новый контекст, который позволяет передавать данные через дерево компонентов без необходимости 
// передавать их через пропсы

// useContext: Позволяет компонентам подписываться на контекст и получать его значение
// useState: Хук для управления состоянием в функциональных компонентах

const AuthContext = createContext(); // Создаем новый контекст для хранения и передачи данных аутентификации

export const AuthProvider = ({ children }) => { // Компонент AuthProvider, который будет оборачивать дочерние компоненты
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Состояние для отслеживания статуса аутентификации 
    // пользователя
    const [userEmail, setUserEmail] = useState(""); // Состояние для хранения адреса электронной почты текущего 
    // аутентифицированного пользователя, изначально пустое
    const [users, setUsers] = useState({}); // Состояние для хранения зарегистрированных пользователей в виде объекта

    const login = (email, password) => { // Функция для входа пользователя
        // Проверяем, существует ли пользователь и совпадает ли пароль
        if (users[email]) { // Если пользователь с таким email существует
            if (users[email] === password) { // Если введенный пароль совпадает с сохраненным
                setIsAuthenticated(true); // Устанавливаем статус аутентификации в true
                setUserEmail(email); // Сохраняем email аутентифицированного пользователя
                return true; // Возвращаем true для успешного входа
            } else {
                alert("Неверный пароль."); // Выводим сообщение об ошибке при неверном пароле
                return false; // Возвращаем false для неверного пароля
            }
        } else {
            return false; // Возвращаем false, если пользователь не зарегистрирован
        }
    };

    const logout = () => { // Функция для выхода пользователя
        setIsAuthenticated(false); // Устанавливаем статус аутентификации в false
        setUserEmail(""); // Очищаем email аутентифицированного пользователя
    };

    const register = (email, password) => { // Функция для регистрации нового пользователя
        if (users[email]) { // Проверяем, существует ли пользователь с таким email
            return false; // Если пользователь уже существует, возвращаем false
        }
        // Сохраняем пользователя в состоянии users
        setUsers(prevUsers => ({ ...prevUsers, [email]: password })); // Обновляем состояние пользователей, добавляя нового
        setIsAuthenticated(true); // Устанавливаем статус аутентификации в true
        setUserEmail(email); // Сохраняем email нового аутентифицированного пользователя
        return true; // Возвращаем true для успешной регистрации
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register, userEmail }}> {/* Передаем данные 
        аутентификации через провайдер контекста */}
            {children} {/* Отображаем дочерние компоненты */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext); // Создаем хук для использования контекста аутентификации 
// в других компонентах
