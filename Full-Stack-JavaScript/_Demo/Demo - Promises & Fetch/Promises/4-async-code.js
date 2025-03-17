const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`)

// wrap in promise, get off the main thread, and execute as a micro task

const codeBlocker = () => {

    return new Promise(function(resolve, reject) {
        let i = 0;
        while (i < 1000000000) { i++;}
    
        // however, creating promise is still happening on main thread, while loop still blocks,
        // and resolve is the microtask
        resolve('billion loops is done');
    })
    
}


const  asyncNonBlocker = async () => {
    const x = await codeBlocker();
    const y = await codeBlocker();

    return Promise.all([x, y]);
}

log('Synchronous 1')
log(asyncNonBlocker().then(log))
log('Synchronous 2')