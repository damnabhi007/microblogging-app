import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ArticleList/>} />
      <Route exact path="/article/:id" element={<ArticlePage/>} />
    </Routes>
  );
}

export default App;
