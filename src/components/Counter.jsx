// components/Counter.js
import React, { useState } from 'react'; // позволяет добавлять состояние в функциональные компоненты

const Counter = () => { // стрелочная функция, которая будет возвращать JSX

    // Создает состояние count с помощью хука useState.

    // count — текущее значение счетчика, инициализируется нулем.
    // setCount — функция, которая обновляет значение count

    const [count, setCount] = useState(0);

    const increment = () => { // внутри функции increment вызывается setCount, чтобы обновить состояние count используется 
    // функция обратного вызова, которая принимает предыдущее значение prevCount и увеличивает его на 1
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <h2>Счётчик: {count}</h2>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
        </div>
    );
};

export default Counter;