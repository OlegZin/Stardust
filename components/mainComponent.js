Vue.component('main-component', {
    props: {
        state: { type: Object },
    },

    computed: {
        leftObject() {
            return this.$root.spaceObject('left')
        },

        rightObject() {
            return this.$root.spaceObject('right')
        },

        cssBulletType() {
            return this.$root.cssBulletType
        },

        cssBulletAction() {
            return this.$root.cssBulletAction
        },
    },

    template: `
    <div>
        <img id="bullet" :class="[cssBulletType, cssBulletAction]">
        <v-row class="text-center my-5" align="center">
            <v-col cols="6">
                <img
                    v-if="leftObject && leftObject.image"
                    :class="['space-object', leftObject.cssClass]"
                    id="leftObject"
                    :src="'img/ships/' + leftObject.image + '.png'"
                >
            </v-col>
            <v-col cols="6">
                <img
                    v-if="rightObject && rightObject.image"
                    :class="['space-object', rightObject.cssClass]"
                    id="rightObject"
                    :src="'img/ships/' + rightObject.image + '.png'"
                >
            </v-col>
        </v-row>
        <v-row dense class="justify-center">
            <window-persone />
            <window-inventory />
            <window-talk />
            <window-quest />
            <window name="Station" />
        </v-row>
        <!--
        <div class="trace">
            <pre>{{ $root.state.persones.player.attr }}</pre>
        </div>
        -->
    </div>`
  })