const hostname = window.location.hostname;

let baseURL;

if (hostname === "localhost" || hostname === "127.0.0.1") {
    baseURL = "http://localhost:9000";
}
else if (hostname.startsWith("192.168.") || hostname.startsWith("10.")) {
    baseURL = `http://${hostname}:9000`;
}
else {
    baseURL = "https://yourdomain.com";
}

export { baseURL };
