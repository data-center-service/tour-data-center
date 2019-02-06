const axios = require('axios')

const cities = [
    {
        url: 'https://shanghaicity.openservice.kankanews.com/public/tour/filterinfo2',
        city: '上海',
        id: 'shanghai'
    }
]
for (const city of cities) {
    axios.default.get(city.url)
        .then(res => {
            console.log(res.data);
        })
        .catch(e => {
            console.log(e);
        })
}