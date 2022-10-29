Vue.component('window-inventory', {
    props: {
        state: { type: Object },
    },

    template: `
    <window name="Inventory" size="small">
    <v-row dense>
        <v-col>
            <v-card flat color="black" class="pa-2">
                <v-virtual-scroll
                    :items="$root.inventory"
                    item-height="30"
                >
                    <template v-slot:default="{ item }">
                        <v-row dense>
                            <v-col cols="auto">
                                <span :class="$root.getVar('colorPersone')">{{ item.count }}</span>
                            </v-col>
                            <v-col cols="auto">
                                <v-img v-if="item.type === 'weapon'" src="img/interface/icon-type-weapon.png" style="opacity: 0.25;"/>
                                <v-img v-if="item.type === 'suit'" src="img/interface/icon-type-suit.png" style="opacity: 0.25;"/>
                            </v-col>
                            <v-col cols="auto" class="orange--text text--lighten-4">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <span v-bind="attrs" v-on="on" :class="$root.getVar('secondColorPersone')">{{ $t(item.caption) }}</span>
                                    </template>
                                    <span v-html="$t(item.descript)" />
                                </v-tooltip>
                            </v-col>
                            <v-spacer />
                            <v-col cols="auto">
                                <v-btn text v-if="item.onUse" x-small>
                                    <v-img src="img/interface/gears.png" height="15" width="15"/>
                                </v-btn>
                                <v-btn text v-if="item.onEquip" x-small @click="$root.equip(item.name)">
                                    <v-img src="img/interface/palm.png" height="15" width="15"/>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </template>
                </v-virtual-scroll>
            </v-card>
        </v-col>
    </v-row>
    </window>`
  })