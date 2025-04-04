
// components/Content.js
import React from 'react'; // Импортируем React для создания компонентов
import { Routes, Route } from 'react-router-dom'; // Импортируем компоненты для определения маршрутов
import '../components/Content.css'; // Импортируем стили для компонента Content
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme для доступа к теме приложения
import { useAuth } from '../auto/AuthContext'; // Импортируем хук useAuth для доступа к данным аутентификации
import Counter from './Counter'; // Импортируем компонент Counter
import AuthContainer from '../auto/AuthContainer'; // Импортируем компонент для аутентификации
import UserProfile from '../auto/userProfile'; // Импортируем компонент профиля пользователя

const labWorks = [ // определяет массив объектов labWorks, где каждый объект представляет собой лабораторную работу с id, 
// именем изображения и заголовком
    { id: 1, image: 'laba1.png', caption: 'Лабораторная работа 1' },
    { id: 2, image: 'laba2.png', caption: 'Лабораторная работа 2' },
    { id: 3, image: 'laba3.png', caption: 'Лабораторная работа 3' },
    { id: 4, image: 'laba4.png', caption: 'Лабораторная работа 4' },
    { id: 5, image: 'laba5.png', caption: 'Лабораторная работа 5' },
    { id: 6, image: 'laba6.png', caption: 'Лабораторная работа 6' },
    { id: 7, image: 'laba7.png', caption: 'Лабораторная работа 7' },
    { id: 8, image: 'laba8.png', caption: 'Лабораторная работа 8' },
    { id: 9, image: 'laba9.png', caption: 'Лабораторная работа 9' },
];

const LabWork = ({ lab }) => { // пределяет функциональный компонент LabWork, который принимает пропс lab. Этот компонент 
// будет отображать детали конкретной лабораторной работы
    return (
        <div> {/* Контейнер для отображения информации о лабораторной работе */}
            <h3>{lab.caption}</h3> {/* Заголовок с названием лабораторной работы */}
            <img className="slider-image" src={lab.image} alt={lab.caption} /> {/* Изображение лабораторной работы 
            с альтернативным текстом */}
        </div>
    );
};

const Content = () => {
    const { isDarkTheme } = useTheme(); // Получаем состояние темы (темная или светлая) из контекста темы
    const { isAuthenticated } = useAuth(); // Получаем состояние аутентификации пользователя из контекста аутентификации

    return (
        <div className={`content ${isDarkTheme ? 'dark' : 'light'}`}> {/* Контейнер с классом в зависимости от темы */}
            {isAuthenticated ? (
                <>
                    <Routes>
                        {labWorks.map((lab) => (
                            <Route key={lab.id} path={`/lab${lab.id}`} element={<LabWork lab={lab} />} /> 
                            // Для каждой лабораторной работы
                            // создается компонент Route с уникальным key (идентификатором лабораторной работы), path, 
                            // который соответствует лабораторной работе (например, /lab1), и element, который рендерит компонент 
                            // LabWork с текущей лабораторной работой в качестве пропса
                        ))}
                        <Route path="/" element={<LabWork lab={labWorks[0]} />} /> {/* определяет маршрут для корневого пути (/), 
                        который рендерит первую лабораторную работу из массива labWorks */}
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/profile" element={<UserProfile />} />
                    </Routes>
                </>
            ) : (
                <AuthContainer />
            )}
        </div>
    );
};

export default Content;