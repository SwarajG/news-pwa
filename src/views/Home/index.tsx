import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Icon } from 'antd';
import 'react-tabs/style/react-tabs.css';
import TabComponent from '../TabComponent';
import { PAGE } from '../../utils/const';
import s from './styles';
 
import { TABS } from '../../utils/const';
import Article from '../Article';

type State = {
  activeIndex: number,
  isOnline: boolean,
  page: string,
  isRefreshing: boolean,
  selectedCard: any
};

export default class Home extends Component<State> {

  state = {
    activeIndex: TABS[0].key,
    isOnline: window.navigator.onLine,
    isRefreshing: false,
    page: PAGE.HOME,
    selectedCard: null
  };

  componentDidMount() {
    window.addEventListener('online', this.setOnline);
    window.addEventListener('offline', this.setOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setOnline);
    window.removeEventListener('offline', this.setOffline);
  }

  updateTabChange = (activeIndex: number) => {
    this.setState({ activeIndex });
  }

  onRefreshClick = () => {
    if (this.state.isOnline) {
      this.setState({ isRefreshing: true });
    }
  }

  onCardClick = (card: any) => this.setState({
    selectedCard: card,
    page: PAGE.ARTICLE
  })

  onBackButtonClick = () => this.setState({ page: PAGE.HOME, selectedCard: null })

  endRefreshStatus = () => {
    this.setState({ isRefreshing: false });
  }

  setOnline = () => this.setState({ isOnline: true })

  setOffline = () => this.setState({ isOnline: false })

  render() {
    const { activeIndex, isOnline, isRefreshing, page, selectedCard } = this.state;
    if (page === PAGE.ARTICLE) {
      return (
        <Article
          card={selectedCard}
          onBackButtonClick={this.onBackButtonClick}
        />
      );
    }
    return (
      <div className={s.contentWrapper}>
        <p className={s.header}>Top Stories</p>
        <div className={s.refreshButton(isOnline)} onClick={this.onRefreshClick}>
          <Icon type="sync" spin={isRefreshing} />
        </div>
        <Tabs selectedIndex={activeIndex} onSelect={this.updateTabChange}>
          <TabList>
            {TABS.map(tab => <Tab key={tab.key}>{tab.tab}</Tab>)}
          </TabList>
          {TABS.map(tab => (
            <TabPanel key={tab.key}>
              <TabComponent
                section={tab.tab}
                isRefreshing={isRefreshing}
                endRefreshStatus={this.endRefreshStatus}
                onCardClick={this.onCardClick}
              />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    )
  }
}