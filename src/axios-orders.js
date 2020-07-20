import axios from 'axios';


const instance =axios.create({
    baseURL:'https://react-my-burger-63a85.firebaseio.com/'
});

export default instance;