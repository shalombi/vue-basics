export default {
    template: `
    <section @click="changeThemeBoolean()" :class='changeThemeClass' class="show-time-cmp">
        <h2 class="heder-season-cmp">Seasons</h2>
        <h3>{{displayTime}}</h3>
        <img src="imgs/morning.jpeg" class="morning-img"/>
        <span class="seasonIcon" >{{setSeasonIcon}}</span>
    </section>
    `,
    data() {
        return {
            date: new Date(),
            season: null,
            intervalId: null,
            isDark: false
        }
    },
    created() {
        this.updateTimes()
    },
    methods: {
        updateTimes() {
            this.intervalId =
                setInterval(() => {
                    this.date = new Date()
                }, 1000);
        },
        checkOneDigit(elTime) {
            return ((elTime) < 10) ? `0${elTime}` : (elTime)
        },
        changeThemeBoolean() {
            this.isDark = !this.isDark
        }

    }
    ,
    computed: {
        displayTime() {
            return `${this.checkOneDigit((this.date.getHours()))}:${this.checkOneDigit(this.date.getMinutes())}:${this.checkOneDigit(this.date.getSeconds())}`
        },
        setSeasonIcon() {
            const month = this.date.getMonth() + 1

            if ((month > 0 && month <= 3) || (month > 10 && month <= 12)) return '❄️'
            else if (month > 2 && month <= 4) return '🌿'
            else if (month > 5 && month <= 8) return '🌞'
            else return '🍂'
        },
        changeThemeClass() {
            return { dark: this.isDark, notDark: !this.isDark }
        }

    },

}