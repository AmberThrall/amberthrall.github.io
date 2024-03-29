import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './components/App';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Article from './components/Article';
import NotFound from './components/404';
import Calendar from './components/Calendar';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/article" element={<Article />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
