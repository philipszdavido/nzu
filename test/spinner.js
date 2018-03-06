const process = require('process')

const s = 10
    /*for (var index = 0; index < array.length; index++) {
        var element = array[index];
        for (var i = 0; i < array.length; i++) {
            //console.log('=')
            process.stdout.write('=')
        }
        process.stdout.clearLine()
    }*/

/** [===========] */
let ins = null
setInterval(() => {
    process.stdout.clearLine(1)
    process.stdout.cursorTo(0)
    if (ins != null) {
        clearInterval(ins)
    }
    /*for (var i = 0; i < s; i++) {
        process.stdout.write('=')
    }*/

    ins = setInterval(() => {
        process.stdout.write('=')
    }, 300)
}, 3000)