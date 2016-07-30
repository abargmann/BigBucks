var moment = require('moment');

var api = {
    getMarketOverview(){
        date = moment().format(YYYY-MM-DD);
        var url = `https://quandl.com/api/v3/datasets/WIKI/INDEXSP.json?start_date=${date}&column_index=1`;
        return fetch(url).then((res) => res.json())
    },
};

module.exports = api;