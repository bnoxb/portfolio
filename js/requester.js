function get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
      req.onerror = (e) => reject(Error(`Network Error: ${e}`));
      req.send();
    });
}

function sendRequests(){
    get('https://cors-anywhere.herokuapp.com/https://condue-app.herokuapp.com');
    get('https://cors-anywhere.herokuapp.com/https://condue-express.herokuapp.com');
    get('https://cors-anywhere.herokuapp.com/https://orderve.herokuapp.com');
    get('https://cors-anywhere.herokuapp.com/https://safe-brook-56718.herokuapp.com');
    get('https://cors-anywhere.herokuapp.com/https://sheltered-atoll-58604.herokuapp.com');
    console.log('There will be some errors here.  I am sending requests to all my websites to wake-up their free heroku servers.  The errors here are from doing that.');
}

window.onload(sendRequests());