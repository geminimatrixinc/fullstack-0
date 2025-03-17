//Create the XHR Object
let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://api.github.com/users', true)
//call the onload 
xhr.onload = function() 
    {
        //check if the status is 200(means everything is okay)
        if (this.status === 200) 
            {
                //return server response as an object with JSON.parse
                console.log(JSON.parse(this.responseText));
    }
            }
//call send
xhr.send();
//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN



