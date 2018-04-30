const { spawn, exec } = require('child_process')

let child = spawn('node', ['in.js'], {
    stdio: 'inherit'
})
if (child.stdout) {
    child.stdin.write('poooop')
    child.stdout.addListener('data', (c) => {
        console.log('ffrff')
    })
    child.stderr.addListener('data', (c) => {})
}
child.addListener('error', (error) => {})

/*let c = exec('node ./in.js', function(err, stdout, stderr) {
        console.log(stdout)
        if (err) {
            console.log(err)
        }
    })*/
//c.stdin.write('jop')