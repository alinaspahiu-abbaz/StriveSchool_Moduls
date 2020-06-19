
   
let wrapper = document.querySelector(".wrapper")
    window.onload = async function () {
       let response = await fetch(" https://jsonplaceholder.typicode.com/users")
       let users = await response.json()
       //console.log(users)

//------------- GOOD -------------
    // for (let user of users) {
    //     console.log(user.name);
    //     // same as console.log(user[name]);
                
    //     wrapper.innerHTML += `<div class="col-12 col-md-6"
    //     <span>${user.name} </span>
    //     </div>
    //     <div class="col-12 col-md-6"
    //     <span>${user.email} </span>
    //     </div>
    //     `
    // }
//------------ Finish ----------
    
    fetch(" https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
             for (let user of users) {
                console.log(user.name);
                // same as console.log(user[name]);
                
                wrapper.innerHTML += `<div class="col-12 col-md-4"
                <span>${user.name} </span>
                </div>
                <div class="col-12 col-md-4"
                <span>${user.email} </span>
                </div>
                <div class="col-12 col-md-4"
                <span>${user.company.catchPhrase} </span>
                </div>
                `

    }
// for(let i=0; i<user.length; i++) { ... }
// users.forEach(users => { ... })

          
           })
        }

        // let string = "string";
        // let string2 = "string2";

        // let string3 = '${string} ${string2}'
