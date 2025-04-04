import React, { createContext, useContext, useState } from 'react'; // Импортируем необходимые функции из библиотеки React

// Создаем контекст для обратной связи
const FeedbackContext = createContext(); 

// Создаем провайдер для FeedbackContext
export const FeedbackProvider = ({ children }) => {
    // Используем хук useState для хранения массива отзывов
    const [feedbacks, setFeedbacks] = useState([]); 
    
    // Функция для добавления нового отзыва
    const addFeedback = (feedback) => {
        // Обновляем состояние отзывов, добавляя новый отзыв в массив
        setFeedbacks(prevFeedbacks => [...prevFeedbacks, feedback]);
    };

    // Возвращаем провайдер контекста с доступными значениями
    return (
        <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
            {children} {/* Отображаем дочерние компоненты внутри провайдера */}
        </FeedbackContext.Provider>
    );
};

// Создаем пользовательский хук для доступа к FeedbackContext
export const useFeedback = () => {
    return useContext(FeedbackContext); // Возвращаем значение контекста
};
