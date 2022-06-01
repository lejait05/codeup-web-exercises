

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
    fetch('https://api.github.com/users', {headers: {'Authorization': 'PAT'}})
        .then((res) =>{
            console.log("resolved", res.json());
})
// fetch('https://api.github.com/users', {headers: {'Authorization': 'PAT'}})
// // later on...
// const lastCommitDate = new username({
//     auth: 'PAT'
// })
// await lastCommitDate.request('GET /repos/{owner}/{repo}/comits',{
//     owner: 'OWNER',
//     repo: 'REPO'
// })



// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: 'personal-access-token123'
// })
//
// await octokit.request('GET /repos/{owner}/{repo}/commits', {
//     owner: 'OWNER',
//     repo: 'REPO'
// })


// const lastCommit = (username) => {
//     return fetch ('https://api.github.com/users' + username + "/events/public", setting)
//         .then(res => res.json())
//         .then(res => {
//             console.log("resolved:", res)
//             return res.filter((item)=> item.type === "PushEvent")[0].created_at;
//         })
//     users.forEach( userObj => {
//
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));
// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// };
// // Octokit.js
// // https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: 'personal-access-token123'
// })
//
// await octokit.request('GET /users/{username}/events/public/', {
//     username: 'USERNAME'
// })
// // later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));
