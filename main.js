var story;
function getStory(player) {
    return {
    currentScene: "attack",
    attack: {
        title: `Welcome to VoidSET, ${player}.`,
        story: "Please select which hub you'd like to access.",
        choices: [
            {
                choice: "Access Admin Hub",
                destination: "AdHub"
            },
            {
                choice: "Access Security Hub",
                destination: "SecHub"
            }
        ]
    },
    AdHub: {
        title: "Welcome to the Admin Hub.",
        story: " From here, you can access employee profiles, update logs, and communication services. ERROR: Communication services currently offline. Please fix ASAP.",
        choices: [
            {
                choice: "Employee Profiles",
                destination: "Profiles"
            },
            {
                choice: "Update Logs",
                destination: "updates"
            },
            {
                choice: "Communication Service",
                destination: "errorPage"
            }
        ],
        defaultDestination: "attack",
        buttonText: "Enter/Back"
    },
    Profiles: {
        title: "Employee Profile Viewer",
        story: `Please select from one of the following profiles. Note: For privacy purposes, certain information has been redacted from the user, with the exception of the logged in user, ${player}'s profile.`,
        choices: [
            {
                choice: `Ground Control Tech Support ${player}`,
                destination: "playerprofile"
            },
            {
                choice: "Captain P. L. Aceholder",
                destination: "captainprofile"
            },
            {
                choice: "Comms Officer John Smith",
                destination: "sussyprofile"
            },
            {
                choice: "Senior Researcher Maya Taylor",
                destination: "catprofile"
            },
            {
                choice: "Pilot/Navigator Cass Dior",
                destination: "TSprofile"
            },
            {
                choice: "Senior Engineer M. J.",
                destination: "thankprofile"
            },
            {
                choice: "Technician Tom Nya",
                destination: "nyaprofile"
            }
        ],
        defaultDestination: "AdHub",
        buttonText: "Enter/Back"

    },
    playerprofile: {
        title: `CREWMEMBER NAME: ${player}\u{1F47E}`,
        story: `<p>Position: Ground Control Tech Support</p>
        <p>Location: Megacorp HQ, USA, Earth</p>
        <p>Notes: A recent hire brought on as an intern and assigned to VoidSET crew 1.3. Has reported some issues with retaining communication with crew 1.3 but has otherwise retained a fairly decent productivity rating. On the 13/10, submitted a request to have a fidget toy on desk as enrichment. Request was denied on grounds of high risk of decreased productivity and increased distraction. Did not attend the company Bonus Pizza Party arranged by management.</p>`,
        defaultDestination: "Profiles",
        buttonText: "Back"
    },
    captainprofile: {
        title: `CREWMEMBER NAME: P. L. Aceholder\u{1F6F8}`,
        story: `<p>Position: Captain of VoidSET Crew 1.3</p>
        <p>Location: VoidSET Ship 1.3, Sector 3, Moon</p>
        <p>Field of Specialisation: \u2588\u2588\u2588\u2588\u2588</p>
        <p>Notes: A veteran spacefarer transferred from NASA. Graduated top of their field in \u2588\u2588\u2588\u2588\u2588. Has reported personal disputes among crew members \u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588 and \u2588\u2588. Submitted request for crewmember transfer of \u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588, request denied on grounds of guarantee of \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588. When contacted, expressed \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 towards the company Bonus Pizza Party arranged by management.</p>`,
        defaultDestination: "Profiles",
        buttonText: "Back"
    },
    sussyprofile: {
        title: `CREWMEMBER NAME: John Smith\u{1F4B8}`,
        story: `<p>Position: Communications Officer of VoidSET Crew 1.3</p>
        <p>Location: VoidSET Ship 1.3, Sector 3, Moon</p>
        <p>Field of Specialisation: N/A</p>
        <p>Notes: \u2588\u2588\u2588 of Megacorp stakeholder \u2588\u2588\u2588\u2588\u2588 Smith. Has expressed distaste for Intern ${player}. Likes pizza. Submitted request for a copy of a \u2588\u2588\u2588\u2588 magasine for enrichment. Request denied. Submitted request for video call with \u2588\u2588\u2588\u2588 Smith. Request accepted with a timeslot of fifteen minutes. Submitted request for \u2588\u2588\u2588\u2588\u2588 as a substitute for Megacorp approved VoidSET rations. Request denied. Submitted request for acquisition of \u2588\u2588\u2588\u2588\u2588\u2588\u2588 sample. Request pending.</p>`,
        defaultDestination: "Profiles",
        buttonText: "Back"
    }, 
    catprofile: {
        title: `CREWMEMBER NAME: Maya Taylor\u{1F408}`,
        story: `<p>Position: Senior Researcher of VoidSET Crew 1.3</p>
        <p>Location: VoidSET Ship 1.3, Sector 3, Moon</p>
        <p>Field of Specialisation: Use of Specialised Analysis Technology</p>
        <p>Notes: <p>Submitted request for analysis permission of unknown \u2588\u2588\u2588\u2588\u2588\u2588\u2588 sample found in routine Sector 3 sweep. Request accepted. Submitted request for cat photos as part of mandatory timeslotted social communications with Intern ${player} for enrichment. Request denied. Submitted request for increase in timeslotted sleep and recreation time. Request \u2588\u2588\u2588\u2588\u2588\u2588.</p>`,
        defaultDestination: "Profiles",
        buttonText: "Back"
    },
    TSprofile: {
        title: `CREWMEMBER NAME: Cass Dior\u{1F92F}`,
        story: `<p>Position: Pilot and Navigator of VoidSET Crew 1.3</p>
        <p>Location: VoidSET Ship 1.3, Sector 3, Moon</p>
        <p>Field of Specialisation: Navigational Application Information Technologies</p>
        <p>Notes: <p>Has noted 'beef' with crewmember \u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588. Submitted request for 'hot choccy'. Request denied. Submitted request for 'caffeinated beverage'. Request accepted on grounds of likely productivity increase. Eight single servings of Megacorp-issued standard black coffee cans now delivered with each weekly ration package. Submitted request for more coffee, citing \u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588 had been stealing allocated serves. Request pending investigation into security logs to confirm this claim by Intern ${player}. Submitted request for floristry handbook and/or a small houseplant for workspace enrichment. Request denied.</p>`,
        defaultDestination: "Profiles",
        buttonText: "Back"
    },
    thankprofile: {
        title: `CREWMEMBER NAME: M. J.\u{1F643}`,
        story: `<p>Position: Senior Engineer of VoidSET Crew 1.3</p>
        <p>Location: VoidSET Ship 1.3, Sector 3, Moon</p>
        <p>Field of Specialisation: Digital Visualisation and Upkeep</p>
        <p>Notes: <p>Prior to hiring of Intern ${player}, was the previous Ground Control Tech Support Officer. Got transferred to Ship 1.3 after the previous Senior Engineer \u2588\u2588\u2588\u2588. Submitted a request to \u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588 to Ground Control. Request denied.</p>`,
        defaultDestination: "Profiles",
        buttonText: "Back"
    },
    nyaprofile: {
        title: `CREWMEMBER NAME: Tom Nya\u{1F614}`,
        story: `<p>Position: Technician of VoidSET Crew 1.3</p>
        <p>Location: VoidSET Ship 1.3, Sector 3, Moon</p>
        <p>Field of Specialisation: IT</p>
        <p>Notes: <p>Voted Megacorp's 'Most Likely to Survive to the End of a Horror Film' at the company Bonus Pizza Party arranged by management, but did not receive the award due to non-attendence as they were on Ship 1.3 at the time. Submitted request for a \u2588\u2588\u2588\u2588\u2588\u2588 plushie for enrichment. Request denied. Submitted a request for newer tools, as old ones reportedly broke during the \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 during preliminary analysis of \u2588\u2588\u2588\u2588\u2588\u2588\u2588 sample. Request pending investigation into true status of tools by crewmember \u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588 to assess if irreparable or still useful. Submitted request for Intern ${player} to change their Megacorp Approved Profile Picture Substitue Emoji (MAPPSE). Request accepted.</p>`,
        defaultDestination: "Profiles",
        buttonText: "Back"
    },
    updates: {
        title: "Access the weekly update logs submitted by Comms Officer John Smith, on behalf of Captain Aceholder.",
        story: "ERROR: Due to loss of communications services \u2588\u2588 days ago, new reports have been unable to be received. Only prior reports that have not been archived are available.",
        choices: [
            {
                choice: "Update - Sector 3, Cycle Eight",
                destination: "upd8"
            },
            {
                choice: "Update - Sector 3, Cycle Five",
                destination: "update5"
            },
            {
                choice: "Update - Sector 3, Cycle Four",
                destination: "upd4te"
            },
        ],
        defaultDestination: "AdHub",
        buttonText: "Enter/Back"
    },
    upd8: {
        title: "Update - Sector 3, Cycle Eight",
        story: `<p>I'm going to beat the \u2588\u2588\u2588\u2588 that useless \u2588\u2588\u2588\u2588\u2588\u2588. Captain my ass, they shouldn't even be up here. I'll teach them a lesson they won't soon forget that's for sure, freak em out and take em down with me so EVERYONE knows just what \u2588\u2588\u2588\u2588 they're planning to pull against us. Corporate \u2588\u2588\u2588\u2588\u2588.</p>
        <p>Hey ${player}, make sure to check out the show through the security feeds, assuming they haven't glitched out again like the useless pieces of junk they are.</p>
        <p>Let's both enjoy taking this useless \u2588\u2588\u2588\u2588 down a peg. Maybe they'll even give YOU their position at the end of all this.</p>`,
        defaultDestination: "updates",
        buttonText: "Back"
    },
    update5:{
        title: "Update - Sector 3, Cycle Five",
        story: `<p>I'm gonna scream at those \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588!! First they don't let me keep my damn 'sample' or whatever even though I FOUND IT, now apparently they're launching complaints about me because I'm 'stealing' coffee that isn't meant for me?? If it's not for me then why is it OUT in the RATIONS BOX with NO ONE TAKING IT, then?? And I can't believe they went behind my back to do that, what the \u2588\u2588\u2588\u2588?! The PROTOCOL they all love to talk about so much says that for any communications to Earth they have to talk to ME first, because I'M the COMMUNICATIONS guy!</p>
               <p>Yeah, well the joke's on them, because I can't STAND to see their stupid. \u2588\u2588\u2588\u2588\u2588\u2588\u2588... FACES! I just have to wait five more weeks or 'cycles' or whatever the \u2588\u2588\u2588\u2588 they're called and I get to go home because SOME OF US actually MATTER in the real \u2588\u2588\u2588\u2588\u2588\u2588\u2588 world. I caught the pilot and researcher \u2588\u2588\u2588\u2588\u2588\u2588\u2588 arguing the other day and they have the nerve to think they're BETTER than me because they had to get some stupid SCHOLARSHIPS to even be able to have the CHANCE to get up here? What a joke, seriously.</p>
               <p>Even that damn Captain thinks they're better than me, but they have NO clue. I know they're close to cracking, I just know it. I see them just blankly staring at the wall instead of getting stuff done during designated work timeslots. Once I get back home, you BET my dad's going to hear about how PATHETIC they're being, unable to handle even a little routine. I heard they're not even QUALIFIED to be Captain, you know? Apparenly they took their degree in like. \u2588\u2588\u2588\u2588\u2588\u2588\u2588 or something. What an idiot.</p>
               <p>Probably going to take a break from writing these until something interesting happens, because GOD knows nothing changes up here. \u2588\u2588\u2588\u2588.</p>
               <p>Oh and ${player}, I know reading these is part of your job and all, but if you snitch, you better say goodbye to your stupid little internship. \u2588\u2588\u2588\u2588\u2588.</p>
               <p>Johnny himself, over and out.</p>`,
        defaultDestination: "updates",
        buttonText: "Back"
    },
    upd4te: {
        title: "Update - Sector 3, Cycle Four",
        story: `<p>This is the fourth update since we got to the new Sector and the Captain FINALLY agreed it would be a better idea to let me do my job of COMMUNICATING. Apparently, we finally got a new ground control guy today. Some intern called ${player}. I know their job is to read these or whatever, but it's not like whatever I say will get me in trouble, right? My dad practically funds this place!</p>
        <p>Anyway, I was assigned to the alotted sweep this time, and I found this really cool \u2588\u2588\u2588\u2588\u2588\u2588\u2588. Apparently we've never found anything like it before? So now they want to send it in for analysis, but like. It's mine, I was the one who found it! It's so BORING here, I wish they'd give me just this thing. Even the coffee can't keep me focused for long anymore, ughh.</p>
        <p>As for other stuff, I caught the Captain complaining the other day, but I don't know who to. SOMEONE has been crying in their room again and making it hard to sleep, which like, GOD, we all have the same routine, man, it's not THAT hard. The worst part is seeing your stupid faces everyday and getting told "No, John, don't do that, you don't know what you're doing, John, shut the hell up,John. God, I hope my dad gets me reassigned soon.</p>
        <p>Smith, signing off.</p>`,
        defaultDestination: "updates",
        buttonText: "Back"
    },
    SecHub: { 
        title: "Welcome to the Security Hub.",
        story: "From here, you can access camera footage, audio recordings, and airlock logs. ERROR: Camera and audio recordings currently offline, automatic AI backup transcripts accessible only.",
        choices: [
            {
                choice: "Camera Footage",
                destination: "cameras"
            },
            {
                choice: "Audio Recordings",
                destination: "audio"
            },
            {
                choice: "Airlock Logs",
                destination: "airlock"
            }
        ],
        defaultDestination: "attack",
        buttonText: "Enter/Back"
    },
    airlock: {
        title: "Airlock System Log",
        story: `<p>Note: GCRT = Ground Control Relative Time.</p>
        <p>ERROR: Due to loss of communications services \u2588\u2588 days ago, new logs have been unable to be retrieved. Only prior logs that have not been archived are available.</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 3 DAY: 3, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Captain Aceholder</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 3 DAY: 7, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Navigator Dior</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 4 DAY: 3, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Captain Aceholder</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 4 DAY: 7, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Navigator Dior</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 5 DAY: 2, AIRLOCK ACTIVATED: 2 TIMES FROM: 11:\u2588\u2588 to 12:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Ground Control ${player} Remote Activation</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 5 DAY: 3, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Captain Aceholder</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 5 DAY: 7, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Navigator Dior</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 6 DAY: 3, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Captain Aceholder</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 6 DAY: 5, AIRLOCK ACTIVATED: 2 TIMES FROM: 11:\u2588\u2588 to 12:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Comms Officer Smith</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 6 DAY: 7, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Navigator Dior</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 7 DAY: 3, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Captain Aceholder</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 7 DAY: 7, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Navigator Dior</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 7 DAY: 7, AIRLOCK ACTIVATED: 2 TIMES FROM: 21:\u2588\u2588 to 23:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Technician Nya</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 8 DAY: 3, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Navigator Dior</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 8 DAY: 3, AIRLOCK ACTIVATED: 2 TIMES FROM: 22:\u2588\u2588 to 23:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Comms Officer Smith</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 8 DAY: 4, AIRLOCK ACTIVATED: 2 TIMES FROM: 12:\u2588\u2588 to 15:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Engineer M. J.</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 8 DAY: 7, AIRLOCK ACTIVATED: 4 TIMES FROM: 12:\u2588\u2588 to 20:\u2588\u2588 GCRT</p>
        <p>LAST LOGGED USER: Engineer M. J.</p>
        <p>YEAR: \u2588\u2588\u2588\u2588, CYCLE: 8 DAY: 7, AIRLOCK ACTIVATED: 1 TIMES FROM: 21:\u2588\u2588 to ERRORERROR:ERRORERROR GCRT</p>
        <p>LAST LOGGED USER: Comms Officer Smith</p>`,
        choices: [
            {
                choice: `Tick this box to remotely activate the airlock under authorisation: ${player}`,
                destination: "errorPage"
            }
        ],
        defaultDestination: "SecHub",
        buttonText: "Enter/Back"
    },
cameras: {
    title: "Please Select A Camera Log",
    story: "ERROR: Due to loss of communications services \u2588\u2588 days ago, new recordings have been unable to be received. Only prior recordings that have not been archived are available.",
    choices: [
        {
            choice: "Airlock Exterior",
            destination: "outside"
        },
        {
            choice: "Living Quarters",
            destination: "chillspace"
        },
        {
            choice: "Working Area",
            destination: "capitalism"
        }
    ],
    defaultDestination: "SecHub",
    buttonText: "Enter/Back"
},
outside: {
    title: "Airlock Exterior Camera",
    image: "PLACEHOLDER.gif",
    story: `<p>AVAILABLE TRANSCRIPT RECORDED CYCLE: 8 DAY: 7 FROM: 21:\u2588\u2588 to ERRORERROR:ERRORERROR</p>
    <p>Airlock doors open. Air is sucked into the vacuum. MAN walks into frame. MAN identified as crewmember JOHN SMITH. Through visor, identifying numerous INJURIES on SMITH's face. SMITH walks with a limp. SMITH identifies camera, makes GESTURE. GESTURE identified as SALUTE. GESTURE has revealed new identified INJURY -- SMITH's left hand glove has one finger limp. SMITH approaches Megacorp Certified EMERGENCY BACKUP GENERATOR (EBG). SMITH deactivates Megacorp Certified EBG. Footage lags and cuts as SMITH seems to remove an ITEM from his LIFE SUPPORT SUIT. Footage cuts.</p>`,
    defaultDestination: "cameras",
    buttonText: "Back"
},
chillspace: {
    title: "Living Quarters Camera",
    image: "PLACEHOLDER.gif",
    story: `<p>AVAILABLE TRANSCRIPT RECORDED CYCLE: 5 DAY: 2 FROM: 22:\u2588\u2588 to 22:\u2588\u2588</p>
    <p>CAPTAIN ACEHOLDER sits on their bunk, staring at a wall. Crewmember TAYLOR enters the room. TAYLOR approaches ACEHOLDER. After TAYLOR makes a GESTURE at them, ACEHOLDER startles. They converse. ACEHOLDER looks concerned. TAYLOR becomes increasingly distressed. ACEHOLDER pats TAYLOR on the shoulder. TAYLOR nods and leaves. ACEHOLDER follows.</p>`,
    defaultDestination: "cameras",
    buttonText: "Back"
},
capitalism: {
    title: "Working Area Hidden Cameras A & B", 
    image: "PLACEHOLDER.gif",
    story: `<p>AVAILABLE TRANSCRIPT RECORDED CYCLE: 5 DAY: 2 FROM: 22:\u2588\u2588 to 23:\u2588\u2588</p>
    <p>Crewmember SMITH argues with crewmembers NYA and MJ. The SAMPLE rests on a table beside them. SMITH gestures to the SAMPLE. NYA gestures to SMITH. Crewmember TAYLOR and Captain ACEHOLDER enter the space. SMITH gestures at ACEHOLDER. ACEHOLDER shakes their head. NYA nods. SMITH's face goes red. SMITH grabs the SAMPLE, gesturing with it. TAYLOR retrieves SAMPLE from SMITH, surrenders it to ACEHOLDER. ACEHOLDER takes SAMPLE and places it into the Megacorp Security Certified MegaSafe Safety Deposit and locks it under their bio-print ID. SMITH yells. ACEHOLDER shakes their head. DIOR enters. DIOR performs a RUDE GESTURE to SMITH. SMITH punches a wall, performs a similar RUDE GESTURE to the rest of the crew, and exits towards the LIVING QUARTERS. Footage begins to lag and cut. ACEHOLDER exits to the BRIDGE. Remaining crewmembers remain in the room and discuss. Camera cuts completely.</p>`,
    defaultDestination: "cameras",
    buttonText: "Back"
},
audio: {
    title: "Please Select A Audio Log",
    story: "ERROR: Due to loss of communications services \u2588\u2588 days ago, new recordings have been unable to be received. Only prior recordings that have not been archived are available.",
    choices: [
        {
            choice: `Welcome Call for ${player} CYCLE: 4 DAY: 3`,
            destination: "wholesome"
        },
        {
            choice: "Bridge Log CYCLE: 5 DAY: 2",
            destination: "captainSUS"
        },
        {
            choice: "Recreation Log CYCLE: 7 DAY: 1",
            destination: "boredom"
        },
        {
            choice: "Work Log CYCLE: 8 DAY: 7",
            destination: "dammitjohn"
        }
    ],
    defaultDestination: "SecHub",
    buttonText: "Enter/Back"
},
wholesome: {
    title: `Welcome Call for ${player} CYCLE: 4 DAY: 3`,
    story: `<p>ACEHOLDER: Can you hear us, ${player}?</p>
    <p>${player}: \u{1F44D}</p>
    <p>ACEHOLDER: Welcome to the team! We've only got a couple of minutes for this before we've got to get back to work, so I hope you don't mind some quick introductions, and then we can talk more later.</p>
    <p>${player}: \u{1F44C}</p>
    <p>ACEHOLDER: Right, well, you already know me, I'm the captain of crew 1.3. These lovely ladies here are our Pilot Dior and Researcher Taylor, these two are the ones you'll be working with the most, our Technician and Engineer, Tom Nya and M.J.</p>
    <p>SMITH: And I'm John Smith, I'm in charge of the communication so, you know, the important stuff, ha. We'll be talking pretty often, probably, so better get used to me.</p>
    <p>ACEHOLDER: Right, I was getting to that -- oh, shhh -- we are OUT of time, okay, so sorry ${player} but we've got to get back to work. Talk to you later!</p>
    <p>DIAL TONE.</p>
    <p>TAYLOR: Did anyone else notice how ${player} never actually spoke to us, or...?</p>
    `,
    defaultDestination: "audio",
    buttonText: "Back"    
},
captainSUS: {
    title: `Bridge Log CYCLE: 5 DAY: 2`,
    story: `<p>ACEHOLDER: Did you know that the AI can't censor stuff for audio recordings the way it does for everything else? They won't tell you this, but it turns out that the combo of machine learning for analysing our speech or actions is REALLY clunky when combined with the censorship system. Apparently, last time they tried it ended up censoring every single noun in the English language.</p>
    <p>DEEP BREATHS.</p>
    <p>ACEHOLDER: God, what am I doing here? I studied business, for God's sake, they poached me from NASA's sales teams for this? If the pay wasn't so good... I miss my cats. I hope my sister is still enjoying looking after them. I should ask Smith to put in a request for me to call her next time.</p>
    <p>ACEHOLDER: Just five more cycles, then we're all being reallocated back to ground control. Just five more cycles.</p>
    `,
    defaultDestination: "audio",
    buttonText: "Back"
},
boredom: {
   title: `Recreation Log CYCLE: 7 DAY: 1`,
    story: `<p>DIOR: Damn, crazy. Fun fact, I don't drink coffee le ma ow.</p>
    <p>DIOR: But hey this is Megacorp it is what it is.</p>
    <p>TAYLOR: It's not my fault the evil megacorp denied your request for hot choccy.</p>
    <p>SMITH: Don't you two have anything BETTER to do, GOD.</p>
    <p>MEOW.</p>
    <p>SMITH: Did you just MEOW at me?</p>
    <p>TAYLOR: No.</p>
    <p>NYA: I still can't believe you stole the damn cat emoji.</p>
    <p>MJ: Nah I love it.</p>
    <p>DIOR: Oh my god. I just realised. P. L. Aceholder.</p>
    <p>ACEHOLDER: My parents had a bad sense of humour. My full name is Pat Lee Aceholder.</p>
    <p>SMITH: Screw this, I'm going to sleep in the Bridge.</p>
    <p>ACEHOLDER: Whatever you say, kiddo.</p>
    <p>SMITH: I'm not a child!</p>
    <p>DIOR: Sus.</p>
    <p>SMITH: What?</p>
    `,
    defaultDestination: "audio",
    buttonText: "Back"
},
dammitjohn: {
    title: `Work Log CYCLE: 8 DAY: 7`,
    story: `<p>SMITH: YOU LYING BITCH!</p>
    <p>EXTENDED SOUNDS OF BRUTAL PIPE MURDER.</p>
    <p>SMITH: Wait... Wait. Shit. SHIT. What did I... this wasn't me!</p>
    <p>TAYLOR: I...</p>
    <p>MJ: Get to the Bridge! We can lock him out from there!</p>
    <p>DIOR: You son of a --</p>
    <p>SOUNDS OF FIGHTING AND RUNNING. A THUD. THE AUDIO CUTS ABRUPTLY.</p>
    `,
    defaultDestination: "audio",
    buttonText: "Back"
},
errorPage: {
    title: "ERROR",
    story: `SYSTEMS OFFLINE. PLEASE INITIATE TEMPORARY EMERGENCY REBOOT FROM MANUAL CONTROL UNIT IN SHIP REACTOR AND CONTACT GROUND CONTROL TECH SUPPORT ${player} IMMEDIATELY.`,
    image: "ERROR.png",
    defaultDestination: "attack",
    buttonText: "Back"
    }
}}

document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelector('#beginning')
    var content = document.querySelector('#content')
    button.addEventListener('click', function() {
        var player = document.querySelector('#player')
        story = getStory(player.value)
        renderScene()
    })
})

function renderScene () {
    var text = "Enter"
    var image = "";
    if (story[story.currentScene].image) {
        image = "<img></img>"
    }
    if (story[story.currentScene].buttonText) {
        text = story[story.currentScene].buttonText
    }
    content.innerHTML = `
    <h1>${story[story.currentScene].title}</h1>
    <p>${story[story.currentScene].story}</p>
    ${image}
    ${getInputs()}
    <button id = "submit-button">${text}</button>
    `
    if (story[story.currentScene].image){
        document.querySelector("img").src = `./img/${story[story.currentScene].image}`
    }
    var button = document.querySelector("#submit-button");
    button.addEventListener('click', function() {
        getInputValue()
    })
}

function getInputValue() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            story.currentScene = inputs[i].getAttribute('data-destination')
            renderScene();
            return;
        }
    }
    story.currentScene = story[story.currentScene].defaultDestination
    renderScene()
}

function getInputs() {
    var input = ""
    if (!story[story.currentScene].choices) {
        return ""
    }
    for(var i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
        <div>
         <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices"></input>
         <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
       </div>
        `
    }
    return input;
}



