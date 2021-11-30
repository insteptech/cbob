import { headerwithoutBearer, headerwithBearer } from '../ServiceConstants';

export const getRequest = async ({ header = headerwithoutBearer, url }) => {
    try {
        const controller = new AbortController();
        setTimeout(() => controller.abort(), 15000);

        const response = await fetch(url, {
            headers: header,
            //signal: controller.signal
        });
        return response;
        // return await response.json();
    }
    catch (e) {
        if (e.message == 'Aborted') {
            alert('Unable to connect with server! Service Time Out 15 sec');
            return false
        }
    }
};