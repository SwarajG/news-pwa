export const commonPoint = 'https://api.nytimes.com/svc/topstories/v2';

export function createEndPointUrl(section: string) {
  const endpoint = `${commonPoint}/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`;
  return endpoint;
}

export const TABS = [{
  tab: 'SCIENCE',
  key: 0
}, {
  tab: 'TECHNOLOGY',
  key: 1
}, {
  tab: 'BUSINESS',
  key: 2
}, {
  tab: 'WORLD',
  key: 3
}, {
  tab: 'MOVIES',
  key: 4
}, {
  tab: 'TRAVEL',
  key: 5
}];

export const defaultNewsImage = 'https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg';

export const PAGE = {
  HOME: 'HOME',
  ARTICLE: 'ARTICLE'
};
