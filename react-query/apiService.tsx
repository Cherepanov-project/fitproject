export default class ApiService {

    apiBase = 'https://api.realworld.io/api/';

    async getResourcesTemplate(url, methodUrl = 'GET', bodyUrl) {
        const localUser = localStorage.getItem('user');
        let tokenBlog = '';
        if (localUser) {
            const {token} = JSON.parse(localUser);
            tokenBlog = token;
        }
        const res = await fetch(`${this.apiBase}${url}`, {
            method: methodUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${tokenBlog}`,
            },
            body: JSON.stringify(bodyUrl),
        });
        return res;
    }

    async getResourcesTemplateJson(url, methodUrl = 'GET', bodyUrl) {
        return await((await this.getResourcesTemplate(url, methodUrl, bodyUrl)).json());
    }
}