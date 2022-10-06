import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PQcZl33Iocj8B9A4Ukc3I2Ff3bkabxZanuRvF35A_SRWAV6kf33gzMWPgGWSmyVNT8Q4aAPHQK9bD31VupgV1GzdhnT8WQb1eGIehdCu1LUysjyawb-pywRtVFoVY3Yx',
    }
})