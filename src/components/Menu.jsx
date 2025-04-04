// components/Menu.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { useTheme } from '../ThemeContext';
import { useLocation } from 'react-router-dom'; // Импортируем useLocation

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
            alert(`Страница "${currentMenuItem.label}" загружена`);
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        
    }, [location]); // Добавляем location, чтобы эффект срабатывал при смене URL

    return (
        <div className="menu__container" ref={menuRef}>
            <button className="menu__button" onClick={toggleMenu}>
                <span className="menu__icon" />
                <span className="menu__icon" />
                <span className="menu__icon" />
            </button>
            <nav className={`menu ${isOpen ? 'menu-open' : ''} ${isDarkTheme ? 'dark' : 'light'}`}>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link to={item.path} onClick={() => setIsOpen(false)}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
