import axios from 'axios';

const KEY =  'AIzaSyCy8ulff7QcWFntUS3xQpknQNo6crEWLmc';
  
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

