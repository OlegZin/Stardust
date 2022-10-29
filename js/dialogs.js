const dialogs = {
    noSignal: {
        avatar: 'nosignal',
        step: [
            {
                text: 'dialog.noSignal',
                actions: [],
            }
        ],
    },

    wakeup: {
        end: 'this.storyline()',
        avatar: 'avatar2',
        step: [
            {
                text: 'dialog.wakeup.main.text',
                actions: [
                    {
                        caption: 'dialog.wakeup.main.action.haveQuestions',
                        action: "this.setVar('dialogStep', 2);",
                    },
                    {
                        caption: 'dialog.wakeup.main.action.imFine',
                        action: "this.setVar('dialogStep', 1);",
                    },
                ],
            },
            {
                text: 'dialog.wakeup.final.text',
                actions: [
                    {
                        caption: 'answers.thanks',
                        action: "this.endDialog()",
                    },
                ],
            },
            {
                text: 'dialog.wakeup.watYouInterested.text',
                actions: [
                    {
                        caption: 'dialog.wakeup.watYouInterested.action.ship',
                        action: "this.setVar('dialogStep', 3);",
                    },
                    {
                        caption: 'dialog.wakeup.watYouInterested.action.stardust',
                        action: "this.setVar('dialogStep', 4);",
                    },
                    {
                        caption: 'dialog.wakeup.watYouInterested.action.colonist',
                        action: "this.setVar('dialogStep', 5);",
                    },
                    {
                        caption: 'dialog.wakeup.watYouInterested.action.noQuestion',
                        action: "this.setVar('dialogStep', 1);",
                    },
                ],
            },
            {
                text: 'dialog.wakeup.ship.text',
                actions: [
                    {
                        caption: 'answers.clear',
                        action: "this.setVar('dialogStep', 2);",
                    },
                ],
            },
            {
                text: 'dialog.wakeup.stardust.text',
                actions: [
                    {
                        caption: 'answers.clear',
                        action: "this.setVar('dialogStep', 2);",
                    },
                ],
            },
            {
                text: 'dialog.wakeup.colonist.text',
                actions: [
                    {
                        caption: 'answers.thanks',
                        action: "this.setVar('dialogStep', 2);",
                    },
                ],
            },
        ],
    },
    kraxRiderAttack: {
        end: 'this.storyline()',
        avatar: 'avatar3',
        step: [
            { // 0
                text: 'dialog.colonistKraxAttack',
                actions: [
                    {
                        caption: 'answers.silent',
                        action: "this.endDialog()",
                    }
                ],
            }
        ],
    },

    coloniserEvacuation: {
        avatar: 'avatar2',
        step: [
            { // 0
                text: 'dialog.colony_ship_crash',
                actions: [
                    {
                        caption: 'answers.silent',
                        action: "this.startQuest('evacuation');",
                    }
                ],
            }
        ],
    },
}