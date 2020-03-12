import axios from 'axios-jsonp-pro';

axios.defaults.baseURL = 'http://api1.emmafit.co.kr/franchise_maplist_json.do';

export const centerInfo = {
    mapList: () => {
        axios.get()
    }
};
