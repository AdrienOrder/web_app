// components/Menu.js
import React, { useState, useEffect, useRef } from 'react'; // Импортируем необходимые хуки из React
import { Link } from 'react-router-dom'; // Импортируем компонент Link для навигации между страницами
import './Menu.css'; // Импортируем стили для компонента Menu
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme для доступа к информации о теме
import { useLocation } from 'react-router-dom'; // Импортируем useLocation для доступа к текущему URL

const menuItems = [
    { path: '/lab1', label: 'Лабораторная работа № 1' },
    { path: '/lab2', label: 'Лабораторная работа № 2' },
    { path: '/lab3', label: 'Лабораторная работа № 3' },
    { path: '/lab4', label: 'Лабораторная работа № 4' },
    { path: '/lab5', label: 'Лабораторная работа № 5' },
    { path: '/lab6', label: 'Лабораторная работа № 6' },
    { path: '/lab7', label: 'Лабораторная работа № 7' },
    { path: '/lab8', label: 'Лабораторная работа № 8' },
    { path: '/lab9', label: 'Лабораторная работа № 9' },
    { path: '/counter', label: 'Счётчик' },
];

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkTheme } = useTheme();
    const menuRef = useRef(null);
    const location = useLocation(); // Хук для доступа к текущему URL

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };


    useEffect(() => {
        // Находим элемент меню, соответствующий текущему пути
        const currentMenuItem = menuItems.find(item => item.path === location.pathname);

        // Если элемент найден, показываем алерт
        if (currentMenuItem) {
            alert(`Загрузка страницы "${currentMenuItem.label}"`);
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        
    }, [location]); // Добавляем location, чтобы эффект срабатывал при смене URL

    return (
        <div className="menu__container" ref={menuRef}> {/* Контейнер меню с рефом для отслеживания кликов */}
            <button className="menu__button" onClick={toggleMenu}> {/* Кнопка для открытия/закрытия меню */}
                <span className="menu__icon" /> {/* Иконка для визуального представления кнопки */}
                <span className="menu__icon" /> {/* Иконка для визуального представления кнопки */}
                <span className="menu__icon" /> {/* Иконка для визуального представления кнопки */}
            </button>
            <nav className={`menu ${isOpen ? 'menu-open' : ''} ${isDarkTheme ? 'dark' : 'light'}`}> {/* Навигационное 
            меню с классами в зависимости от состояния и темы */}
                <ul>
                    {menuItems.map((item) => ( // Проходим по массиву элементов меню
                        <li key={item.path}> {/* Каждый элемент списка с уникальным ключом по пути */}
                            <Link to={item.path} onClick={() => setIsOpen(false)}> {/* Ссылка на соответствующий путь, 
                            закрывающая меню при клике */}
                                {item.label} {/* Метка элемента меню */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
