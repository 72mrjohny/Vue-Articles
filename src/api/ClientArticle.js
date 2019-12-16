import axios from 'axios';

class ClientArticle {
    constructor(host, apiKey) {
        this.axios = axios.create({
            baseURL: host,
            headers: {
                'Accept': 'application/json',
            }
        });
        this.apiKey = apiKey;
        this.pageSize = 10;
    }

    getArticles(page = 1, country = 'pl') {
        const params = {
            apiKey: this.apiKey,
            pageSize: this.pageSize,
            page: page,
            country: country,
        };

        return this.axios.get('/top-headlines', { params: params }).then(response => response.data);
    }

    setPageSize(pageSize) {
        this.pageSize = pageSize;
    }
}

export default ClientArticle;