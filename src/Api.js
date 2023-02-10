import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'content-type':'application/json',
    },
});
export default {
    getData: () =>
    instance({
        'method':'GET',
        'url':'/api/crimes',
        // 'params': {
        //     'search':'parameter',
        // },
    }),
    // postData: () =>
    // instance({
    //     'method': 'POST',
    //     'url':'/api',
    //     'data': {
    //         'item1':'data1',
    //         'item2':'item2'
    //     },
    //     'headers': {
    //         'content-type':'application/json'  // override instance defaults
    //     }
    // })
}