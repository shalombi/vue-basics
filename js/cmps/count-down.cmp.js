export default {
    template: `
    <section class="count-down-cmp">
        <h1>COUNT DOWN</h1>
        <h1 :class="{red : isDigitsRed}">{{displayTimer()}}</h1>
    </section>

    `,
    data() {
        return {
            seconds: 15,
            intervalId: null,
            isDigitsRed: false,
            firstCall: true,
            isSoundPlay: false
        }
    },
    created() {
        this.countDown()
    },
    methods: {
        countDown() {
            this.intervalId = setInterval(() => {
                this.seconds--
                if (!this.seconds) clearInterval(this.intervalId)
                if (this.seconds <= 10) {
                    this.isDigitsRed = true

                    // music at 4 last seconds
                    if (this.firstCall && this.seconds <= 4) {
                        this.playMusic()
                        this.firstCall = false
                    }
                }
            }, 1000)
        },
        displayTimer() {
            const seconds = this.seconds % 60
            const minutes = Math.floor(this.seconds / 60)
            return `${this.checkOneDigit(minutes)}:${this.checkOneDigit(seconds)}`
        },
        checkOneDigit(elTime) {
            return ((elTime) < 10) ? `0${elTime}` : (elTime)
        },
        playMusic() {
            if (!this.isSoundPlay) return
            var audio = new Audio('../../music/mixkit-melodic-race-countdown-1955.wav'); // path to file
            audio.play()
        }
    }
    ,
}

