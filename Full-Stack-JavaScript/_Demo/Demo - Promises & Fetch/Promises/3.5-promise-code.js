const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`)

// wrap in promise, get off the main thread, and execute as a micro task

const codeBlocker = () => {

   
    // when we wrap it in resolved promise, it will happen after the sync code
return Promise.resolve().then(v => {
    let i = 0;
    while (i < 10000000000) { i++;}

    // however, creating promise is still happening on main thread, while loop still blocks,
    // and resolve is the microtask
    return('billion loops is done');
})

}

const handleCodeBlocker = () => {
    return codeBlocker()
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

log('Synchronous 1')
log(handleCodeBlocker())
log('Synchronous 2')
