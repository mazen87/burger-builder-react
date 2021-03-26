import axios from 'axios';

const orderInstance = axios.create({
    baseURL: 'https://react-my-burger-74e2c-default-rtdb.firebaseio.com/'
});

export default orderInstance;