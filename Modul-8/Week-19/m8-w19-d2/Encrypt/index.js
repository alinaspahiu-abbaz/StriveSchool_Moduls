const bcrypt = require ('bcrypt');

const password1 = 'alina123';
const password2 = 'alina1234';

const hashFunction = async(password) => {
    return await bcrypt.hash(password, 8)
}

hashFunction(password1).then(hash => console.log(hash))
hashFunction(password1).then(hash => console.log(hash))