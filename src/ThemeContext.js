// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Создаем контекст, этот контекст будет использоваться для передачи состояния и функций, связанных с темой, в дерево компонентов
const ThemeContext = createContext();

// Создаем провайдер, который будет оборачивать другие компоненты и предоставлять им доступ к контексту
export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // использует useState для создания состояния isDarkTheme, 
    // которое инициализируется как false, что означает, что светлая тема активна по умолчанию. 
    // функция setIsDarkTheme будет использоваться для обновления этого состояния

    // Определяет функцию toggleTheme, которая изменяет текущее состояние темы на противоположное
    // Она использует функцию обновления состояния, которая принимает предыдущее значение и меняет его на противоположное 
    // (темную на светлую и наоборот)
    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    // Эффект для изменения стилей body
    //начинает блок useEffect, который выполняется каждый раз, когда изменяется значение isDarkTheme. 
    // Этот эффект будет обновлять стили body в зависимости от текущей темы
    useEffect(() => {
        if (isDarkTheme) {
            document.body.style.backgroundColor = 'rgb(54, 6, 2)'; // Цвет фона для темной темы
        } else {
            document.body.style.backgroundColor ='rgb(220, 164, 8)'; // Цвет фона для светлой темы
        }
    }, [isDarkTheme]); // Зависимость от isDarkTheme, это означает, что эффект будет повторно выполняться каждый раз, 
    // когда это значение изменяется


    // возвращает ThemeContext.Provider, которому передан объект со значениями isDarkTheme и toggleTheme. 
    // дДочерние компоненты, переданные в {children}, имеют доступ к этим значениям через контекст
    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Хук, который позволяет компонентам получать доступ к контексту темы
export const useTheme = () => {
    return useContext(ThemeContext); // использует useContext, чтобы получить текущее значение ThemeContext и возвращает его
};