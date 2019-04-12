import React, { Component } from 'react';
import { Card } from 'antd';
import { defaultNewsImage } from '../../utils/const';
import s from './styles';

const { Meta } = Card;

type Props = {
  card: any,
  onCardClick: (card: any) => void
};

export default class ArticleCard extends Component<Props> {
  render() {
    const { card, onCardClick } = this.props;
    const url = (card.multimedia && card.multimedia[0] && card.multimedia[0].url) || defaultNewsImage;
    return (
      <Card
        hoverable
        className={s.cardStyle}
        cover={<img alt="example" src={url} height={200} />}
        onClick={() => onCardClick(card)}
      >
        <Meta
          title={card.title}
          description={card.byline}
        />
      </Card>
    );
  }
}