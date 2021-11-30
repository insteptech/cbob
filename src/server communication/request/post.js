import { headerwithoutBearer, headerwithBearer } from '../ServiceConstants';

export const postRequest = async ({ header = headerwithoutBearer, body, url }) => {
    try {
        // const controller = new AbortController();
        // setTimeout(() => controller.abort(), 15000);

        const response = await fetch(url, {
            method: 'post',
            // headers: header,
            body: JSON.stringify(body),
            // signal: controller.signal
        });
        return response
        // return await response.json();
    }
    catch (e) {
        if (e.message == 'Aborted') {
            alert('Service Time Out 5 sec');
            return false
        }
    }
};