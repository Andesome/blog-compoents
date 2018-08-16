import React from 'react';
import ArticleList from '../components/Article/ArticleList'
import articles from '../mock/article'

export default (props) => {
  return (
    <ArticleList dataSource={articles} {...props} />
  )
}