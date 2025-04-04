import React from 'react';
import FeedbackForm from './feedback/FeedbackForm';
import FeedbackList from './feedback/FeedbackList';
import { useTheme } from './ThemeContext';
import './FeedbackBlock.css';

const FeedbackBlock = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div className={`feedback-block ${isDarkTheme ? 'dark' : 'light'}`}>
            <h2>Обратная связь</h2>
            <FeedbackForm />
            <FeedbackList />
        </div>
    );
};

export default FeedbackBlock;