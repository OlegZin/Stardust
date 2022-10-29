Vue.component('window', {
    props: {
        state: { type: Object },
        name: { type: String },
        size: { type: String, default: 'normal' },
    },

    computed: {
        isVisible() {
            return this.$root.getVar('isOpenedWindow' + this.name)
        },
        cols() {
            switch (this.size) {
                case 'small' : return '6'
                case 'normal' : return '12'
                case 'full' : return '12'
            }
        },
        md() {
            switch (this.size) {
                case 'small' : return '3'
                case 'normal' : return '6'
                case 'full' : return '12'
            }
        },
        xl() {
            switch (this.size) {
                case 'small' : return '2'
                case 'normal' : return '4'
                case 'full' : return '12'
            }
        },
        lg() {
            switch (this.size) {
                case 'small' : return '2'
                case 'normal' : return '4'
                case 'full' : return '12'
            }
        },
    },

    template: `
    <v-col v-if="isVisible" :cols="cols" :md="md" :xl="xl" :lg="lg" >
        <v-card :color="$root.getVar('bgColor' + name)">
            <v-system-bar color="grey darken-4">
                <img :src="'img/interface/' + this.name + '.png'" class="mx-2" width="20">
                <div class="grey--text">{{ $t('window.'+this.name+'.caption') }}</div>
                <v-spacer></v-spacer>
                <v-icon color="grey" @click="$root.setVar('isOpenedWindow' + name, !$root.getVar('isOpenedWindow' + name))">mdi-close</v-icon>
            </v-system-bar>
            <v-card-text :class="$root.getVar('color' + name)">
                <slot />
            </v-card-text>
        </v-card>
    </v-col>
    `
  })