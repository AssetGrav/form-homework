export function search(users, name) {
    const arr = [];
    users.forEach((user) => {
        const arrOfUserLetter = user.name.toLowerCase();
        const arrOfName = name.toLowerCase();
        if (arrOfUserLetter.includes(arrOfName) && !arr.includes(user)) {
            arr.push(user);
        } else if (!arrOfUserLetter.includes(arrOfName)) {
            users = [];
        }
    });
    return arr.length > 0 ? arr : users;
};
