// object imported from 'messages/...' in index.html
const messages = {
    ru: {
        ...ru,
        dialog: {
            ...dialog_ru,
            wakeup: wakeup_ru,
        },
        quest: {
            arrival: arrival_ru,
        },
    },
    en: {
        ...en,
        dialog: {
            ...dialog_en,
            wakeup: wakeup_en,
        },
        quest: {
            arrival: arrival_en,
        },
    },
}

const i18n = new VueI18n({
    locale: 'ru',
    messages,
})

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    i18n, 

    data: {
        state: {
            locale: 'ru',
            money: 178,
            story: 0,

            dialog: 'noSignal',
            dialogStep: 0,

            quest: 'arrival',
            questStep: 0,
            questText: null, // Alternative text for optimization of steps creation

            isEnabledWindowPersone: true,
            isOpenedWindowPersone: false,
            hasEventsWindowPersone: false,
            bgColorPersone: 'black',
            colorPersone: 'orange--text text--lighten-2',
            secondColorPersone: 'grey--text',

            isEnabledWindowInventory: true,
            isOpenedWindowInventory: false,
            hasEventsWindowInventory: false,
            bgColorInventory: 'black',
            colorInventory: 'orange--text text--lighten-2',
            secondColorInventory: 'grey--text',

            isEnabledWindowTalk: false,
            isOpenedWindowTalk: false,
            hasEventsWindowTalk: false,
            bgColorTalk: 'blue-grey darken-4',
            colorTalk: 'blue-grey--text text--lighten-4',

            isEnabledWindowStation: false,
            isOpenedWindowStation: false,
            hasEventsWindowStation: false,
            bgColorStation: 'blue-grey lighten-4',
            colorStation: 'black--text',

            isEnabledWindowQuest: false,
            isOpenedWindowQuest: false,
            hasEventsWindowQuest: false,
            bgColorQuest: 'blue-grey lighten-4',
            colorQuest: 'blue-grey--text text--lighten-4',

            environment: {
                oxygen: 0,
                toxic: 0,
                radioactive: 0,
                temperature: 0,
                physic: 0,
            },

            // All storage locations
            storage: {
                inventory: {
                    instigator: 1,
                    splitter: 1,
                    starsky: 1,
                    citizen: 1,
                },
                ship: {

                },
            },

            persones: {
                player: {
                    attr: {
                        hp: 25,
                        hpMax: 100,
                        pow: 0,
                        powMax: 0,
                        oxygen: 0,
                        toxic: 0,
                        radioactive: 0,
                        temperature: 0,
                        physic: 0,
                    },
                    atk: {
                        oxygen: 0,
                        toxic: 0,
                        radioactive: 0,
                        temperature: 0,
                        physic: 0,
                    },
                    equip: {
                        rightHand: null,
                        leftHand: null,
                        body: null,
                    },
                    skill: {
                        pilot: 0,
                        infantry: 0,
                        sientist: 0,
                        technic: 0,
                        pioneer: 0,
                        trader: 0,
                    },
                    relation: {
                        pilot: 0,
                        infantry: 0,
                        sientist: 0,
                        technic: 0,
                        pioneer: 0,
                        trader: 0,
                    },
                },
            },

            cssBulletType: '',
            cssBulletAction: '',

            leftSpaceObject: {
                image: '',
                cssClass: '',
                hp: 0,
                maxHp: 0,
                shield: 0,
                maxShield: 0,
            },
            rightSpaceObject: {
                image: '',
                cssClass: '',
                hp: 0,
                maxHp: 0,
                shield: 0,
                maxShield: 0,
            },
        },

        locales: ['en', 'ru'],
        dialogs, // object imported from 'js/dialogs.js' in index.html
        quests, // object imported from 'js/quests.js' in index.html
        items, // object imported from 'js/items.js' in index.html
    },

    computed: {
        moneyFormated() {
            const money = this.getVar('money')
            if (money >= 1000000000) {
                return (money / 1000000000).toFixed(1) + 'B'
            } else if (money >= 1000000) {
                return (money / 1000000).toFixed(1) + 'M'
            } else if (money >= 1000) {
                return (money / 1000).toFixed(1) + 'k'
            }
            return money
        },

        talkAvatar() {
            return this.dialogs[this.state.dialog].avatar
        },

        talkText() {
            const dialogId = this.state.dialog
            const dialogStep = this.state.dialogStep
            return this.dialogs[dialogId].step[dialogStep].text
        },

        talkActions() {
            const dialogId = this.state.dialog
            const dialogStep = this.state.dialogStep
            return this.dialogs[dialogId].step[dialogStep].actions
        },

        questLocation() {
            const quest = this.state.quest
            const step = this.state.questStep
            return this.quests[quest].step[step].location
        },
        questCaption() {
            const quest = this.state.quest
            const step = this.state.questStep
            return this.quests[quest].step[step].caption
        },
        questText() {
            const quest = this.state.quest
            const step = this.state.questStep
            return this.state.questText || this.quests[quest].step[step].text
        },
        questParams() {
            const quest = this.state.quest
            const step = this.state.questStep
            return this.quests[quest].step[step].params
        },
        questActions() {
            const quest = this.state.quest
            const step = this.state.questStep
            return this.quests[quest].step[step].actions
        },

        cssBulletType() {
            return this.$root.state.cssBulletType
        },

        cssBulletAction() {
            return this.$root.state.cssBulletAction
        },

        inventory() {
            const inventory = []

            _.forOwn(this.state.storage.inventory, (value, key) => {
                const item = this.items[key]
                item.count = value

                inventory.push(item)
            })

            return inventory
        },

        suitImage() {
            const itemId = this.state.persones.player.equip.body
            const item = this.items[itemId]
        
            if (item?.image) {
                return 'img/items/suit/' + item.image + '.png'
            }
        
            return 'img/items/suit/none.png'
        },

        rightHandItemImage() {
            const itemId = this.state.persones.player.equip.rightHand
            const item = this.items[itemId]
        
            if (item?.image) {
                return `img/items/${item.type}/${item.image}.png`
            }
        
            return null
        },

        leftHandItemImage() {
            const itemId = this.state.persones.player.equip.leftHand
            const item = this.items[itemId]
        
            if (item?.image) {
                return `img/items/${item.type}/${item.image}.png`
            }
        
            return null
        },

        isTwoHandEquiped() {
            const itemId = this.state.persones.player.equip.rightHand
            const item = this.items[itemId]

            return item?.size === 'twoHand'
        }
    },

    watch: {
        'state.locale': {
            handler(locale) {
                i18n.locale = locale
            }
        }
    },

    mounted() {
        // this.startDialog('wakeup')
        // this.startQuest('arrival')
        this.storyline(0)
    },

    methods: {
        storyline(step) { return storyline(this, step) },

        getVar(name) { return getVar(this, name) },
        setVar(name, value) { return setVar(this, name, value) },
        changeVar(name, delta) { return changeVar(this, name, delta) },

        setAttr(character, attr, val) { setAttr(this, character, attr, val) },
        changeAttr(character, attr, delta) { changeAttr(this, character, attr, delta) },
        setAttrs(character, attrs) { setAttrs(this, character, attrs) },
        changeAttrs(character, attrs) { changeAttrs(this, character, attrs) },
        
        setAtk(character, attr, val) { setAtk(this, character, attr, val) },
        changeAtk(character, attr, delta) { changeAtk(this, character, attr, delta) },
        setAtks(character, attrs) { setAtks(this, character, attrs) },
        changeAtks(character, attrs) { changeAtks(this, character, attrs) },

        setRelation(relation, value) { setRelation(this, relation, value) },
        changeRelation(relation, delta) { changeRelation(this, relation, delta) },
        setSkill(skill, value) { setSkill(this, skill, value) },
        changeSkill(skill, delta) { changeSkill(this, skill, delta) },

        setItem(item, count, storage) { setItem(this, item, count, storage) },
        shangeItem(item, delta, storage) { shangeItem(this, item, delta, storage) },
        equip(item) { equip(this, item) },
        unequip(slot) { unequip(this, slot) },

        script(script) { return eval(script) },

        startDialog(dialog) { return startDialog(this, dialog) },
        endDialog() { return endDialog(this) },
        
        startQuest(quest) { return startQuest(this, quest) },
        stepQuest(step) { return stepQuest(this, step) },
        endQuest() { return endQuest(this) },

        spaceObject(side) {
            return this.state[side + 'SpaceObject']
        },
        setLeftSpaceObject(image) { return setLeftSpaceObject(this, image) },
        clearLeftSpaceObject() { return clearLeftSpaceObject(this) },
        setRightSpaceObject(image) { return setRightSpaceObject(this, image) },
        clearRightSpaceObject() { return clearRightSpaceObject(this) },

        fireFromRight(type) { return fireFromRight(this, type) },
        fireFromLeft(type) { return fireFromLeft(this, type) },
        clearBullet() { return clearBullet(this) },

        sleep(milliseconds) { return sleep(milliseconds) },
    },
})
