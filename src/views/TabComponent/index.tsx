import React, { Component } from 'react';
import ArticleCard from '../ArticleCard';
import { fetchSectionData } from '../../utils/request';
import { Spin, Icon } from 'antd';
import s from './styles';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

type Props = {
  section: string,
  isRefreshing: boolean,
  endRefreshStatus: () => void,
  onCardClick: (card: any) => void
};

type States = {
  cards: any[],
  loading: boolean
};

export default class TabComponent extends Component<Props, States> {
  state = {
    cards: [],
    loading: true
  }

  fetchAndUpdateData = async () => {
    const { section } = this.props;
    this.setState({ loading: true });
    const response = await fetchSectionData(section);
    const JSONResponse = await response.json();
    this.setState({ cards: JSONResponse.results, loading: false });
  }
  
  async componentDidMount() {
    await this.fetchAndUpdateData();
  }

  async componentWillReceiveProps(nextProps: any) {
    if (nextProps.isRefreshing === true) {
      await this.fetchAndUpdateData();
      this.props.endRefreshStatus();
    }
  }

  renderLoader = () => (
    <Spin indicator={antIcon} className={s.loaderWrapper} />
  )

  render() {
    const { cards, loading } = this.state;
    const { onCardClick } = this.props;
    if (loading) {
      return this.renderLoader();
    }
    return (
      <div className={s.cardsWrapper}>
        {cards.map(card => <ArticleCard onCardClick={onCardClick} key={card} card={card} />)}
      </div>
    );
  }
}