

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
    fetch(url, {headers: {'Authorization': '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'}})
        .then((res) =>{
            console.log("resolved", res.json());
})
// fetch(url, {headers: {'Authorization': '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'}})
// later on...

// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));
// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }
//
// // later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));
