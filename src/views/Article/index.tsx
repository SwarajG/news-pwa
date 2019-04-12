import React, { Component } from 'react';
import { Icon } from 'antd';
import s from './styles';

type Props = {
  onBackButtonClick: () => void,
  card: any
}

type ClassFunction = {
  onReadMoreClick: () => void
}

export default class Article extends Component<Props, ClassFunction> {

  getReadableDate = (date: any) => date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()

  onReadMoreClick = () => {
    // console.log(url);
  }

  render() {
    const { card, onBackButtonClick } = this.props;
    const { title, abstract, byline, multimedia, published_date, url } = card;
    const media = multimedia.find((media: any) => media.format === 'mediumThreeByTwo210');
    const coverImage  = media && media.url;
    const readableDate = this.getReadableDate(new Date(published_date));
    return (
      <div className={s.newsWrapper}>
        <div onClick={onBackButtonClick} className={s.backbutton}>
          <Icon type="left-circle" />
        </div>
        <div className={s.contentWrapper}>
          {coverImage && (
            <div className={s.imageWrapper}>
              <img src={coverImage} className={s.imageClass} />
            </div>
          )}
          <div className={s.infoWrapper}>
            <p className={s.titleText}>{title}</p>
            <p className={s.description}>{abstract}</p>
            <p className={s.author}>{byline}</p>
            <p className={s.date}>{readableDate}</p>
            <a href={url} target="_blank">Read more...</a>
          </div>
        </div>
      </div>
    )
  }
}