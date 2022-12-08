const { createApp } = Vue

import showTime from './cmps/show-time.cmp.js'
import countDown from './cmps/count-down.cmp.js'
import whoWatch from './cmps/who-watch.cmp.js'
import watcherDetails from './cmps/watcher-details.cmp.js'



const options = {
    template: `
        <show-time />
        <count-down />
        <who-watch />
    `,
    data() {
        return {

        }
    }
}

const app = createApp(options)
app.component('show-time', showTime)
app.component('count-down', countDown)
app.component('who-watch', whoWatch)
app.component('watcher-details', watcherDetails)

app.mount('#app')
