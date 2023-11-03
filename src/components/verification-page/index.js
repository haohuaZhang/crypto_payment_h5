import React, { Component } from 'react';
import { Card, Button, Icon, DatePicker, Picker, InputItem, List } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.less';

class VerificationPage extends Component {
  state = {
    country: '',
    firstName: '',
    lastName: '',
    birthdate: '',
    documentType: '',
    documentNumber: ''
  };

  handleGoBack = () => {
    router.goBack();
  };

  handleCountryChange = (country) => {
    this.setState({ country });
  };

  handleFirstNameChange = (firstName) => {
    this.setState({ firstName });
  };

  handleLastNameChange = (lastName) => {
    this.setState({ lastName });
  };

  handleBirthdateChange = (birthdate) => {
    this.setState({ birthdate });
  };

  handleDocumentTypeChange = (documentType) => {
    this.setState({ documentType });
  };

  handleDocumentNumberChange = (documentNumber) => {
    this.setState({ documentNumber });
  };

  handleSubmit = () => {
    // TODO: 提交验证信息
  };

  render() {
    const { country, firstName, lastName, birthdate, documentType, documentNumber } = this.state;
    const documentTypes = [
      { value: 'passport', label: '护照' },
      { value: 'id_card', label: '身份证' },
      { value: 'driver_license', label: '驾照' },
    ];

    // countryData含国家/地区信息的数组
    const countryData = [
      { value: 'china', label: '中国' },
      // ...其他国家/地区数据
    ];

    return (
      <div className={styles.verificationPage}>
        <div className={styles.header}>
          <Icon type="left" onClick={this.handleGoBack} />
          <div className={styles.title}>个人信息</div>
        </div>
        <Card className={styles.card}>
          <Picker
            title="选择国家/地区"
            extra="请选择"
            data={countryData}
            value={[country]}
            onChange={this.handleCountryChange}
          >
            <List.Item arrow="horizontal">国家/地区</List.Item>
          </Picker>
          <InputItem
            placeholder="名字"
            value={firstName}
            onChange={this.handleFirstNameChange}
          >
            名字
          </InputItem>
          <InputItem
            placeholder="姓氏"
            value={lastName}
            onChange={this.handleLastNameChange}
          >
            姓氏
          </InputItem>
          <DatePicker
            mode="date"
            title="选择出生日期"
            extra="请选择"
            value={birthdate}
            onChange={this.handleBirthdateChange}
          >
            <List.Item arrow="horizontal">出生日期</List.Item>
          </DatePicker>
          <Picker
            data={documentTypes}
            cols={1}
            value={[documentType]}
            onChange={this.handleDocumentTypeChange}
          >
            <List.Item arrow="horizontal">证件类型</List.Item>
          </Picker>
          <InputItem
            placeholder="证件号"
            value={documentNumber}
            onChange={this.handleDocumentNumberChange}
          >
            证件号
          </InputItem>
        </Card>
        <Button type="primary" className={styles.submitButton} onClick={this.handleSubmit}>提交</Button>
      </div>
    );
  }
}

export default VerificationPage;
