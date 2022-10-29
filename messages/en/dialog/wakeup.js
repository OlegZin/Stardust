const wakeup_en = {
    main: {
        text: `
            <i>--- shhhhh ---</i>
            <p>Hello colonist!</p>
            <p>I am glad to announce that our long journey has come to an end. In a few hours we will dock at <b><span class="orange--text">Stardust</span></b> Station, where your new life will begin.</p>
            <p>Waking up from hibernation can temporarily lead to amnesia. If you have any questions, I'll be happy to answer them.</p>
        `,
        action: {
            haveQuestions: 'Yes, I have questions',
            imFine: 'No, I\'m fine',
        },
    },
    final: {
        text: `
            <p>Glad to hear it.</p>
            <p>Use the remaining time to finally recover and collect personal belongings.</p>
            <p>When we're ready, I'll invite you to disembark.</p>
            <p>After disembarking, you can collect your belongings in the baggage claim area. Since it will exceed 3 tons for you, you have the right to receive an extraordinary transport car.</p>
            <p>Have a nice day!</p>
        `,
    },
    watYouInterested: {
        text: `<p>What are you interested in?</p>`,
        action: {
            ship: 'What is this ship?',
            stardust: 'What is Stardust?',
            colonist: 'Colonist?',
            noQuestion: 'I do not have any questions',
        },
    },
    ship: {
        text: `
            <p>You are aboard the colony ship <b><span class="orange--text">New Hope 2</span></b> as one of 5,000 colonists.</p>
            <p>It's hard for me to imagine, but I think that the decision to leave Earth forever was not easy ... However, everyone has their own reasons.</p>
            <p>Now you will become a happy inhabitant of the new world. It's so exciting!</p>
        `,
    },
    stardust: {
        text: `
            <p>326 years ago, the then-newest <b><span class="orange--text">James Webb</span></b> telescope discovered a promising star system that, in terms of its characteristics, far exceeded the then sensational <b><span class="orange--text">Trappist system</span></b>.</p>
            <p>4 promising planets at once. And one of them is a potentially ideal earth type!</p>
            <p>In order not to limit ourselves to one planet, it was decided to make the main base of the colonists a space station in orbit, the most promising of them.</p>
            <p>The pioneers arrived on a huge ship <b><span class="orange--text">Stardust</span></b> - a real ark. Now it has forever become the very space base from which the entire star system is accessible.</p>
        `,
    },
    colonist: {
        text: `
            <p>Yes, in the broadest sense of the word.</p>
            <p>Since you are arriving in the second wave of immigrants, there is a lot of work here.</p>
            <p>There is no need to limit yourself to any one activity. The possibilities are huge.</p>
            <p>Try yourself in several professions and find a job to your liking to become one of the most worthy members of the colony.</p>
            <p>I believe that you will succeed!</p>
        `,
    },
}
