const http = require("http");
const port = 8000;

http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName == "/" || pathName == "/node") {
    res.end("<h1>Welcome to my NodeJS project.</h1>");
  } else if (pathName == "/home") {
    res.end("<h1>Welcome home.</h1>");
  } else if (pathName == "/about") {
    res.end("<h1>Welcome to About Us page</h1>");
  } else {
    res.end("<h2>Page Not Found</h2>");
  }
});
