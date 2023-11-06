import React, { Fragment } from 'react';
import { formatMessage, getLocale, setLocale } from 'umi/locale';
import { TabBar } from 'antd-mobile';
import router from 'umi/router';
// import Cookies from 'js-cookie';
import _ from 'lodash';
import 'antd-mobile/dist/antd-mobile.css';
import styles from './baseLayout.less';

const languages = [
  { key: 'zh-CN', text: '简' },
  { key: 'zh-TW', text: '繁' },
  { key: 'en-US', text: 'En' },
];

const TabBarData = [
  {
    id: 'home',
    name: '资产',
    icon: require('../../assets/recycleH5_07.png'),
    selectedicon: require('../../assets/recycleH5_02.png'),
    url: '/home',
  },
  {
    id: 'class',
    name: '卡片',
    icon: require('../../assets/recycleH5_03.png'),
    selectedicon: require('../../assets/recycleH5_06.png'),
    url: '/class',
  },
  {
    id: 'my',
    name: '我的',
    icon: require('../../assets/recycleH5_04.png'),
    selectedicon: require('../../assets/recycleH5_05.png'),
    url: '/my',
  },
];

const BaseLayout = props => {
  const isTabBarSelect = url => {
    const {
      location: { pathname },
    } = props;
    if (pathname === '/' && url === '/home') {
      return true;
    } else {
      return pathname === url;
    }
  };
  const currentLan = getLocale() || '';
  let index = _.findIndex(languages, language => currentLan === language.key);
  index = index !== -1 ? index : 0;
  const selectedLang = languages[index];
  const unSelectedLang = languages.slice(index + 1).concat(languages.slice(0, index));

  return (
    <div className={styles.baseLayout} data-language={selectedLang.text}>
      {formatMessage({ id: 'navBar.lang' })}
      <div className={styles.selectLang}>
        {unSelectedLang.map(language => (
          <Fragment key={language.key}>
            <span className={styles.langDivider}>/</span>
            <a
              className={styles.lang}
              onClick={() => {
                setLocale(language.key);
              }}
            >
              {language.text}
            </a>
          </Fragment>
        ))}
      </div>
      <TabBar
        unselectedTintColor="#333"
        tintColor="#ef5f55"
        barTintColor="white"
        tabBarPosition="bottom"
      >
        {TabBarData.map(t => {
          const isSelect = isTabBarSelect(t.url);
          return (
            <TabBar.Item
              title={t.name}
              key={t.id}
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${t.icon}) center center /  21px 21px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${t.selectedicon}) center center /  21px 21px no-repeat`,
                  }}
                />
              }
              onPress={() => {
                router.push(t.url);
              }}
              selected={isSelect}
              data-seed="logId"
            >
              {isSelect && props.children}
            </TabBar.Item>
          );
        })}
      </TabBar>
    </div>
  );
};

export default BaseLayout;
