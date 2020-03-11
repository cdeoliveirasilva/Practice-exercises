const password = 'right_password!'
const input = 'wrong_password'
const loginAttemptsFailed = 2
const maxLoginAttempts = 3

const passwordCorrect = password === input
const finalLoginAttempt = loginAttemptsFailed + 1 >= maxLoginAttempts

const accountLocked = !passwordCorrect && finalLoginAttempt


// If the password is correct: log 'Welcome'
// If the account was locked: log 'You are trying to hack us! ACCESS DENIED!'
// If the password was wrong but you can try again: log: 'Wrong! Remaining attempts: x.'

const message = (passwordCorrect
? `Welcome!`
: accountLocked
? `Access denied, wrong password!`
: `Wrong password! Remaining attempts: ${maxLoginAttempts - (loginAttemptsFailed + 1)}`
)
console.log(message)
