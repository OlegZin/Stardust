Vue.component('app-bar', {
    props: {
        locales: { type: Array, required: true },
        state: { type: Object, required: true }
    },

    template: `
    <div>
        <v-app-bar dark flat>
            <v-row dense align="center">
                <v-col cols="auto">
                    <img src="img/interface/coin.png">
                </v-col>
                <v-col cols="auto" class="mr-7">
                    {{ $root.moneyFormated }}
                </v-col>
                
                <app-bar-button v-if="$root.getVar('isEnabledWindowPersone')" :window="'Persone'"/>
                <app-bar-button v-if="$root.getVar('isEnabledWindowInventory')" :window="'Inventory'"/>
                <app-bar-button v-if="$root.getVar('isEnabledWindowTalk')" :window="'Talk'"/>
                <app-bar-button v-if="$root.getVar('isEnabledWindowStation')" :window="'Station'"/>
                <app-bar-button v-if="$root.getVar('isEnabledWindowQuest')" :window="'Quest'"/>

                <v-spacer />
                <v-col cols="auto">
                    <v-select
                        v-model="state.locale"
                        class="select-short"
                        dense
                        hide-details
                        :items="locales"
                        solo
                    />
                </v-col>
            </v-row>
        </v-app-bar>
    </div>`
})