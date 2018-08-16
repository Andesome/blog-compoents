import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './ArticleItem';
import './ArticleList.less';

export default class ArticleList extends Component {

  componentDidMount() {
    console.log(this.props)
    const scrollTop = sessionStorage.getItem(window.location.pathname) || 0;
    setTimeout(() => {
      console.info('1s后');
      document.documentElement.scrollTop = scrollTop;
    }, 1000)
    // document.body.scrollTop = scrollTop;
  }

  handleArticleClick = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    sessionStorage.setItem(window.location.pathname, scrollTop);
  }

  render() {
    const { dataSource } = this.props;
    return (
      <div className='article-list'>
        {
          dataSource.map(article =>
            <ArticleItem
              key={article.id}
              path={{ name: '/detail', query: { id: article.id } }}
              title={article.title}
              desc={article.desc}
              onClick={this.handleArticleClick}
              history={this.props.history}
            />
          )
        }
      </div>
    )
  }
}


ArticleList.defaultProps = {
  dataSource: []
}

ArticleList.ropTypes = {
  dataSource: PropTypes.array.isRequired
}