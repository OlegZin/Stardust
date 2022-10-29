Vue.component('app-bar-button', {
    props: {
        window: { type: String, required: true },
    },

    template: `
        <v-badge
            v-if="$root.getVar('hasEventsWindow' + window)"
            color="error"
            dot
            offset-x="15"
            offset-y="15"
        >
            <v-btn
                class="ma-1"
                :color="$root.getVar('isOpenedWindow' + window) ? 'grey darken-3' : 'dark' "
                elevation="0"
                @click="$root.setVar('isOpenedWindow' + window, !$root.getVar('isOpenedWindow' + window))"
            >
                <img :src="'img/interface/' + window + '.png'">
            </v-btn>
        </v-badge>                
        <v-btn
            v-else
            class="ma-1"
            :color="$root.getVar('isOpenedWindow' + window) ? 'grey darken-3' : 'dark' "
            elevation="0"
            @click="$root.setVar('isOpenedWindow' + window, !$root.getVar('isOpenedWindow' + window))"
        >
            <img :src="'img/interface/' + window + '.png'">
        </v-btn>`
})