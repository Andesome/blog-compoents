import React, { Component } from 'react';
import DefauButton from '../Buttons/DefauButton';
import './ArticleItem.less';

class ArticleDetail extends Component {

  // 点击返回按钮
  handleBack = () => {
    console.log(this.props)
    window.history.back();
  }

  render() {
    const { title, desc } = this.props;
    return (
      <div className={`article-item`}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <DefauButton text='back' onClick={this.handleBack } />
      </div>
    )
  }

}

export default ArticleDetail;