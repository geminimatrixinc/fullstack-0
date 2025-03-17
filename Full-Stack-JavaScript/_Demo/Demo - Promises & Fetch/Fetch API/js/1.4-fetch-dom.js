const url = 'https://api.github.com/emojis';

var container = null;

const fetchEmoji = () => {
      // arrow function => syntax.
      fetch(url,  {
          method: "GET",
          headers: { "Content-Type": "application/json" }
      })
        .then(
          response => {
              return response.json();
              }
              ) 
        .then(obj => {
          console.log(obj);

          for(var key in obj) {
              var emoji = obj[key];
              console.log(emoji)

              var img = document.createElement('img');
                  img.setAttribute('src', emoji);

                  // add the images to container element
                  container.appendChild(img);
          }
        
        })
      .catch(err => console.log(err))
}

window.onload = () => {
    container = document.querySelector('#container');
    fetchEmoji();
}