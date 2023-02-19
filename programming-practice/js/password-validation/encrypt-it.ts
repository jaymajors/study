import {hash} from 'bcrypt';

const saltRounds = 10;
const myPlaintextPassword = '';

for (let i=0; i<3; i++) {
    hash(myPlaintextPassword, saltRounds, function(err, hash) {
        console.log('encrypted: ', hash);
    });
}


