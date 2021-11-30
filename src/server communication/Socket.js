export class Socket {
    static mySocket = null;
    static getMySocket() {
        return this.mySocket;
    }
    static setMySocket(mySocket) {
        this.mySocket = mySocket;
    }
    static connected() {
        if (this.getMySocket()) {
            return this.getMySocket().connected;
        }
        return false;
    }
    static disConnect() {
        if (this.getMySocket()) {
            return this.getMySocket().disconnect();
        }
        return false;
    }
}
