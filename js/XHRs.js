const req = new XMLHttpRequest();

req.onload =function (){
    console.log("IT Loaded!!!! Whoop Whoop!!!");
    //to get info loaded...
    // console.log(this);

    // to get specific info isolated
    // console.log(this.responseText);

    //to take it out of string to be put into object
    const data = JSON.parse(this.responseText);
    console.log(data);
};

req.onerror = function (){
    console.log("ERROR!!!! DANGER WILL ROBINSON, DANGER!!!!");
    console.log(this);
};

req.open("GET","https://swapi.dev/api/people/1/")
req.send();
