const quests = {
    arrival: {
        start: `
            this.setVar('timeToArrival', 180);
            this.setVar('mails', [2,3,4,5,6]);
            `,
        check: "this.getVar('timeToArrival') < 20",
        end: 'this.storyline()',
        step: [
            { // 0
                location: 'berth',
                text: 'quest.arrival.main.text',
                params: [
                    {
                        caption: 'quest.arrival.param.minutes',
                        value: 'timeToArrival',
                    },
                ],
                actions: [
                    {
                        caption: 'quest.arrival.main.action.rest',
                        action: `
                            this.stepQuest(1)
                            this.setVar('questText', null)`,
                    },
                    {
                        caption: 'quest.arrival.main.action.checkMessages',
                        action: `
                            // this.stepQuest(this.randFromArr('mails', true))
                            this.stepQuest(6)
                            this.setVar('questText', null)`,
                    },
                    {
                        caption: 'quest.arrival.main.action.watchFilm',
                        action: '',
                    },
                    {
                        caption: 'quest.arrival.main.action.checkEquip',
                        action: '',
                    },
                    {
                        caption: 'quest.arrival.main.action.walk',
                        action: '',
                    },
                ],
            },
            { // 1
                location: 'berth',
                text: 'quest.arrival.meditation.text',
                params: [
                    {
                        caption: 'quest.arrival.param.minutes',
                        value: 'timeToArrival',
                    },
                ],
                actions: [
                    {
                        caption: 'quest.arrival.meditation.action.short',
                        action: `
                            this.setVar('questText', 'quest.arrival.meditation.result.short')
                            this.setAttr('player', 'hp', 40)
                            this.changeVar('timeToArrival', -15)
                            this.stepQuest(0)`,
                    },
                    {
                        caption: 'quest.arrival.meditation.action.medium',
                        action: `
                            this.setVar('questText', 'quest.arrival.meditation.result.medium')
                            this.setAttr('player', 'hp', 55)
                            this.changeVar('timeToArrival', -30)
                            this.stepQuest(0)`,
                    },
                    {
                        caption: 'quest.arrival.meditation.action.long',
                        action: `
                            this.setVar('questText', 'quest.arrival.meditation.result.long')
                            this.setAttr('player', 'hp', 80)
                            this.changeVar('timeToArrival', -45)
                            this.stepQuest(0)`,
                   },
                ],
            },
            { // 2
                location: 'screen',
                text: 'quest.arrival.mail.spam.text',
                params: [
                    {
                        caption: 'quest.arrival.param.minutes',
                        value: 'timeToArrival',
                    },
                ],
                actions: [
                    {
                        caption: 'quest.arrival.mail.spam.action.wow',
                        action: `
                            this.changeVar('money', -50)
                            this.changeVar('timeToArrival', -10)
                            this.stepQuest(0)`,
                   },
                   {
                    caption: 'quest.arrival.mail.spam.action.no',
                    action: `
                        this.changeVar('timeToArrival', -10)
                        this.stepQuest(0)`,
                    },
                ],
            },
            { // 3
                location: 'screen',
                text: 'quest.arrival.mail.grant.text',
                params: [
                    {
                        caption: 'quest.arrival.param.minutes',
                        value: 'timeToArrival',
                    },
                ],
                actions: [
                   {
                    caption: 'answers.ok',
                    action: `
                        this.changeVar('money', 1000)
                        this.changeVar('timeToArrival', -10)
                        this.stepQuest(0)`,
                    },
                ],
            },
            { // 4
                location: 'screen',
                text: 'quest.arrival.mail.friend.text',
                params: [
                    {
                        caption: 'quest.arrival.param.minutes',
                        value: 'timeToArrival',
                    },
                ],
                actions: [
                   {
                    caption: 'quest.arrival.mail.friend.action.thanksFriend',
                    action: `
                        this.changeRelation('pioneer', 1)
                        this.changeVar('timeToArrival', -10)
                        this.stepQuest(0)`,
                    },
                ],
            },
            { // 5
                location: 'screen',
                text: 'quest.arrival.mail.insurance.text',
                params: [
                    {
                        caption: 'quest.arrival.param.minutes',
                        value: 'timeToArrival',
                    },
                ],
                actions: [
                    {
                        caption: 'quest.arrival.mail.insurance.action.accept',
                        action: `
                            const money = this.getVar('money')
                            if (money < 200) {
                                this.setVar('questText', 'quest.arrival.mail.insurance.noMoney')
                                this.setVar('insurance', false)
                            } else {
                                this.setVar('questText', 'quest.arrival.mail.insurance.ready')
                                this.setVar('insurance', true)
                                this.changeVar('money', -200)
                            }
                            this.changeVar('timeToArrival', -10)
                            this.stepQuest(0)
                            `,
                    },
                    {
                        caption: 'quest.arrival.mail.insurance.action.reject',
                        action: `
                            this.changeVar('timeToArrival', -10)
                            this.stepQuest(0)`,
                    },
                ],
            },
            { // 6
                location: 'screen',
                text: 'quest.arrival.mail.interview.text',
                params: [
                    {
                        caption: 'quest.arrival.param.minutes',
                        value: 'timeToArrival',
                    },
                ],
                actions: [
                    {
                        caption: 'quest.arrival.mail.interview.action.goInterview',
                        action: `
                            this.changeVar('timeToArrival', -10)
                            this.stepQuest(7)`,
                    },
                    {
                        caption: 'answers.notInterested',
                        action: `
                            this.changeVar('timeToArrival', -10)
                            this.stepQuest(0)`,
                    },
                ],
            },
            { // 7
                location: 'screen',
                text: 'quest.arrival.mail.interview.question1.text',
                actions: [
                    {
                        caption: 'skill.pilot',
                        action: `
                            this.setSkill('pilot', 3)
                            this.stepQuest(8)`,
                    },
                    {
                        caption: 'skill.infantry',
                        action: `
                            this.setSkill('infantry', 3)
                            this.stepQuest(8)`,
                    },
                    {
                        caption: 'skill.sientist',
                        action: `
                            this.setSkill('sientist', 3)
                            this.stepQuest(8)`,
                    },
                    {
                        caption: 'skill.technic',
                        action: `
                            this.setSkill('technic', 3)
                            this.stepQuest(8)`,
                    },
                    {
                        caption: 'skill.pioneer',
                        action: `
                            this.setSkill('pioneer', 3)
                            this.stepQuest(8)`,
                    },
                    {
                        caption: 'skill.trader',
                        action: `
                            this.setSkill('trader', 3)
                            this.stepQuest(8)`,
                    },
                ],
            },
            { // 8
                location: 'screen',
                text: 'quest.arrival.mail.interview.question2.text',
                actions: [
                    {
                        caption: 'skill.pilot',
                        action: `
                            this.setSkill('pilot', 2)
                            this.stepQuest(9)`,
                    },
                    {
                        caption: 'skill.infantry',
                        action: `
                            this.setSkill('infantry', 2)
                            this.stepQuest(9)`,
                    },
                    {
                        caption: 'skill.sientist',
                        action: `
                            this.setSkill('sientist', 2)
                            this.stepQuest(9)`,
                    },
                    {
                        caption: 'skill.technic',
                        action: `
                            this.setSkill('technic', 2)
                            this.stepQuest(9)`,
                    },
                    {
                        caption: 'skill.pioneer',
                        action: `
                            this.setSkill('pioneer', 2)
                            this.stepQuest(9)`,
                    },
                    {
                        caption: 'skill.trader',
                        action: `
                            this.setSkill('trader', 2)
                            this.stepQuest(9)`,
                    },
                ],
            },
            { // 9
                location: 'screen',
                text: 'quest.arrival.mail.interview.question3.text',
                actions: [
                    {
                        caption: 'skill.pilot',
                        action: `
                            this.setSkill('pilot', 1)
                            this.stepQuest(10)`,
                    },
                    {
                        caption: 'skill.infantry',
                        action: `
                            this.setSkill('infantry', 1)
                            this.stepQuest(10)`,
                    },
                    {
                        caption: 'skill.sientist',
                        action: `
                            this.setSkill('sientist', 1)
                            this.stepQuest(10)`,
                    },
                    {
                        caption: 'skill.technic',
                        action: `
                            this.setSkill('technic', 1)
                            this.stepQuest(10)`,
                    },
                    {
                        caption: 'skill.pioneer',
                        action: `
                            this.setSkill('pioneer', 1)
                            this.stepQuest(10)`,
                    },
                    {
                        caption: 'skill.trader',
                        action: `
                            this.setSkill('trader', 1)
                            this.stepQuest(10)`,
                    },
                ],
            },
            { // 10
                location: 'screen',
                text: 'quest.arrival.mail.interview.question4.text',
                actions: [
                    {
                        caption: 'quest.arrival.mail.interview.question4.action.money',
                        action: `
                            this.changeVar('money', 5000)
                            this.stepQuest(11)`,
                    },
                    {
                        caption: 'quest.arrival.mail.interview.question4.action.suit',
                        action: `
                            this.setItem('starsky', 1)
                            this.stepQuest(11)`,
                    },
                    {
                        caption: 'quest.arrival.mail.interview.question4.action.weapon',
                        action: `
                            this.stepQuest(11)`,
                    },
                    {
                        caption: 'quest.arrival.mail.interview.question4.action.books',
                        action: `
                            this.stepQuest(11)`,
                    },
                    {
                        caption: 'quest.arrival.mail.interview.question4.action.tools',
                        action: `
                            this.stepQuest(11)`,
                    },
                ],
            },
            { // 11
                location: 'screen',
                text: 'quest.arrival.mail.interview.question5.text',
                actions: [
                    {
                        caption: 'quest.arrival.mail.interview.question5.action.pilot',
                        action: `
                            this.changeRelation('pilot', 1)
                            this.stepQuest(12)`,
                    },
                    {
                        caption: 'quest.arrival.mail.interview.question5.action.infantry',
                        action: `
                            this.changeRelation('infantry', 1)
                            this.stepQuest(12)`,
                    },
                    {
                        caption: 'quest.arrival.mail.interview.question5.action.sientist',
                        action: `
                            this.changeRelation('sientist', 1)
                            this.stepQuest(12)`,
                    },
                    {
                        caption: 'quest.arrival.mail.interview.question5.action.technic',
                        action: `
                            this.changeRelation('technic', 1)
                            this.stepQuest(12)`,
                    },
                    {
                        caption: 'quest.arrival.mail.interview.question5.action.pioneer',
                        action: `
                            this.changeRelation('pioneer', 1)
                            this.stepQuest(12)`,
                    },
                    {
                        caption: 'quest.arrival.mail.interview.question5.action.trader',
                        action: `
                            this.changeRelation('trader', 1)
                            this.stepQuest(12)`,
                    },
                ],
            },
            { // 12
                location: 'screen',
                text: 'quest.arrival.mail.interview.question6.text',
                actions: [
                    {
                        caption: 'answers.ok',
                        action: `
                            this.changeVar('timeToArrival', -20)
                            this.stepQuest(0)`,
                    },
                ],
            },
         ],
    },
}