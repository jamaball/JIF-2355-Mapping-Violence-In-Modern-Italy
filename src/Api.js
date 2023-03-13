import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'content-type':'application/json',
    },
});
const api = {
    getData: () =>
        instance({
            'method':'GET',
            'url':'/api/crimes',
            transformResponse: [function (data) {
                var geojson = {
                    type: "FeatureCollection",
                    features: [],
                };
                const jsonData = JSON.parse(data)
                for (let i = 0; i < jsonData.length; i++) {
                    geojson.features.push({
                        "type": "Feature",
                        "properties": {
                            "id": jsonData[i].id,
                            "date": jsonData[i].date,
                            "location": jsonData[i].location,
                            "weapon": jsonData[i].weapon,
                            "conviction": jsonData[i].conviction,
                            "description": jsonData[i].description
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": jsonData[i].coordinates.coordinates
                        },
                    })
                }
                return geojson;
            }],
        }),
}

export default api;
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
