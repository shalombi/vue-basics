export default {
    props: ["watcher"],
    template: `
    <section class="watcher-details-cmp">
        <section class="flex flex-column">
            <h3 class="watcher-name">user : {{watcher.name}}</h3>
            <div class="fav-shows">
                <span class="fav-shows-header">Favorite shows:</span>
                <div v-for="favShow in favShows" class="fav-show" :key="">
                        {{favShow}}
                </div>
            </div>
            <img class="img-netflix-details" :src="imgPreUrl + setImgName(watcher)  + '.jpeg' "/>
        </section>

        <div>
            <button @click="goBack" class="back-btn">back</button>
        </div>
    </section>
    `,
    data() {
        return {
            imgPreUrl: "../../imgs/watchers/",
            favShows: this.watcher.favShows,
        }
    },
    created() {
    },
    methods: {
        goBack() {
            this.$emit('back')
        },
        setImgName(watcher) {
            return watcher.isCreatedByUser ? 'puki' : watcher.name
        }
    }
    ,
    computed: {
    }

}

