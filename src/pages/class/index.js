// 文件路径: ClassPage/index.js

import React, { Component } from 'react';
import { Card, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.less';

class ClassPage extends Component {
  state = {
    selectedCard: null,
    kycCompleted: false,  // 新增状态字段
    emailBound: false,    // 新增状态字段
  };

  handleCardSelection = (cardType) => {
    this.setState({ selectedCard: cardType });
  };

  handleApply = () => {
    const { selectedCard, kycCompleted, emailBound } = this.state;
    if (selectedCard) {
      if (kycCompleted && emailBound) {
        router.push('/apply');  // 如果 KYC 和邮箱绑定都完成了，导航到申请页面
      } else {
        router.push('/security-verification');  // 否则，导航到 SecurityVerification 页面
      }
    } else {
      alert('请选择一张卡');
    }
  };

  render() {
    const { selectedCard } = this.state;

    return (
      <div className={styles.cardSelection}>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <img
            src="your-image-url.jpg"
            alt="Illustration"
            className={styles.cardImage}
          />
          <Card
            full
            onClick={() => this.handleCardSelection('Card 1')}
            className={styles.cardMargin}
          >
            <Card.Header
              title="Card 1"
              thumb="card1-image-url.jpg"
              extra={selectedCard === 'Card 1' && 'Selected'}
            />
          </Card>
          <Card
            full
            onClick={() => this.handleCardSelection('Card 2')}
          >
            <Card.Header
              title="Card 2"
              thumb="card2-image-url.jpg"
              extra={selectedCard === 'Card 2' && 'Selected'}
            />
          </Card>
          <WhiteSpace size="lg" />
          <Button type="primary" onClick={this.handleApply}>
            申请卡
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default ClassPage;
