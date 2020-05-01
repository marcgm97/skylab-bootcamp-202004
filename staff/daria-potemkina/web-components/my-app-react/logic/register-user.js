function registerUser(name, surname, email, password, callback) {

    if (typeof name !== 'string') throw new TypeError(name + ' is not a string')
    if (!TEXT_REGEX.test(name)) throw new Error(name + ' contains non-alphabetic characters')

    if (typeof surname !== 'string') throw new TypeError(surname + ' is not a string')
    if (!TEXT_REGEX.test(surname)) throw new Error(surname + ' contains non-alphabetic characters')

    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (!EMAIL_REGEX.test(email)) throw new Error(email + ' is not an email')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (password.length < 8) throw new Error('password does not have the min length')

    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].email === email) {
    //         throw new Error('User already exists')
    //     }
    // }

    // users.push({
    //     name,
    //     surname,
    //     email,
    //     password
    // })

    call('POST', 'https://skylabcoders.herokuapp.com/api/v2/users',
        `{"name": "${name}", "surname": "${surname}", "username": "${email}", "password": "${password}"}`,
        { 'Content-type': 'application/json' }, (error, status, body) => {
            if (error) return callback(error)

            if (status === 201) callback()
            else {
                const { error } = JSON.parse(body)
                return callback(new Error(error))
            }
        })
}