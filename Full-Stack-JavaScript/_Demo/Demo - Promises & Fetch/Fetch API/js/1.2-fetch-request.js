


window.onload= () => {

	console.log('loaded');

  const url = 'https://api.github.com/users/shrutikapoor08/repos';

  // important to return the json response
  fetch(url)
    .then((response) => { 
      console.log(response);
      return response.json();
    })
    .then(function (repos) {
      console.log(repos);
    })
  .catch(err => console.log(err))
}


