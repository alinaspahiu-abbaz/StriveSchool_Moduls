const getUsers =() => {
    const usersList = [
        {id:1, name:'Diego'}, 
        {id:2, name:'Tobia'}
    ]
    return JSON.stringify(usersList)// turning the objeckt into Json string
