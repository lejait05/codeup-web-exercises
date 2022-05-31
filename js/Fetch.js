fetch("https://swapi.dev/api/people/1/")
    //promise if resolved and (res) = response
    .then((res)=>{
    console.log("RESOLVED!!!!!!", res);
//    previous method was resolved early and may not have all JSON since it came through as soon as it received all headers
return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    //if not and error
    .catch((e)=> {
        console.log("ERROR!!!!!!", e);
    });

// cleaner async version to pull the same info

// const loadStarWarsPeople = async () =>{
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2);
// };
//
// loadStarWarsPeople();
