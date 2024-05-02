import axios from 'axios';


export default axios.create({
    withCredentials: true, //so that it sends all of the cookies here
});