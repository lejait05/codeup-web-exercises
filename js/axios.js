// axios.get("https://swapi.dev/api/people/1/").then((res)=>{
//     console.log("response:", res);
// })
// .catch((e)=> {
//     console.log("error!", e);
// });

//async function   remember try/ catch is to get the errors in async function

// const getStarWarsPerson = async (id) => {
//  const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
// console.log(res.data);
// };
//
// getStarWarsPerson(5);

const getDadJoke = async ()=> {
    const res = await axios.get('https://icanhazdadjoke.com/')
    console.log(res)
}
