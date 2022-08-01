package main

import (
    "fmt"
)

type HttpResponse struct {
    responseCode int;
    response string;
}

func (res HttpResponse) getBody() string {
    return res.response
}

func (res HttpResponse) getResponseCode() int {
    return res.responseCode
}

type IHttpRequest interface {
    request(method string, url string) HttpResponse
}

type HttpRequest struct {
}

func (req HttpRequest) request(method string, url string) HttpResponse {
    return HttpResponse{200,
        "Mark bundle as not supporting multiuse\n" +
        " HTTP/1.1 200 OK\n" +
        " Date: Sun, 31 Jul 2022 22:45:42 GMT\n" +
        " Expires: -1\n" +
        " Cache-Control: private, max-age=0\n" +
        " Content-Type: text; charset=ISO-8859-1\n" +
        "\n\r" +
        "Hello world"};
}

type ProxyHttpRequest struct {
    httpRequest HttpRequest;
}

func (proxy ProxyHttpRequest) request(method string, url string) HttpResponse {
    fmt.Printf("%s %s\n", method, url)
    response := proxy.httpRequest.request(method, url)
    fmt.Printf("responseCode=%d, response=%s", response.getResponseCode(), response.getBody())
    return response
}

type Client struct {
    httpRequest IHttpRequest;
}

func (client Client) fetch(method string, url string) HttpResponse {
    return client.httpRequest.request(method, url)
}

func main() {
    var httpRequest HttpRequest = HttpRequest{}
    var proxy ProxyHttpRequest = ProxyHttpRequest{httpRequest}
    var client Client = Client{proxy}

    client.fetch("POST", "www.google.com/upload/images");
    client.fetch("GET", "www.google.com/upload/images");
    client.fetch("PUT", "www.google.com/upload/images");
}
