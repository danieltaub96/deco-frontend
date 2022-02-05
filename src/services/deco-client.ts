import HttpClient from "./http-client";

export class DecoClient {
    httpClient: HttpClient
    decoServerURL: string

    constructor(decoServerURL: string) {
        this.httpClient = new HttpClient(decoServerURL)
        this.decoServerURL = decoServerURL
    }

    getLatestState() {
        return this.httpClient.get('/scrape/latest', (status: any, data: any) => {
            console.log(status);
            console.log(data);

            return data
        })
    }
}