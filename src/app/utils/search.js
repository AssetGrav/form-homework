export function search(users, name) {
    let arr = []
    users.forEach((user) => {
        let arrOfUserLetter = user.name.toLowerCase()
        let arrOfName = name.toLowerCase()
        if (arrOfUserLetter.includes(arrOfName) && !arr.includes(user)) {
            arr.push(user)
        } else if (!arrOfUserLetter.includes(arrOfName)) {
            users = []
        }
    })
    return arr.length > 0 ? arr : users
}