Vue.component('window-talk', {
    props: {
        state: { type: Object },
    },

    template: `
        <window name="Talk">
            <v-row dense>
                <v-col cols="auto">
                    <img :src="'img/avatars/' + $root.talkAvatar + '.png'" width="100">
                </v-col>
                <v-col>
                    <div v-html="$t($root.talkText)"></div>
                </v-col>
            </v-row>
            <v-row
                dense
                v-for="action, index in $root.talkActions"
                dense
                :key="index"
            >
                <v-col cols="12" class="text-center">
                    <button
                        class="dark-button"
                        @click="$root.script(action.action)"
                    >
                        {{ $t(action.caption) }}
                    </button>
                </v-col>
            </v-row>
        </window>
    </div>`
  })