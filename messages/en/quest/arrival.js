const arrival_en = {
    param: {
        minutes: 'Minutes before arrival:',
    },

    main: {
        caption: 'Berth',
        text: `
            <p>Small and cozy cabin. She was my home on this long journey.</p>
            <p>While there is time, i can do something.</p>`,
        action: {
            rest: 'Have a meditation',
            checkMessages: 'Check private messages (10 minutes)',
            watchFilm: 'Watch educational film',
            checkEquip: 'Check equipment',
            walk: 'Walk around the ship',
        }
    },
    meditation: {
        caption: 'Berth',
        text: '<p>Still feeling weak after coming out of hibernation, I decide to recover with meditation and gymnastics.</p>',
        action: {
            short: 'Quick warm up (15 minutes)',
            medium: 'Deep breathing exercises (30 min)',
            long: 'Complete Qigong complex (45 min)',
        },
        result: {
            short: `
                <p>There is a pleasant surge of strength and good mood.</p>
                <p>Health restored to 40.</p>`,
            medium: `
                <p>The feeling of the body waking up in a pleasant wave passes through the whole body.</p>
                <p>Health restored to 55.</p>`,
            long: `
                <p>A powerful charge of vivacity literally rejuvenates the entire body.</p>
                <p>Health restored to 80</p>`,
        },
    },
    mail: {
        spam: {
            text: `<p>Dear Colonist! I am the deposed Crown Prince of New Sambesia and I seek allies.</p>
                <p>My father's <b><span class="deep-orange--text">huge</span></b> inheritance lies in an account that is inaccessible to me. But it can be transferred to your account and then fairly divided!</p>
                <p>To do this, you just need to pay a small commission for the transfer. Send me <b><span class="deep-orange--text">only 50cr</span></b> and we will become rich!</p>
            `,
            action: {
                wow: 'Wow! Of course! (-50cr)',
                no: 'Well, I do not...',
            },
        },
        grant: {
            text: `<p>Dear Colonist!</p>
                <p>The Earth federation government has issued a lump sum payment to all colonists of the second wave in the amount of <b><span class="deep-orange--text">1000cr</span></b>.</p>
                <p>The money will be credited to your account immediately.</p>
                <p>Thank you for the invaluable help to humanity and wish you success in the new world!</p>
                `,
        },
        friend: {
            text: `<p>Hello my friend!</p>
                <p>Your decision to move into new worlds was unexpected for me. However, you have always loved adventure.</p>
                <p>I just remembered that I have some connections in the administration of the colony and sent them a letter of recommendation addressed to you. I think they will be interested to know about your great survival experience (Ranger reputation +1).</p>
                <p>Good luck and tell me later how you got settled in a new place.</p>
                `,
            action: {
                thanksFriend: 'Thanks old friend!',
            },
        },
        insurance: {
            text: `<p>Dear Colonist, Safe Space Insurance Company (registration number R-4500353-FD) offers you personal property insurance.<p>
            <p>The insurance covers the causes of loss of property as a result of:<p>
            <ul>
                <li>robbery</li>
                <li>spaceship destruction</li>
                <li>fraudulent activities of third parties</li>
            </ul>
            <br>
            <p>The term of insurance is one standard year.<br>
            One-time fee - <b><span class="deep-orange--text">200cr</span></b>.<br>
            Insurance payment - <b><span class="deep-orange--text">2000cr</span></b>.</p>
            <p>The offer is valid only today. We look forward to cooperation. Have a good day!</p>
            `,
            noMoney: '<p>Unfortunately, there are not enough funds on your account to pay the fee.</p><p>We look forward to fruitful cooperation in the future!</p>',
            ready: '<p>Congratulations! Insurance certificate registered.</p><p>Have a nice day!</p>',
            action: {
                accept: 'I agree (-200cr)',
                reject: "I don't think I will need it",
            }
        },
        interview: {
            text: `<p>Dear colonist, the administration welcomes you to your new home!</p>
                <p>We strive to get to know each member of our society better in order to offer him the most suitable job.</p>
                <p>We invite you to take a short survey to determine your abilities.</p>
                `,
            action: {
                goInterview: 'Why not? (20 minutes)',
            },
            question1: {
                text: `<p>What is your strongest skill? We will count it as a 3rd level of proficiency.</p>`,
            },
            question2: {
                text: `<p>What is your secondary skill? We will count it as a 2 level of proficiency.</p>`,
            },
            question3: {
                text: `<p>What is your support skill? We will count it as 1 level of proficiency.</p>`,
            },
            question4: {
                text: `<p>What is your most valuable asset?</p>`,
                action: {
                    money: 'Personal savings (+5000cr)',
                    suit: 'Personal space suit ("Starry sky" suit)',
                    weapon: 'Name blaster (Gargantua blaster)',
                    books: 'Scientific library (+1 Science skill)',
                    tools: 'Toolbox (Multitool II)',
                },
            },
            question5: {
                text: `<p>Do you have any special merit? This will increase your reputation.</p>`,
                action: {
                    pilot: 'Heavy fighter piloting experience (+1 Space forces)',
                    infantry: 'Possession of all types of hand weapons (+1 Landing troops)',
                    sientist: 'Several published works (+1 Research corps)',
                    technic: 'Combat repair experience (+1 Tech service)',
                    pioneer: 'Six months of survival in the jungle (+1 Rangers)',
                    trader: 'Ensured the growth of production in the country (+1 Supply dep.)',
                },
            },
            question6: {
                text: `<p>Thank you for your replies.</p>
                    <p>Our colony is very lucky to have such a specialist!</p>
                    <p>We look forward to long-term cooperation and mutual prosperity.</p>`,
            },
        },
    },
}
