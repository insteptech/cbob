
export class ServiceConstent {
    static BEARER_TOKEN = null;
    static FCM_TOKEN = null;
    static Socket_IO = false;
    static safeName = undefined;

    static getSafeName() {
        return this.safeName;
    }

    static setSafeName(safeName) {
        this.safeName = safeName;
    }


    static setSocketConnection(Socket_IO) {
        if (Socket_IO) {
            this.Socket_IO = Socket_IO
        }
    }

    static getSocketConnection() {
        if (this.Socket_IO) {
            return this.Socket_IO;
        }
        return false
    }

    static getFcmToken() {
        return this.FCM_TOKEN
    }

    static setFcmToken(FCM_TOKEN) {
        this.FCM_TOKEN = FCM_TOKEN;
        console.log('====================fcm===================', this.FCM_TOKEN)
    }

    static getBearerToken() {
        return this.BEARER_TOKEN
    }
    static setBearerToken(token = this.BEARER_TOKEN) {
        console.log('=============userToken============', token);
        this.BEARER_TOKEN = token
    }
}

export const headerwithoutBearer = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const headerwithBearer = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${ServiceConstent.getBearerToken()}`
    }
}

