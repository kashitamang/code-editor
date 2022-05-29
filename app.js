console.log('hello word');
let userCode = 'console.log("hello world")'
try {
    Function(userCode)()
} catch (e) {
    console.log(e)
}


