Vue.component('window-persone', {
    template: `
    <window name="Persone">
        <v-row dense id="persone">

            <!-- figure -->
            <v-col cols="5">
                <v-row dense>
                    <v-col cols="12">
                        <v-img
                            class="align-center"
                            :src="$root.suitImage"
                            width="212"
                            @click="$root.unequip('body')"
                        >
                            <v-row dense v-if="$root.isTwoHandEquiped">
                                <v-col cols="auto">
                                    <v-img :src="$root.rightHandItemImage" @click.stop="$root.unequip('rightHand')" />
                                </v-col>
                            </v-row>
                            <v-row dense v-else>
                                <v-col cols="auto">
                                    <v-img :src="$root.rightHandItemImage" @click.stop="$root.unequip('rightHand')" />
                                </v-col>
                                <v-spacer />
                                <v-col cols="auto">
                                    <v-img :src="$root.leftHandItemImage" @click.stop="$root.unequip('leftHand')" />
                                </v-col>
                            </v-row>
                            <div class="d-flex flex-column align-center left-bottom">
                                <v-img src="img/interface/hp.png" width="30" />
                                <span :class="$root.getVar('colorPersone')">{{ $root.state.persones.player.attr.hp }}</span>
                            </div>
                            <div class="d-flex flex-column align-center right-bottom">
                                <v-img src="img/interface/energy.png" width="30" />
                                <span :class="$root.getVar('colorPersone')">{{ $root.state.persones.player.attr.pow }}</span>
                            </div>
                        </v-img>
                    </v-col>
                </v-row>
            </v-col>

            <!-- attributes -->
            <v-col>
                <v-row dense>
                    <!-- skills -->
                    <v-col cols="6">
                        <span class="grey--text text--darken-3">{{ $t('skill.caption') }}</span>

                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.skill.pilot}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('skill.pilot') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.skill.infantry}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('skill.infantry') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.skill.sientist}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('skill.sientist') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.skill.technic}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('skill.technic') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.skill.pioneer}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('skill.pioneer') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.skill.trader}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('skill.trader') }}</span>
                            </v-col>
                        </v-row>
                    </v-col>

                    <!-- reputation -->
                    <v-col cols="6">
                        <span class="grey--text text--darken-3">{{ $t('relation.caption') }}</span>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.relation.pilot}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('relation.pilot') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.relation.infantry}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('relation.infantry') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.relation.sientist}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('relation.sientist') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.relation.technic}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('relation.technic') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.relation.pioneer}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('relation.pioneer') }}</span>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="auto">
                                {{ $root.state.persones.player.relation.trader}}    
                            </v-col>
                            <v-col cols="auto">
                                <span :class="$root.getVar('secondColorPersone')">{{ $t('relation.trader') }}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="12" class="text-center">
                    <v-row dense>
                        <v-col>
                            <v-row dense>
                                <v-col cols="12">
                                    <v-img src="" height="20" width="20"/>
                                </v-col>
                                <v-col cols="12">
                                    <v-row dense>
                                        <v-spacer />
                                        <v-col cols="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-img v-bind="attrs" v-on="on" src="img/interface/eclipse-flare.png" width="20" hint="hint"/>
                                                </template>
                                                <span>{{ $t('tooltip.influence') }}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-spacer />
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    <v-row dense>
                                        <v-spacer />
                                        <v-col cols="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-img v-bind="attrs" v-on="on" src="img/interface/vibrating-shield.png" width="20" hint="hint"/>
                                                </template>
                                                <span>{{ $t('tooltip.defense') }}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-spacer />
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    <v-row dense>
                                        <v-spacer />
                                        <v-col cols="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-img v-bind="attrs" v-on="on" src="img/interface/atk.png" width="20" hint="hint"/>
                                                </template>
                                                <span>{{ $t('tooltip.attack') }}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-spacer />
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row dense>
                                <v-col cols="12">
                                    <v-row dense>
                                        <v-spacer />
                                        <v-col cols="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-img v-bind="attrs" v-on="on" src="img/interface/molecule.png" width="20" hint="hint"/>
                                                </template>
                                                <span>{{ $t('tooltip.oxygen') }}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-spacer />
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.environment.oxygen }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.attr.oxygen }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.atk.oxygen }}
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row dense>
                                <v-col cols="12">
                                    <v-row dense>
                                        <v-spacer />
                                        <v-col cols="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-img v-bind="attrs" v-on="on" src="img/interface/gas-mask.png" width="20" hint="hint"/>
                                                </template>
                                                <span>{{ $t('tooltip.toxic') }}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-spacer />
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.environment.toxic }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.attr.toxic }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.atk.toxic }}
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row dense>
                                <v-col cols="12">
                                    <v-row dense>
                                        <v-spacer />
                                        <v-col cols="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-img v-bind="attrs" v-on="on" src="img/interface/radioactive.png" width="20" hint="hint"/>
                                                </template>
                                                <span>{{ $t('tooltip.radioactive') }}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-spacer />
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.environment.radioactive }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.attr.radioactive }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.atk.radioactive }}
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row dense>
                                <v-col cols="12">
                                    <v-row dense>
                                        <v-spacer />
                                        <v-col cols="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-img v-bind="attrs" v-on="on" src="img/interface/termal.png" width="20" hint="hint"/>
                                                </template>
                                                <span>{{ $t('tooltip.temperature') }}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-spacer />
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.environment.temperature }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.attr.temperature }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.atk.temperature }}
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-row dense>
                                <v-col cols="12">
                                    <v-row dense>
                                        <v-spacer />
                                        <v-col cols="auto">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-img v-bind="attrs" v-on="on" src="img/interface/falling-boulder.png" width="20" hint="hint"/>
                                                </template>
                                                <span>{{ $t('tooltip.physic') }}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-spacer />
                                    </v-row>
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.environment.physic }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.attr.physic }}
                                </v-col>
                                <v-col cols="12">
                                    {{ $root.state.persones.player.atk.physic }}
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                </v-row>
            </v-col>
        </v-row>
    </window>`
})