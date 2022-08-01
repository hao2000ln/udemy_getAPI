// const fs = require("fs");
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// const textOut = `This is what we know abpit the: ${textIn} \n Luong Ngoc Hao \n Created date : ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);

const { resolveSoa } = require("dns");
const fs = require("fs");
const http = require("http");
const url = require("url");

//TODO server
// res.writeHead(200, {
//     "Content-type": "application/json",
//   });
// res.end(data);

// __dirname : lấy đường dẫn hiện tại
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObject = JSON.parse(data); // chuyển dữ liệu dạng json- js
console.log(dataObject);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
      "my-outhor": "Luong Ngoc Hao",
    });
    res.end("<h1 style='color:red;'>Page not found?\n \nTry again</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
