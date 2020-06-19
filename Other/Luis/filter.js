with(document) {
    var wrapper     = querySelector("#wrapper")
    var inputFilter = querySelector("#input-filter")
    var filterKey   = querySelector("#filter-key")
  }
  
  var users = []
​
  function filterUsers(value) {
​
    let filteredUsers = users.filter(
      user => {
​
        let userValue = user[filterKey.value.toLowerCase()].toLowerCase()
        let query = String(value).toLowerCase()
​
        return userValue.includes(query)
​
    })
​
    console.log(filteredUsers)
    wrapper.innerHTML = ""
​
    if (filteredUsers.length > 0) {
      showUsers(filterUsers)
    } 
  }
​
  window.onload = async function () {
​
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let _users = await response.json()    
​
    if (_users) {
      users = _users
    } else alert("Something went wrong :(")
​
    showUsers(users)
​
  }
​
  function showUsers(users) {
    for (let user of users) {
      // console.log(user)
      wrapper.innerHTML += `
      <div class="col-12 col-md-4">
        <span>${user.name}</span>
      </div>
      <div class="col-12 col-md-4">
        <span>${user.email}</span>
      </div>
      <div class="col-12 col-md-4">
        <span>${user.company.catchPhrase}</span>
      </div>
    `
    }
  }
