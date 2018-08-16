import React from 'react';
import './buttons.less';

export default ({ text, onClick }) => (<div className='btn' onClick={onClick}>{text || ''}</div>)
