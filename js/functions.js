function getVar(context, name) {
    return context.state[name]
}

function setVar(context, name, value) {
    console.log('setVar', name, value)
    context.$set(context.state, name, value)
}

function changeVar(context, name, delta) {
    const value = (context.state[name] || 0) + delta
    setVar(context, name, value)
}



// Params

function setRelation(context, relation, value) {
    context.$set(context.state.persones.player.relation, relation, value)
}

function changeRelation(context, relation, delta) {
    const value = (context.state.persones.player.relation[relation] || 0) + delta
    setRelation(context, relation, value)
}

function setSkill(context, skill, value) {
    context.$set(context.state.persones.player.skill, skill, value)
}

function changeSkill(context, skill, delta) {
    const value = (context.state.persones.player.skill[skill] || 0) + delta
    setSkill(context, skill, value)
}


function setAttr(context, character, attr, value) {
    context.$set(context.state.persones[character].attr, attr, value)
}

function changeAttr(context, character, attr, delta) {
    const value = (context.state.persones[character].attr[attr] || 0) + delta
    setAttr(context, character, attr, value)
}

function setAttrs(context, character, attrs) {
    for (const attr in attrs) {
        setAttr(context, character, attr, attrs[attr])
    }
}

function changeAttrs(context, character, attrs) {
    for (const attr in attrs) {
        changeAttr(context, character, attr, attrs[attr])
    }
}


function setAtk(context, character, attr, value) {
    context.$set(context.state.persones[character].atk, attr, value)
}

function changeAtk(context, character, attr, delta) {
    const value = (context.state.persones[character].atk[attr] || 0) + delta
    setAtk(context, character, attr, value)
}

function setAtks(context, character, attrs) {
    for (const attr in attrs) {
        setAtk(context, character, attr, attrs[attr])
    }
}

function changeAtks(context, character, attrs) {
    for (const attr in attrs) {
        changeAtk(context, character, attr, attrs[attr])
    }
}



// Items

function setItem(context, item, count, storage = 'inventory') {
    context.$set(context.state.storage[storage], item, count)
}

function changeItem(context, item, delta, storage = 'inventory') {
    const count = (context.state.storage[storage][item] || 0) + delta
    setItem(context, item, count)
    
    if (context.state.storage[storage][item] <= 0) {
        delete context.state.storage[storage][item]
    }
}

function equip(context, itemName) {
    const rightItemName = context.state.persones.player.equip.rightHand
    const leftItemName = context.state.persones.player.equip.leftHand
    const bodyItemName = context.state.persones.player.equip.body
    const rightItem = context.items[rightItemName]
    const leftItem = context.items[leftItemName]
    const bodyItem = context.items[bodyItemName]
    const item = context.items[itemName]
    let isEquipped = false

    if (item.type !== 'suit') {
        if (!rightItem) {
            if (!leftItem) {
                context.state.persones.player.equip.rightHand = itemName
                isEquipped = true
            }
            if (leftItem && item.size === 'oneHand') {
                context.state.persones.player.equip.rightHand = itemName
                isEquipped = true
            }
        } else {
            if (!leftItem && item.size === 'oneHand') {
                context.state.persones.player.equip.leftHand = itemName
                isEquipped = true
            }
        }
    
    } else {
        if (!bodyItem) {
            context.state.persones.player.equip.body = itemName
            isEquipped = true
        }
    }

    if (isEquipped) {
        changeItem(context, itemName, -1)
        if (item.onEquip) {
            context.script(item.onEquip)
        }
    }            
}

function unequip(context, slot) {
    const itemName = context.state.persones.player.equip[slot]
    const item = context.items[itemName]

    if (!item) return

    context.state.persones.player.equip[slot] = null

    changeItem(context, itemName, 1)

    if (item.onUnequip) {
        context.script(item.onUnequip)
    }            
}


// Dialog
function startDialog(context, dialog) {
    context.setVar('dialogStep', 0)
    context.setVar('dialog', dialog)

    if (context.dialogs[dialog]?.start) {
        context.script(context.dialogs[dialog].start) // Run setup script
    }

    context.setVar('isEnabledWindowTalk', true)
    context.setVar('hasEventsWindowTalk', true)
    context.setVar('isOpenedWindowTalk', true)
}

function endDialog(context) {
    const dialog = context.getVar('dialog')
    context.script(context.dialogs[dialog]?.end) // Run setup script

    context.setVar('dialogStep', 0)
    context.setVar('dialog', 'noSignal')
    context.setVar('hasEventsWindowTalk', false)
    context.setVar('isOpenedWindowTalk', false)
}


// Quest
function startQuest(context, quest) {
    context.setVar('questStep', 0)
    context.setVar('quest', quest)

    context.setVar('timeToArrival', null)
    context.setVar('questParam1', null)
    context.setVar('questParam2', null)
    context.setVar('questParam3', null)
    context.setVar('questParam4', null)
    context.setVar('questParam5', null)
    context.setVar('questParam6', null)
    context.setVar('questParam7', null)
    context.setVar('questParam8', null)
    context.setVar('questParam9', null)
    
    if (context.quests[quest]?.start) {
        context.script(context.quests[quest].start) // Run setup script
    }

    context.setVar('isEnabledWindowQuest', true)
    context.setVar('isOpenedWindowQuest', true)
    context.setVar('hasEventsWindowQuest', true)
}

function stepQuest(context, step) {
    const quest = context.getVar('quest')
    const checkScript = context.quests[quest].check

    // Сheck quest completion conditions
    if (!context.script(checkScript)) {
        context.setVar('questStep', step)
    } else {
        context.endQuest()
    }
}

function endQuest(context) {
    context.setVar('isEnabledWindowQuest', false)
    context.setVar('isOpenedWindowQuest', false)
    context.setVar('hasEventsWindowQuest', false)

    const quest = context.getVar('quest')
    const endScript = context.quests[quest].end

    // Сheck quest completion conditions
    if (endScript) {
        context.script(endScript)
    }
    
}



function clearLeftSpaceObject(context) {
    context.setVar('leftSpaceObject.cssClass', 'comeInLeft')
    context.sleep(5000).then(() => {
        context.setVar('leftSpaceObject.image', '')
    })
}

function setLeftSpaceObject(context, image) {
    if (context.state.leftSpaceObject.image) {
        context.clearLeftSpaceObject(context)
    }
    context.state.leftSpaceObject.image = image
    context.state.leftSpaceObject.cssClass = 'comeOutLeft'
}

function clearRightSpaceObject(context) {
    context.setVar('rightSpaceObject.cssClass', 'comeInRight')
    context.sleep(5000).then(() => {
        context.setVar('rightSpaceObject.image', '')
    })
}

function setRightSpaceObject(context, image) {
    if (context.state.rightSpaceObject.image) {
        context.clearRightSpaceObject(context)
    }
    context.state.rightSpaceObject.image = image
    context.state.rightSpaceObject.cssClass = 'comeOutRight'
}

function fireFromRight(context, type) {
    const rightObject = document.getElementById('rightObject')
    var rect = rightObject.getBoundingClientRect()
    var bullet = document.getElementById('bullet')
    bullet.style.left = rect.left+'px'
    bullet.style.top = rect.top + ((rect.bottom - rect.top) / 2) + 'px'

    context.setVar('cssBulletType', 'bullet-' + type)
    context.setVar('cssBulletAction', 'bullet-from-right-' + type)
}

function fireFromLeft(context, type) {
    const leftObject = document.getElementById('leftObject')
    var rect = leftObject.getBoundingClientRect()
    var bullet = document.getElementById('bullet')
    bullet.style.left = rect.right+'px'
    bullet.style.top = rect.top + ((rect.bottom - rect.top) / 2) + 'px'

    context.setVar('cssBulletType', 'bullet-' + type)
    context.setVar('cssBulletAction', 'bullet-from-left-' + type)
}

function clearBullet(context) {
    context.setVar('cssBulletType', '')
    context.setVar('cssBulletAction', '')
}



function randFromArr(context, name, unique) {
    let array = context.getVar(name)
    shuffle(array)
    
    if (unique) {
        const value = array.shift()
        setVar(name, array)
        return value
    }

    return array[0]
}
 
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

function storyline(context, step) {
    let script = ''
    
    context.state.story = step === undefined ? context.state.story + 1 : step

    switch (context.state.story) {
        case 0: script = 
            `this.sleep(1)
                .then(() => this.setLeftSpaceObject('terran_transport1'))
                .then(() => this.sleep(5000))
                .then(() => this.startDialog('wakeup'))`
            break

        case 1: script = `this.startQuest('arrival')`
            break

        case 2: script = 
            `this.sleep(1)
                .then(() => this.setRightSpaceObject('krax_destroyer'))
                .then(() => this.sleep(5000))
                .then(() => this.startDialog('kraxRiderAttack'))`
            break

        case 3: script = 
            `this.sleep(1)
                .then(() => this.fireFromRight('laser'))
                .then(() => this.sleep(500))
                .then(() => this.clearBullet())
                .then(() => this.fireFromRight('laser'))
                .then(() => this.sleep(500))
                .then(() => this.clearBullet())
                .then(() => this.fireFromRight('laser'))
                .then(() => this.sleep(500))
                .then(() => this.clearBullet())
                .then(() => this.startDialog('coloniserEvacuation'))`
            break
    }

    return context.script(script)
}