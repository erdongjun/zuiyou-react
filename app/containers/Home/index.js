import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// 通用组件
import BannerSlider from './subpage/BannerSlider';
import CateList from './subpage/CateList';
import Recommend from './subpage/Recommend';
import PrivateZone from './subpage/PrivateZone';
import CommentList from './subpage/CommentList';

import './index.less';
import './subpage/subpage.less';



class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className='main'>
                <div className='mainNav'>
                    <div className='clearfix mb20'>
                        <BannerSlider />
                        <CateList />
                    </div>
                    <Recommend />
                    <PrivateZone />
                    <CommentList />
                    <div className='seemore'>查看更多<i className='icon-arrow-right iconfont'></i></div>
                </div>
            </div>
        )
    }
}

export default Home
