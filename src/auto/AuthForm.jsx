// src/components/AuthForm.jsx
import React, { useCallback } from 'react'; // позволяет мемоизировать функции, чтобы избежать их пересоздания при каждом рендере
import { useForm } from 'react-hook-form';
import { useAuth } from './AuthContext';
import './AuthContainer.css';
import { useTheme } from '../ThemeContext';

const AuthForm = ({ isLogin, onSwitchToLogin }) => { // принимает два пропса: isLogin (логическое значение, указывающее, 
// находится ли пользователь на странице входа) и onSwitchToLogin (функция для переключения между формами входа и регистрации

    // register: Функция для регистрации полей формы
    // handleSubmit: Функция для обработки отправки формы
    // errors: Объект, содержащий ошибки валидации для полей формы

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, register: registerUser } = useAuth();
    const { isDarkTheme } = useTheme();

    const onSubmit = useCallback((data) => { // Создает функцию для обработки отправки формы, которая принимает объект data 
    // (содержащий значения полей формы)
        if (isLogin) {
            const isLoggedIn = login(data.email, data.password); // Вызывает функцию login, передавая введенные email и password, 
            // и сохраняет результат в переменной isLoggedIn
            if (!isLoggedIn) { // Если вход не удался
                alert("Пользователь не зарегистрирован. Пожалуйста, пройдите регистрацию.");
                onSwitchToLogin(); // Переключаемся на форму регистрации
            }
        } else { // если isLogin ложно
            const isRegistered = registerUser(data.email, data.password); // Вызывает функцию registerUser, 
            // передавая введенные email и password, и сохраняет результат в переменной isRegistered
            if (!isRegistered) {
                alert("Пользователь с таким email'ом уже существует.");
                onSwitchToLogin(); // Переключаемся на форму авторизации
            }
        }
    }, [isLogin, login, registerUser, onSwitchToLogin]); // Указывает зависимости для useCallback, 
    // чтобы функция пересоздавалась только при изменении этих значений

    return (
        <form className={`auth-form ${isDarkTheme ? 'dark' : 'light'}`} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Электронная почта:</label>
                <input
                    type="text"
                    {...register('email', {
                        required: "Это поле обязательно для заполнения", // Обязательное поле с сообщением об ошибке
                        pattern: { // Регулярное выражение для проверки формата email. Если есть ошибка, отображается сообщение
                            value: /^[a-zA-Z0-9._%+-]+@(mail\.ru|gmail\.com|yandex\.ru)$/,
                            message: "Email должен быть в следующем формате: example@mail.ru, example@gmail.com или example@yandex.ru"
                        }
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label>Пароль:</label>
                <input type="password" {...register('password', { required: true })} />
                {errors.password && <span> Это поле тоже обязательно для заполнения</span>}
            </div>
            <button type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        </form>
    );
};

export default AuthForm;