const EventEmitter = require('events')
const emitter = new EventEmitter()

// emmiter.on('anything', data => {
//     console.log('ON: anything', data)
// })

// emmiter.emit('anything', {a: 1})
// emmiter.emit('anything', {a: 2})

// setTimeout(() => {
//     emmiter.emit('anything',{c: 3})
// }, 1500)

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb){
        console.log('[Subscride...]')
        this.on(eventName, cb)
    }
    dispatch(eventName, data){
        console.log('[Dispatched...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', data =>{
    console.log('ON: aa', data) 
})

dis.dispatch('aa', {aa: 22})