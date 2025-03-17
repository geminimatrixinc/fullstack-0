
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`)

// running on main thread, will block all code

const codeBlocker = () => {

    let i = 0;
    while (i < 10000000000) { i++;}

    return 'billion loops is done';
}

log('Synchronous 1')
log(codeBlocker())
log('Synchronous 2')

