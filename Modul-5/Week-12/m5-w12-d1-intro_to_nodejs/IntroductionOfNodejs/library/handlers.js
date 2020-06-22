const getUsers =() => {
    const usersList = [
        {id:1, name:'Diego'}, 
        {id:2, name:'Tobia'}
    ]
    return JSON.stringify(usersList)// turning the objeckt into Json string
}

const sendRes = (res, statusCode, headers, data) => {
    res.writeHead(statusCode, headers)
    res.end(data)

}
module.exports = (req, res) => {
    switch (req.method) {
        case 'GET':
            // retrieve list of users 'from db'
            // send the list as response
            sendRes(res, 200, {'Content-Type':'application/json'}, getUsers())
            break
        case "POST":
            sendRes()
            break
        default:
    }
}