import React, { Component } from 'react';
import { connect } from 'dva';
import { SearchBar, Modal, Flex } from 'antd-mobile';
import HomeCarousel from '../../components/home-tabbar/home-tabber-carousel'
import Link from 'umi/link';
import router from 'umi/router';
import styles from './index.less';

@connect(({ home }) => ({ home }))
class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {
        banner: [],
        icon: [],
        tab: [],
        bottomBanner: [],
        loinBannerList: [],
        cardLists: [],
        tofobanner: [],
        visible: false,
      }
    }
  render() {
    const { home } = this.props;
    return (
      <div className='homePage'>
        <div className='homePage_search'>
          <div className='homePage_input'>
            <SearchBar
              placeholder="搜索你想要的卡片"
              ref={ref => this.manualFocusInst = ref}
              onFocus={() => router.push('/search')}
            />
          </div>
          <div className='homePage_search_ico' onClick={() => router.push('/class')}>
            <img src={require('../../assets/icon-classify.png')}/>
          </div>
          {
           home.list.bannerList && home.list.bannerList.length !== 0 ?
            <HomeCarousel bannerItem={home.list.bannerList} />
            : ""
          }
        </div>
        <div className='stepBlock'>
          <div className='stepBlocktitle'>四步注册</div>
          <img className='stepBlockimg' onClick={() => router.push('/class')} src={require('../../assets/hero-card.png')} alt="" />
        </div>
        <div className='stepBlock hotMobileBlock'>
          <div className='stepBlocktitle'>热门货币</div>
          <Flex className='hotMobile_block'>
            <Flex.Item><div className='hotCoin' onClick={() => router.push('/class?brand=52')}><div  className='hotCoin_icon'></div>USD</div></Flex.Item>
            <Flex.Item><div className='hotCoin' onClick={() => router.push('/class?brand=4')}><div  className='hotMobile_icon Bitcoin'></div>Bitcoin</div></Flex.Item>
            <Flex.Item><div className='hotCoin' onClick={() => router.push('/class?brand=16')}><div  className='hotMobile_icon Ethereum'></div>Ethereum</div></Flex.Item>
            <Flex.Item><div className='hotCoin' onClick={() => router.push('/class?brand=9')}><div  className='hotMobile_icon USDT'></div>USDT</div></Flex.Item>
          </Flex>
        </div>
        <div className='itemList itemList2'>
          <div className='itemListtitle'>热门卡片<div className='gotoMore' onClick={() => router.push('/class')}>更多<img src="https://res.zudeapp.com/wximage/right_arrow.png" alt=""/></div></div>
          <div className='hotlist'>
            {
              home.list.productList && home.list.productList.length !== 0 ? home.list.productList.map((val)=>(
                <div className='itemBlock' key={val.id} onClick={() => {console.log('去商品')}}>
                  <div className='product_img'>
                    <img className='img' src={require('../../assets/lavas.png')} />
                  </div>
                  <span className='text_ellipsis'>{val.productName}</span>
                  <div className='priceBox'>最近开卡量 <span className='price'>↑{val.topPrice}</span></div>
                  <div className='btn' >立即开卡</div>
                </div>
              ))
             : ""
            }
          </div>
        </div>
        <Modal
            visible={this.state.visible}
            transparent
            closable={true}
            maskClosable={true}
            className="modal-shool"
            onClose={() => this.onClose()}
          >
          <img src="http://res.zudeapp.com/allh5/buyput-renew-icon.png" alt="" onClick={() => router.push("/indexActivity")} />
        </Modal>
      </div>
    )
  }
}


export default Home;
