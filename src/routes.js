import React from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import HomePage from './pages/HomePage/HomePage';
import ArticleDetail from './components/Article-Detail/ArticleDetail';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/article/:id',
        exact: false,
        main:({match, history}) => <ArticleDetail match={match} history={history}/> 
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;