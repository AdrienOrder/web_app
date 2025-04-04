// src/auto/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

// createContext: Создает новый контекст, который позволяет передавать данные через дерево компонентов без необходимости 
// передавать их через пропсы

// useContext: Позволяет компонентам подписываться на контекст и получать его значение
// useState: Хук для управления состоянием в функциональных компонентах


const AuthContext = createContext(); // будет использоваться для хранения и передачи данных аутентификации

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState(""); // будет хранить адрес электронной почты текущего аутентифицированного 
    // пользователя, изначально пустое
    const [users, setUsers] = useState({}); // Хранение зарегистрированных пользователей в виде объекта

    const login = (email, password) => {
        // Проверяем, существует ли пользователь и совпадает ли пароль
        if (users[email]) {
            if (users[email] === password) {
                setIsAuthenticated(true);
                setUserEmail(email);
                return true; // Успешный вход
            } else {
                alert("Неверный пароль.");
                return false; // Неверный пароль
            }
        } else {
            return false; // Пользователь не зарегистрирован
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserEmail("");
    };

    const register = (email, password) => {
        if (users[email]) {
            // Если пользователь уже существует, ничего не делаем
            return false;
        }
        // Сохраняем пользователя
        setUsers(prevUsers => ({ ...prevUsers, [email]: password }));
        setIsAuthenticated(true);
        setUserEmail(email);
        return true; // Успешная регистрация
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register, userEmail }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);