import React, { useCallback } from 'react'; // Импортируем React и хук useCallback для оптимизации функций
import { useForm } from 'react-hook-form'; // Импортируем хук useForm для управления формами
import { useFeedback } from './FeedbackContext'; // Импортируем контекст обратной связи для добавления отзывов
import { useTheme } from '../ThemeContext'; // Импортируем контекст темы для получения информации о текущей теме
import './FeedbackList.css'; // Импортируем стили для компонента FeedbackList


// вызывает хук useForm, чтобы получить методы управления формами
// register используется для регистрации элементов формы, handleSubmit обрабатывает отправку формы, а reset сбрасывает 
// значения формы
const FeedbackForm = () => {
    const { register, handleSubmit, reset } = useForm();
    // деструктурирует функцию addFeedback из контекста обратной связи для добавления новых отзывов
    const { addFeedback } = useFeedback();
    const { isDarkTheme } = useTheme();

    // создает функцию onSubmit, которая принимает данные формы. Использует useCallback для оптимизации производительности, 
    // чтобы не пересоздавать функцию при каждом рендере
    const onSubmit = useCallback((data) => {
        addFeedback({ name: data.name, feedback: data.feedback }); // вызывает функцию addFeedback и передает ей объект 
        // с данными отзыва (имя и текст отзыва), которые были вводены пользователем в форму
        reset(); // сбрасываем форму
    }, [addFeedback, reset]); // определяет зависимости, чтобы onSubmit пересоздавался только при изменении addFeedback или reset

    return (
        <form className={`feedback-form ${isDarkTheme ? 'dark' : 'light'}`} onSubmit={handleSubmit(onSubmit)}> {/* связывает 
        обработчик отправки формы с handleSubmit(onSubmit) */}
            <div className="form-field"> {/* Контейнер для поля ввода имени */}
                <label>Ваше имя:</label> {/* Метка для поля ввода имени */}
                <input {...register('name', { required: true })} placeholder="Введите ваше имя" /> {/* Поле ввода имени, регистрируемое в форме */}
            </div>
            <div className="form-field"> {/* Контейнер для поля ввода отзыва */}
                <label>Ваш отзыв:</label> {/* Метка для текстового поля отзыва */}
                <textarea {...register('feedback', { required: true })} placeholder="Введите ваш отзыв" /> {/* Текстовое поле 
                для отзыва, регистрируемое в форме */}
            </div>
            <button type="submit">Отправить отзыв</button> {/* Кнопка для отправки формы */}
        </form>
    );
};

export default FeedbackForm;
