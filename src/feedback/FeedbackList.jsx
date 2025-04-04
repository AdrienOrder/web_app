import React from 'react';
import { useFeedback } from './FeedbackContext'; // хук, который предоставляет доступ к данным об отзывах
import { useTheme } from '../ThemeContext';
import './FeedbackList.css'; // Импорт стилей

const FeedbackList = () => {
    const { feedbacks } = useFeedback(); // деструктурирует массив feedbacks из контекста обратной связи, 
    // чтобы получить список всех отзывов
    const { isDarkTheme } = useTheme();

    const validFeedbacks = feedbacks.filter(feedback => feedback.name && feedback.feedback); //  создает новый массив, 
    // отфильтровывая отзывы, которые содержат как имя, так и текст отзыва. Это позволяет исключить некорректные или 
    // неполные отзывы

    return (
        <div className={`feedback-list ${isDarkTheme ? 'dark' : 'light'}`}> {/* Применение класса для стилей */}
            {validFeedbacks.length > 0 && <h3>Отзывы:</h3>} {/* если есть хотя бы один валидный отзыв 
            (длина массива validFeedbacks больше 0), рендерится заголовок */}
            {validFeedbacks.map((feedback, index) => ( // использует метод map, чтобы пройтись по массиву validFeedbacks, 
            // создавая для каждого отзыва JSX-элементы
                <div key={index} className="feedback-item"> {/* для каждого отзыва создается новый элемент. Значение key={index} 
                устанавливается для уникальности каждого элемента в списке */}
                    <p className="feedback-name">{feedback.name}:</p> {/* создает элемент параграфа для имени автора отзыва */}
                    <p>{feedback.feedback}</p> {/* Создает другой элемент для отображения текста отзыва 
                    (содержимого поля feedback)*/}
                </div>
            ))}
        </div>
    );
}; // завершает определение компонента FeedbackList и возвращает JSX, который будет отображаться на экране

export default FeedbackList;