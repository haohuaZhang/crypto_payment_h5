import React, { Component } from 'react';
import { Card, Button, Icon, Modal } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.less';

class SecurityVerification extends Component {
  state = {
    emailBound: false,
    idVerified: false,
  };

  handleGoBack = () => {
    router.goBack();  // 返回上一个页面
  };

  handleEmailBound = () => {
    // 打开一个模态框或导航到邮箱绑定页面
    Modal.prompt('绑定邮箱', '请输入您的邮箱地址', [
      { text: '取消' },
      { text: '提交', onPress: email => this.bindEmail(email) },
    ]);
  };

  bindEmail = (email) => {
    // TODO: 实现邮箱绑定逻辑
    // 更新状态以反映邮箱绑定状态
    this.setState({ emailBound: true });
  };
  handleIdVerified = () => {
    // TODO: 更新身份验证状态的逻辑
    router.push('/verification-page');
  };

  render() {
    const { emailBound, idVerified } = this.state;
    return (
      <div className={styles.securityVerification}>
        <div className={styles.header}>
          <Icon type="left" onClick={this.handleGoBack} />
          <div className={styles.title}>购卡前，您需要完成以下安全认证</div>
        </div>
        <Card>
          <Card.Header
            title="绑定邮箱"
            extra={emailBound ? <Icon type="check" /> : (
              <Button type="ghost" onClick={this.handleEmailBound}>绑定</Button>
            )}
          />
        </Card>
        <Card>
          <Card.Header
            title="用户身份验证"
            extra={idVerified ? <Icon type="check" /> : (
              <Button type="ghost" onClick={this.handleIdVerified}>验证</Button>
            )}
          />
        </Card>
      </div>
    );
  }
}

export default SecurityVerification;
