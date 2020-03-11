const input = '13June1831'
const maxLoginAttempts = 3
const user = {
  name: 'Maxwell',
  age: '30',
  credentials: {
    username: 'Maxwell50',
    password: '13June1831',
  },
  loginAttemptsFailed: '1',
  accountLocked: 'false'
}
const passwordCorrect = user.credentials.password === input
const finalLoginAttempt = parseInt(user.loginAttemptsFailed) + 1 >= maxLoginAttempts
const accountLocked = user.accountLocked !== false

console.log(`Password correct" ${passwordCorrect}`)
console.log(`Final login attempt: ${finalLoginAttempt}`)
console.log(`Account locked: ${accountLocked}`)
