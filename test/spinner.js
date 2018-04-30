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
process.stdout.write('[---------]')
    /*process.stdout.cursorTo(1)
    process.stdout.write('=====')
    return*/
let ins = null
setInterval(() => {
    process.stdout.cursorTo(1)
        //process.stdout.clearLine(1)
    if (ins != null) {
        clearInterval(ins)
        process.stdout.cursorTo(1)
            //process.stdout.clearLine(1)
        process.stdout.write('---------]')
        process.stdout.cursorTo(1)
    }

    //process.stdout.write('[')
    ins = setInterval(() => {
        process.stdout.write('=')
    }, 300)
}, 3000)

/*setInterval(() => {
    process.stdout.cursorTo(0)
    process.stdout.clearLine(1)
    if (ins != null) {
        clearInterval(ins)
    }

    process.stdout.write('[')
    ins = setInterval(() => {
        process.stdout.write('=')
    }, 300)
}, 3000)*/