import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../articles.json';

function ArticlePage() {
  const { id } = useParams();
  const article = articles.articles.find((article) => article.id === parseInt(id));

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{article.publishDate}</p>
      <img src={article.imageUrl} alt={article.title} />
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}

export default ArticlePage;
 