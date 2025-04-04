import React, { useCallback } from 'react'; // используется для оптимизации производительности при передаче функций, 
// предотвращая их пересоздание при каждом рендере
import { useForm } from 'react-hook-form';
import { useFeedback } from './FeedbackContext'; // позволяет использовать контекст обратной связи и доступ к функциям 
// добавления отзывов
import { useTheme } from '../ThemeContext';
import './FeedbackList.css';


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
            <div className="form-field">
                <label>Ваше имя:</label>
                <input {...register('name', { required: true })} placeholder="Введите ваше имя" /> {/*  создает поле для 
                ввода имени пользователя с обязательной регистрацией (required: true). Использует оператор 
                распространения ... для регистрации поля с register */}
            </div>
            <div className="form-field">
                <label>Ваш отзыв:</label>
                <textarea {...register('feedback', { required: true })} placeholder="Введите ваш отзыв" />
            </div>
            <button type="submit">Отправить отзыв</button>
        </form>
    );
};

export default FeedbackForm;
