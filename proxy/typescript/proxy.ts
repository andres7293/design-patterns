// The proxy pattern controls the access to the original object
// allowing you to execute code before or after the requests get
// through the original request

//In this example we are just logging the http request to the console
class HttpResponse {
    private responseCode: number;
    private response: string;

    constructor(responseCode: number, body: string) {
        this.responseCode = responseCode;
        this.response = body;
    }
    getBody(): string {
        return this.response;
    }
    getResponseCode(): number {
        return this.responseCode;
    }
}

interface IHttpRequest {
    request(method: string, url: string): HttpResponse;
}

class HttpRequest implements IHttpRequest {
    constructor() {}
    request(method: string, url: string): HttpResponse {
        return new HttpResponse(200, 
        "Mark bundle as not supporting multiuse\n" +
        " HTTP/1.1 200 OK\n" +
        " Date: Sun, 31 Jul 2022 22:45:42 GMT\n" +
        " Expires: -1\n" +
        " Cache-Control: private, max-age=0\n" +
        " Content-Type: text; charset=ISO-8859-1\n" +
        "\n\r" +
        "Hello world");
    }
}

class ProxyHttpRequest implements IHttpRequest {
    private httpRequest: HttpRequest;

    constructor(httpRequest: HttpRequest) {
        this.httpRequest = httpRequest;
    }

    request(method: string, url: string): HttpResponse {
        console.log(`${method} ${url}`);
        const response: HttpResponse = this.httpRequest.request(method, url);
        console.log(response);
        return response;
    }
}

class Client {
    private httpRequest: IHttpRequest;

    constructor(httpRequest: IHttpRequest) {
        this.httpRequest = httpRequest;
    }

    fetch(method: string, url: string): HttpResponse {
        return this.httpRequest.request(method, url);
    }
}

const httpRequest: HttpRequest = new HttpRequest();
const proxy: ProxyHttpRequest = new ProxyHttpRequest(httpRequest);
const client: Client = new Client(proxy);

client.fetch("POST", "www.google.com/upload/images");
client.fetch("GET", "www.google.com/upload/images");
client.fetch("PUT", "www.google.com/upload/images");
