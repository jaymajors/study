
interface identity {
    name: string,
    password: string;
}

const userMap = new Map<string, identity>();

userMap.set('jmajor', {name: 'Jason', password: '$2b$10$lzsRncC6JjOt.fXFF9PYXeqP0qZMUVQs4YuQdJHJ.xb4xP5S.ksta'});
userMap.set('emajor', {name: 'Eric', password: '$2b$10$BqIuLTCJWFnhIgBzZJXdYusLvl5nTFTIxNbgwY7RFhnDFr2iel5VS'});
userMap.set('amajor', {name: 'Aaron', password: '$2b$10$lmkVURkLMGk9MEgfWwXsy.4XE6xKc0DWnqmbeFkfIO13wKoDGZooO'});

export default userMap;