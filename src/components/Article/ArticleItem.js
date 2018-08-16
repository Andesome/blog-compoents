import React, { Component } from 'react';
import DefauButton from '../Buttons/DefauButton';
import qs from 'qs';
import './ArticleItem.less';

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false
    }
  }

  // 点击更多按钮
  handleReadMore = () => {
    const { onClick } = this.props;
    this.setState({
      isFull: true
    });
    onClick();
    this.onArticleClick()
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // 文章item被点击
  onArticleClick = () => {
    const { path, history } = this.props;
    setTimeout(() => {
      history.push(`${path.name}?${qs.stringify(path.query)}`);
    }, 1000);
  }

  render() {
    const { title, desc } = this.props;
    const { isFull } = this.state;

    return (
      <div className={`article-item ${isFull ? 'full' : ''}`}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <DefauButton text='more' onClick={this.handleReadMore} />
      </div>
    )
  }

}

export default ArticleItem;