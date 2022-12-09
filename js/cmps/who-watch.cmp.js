export default {
    template: `
    <section class="who-watch-cmp watchers-list" v-if="!displayDetails">
        <h1 class="watcher-header">who-watch</h1>
        <button @click="addWatcher()"> add watcher</button>
        <ul>
            <li v-for="watcher in watchers" @click="watcherClicked(watcher)">
                    {{watcher.name}}
                    <img :src="watcher.imgUrl" class="watcher-img"/>
                    <button @click.stop="watcherRemoved(watcher.id)">x</button>
                </li>
            </ul>
        </section>
            
            <watcher-details v-if="displayDetails" :watcher="watcher" @back="back"/>

    `,
    data() {
        return {
            watchers: [
                {
                    id: 'p101',
                    name: 'muki',
                    age: 4,
                    favShows: ['Chiquititas', 'Rebeldeway', 'Sherlock Holmes'],
                    imgUrl: "../../imgs/watchers/muki.jpeg"
                },
                {
                    id: 'p102',
                    name: 'ruki',
                    age: 3,
                    favShows: ['Cristiano Ronaldo - GOAT', 'Barcelona History', 'NBA - How It All Began'],
                    imgUrl: "../../imgs/watchers/ruki.jpeg"
                },
                {
                    id: 'p103',
                    name: 'shuki',
                    age: 5,
                    favShows: ['La Liga Stories', 'How I became number 1', 'La casa de papel', 'Squid Games'],
                    imgUrl: "../../imgs/watchers/shuki.jpeg"
                },
                {
                    id: 'p104',
                    name: 'puki',
                    age: 74,
                    favShows: ['Stranger Things', 'Indiana Jones', 'James Bond 007'],
                    imgUrl: "../../imgs/watchers/puki.jpeg"
                },
            ],
            displayDetails: false,
            watcher: true
        }
    },
    created() {

    },
    methods: {
        watcherClicked(watcher) {
            this.displayDetails = true

            console.log(watcher, '*** watcher ***')
            console.log(this.watcher, '$$$ this.watcher $$$')

            if (this.watcher === watcher) this.displayDetails = !this.displayDetails
            else if (this.watcher !== watcher && !this.watcher) this.displayDetails = !this.displayDetails
            this.watcher = watcher
        },
        watcherRemoved(watcherId) {
            const idx = this.watchers.findIndex(watcher => watcher.id === watcherId)
            this.watchers.splice(idx, 1)
        },
        addWatcher() {
            console.log('addWatcher')
            const id = new Date() % 1000
            const watcher = {
                id,
                name: `watcher-${id}`,
                imgUrl: Math.random() > 0.5 ? "../../imgs/watchers/muki.jpeg" : "../../imgs/watchers/ruki.jpeg",
                favShows: ['Stranger Things', 'Indiana Jones', 'James Bond 007'],
                isCreatedByUser: true

            }
            this.watchers.unshift(watcher)
        },
        back() {
            this.displayDetails = false
        }
    }
}

