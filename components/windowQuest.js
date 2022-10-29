Vue.component('window-quest', {
    props: {
        state: { type: Object },
    },

    template: `
        <window name="Quest">
            <v-card flat :color="$root.getVar('bgColorQuest')">
                <v-img
                    class="mb-3"
                    height="150"
                    :src="'img/locations/' + $root.questLocation + '.png'"
                />
            <!-- <v-card-title>{{ $t($root.questCaption) }}</v-card-title> -->

                <div v-for="param in $root.questParams" :key="param.value">
                    <b>{{ $t(param.caption) }} {{ $root.getVar(param.value) }}</b>
                </div>

                <div v-html="$t($root.questText)" class="pt-3"></div>

                <v-row
                    dense
                    v-for="action, index in $root.questActions"
                    dense
                    :key="index"
                >
                    <v-col cols="12" class="text-center">
                        <button
                            class="light-button"
                            @click="$root.script(action.action)"
                        >
                            {{ $t(action.caption) }}
                        </button>
                    </v-col>
                </v-row>
            </v-card>
        </window>
    </div>`
  })