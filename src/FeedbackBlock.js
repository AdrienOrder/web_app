import React from 'react'; // Импортируем библиотеку React для создания компонентов
import FeedbackForm from './feedback/FeedbackForm'; // Импортируем компонент FeedbackForm для отправки отзывов
import FeedbackList from './feedback/FeedbackList'; // Импортируем компонент FeedbackList для отображения списка отзывов
import { useTheme } from './ThemeContext'; // Импортируем хук useTheme для доступа к информации о текущей теме
import './FeedbackBlock.css'; // Импортируем стили для компонента FeedbackBlock

const FeedbackBlock = () => {
    const { isDarkTheme } = useTheme(); // Получаем информацию о том, активна ли темная тема

    return (
        <div className={`feedback-block ${isDarkTheme ? 'dark' : 'light'}`}>
            <h2>Обратная связь</h2>
            <FeedbackForm /> {/* Вставляем компонент формы обратной связи */}
            <FeedbackList /> {/* Вставляем компонент списка отзывов */}
        </div>
    );
};

export default FeedbackBlock;
