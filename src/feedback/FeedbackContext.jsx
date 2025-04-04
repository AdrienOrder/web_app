import React, { createContext, useContext, useState } from 'react';

// Создаем контекст для отзывов, который будет использоваться для хранения и передачи данных о отзывах в приложении
// Контекст позволяет передавать данные через дерево компонентов без необходимости передавать их через пропсы на каждом уровне
const FeedbackContext = createContext();

// Создаёт компонент FeedbackProvider, который будет контекстным провайдером для FeedbackContext
// Принимает children, что позволяет провайдеру оборачивать другие компоненты и предоставлять им доступ к контексту
export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([]); // Инициализирует состояние feedbacks с помощью хука useState. 
    // По умолчанию оно является пустым массивом. setFeedbacks — функция для обновления состояния

    // Определяет функцию addFeedback, которая принимает объект отзыва
    // Когда вызывается эта функция, вызывает setFeedbacks, чтобы обновить состояние
    // Новый отзыв добавляется в конец предыдущего массива отзывов с помощью оператора расширения
    const addFeedback = (feedback) => {
        setFeedbacks(prevFeedbacks => [...prevFeedbacks, feedback]);
    };

    // Возвращает JSX-разметку, где FeedbackContext.Provider оборачивает children. 
    // Значение, передаваемое через value, включает массив отзывов и функцию для их добавления, 
    // чтобы дочерние получили доступ к данным
    return (
        <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};

// Создаёт кастомный хук useFeedback, который использует useContext для доступа к FeedbackContext
// Это позволяет другим компонентам легко использовать контекст, не имея необходимости явно передавать его через пропсы
export const useFeedback = () => {
    return useContext(FeedbackContext);
};