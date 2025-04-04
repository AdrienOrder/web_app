import React from 'react'; // Импортируем React для создания компонентов
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme для доступа к информации о теме
import './Footer.css'; // Импортируем стили для компонента Footer

function Footer() {
    const { isDarkTheme } = useTheme(); // Получаем состояние темы (темная или светлая) из контекста темы

    return (
        <footer className={`footer ${isDarkTheme ? 'dark' : 'light'}`}> {/* Контейнер для нижнего колонтитула с классом в зависимости от темы */}
            <div className="footer-content"> {/* Контейнер для содержимого нижнего колонтитула */}
                <p>&copy; 2025 все права защищены (кроме водительских, но это неточно).</p> {/* Создает элемент параграфа с текстом и символом копирайта */}
            </div>
        </footer>
    );
}

export default Footer; // Экспортируем компонент Footer по умолчанию
