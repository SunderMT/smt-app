function hello_world(r){
    r.headersOut['Content-Type'] = ['text/html'];
    r.return(200, "<h1>Hellow World FDS</h1>\n");
}

function upload_image(r){
    var fs = require('fs');
    var file = fs.writeFileSync('/usr/share/nginx/hello.txt', 'Hello world');
    //console.log("Body : ", r.requestBody);
    r.headersOut['Content-Type'] = ['text/plain'];
    r.return(200, "Image Uploaded");
}