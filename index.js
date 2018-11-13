const MAX_RESULTS = '15';
const VIDEOS_URL = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBwvYWaVvia0BN-8_GuGhQWcsSQOXKNuAw&q=rsschool&part=snippet&maxResults=${MAX_RESULTS}&type=video`;
const STATISTIC_URL = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBwvYWaVvia0BN-8_GuGhQWcsSQOXKNuAw&part=snippet,contentDetails,statistics&id=';
const NEXT_PAGE = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBwvYWaVvia0BN-8_GuGhQWcsSQOXKNuAw&part=snippet&type=video&maxResults=${MAX_RESULTS}&pageToken=`;

//utils.js
const $ = el => document.querySelector(el);
const create = el => document.createElement(el);
const append = (parent, child) => (parent.appendChild(child), parent);
const addClass = (el, className) => (el.classList.add(className), el);
const inner = (el, text) => (el.innerHTML = text, el);
// end utils.js

const renderPage = videos => append($('body'), renderVideos(videos));

const renderVideos = videos => videos.reduce((ul, video) =>
    append(ul, inner(create('li'), video.snippet.title)), create('ul'));

// videos
fetch(VIDEOS_URL)
  .then(res => res.json())
  .then(({ items }) => items.map(item => item.id.videoId))
  .then(ids => fetch(STATISTIC_URL + ids))
  .then(res => res.json())
  .then(data => renderPage(data.items));
