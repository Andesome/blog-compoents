import React from 'react';
import ArticleDetail from '../components/Article/ArticleDetail';
import qs from 'qs';
import articles from '../mock/article';

export default ({ location }) => {
  const id = qs.parse(location.search.substring(1)).id;
  const articleItem = articles.find(item => item.id === parseInt(id, 10));
  return (
    <ArticleDetail
      title={articleItem.title}
      desc={articleItem.desc} 
    />
  )
}
