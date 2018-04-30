const process = require('process')
    //console.log('im child')
process.stdout.write('Password:')
process.stdin.on('readable', () => {
    let data = process.stdin.read()
    process.stdin.write('mypass')
    data != null ? process.stdout.write(`data: ${data}`) : null
})