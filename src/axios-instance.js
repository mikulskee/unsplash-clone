import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: { Authorization: 'Client-ID 6Mvxqd9yg1mR9EnArRfh-sn-zdByNeINrHlBDoPD3qM' },
});

export default instance;
