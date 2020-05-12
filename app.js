///// G L O B A L      V A R I A B L E S  //////


const table = document.getElementById("table");
let button = document.getElementById("button");
let buttonTwo = document.getElementById("button-two");
let rightOne = document.getElementById("right-one");
let rightTwo = document.getElementById("right-two");
let rightThree = document.getElementById("right-three");
let rightFour = document.getElementById("right-four");
let rightFive = document.getElementById("right-five");
let rightSix = document.getElementById("right-six");
let rightSeven = document.getElementById("right-seven");
let leftOne = document.getElementById("left-one");
let leftTwo = document.getElementById("left-two");
let leftThree = document.getElementById("left-three");
let leftFour = document.getElementById("left-four");
let leftFive = document.getElementById("left-five");
let leftSix = document.getElementById("left-six");
let leftSeven = document.getElementById("left-seven");
let gameStart = 0
let playerOne = ""
let playerTwo = ""
let playerThree = ""
let playerFour = ""
let playerPicked = 0

   
////   T E A M S   /////////////



function Team(name, conf, games, num, motto) {
    this.name = name;
    this.wins = 0;
    this.losses = 0;
    this.skill = 3;
    this.points = 0;
    this.conference = conf;
    this.games = games;
    this.number = num;
    this.motto = motto;
    this.history = {
        
        gains: [],
        matches: [],
        reports: [],
        perfect: 0
    };
    this.players = {
        position1: {

            name: "",
            attributes: [200, 200, 200, 200],
            homeruns: 0,
            hits: 0,
            dubsplus: [0, 0, 0],
            strikeouts: 0,
            catches: 0,
            stolenbases: 0,
            runs: 0,
            rbi: 0,
            teamname: ""
        }, 
        position2: {

            name: "",
            attributes: [200, 200, 200, 200],
            homeruns: 0,
            hits: 0,
            dubsplus: [0, 0, 0],
            strikeouts: 0,
            catches: 0,
            stolenbases: 0,
            runs: 0,
            rbi: 0,
            teamname: ""
        },         
        position3: {

            name: "",
            attributes: [200, 200, 200, 200],
            homeruns: 0,
            hits: 0,
            dubsplus: [0, 0, 0],
            strikeouts: 0,
            catches: 0,
            stolenbases: 0,
            runs: 0,
            rbi: 0,
            teamname: ""
        },        
        position4: {

            name: "",
            attributes: [200, 200, 200, 200],
            homeruns: 0,
            hits: 0,
            dubsplus: [0, 0, 0],
            strikeouts: 0,
            catches: 0,
            stolenbases: 0,
            runs: 0,
            rbi: 0,
            teamname: ""
        },        
        position5: {

            name: "",
            attributes: [200, 200, 200, 200],
            homeruns: 0,
            hits: 0,
            dubsplus: [0, 0, 0],
            strikeouts: 0,
            catches: 0,
            stolenbases: 0,
            runs: 0,
            rbi: 0,
            teamname: ""
        },        
        position6: {

            name: "",
            attributes: [200, 200, 200, 200],
            homeruns: 0,
            hits: 0,
            dubsplus: [0, 0, 0],
            strikeouts: 0,
            catches: 0,
            stolenbases: 0,
            runs: 0,
            rbi: 0,
            teamname: ""
        },        
        position7: {

            name: "",
            attributes: [200, 200, 200, 200],
            homeruns: 0,
            hits: 0,
            dubsplus: [0, 0, 0],
            strikeouts: 0,
            catches: 0,
            stolenbases: 0,
            runs: 0,
            rbi: 0,
            teamname: ""
        },
        position8: {

            name: "",
            attributes: [200, 200, 200, 200],
            homeruns: 0,
            hits: 0,
            dubsplus: [0, 0, 0],
            strikeouts: 0,
            catches: 0,
            stolenbases: 0,
            runs: 0,
            rbi: 0,
            teamname: ""
        },        
        position9: {

            name: "",
            attributes: [200, 200, 200, 200],
            homeruns: 0,
            hits: 0,
            dubsplus: [0, 0, 0],
            strikeouts: 0,
            catches: 0,
            stolenbases: 0,
            runs: 0,
            rbi: 0,
            teamname: ""
        }        
    };
    this.form = 0;
    this.fortune = 0;
}



let team1 = new Team('Lavenders', 'Eastern', [0,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1, 'Roses are red. Violets are blue. We are Lavender'); 
let team2 = new Team('Bullets', 'Eastern', [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15], 2, 'Faster than a speeding mullet... in the wind'); 
let team3 = new Team('Javas', 'Eastern', [0,1,2,4,5,6,7,8,9,10,11,12,13,14,15], 3, 'The inferior language. The superior coffee');
let team4 = new Team('Monkeys', 'Eastern', [0,1,2,3,5,6,7,8,9,10,11,12,13,14,15], 4, 'Oo eee oo ah ah'); 
let team5 = new Team('Jesters', 'Eastern', [0,1,2,3,4,6,7,8,9,10,11,12,13,14,15], 5, 'Want to hear the funniest joke of all time?'); 
let team6 = new Team('Oceans', 'Eastern', [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15], 6, 'Thalassophobia. Look it up'); 
let team7 = new Team('Silvers', 'Eastern', [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15], 7, 'What a bunch of Bronze losers, am I right?'); 
let team8 = new Team('Kiwis', 'Eastern', [0,1,2,3,4,5,6,7,9,10,11,12,13,14,15], 8, 'Like a modern day dodo bird'); 
let team9 = new Team('Magicians', 'Eastern', [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15], 9, 'Abra, Kadabra, Alakazam! Literally Pokemon'); 
let team10 = new Team('Peacocks', 'Eastern', [0,1,2,3,4,5,6,7,8,9,11,12,13,14,15], 10, 'Not a euphemism'); 
let team11 = new Team('Shields', 'Eastern', [0,1,2,3,4,5,6,7,8,9,10,12,13,14,15], 11, 'Think Captain America, then think again'); 
let team12 = new Team('Comets', 'Eastern', [0,1,2,3,4,5,6,7,8,9,10,11,13,14,15], 12, 'Barreling down on your face'); 
let team13 = new Team('Noontides', 'Eastern', [0,1,2,3,4,5,6,7,8,9,10,11,12,14,15], 13, "Doth I compare thee betwixt a summer's day and ... lo!"); 
let team14 = new Team('Roasters', 'Eastern', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,15], 14, 'Get absolutely toasted my friend'); 
let team15 = new Team('Novas', 'Eastern', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 15, 'Just imagine us in our final form');

let team16 = new Team('Plutos', 'Western', [0,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 16, 'Dwarf planets have feelings too');
let team17 = new Team('Evenings', 'Western', [0,16,18,19,20,21,22,23,24,25,26,27,28,29,30], 17, 'Only the classiest of salutations');
let team18 = new Team('Queens', 'Western', [0,16,17,19,20,21,22,23,24,25,26,27,28,29,30], 18, 'Yes Queen, yesssss!');
let team19 = new Team('Circles', 'Western', [0,16,17,18,20,21,22,23,24,25,26,27,28,29,30], 19, 'Be there or be square');
let team20 = new Team('Americans', 'Western', [0,16,17,18,19,21,22,23,24,25,26,27,28,29,30], 20, 'Amurrica! Fuck yeah!');
let team21 = new Team('Lasers', 'Western', [0,16,17,18,19,20,22,23,24,25,26,27,28,29,30], 21, 'Right in the eyes!');
let team22 = new Team('Motors', 'Western', [0,16,17,18,19,20,21,23,24,25,26,27,28,29,30], 22, 'Less Ferrari. More... a purring cat');
let team23 = new Team('Velvets', 'Western', [0,16,17,18,19,20,21,22,24,25,26,27,28,29,30], 23, 'Velvety. So, so velvety');
let team24 = new Team('Quakes', 'Western', [0,16,17,18,19,20,21,22,23,25,26,27,28,29,30], 24, "Shake em' to the bone");
let team25 = new Team('Gallopers', 'Western', [0,16,17,18,19,20,21,22,23,24,26,27,28,29,30], 25, "Because we've had just about enough of these prancers");
let team26 = new Team('Cloudbursts', 'Western', [0,16,17,18,19,20,21,22,23,24,25,27,28,29,30], 26, "Let us cleanse you of wins and beat down on you");
let team27 = new Team('Moxies', 'Western', [0,16,17,18,19,20,21,22,23,24,25,26,28,29,30], 27, 'The proprietary name of a soft drink');
let team28 = new Team('Knaves', 'Western', [0,16,17,18,19,20,21,22,23,24,25,26,27,29,30], 28, 'Hide your lunch money');
let team29 = new Team('Forests', 'Western', [0,16,17,18,19,20,21,22,23,24,25,26,27,28,30], 29, 'A tree a day keeps the carbon dioxide away');
let team30 = new Team('Zombies', 'Western', [0,16,17,18,19,20,21,22,23,24,25,26,27,28,29], 30, 'We are all a little less human than we think');



////     M O R E    V A R I A B L E S     //////


let teams = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15, team16, team17, team18, team19, team20, team21, team22, team23, team24, team25, team26, team27, team28, team29, team30]
let teamsEast = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15]
let teamsWest = [team16, team17, team18, team19, team20, team21, team22, team23, team24, team25, team26, team27, team28, team29, team30]
let sched = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let sched2 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let sched0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let cut = []
let cut2 = []
let cut3 = []
let cut4 = []
let cut5 = []
let cut6 = 0
let cut7 = 0
let zero = 0
let diff = 0
let adv = 0
let half = 0
let score = 0 
let score2 = 0
let orgOrBae = 0
let comparePlayers = []



///// H T M L     I M P L E M E N T A T I O N  ////////

function clickBaseball() {
    if (orgOrBae == 0) {
        
        orgOrBae = 2 
        playerNames();
        rowOrBox();
        let appear = document.getElementById("baseball-button")
        let change = document.getElementById("bio-button-change")
        appear.style.display = "inline"
        change.innerText = "Players"
        buttonTwo.style.borderColor = "white";
        buttonTwo.style.backgroundColor = "grey";
        table.rows[0].cells[4].innerText = "Runs"
        table.rows[0].cells[5].innerText = "Skill"
        appear = document.getElementById("baseball-table")
        appear.innerText = '[ - ]'
        document.getElementById("remove-orig-button").style.display = 'none'
        document.getElementById("start-sidebar").style.display = 'inline-block'
        
        
       
        for (let i = 0; i < teams.length; i++) {
            teams[i].skill = 0
        }

    } else {
        console.log(`Already set to ${orgOrBae}`)
    }
        
}

function clickOriginal() {

    if (orgOrBae == 0) {

        orgOrBae = 1
        rowOrBox();
        button.style.borderColor = "white";
        button.style.backgroundColor = "grey";
        document.getElementById('baseball-table').onclick = '';
        document.getElementById("remove-orig-button").style.display = 'none'
        document.getElementById("start-sidebar").style.display = 'inline-block'
        document.getElementById("playoffs-main").style.whiteSpace = "nowrap";
        document.getElementById("playoffs-main").style.overflow = "scroll";
        
    } else {
        console.log(`Already set to ${orgOrBae}`)
    }
}


function clickStart() {

    orgOrBae == 0 ? orgOrBae = 1 : console.log(`Already set to ${orgOrBae}`)

    if (gameStart == 0) {
        clickStartZero();
    } else if (gameStart == 1) {
        clickStartTwo();
    } else if (gameStart == 2) {
        clickStartOne();
    } else {
        start();
    }
}

function clickStartZero() {

    let input = document.getElementById("textbox").value.toLowerCase();
    let players = 0

    if(input == "") {
        console.log("empty")
        playerPicked = 0
        clickStartOne()
    } else if (input !== "") {
        for (let i = 0; i < input.length; i++) {
            if (input[i] == " " && i < input.length && players < 4) {
                console.log("ooga booga")
                players += 1
            } else if (players == 0) {
                playerOne += input[i]
            } else if (players == 1) {
                playerTwo += input[i]
            } else if (players == 2) {
                playerThree += input[i]
            } else if (players == 3) {
                playerFour += input[i]
            } else if (players >= 4) {
                break;
            } 
        }
        console.log("player names recorded")
        playerOne = playerOne.charAt(0).toUpperCase() + playerOne.slice(1)
        playerTwo = playerTwo.charAt(0).toUpperCase() + playerTwo.slice(1)
        playerThree = playerThree.charAt(0).toUpperCase() + playerThree.slice(1)
        playerFour = playerFour.charAt(0).toUpperCase() + playerFour.slice(1)
       
    }

    gameStart += 1
    clickStart();
}


function clickStartOne() {

    let j = 2
    let k = 0
    let l = 18
    let nameColor = ""
    let formColor = ""
    let gameColor = ""
    
    for (let i = 0; i < teams.length; i++) {

        console.log(k + "k")
        console.log(i + "i")
        console.log(j + "j")


        if (j < 17 && teams[i].conference == "Eastern") {

                table.rows[j].cells[1].innerText = teams[i].name
                nameColor = table.rows[j].cells[1]

            if (table.rows[j].cells[1].innerText == playerOne ) {
                nameColor.style.color = "#FF0000";       
                nameColor.style.fontWeight = "900";
            } else if (table.rows[j].cells[1].innerText == playerThree) {
                nameColor.style.color = "#008080";
                nameColor.style.fontWeight = "900";
            } else {
                nameColor.style.color = "#000"
                nameColor.style.fontWeight = "normal";
            }

                table.rows[j].cells[2].innerText = teams[i].wins
                table.rows[j].cells[3].innerText = teams[i].losses

            if (orgOrBae == 1) {
                table.rows[j].cells[4].innerText = teams[i].skill
                table.rows[j].cells[5].innerText = teams[i].points
            } else {
                // Baseball overall skill, average runs
                table.rows[j].cells[4].innerText = teams[i].points
                let average = 0;
                average += teams[i].players.position1.attributes[0] + teams[i].players.position1.attributes[1] + 
                           teams[i].players.position1.attributes[2] + teams[i].players.position1.attributes[3] +
                           teams[i].players.position2.attributes[0] + teams[i].players.position2.attributes[1] + 
                           teams[i].players.position2.attributes[2] + teams[i].players.position2.attributes[3] +
                           teams[i].players.position3.attributes[0] + teams[i].players.position3.attributes[1] + 
                           teams[i].players.position3.attributes[2] + teams[i].players.position3.attributes[3] +
                           teams[i].players.position4.attributes[0] + teams[i].players.position4.attributes[1] + 
                           teams[i].players.position4.attributes[2] + teams[i].players.position4.attributes[3] +
                           teams[i].players.position5.attributes[0] + teams[i].players.position5.attributes[1] + 
                           teams[i].players.position5.attributes[2] + teams[i].players.position5.attributes[3] +
                           teams[i].players.position6.attributes[0] + teams[i].players.position6.attributes[1] + 
                           teams[i].players.position6.attributes[2] + teams[i].players.position6.attributes[3] +
                           teams[i].players.position7.attributes[0] + teams[i].players.position7.attributes[1] + 
                           teams[i].players.position7.attributes[2] + teams[i].players.position7.attributes[3] +
                           teams[i].players.position8.attributes[0] + teams[i].players.position8.attributes[1] + 
                           teams[i].players.position8.attributes[2] + teams[i].players.position8.attributes[3] +
                           teams[i].players.position9.attributes[0] + teams[i].players.position9.attributes[1] + 
                           teams[i].players.position9.attributes[2] + teams[i].players.position9.attributes[3] 

                average = (average / 36) / 10
                table.rows[j].cells[5].innerText = average.toFixed(2)

            }
                table.rows[j].cells[6].innerText = teams[i].form
                table.rows[j].cells[7].innerText = teams[i].history.matches[teams[i].history.matches.length - 1]
                gameColor = table.rows[j].cells[7]
                gameColor.style.fontSize = "xx-small"
                gameColor.style.color = "#797338"
                formColor = table.rows[j].cells[6]

            if (table.rows[j].cells[6].innerText < 1 && table.rows[j].cells[6].innerText > -5) {
                formColor.style.color = "#AA0000";
            } else if (table.rows[j].cells[6].innerText <= -5 && table.rows[j].cells[6].innerText > -10) {
                formColor.style.color = "#D30000"; 
            } else if (table.rows[j].cells[6].innerText <= -10 && table.rows[j].cells[6].innerText > -15) {
                formColor.style.color = "#E70000"; 
            } else if (table.rows[j].cells[6].innerText <= -15) {
                formColor.style.color = "#FF0000"; 
            } else if (table.rows[j].cells[6].innerText >= 1 && table.rows[j].cells[6].innerText < 5) {
                formColor.style.color = "#01A900";
            } else if (table.rows[j].cells[6].innerText >= 5 && table.rows[j].cells[6].innerText < 10) {
                formColor.style.color = "#15C900"; 
            } else if (table.rows[j].cells[6].innerText >= 10 && table.rows[j].cells[6].innerText < 15) {
                formColor.style.color = "#19E900"; 
            } else if (table.rows[j].cells[6].innerText >= 15) {
                formColor.style.color = "#1BFF00"; 
            }

                j++
                console.log("east")


        } else if (l >= 18 && teams[i].conference == "Western") {

                table.rows[l].cells[1].innerText = teams[i].name
                nameColor = table.rows[l].cells[1]

            if (table.rows[l].cells[1].innerText == playerTwo ) {
                nameColor.style.color = "#00BFFF";
                nameColor.style.fontWeight = "900";
            } else if (table.rows[l].cells[1].innerText == playerFour) {
                nameColor.style.color = "#ffa500";
                nameColor.style.fontWeight = "900";
            } else {
                nameColor.style.color = "#000"
                nameColor.style.fontWeight = "normal";
            }

            if (orgOrBae == 1) {

                table.rows[l].cells[4].innerText = teams[i].skill
                table.rows[l].cells[5].innerText = teams[i].points

            } else {

        
                    // Baseball overall skill, average runs
                    table.rows[l].cells[4].innerText = teams[i].points
                    let average = 0;
                    average += teams[i].players.position1.attributes[0] + teams[i].players.position1.attributes[1] + 
                               teams[i].players.position1.attributes[2] + teams[i].players.position1.attributes[3] +
                               teams[i].players.position2.attributes[0] + teams[i].players.position2.attributes[1] + 
                               teams[i].players.position2.attributes[2] + teams[i].players.position2.attributes[3] +
                               teams[i].players.position3.attributes[0] + teams[i].players.position3.attributes[1] + 
                               teams[i].players.position3.attributes[2] + teams[i].players.position3.attributes[3] +
                               teams[i].players.position4.attributes[0] + teams[i].players.position4.attributes[1] + 
                               teams[i].players.position4.attributes[2] + teams[i].players.position4.attributes[3] +
                               teams[i].players.position5.attributes[0] + teams[i].players.position5.attributes[1] + 
                               teams[i].players.position5.attributes[2] + teams[i].players.position5.attributes[3] +
                               teams[i].players.position6.attributes[0] + teams[i].players.position6.attributes[1] + 
                               teams[i].players.position6.attributes[2] + teams[i].players.position6.attributes[3] +
                               teams[i].players.position7.attributes[0] + teams[i].players.position7.attributes[1] + 
                               teams[i].players.position7.attributes[2] + teams[i].players.position7.attributes[3] +
                               teams[i].players.position8.attributes[0] + teams[i].players.position8.attributes[1] + 
                               teams[i].players.position8.attributes[2] + teams[i].players.position8.attributes[3] +
                               teams[i].players.position9.attributes[0] + teams[i].players.position9.attributes[1] + 
                               teams[i].players.position9.attributes[2] + teams[i].players.position9.attributes[3] 

                    average = (average / 36) / 10
                    table.rows[l].cells[5].innerText = average.toFixed(2)
    
                
            }
                table.rows[l].cells[2].innerText = teams[i].wins
                table.rows[l].cells[3].innerText = teams[i].losses
                table.rows[l].cells[6].innerText = teams[i].form
                table.rows[l].cells[7].innerText = teams[i].history.matches[teams[i].history.matches.length - 1]
                gameColor = table.rows[l].cells[7]
                gameColor.style.fontSize = "xx-small"
                gameColor.style.color = "#797338"
                formColor = table.rows[l].cells[6]

                if (table.rows[l].cells[6].innerText < 1 && table.rows[l].cells[6].innerText > -5) {
                    formColor.style.color = "#AA0000";
                } else if (table.rows[l].cells[6].innerText <= -5 && table.rows[l].cells[6].innerText > -10) {
                    formColor.style.color = "#D30000"; 
                } else if (table.rows[l].cells[6].innerText <= -10 && table.rows[l].cells[6].innerText > -15) {
                    formColor.style.color = "#E70000"; 
                } else if (table.rows[l].cells[6].innerText <= -15) {
                    formColor.style.color = "#FF0000"; 
                } else if (table.rows[l].cells[6].innerText >= 1 && table.rows[l].cells[6].innerText < 5) {
                    formColor.style.color = "#01A900";
                } else if (table.rows[l].cells[6].innerText >= 5 && table.rows[l].cells[6].innerText < 10) {
                    formColor.style.color = "#15C900"; 
                } else if (table.rows[l].cells[6].innerText >= 10 && table.rows[l].cells[6].innerText < 15) {
                    formColor.style.color = "#19E900"; 
                } else if (table.rows[l].cells[6].innerText >= 15) {
                    formColor.style.color = "#1BFF00"; 
                }


                l++
                console.log("west")

        }

    }
        playerPicked == 0 ? generatePlayerComparison() : console.log("already set")
        console.log("click")
        gameStart++
        //clickStart();
}

const clickStartTwo = () => {

    findNameOne = (zed) => { return zed == playerOne }
    findNameTwo = (zed) => { return zed == playerTwo }
    findNameThree = (zed) => { return zed == playerThree }
    findNameFour = (zed) => { return zed == playerFour }

    //if (teams[j].conference == "Eastern" && teams[j].games.findIndex(findZero) !== -1

    let east = []
    let west = []

    for (let i = 0; i < teams.length; i++) {
        if(teams[i].conference == "Eastern") {
            east.push(teams[i].name)
        } else {
            west.push(teams[i].name)
        }
    }

    if (playerOne !== "" && east.findIndex(findNameOne) == -1) {
        teams[14].name = playerOne
    }

    if (playerTwo !== "" && west.findIndex(findNameTwo) == -1) {
        teams[29].name = playerTwo
    }

    if (playerThree !== "" && east.findIndex(findNameThree) == -1) {
        teams[13].name = playerThree
    }

    if (playerFour !== "" && west.findIndex(findNameFour) == -1) {
        teams[28].name = playerFour
    }


    gameStart += 1
    clickStart();


}
    
const colorizeTable = () => {

    table.rows[2].cells[0].style.backgroundColor = "#D5FFC2"
    table.rows[2].cells[1].style.backgroundColor = "#D5FFC2"
    table.rows[2].cells[2].style.backgroundColor = "#D5FFC2"
    table.rows[2].cells[3].style.backgroundColor = "#D5FFC2"
    table.rows[3].cells[0].style.backgroundColor = "#D5FFC2"
    table.rows[3].cells[1].style.backgroundColor = "#D5FFC2"
    table.rows[3].cells[2].style.backgroundColor = "#D5FFC2"
    table.rows[3].cells[3].style.backgroundColor = "#D5FFC2"
    table.rows[4].cells[0].style.backgroundColor = "#D5FFC2"
    table.rows[4].cells[1].style.backgroundColor = "#D5FFC2"
    table.rows[4].cells[2].style.backgroundColor = "#D5FFC2"
    table.rows[4].cells[3].style.backgroundColor = "#D5FFC2"
    table.rows[5].cells[0].style.backgroundColor = "#C2FCFF"
    table.rows[5].cells[1].style.backgroundColor = "#C2FCFF"
    table.rows[5].cells[2].style.backgroundColor = "#C2FCFF"
    table.rows[5].cells[3].style.backgroundColor = "#C2FCFF"
    table.rows[6].cells[0].style.backgroundColor = "#C2FCFF"
    table.rows[6].cells[1].style.backgroundColor = "#C2FCFF"
    table.rows[6].cells[2].style.backgroundColor = "#C2FCFF"
    table.rows[6].cells[3].style.backgroundColor = "#C2FCFF"
    table.rows[7].cells[0].style.backgroundColor = "#C2FCFF"
    table.rows[7].cells[1].style.backgroundColor = "#C2FCFF"
    table.rows[7].cells[2].style.backgroundColor = "#C2FCFF"
    table.rows[7].cells[3].style.backgroundColor = "#C2FCFF"
    table.rows[8].cells[0].style.backgroundColor = "#C2FCFF"
    table.rows[8].cells[1].style.backgroundColor = "#C2FCFF"
    table.rows[8].cells[2].style.backgroundColor = "#C2FCFF"
    table.rows[8].cells[3].style.backgroundColor = "#C2FCFF"
    table.rows[18].cells[0].style.backgroundColor = "#D5FFC2"
    table.rows[18].cells[1].style.backgroundColor = "#D5FFC2"
    table.rows[18].cells[2].style.backgroundColor = "#D5FFC2"
    table.rows[18].cells[3].style.backgroundColor = "#D5FFC2"
    table.rows[19].cells[0].style.backgroundColor = "#D5FFC2"
    table.rows[19].cells[1].style.backgroundColor = "#D5FFC2"
    table.rows[19].cells[2].style.backgroundColor = "#D5FFC2"
    table.rows[19].cells[3].style.backgroundColor = "#D5FFC2"
    table.rows[20].cells[0].style.backgroundColor = "#D5FFC2"
    table.rows[20].cells[1].style.backgroundColor = "#D5FFC2"
    table.rows[20].cells[2].style.backgroundColor = "#D5FFC2"
    table.rows[20].cells[3].style.backgroundColor = "#D5FFC2"
    table.rows[21].cells[0].style.backgroundColor = "#C2FCFF"
    table.rows[21].cells[1].style.backgroundColor = "#C2FCFF"
    table.rows[21].cells[2].style.backgroundColor = "#C2FCFF"
    table.rows[21].cells[3].style.backgroundColor = "#C2FCFF"
    table.rows[22].cells[0].style.backgroundColor = "#C2FCFF"
    table.rows[22].cells[1].style.backgroundColor = "#C2FCFF"
    table.rows[22].cells[2].style.backgroundColor = "#C2FCFF"
    table.rows[22].cells[3].style.backgroundColor = "#C2FCFF"
    table.rows[23].cells[0].style.backgroundColor = "#C2FCFF"
    table.rows[23].cells[1].style.backgroundColor = "#C2FCFF"
    table.rows[23].cells[2].style.backgroundColor = "#C2FCFF"
    table.rows[23].cells[3].style.backgroundColor = "#C2FCFF"
    table.rows[24].cells[0].style.backgroundColor = "#C2FCFF"
    table.rows[24].cells[1].style.backgroundColor = "#C2FCFF"
    table.rows[24].cells[2].style.backgroundColor = "#C2FCFF"
    table.rows[24].cells[3].style.backgroundColor = "#C2FCFF"
    console.log("coloring")
}

// table.rows[2].cells[1].innerText

////     S I D E B A R      M A T C H   H I S T O R Y     E T C 

function selectedTeam(rowNum) {  
   let bio = document.getElementById("team-bio-name");
   let bioMotto = document.getElementById("team-motto");
   // let bioContent = document.getElementById("team-content");
   let lowerCaseBio = ""
   table.rows[rowNum].cells[1].style.borderColor = "#C2FCFF"
   lowerCaseBio = table.rows[rowNum].cells[1].innerText;
   bio.innerText = table.rows[rowNum].cells[1].innerText.toUpperCase()
   console.log("wOW")
   let bioContent = document.getElementById("team-content-two");
   bioContent.innerHTML = ""
   bio.scrollIntoView()

   for (let n = 0; n < teams.length; n++) {
       if (teams[n].name == lowerCaseBio) {
            bioMotto.innerText = `"${teams[n].motto}"`
       }
   }

   orgOrBae == 2 ? playerStats() : matchHistory()
   // bio.innerText = table.rows[rowNum].cells[1].innerText.toUpperCase()
}

function matchHistory() {
    let bio = document.getElementById("team-bio-name");
    let bioContent = document.getElementById("team-content-two");
    let nameMatch = ""
    nameMatch = bio.innerText.toLowerCase()
    nameMatch = nameMatch.charAt(0).toUpperCase() + nameMatch.substring(1);
    bioContent.innerHTML = ""
    bioContent.style.fontSize = "initial"
    let rowNum = 0
    let displaySpecific = document.getElementById("specific-match")
    displaySpecific.style.display = "none"
    document.getElementById("animate-button").style.display = 'none'
    let finalPrint = ''
    let teamMatchHistoryLength = 0

    let databased;

    if (team1.history.matches.length == 0) return;

    for (let i = 0; i < teams.length; i++) {

        console.log("running")

        if (teams[i].name == nameMatch) {
            let clean = JSON.stringify(teams[i].history.matches)
            let evenNum = 1
            let evenNumTwo = 0
            let breadth = 0
            console.log("caught name")
            //yomama
            //checkDatabase(team, match, print, array, index)
            databased = checkDatabase(nameMatch, 'matches', 0, 0, teams[i].history.matches.length)
            teamMatchHistoryLength = teams[i].history.matches.length

            if (databased[0] == 'PRINT') {
                finalPrint = databased[1]
                teamMatchHistoryLength > 30 ? bioContent.style.fontSize = "small" : undefined
                break;
            }

            for (let j = 0; j < clean.length; j++) {

                if (clean[j] == '"' && evenNum == 1) {
                    rowNum++
                    evenNum++
                    breadth = 0
                    if (rowNum < 10) {
                        finalPrint += "<br>" + '<font color="#ACACAC">' + rowNum + '</font>' + "&nbsp &nbsp &nbsp &nbsp &nbsp"
                    } else {
                        finalPrint += "<br>" + '<font color="#ACACAC">' + rowNum + '</font>' + "&nbsp &nbsp &nbsp &nbsp"
                    }
                } else if (clean[j] == '"' && evenNum == 2) {
                    evenNum--
                } else if (clean[j] == "," && evenNumTwo == 0 && orgOrBae !==2) {
                    evenNumTwo++
                    breadth = 0
                    finalPrint += clean[j]
                } else if (clean[j] == "," && evenNumTwo == 1 && orgOrBae !==2) {
                    breadth = 0
                    evenNumTwo--
                } else if (clean[j] == "," && orgOrBae == 2) {
                    breadth = 0
                } else if (clean[j] == "L" && clean[j + 1] == " ") {
                    finalPrint += '<font color="red">' + clean[j] + '</font>'
                } else if (clean[j] == "W") {
                    finalPrint += '<font color="green">' + clean[j] + '</font>'
                } else if (clean[j] !== "[" && clean[j] !== "]"){
                    breadth++
                    if (breadth >= 5 & isNaN(clean[j])) {
                        finalPrint += '<font color="#473852">' + clean[j] + '</font>'   
                    } else {
                        finalPrint += clean[j]
                    }
                }
                       //bioContent.innerHTML = JSON.stringify(teams[i].history.matches) + "<br>" + "Mega cool" + JSON.stringify(teams[i].history.gains)
            }
            break;
        }
    }

    if (databased[0] !== 'PRINT') {
        checkDatabase(nameMatch, 'matches', finalPrint, 0, teamMatchHistoryLength)
    }

    bioContent.innerHTML += finalPrint

    if (rowNum > 30) {
        bioContent.style.fontSize = "small"
    } 
   // bioContent.style.fontSize = "xx-small"

} 


function gainsLosses() {

    if (orgOrBae == 2) {

        playerStats();

    } else {

    let bio = document.getElementById("team-bio-name");
    let bioContent = document.getElementById("team-content-two");
    let nameMatch = ""
    nameMatch = bio.innerText.toLowerCase()
    nameMatch = nameMatch.charAt(0).toUpperCase() + nameMatch.substring(1);
    bioContent.innerHTML = ""
    bioContent.style.fontSize = "initial"
    let rowNum = 0

    for (let i = 0; i < teams.length; i++) {

        if (teams[i].name == nameMatch) {
            let clean = JSON.stringify(teams[i].history.gains)
            let breadth = 0
            rowNum = 1
            bioContent.innerHTML += '<p>Perfect Rolls: ' + teams[i].history.perfect + '&nbsp &nbsp &nbsp &nbsp &nbsp' + 'Fortune: ' + teams[i].fortune + '</p>'
            bioContent.innerHTML += '<font color="#ACACAC">' + rowNum + '</font>' + "&nbsp &nbsp &nbsp &nbsp &nbsp"
          //  let evenNumTwo = 0
          //  let breadth = 0

            for (let j = 0; j < clean.length; j++) {

                if (clean[j] == ',') {
                    rowNum++
                    breadth = 0
                    if (rowNum < 10) {
                        bioContent.innerHTML += "</font>" + "<br>" + '<font color="#ACACAC">' + rowNum + '</font>' + "&nbsp &nbsp &nbsp &nbsp &nbsp"
                    } else {
                        bioContent.innerHTML += "</font>" + "<br>" + '<font color="#ACACAC">' + rowNum + '</font>' + "&nbsp &nbsp &nbsp &nbsp"
                    }
                       
                } else if (clean[j] == "-") {
                    bioContent.innerHTML += '<font color="red">' + clean[j]
                    breadth = 1
                } else if (clean[j] !== "[" && clean[j] !== "]" && breadth >= 1) {
                    bioContent.innerHTML += '<font color="red">' + clean[j]
                   
                } else if (clean[j] !== "[" && clean[j] !== "]" && clean[j] !== "-" && breadth == 0) {
                    bioContent.innerHTML += '<font color="green">' + " " + clean[j]
                    breadth = -1
                } else if (clean[j] !== "[" && clean[j] !== "]" && breadth < 0) {
                    bioContent.innerHTML += '<font color="green">' + clean[j]
                   
                }
                    
                    //bioContent.innerHTML = JSON.stringify(teams[i].history.matches) + "<br>" + "Mega cool" + JSON.stringify(teams[i].history.gains)
            }

            break;
        }
    }
    if (rowNum > 21) {
        bioContent.style.fontSize = "small"
    } 
   // bioContent.style.fontSize = "xx-small"


    }
} 


const playerStats = () => {

    let bio = document.getElementById("team-bio-name");
    let bioContent = document.getElementById("team-content-two");
    let nameMatch = ""
    nameMatch = bio.innerText.toLowerCase()
    nameMatch = nameMatch.charAt(0).toUpperCase() + nameMatch.substring(1);
    bioContent.innerHTML = ""
    bioContent.style.fontSize = "initial"
    let displaySpecific = document.getElementById("specific-match")
    displaySpecific.style.display = "none"
    document.getElementById("animate-button").style.display = 'none'


    for (let i = 0; i < teams.length; i++) {

        if (teams[i].name == nameMatch) {

            bioContent.innerHTML += "<br><table><th>Name</th><th>R</th><th>H</th><th>HR</th><th>RBI</th><th>SB</th><th>F/SO</th>" +
            "<tr><td id='show-att' onclick='showAtt(2)'>" + teams[i].players.position2.name + " (C)</td><td>" + teams[i].players.position2.runs + "</td><td>" +
            teams[i].players.position2.hits + "</td><td>" + teams[i].players.position2.homeruns + "</td><td>" + teams[i].players.position2.rbi + "</td><td>" + teams[i].players.position2.stolenbases + 
            "</td><td>" + teams[i].players.position2.attributes[2].toFixed() + "</td></tr><tr><td id='show-att' onclick='showAtt(3)'>" + teams[i].players.position3.name + "</td><td>" +
            teams[i].players.position3.runs + "</td><td>" + teams[i].players.position3.hits + "</td><td>" + teams[i].players.position3.homeruns + "</td><td>" + teams[i].players.position3.rbi + "</td><td>"
            + teams[i].players.position3.stolenbases + "</td><td>" + teams[i].players.position3.attributes[2].toFixed() + "</td><td></tr><tr><td id='show-att' onclick='showAtt(4)'>" +

            teams[i].players.position4.name + "</td><td>" + teams[i].players.position4.runs + "</td><td>" +
            teams[i].players.position4.hits + "</td><td>" + teams[i].players.position4.homeruns + "</td><td>" + teams[i].players.position4.rbi + "</td><td>" + teams[i].players.position4.stolenbases + 
            "</td><td>" + teams[i].players.position4.attributes[2].toFixed() + "</td></tr><tr><td id='show-att' onclick='showAtt(5)'>" + teams[i].players.position5.name + "</td><td>" +
            teams[i].players.position5.runs + "</td><td>" + teams[i].players.position5.hits + "</td><td>" + teams[i].players.position5.homeruns + "</td><td>" + teams[i].players.position5.rbi + "</td><td>"
            + teams[i].players.position5.stolenbases + "</td><td>" + teams[i].players.position5.attributes[2].toFixed() + "</td><td></tr><tr><td id='show-att' onclick='showAtt(6)'>" +

            teams[i].players.position6.name + "</td><td>" + teams[i].players.position6.runs + "</td><td>" +
            teams[i].players.position6.hits + "</td><td>" + teams[i].players.position6.homeruns + "</td><td>" + teams[i].players.position6.rbi + "</td><td>" + teams[i].players.position6.stolenbases + 
            "</td><td>" + teams[i].players.position6.attributes[2].toFixed() + "</td></tr><tr><td id='show-att' onclick='showAtt(7)'>" + teams[i].players.position7.name + "</td><td>" +
            teams[i].players.position7.runs + "</td><td>" + teams[i].players.position7.hits + "</td><td>" + teams[i].players.position7.homeruns + "</td><td>" + teams[i].players.position7.rbi + "</td><td>"
            + teams[i].players.position7.stolenbases + "</td><td>" + teams[i].players.position7.attributes[2].toFixed() + "</td><td></tr><tr><td id='show-att' onclick='showAtt(8)'>" +

            teams[i].players.position8.name + "</td><td>" + teams[i].players.position8.runs + "</td><td>" +
            teams[i].players.position8.hits + "</td><td>" + teams[i].players.position8.homeruns + "</td><td>" + teams[i].players.position8.rbi + "</td><td>" + teams[i].players.position8.stolenbases + 
            "</td><td>" + teams[i].players.position8.attributes[2].toFixed() + "</td></tr><tr><td id='show-att' onclick='showAtt(9)'>" + teams[i].players.position9.name + "</td><td>" +
            teams[i].players.position9.runs + "</td><td>" + teams[i].players.position9.hits + "</td><td>" + teams[i].players.position9.homeruns + "</td><td>" + teams[i].players.position9.rbi + "</td><td>"
            + teams[i].players.position9.stolenbases + "</td><td>" + teams[i].players.position9.attributes[2].toFixed() + "</td><td></tr><tr><td id='show-att' onclick='showAtt(1)'>" +

            teams[i].players.position1.name + " (P)</td><td></td><td></td><td></td><td></td><td></td><td>" + teams[i].players.position1.strikeouts +
            "</td></tr></table>"
            
        }
    }
}

function showAtt(player) {
    let thisName = document.getElementById("team-bio-name").innerText.toLowerCase();
    thisName = thisName.charAt(0).toUpperCase() + thisName.substring(1)
    let accolades = ''
    console.log(thisName)
    for (let el in teams) {
        if (teams[el].name == thisName) {
            thisTeam = teams[el]
            console.log(thisTeam.name)
            break;
        }
    }

    if (comparePlayers.length > 1 && thisTeam.players.position1.strikeouts > 0) {
        accolades = findTopFive(thisTeam.players['position' + player].name, player)
    }

    if (player > 1) {
        alert(`${thisTeam.players['position' + player].name} - (${thisTeam.players['position' + player].attributes[0].toFixed()}, ${thisTeam.players['position' + player].attributes[1].toFixed()}, ${thisTeam.players['position' + player].attributes[2].toFixed()}, ${thisTeam.players['position' + player].attributes[3].toFixed()}) \n${accolades !== '' ? accolades : ''}\nAttributes : Hitting, Power, Fielding, Running`)
    } else {
        alert(`${thisTeam.players['position' + player].name} - (${thisTeam.players['position' + player].attributes[0].toFixed()}) \n${accolades !== '' ? accolades : ''}\nAttribute : Pitching`)
    }
    
    //alert('George Malarkey - (200, 300, 500, 600)\n\nAttributes : Power, Hitting, Running, Fielding')
}

function playerAwards() {
    let allStar = false;
    let mvp = false;
    let cyYoung = false;
    let goldenGlove = false;
    let finalsMvp = false;
    return function(player) {

        let award = ''
        let actualArr = []
        
        if (team1.wins + team1.losses >= 30) {
            if (allStar == false) {
        
                for (let el in comparePlayers) {
                    if (comparePlayers[el].strikeouts === 0) {
                        actualArr.push(comparePlayers[el])
                    }
                }
                //console.log('actualArr:')
                actualArr.sort(function(a, b) {
                    //console.log(b.attributes[0] + b.attributes[1] + b.attributes[2] + b.attributes[3])
                    //console.log(a.attributes[0] + a.attributes[1] + a.attributes[2] + b.attributes[3])
                    return (b.attributes[0] + b.attributes[1] + b.attributes[2] + b.attributes[3]) - (a.attributes[0] + a.attributes[1] + a.attributes[2] + b.attributes[3])
               
                })
                //console.log(actualArr)
                allStar = actualArr[0].name;
            }

            if (cyYoung == false) {
        
                for (let el in comparePlayers) {
                    if (comparePlayers[el].strikeouts >= 1) {
                        actualArr.push(comparePlayers[el])
                    }
                }
            
                actualArr.sort(function(a, b) {
            
                    return b.strikeouts - a.strikeouts
               
                })
                
                cyYoung = actualArr[0].name;
            }

            if (mvp == false) {

                comparePlayers.sort(function(a, b) {
    
                    return (b.rbi + b.runs) - (a.rbi + a.runs)
               
                })
        
                mvp = comparePlayers[0].name;
            }

            if (goldenGlove == false) {

                comparePlayers.sort(function(a, b) {
    
                    return b.attributes[2] - a.attributes[2]
               
                })
            
                goldenGlove = comparePlayers[0].name;

            }
        }

        if (playoffSteps >= 38 && finalsMvp == false) {

            let finalsArr = []

            for (let el in comparePlayers) {
                if (comparePlayers[el].teamname === eaTeam1.name || comparePlayers[el].teamname === weTeam1.name) {
                    finalsArr.push(comparePlayers[el])
                }
            }

            finalsArr.sort(function(a, b) {
    
                return (b.rbi + b.runs) - (a.rbi + a.runs)
           
            })
    
            finalsMvp = finalsArr[0].name;
        }
        
        if (allStar == player) {
            award !== '' ? award += ', ' : undefined
            award += '✦ All-Star'
        }
        if (mvp == player) {
            award !== '' ? award += ', ' : undefined
            award += '✦ MVP'
        }
        if (goldenGlove == player) {
            award !== '' ? award += ', ' : undefined
            award += '✦ Golden Glove'
        }
        if (cyYoung == player) {
            award !== '' ? award += ', ' : undefined
            award += '✦ Cy Young'
        }
        if (finalsMvp == player) {
            award !== '' ? award += ', ' : undefined
            award += '✦ Finals MVP'
        }
        console.log('accolades:')
        console.log(allStar)
        console.log(mvp)
        console.log(goldenGlove)
        console.log(cyYoung)

        return award
    }
}

let checkForAwards = playerAwards()

function findTopFive(player, num) {

    let notables = ''

    if (team1.history.reports.length >= 30) {

        notables = checkForAwards(player)

    }

    notables == undefined ? notables = '' : undefined

    if (num == 1) {
        let actualArr = []

        for (let el in comparePlayers) {
            if (comparePlayers[el].strikeouts >= 1) {
                actualArr.push(comparePlayers[el])
            }
        }
    
        actualArr.sort(function(a, b) {
    
            return b.attributes[0] - a.attributes[0]
       
        })
    
        if (actualArr[0].name == player) {
            notables !== '' ? notables += ', ' : undefined
            notables += '★ Top 1 Pitcher'
        } else if (actualArr[1].name == player || actualArr[2].name == player || actualArr[3].name == player || actualArr[4].name == player) {
            notables !== '' ? notables += ', ' : undefined
            notables += '☆ Top 5 Pitcher'
        }

    } else {
        let actualArr = []

        for (let el in comparePlayers) {  //// Because the pitching and hitting attribute are the same index,
            if (comparePlayers[el].strikeouts === 0) { /// this is first pushing only hitters into a separate
                actualArr.push(comparePlayers[el]) /// array. This new array is what will be compared
            }
        }
    
        actualArr.sort(function(a, b) {
    
            return b.attributes[0] - a.attributes[0]
       
        })
    
        if (actualArr[0].name == player) {
            notables !== '' ? notables += ', ' : undefined
            notables += '★ Top 1 Hitter'
        } else if (actualArr[1].name == player || actualArr[2].name == player || actualArr[3].name == player || actualArr[4].name == player) {
            notables !== '' ? notables += ', ' : undefined
            notables += '☆ Top 5 Hitter'
        }
    

    }

    comparePlayers.sort(function(a, b) {
    
        return b.attributes[1] - a.attributes[1]
        
    })

    if (comparePlayers[0].name == player) {
        notables !== '' ? notables += ', ' : undefined
        notables += '★ Top 1 Slugger'
    } else if (comparePlayers[1].name == player || comparePlayers[2].name == player || comparePlayers[3].name == player || comparePlayers[4].name == player) {
        notables !== '' ? notables += ', ' : undefined
        notables += '☆ Top 5 Slugger'
    }

    comparePlayers.sort(function(a, b) {

        return b.attributes[2] - a.attributes[2]
        
    })

    if (comparePlayers[0].name == player) {
        notables !== '' ? notables += ', ' : undefined
        notables += '★ Top 1 Fielder'
    } else if (comparePlayers[1].name == player || comparePlayers[2].name == player || comparePlayers[3].name == player || comparePlayers[4].name == player) {
        notables !== '' ? notables += ', ' : undefined
        notables += '☆ Top 5 Fielder'
    }

    comparePlayers.sort(function(a, b) {

        return b.attributes[3] - a.attributes[3]
        
    })

    if (comparePlayers[0].name == player) {
        notables !== '' ? notables += ', ' : undefined
        notables += '★ Top 1 Base Runner'
    } else if (comparePlayers[1].name == player || comparePlayers[2].name == player || comparePlayers[3].name == player || comparePlayers[4].name == player) {
        notables !== '' ? notables += ', ' : undefined
        notables += '☆ Top 5 Base Runner'
    }

    return notables

}


const matchReport = () => {
    
    let bio = document.getElementById("team-bio-name");
    let bioContent = document.getElementById("team-content-two");
    let nameMatch = ""
    nameMatch = bio.innerText.toLowerCase()
    nameMatch = nameMatch.charAt(0).toUpperCase() + nameMatch.substring(1);
    document.getElementById("animate-button").style.display = 'inline-block'
    bioContent.innerHTML = ""
    let rowNum = 3
    let color = 0
    let checker = 0
    let characterCount = 0
    let finalPrint = ""
    let displaySpecific = document.getElementById("specific-match")
    let clean = ""
    currentMatchReport = []
    //checkDatabase(team, match, print, array, index)
    
    let trueValue = 0
    let databased;
    //let databased = checkDatabase(nameMatch, displaySpecific.value)
    if (team1.history.matches.length == 0) return;
    console.log('after calling checkDatabase:')

    for (let i = 0; i < teams.length; i++) {

        if (teams[i].name == nameMatch) {
            if (displaySpecific.style.display == "" || displaySpecific.style.display == "none") {
                trueValue = teams[i].history.reports.length
                clean = teams[i].history.reports[teams[i].history.reports.length - 1]
                displaySpecific.value = teams[i].history.reports.length
                displaySpecific.style.display = "inline" // team1.history.matches[0].split(" ")[2]
                currentMatchReport.push(teams[i].name)
                currentMatchReport.push(teams[i].history.matches[teams[i].history.reports.length - 1].split(" ")[2])
                //console.log("wut")
            } else if (displaySpecific.value >= 1 && displaySpecific.value <= teams[i].history.reports.length) {
                trueValue = displaySpecific.value
                clean = teams[i].history.reports[displaySpecific.value - 1]
                currentMatchReport.push(teams[i].name)
                currentMatchReport.push(teams[i].history.matches[displaySpecific.value - 1].split(" ")[2])
                //console.log("wutwut")
            } else {
                trueValue = teams[i].history.reports.length
                clean = teams[i].history.reports[teams[i].history.reports.length - 1]
                currentMatchReport.push(teams[i].name)
                currentMatchReport.push(teams[i].history.matches[teams[i].history.reports.length - 1].split(" ")[2])
            }

            databased = checkDatabase(nameMatch, trueValue)
            if (databased.length !== 0) {
                /// Database if statement. Delete if troublesome
                console.log('pulling from database...')
                bioContent.innerHTML += databased[0]
                currentMatchReport = databased[1]
                bioContent.style.padding = "15px"
                clean !== undefined ? characterCount = clean.length : console.log('undefined')
                characterCount < 2000 ? bioContent.style.fontSize = "medium" : bioContent.style.fontSize = "small"
                break; /// This means that the array that is returned from checkDatabase is already full
            }

            let cleanArr = ""
            clean !== undefined ? characterCount = clean.length : console.log('undefined')
            clean !== undefined ? cleanArr = clean.split(" ") : console.log('undefined')
            currentMatchReport.push(clean.slice(0).split(" "))
            clean = teamPlayers(cleanArr, teams[i]);
            clean = clean.toString()
            //console.log(clean)

            for (let j = 0; j < clean.length; j++) {
                if (clean[j] == "I" && clean[j+1] == "n" && clean[j+2] == "n" && rowNum == 3) {
                    rowNum = 1
                    finalPrint += '</font><font color="#CFA00F">' + clean[j]
                    //console.log("2")
                } else if (clean[j] == "I" && clean[j+1] == "n" && clean[j+2] == "n") {
                    rowNum = 1
                    color = 0
                    finalPrint += '</font><br><font color="#CFA00F">' + clean[j]
                    //console.log("3")
                } else if (isNaN(clean[j]) && rowNum == 1 && clean[j] !== ",") {
                    finalPrint += '<font color="#CFA00F">' + clean[j]
                    //console.log("4")
                } else if (isNaN(clean[j]) == false && clean[j+1] !== "n" && clean[j+1] !== "r" && clean[j] !== "," && rowNum !== 3) {
                    rowNum = 2
                    finalPrint += '<font color="#9A7709">' + clean[j]
                    //console.log("5")
                } else if (isNaN(clean[j]) && rowNum == 2) {
                    rowNum = 0
                    finalPrint += '</font><font color="#4D3611">' + clean[j]
                    //console.log("6")



                } else if (clean[j] == "," && rowNum == 1) {
                    finalPrint += " " + '</font>'
                    //console.log("7")
                  //  color == 1 && clean[j+2] !== "t" ? color = 2 : color = 3
                  //  color > 1 && clean[j+1] !== "o" ? color = 0 : color = 3
                } else if (clean[j] == "," && clean[j+1] !== "*") {
                    finalPrint += " "
                    checker >= 1 ? checker++ : checker = 0
                   // color == 1 && clean[j+1] == "s" || clean[j+1] == "d" || clean[j+1] == "t" ? color = 0 : color = 1
                   // color == 1 && clean[j+2] !== "t" ? color = 2 : color = 3
                   // color > 1 && clean[j+1] !== "o" ? color = 0 : color = 3
                    //console.log("8")
                } else if (clean[j] == "*") {
                    color = 1
                    checker++
                } else if (color == 1 && clean[j] !== ",") {
                    finalPrint += '<font color="green">' + clean[j] + '</font>'
                    //console.log("9")
                } else if (color == 2) {
                    finalPrint += '<font color="#073B6A">' + clean[j] + '</font>'
                    //console.log("10")
                    clean[j] == "!" || clean[j] == "." ? color = 0 : color = 2
                } else if (color == 3) {
                    finalPrint += '<font color="#6F230B">' + clean[j] + '</font>'  // <font color="#6F230B">
                    //console.log("11")
                    clean[j] == "." ? color = 0 : color = 3
                } else if (color == 0 && clean[j] !== ",") {
                    finalPrint += '<font color="#4D3611">' + clean[j] + '</font>'
                    //console.log("12")
                }

                if (color == 1 && checker > 2 && clean[j] == ",") {
                    //console.log("BUT WHY")
                    if (clean[j+1] == "d" || clean[j+1] == "t" || clean[j+1] == "h") {
                        color = 2
                     } else if (clean[j+1] == "s" && clean[j+2] == "i" || clean[j+1] == "s" && clean[j+3] == "e") {
                        color = 2
                     } else if (clean[j+1] == "s" && clean[j+3] == "r") {
                         color = 3
                     } else {
                         color = 0
                     }  
                     checker = 0
                }
                
            }


            break;


        }

    }

    if (databased.length !== 0) return

    //checkDatabase(team, match, print, array, index)
    console.log('attempting to fill database:')
    checkDatabase(nameMatch, displaySpecific.value, finalPrint, currentMatchReport)

    bioContent.innerHTML += finalPrint
    bioContent.style.padding = "15px"
    characterCount < 2000 ? bioContent.style.fontSize = "medium" : bioContent.style.fontSize = "small"
    
}

const teamPlayers = (clean, team) => {

    let lnTwo = team.players.position2.name.split(" ")
    let lnThree = team.players.position3.name.split(" ")
    let lnFour = team.players.position4.name.split(" ")
    let lnFive = team.players.position5.name.split(" ")
    let lnSix = team.players.position6.name.split(" ")
    let lnSeven = team.players.position7.name.split(" ")
    let lnEight = team.players.position8.name.split(" ")
    let lnNine = team.players.position9.name.split(" ")
    console.log("here")

    for (let i = 0; i < clean.length; i++) {
        if (clean[i] == lnTwo[1] || clean[i] == lnThree[1] ||
            clean[i] == lnFour[1] || clean[i] == lnFive[1] || 
            clean[i] == lnSix[1] || clean[i] == lnSeven[1] || 
            clean[i] == lnEight[1] || clean[i] == lnNine[1]) {
                clean.splice(i, 0, "*")
                i++
                console.log("there")
        }
    }
    console.log("everywehre")
    cleaner = clean
    return clean
}

let cleaner = 0

////        P L A Y O F F S      A N D      B E Y O N D 

let eaTeam1 = null
let eaTeam2 = null
let eaTeam3 = null
let eaTeam4 = null
let eaTeam5 = null
let eaTeam6 = null
let eaTeam7 = null

let weTeam1 = null
let weTeam2 = null
let weTeam3 = null
let weTeam4 = null
let weTeam5 = null
let weTeam6 = null
let weTeam7 = null

const brackets = () => {
    cut = 0
    cut2 = 0
    for (let i = 0; i < teams.length; i++) {

        if (cut == 0 && teams[i].conference == "Eastern") {
            cut++
            eaTeam1 = teams[i] 
        } else if (cut == 1 && teams[i].conference == "Eastern") {
            cut++
            eaTeam2 = teams[i] 
        } else if (cut == 2 && teams[i].conference == "Eastern") {
            cut++
            eaTeam3 = teams[i] 
        } else if (cut2 == 0 && teams[i].conference == "Western") {
            cut2++
            weTeam1 = teams[i] 
        } else if (cut2 == 1 && teams[i].conference == "Western") {
            cut2++
            weTeam2 = teams[i] 
        } else if (cut2 == 2 && teams[i].conference == "Western") {
            cut2++
            weTeam3 = teams[i] 
        } else if (cut == 3 && teams[i].conference == "Eastern") {
            cut++
            leftThree.innerText = teams[i].name
            eaTeam4 = teams[i]
        } else if (cut == 4 && teams[i].conference == "Eastern") {
            cut++
            leftOne.innerText = teams[i].name
            eaTeam5 = teams[i]
        } else if (cut == 5 && teams[i].conference == "Eastern") {
            cut++
            leftTwo.innerText = teams[i].name
            eaTeam6 = teams[i]
        } else if (cut == 6 && teams[i].conference == "Eastern") {
            cut++
            leftFour.innerText = teams[i].name
            eaTeam7 = teams[i]
        } else if (cut2 == 3 && teams[i].conference == "Western") {
            cut2++
            rightTwo.innerText = teams[i].name
            weTeam4 = teams[i]

        } else if (cut2 == 4 && teams[i].conference == "Western") {
            cut2++
            rightFour.innerText = teams[i].name
            weTeam5 = teams[i]
        } else if (cut2 == 5 && teams[i].conference == "Western") {
            cut2++
            rightThree.innerText = teams[i].name
            weTeam6 = teams[i]
        } else if (cut2 == 6 && teams[i].conference == "Western") {
            cut2++
            rightOne.innerText = teams[i].name
            weTeam7 = teams[i]
        }
        if (cut == 8 && cut == 8) {
            break;
        }
    }

    if (leftOne.innerText == playerOne) {
        leftOne.style.color = "#FF0000"                // Player Two "#00BFFF";
        leftOne.style.fontWeight = "900";
    } else if (leftOne.innerText == playerThree) {
                                                       // Player Four "#ffa500";
        leftOne.style.color = "#008080"                // Player Two "#00BFFF";
        leftOne.style.fontWeight = "900";
    }

    if (leftTwo.innerText == playerOne) {
        leftTwo.style.color = "#FF0000"                
        leftTwo.style.fontWeight = "900";
    } else if (leftTwo.innerText == playerThree) {
        leftTwo.style.color = "#008080"               
        leftTwo.style.fontWeight = "900";
    }

    if (leftThree.innerText == playerOne) {
        leftThree.style.color = "#FF0000"                
        leftThree.style.fontWeight = "900";
    } else if (leftThree.innerText == playerThree) {
        leftThree.style.color = "#008080"               
        leftThree.style.fontWeight = "900";
    }

    if (leftFour.innerText == playerOne) {
        leftFour.style.color = "#FF0000"                
        leftFour.style.fontWeight = "900";
    } else if (leftFour.innerText == playerThree) {
        leftFour.style.color = "#008080"               
        leftFour.style.fontWeight = "900";
    }

    if (rightOne.innerText == playerTwo) {
        rightOne.style.color = "#00BFFF"                
        rightOne.style.fontWeight = "900";
    } else if (rightOne.innerText == playerFour) {
        rightOne.style.color = "#ffa500"               
        rightOne.style.fontWeight = "900";
    }

    if (rightTwo.innerText == playerTwo) {
        rightTwo.style.color = "#00BFFF"                
        rightTwo.style.fontWeight = "900";
    } else if (rightTwo.innerText == playerFour) {
        rightTwo.style.color = "#ffa500"               
        rightTwo.style.fontWeight = "900";
    }

    if (rightThree.innerText == playerTwo) {
        rightThree.style.color = "#00BFFF"                
        rightThree.style.fontWeight = "900";
    } else if (rightThree.innerText == playerFour) {
        rightThree.style.color = "#ffa500"               
        rightThree.style.fontWeight = "900";
    }

    if (rightFour.innerText == playerTwo) {
        rightFour.style.color = "#00BFFF"                
        rightFour.style.fontWeight = "900";
    } else if (rightFour.innerText == playerFour) {
        rightFour.style.color = "#ffa500"               
        rightFour.style.fontWeight = "900";
    }
}

let playoffSteps = 0
let rowOne = null
let rowTwo = null
let rowThree = null
let rowFour = null
let colorCell = null

const playoffs = () => {

    orgOrBae == 1 ? playoffsOrig() : playoffsBase()

}

const playoffsBase = () => {

    if (expandContract == 1) {
        if (document.getElementById("cover-right").innerHTML !== "") {
            details(1)
        } else if (document.getElementById("cover-left").innerHTML !== "") {
            details(2)
        }
    }

    if (playoffSteps == 0) {

        rowOne = document.getElementById("first-playoff-box")
        rowTwo = document.getElementById("second-playoff-box")
        rowThree = document.getElementById("third-playoff-box")
        rowFour = document.getElementById("fourth-playoff-box")

        eaTeam1.wins = 0
        eaTeam2.wins = 0
        eaTeam3.wins = 0
        eaTeam4.wins = 0
        eaTeam5.wins = 0
        eaTeam6.wins = 0
        eaTeam7.wins = 0
        weTeam1.wins = 0
        weTeam2.wins = 0
        weTeam3.wins = 0
        weTeam4.wins = 0
        weTeam5.wins = 0
        weTeam6.wins = 0
        weTeam7.wins = 0

        eaTeam1.fortune = 30
        eaTeam2.fortune = 30
        eaTeam3.fortune = 30
        eaTeam4.fortune = 30
        eaTeam5.fortune = 30
        eaTeam6.fortune = 30
        eaTeam7.fortune = 30
        weTeam1.fortune = 30
        weTeam2.fortune = 30
        weTeam3.fortune = 30
        weTeam4.fortune = 30
        weTeam5.fortune = 30
        weTeam6.fortune = 30
        weTeam7.fortune = 30

        rowOne.innerHTML += `<div id="best-one">BEST OF 5</div><div id="games-one"></div><div id="score-one">${eaTeam5.name}<br>${eaTeam6.name}</div><div id="score-one-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(1)" id="box-button-one" class="box-button">No Data</button>`
        rowTwo.innerHTML += `<div id="best-two">BEST OF 5</div><div id="games-two"></div><div id="score-one">${weTeam7.name}<br>${weTeam4.name}</div><div id="score-two-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(2)" id="box-button-two" class="box-button">No Data</button>`
        rowThree.innerHTML += `<div id="best-three">BEST OF 5</div><div id="games-three"></div><div id="score-one">${eaTeam4.name}<br>${eaTeam7.name}</div><div id="score-three-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(3)" id="box-button-three" class="box-button">No Data</button>`
        rowFour.innerHTML += `<div id="best-four">BEST OF 5</div><div id="games-four"></div><div id="score-one">${weTeam6.name}<br>${weTeam5.name}</div><div id="score-four-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(4)" id="box-button-four" class="box-button">No Data</button>`
        updateBracket();

        helpColorSystem();

        boxOneMatchUp = [eaTeam5, eaTeam6]
        boxTwoMatchUp = [weTeam7, weTeam4]
        boxThreeMatchUp = [eaTeam4, eaTeam7]
        boxFourMatchUp = [weTeam6, weTeam5]

        playoffSteps++;

        setBoxScores(1, eaTeam5, eaTeam6);
        setBoxScores(2, weTeam7, weTeam4);
        setBoxScores(3, eaTeam4, eaTeam7);
        setBoxScores(4, weTeam6, weTeam5);

    } else if (playoffSteps == 1) {

        let boxX = document.getElementById("box-button-one")
        boxX.innerText = "Details"
        boxX = document.getElementById("box-button-two")
        boxX.innerText = "Details"
        boxX = document.getElementById("box-button-three")
        boxX.innerText = "Details"
        boxX = document.getElementById("box-button-four")
        boxX.innerText = "Details"

        playoffSteps++;

        baseball(eaTeam5, eaTeam6);
        baseball(eaTeam4, eaTeam7);
        baseball(weTeam5, weTeam6);
        baseball(weTeam4, weTeam7);         /// 1 = game, 2 = matchups/boxes, 5 = best of five or seven

        bestOfBase(1, 4, 5, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        updateBracket();

        calculateBoxScore(1, eaTeam5, eaTeam6);
        calculateBoxScore(2, weTeam7, weTeam4);
        calculateBoxScore(3, eaTeam4, eaTeam7);
        calculateBoxScore(4, weTeam6, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam6);
        setBoxScores(2, weTeam7, weTeam4);
        setBoxScores(3, eaTeam4, eaTeam7);
        setBoxScores(4, weTeam6, weTeam5);

    } else if (playoffSteps == 2) {

        playoffSteps++;

        baseball(eaTeam5, eaTeam6);
        baseball(eaTeam4, eaTeam7);
        baseball(weTeam5, weTeam6);
        baseball(weTeam4, weTeam7);

        bestOfBase(2, 4, 5, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        updateBracket();

        calculateBoxScore(1, eaTeam5, eaTeam6);
        calculateBoxScore(2, weTeam7, weTeam4);
        calculateBoxScore(3, eaTeam4, eaTeam7);
        calculateBoxScore(4, weTeam6, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam6);
        setBoxScores(2, weTeam7, weTeam4);
        setBoxScores(3, eaTeam4, eaTeam7);
        setBoxScores(4, weTeam6, weTeam5);

    } else if (playoffSteps == 3) {

        playoffSteps++;

        baseball(eaTeam5, eaTeam6);
        baseball(eaTeam4, eaTeam7);
        baseball(weTeam5, weTeam6);
        baseball(weTeam4, weTeam7);

        bestOfBase(3, 4, 5, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        updateBracket();

        calculateBoxScore(1, eaTeam5, eaTeam6);
        calculateBoxScore(2, weTeam7, weTeam4);
        calculateBoxScore(3, eaTeam4, eaTeam7);
        calculateBoxScore(4, weTeam6, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam6);
        setBoxScores(2, weTeam7, weTeam4);
        setBoxScores(3, eaTeam4, eaTeam7);
        setBoxScores(4, weTeam6, weTeam5);

    }  else if (playoffSteps == 4) {

        playoffSteps++;

        if (eaTeam5.wins < 3 && eaTeam6.wins < 3) {
            baseball(eaTeam5, eaTeam6);
            calculateBoxScore(1, eaTeam5, eaTeam6);
            setBoxScores(1, eaTeam5, eaTeam6);
        }

        if (weTeam7.wins < 3 && weTeam4.wins < 3) {
            baseball(weTeam7, weTeam4);
            calculateBoxScore(2, weTeam7, weTeam4);
            setBoxScores(2, weTeam7, weTeam4);
        }

        if (eaTeam4.wins < 3 && eaTeam7.wins < 3) {
            baseball(eaTeam4, eaTeam7);
            calculateBoxScore(3, eaTeam4, eaTeam7);
            setBoxScores(3, eaTeam4, eaTeam7);
        }

        if (weTeam5.wins < 3 && weTeam6.wins < 3) {
            baseball(weTeam5, weTeam6)
            calculateBoxScore(4, weTeam6, weTeam5);
            setBoxScores(4, weTeam6, weTeam5);
        }

        bestOfBase(4, 4, 5, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5) 
        updateBracket();

    } else if (playoffSteps == 5) {

        playoffSteps++;

        if (eaTeam5.wins < 3 && eaTeam6.wins < 3) {
            baseball(eaTeam5, eaTeam6);
            calculateBoxScore(1, eaTeam5, eaTeam6);
            setBoxScores(1, eaTeam5, eaTeam6);
        }

        if (weTeam7.wins < 3 && weTeam4.wins < 3) {
            baseball(weTeam7, weTeam4);
            calculateBoxScore(2, weTeam7, weTeam4);
            setBoxScores(2, weTeam7, weTeam4);
        }

        if (eaTeam4.wins < 3 && eaTeam7.wins < 3) {
            baseball(eaTeam4, eaTeam7);
            calculateBoxScore(3, eaTeam4, eaTeam7);
            setBoxScores(3, eaTeam4, eaTeam7);
        }

        if (weTeam5.wins < 3 && weTeam6.wins < 3) {
            baseball(weTeam5, weTeam6)
            calculateBoxScore(4, weTeam6, weTeam5);
            setBoxScores(4, weTeam6, weTeam5);
        }

        bestOfBase(5, 4, 5, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        updateBracket();
    } else if (playoffSteps == 6) {

        eaTeam4.wins >= 3 ? eaTeam4 = eaTeam4 : eaTeam4 = eaTeam7
        eaTeam5.wins >= 3 ? eaTeam5 = eaTeam5 : eaTeam5 = eaTeam6
        weTeam4.wins >= 3 ? weTeam4 = weTeam4 : weTeam4 = weTeam7
        weTeam5.wins >= 3 ? weTeam5 = weTeam5 : weTeam5 = weTeam6

        eaTeam4.wins = 0
        eaTeam5.wins = 0
        weTeam4.wins = 0
        weTeam5.wins = 0
        eaTeam4.losses = 0
        eaTeam5.losses = 0
        weTeam4.losses = 0
        weTeam5.losses = 0
        eaTeam4.history.perfect = 0
        eaTeam5.history.perfect = 0
        weTeam4.history.perfect = 0
        weTeam5.history.perfect = 0
        
        eaTeam4.fortune = eaTeam4.history.reports.length
        eaTeam5.fortune = eaTeam5.history.reports.length
        weTeam4.fortune = weTeam4.history.reports.length
        weTeam5.fortune = weTeam5.history.reports.length

        rowOne.innerHTML = ""
        rowOne.style.backgroundColor = "#D9FDFF"
        rowTwo.innerHTML = ""
        rowTwo.style.backgroundColor = "#D9FDFF"
        rowThree.innerHTML = ""
        rowFour.innerHTML = ""

        oneBox(2);

        rowOne.innerHTML += `<div id="best-one">BEST OF 5</div><div id="games-one"></div><div id="score-one">${eaTeam5.name}<br>${eaTeam4.name}</div><div id="score-one-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(1)" id="box-button-one" class="box-button">No Data</button>`
        rowTwo.innerHTML += `<div id="best-two">BEST OF 5</div><div id="games-two"></div><div id="score-one">${weTeam4.name}<br>${weTeam5.name}</div><div id="score-two-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(2)" id="box-button-two" class="box-button">No Data</button>`

        boxScoreArrOne = []
        boxScoreArrTwo = []
        boxScoreArrThree = []
        boxScoreArrFour = []

        boxOneMatchUp = [eaTeam5, eaTeam4]
        boxTwoMatchUp = [weTeam4, weTeam5]

        playoffSteps++;
        updateBracketTwo();

        setBoxScores(1, eaTeam5, eaTeam4);
        setBoxScores(2, weTeam4, weTeam5);

    } else if (playoffSteps == 7) {

        let boxX = document.getElementById("box-button-one")
        boxX.innerText = "Details"
        boxX = document.getElementById("box-button-two")
        boxX.innerText = "Details"

        playoffSteps++;

        baseball(eaTeam5, eaTeam4);
        baseball(weTeam4, weTeam5);         /// 1 = game, 2 = matchups/boxes, 5 = best of five or seven

        bestOfBase(1, 2, 5, eaTeam5, eaTeam4, weTeam4, weTeam5)
        updateBracketTwo();

        calculateBoxScore(1, eaTeam5, eaTeam4);
        calculateBoxScore(2, weTeam4, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam4);
        setBoxScores(2, weTeam4, weTeam5);

    } else if (playoffSteps == 8) {

        playoffSteps++;

        baseball(eaTeam5, eaTeam4);
        baseball(weTeam4, weTeam5);         /// 1 = game, 2 = matchups/boxes, 5 = best of five or seven

        bestOfBase(2, 2, 5, eaTeam5, eaTeam4, weTeam4, weTeam5)
        updateBracketTwo();

        calculateBoxScore(1, eaTeam5, eaTeam4);
        calculateBoxScore(2, weTeam4, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam4);
        setBoxScores(2, weTeam4, weTeam5);

    } else if (playoffSteps == 9) {

        playoffSteps++;

        baseball(eaTeam5, eaTeam4);
        baseball(weTeam4, weTeam5);         /// 1 = game, 2 = matchups/boxes, 5 = best of five or seven

        bestOfBase(3, 2, 5, eaTeam5, eaTeam4, weTeam4, weTeam5)
        updateBracketTwo();

        calculateBoxScore(1, eaTeam5, eaTeam4);
        calculateBoxScore(2, weTeam4, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam4);
        setBoxScores(2, weTeam4, weTeam5);

    } else if (playoffSteps == 10) {

        playoffSteps++;  

        if (eaTeam5.wins < 3 && eaTeam4.wins < 3) {
            baseball(eaTeam5, eaTeam4);
            calculateBoxScore(1, eaTeam5, eaTeam4);
            setBoxScores(1, eaTeam5, eaTeam4);
        }

        if (weTeam4.wins < 3 && weTeam5.wins < 3) {
            baseball(weTeam4, weTeam5);
            calculateBoxScore(2, weTeam4, weTeam5);
            setBoxScores(2, weTeam4, weTeam5);
        }

        bestOfBase(4, 2, 5, eaTeam5, eaTeam4, weTeam4, weTeam5)
        updateBracketTwo();

    } else if (playoffSteps == 11) {

        playoffSteps++;  

        if (eaTeam5.wins < 3 && eaTeam4.wins < 3) {
            baseball(eaTeam5, eaTeam4);
            calculateBoxScore(1, eaTeam5, eaTeam4);
            setBoxScores(1, eaTeam5, eaTeam4);
        }

        if (weTeam4.wins < 3 && weTeam5.wins < 3) {
            baseball(weTeam4, weTeam5);
            calculateBoxScore(2, weTeam4, weTeam5);
            setBoxScores(2, weTeam4, weTeam5);
        }

        bestOfBase(5, 2, 5, eaTeam5, eaTeam4, weTeam4, weTeam5)
        updateBracketTwo();

    } else if (playoffSteps == 12) {

        eaTeam4.wins >= 3 ? eaTeam4 = eaTeam4 : eaTeam4 = eaTeam5
        weTeam4.wins >= 3 ? weTeam4 = weTeam4 : weTeam4 = weTeam5

        eaTeam4.wins = 0
        weTeam4.wins = 0
        eaTeam4.history.perfect = 0
        weTeam4.history.perfect = 0
        eaTeam4.fortune = eaTeam4.history.reports.length
        weTeam4.fortune = weTeam4.history.reports.length



        rowOne.innerHTML = ""
        rowTwo.innerHTML = ""
        rowOne.style.backgroundColor = "transparent"
        rowTwo.style.backgroundColor = "transparent"

        playoffSteps++;
        updateBracketThree(eaTeam4, weTeam4);

    } else if (playoffSteps == 13) {

        cleanBracket();
        
        playoffSteps++;

    } else if (playoffSteps == 14) {

        playoffSteps++;

        eaTeam4.wins = 0
        weTeam4.wins = 0
        eaTeam4.losses = 0
        weTeam4.losses = 0

        finalStretch = 1

        rowOne.innerHTML = ""
        rowOne.style.backgroundColor = "#D9FDFF"
        rowTwo.innerHTML = ""
        rowTwo.style.backgroundColor = "#D9FDFF"
        rowThree.innerHTML = ""
        rowThree.style.backgroundColor = "#D9FDFF"
        rowFour.innerHTML = ""
        rowFour.style.backgroundColor = "#D9FDFF"
                        
        eaTeam5 = eaTeam1
        eaTeam6 = eaTeam4
        eaTeam4 = eaTeam2
        eaTeam7 = eaTeam3

        weTeam6 = weTeam4
        weTeam5 = weTeam1
        weTeam7 = weTeam3
        weTeam4 = weTeam2

        oneBox(4);

        rowOne.innerHTML += `<div id="best-one">BEST OF 7</div><div id="games-one"></div><div id="score-one">${eaTeam5.name}<br>${eaTeam6.name}</div><div id="score-one-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(1)" id="box-button-one" class="box-button">No Data</button>`
        rowTwo.innerHTML += `<div id="best-two">BEST OF 7</div><div id="games-two"></div><div id="score-one">${weTeam7.name}<br>${weTeam4.name}</div><div id="score-two-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(2)" id="box-button-two" class="box-button">No Data</button>`
        rowThree.innerHTML += `<div id="best-three">BEST OF 7</div><div id="games-three"></div><div id="score-one">${eaTeam4.name}<br>${eaTeam7.name}</div><div id="score-three-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(3)" id="box-button-three" class="box-button">No Data</button>`
        rowFour.innerHTML += `<div id="best-four">BEST OF 7</div><div id="games-four"></div><div id="score-one">${weTeam6.name}<br>${weTeam5.name}</div><div id="score-four-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(4)" id="box-button-four" class="box-button">No Data</button>`
        
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

        boxOneMatchUp = [eaTeam5, eaTeam6]
        boxTwoMatchUp = [weTeam7, weTeam4]
        boxThreeMatchUp = [eaTeam4, eaTeam7]
        boxFourMatchUp = [weTeam6, weTeam5]

        boxScoreArrOne = []
        boxScoreArrTwo = []
        boxScoreArrThree = []
        boxScoreArrFour = []

        setBoxScores(1, eaTeam5, eaTeam6);
        setBoxScores(2, weTeam7, weTeam4);
        setBoxScores(3, eaTeam4, eaTeam7);
        setBoxScores(4, weTeam6, weTeam5);

    } else if (playoffSteps == 15) {

        let boxX = document.getElementById("box-button-one")
        boxX.innerText = "Details"
        boxX = document.getElementById("box-button-two")
        boxX.innerText = "Details"
        boxX = document.getElementById("box-button-three")
        boxX.innerText = "Details"
        boxX = document.getElementById("box-button-four")
        boxX.innerText = "Details"

        playoffSteps++;
///
        baseball(eaTeam5, eaTeam6);
        baseball(eaTeam4, eaTeam7);
        baseball(weTeam5, weTeam6);
        baseball(weTeam4, weTeam7);

        bestOfBase(1, 4, 7, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        //updateBracket();

        calculateBoxScore(1, eaTeam5, eaTeam6);
        calculateBoxScore(2, weTeam7, weTeam4);
        calculateBoxScore(3, eaTeam4, eaTeam7);
        calculateBoxScore(4, weTeam6, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam6);
        setBoxScores(2, weTeam7, weTeam4);
        setBoxScores(3, eaTeam4, eaTeam7);
        setBoxScores(4, weTeam6, weTeam5);

        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 16) {

        baseball(eaTeam5, eaTeam6);
        baseball(eaTeam4, eaTeam7);
        baseball(weTeam5, weTeam6);
        baseball(weTeam4, weTeam7);

        bestOfBase(2, 4, 7, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        //updateBracket();

        calculateBoxScore(1, eaTeam5, eaTeam6);
        calculateBoxScore(2, weTeam7, weTeam4);
        calculateBoxScore(3, eaTeam4, eaTeam7);
        calculateBoxScore(4, weTeam6, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam6);
        setBoxScores(2, weTeam7, weTeam4);
        setBoxScores(3, eaTeam4, eaTeam7);
        setBoxScores(4, weTeam6, weTeam5);

        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

        playoffSteps++;

    } else if (playoffSteps == 17) {

        baseball(eaTeam5, eaTeam6);
        baseball(eaTeam4, eaTeam7);
        baseball(weTeam5, weTeam6);
        baseball(weTeam4, weTeam7);

        bestOfBase(3, 4, 7, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        //updateBracket();

        calculateBoxScore(1, eaTeam5, eaTeam6);
        calculateBoxScore(2, weTeam7, weTeam4);
        calculateBoxScore(3, eaTeam4, eaTeam7);
        calculateBoxScore(4, weTeam6, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam6);
        setBoxScores(2, weTeam7, weTeam4);
        setBoxScores(3, eaTeam4, eaTeam7);
        setBoxScores(4, weTeam6, weTeam5);

        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

        playoffSteps++;

    } else if (playoffSteps == 18) {

        baseball(eaTeam5, eaTeam6);
        baseball(eaTeam4, eaTeam7);
        baseball(weTeam5, weTeam6);
        baseball(weTeam4, weTeam7);

        bestOfBase(4, 4, 7, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        //updateBracket();

        calculateBoxScore(1, eaTeam5, eaTeam6);
        calculateBoxScore(2, weTeam7, weTeam4);
        calculateBoxScore(3, eaTeam4, eaTeam7);
        calculateBoxScore(4, weTeam6, weTeam5);
        
        setBoxScores(1, eaTeam5, eaTeam6);
        setBoxScores(2, weTeam7, weTeam4);
        setBoxScores(3, eaTeam4, eaTeam7);
        setBoxScores(4, weTeam6, weTeam5);

        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

        playoffSteps++;
        
    } else if (playoffSteps == 19) {

        playoffSteps++;

        if (eaTeam5.wins < 4 && eaTeam6.wins < 4) {
            baseball(eaTeam5, eaTeam6);
            calculateBoxScore(1, eaTeam5, eaTeam6);
            setBoxScores(1, eaTeam5, eaTeam6);
        }

        if (weTeam7.wins < 4 && weTeam4.wins < 4) {
            baseball(weTeam7, weTeam4);
            calculateBoxScore(2, weTeam7, weTeam4);
            setBoxScores(2, weTeam7, weTeam4);
        }

        if (eaTeam4.wins < 4 && eaTeam7.wins < 4) {
            baseball(eaTeam4, eaTeam7);
            calculateBoxScore(3, eaTeam4, eaTeam7);
            setBoxScores(3, eaTeam4, eaTeam7);
        }

        if (weTeam5.wins < 4 && weTeam6.wins < 4) {
            baseball(weTeam5, weTeam6)
            calculateBoxScore(4, weTeam6, weTeam5);
            setBoxScores(4, weTeam6, weTeam5);
        }

        bestOfBase(5, 4, 7, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 20) {

        playoffSteps++;

        if (eaTeam5.wins < 4 && eaTeam6.wins < 4) {
            baseball(eaTeam5, eaTeam6);
            calculateBoxScore(1, eaTeam5, eaTeam6);
            setBoxScores(1, eaTeam5, eaTeam6);
        }

        if (weTeam7.wins < 4 && weTeam4.wins < 4) {
            baseball(weTeam7, weTeam4);
            calculateBoxScore(2, weTeam7, weTeam4);
            setBoxScores(2, weTeam7, weTeam4);
        }

        if (eaTeam4.wins < 4 && eaTeam7.wins < 4) {
            baseball(eaTeam4, eaTeam7);
            calculateBoxScore(3, eaTeam4, eaTeam7);
            setBoxScores(3, eaTeam4, eaTeam7);
        }

        if (weTeam5.wins < 4 && weTeam6.wins < 4) {
            baseball(weTeam5, weTeam6)
            calculateBoxScore(4, weTeam6, weTeam5);
            setBoxScores(4, weTeam6, weTeam5);
        }

        bestOfBase(6, 4, 7, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)
        
    } else if (playoffSteps == 21) {

        playoffSteps++;

        if (eaTeam5.wins < 4 && eaTeam6.wins < 4) {
            baseball(eaTeam5, eaTeam6);
            calculateBoxScore(1, eaTeam5, eaTeam6);
            setBoxScores(1, eaTeam5, eaTeam6);
        }

        if (weTeam7.wins < 4 && weTeam4.wins < 4) {
            baseball(weTeam7, weTeam4);
            calculateBoxScore(2, weTeam7, weTeam4);
            setBoxScores(2, weTeam7, weTeam4);
        }

        if (eaTeam4.wins < 4 && eaTeam7.wins < 4) {
            baseball(eaTeam4, eaTeam7);
            calculateBoxScore(3, eaTeam4, eaTeam7);
            setBoxScores(3, eaTeam4, eaTeam7);
        }

        if (weTeam5.wins < 4 && weTeam6.wins < 4) {
            baseball(weTeam5, weTeam6)
            calculateBoxScore(4, weTeam6, weTeam5);
            setBoxScores(4, weTeam6, weTeam5);
        }

        bestOfBase(7, 4, 7, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)
        
    }  else if (playoffSteps == 22) {

        eaTeam5.wins >= 4 ? eaTeam5 = eaTeam5 : eaTeam5 = eaTeam6
        eaTeam4.wins >= 4 ? eaTeam4 = eaTeam4 : eaTeam4 = eaTeam7
        weTeam4.wins >= 4 ? weTeam4 = weTeam4 : weTeam4 = weTeam7
        weTeam5.wins >= 4 ? weTeam5 = weTeam5 : weTeam5 = weTeam6

        playoffSteps++;

        eaTeam4.wins = 0
        weTeam4.wins = 0
        eaTeam5.wins = 0
        weTeam5.wins = 0
        eaTeam4.losses = 0
        weTeam4.losses = 0
        eaTeam5.losses = 0
        weTeam5.losses = 0
        eaTeam4.history.perfect = 0
        eaTeam5.history.perfect = 0
        weTeam4.history.perfect = 0
        weTeam5.history.perfect = 0
        eaTeam4.fortune = eaTeam4.history.reports.length
        weTeam4.fortune = weTeam4.history.reports.length
        eaTeam5.fortune = eaTeam5.history.reports.length
        weTeam5.fortune = weTeam5.history.reports.length

        rowOne.innerHTML = ""
        rowOne.style.backgroundColor = "#D9FDFF"
        rowTwo.innerHTML = ""
        rowTwo.style.backgroundColor = "#D9FDFF"
        rowThree.innerHTML = ""
        //rowThree.style.backgroundColor = "transparent"
        rowFour.innerHTML = ""
        //rowFour.style.backgroundColor = "transparent"

        oneBox(2);

        rowOne.innerHTML += `<div id="best-one">BEST OF 7</div><div id="games-one"></div><div id="score-one">${eaTeam4.name}<br>${eaTeam5.name}</div><div id="score-one-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(1)" id="box-button-one" class="box-button">No Data</button>`
        rowTwo.innerHTML += `<div id="best-two">BEST OF 7</div><div id="games-two"></div><div id="score-one">${weTeam4.name}<br>${weTeam5.name}</div><div id="score-two-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(2)" id="box-button-two" class="box-button">No Data</button>`
        
        //updateBracketFour(eaTeam4, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

        boxOneMatchUp = [eaTeam4, eaTeam5]
        boxTwoMatchUp = [weTeam4, weTeam5]

        boxScoreArrOne = []
        boxScoreArrTwo = []
        boxScoreArrThree = []
        boxScoreArrFour = []

        updateBracketTwo();

        setBoxScores(1, eaTeam4, eaTeam5);
        setBoxScores(2, weTeam4, weTeam5);
        
    } else if (playoffSteps == 23) {

        let boxX = document.getElementById("box-button-one")
        boxX.innerText = "Details"
        boxX = document.getElementById("box-button-two")
        boxX.innerText = "Details"

        playoffSteps++;

        baseball(eaTeam4, eaTeam5);
        baseball(weTeam4, weTeam5);

        bestOfBase(1, 2, 7, eaTeam4, eaTeam5, weTeam4, weTeam5)

        calculateBoxScore(1, eaTeam4, eaTeam5);
        calculateBoxScore(2, weTeam4, weTeam5);

        setBoxScores(1, eaTeam4, eaTeam5);
        setBoxScores(2, weTeam4, weTeam5);

        updateBracketTwo();

    } else if (playoffSteps == 24) {

        playoffSteps++;

        baseball(eaTeam4, eaTeam5);
        baseball(weTeam4, weTeam5);

        bestOfBase(2, 2, 7, eaTeam4, eaTeam5, weTeam4, weTeam5)


        calculateBoxScore(1, eaTeam4, eaTeam5);
        calculateBoxScore(2, weTeam4, weTeam5);

        setBoxScores(1, eaTeam4, eaTeam5);
        setBoxScores(2, weTeam4, weTeam5);

        updateBracketTwo();

    }  else if (playoffSteps == 25) {

        playoffSteps++;

        baseball(eaTeam4, eaTeam5);
        baseball(weTeam4, weTeam5);

        bestOfBase(3, 2, 7, eaTeam4, eaTeam5, weTeam4, weTeam5)


        calculateBoxScore(1, eaTeam4, eaTeam5);
        calculateBoxScore(2, weTeam4, weTeam5);

        setBoxScores(1, eaTeam4, eaTeam5);
        setBoxScores(2, weTeam4, weTeam5);

        updateBracketTwo();

    }  else if (playoffSteps == 26) {

        playoffSteps++;

        baseball(eaTeam4, eaTeam5);
        baseball(weTeam4, weTeam5);

        bestOfBase(4, 2, 7, eaTeam4, eaTeam5, weTeam4, weTeam5)


        calculateBoxScore(1, eaTeam4, eaTeam5);
        calculateBoxScore(2, weTeam4, weTeam5);

        setBoxScores(1, eaTeam4, eaTeam5);
        setBoxScores(2, weTeam4, weTeam5);

        updateBracketTwo();

    }  else if (playoffSteps == 27) {

        playoffSteps++;

        if (eaTeam4.wins < 4 && eaTeam5.wins < 4) {
            baseball(eaTeam4, eaTeam5);
            calculateBoxScore(1, eaTeam4, eaTeam5);
            setBoxScores(1, eaTeam4, eaTeam5);
        }

        if (weTeam4.wins < 4 && weTeam5.wins < 4) {
            baseball(weTeam4, weTeam5);
            calculateBoxScore(2, weTeam4, weTeam5);
            setBoxScores(2, weTeam4, weTeam5);
        }

        bestOfBase(5, 2, 7, eaTeam4, eaTeam5, weTeam4, weTeam5)
        updateBracketTwo();

    }  else if (playoffSteps == 28) {

        playoffSteps++;

        if (eaTeam4.wins < 4 && eaTeam5.wins < 4) {
            baseball(eaTeam4, eaTeam5);
            calculateBoxScore(1, eaTeam4, eaTeam5);
            setBoxScores(1, eaTeam4, eaTeam5);
        }

        if (weTeam4.wins < 4 && weTeam5.wins < 4) {
            baseball(weTeam4, weTeam5);
            calculateBoxScore(2, weTeam4, weTeam5);
            setBoxScores(2, weTeam4, weTeam5);
        }

        bestOfBase(6, 2, 7, eaTeam4, eaTeam5, weTeam4, weTeam5)
        updateBracketTwo();

    }  else if (playoffSteps == 29) {

        playoffSteps++;

        if (eaTeam4.wins < 4 && eaTeam5.wins < 4) {
            baseball(eaTeam4, eaTeam5);
            calculateBoxScore(1, eaTeam4, eaTeam5);
            setBoxScores(1, eaTeam4, eaTeam5);
        }

        if (weTeam4.wins < 4 && weTeam5.wins < 4) {
            baseball(weTeam4, weTeam5);
            calculateBoxScore(2, weTeam4, weTeam5);
            setBoxScores(2, weTeam4, weTeam5);
        }

        bestOfBase(7, 2, 7, eaTeam4, eaTeam5, weTeam4, weTeam5)
        updateBracketTwo();

///
///
///

    } else if (playoffSteps == 30) {

        eaTeam4.wins >= 4 ? eaTeam1 = eaTeam4 : eaTeam1 = eaTeam5
        weTeam4.wins >= 4 ? weTeam1 = weTeam4 : weTeam1 = weTeam5

        eaTeam1.wins = 0
        weTeam1.wins = 0
        weTeam1.losses = 0
        eaTeam1.losses = 0
        weTeam1.history.perfect = 0
        eaTeam1.history.perfect = 0
        eaTeam1.fortune = eaTeam1.history.reports.length
        weTeam1.fortune = weTeam1.history.reports.length

        rowOne.innerHTML = ""
        rowTwo.style.display = "none"
        rowTwo.innerHTML = ""

     //   finalStretch = 2



        rowOne.innerHTML = ""
        rowOne.style.backgroundColor = "#D9FDFF"
        rowTwo.innerHTML = ""
        //rowTwo.style.backgroundColor = "#D9FDFF"
       // rowThree.innerHTML = ""
        //rowThree.style.backgroundColor = "transparent"
        //rowFour.innerHTML = ""
        //rowFour.style.backgroundColor = "transparent"

        oneBox(1);

        rowOne.innerHTML += `<div id="best-one">BEST OF 7</div><div id="games-one"></div><div id="score-one">${eaTeam1.name}<br>${weTeam1.name}</div><div id="score-one-side"><font color="grey">-</font><br><font color="grey">-</font></div><br><br><button onclick="details(1)" id="box-button-one" class="box-button">No Data</button>`
        
        //updateBracketFour(eaTeam4, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

        boxOneMatchUp = [eaTeam1, weTeam1]

        boxScoreArrOne = []
        boxScoreArrTwo = []
        boxScoreArrThree = []
        boxScoreArrFour = []

        playoffSteps++;
        updateBracketThree(eaTeam1, weTeam1);

        setBoxScores(1, eaTeam1, weTeam1);
        
    } else if (playoffSteps == 31) {

        let boxX = document.getElementById("box-button-one")
        boxX.innerText = "Details"

        playoffSteps++;

        baseball(eaTeam1, weTeam1);
        bestOfBase(1, 1, 7, eaTeam1, weTeam1)
        calculateBoxScore(1, eaTeam1, weTeam1);
        setBoxScores(1, eaTeam1, weTeam1);
        updateBracketThree(eaTeam1, weTeam1);

    } else if (playoffSteps == 32) {

        playoffSteps++;

        baseball(eaTeam1, weTeam1);
        bestOfBase(2, 1, 7, eaTeam1, weTeam1)
        calculateBoxScore(1, eaTeam1, weTeam1);
        setBoxScores(1, eaTeam1, weTeam1);
        updateBracketThree(eaTeam1, weTeam1);

    } else if (playoffSteps == 33) {

        playoffSteps++;

        baseball(eaTeam1, weTeam1);
        bestOfBase(3, 1, 7, eaTeam1, weTeam1)
        calculateBoxScore(1, eaTeam1, weTeam1);
        setBoxScores(1, eaTeam1, weTeam1);
        updateBracketThree(eaTeam1, weTeam1);

    } else if (playoffSteps == 34) {

        playoffSteps++;

        baseball(eaTeam1, weTeam1);
        bestOfBase(4, 1, 7, eaTeam1, weTeam1)
        calculateBoxScore(1, eaTeam1, weTeam1);
        setBoxScores(1, eaTeam1, weTeam1);
        updateBracketThree(eaTeam1, weTeam1);

    } else if (playoffSteps == 35) {

        playoffSteps++;

        if (eaTeam1.wins < 4 && weTeam1.wins < 4) {
            baseball(eaTeam1, weTeam1);
            calculateBoxScore(1, eaTeam1, weTeam1);
            setBoxScores(1, eaTeam1, weTeam1);
        }

        bestOfBase(5, 1, 7, eaTeam1, weTeam1)
        updateBracketThree(eaTeam1, weTeam1);

    } else if (playoffSteps == 36) {

        playoffSteps++;

        if (eaTeam1.wins < 4 && weTeam1.wins < 4) {
            baseball(eaTeam1, weTeam1);
            calculateBoxScore(1, eaTeam1, weTeam1);
            setBoxScores(1, eaTeam1, weTeam1);
        }

        bestOfBase(6, 1, 7, eaTeam1, weTeam1)
        updateBracketThree(eaTeam1, weTeam1);

    } else if (playoffSteps == 37) {

        playoffSteps++;

        if (eaTeam1.wins < 4 && weTeam1.wins < 4) {
            baseball(eaTeam1, weTeam1);
            calculateBoxScore(1, eaTeam1, weTeam1);
            setBoxScores(1, eaTeam1, weTeam1);
        }

        bestOfBase(7, 1, 7, eaTeam1, weTeam1)
        updateBracketThree(eaTeam1, weTeam1);

    } else if (playoffSteps == 38) {

        let winnerWin = document.getElementById("winner-spot")
        eaTeam1.wins >= 4 ? winnerWin.innerHTML = `${eaTeam1.name.toUpperCase()}<br><font>CHAMPIONS</font>` : winnerWin.innerHTML = `${weTeam1.name.toUpperCase()}<br><font>CHAMPIONS</font>`
        let playoffButtonAppear = document.getElementById("playoff-button")
        document.getElementById("playoff-button-two").style.display = "none"
        playoffButtonAppear.style.display = "none"
        winnerWin.style.display = "inline-block";
        winnerWin.style.fontSize = "xx-large"
        winnerWin.style.fontWeight = "900"
        let colorBoom = document.getElementById("bracket-color")

        if (winnerWin.innerHTML.split("<br><font>")[0] == playerOne.toUpperCase()) {
            colorBoom.style.backgroundColor = "#6F2727"
        } else if (winnerWin.innerHTML.split("<br><font>")[0] == playerTwo.toUpperCase()) {
            colorBoom.style.backgroundColor = "#137283" 
        } else if (winnerWin.innerHTML.split("<br><font>")[0] == playerThree.toUpperCase()) {
            colorBoom.style.backgroundColor = "#6fa578"
        } else if (winnerWin.innerHTML.split("<br><font>")[0] == playerFour.toUpperCase()) {
            colorBoom.style.backgroundColor = "#665F08"
        } else {
            colorBoom.style.backgroundColor = "#56495A"
        }
    }
}


// updateBracketTwo();



let expandContract = 0
let fromReportToBox = 0

const details = (num, game, exit) => {

    if (document.getElementById("box-button-one").innerText !== "Details") {
        fromReportToBox = 1
        console.log("fromReport set to 1")
    }

    if (document.getElementById("box-button-one").innerText == "Details" && playoffSteps >= 2 && expandContract == 0 || exit == 1 && fromReportToBox == 0) {
        expandContract = 1
        let newContent = null;
        let printThis = null
        let currentBoxMatchUp = null
        let tdRun = null
        let tdHit = null
        let tdHr = null
        let tdRbi = null
        let tdSbSo = null
        let whatGame = null
        let gameParam = null
       // newContent = document.getElementById("cover-right")
        console.log("waaaw")
       // newContent = document.getElementById("cover-left")
        

        if (num == 1 || num == 3) {
            exit !== 1 ? expandRightBox() : console.log("already expanded")
            newContent = document.getElementById("cover-right")
            newContent.innerHTML = ""
            newContent.style.fontSize = "68%"
            newContent.style.height = "101%"
        } else if (num == 2 || num == 4) {
            exit !== 1 ? expandLeftBox() : console.log("already expanded")
            newContent = document.getElementById("cover-left")
            newContent.innerHTML = ""
            newContent.style.fontSize = "68%"
            newContent.style.height = "101%"
        }

        if (num == 1) {
            currentBoxMatchUp = boxScoreArrOne
            boxMatchUpX = boxOneMatchUp
        } else if (num == 2) {
            currentBoxMatchUp = boxScoreArrTwo
            boxMatchUpX = boxTwoMatchUp
        } else if (num == 3) {
            currentBoxMatchUp = boxScoreArrThree
            boxMatchUpX = boxThreeMatchUp
        } else if (num == 4) {
            currentBoxMatchUp = boxScoreArrFour
            boxMatchUpX = boxFourMatchUp
        } 

            if (game >= 1) {
                whatGame = `GAME ${game}` 
                gameParam = game
            } else {
                whatGame = `GAME ${boxMatchUpX[0].wins + boxMatchUpX[1].wins}` 
                gameParam = boxMatchUpX[0].wins + boxMatchUpX[1].wins
            }

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][0][1][0]
                tdHit = currentBoxMatchUp[game - 1][0][1][1]
                tdHr = currentBoxMatchUp[game - 1][0][1][2]
                tdRbi = currentBoxMatchUp[game - 1][0][1][3]
                tdSbSo = currentBoxMatchUp[game - 1][0][1][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][1][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][1][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][1][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][1][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][1][4]
            }
            
            printThis = `<font color="grey">${whatGame}</font><button onclick="matchRepo(${num}, ${gameParam})">Match Report</button>` +
                        `<table><th>${boxMatchUpX[0].name}</th><th>R</th><th>H</th><th>HR</th><th>RBI</th><th>SB/SO</th>
                        <tr><td>${boxMatchUpX[0].players.position2.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                        <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][0][2][0]
                tdHit = currentBoxMatchUp[game - 1][0][2][1]
                tdHr = currentBoxMatchUp[game - 1][0][2][2]
                tdRbi = currentBoxMatchUp[game - 1][0][2][3]
                tdSbSo = currentBoxMatchUp[game - 1][0][2][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][2][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][2][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][2][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][2][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][2][4]
            }

            printThis += `<tr><td>${boxMatchUpX[0].players.position3.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`
            
            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][0][3][0]
                tdHit = currentBoxMatchUp[game - 1][0][3][1]
                tdHr = currentBoxMatchUp[game - 1][0][3][2]
                tdRbi = currentBoxMatchUp[game - 1][0][3][3]
                tdSbSo = currentBoxMatchUp[game - 1][0][3][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][3][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][3][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][3][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][3][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][3][4]
            }
                          
            printThis += `<tr><td>${boxMatchUpX[0].players.position4.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][0][4][0]
                tdHit = currentBoxMatchUp[game - 1][0][4][1]
                tdHr = currentBoxMatchUp[game - 1][0][4][2]
                tdRbi = currentBoxMatchUp[game - 1][0][4][3]
                tdSbSo = currentBoxMatchUp[game - 1][0][4][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][4][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][4][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][4][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][4][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][4][4]
            }

            printThis += `<tr><td>${boxMatchUpX[0].players.position5.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][0][5][0]
                tdHit = currentBoxMatchUp[game - 1][0][5][1]
                tdHr = currentBoxMatchUp[game - 1][0][5][2]
                tdRbi = currentBoxMatchUp[game - 1][0][5][3]
                tdSbSo = currentBoxMatchUp[game - 1][0][5][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][5][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][5][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][5][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][5][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][5][4]
            }
            
            printThis += `<tr><td>${boxMatchUpX[0].players.position6.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][0][6][0]
                tdHit = currentBoxMatchUp[game - 1][0][6][1]
                tdHr = currentBoxMatchUp[game - 1][0][6][2]
                tdRbi = currentBoxMatchUp[game - 1][0][6][3]
                tdSbSo = currentBoxMatchUp[game - 1][0][6][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][6][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][6][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][6][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][6][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][6][4]
            }

            printThis += `<tr><td>${boxMatchUpX[0].players.position7.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][0][7][0]
                tdHit = currentBoxMatchUp[game - 1][0][7][1]
                tdHr = currentBoxMatchUp[game - 1][0][7][2]
                tdRbi = currentBoxMatchUp[game - 1][0][7][3]
                tdSbSo = currentBoxMatchUp[game - 1][0][7][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][7][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][7][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][7][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][7][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][7][4]
            }
                        
            printThis += `<tr><td>${boxMatchUpX[0].players.position8.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][0][8][0]
                tdHit = currentBoxMatchUp[game - 1][0][8][1]
                tdHr = currentBoxMatchUp[game - 1][0][8][2]
                tdRbi = currentBoxMatchUp[game - 1][0][8][3]
                tdSbSo = currentBoxMatchUp[game - 1][0][8][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][8][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][8][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][8][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][8][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][8][4]
            }

            printThis += `<tr><td>${boxMatchUpX[0].players.position9.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdSbSo = currentBoxMatchUp[game - 1][0][0][0]
            } else {
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][0][0][0]
            }

            printThis += `<tr><td>${boxMatchUpX[0].players.position1.name}</td><td></td><td></td>
                          <td></td><td></td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][1][1][0]
                tdHit = currentBoxMatchUp[game - 1][1][1][1]
                tdHr = currentBoxMatchUp[game - 1][1][1][2]
                tdRbi = currentBoxMatchUp[game - 1][1][1][3]
                tdSbSo = currentBoxMatchUp[game - 1][1][1][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][1][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][1][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][1][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][1][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][1][4]
            }

            printThis += `<table><th>${boxMatchUpX[1].name}</th><th>R</th><th>H</th><th>HR</th><th>RBI</th><th>SB/SO</th>
                          <tr><td>${boxMatchUpX[1].players.position2.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][1][2][0]
                tdHit = currentBoxMatchUp[game - 1][1][2][1]
                tdHr = currentBoxMatchUp[game - 1][1][2][2]
                tdRbi = currentBoxMatchUp[game - 1][1][2][3]
                tdSbSo = currentBoxMatchUp[game - 1][1][2][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][2][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][2][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][2][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][2][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][2][4]
            }

            printThis += `<tr><td>${boxMatchUpX[1].players.position3.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][1][3][0]
                tdHit = currentBoxMatchUp[game - 1][1][3][1]
                tdHr = currentBoxMatchUp[game - 1][1][3][2]
                tdRbi = currentBoxMatchUp[game - 1][1][3][3]
                tdSbSo = currentBoxMatchUp[game - 1][1][3][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][3][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][3][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][3][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][3][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][3][4]
            }

            printThis += `<tr><td>${boxMatchUpX[1].players.position4.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][1][4][0]
                tdHit = currentBoxMatchUp[game - 1][1][4][1]
                tdHr = currentBoxMatchUp[game - 1][1][4][2]
                tdRbi = currentBoxMatchUp[game - 1][1][4][3]
                tdSbSo = currentBoxMatchUp[game - 1][1][4][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][4][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][4][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][4][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][4][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][4][4]
            }

            printThis += `<tr><td>${boxMatchUpX[1].players.position5.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][1][5][0]
                tdHit = currentBoxMatchUp[game - 1][1][5][1]
                tdHr = currentBoxMatchUp[game - 1][1][5][2]
                tdRbi = currentBoxMatchUp[game - 1][1][5][3]
                tdSbSo = currentBoxMatchUp[game - 1][1][5][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][5][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][5][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][5][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][5][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][5][4]
            }

            printThis += `<tr><td>${boxMatchUpX[1].players.position6.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][1][6][0]
                tdHit = currentBoxMatchUp[game - 1][1][6][1]
                tdHr = currentBoxMatchUp[game - 1][1][6][2]
                tdRbi = currentBoxMatchUp[game - 1][1][6][3]
                tdSbSo = currentBoxMatchUp[game - 1][1][6][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][6][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][6][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][6][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][6][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][6][4]
            }

            printThis += `<tr><td>${boxMatchUpX[1].players.position7.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][1][7][0]
                tdHit = currentBoxMatchUp[game - 1][1][7][1]
                tdHr = currentBoxMatchUp[game - 1][1][7][2]
                tdRbi = currentBoxMatchUp[game - 1][1][7][3]
                tdSbSo = currentBoxMatchUp[game - 1][1][7][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][7][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][7][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][7][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][7][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][7][4]
            }

            printThis += `<tr><td>${boxMatchUpX[1].players.position8.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdRun = currentBoxMatchUp[game - 1][1][8][0]
                tdHit = currentBoxMatchUp[game - 1][1][8][1]
                tdHr = currentBoxMatchUp[game - 1][1][8][2]
                tdRbi = currentBoxMatchUp[game - 1][1][8][3]
                tdSbSo = currentBoxMatchUp[game - 1][1][8][4]
            } else {
                tdRun = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][8][0]
                tdHit = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][8][1]
                tdHr = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][8][2]
                tdRbi = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][8][3]
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][8][4]
            }

            printThis += `<tr><td>${boxMatchUpX[1].players.position9.name}</td><td>${tdRun}</td><td>${tdHit}</td>
                          <td>${tdHr}</td><td>${tdRbi}</td><td>${tdSbSo}</td></tr>`

            if (game >= 1) {
                tdSbSo = currentBoxMatchUp[game - 1][1][0][0]
            } else {
                tdSbSo = currentBoxMatchUp[currentBoxMatchUp.length - 2][1][0][0]
            }

            printThis += `<tr><td>${boxMatchUpX[1].players.position1.name}</td><td></td><td></td>
                          <td></td><td></td><td>${tdSbSo}</td></tr>`
                    
            newContent.innerHTML += printThis   
                                
// .length - 1 = latest match, first [0] = team 1, second [0] = position 1 aka pitcher, third [0] = first attribute aka strikeouts
      //  team1.players.position1.strikeouts - boxScoreArrOne[boxScoreArrOne.length - 1][0][0][0]

    } else {
        expandContract = 0;
        console.log("close cover")
        if (num == 1 || num == 3) {
            fromReportToBox == 0 ? expandRightBox() : console.log("No data")
            newContent = document.getElementById("cover-right")
            newContent.innerHTML = ""
            newContent.style.height = "10%"
        } else if (num == 2 || num == 4) {
            fromReportToBox == 0 ? expandLeftBox() : console.log("No data")
            newContent = document.getElementById("cover-left")
            newContent.innerHTML = ""
            newContent.style.height = "10%"
        }
    }

    fromReportToBox = 0
}

let boxOneMatchUp = null
let boxTwoMatchUp = null
let boxThreeMatchUp = null
let boxFourMatchUp = null
let boxScoreArrOne = []
let boxScoreArrTwo = []
let boxScoreArrThree = []
let boxScoreArrFour = []

const setBoxScores = (boxes, team1, team2) => {

        let matchBox = []
        let teamBoxScore = []
        let positionBox = []
        positionBox.push(team1.players.position1.strikeouts)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team1.players.position2.runs)
        positionBox.push(team1.players.position2.hits)
        positionBox.push(team1.players.position2.homeruns)
        positionBox.push(team1.players.position2.rbi)
        positionBox.push(team1.players.position2.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team1.players.position3.runs)
        positionBox.push(team1.players.position3.hits)
        positionBox.push(team1.players.position3.homeruns)
        positionBox.push(team1.players.position3.rbi)
        positionBox.push(team1.players.position3.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team1.players.position4.runs)
        positionBox.push(team1.players.position4.hits)
        positionBox.push(team1.players.position4.homeruns)
        positionBox.push(team1.players.position4.rbi)
        positionBox.push(team1.players.position4.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team1.players.position5.runs)
        positionBox.push(team1.players.position5.hits)
        positionBox.push(team1.players.position5.homeruns)
        positionBox.push(team1.players.position5.rbi)
        positionBox.push(team1.players.position5.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team1.players.position6.runs)
        positionBox.push(team1.players.position6.hits)
        positionBox.push(team1.players.position6.homeruns)
        positionBox.push(team1.players.position6.rbi)
        positionBox.push(team1.players.position6.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team1.players.position7.runs)
        positionBox.push(team1.players.position7.hits)
        positionBox.push(team1.players.position7.homeruns)
        positionBox.push(team1.players.position7.rbi)
        positionBox.push(team1.players.position7.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team1.players.position8.runs)
        positionBox.push(team1.players.position8.hits)
        positionBox.push(team1.players.position8.homeruns)
        positionBox.push(team1.players.position8.rbi)
        positionBox.push(team1.players.position8.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team1.players.position9.runs)
        positionBox.push(team1.players.position9.hits)
        positionBox.push(team1.players.position9.homeruns)
        positionBox.push(team1.players.position9.rbi)
        positionBox.push(team1.players.position9.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        matchBox.push(teamBoxScore)
//// second team into match box
        teamBoxScore = []
        positionBox = []
        positionBox.push(team2.players.position1.strikeouts)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team2.players.position2.runs)
        positionBox.push(team2.players.position2.hits)
        positionBox.push(team2.players.position2.homeruns)
        positionBox.push(team2.players.position2.rbi)
        positionBox.push(team2.players.position2.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team2.players.position3.runs)
        positionBox.push(team2.players.position3.hits)
        positionBox.push(team2.players.position3.homeruns)
        positionBox.push(team2.players.position3.rbi)
        positionBox.push(team2.players.position3.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team2.players.position4.runs)
        positionBox.push(team2.players.position4.hits)
        positionBox.push(team2.players.position4.homeruns)
        positionBox.push(team2.players.position4.rbi)
        positionBox.push(team2.players.position4.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team2.players.position5.runs)
        positionBox.push(team2.players.position5.hits)
        positionBox.push(team2.players.position5.homeruns)
        positionBox.push(team2.players.position5.rbi)
        positionBox.push(team2.players.position5.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team2.players.position6.runs)
        positionBox.push(team2.players.position6.hits)
        positionBox.push(team2.players.position6.homeruns)
        positionBox.push(team2.players.position6.rbi)
        positionBox.push(team2.players.position6.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team2.players.position7.runs)
        positionBox.push(team2.players.position7.hits)
        positionBox.push(team2.players.position7.homeruns)
        positionBox.push(team2.players.position7.rbi)
        positionBox.push(team2.players.position7.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team2.players.position8.runs)
        positionBox.push(team2.players.position8.hits)
        positionBox.push(team2.players.position8.homeruns)
        positionBox.push(team2.players.position8.rbi)
        positionBox.push(team2.players.position8.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        positionBox.push(team2.players.position9.runs)
        positionBox.push(team2.players.position9.hits)
        positionBox.push(team2.players.position9.homeruns)
        positionBox.push(team2.players.position9.rbi)
        positionBox.push(team2.players.position9.stolenbases)
        teamBoxScore.push(positionBox)
        positionBox = []
        matchBox.push(teamBoxScore)

        if (boxes == 1) {
            boxScoreArrOne.push(matchBox)
        } else if (boxes == 2) {
            boxScoreArrTwo.push(matchBox)
        } else if (boxes == 3) {
            boxScoreArrThree.push(matchBox)
        } else if (boxes == 4) {
            boxScoreArrFour.push(matchBox)
        }

 /// runs, hits, homeruns, rbi, stolenbases
    console.log("boxscores")
}

const calculateBoxScore = (boxes, team1, team2) => {

    let tempBox = null

    if (boxes == 1) {
        tempBox = boxScoreArrOne 
    } else if (boxes == 2) {
        tempBox = boxScoreArrTwo
    } else if (boxes == 3) {
        tempBox = boxScoreArrThree
    } else if (boxes == 4) {
        tempBox = boxScoreArrFour
    }

  /// their latest number of strikeouts vs the amount they had prior to their latest game 
        tempBox[tempBox.length - 1][0][0][0] = team1.players.position1.strikeouts - tempBox[tempBox.length - 1][0][0][0]
// .length - 1 = latest match, first [0] = team 1, second [0] = position 1 aka pitcher, third [0] = first attribute aka strikeouts
        tempBox[tempBox.length - 1][0][1][0] = team1.players.position2.runs - tempBox[tempBox.length - 1][0][1][0]
        tempBox[tempBox.length - 1][0][1][1] = team1.players.position2.hits - tempBox[tempBox.length - 1][0][1][1]
        tempBox[tempBox.length - 1][0][1][2] = team1.players.position2.homeruns - tempBox[tempBox.length - 1][0][1][2]
        tempBox[tempBox.length - 1][0][1][3] = team1.players.position2.rbi - tempBox[tempBox.length - 1][0][1][3]
        tempBox[tempBox.length - 1][0][1][4] = team1.players.position2.stolenbases - tempBox[tempBox.length - 1][0][1][4]

        tempBox[tempBox.length - 1][0][2][0] = team1.players.position3.runs - tempBox[tempBox.length - 1][0][2][0]
        tempBox[tempBox.length - 1][0][2][1] = team1.players.position3.hits - tempBox[tempBox.length - 1][0][2][1]
        tempBox[tempBox.length - 1][0][2][2] = team1.players.position3.homeruns - tempBox[tempBox.length - 1][0][2][2]
        tempBox[tempBox.length - 1][0][2][3] = team1.players.position3.rbi - tempBox[tempBox.length - 1][0][2][3]
        tempBox[tempBox.length - 1][0][2][4] = team1.players.position3.stolenbases - tempBox[tempBox.length - 1][0][2][4]

        tempBox[tempBox.length - 1][0][3][0] = team1.players.position4.runs - tempBox[tempBox.length - 1][0][3][0]
        tempBox[tempBox.length - 1][0][3][1] = team1.players.position4.hits - tempBox[tempBox.length - 1][0][3][1]
        tempBox[tempBox.length - 1][0][3][2] = team1.players.position4.homeruns - tempBox[tempBox.length - 1][0][3][2]
        tempBox[tempBox.length - 1][0][3][3] = team1.players.position4.rbi - tempBox[tempBox.length - 1][0][3][3]
        tempBox[tempBox.length - 1][0][3][4] = team1.players.position4.stolenbases - tempBox[tempBox.length - 1][0][3][4]

        tempBox[tempBox.length - 1][0][4][0] = team1.players.position5.runs - tempBox[tempBox.length - 1][0][4][0]
        tempBox[tempBox.length - 1][0][4][1] = team1.players.position5.hits - tempBox[tempBox.length - 1][0][4][1]
        tempBox[tempBox.length - 1][0][4][2] = team1.players.position5.homeruns - tempBox[tempBox.length - 1][0][4][2]
        tempBox[tempBox.length - 1][0][4][3] = team1.players.position5.rbi - tempBox[tempBox.length - 1][0][4][3]
        tempBox[tempBox.length - 1][0][4][4] = team1.players.position5.stolenbases - tempBox[tempBox.length - 1][0][4][4]

        tempBox[tempBox.length - 1][0][5][0] = team1.players.position6.runs - tempBox[tempBox.length - 1][0][5][0]
        tempBox[tempBox.length - 1][0][5][1] = team1.players.position6.hits - tempBox[tempBox.length - 1][0][5][1]
        tempBox[tempBox.length - 1][0][5][2] = team1.players.position6.homeruns - tempBox[tempBox.length - 1][0][5][2]
        tempBox[tempBox.length - 1][0][5][3] = team1.players.position6.rbi - tempBox[tempBox.length - 1][0][5][3]
        tempBox[tempBox.length - 1][0][5][4] = team1.players.position6.stolenbases - tempBox[tempBox.length - 1][0][5][4]

        tempBox[tempBox.length - 1][0][6][0] = team1.players.position7.runs - tempBox[tempBox.length - 1][0][6][0]
        tempBox[tempBox.length - 1][0][6][1] = team1.players.position7.hits - tempBox[tempBox.length - 1][0][6][1]
        tempBox[tempBox.length - 1][0][6][2] = team1.players.position7.homeruns - tempBox[tempBox.length - 1][0][6][2]
        tempBox[tempBox.length - 1][0][6][3] = team1.players.position7.rbi - tempBox[tempBox.length - 1][0][6][3]
        tempBox[tempBox.length - 1][0][6][4] = team1.players.position7.stolenbases - tempBox[tempBox.length - 1][0][6][4]

        tempBox[tempBox.length - 1][0][7][0] = team1.players.position8.runs - tempBox[tempBox.length - 1][0][7][0]
        tempBox[tempBox.length - 1][0][7][1] = team1.players.position8.hits - tempBox[tempBox.length - 1][0][7][1]
        tempBox[tempBox.length - 1][0][7][2] = team1.players.position8.homeruns - tempBox[tempBox.length - 1][0][7][2]
        tempBox[tempBox.length - 1][0][7][3] = team1.players.position8.rbi - tempBox[tempBox.length - 1][0][7][3]
        tempBox[tempBox.length - 1][0][7][4] = team1.players.position8.stolenbases - tempBox[tempBox.length - 1][0][7][4]

        tempBox[tempBox.length - 1][0][8][0] = team1.players.position9.runs - tempBox[tempBox.length - 1][0][8][0]
        tempBox[tempBox.length - 1][0][8][1] = team1.players.position9.hits - tempBox[tempBox.length - 1][0][8][1]
        tempBox[tempBox.length - 1][0][8][2] = team1.players.position9.homeruns - tempBox[tempBox.length - 1][0][8][2]
        tempBox[tempBox.length - 1][0][8][3] = team1.players.position9.rbi - tempBox[tempBox.length - 1][0][8][3]
        tempBox[tempBox.length - 1][0][8][4] = team1.players.position9.stolenbases - tempBox[tempBox.length - 1][0][8][4]




          /// their latest number of strikeouts vs the amount they had prior to their latest game 
        tempBox[tempBox.length - 1][1][0][0] = team2.players.position1.strikeouts - tempBox[tempBox.length - 1][1][0][0]
// .length - 1 = latest match, first [0] = team 1, second [0] = position 1 aka pitcher, third [0] = first attribute aka strikeouts
        tempBox[tempBox.length - 1][1][1][0] = team2.players.position2.runs - tempBox[tempBox.length - 1][1][1][0]
        tempBox[tempBox.length - 1][1][1][1] = team2.players.position2.hits - tempBox[tempBox.length - 1][1][1][1]
        tempBox[tempBox.length - 1][1][1][2] = team2.players.position2.homeruns - tempBox[tempBox.length - 1][1][1][2]
        tempBox[tempBox.length - 1][1][1][3] = team2.players.position2.rbi - tempBox[tempBox.length - 1][1][1][3]
        tempBox[tempBox.length - 1][1][1][4] = team2.players.position2.stolenbases - tempBox[tempBox.length - 1][1][1][4]

        tempBox[tempBox.length - 1][1][2][0] = team2.players.position3.runs - tempBox[tempBox.length - 1][1][2][0]
        tempBox[tempBox.length - 1][1][2][1] = team2.players.position3.hits - tempBox[tempBox.length - 1][1][2][1]
        tempBox[tempBox.length - 1][1][2][2] = team2.players.position3.homeruns - tempBox[tempBox.length - 1][1][2][2]
        tempBox[tempBox.length - 1][1][2][3] = team2.players.position3.rbi - tempBox[tempBox.length - 1][1][2][3]
        tempBox[tempBox.length - 1][1][2][4] = team2.players.position3.stolenbases - tempBox[tempBox.length - 1][1][2][4]

        tempBox[tempBox.length - 1][1][3][0] = team2.players.position4.runs - tempBox[tempBox.length - 1][1][3][0]
        tempBox[tempBox.length - 1][1][3][1] = team2.players.position4.hits - tempBox[tempBox.length - 1][1][3][1]
        tempBox[tempBox.length - 1][1][3][2] = team2.players.position4.homeruns - tempBox[tempBox.length - 1][1][3][2]
        tempBox[tempBox.length - 1][1][3][3] = team2.players.position4.rbi - tempBox[tempBox.length - 1][1][3][3]
        tempBox[tempBox.length - 1][1][3][4] = team2.players.position4.stolenbases - tempBox[tempBox.length - 1][1][3][4]

        tempBox[tempBox.length - 1][1][4][0] = team2.players.position5.runs - tempBox[tempBox.length - 1][1][4][0]
        tempBox[tempBox.length - 1][1][4][1] = team2.players.position5.hits - tempBox[tempBox.length - 1][1][4][1]
        tempBox[tempBox.length - 1][1][4][2] = team2.players.position5.homeruns - tempBox[tempBox.length - 1][1][4][2]
        tempBox[tempBox.length - 1][1][4][3] = team2.players.position5.rbi - tempBox[tempBox.length - 1][1][4][3]
        tempBox[tempBox.length - 1][1][4][4] = team2.players.position5.stolenbases - tempBox[tempBox.length - 1][1][4][4]

        tempBox[tempBox.length - 1][1][5][0] = team2.players.position6.runs - tempBox[tempBox.length - 1][1][5][0]
        tempBox[tempBox.length - 1][1][5][1] = team2.players.position6.hits - tempBox[tempBox.length - 1][1][5][1]
        tempBox[tempBox.length - 1][1][5][2] = team2.players.position6.homeruns - tempBox[tempBox.length - 1][1][5][2]
        tempBox[tempBox.length - 1][1][5][3] = team2.players.position6.rbi - tempBox[tempBox.length - 1][1][5][3]
        tempBox[tempBox.length - 1][1][5][4] = team2.players.position6.stolenbases - tempBox[tempBox.length - 1][1][5][4]

        tempBox[tempBox.length - 1][1][6][0] = team2.players.position7.runs - tempBox[tempBox.length - 1][1][6][0]
        tempBox[tempBox.length - 1][1][6][1] = team2.players.position7.hits - tempBox[tempBox.length - 1][1][6][1]
        tempBox[tempBox.length - 1][1][6][2] = team2.players.position7.homeruns - tempBox[tempBox.length - 1][1][6][2]
        tempBox[tempBox.length - 1][1][6][3] = team2.players.position7.rbi - tempBox[tempBox.length - 1][1][6][3]
        tempBox[tempBox.length - 1][1][6][4] = team2.players.position7.stolenbases - tempBox[tempBox.length - 1][1][6][4]

        tempBox[tempBox.length - 1][1][7][0] = team2.players.position8.runs - tempBox[tempBox.length - 1][1][7][0]
        tempBox[tempBox.length - 1][1][7][1] = team2.players.position8.hits - tempBox[tempBox.length - 1][1][7][1]
        tempBox[tempBox.length - 1][1][7][2] = team2.players.position8.homeruns - tempBox[tempBox.length - 1][1][7][2]
        tempBox[tempBox.length - 1][1][7][3] = team2.players.position8.rbi - tempBox[tempBox.length - 1][1][7][3]
        tempBox[tempBox.length - 1][1][7][4] = team2.players.position8.stolenbases - tempBox[tempBox.length - 1][1][7][4]

        tempBox[tempBox.length - 1][1][8][0] = team2.players.position9.runs - tempBox[tempBox.length - 1][1][8][0]
        tempBox[tempBox.length - 1][1][8][1] = team2.players.position9.hits - tempBox[tempBox.length - 1][1][8][1]
        tempBox[tempBox.length - 1][1][8][2] = team2.players.position9.homeruns - tempBox[tempBox.length - 1][1][8][2]
        tempBox[tempBox.length - 1][1][8][3] = team2.players.position9.rbi - tempBox[tempBox.length - 1][1][8][3]
        tempBox[tempBox.length - 1][1][8][4] = team2.players.position9.stolenbases - tempBox[tempBox.length - 1][1][8][4]
console.log("calc boxscores")
        if (boxes == 1) {
            boxScoreArrOne = tempBox
        } else if (boxes == 2) {
            boxScoreArrTwo = tempBox
        } else if (boxes == 3) {
            boxScoreArrThree = tempBox
        } else if (boxes == 4) {
            boxScoreArrFour = tempBox
        }

}

const matchRepo = (box, game) => {

    let bioContent = null
    
    if (box == 1 || box == 3) {
        bioContent = document.getElementById("cover-right")
    } else {
        bioContent = document.getElementById("cover-left")
    }

    bioContent.innerHTML = ""
    let rowNum = 3
    let color = 0
    let checker = 0
    let characterCount = 0
    let finalPrint = ""
    let clean = ""
    let nameOneVs = ""
    let nameTwoVs = ""

    
    if (box == 1) {
        clean = boxOneMatchUp[0].history.reports[boxOneMatchUp[0].fortune + game - 1]
        nameOneVs = boxOneMatchUp[0].name
        nameTwoVs = boxOneMatchUp[1].name
    } else if (box == 2) {
        clean = boxTwoMatchUp[0].history.reports[boxTwoMatchUp[0].fortune + game - 1]
        nameOneVs = boxTwoMatchUp[0].name
        nameTwoVs = boxTwoMatchUp[1].name
    } else if (box == 3) {
        clean = boxThreeMatchUp[0].history.reports[boxThreeMatchUp[0].fortune + game - 1]
        nameOneVs = boxThreeMatchUp[0].name
        nameTwoVs = boxThreeMatchUp[1].name
    } else if (box == 4) {
        clean = boxFourMatchUp[0].history.reports[boxFourMatchUp[0].fortune + game - 1]
        nameOneVs = boxFourMatchUp[0].name
        nameTwoVs = boxFourMatchUp[1].name
    }

    characterCount = clean.length
    let cleanArr = clean.split(" ")
    //clean = teamPlayers(cleanArr, teams[i]);
    clean = clean.toString()
    console.log(clean)

            for (let j = 0; j < clean.length; j++) {
                if (clean[j] == "I" && clean[j+1] == "n" && clean[j+2] == "n" && rowNum == 3) {
                    rowNum = 1
                    finalPrint += '</font><font color="#CFA00F">' + clean[j]
                    console.log("2")
                } else if (clean[j] == "I" && clean[j+1] == "n" && clean[j+2] == "n") {
                    rowNum = 1
                    color = 0
                    finalPrint += '</font><br><font color="#CFA00F">' + clean[j]
                    console.log("3")
                } else if (isNaN(clean[j]) && rowNum == 1 && clean[j] !== ",") {
                    finalPrint += '<font color="#CFA00F">' + clean[j]
                    console.log("4")
                } else if (isNaN(clean[j]) == false && clean[j+1] !== "n" && clean[j+1] !== "r" && clean[j] !== "," && rowNum !== 3) {
                    rowNum = 2
                    finalPrint += '<font color="#9A7709">' + clean[j]
                    console.log("5")
                } else if (isNaN(clean[j]) && rowNum == 2) {
                    rowNum = 0
                    finalPrint += '</font><font color="#4D3611">' + clean[j]
                    console.log("6")



                } else if (clean[j] == "," && rowNum == 1) {
                    finalPrint += " " + '</font>'
                    console.log("7")
                  //  color == 1 && clean[j+2] !== "t" ? color = 2 : color = 3
                  //  color > 1 && clean[j+1] !== "o" ? color = 0 : color = 3
                } else if (clean[j] == "," && clean[j+1] !== "*") {
                    finalPrint += " "
                    checker >= 1 ? checker++ : checker = 0
                   // color == 1 && clean[j+1] == "s" || clean[j+1] == "d" || clean[j+1] == "t" ? color = 0 : color = 1
                   // color == 1 && clean[j+2] !== "t" ? color = 2 : color = 3
                   // color > 1 && clean[j+1] !== "o" ? color = 0 : color = 3
                    console.log("8")
                } else if (clean[j] == "*") {
                    color = 1
                    checker++
                } else if (color == 1 && clean[j] !== ",") {
                    finalPrint += '<font color="green">' + clean[j] + '</font>'
                    console.log("9")
                } else if (color == 2) {
                    finalPrint += '<font color="#073B6A">' + clean[j] + '</font>'
                    console.log("10")
                    clean[j] == "!" || clean[j] == "." ? color = 0 : color = 2
                } else if (color == 3) {
                    finalPrint += '<font color="#6F230B">' + clean[j] + '</font>'  // <font color="#6F230B">
                    console.log("11")
                    clean[j] == "." ? color = 0 : color = 3
                } else if (color == 0 && clean[j] !== ",") {
                    finalPrint += '<font color="#4D3611">' + clean[j] + '</font>'
                    console.log("12")
                }

                if (color == 1 && checker > 2 && clean[j] == ",") {
                    console.log("BUT WHY")
                    if (clean[j+1] == "d" || clean[j+1] == "t" || clean[j+1] == "h") {
                        color = 2
                     } else if (clean[j+1] == "s" && clean[j+2] == "i" || clean[j+1] == "s" && clean[j+3] == "e") {
                        color = 2
                     } else if (clean[j+1] == "s" && clean[j+3] == "r") {
                         color = 3
                     } else {
                         color = 0
                     }  
                     checker = 0
                }
                
            }

    bioContent.innerHTML += `<div id="match-repo-game">GAME ${game} : ${nameOneVs} vs ${nameTwoVs}</div><button onclick="details(${box}, ${game}, 1)" id="match-repo-boxscore">Box Scores</button>` + `<br><br>` + '<div id="clean">' + finalPrint + '</div>'
    //bioContent.style.padding = "15px"
    //let cleanFont = document.getElementById("clean")
    bioContent.style.fontSize = "medium"
    console.log(characterCount + " <-- # of characters")
    characterCount < 1800 ? console.log("less than 1800") : bioContent.style.height = "115%"
    characterCount < 2200 ? console.log("less than 2200") : bioContent.style.height = "130%"
    characterCount < 2600 ? console.log("less than 2600") : bioContent.style.height = "145%"
    
}

const playoffsOrig = () => {

    rowOne = document.getElementById("first-playoff-row")
    rowTwo = document.getElementById("second-playoff-row")
    rowThree = document.getElementById("third-playoff-row")
    rowFour = document.getElementById("fourth-playoff-row")

    if (playoffSteps == 0) {

        playoffSteps++;

        eaTeam1.wins = 0
        eaTeam2.wins = 0
        eaTeam3.wins = 0
        eaTeam4.wins = 0
        eaTeam5.wins = 0
        eaTeam6.wins = 0
        eaTeam7.wins = 0
        weTeam1.wins = 0
        weTeam2.wins = 0
        weTeam3.wins = 0
        weTeam4.wins = 0
        weTeam5.wins = 0
        weTeam6.wins = 0
        weTeam7.wins = 0

        rowOne.style.display = "block";
        rowThree.style.display = "block";
        rowTwo.style.display = "block";
        rowFour.style.display = "block";

        rowOne.innerHTML += '<table id="game-one-one"><th>BEST OF 5</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
                        eaTeam5.name + "</td><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + "</td><td>1</td></tr><tr><td>" +
                        eaTeam6.name + "</td><td>" + eaTeam6.skill + "</td><td>" + eaTeam6.points + "</td><td>1</td></tr></table>"
        rowTwo.innerHTML += '<table id="game-two-one"><th>BEST OF 5</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
                        eaTeam4.name + "</td><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + "</td><td>1</td></tr><tr><td>" +
                        eaTeam7.name + "</td><td>" + eaTeam7.skill + "</td><td>" + eaTeam7.points + "</td><td>1</td></tr></table>"
        rowThree.innerHTML += '<table id="game-three-one"><th>BEST OF 5</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
                        weTeam7.name + "</td><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + "</td><td>1</td></tr><tr><td>" +
                        weTeam4.name + "</td><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + "</td><td>1</td></tr></table>"
        rowFour.innerHTML += '<table id="game-four-one"><th>BEST OF 5</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
                        weTeam6.name + "</td><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + "</td><td>1</td></tr><tr><td>" +
                        weTeam5.name + "</td><td>" + weTeam5.skill + "</td><td>" + weTeam5.points + "</td><td>1</td></tr></table>"

        updateBracket();

    } else if (playoffSteps == 1) {

        playoffSteps++;

        game(eaTeam5, eaTeam6);
        game(eaTeam4, eaTeam7);
        game(weTeam5, weTeam6);
        game(weTeam4, weTeam7);

        //bestOfFive(1)
        bestOfSeven(1)
        updateBracket();
        console.log("ps1")

    } else if (playoffSteps == 2) {

        playoffSteps++;

        game(eaTeam5, eaTeam6);
        game(eaTeam4, eaTeam7);
        game(weTeam5, weTeam6);
        game(weTeam4, weTeam7);

        //bestOfFive(2)
        bestOfSeven(2)
        updateBracket();
        console.log("ps2")

    } else if (playoffSteps == 3) {

        playoffSteps++;

        game(eaTeam5, eaTeam6);
        game(eaTeam4, eaTeam7);
        game(weTeam5, weTeam6);
        game(weTeam4, weTeam7);

        //bestOfFive(3)
        bestOfSeven(3)
        updateBracket();
        console.log("ps3")

    } else if (playoffSteps == 4) {

        playoffSteps++;

        eaTeam5.wins < 3 && eaTeam6.wins < 3 ? game(eaTeam5, eaTeam6) : console.log('one best of 5 done')
        eaTeam4.wins < 3 && eaTeam7.wins < 3 ? game(eaTeam4, eaTeam7) : console.log('one best of 5 done')
        weTeam5.wins < 3 && weTeam6.wins < 3 ? game(weTeam5, weTeam6) : console.log('one best of 5 done')
        weTeam7.wins < 3 && weTeam4.wins < 3 ? game(weTeam7, weTeam4) : console.log('one best of 5 done')

        //bestOfFive(4)
        bestOfSeven(4)
        updateBracket();
        console.log("ps4")

    } else if (playoffSteps == 5) {

        playoffSteps++;

        eaTeam5.wins < 3 && eaTeam6.wins < 3 ? game(eaTeam5, eaTeam6) : console.log('one best of 5 done')
        eaTeam4.wins < 3 && eaTeam7.wins < 3 ? game(eaTeam4, eaTeam7) : console.log('one best of 5 done')
        weTeam5.wins < 3 && weTeam6.wins < 3 ? game(weTeam5, weTeam6) : console.log('one best of 5 done')
        weTeam7.wins < 3 && weTeam4.wins < 3 ? game(weTeam7, weTeam4) : console.log('one best of 5 done')

        //bestOfFive(5)
        bestOfSeven(5)
        updateBracket();
        
    } else if (playoffSteps == 6) {

        eaTeam4.wins >= 3 ? eaTeam4 = eaTeam4 : eaTeam4 = eaTeam7
        eaTeam5.wins >= 3 ? eaTeam5 = eaTeam5 : eaTeam5 = eaTeam6
        weTeam4.wins >= 3 ? weTeam4 = weTeam4 : weTeam4 = weTeam7
        weTeam5.wins >= 3 ? weTeam5 = weTeam5 : weTeam5 = weTeam6

        eaTeam4.wins = 0
        eaTeam5.wins = 0
        weTeam4.wins = 0
        weTeam5.wins = 0
        eaTeam4.losses = 0
        eaTeam5.losses = 0
        weTeam4.losses = 0
        weTeam5.losses = 0

        rowFour.style.display = "none"
        rowFour.innerHTML = ""
        rowThree.style.display = "none"
        rowThree.innerHTML = ""
        rowTwo.innerHTML = ""
        rowOne.innerHTML = ""

        playoffSteps++;
        updateBracketTwo();

    } else if (playoffSteps == 7) {

        playoffSteps++;

        rowOne.innerHTML += '<table id="game-one-one"><th>BEST OF 5</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
        eaTeam5.name + "</td><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + "</td><td>1</td></tr><tr><td>" +
        eaTeam4.name + "</td><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + "</td><td>1</td></tr></table>"
        rowTwo.innerHTML += '<table id="game-two-one"><th>BEST OF 5</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
        weTeam4.name + "</td><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + "</td><td>1</td></tr><tr><td>" +
        weTeam5.name + "</td><td>" + weTeam5.skill + "</td><td>" + weTeam5.points + "</td><td>1</td></tr></table>"

    } else if (playoffSteps == 8) {

        playoffSteps++;

        game(eaTeam4, eaTeam5);
        game(weTeam4, weTeam5);

        //bestOfFiveTwo(1)
        bestOfFiveAdv(1)
        updateBracketTwo();

    } else if (playoffSteps == 9) {
        
        playoffSteps++;

        game(eaTeam4, eaTeam5);
        game(weTeam4, weTeam5);

        //bestOfFiveTwo(2)
        bestOfFiveAdv(2)
        updateBracketTwo();

    } else if (playoffSteps == 10) {
        
        playoffSteps++;

        game(eaTeam4, eaTeam5);
        game(weTeam4, weTeam5);

        //bestOfFiveTwo(3)
        bestOfFiveAdv(3)
        updateBracketTwo();

    } else if (playoffSteps == 11) {
        
        playoffSteps++;

        eaTeam5.wins < 3 && eaTeam4.wins < 3 ? game(eaTeam4, eaTeam5) : console.log('one best of 5 done')
        weTeam5.wins < 3 && weTeam4.wins < 3 ? game(weTeam4, weTeam5) : console.log('one best of 5 done')

        //bestOfFiveTwo(4)
        bestOfFiveAdv(4)
        updateBracketTwo();

    } else if (playoffSteps == 12) {
        
        playoffSteps++;

        eaTeam5.wins < 3 && eaTeam4.wins < 3 ? game(eaTeam4, eaTeam5) : console.log('one best of 5 done')
        weTeam5.wins < 3 && weTeam4.wins < 3 ? game(weTeam4, weTeam5) : console.log('one best of 5 done')

        //bestOfFiveTwo(5)
        bestOfFiveAdv(5)
        updateBracketTwo();

    } else if (playoffSteps == 13) {

        eaTeam4.wins >= 3 ? eaTeam4 = eaTeam4 : eaTeam4 = eaTeam5
        weTeam4.wins >= 3 ? weTeam4 = weTeam4 : weTeam4 = weTeam5

        eaTeam4.wins = 0
        weTeam4.wins = 0

        rowOne.style.display = "none"
        rowOne.innerHTML = ""
        rowTwo.style.display = "none"
        rowTwo.innerHTML = ""

        playoffSteps++;
        updateBracketThree(eaTeam4, weTeam4);

    } else if (playoffSteps == 14) {

        cleanBracket();
        
        playoffSteps++;

    } else if (playoffSteps == 15) {

        playoffSteps++;

        eaTeam4.wins = 0
        weTeam4.wins = 0
        eaTeam4.losses = 0
        weTeam4.losses = 0

        finalStretch = 1

        rowOne.style.display = "block"
        rowOne.innerHTML = ""
        rowTwo.style.display = "block"
        rowTwo.innerHTML = ""
        rowThree.style.display = "block"
        rowThree.innerHTML = ""
        rowFour.style.display = "block"
        rowFour.innerHTML = ""

        rowOne.innerHTML += '<table id="game-one-one"><th>BEST OF 7</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
                        eaTeam1.name + "</td><td>" + eaTeam1.skill + "</td><td>" + eaTeam1.points + "</td><td>1</td></tr><tr><td>" +
                        eaTeam4.name + "</td><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + "</td><td>1</td></tr></table>"
        rowTwo.innerHTML += '<table id="game-two-one"><th>BEST OF 7</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
                        eaTeam2.name + "</td><td>" + eaTeam2.skill + "</td><td>" + eaTeam2.points + "</td><td>1</td></tr><tr><td>" +
                        eaTeam3.name + "</td><td>" + eaTeam3.skill + "</td><td>" + eaTeam3.points + "</td><td>1</td></tr></table>"
        rowThree.innerHTML += '<table id="game-three-one"><th>BEST OF 7</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
                        weTeam3.name + "</td><td>" + weTeam3.skill + "</td><td>" + weTeam3.points + "</td><td>1</td></tr><tr><td>" +
                        weTeam2.name + "</td><td>" + weTeam2.skill + "</td><td>" + weTeam2.points + "</td><td>1</td></tr></table>"
        rowFour.innerHTML += '<table id="game-four-one"><th>BEST OF 7</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
                        weTeam4.name + "</td><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + "</td><td>1</td></tr><tr><td>" +
                        weTeam1.name + "</td><td>" + weTeam1.skill + "</td><td>" + weTeam1.points + "</td><td>1</td></tr></table>" 
                        
        eaTeam5 = eaTeam1
        eaTeam6 = eaTeam4
        eaTeam4 = eaTeam2
        eaTeam7 = eaTeam3

        weTeam6 = weTeam4
        weTeam5 = weTeam1
        weTeam7 = weTeam3
        weTeam4 = weTeam2
        
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 16) {

        playoffSteps++;

        game(eaTeam5, eaTeam6);
        game(eaTeam4, eaTeam7);
        game(weTeam6, weTeam5);
        game(weTeam7, weTeam4);

        bestOfSeven(1)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 17) {

        playoffSteps++;

        game(eaTeam5, eaTeam6);
        game(eaTeam4, eaTeam7);
        game(weTeam6, weTeam5);
        game(weTeam7, weTeam4);

        bestOfSeven(2)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 18) {

        playoffSteps++;

        game(eaTeam5, eaTeam6);
        game(eaTeam4, eaTeam7);
        game(weTeam6, weTeam5);
        game(weTeam7, weTeam4);

        bestOfSeven(3)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 19) {

        playoffSteps++;

        game(eaTeam5, eaTeam6);
        game(eaTeam4, eaTeam7);
        game(weTeam6, weTeam5);
        game(weTeam7, weTeam4);

        bestOfSeven(4)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 20) {

        playoffSteps++;

        eaTeam5.wins < 4 && eaTeam6.wins < 4 ? game(eaTeam5, eaTeam6) : console.log('one best of 7 done')
        eaTeam4.wins < 4 && eaTeam7.wins < 4 ? game(eaTeam4, eaTeam7) : console.log('one best of 7 done')
        weTeam6.wins < 4 && weTeam5.wins < 4 ? game(weTeam6, weTeam5) : console.log('one best of 7 done')
        weTeam7.wins < 4 && weTeam4.wins < 4 ? game(weTeam7, weTeam4) : console.log('one best of 7 done')

        bestOfSeven(5)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 21) {

        playoffSteps++;

        eaTeam5.wins < 4 && eaTeam6.wins < 4 ? game(eaTeam5, eaTeam6) : console.log('one best of 7 done')
        eaTeam4.wins < 4 && eaTeam7.wins < 4 ? game(eaTeam4, eaTeam7) : console.log('one best of 7 done')
        weTeam6.wins < 4 && weTeam5.wins < 4 ? game(weTeam6, weTeam5) : console.log('one best of 7 done')
        weTeam7.wins < 4 && weTeam4.wins < 4 ? game(weTeam7, weTeam4) : console.log('one best of 7 done')

        bestOfSeven(6)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 22) {

        playoffSteps++;

        eaTeam5.wins < 4 && eaTeam6.wins < 4 ? game(eaTeam5, eaTeam6) : console.log('one best of 7 done')
        eaTeam4.wins < 4 && eaTeam7.wins < 4 ? game(eaTeam4, eaTeam7) : console.log('one best of 7 done')
        weTeam6.wins < 4 && weTeam5.wins < 4 ? game(weTeam6, weTeam5) : console.log('one best of 7 done')
        weTeam7.wins < 4 && weTeam4.wins < 4 ? game(weTeam7, weTeam4) : console.log('one best of 7 done')

        bestOfSeven(7)
        updateBracketFour(eaTeam5, eaTeam6, eaTeam4, eaTeam7, weTeam7, weTeam4, weTeam6, weTeam5)

    } else if (playoffSteps == 23) {
        /// adjust accordingly
        eaTeam5.wins >= 4 ? eaTeam5 = eaTeam5 : eaTeam5 = eaTeam6
        eaTeam4.wins >= 4 ? eaTeam4 = eaTeam4 : eaTeam4 = eaTeam7
        weTeam4.wins >= 4 ? weTeam4 = weTeam4 : weTeam4 = weTeam7
        weTeam5.wins >= 4 ? weTeam5 = weTeam5 : weTeam5 = weTeam6

        eaTeam4.wins = 0
        eaTeam5.wins = 0
        weTeam4.wins = 0
        weTeam5.wins = 0
        eaTeam4.losses = 0
        eaTeam5.losses = 0
        weTeam4.losses = 0
        weTeam5.losses = 0

        rowFour.style.display = "none"
        rowFour.innerHTML = ""
        rowThree.style.display = "none"
        rowThree.innerHTML = ""
        rowTwo.innerHTML = ""
        rowOne.innerHTML = ""

        rowOne.innerHTML += '<table id="game-one-one"><th>BEST OF 7</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
        eaTeam5.name + "</td><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + "</td><td>1</td></tr><tr><td>" +
        eaTeam4.name + "</td><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + "</td><td>1</td></tr></table>"
        rowTwo.innerHTML += '<table id="game-two-one"><th>BEST OF 7</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
        weTeam4.name + "</td><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + "</td><td>1</td></tr><tr><td>" +
        weTeam5.name + "</td><td>" + weTeam5.skill + "</td><td>" + weTeam5.points + "</td><td>1</td></tr></table>"

        playoffSteps++;
        updateBracketTwo();
    } else if (playoffSteps == 24) {
    
        playoffSteps++;

        game(eaTeam4, eaTeam5);
        game(weTeam4, weTeam5);

        //bestOfFiveTwo(3)
        bestOfFiveAdv(1)
        updateBracketTwo();
    } else if (playoffSteps == 25) {
    
        playoffSteps++;

        game(eaTeam4, eaTeam5);
        game(weTeam4, weTeam5);

        //bestOfFiveTwo(3)
        bestOfFiveAdv(2)
        updateBracketTwo();
    } else if (playoffSteps == 26) {
    
        playoffSteps++;

        game(eaTeam4, eaTeam5);
        game(weTeam4, weTeam5);

        //bestOfFiveTwo(3)
        bestOfFiveAdv(3)
        updateBracketTwo();
    } else if (playoffSteps == 27) {
    
        playoffSteps++;

        game(eaTeam4, eaTeam5);
        game(weTeam4, weTeam5);

        //bestOfFiveTwo(3)
        bestOfFiveAdv(4)
        updateBracketTwo();
    } else if (playoffSteps == 28) {

        playoffSteps++;

        eaTeam5.wins < 4 && eaTeam4.wins < 4 ? game(eaTeam4, eaTeam5) : console.log('one best of 7 done')
        weTeam5.wins < 4 && weTeam4.wins < 4 ? game(weTeam4, weTeam5) : console.log('one best of 7 done')

        //bestOfFiveTwo(4)
        bestOfFiveAdv(5)
        updateBracketTwo();
    } else if (playoffSteps == 29) {

        playoffSteps++;

        eaTeam5.wins < 4 && eaTeam4.wins < 4 ? game(eaTeam4, eaTeam5) : console.log('one best of 7 done')
        weTeam5.wins < 4 && weTeam4.wins < 4 ? game(weTeam4, weTeam5) : console.log('one best of 7 done')

        //bestOfFiveTwo(4)
        bestOfFiveAdv(6)
        updateBracketTwo();
    } else if (playoffSteps == 30) {

        playoffSteps++;

        eaTeam5.wins < 4 && eaTeam4.wins < 4 ? game(eaTeam4, eaTeam5) : console.log('one best of 7 done')
        weTeam5.wins < 4 && weTeam4.wins < 4 ? game(weTeam4, weTeam5) : console.log('one best of 7 done')

        //bestOfFiveTwo(4)
        bestOfFiveAdv(7)
        updateBracketTwo();
    } else if (playoffSteps == 31) {

        //eaTeam4.wins >= 3 ? eaTeam4 = eaTeam4 : eaTeam4 = eaTeam5
        //weTeam4.wins >= 3 ? weTeam4 = weTeam4 : weTeam4 = weTeam5
        eaTeam4.wins >= 4 ? eaTeam1 = eaTeam4 : eaTeam1 = eaTeam5
        weTeam4.wins >= 4 ? weTeam1 = weTeam4 : weTeam1 = weTeam5

        eaTeam1.wins = 0
        weTeam1.wins = 0
        weTeam1.losses = 0
        eaTeam1.losses = 0

        rowOne.innerHTML = ""
        rowTwo.style.display = "none"
        rowTwo.innerHTML = ""

        finalStretch = 2

        playoffSteps++;
        updateBracketThree(eaTeam1, weTeam1);
    } else if (playoffSteps == 32) {

        rowOne.innerHTML += '<table id="game-one-one"><th>BEST OF 7</th><th>S</th><th>P</th><th>G</th>' + "<tr><td>" +
        eaTeam1.name + "</td><td>" + eaTeam1.skill + "</td><td>" + eaTeam1.points + "</td><td>1</td></tr><tr><td>" +
        weTeam1.name + "</td><td>" + weTeam1.skill + "</td><td>" + weTeam1.points + "</td><td>1</td></tr></table>"

        playoffSteps++;
    } else if (playoffSteps == 33) {

        playoffSteps++;

        game(eaTeam1, weTeam1);
        bestOfEnd(1)
        updateBracketThree(eaTeam1, weTeam1);
    } else if (playoffSteps == 34) {

        playoffSteps++;
        
        game(eaTeam1, weTeam1);
        bestOfEnd(2)
        updateBracketThree(eaTeam1, weTeam1);
    } else if (playoffSteps == 35) {

        playoffSteps++;
        
        game(eaTeam1, weTeam1);
        bestOfEnd(3)
        updateBracketThree(eaTeam1, weTeam1);
    } else if (playoffSteps == 36) {

        playoffSteps++;
        
        game(eaTeam1, weTeam1);
        bestOfEnd(4)
        updateBracketThree(eaTeam1, weTeam1);
    } else if (playoffSteps == 37) {

        playoffSteps++;

        eaTeam1.wins < 4 && weTeam1.wins < 4 ? game(eaTeam1, weTeam1) : console.log('one best of 7 done')

        bestOfEnd(5)
        updateBracketThree(eaTeam1, weTeam1);
    } else if (playoffSteps == 38) {

        playoffSteps++;

        eaTeam1.wins < 4 && weTeam1.wins < 4 ? game(eaTeam1, weTeam1) : console.log('one best of 7 done')
        
        bestOfEnd(6)
        updateBracketThree(eaTeam1, weTeam1);
    } else if (playoffSteps == 39) {

        playoffSteps++;

        eaTeam1.wins < 4 && weTeam1.wins < 4 ? game(eaTeam1, weTeam1) : console.log('one best of 7 done')
        
        bestOfEnd(7)
        updateBracketThree(eaTeam1, weTeam1);
    } else if (playoffSteps == 40) {

        let winnerWin = document.getElementById("winner-spot")
        eaTeam1.wins >= 4 ? winnerWin.innerHTML = `${eaTeam1.name.toUpperCase()}<br><font>CHAMPIONS</font>` : winnerWin.innerHTML = `${weTeam1.name.toUpperCase()}<br><font>CHAMPIONS</font>`
        let playoffButtonAppear = document.getElementById("playoff-button")
        document.getElementById("playoff-button-two").style.display = "none"
        playoffButtonAppear.style.display = "none"
        winnerWin.style.display = "inline-block";
        winnerWin.style.fontSize = "xx-large"
        winnerWin.style.fontWeight = "900"
        let colorBoom = document.getElementById("bracket-color")

        if (winnerWin.innerHTML.split("<br><font>")[0] == playerOne.toUpperCase()) {
            colorBoom.style.backgroundColor = "#6F2727"
        } else if (winnerWin.innerHTML.split("<br><font>")[0] == playerTwo.toUpperCase()) {
            colorBoom.style.backgroundColor = "#137283"
        } else if (winnerWin.innerHTML.split("<br><font>")[0] == playerThree.toUpperCase()) {
            colorBoom.style.backgroundColor = "#6fa578"
        } else if (winnerWin.innerHTML.split("<br><font>")[0] == playerFour.toUpperCase()) {
            colorBoom.style.backgroundColor = "#665F08"
        } else {
            colorBoom.style.backgroundColor = "#56495A"
        }
        

    }
}



const bestOfFiveTwo = (game) => {

    let c = 0
    game == 1 ? c = 3 : c = 2

    if (eaTeam4.losses < 99 && eaTeam5.losses < 99) {
        if (eaTeam4.wins >= 3) {
            if (game == 3) {
                console.log("1")
                colorCell = document.getElementById("game-one-three")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 4) {
                console.log("2")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("3")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            eaTeam5.losses = 99
        } else if (eaTeam5.wins >= 3) {
            if (game == 3) {
                console.log("4")
                colorCell = document.getElementById("game-one-three")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 4) {
                console.log("5")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {
                console.log("6")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            eaTeam4.losses = 99
        }
    }

    if (weTeam4.losses < 99 && weTeam5.losses < 99) {
        if (weTeam5.wins >= 3) {
            if (game == 3) {
                console.log("1")
                colorCell = document.getElementById("game-two-three")
                colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 4) {
                console.log("2")
                colorCell = document.getElementById("game-two-four")
                colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("3")
                colorCell = document.getElementById("game-two-five")
                colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            weTeam4.losses = 99
        } else if (weTeam4.wins >= 3) {
            if (game == 3) {
                console.log("4")
                colorCell = document.getElementById("game-two-three")
                colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 4) {
                console.log("5")
                colorCell = document.getElementById("game-two-four")
                colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {
                console.log("6")
                colorCell = document.getElementById("game-two-five")
                colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            weTeam5.losses = 99
        }
    }


    if (eaTeam4.wins < 3 && eaTeam5.wins < 3) {

        if (game == 1) {
            colorCell = "game-one-one"
            rowOne.innerHTML += '<table id="game-one-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("a")
        } else if (game == 2) {
            colorCell = "game-one-two"
            rowOne.innerHTML += '<table id="game-one-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("b")
        } else if (game == 3) {
            colorCell = "game-one-three"
            rowOne.innerHTML += '<table id="game-one-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("c")
        } else if (game == 4) {
            colorCell = "game-one-four"
            rowOne.innerHTML += '<table id="game-one-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("d")
        } else if (game == 5) {
            colorCell = "game-one-five"
            console.log("e")
        }

        if (eaTeam5.history.gains[eaTeam5.history.gains.length - 1] > 0) {
            colorCell = document.getElementById(colorCell)
            colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
            console.log("f")
        } else {
            colorCell = document.getElementById(colorCell)
            colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
            console.log("g")
        }
    } else {
        if (eaTeam5.wins > 2) {
            colorCell = document.getElementById("game-one-one")
            colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
            console.log("h")
        } else {
            colorCell = document.getElementById("game-one-one")
            colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
            console.log("i")
        }
    }

    if (weTeam5.wins < 3 && weTeam4.wins < 3) {

        if (game == 1) {
            colorCell = "game-two-one"
            rowTwo.innerHTML += '<table id="game-two-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        } else if (game == 2) {
            colorCell = "game-two-two"
            rowTwo.innerHTML += '<table id="game-two-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        } else if (game == 3) {
            colorCell = "game-two-three"
            rowTwo.innerHTML += '<table id="game-two-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        } else if (game == 4) {
            colorCell = "game-two-four"
            rowTwo.innerHTML += '<table id="game-two-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        } else if (game == 5) {
            colorCell = "game-two-five"
        }

        if (weTeam4.history.gains[weTeam4.history.gains.length - 1] > 0) {
            colorCell = document.getElementById(colorCell)
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
        } else {
            colorCell = document.getElementById(colorCell)
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
        }
    } else {
        if (weTeam4.wins > 2) {
            colorCell = document.getElementById("game-two-one")
            colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        } else {
            colorCell = document.getElementById("game-two-one")
            colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        }
    }
}


const updateBracket = () => {

    let seriesWins = document.getElementById("left-one")
    seriesWins.innerHTML = `${eaTeam5.name} <font>(${eaTeam5.wins} - ${eaTeam6.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("left-two")
    seriesWins.innerHTML = `${eaTeam6.name} <font>(${eaTeam6.wins} - ${eaTeam5.wins})</font>`
    colorBracketSpot(seriesWins)

    seriesWins = document.getElementById("left-three")
    seriesWins.innerHTML = `${eaTeam4.name} <font>(${eaTeam4.wins} - ${eaTeam7.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("left-four")
    seriesWins.innerHTML = `${eaTeam7.name} <font>(${eaTeam7.wins} - ${eaTeam4.wins})</font>`
    colorBracketSpot(seriesWins)

    seriesWins = document.getElementById("right-one")
    seriesWins.innerHTML = `${weTeam7.name} <font>(${weTeam7.wins} - ${weTeam4.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("right-two")
    seriesWins.innerHTML = `${weTeam4.name} <font>(${weTeam4.wins} - ${weTeam7.wins})</font>`
    colorBracketSpot(seriesWins)

    seriesWins = document.getElementById("right-three")
    seriesWins.innerHTML = `${weTeam6.name} <font>(${weTeam6.wins} - ${weTeam5.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("right-four")
    seriesWins.innerHTML = `${weTeam5.name} <font>(${weTeam5.wins} - ${weTeam6.wins})</font>`
    colorBracketSpot(seriesWins)


     // .fontWeight = "900";  playerOne   .style.color = "#FF0000";  
     //playerThree   .style.color = "#008080"   playerTwo .style.color = "#00BFFF";  
    // playerFour  "#ffa500";
}

const updateBracketTwo = () => {

    let seriesWins = document.getElementById("left-five")
    seriesWins.innerHTML = `${eaTeam5.name} <font>(${eaTeam5.wins} - ${eaTeam4.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("left-six")
    seriesWins.innerHTML = `${eaTeam4.name} <font>(${eaTeam4.wins} - ${eaTeam5.wins})</font>`
    colorBracketSpot(seriesWins)

    seriesWins = document.getElementById("right-five")
    seriesWins.innerHTML = `${weTeam4.name} <font>(${weTeam4.wins} - ${weTeam5.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("right-six")
    seriesWins.innerHTML = `${weTeam5.name} <font>(${weTeam5.wins} - ${weTeam4.wins})</font>`
    colorBracketSpot(seriesWins)
}

const updateBracketThree = (team1, team2) => {

    let seriesWins = document.getElementById("left-seven")
    seriesWins.innerHTML = `${team1.name} <font>(${team1.wins} - ${team2.wins})</font>`
    finalStretch < 2 ? seriesWins.style.fontSize = "large" : console.log("change later?")
    //finalStretch < 2 ? seriesWins.style.fontSize = "large" : seriesWins.style.fontSize = "x-large" 
    //finalStretch < 2 ? console.log("keep padding") : seriesWins.style.paddingTop = "50%";
    colorBracketSpot(seriesWins)

    seriesWins = document.getElementById("right-seven")
    seriesWins.innerHTML = `${team2.name} <font>(${team2.wins} - ${team1.wins})</font>`
    finalStretch < 2 ? seriesWins.style.fontSize = "large" : console.log("change later?")
    //finalStretch < 2 ? seriesWins.style.fontSize = "large" : seriesWins.style.fontSize = "x-large" 
    colorBracketSpot(seriesWins)
}

const updateBracketFour = (team1, team2, team3, team4, team5, team6, team7, team8) => {

    let seriesWins = document.getElementById("left-one")
    seriesWins.innerHTML = `${team1.name} <font>(${team1.wins} - ${team2.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("left-two")
    seriesWins.innerHTML = `${team2.name} <font>(${team2.wins} - ${team1.wins})</font>`
    colorBracketSpot(seriesWins)

    seriesWins = document.getElementById("left-three")
    seriesWins.innerHTML = `${team3.name} <font>(${team3.wins} - ${team4.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("left-four")
    seriesWins.innerHTML = `${team4.name} <font>(${team4.wins} - ${team3.wins})</font>`
    colorBracketSpot(seriesWins)

    seriesWins = document.getElementById("right-one")
    seriesWins.innerHTML = `${team5.name} <font>(${team5.wins} - ${team6.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("right-two")
    seriesWins.innerHTML = `${team6.name} <font>(${team6.wins} - ${team5.wins})</font>`
    colorBracketSpot(seriesWins)

    seriesWins = document.getElementById("right-three")
    seriesWins.innerHTML = `${team7.name} <font>(${team7.wins} - ${team8.wins})</font>`
    colorBracketSpot(seriesWins)
    seriesWins = document.getElementById("right-four")
    seriesWins.innerHTML = `${team8.name} <font>(${team8.wins} - ${team7.wins})</font>`
    colorBracketSpot(seriesWins)
}

const colorBracketSpot = (bracket) => {

    if (bracket.innerText.split(" ")[0] == playerOne) {
        bracket.style.color = "#FF0000";
        bracket.style.fontWeight = "900";
    } else if (bracket.innerText.split(" ")[0] == playerTwo) {
        bracket.style.color = "#00BFFF";
        bracket.style.fontWeight = "900";
    } else if (bracket.innerText.split(" ")[0] == playerThree) {
        bracket.style.color = "#008080";
        bracket.style.fontWeight = "900";
    } else if (bracket.innerText.split(" ")[0] == playerFour) {
        bracket.style.color = "#ffa500";
        bracket.style.fontWeight = "900";
    } else {
        bracket.style.color = "black";
        bracket.style.fontWeight = "normal";
    }

}


const cleanBracket = () => {

    let newBrack = document.getElementById("left-seven");
        newBrack.innerText = "";
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("left-six");
        newBrack.innerText = "";
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("left-five");
        newBrack.innerText = "";
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("left-four");
        newBrack.innerText = eaTeam3.name;
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("left-three");
        newBrack.innerText = eaTeam2.name;
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("left-two");
        newBrack.innerText = eaTeam4.name;
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("left-one");
        newBrack.innerText = eaTeam1.name;
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"

        newBrack = document.getElementById("right-seven");
        newBrack.innerText = "";
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("right-six");
        newBrack.innerText = "";
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("right-five");
        newBrack.innerText = "";
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("right-four");
        newBrack.innerText = weTeam1.name;
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("right-three");
        newBrack.innerText = weTeam4.name;
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("right-two");
        newBrack.innerText = weTeam2.name;
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
        newBrack = document.getElementById("right-one");
        newBrack.innerText = weTeam3.name;
        newBrack.style.color = "black"
        newBrack.style.fontWeight = "normal"
}




// " + eaTeam6.history.gains[eaTeam6.history.gains.length - 1] + "

//// R E G U L A R      S E A S O N ////









const removeSchedules = (t1, t2) => {

    console.log(t1.number + " is team 1")
    console.log(t2.number + " is team 2")

    select2 = (just) => { return just == t1.number }
    select3 = (just) => { return just == t2.number }
    select4 = (just) => { return just == 0 }

    if (zero == 1) {
        cut5 = t2.games.splice(0, 1)
        cut4 = t1.games.splice(0, 1)
        cut5 = sched.findIndex(select4)
        cut4 = sched.splice(cut5, 1)
        cut5 = sched.findIndex(select2)
        cut4 = sched.splice(cut5, 1)
        cut5 = sched2.findIndex(select3)
        cut4 = sched2.splice(cut5, 1)
        zero = 0
        console.log("remove0")
    } else if (t1.conference && t2.conference == "Eastern") {
        cut5 = t2.games.findIndex(select2)
        cut3 = t2.games.splice(cut5, 1)
        cut4 = t1.games.findIndex(select3)
        cut3 = t1.games.splice(cut4, 1)
        cut5 = sched.findIndex(select2)
        cut4 = sched.splice(cut5, 1)
        cut5 = sched.findIndex(select3)
        cut4 = sched.splice(cut5, 1)
        console.log("remove1")
    } else if (t1.conference && t2.conference == "Western") {
        cut5 = t2.games.findIndex(select2)
        cut3 = t2.games.splice(cut5, 1)  
        cut4 = t1.games.findIndex(select3)
        cut3 = t1.games.splice(cut4, 1)
        cut5 = sched2.findIndex(select2)
        cut4 = sched2.splice(cut5, 1)   
        cut5 = sched2.findIndex(select3)
        cut4 = sched2.splice(cut5, 1)
        console.log("remove2")
    }
};

const game = (t1, t2) => {

    removeSchedules(t1, t2);

    score = Math.floor(Math.random() * 12)
    score2 = Math.floor(Math.random() * 32)

    let oneDiff = t1.skill - t2.skill;
    let twoDiff = t2.skill - t1.skill;
 

    if (t1.skill > t2.skill) {
        diff = t1.skill - t2.skill;
       // return diff;
    } else if (t2.skill > t1.skill) {
        diff = t2.skill - t1.skill;
       // return diff;
    }

    cut5 = 0

    if (t1.skill == t2.skill) {
        adv = 0
        if (score <= 5) {
          console.log('1')
          perf(t1, t2)
          t1.points += cut5 + 35
          t1.history.gains.push(cut5 + 35)
          t1.history.matches.push(`W vs ${t2.name}, D:0`)
          t1.wins += 1
          t2.points -= 35
          t2.history.gains.push(0 - 35)
          t2.history.matches.push(`L to ${t1.name}, D:0`)
          t2.losses += 1
        } else {
          console.log('2')
          perf(t1, t2)
          t2.points += cut5 + 35
          t2.history.gains.push(cut5 + 35)
          t2.history.matches.push(`W vs ${t1.name}, D:0`)
          t2.wins += 1
          t1.points -= 35
          t1.history.gains.push(0 - 35)
          t1.history.matches.push(`L to ${t2.name}, D:0`)
          t1.losses += 1
        }
    } else if (t1.skill > t2.skill) {
        adv = 1
        if (diff == 1) {
            if (score <=6) {
                console.log('3')
                perf(t1, t2)
                t1.points += cut5 + 30
                t1.history.gains.push(cut5 + 30)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t1.fortune += diff
                t1.wins += 1
                t2.points -= 30
                t2.history.gains.push(0 - 30)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t2.losses += 1
            } else if (score > 6) {
                console.log('4')
                perf(t1, t2)
                t1.points -= 45
                t1.history.gains.push(0 - 45)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t1.fortune -= diff
                t1.losses += 1
                t2.points += cut5 + 45
                t2.history.gains.push(cut5 + 45)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t2.wins +=1
            }
        } else if (diff == 2) {
            if (score <=7) {
                console.log('5')
                perf(t1, t2)
                t1.points += cut5 + 25
                t1.history.gains.push(cut5 + 25)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t1.fortune += diff
                t1.wins += 1
                t2.points -= 25
                t2.history.gains.push(0 - 25)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t2.losses += 1
            } else if (score > 7) {
                console.log('6')
                perf(t1, t2)
                t1.points -= 55
                t1.history.gains.push(0 - 55)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t1.fortune -= diff
                t1.losses += 1
                t2.points += cut5 + 55
                t2.history.gains.push(cut5 + 55)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t2.wins += 1
            }
        } else if (diff == 3) {
            if (score <=8) {
                console.log('7')
                perf(t1, t2)
                t1.points += cut5 + 20
                t1.wins += 1
                t2.points -= 20
                t2.losses += 1
                t1.history.gains.push(cut5 + 20)
                t2.history.gains.push(0 - 20)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            } else if (score > 8) {
                console.log('8')
                perf(t1, t2)
                t1.points -= 65
                t1.losses += 1
                t2.points += cut5 + 65
                t2.wins += 1
                t1.history.gains.push(0 - 65)
                t2.history.gains.push(cut5 + 65)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t1.fortune -= diff
            }
        } else if (diff == 4) {
            if (score <=9) {
                console.log('9')
                perf(t1, t2)
                t1.points += cut5 + 15
                t1.wins += 1
                t2.points -= 15
                t2.losses += 1
                t1.history.gains.push(cut5 + 15)
                t2.history.gains.push(0 - 15)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            } else if (score > 9) {
                console.log('10')
                perf(t1, t2)
                t1.points -= 75
                t1.losses += 1
                t2.points += cut5 + 75
                t2.wins += 1
                t1.history.gains.push(0 - 75)
                t2.history.gains.push(cut5 + 75)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t1.fortune -= diff
            }
        } else if (diff == 5) {
            if (score2 <=28) {
                console.log('11')
                perf(t1, t2)
                t1.points += cut5 + 10
                t1.wins += 1
                t2.points -= 10
                t2.losses += 1
                t1.history.gains.push(cut5 + 10)
                t2.history.gains.push(0 - 10)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            } else if (score2 > 28) {
                console.log('12')
                perf(t1, t2)
                t1.points -= 85
                t1.losses += 1
                t2.points += cut5 + 85
                t2.wins += 1
                t1.history.gains.push(0 - 85)
                t2.history.gains.push(cut5 + 85)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t1.fortune -= diff
            } 
        } else if (diff >= 6) {
            if (score2 <= 29) {
                console.log('13')
                perf(t1, t2)
                t1.points += cut5 + 5
                t1.wins += 1
                t2.points -= 5
                t2.losses += 1
                t1.history.gains.push(cut5 + 5)
                t2.history.gains.push(0 - 5)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            } else if (score2 > 29) {
                console.log('14')
                perf(t1, t2)
                t1.points -= 95
                t1.losses += 1
                t2.points += cut5 + 95
                t2.wins += 1
                t1.history.gains.push(0 - 95)
                t2.history.gains.push(cut5 + 95)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t1.fortune -= diff
            }
        }
    } else if (t2.skill > t1.skill) {
        adv = 2
        if (diff == 1) {
            if (score <=6) {
                console.log('15')
                perf(t1, t2)
                t2.points += cut5 + 30
                t2.wins += 1
                t1.points -= 30
                t1.losses += 1
                t2.history.gains.push(cut5 + 30)
                t1.history.gains.push(0 - 30)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t1.fortune -= diff
            } else if (score > 6) {
                console.log('16')
                perf(t1, t2)
                t2.points -= 45
                t2.losses += 1
                t1.points += cut5 + 45
                t1.wins += 1
                t2.history.gains.push(0 - 45)
                t1.history.gains.push(cut5 + 45)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            }
        } else if (diff == 2) {
            if (score <=7) {
                console.log('17')
                perf(t1, t2)
                t2.points += cut5 + 25
                t2.wins += 1
                t1.points -= 25
                t1.losses += 1
                t2.history.gains.push(cut5 + 25)
                t1.history.gains.push(0 - 25)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t1.fortune -= diff
            } else if (score > 7) {
                console.log('18')
                perf(t1, t2)
                t2.points -= 55
                t2.losses += 1
                t1.points += cut5 + 55
                t1.wins += 1
                t2.history.gains.push(0 - 55)
                t1.history.gains.push(cut5 + 55)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            }
        } else if (diff == 3) {
            if (score <=8) {
                console.log('19')
                perf(t1, t2)
                t2.points += cut5 + 20
                t2.wins += 1
                t1.points -= 20
                t1.losses += 1
                t2.history.gains.push(cut5 + 20)
                t1.history.gains.push(0 - 20)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            } else if (score > 8) {
                console.log('20')
                perf(t1, t2)
                t2.points -= 65
                t2.losses += 1
                t1.points += cut5 + 65
                t1.wins += 1
                t2.history.gains.push(0 - 65)
                t1.history.gains.push(cut5 + 65)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            }
        } else if (diff == 4) {
            if (score <=9) {
                console.log('21')
                perf(t1, t2)
                t2.points += cut5 + 15
                t2.wins += 1
                t1.points -= 15
                t1.losses += 1
                t2.history.gains.push(cut5 + 15)
                t1.history.gains.push(0 - 15)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t1.fortune -= diff
            } else if (score > 9) {
                console.log('22')
                perf(t1, t2)
                t2.points -= 75
                t2.losses += 1
                t1.points += cut5 + 75
                t1.wins += 1
                t2.history.gains.push(0 - 75)
                t1.history.gains.push(cut5 + 75)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            }
        } else if (diff == 5) {
            if (score2 <=28) {
                console.log('23')
                perf(t1, t2)
                t2.points += cut5 + 10
                t2.wins += 1
                t1.points -= 10
                t1.losses += 1
                t2.history.gains.push(cut5 + 10)
                t1.history.gains.push(0 - 10)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t1.fortune -= diff
            } else if (score2 > 28) {
                console.log('24')
                perf(t1, t2)
                t2.points -= 85
                t2.losses += 1
                t1.points += cut5 + 85
                t1.wins += 1
                t2.history.gains.push(0 - 85)
                t1.history.gains.push(cut5 + 85)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            } 
        } else if (diff >= 6) {
            if (score2 <= 29) {
                console.log('25')
                perf(t1, t2)
                t2.points += cut5 + 5
                t2.wins += 1
                t1.points -= 5
                t1.losses += 1
                t2.history.gains.push(cut5 + 5)
                t1.history.gains.push(0 - 5)
                t1.history.matches.push(`L to ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`W vs ${t1.name}, D:${twoDiff}`)
                t2.fortune += diff
                t1.fortune -= diff
            } else if (score2 > 29) {
                console.log('26')
                perf(t1, t2)
                t2.points -= 95
                t2.losses += 1
                t1.points += cut5 + 95
                t1.wins += 1
                t2.history.gains.push(0 - 95)
                t1.history.gains.push(cut5 + 95)
                t1.history.matches.push(`W vs ${t2.name}, D:${oneDiff}`)
                t2.history.matches.push(`L to ${t1.name}, D:${twoDiff}`)
                t2.fortune -= diff
                t1.fortune += diff
            }
        }
    }
    console.log('GAME')
    skillCheck(t1, t2);
    
};



const perf = (t1, t2) => {

    if (diff < 5 && score == 11 && adv == 1) {

        t2.history.perfect += 1
        cut5 += 25 

        for (let i = diff; i > 0; i--) {
            cut5 += 10 
            t2.fortune += 2
        }
        console.log("perfect1")

    } else if (diff >= 5 && score2 == 31 && adv == 1) {

        t2.history.perfect += 1
        cut5 += 25

        for (let i = diff; i > 0; i--) {
            cut5 += 15 
            t2.fortune += 4
        }
        console.log("perfect2")

    } else if (diff >= 5 && score == 0 && adv == 2) {

        t2.history.perfect += 1
        let boost = 35

        for (let i = diff; i > 0; i--) {
            boost -= 5
            t2.fortune += 4
        }

        cut5 += boost 
        console.log("perfect3")
        
    } else if (diff < 5 && score == 11 && adv == 2) {

        t1.history.perfect += 1
        cut5 += 25

        for (let i = diff; i > 0; i--) {
            cut5 += 10 
            t1.fortune += 2
        }
        console.log("perfect4")

    } else if (diff >= 5 && score2 == 31 && adv == 2) {

        t1.history.perfect += 1
        cut5 += 25

        for (let i = diff; i > 0; i--) {
            cut5 += 15 
            t1.fortune += 4
        }
        console.log("perfect5")

    } else if (diff >= 5 && score == 0 && adv == 1) {

        t1.history.perfect += 1
        let boost = 35

        for (let i = diff; i > 0; i--) {
            boost -= 5
            t1.fortune += 4
        }

        cut5 += boost 
        console.log("perfect6")

    } else if (adv == 0 && score == 0) {

        t1.history.perfect += 1
        cut5 += 15
        t1.fortune += 2
        console.log("perfect7")

    } else if (adv == 0 && score == 11) {

        t2.history.perfect += 1
        cut5 += 15
        t2.fortune += 2
        console.log("perfect8")
    }

    
};
        

    

const skillCheck = (t1, t2) => {

    if (t1.points > 99) {
        t1.points -= 100
        t1.skill += 1
    } else if (t1.points < 0) {
        t1.points += 100
        t1.skill -= 1
    }

    if (t2.points > 99) {
        t2.points -= 100
        t2.skill += 1
    } else if (t2.points < 0) {
        t2.points += 100
        t2.skill -= 1
    }

    if (t1.points > 99) {
        t1.points -= 100
        t1.skill += 1
    } else if (t1.points < 0) {
        t1.points += 100
        t1.skill -= 1
    }

    if (t2.points > 99) {
        t2.points -= 100
        t2.skill += 1
    } else if (t2.points < 0) {
        t2.points += 100
        t2.skill -= 1
    }

    if (t1.skill < 1) {
        t1.skill = 1
        t1.points = 0
    } else if (t1.skill > 7) {
        t1.skill = 7
        t1.points = 95
    }

    if (t2.skill < 1) {
        t2.skill = 1
        t2.points = 0
    } else if (t2.skill > 7) {
        t2.skill = 7
        t2.points = 95
    }
    console.log('Skill Set')
    setForm(t1, t2);
    //nextGame();
};

const setForm = (t1, t2) => {
    
    if (t1.form > 0) {
        if (t1.history.matches[t1.history.matches.length - 1][0] == "W") {   
            t1.form += 1
            console.log('1ddd')
        } else {
            t1.form = 0 - 1
            console.log('2ddd')
        }
    } else if (t1.form < 0) {
        if (t1.history.matches[t1.history.matches.length - 1][0] == "L") {
            t1.form -= 1
            console.log('3ddd')
        } else {
            t1.form = 0 + 1
            console.log('4ddd')
        }
    } else {
        if (t1.history.matches[t1.history.matches.length - 1][0] == "L") {
            t1.form -= 1
            console.log('3ddd')
        } else {
            t1.form += 1
            console.log('4ddd')
        }
    }

    if (t2.form > 0) {
        if (t2.history.matches[t2.history.matches.length - 1][0] == "W") {
            t2.form += 1
            console.log('5ddd')
        } else {
            t2.form = 0 - 1
            console.log('6ddd')
        }
    } else if (t2.form < 0) {
        if (t2.history.matches[t2.history.matches.length - 1][0] == "L") {
            t2.form -= 1
            console.log('7ddd')
        } else {
            t2.form = 0 + 1
            console.log('8ddd')
        }
    } else {
        if (t2.history.matches[t2.history.matches.length - 1][0] == "L") {
            t2.form -= 1
            console.log('7ddd')
        } else {
            t2.form += 1
            console.log('9ddd')
        }
    }

    nextGame();

};

const setPosition = () => {

    if (orgOrBae == 1) {
        teams.sort(function(a, b) {

            return b.wins - a.wins || b.skill - a.skill || b.points - a.points || b.form - a.form || b.fortune - a.fortune
    
        })
    } else {
        teams.sort(function(a, b) {

            return b.wins - a.wins || b.points - a.points || b.skill - a.skill || b.form - a.form
    
        })
    }
};



const readyGame = (tex) => {

    

    switch (cut7) {
        case 1:
            console.log('shed1')
            orgOrBae == 1 ? game(tex, team1) : baseball(tex, team1)
            break;
        case 2:
            console.log('shed2')
            orgOrBae == 1 ? game(tex, team2) : baseball(tex, team2)
            break;
        case 3:
            console.log('shed3')
            orgOrBae == 1 ? game(tex, team3) : baseball(tex, team3)
            break;
        case 4:
            console.log('shed4')
            orgOrBae == 1 ? game(tex, team4) : baseball(tex, team4)
            break;
        case 5:
            console.log('shed5')
            orgOrBae == 1 ? game(tex, team5) : baseball(tex, team5)
            break;
        case 6:
            console.log('shed6')
            orgOrBae == 1 ? game(tex, team6) : baseball(tex, team6)
            break;
        case 7:
            console.log('shed7')
            orgOrBae == 1 ? game(tex, team7) : baseball(tex, team7)
            break;
        case 8:
            console.log('shed8')
            orgOrBae == 1 ? game(tex, team8) : baseball(tex, team8)
            break;
        case 9:
            console.log('shed9')
            orgOrBae == 1 ? game(tex, team9) : baseball(tex, team9)
            break;
        case 10:
            console.log('shed10')
            orgOrBae == 1 ? game(tex, team10) : baseball(tex, team10)
            break;
        case 11:
            console.log('shed11')
            orgOrBae == 1 ? game(tex, team11) : baseball(tex, team11)
            break;
        case 12:
            console.log('shed12')
            orgOrBae == 1 ? game(tex, team12) : baseball(tex, team12)
            break;
        case 13:
            console.log('shed13')
            orgOrBae == 1 ? game(tex, team13) : baseball(tex, team13)
            break;
        case 14:
            console.log('shed14')
            orgOrBae == 1 ? game(tex, team14) : baseball(tex, team14)
            break;
        case 15:
            console.log('shed15')
            orgOrBae == 1 ? game(tex, team15) : baseball(tex, team15)
            break;
        case 16:
            console.log('shed16')
            orgOrBae == 1 ? game(tex, team16) : baseball(tex, team16)
            break;
        case 17:
            console.log('shed17')
            orgOrBae == 1 ? game(tex, team17) : baseball(tex, team17)
            break;
        case 18:
            console.log('shed18')
            orgOrBae == 1 ? game(tex, team18) : baseball(tex, team18)
            break;
        case 19:
            console.log('shed19')
            orgOrBae == 1 ? game(tex, team19) : baseball(tex, team19)
            break;
        case 20:
            console.log('shed20')
            orgOrBae == 1 ? game(tex, team20) : baseball(tex, team20)
            break;
        case 21:
            console.log('shed21')
            orgOrBae == 1 ? game(tex, team21) : baseball(tex, team21)
            break;
        case 22:
            console.log('shed22')
            orgOrBae == 1 ? game(tex, team22) : baseball(tex, team22)
            break;
        case 23:
            console.log('shed23')
            orgOrBae == 1 ? game(tex, team23) : baseball(tex, team23)
            break;
        case 24:
            console.log('shed24')
            orgOrBae == 1 ? game(tex, team24) : baseball(tex, team24)
            break;
        case 25:
            console.log('shed25')
            orgOrBae == 1 ? game(tex, team25) : baseball(tex, team25)
            break;
        case 26:
            console.log('shed26')
            orgOrBae == 1 ? game(tex, team26) : baseball(tex, team26)
            break;
        case 27:
            console.log('shed27')
            orgOrBae == 1 ? game(tex, team27) : baseball(tex, team27)
            break;
        case 28:
            console.log('shed28')
            orgOrBae == 1 ? game(tex, team28) : baseball(tex, team28)
            break;
        case 29:
            console.log('shed29')
            orgOrBae == 1 ? game(tex, team29) : baseball(tex, team29)
            break;
        case 30:
            console.log('shed30')
            orgOrBae == 1 ? game(tex, team30) : baseball(tex, team30)
            break;
    

    
    }
};

const selectTeam = (tex) => {    

    switch (tex) {
        case 1: 
            console.log('first1')
            readyGame(team1);
            break;
        case 2: 
            console.log('first2')
            readyGame(team2);
            break;
        case 3: 
            console.log('first3')
            readyGame(team3);
            break;
        case 4:
            console.log('first4')
            readyGame(team4);
            break;
        case 5:
            console.log('first5')
            readyGame(team5);
            break;
        case 6:
            console.log('first6')
            readyGame(team6);
            break;
        case 7:
            console.log('first7')
            readyGame(team7);
            break;
        case 8:
            console.log('first8')
            readyGame(team8);
            break;
        case 9:
            console.log('first9')
            readyGame(team9);
            break;
        case 10:
            console.log('first10')
            readyGame(team10);
            break;
        case 11:
            console.log('first11')
            readyGame(team11);
            break;
        case 12:
            console.log('first12')
            readyGame(team12);
            break;
        case 13:
            console.log('first13')
            readyGame(team13);
            break;
        case 14:
            console.log('first14')
            readyGame(team14);
            break;
        case 15:
            console.log('first15')
            readyGame(team15);
            break;
        case 16:
            console.log('first16')
            readyGame(team16);
            break;
        case 17:
            console.log('first17')
            readyGame(team17);
            break;
        case 18:
            console.log('first18')
            readyGame(team18);
            break;
        case 19:
            console.log('first19')
            readyGame(team19);
            break;
        case 20:
            console.log('first20')
            readyGame(team20);
            break;
        case 21:
            console.log('first21')
            readyGame(team21);
            break;
        case 22:
            console.log('first22')
            readyGame(team22);
            break;
        case 23:
            console.log('first23')
            readyGame(team23);
            break;
        case 24:
            console.log('first24')
            readyGame(team24);
            break;
        case 25:
            console.log('first25')
            readyGame(team25);
            break;
        case 26:
            console.log('first26')
            readyGame(team26);
            break;
        case 27:
            console.log('first27')
            readyGame(team27);
            break;
        case 28:
            console.log('first28')
            readyGame(team28);
            break;
        case 29:
            console.log('first29')
            readyGame(team29);
            break;
        case 30:
            console.log('first30')
            readyGame(team30);
            break;
    }

};

const nextGame = () => {

    if (playoffSteps >= 1) {
        
        console.log("playoffs")

    } else {
        
        if (sched.length > 0 || sched2.length > 0) {
            console.log("next")
            cut3 = 0
            cut2 = 0
            cut = 0
            cut4 = 0
            cut5 = 0
            cut6 = 0
            cut7 = 0
            matchUp();
        } else {
    
            for (let j = 0; j < 30; j++) {
    
                findZero = (zed) => { return zed == 0 }
    
                if (teams[j].conference == "Eastern" && teams[j].games.findIndex(findZero) !== -1 && sched[0] !== 0) {
                    console.log("shiftzero")
                    sched.unshift(0)
                }
    
                if (teams[j].games.length > 0 && teams[j].conference == "Eastern") {
                    console.log("one")
                    sched.push(teams[j].number)
                } else if (teams[j].games.length > 0 && teams[j].conference == "Western"){
                    console.log("two")
                    sched2.push(teams[j].number)
                }
            }
    
            setPosition();
            clickStartOne();
            console.log("ready for reset")
        }

    }
};

const start = () => {

    if (orgOrBae == 2 && document.getElementById("table").style.display == "none" && half < 2) {
        leaderBoards();
    }

    if (sched.length > 0 || sched2.length > 0) {
        nextGame();
    } else if (half == 0) {

        half = 1
        console.log("Starting second half of season...")
        secondHalf();
        nextGame();
        
    } else if (half == 1) {

        half++
        checkForAwards('james') // This will hopefully record the accolades for players after end of season
        colorizeTable();
        console.log("Every game has been played.")
    } else if (half == 2) {

        half++
        brackets();
        console.log("Brackets.")
        let playoffRows = document.getElementById("fourth-playoff-row")
        let playoffButtonAppear = document.getElementById("playoff-button")
        document.getElementById("playoff-button-two").style.display = "block"
        playoffButtonAppear.style.display = "inline-block"
        playoffRows.scrollIntoView()
    } else if (half > 2) {
        let playoffRows = document.getElementById("fourth-playoff-row")
        playoffRows.scrollIntoView()
    }

};

const secondHalf = () => {
 
     for (let i = 0; i < teams.length; i++) {

        if (teams[i].conference == "Eastern") {

            for (let j = 0; j < 16; j++) {
                
                if (j == 0) {
                    
                    teams[i].games.push(0)
            
                } else if (j !== teams[i].number && j < 16) {

                    teams[i].games.push(j)
                }
            }
                
        } else if (teams[i].conference == "Western") {

            for (let j = 0; j < 31; j++) {
                
                if (j == 0) {

                    j = 15
                    teams[i].games.push(0)
            
                } else if (j !== teams[i].number && j < 31) {

                    teams[i].games.push(j)
                }
            }
        }
         
     }
}




const testArr = [1, 5, 6, 7, 9, 15, 30, 99, 100, 123, 19, 22, 26, 31, 33] // 15, 6, 9, 1, 5, 30, 7
const testBar = [2, 4, 33, 30, 13, 11, 7, 88, 25, 30, 23, 22, 21, 77, 19]
const testCar = [4, 3, 15, 10, 11, 7, 9, 33, 82, 80, 24, 14, 72, 19, 93]
const testVar = []

let testYarr = 0 // Everything with test before it allows the testing function to run.

let exit = 0 

let mapOne;
let mapTwo;

testing = () => {

    testYarr = testArr.map( n =>  n * 1  ) // Yarr would be a copy of the sched array
    testYarr2 = testBar.map( n =>  n * 1  ) // Yarr2 would be a copy of a random team array aka teams[j].games
                                            // testCar would be the original second random team array

    for (let i = Math.floor(Math.random() * testYarr.length); exit < 2; i = Math.floor(Math.random() * testYarr.length)) {
        console.log("i " + i + " " + testYarr[i])
        
        if (exit > 0 || testYarr.length < 1) {
            exit = 0;
            break;
        }
        
        for (let j = Math.floor(Math.random() * testYarr2.length); ; j = Math.floor(Math.random() * testYarr2.length)) {
            console.log("j " + j + " " + testYarr2[j])
            if (testYarr[i] == testYarr2[j]) {
                for (let k = 0; ; k++) {
                    console.log("k " + k + " " + testCar[k])
                    if (testYarr[i] == testCar[k]) {

                        testYarr2.splice(j, 1)
                        testVar.push(testCar[k])
                        exit = 2

                        console.log("check")
                        break;
                    } else if (k == testCar.length) {

                        testYarr2.splice(j, 1)
                        exit = 1
                        console.log("not a sync")
                        break;
                    } else {
                        console.log("???")
                        splice++;
                    }
                }

            } else if (testYarr[i] !== testYarr2[j] && testYarr2.length > 0 && exit < 1) {
                testYarr2.splice(j, 1)
                splice++;
                console.log("remove from yarr2")
            } else {
                exit--;
                testYarr.splice(i, 1)
                testYarr2 = testBar.map( n =>  n * 1  )
                console.log("recreate yarr2")
                break;
            }
        }
    }

    console.log("result is: " + (testVar.length >= 1 ? testVar : "no matches found"))
    console.log("end")

    // This function can be deleted. It was the first iteration of what is now matchZero, matchPlus, and matchPlusTwo
}

const matchZero = () => {
    
    mapOne = teams.map( n =>  n )
    let wes = 0
    let eas = 0

    for (let i = Math.floor(Math.random() * mapOne.length); ; i = Math.floor(Math.random() * mapOne.length)) {
        console.log("i " + i + " " + mapOne[i].number)
    
        if (mapOne.length > 1 && exit !== 2) {
            console.log("1st if")
            //mapTwo = teams[i].games.map( n =>  n )
            mapTwo = mapOne[i].games.map( n =>  n )

            for (let j = 0; j < mapTwo.length; j++) {
                console.log("j " + j + " " + mapTwo[j])
                if (mapTwo[j] == 0 && mapOne[i].conference == "Eastern" && eas == 0) {
                    console.log("2nd if")
                    cut6 = mapOne[i].number
                    mapOne.splice(i, 1)
                    eas++
                    exit++;
                    break;

                } else if (mapTwo[j] == 0 && mapOne[i].conference == "Western" && wes == 0) {
                    console.log("3rd")
                    cut7 = mapOne[i].number
                    mapOne.splice(i, 1)
                    wes++;
                    exit++;
                    break;

                } else if (j == mapTwo.length) {

                    console.log("team with no zero")
                    mapOne.splice(i, 1)
                    break;
                } 
            }

        } else if (mapOne.length < 1 && exit <= 1) {

            exit = 0;
            console.log("no teams with 0")
            break;

        } else if (exit >= 2) {

            exit = 0;
            console.log("zero teams chosen: " + cut6 + " and " + cut7)
            break;
        }
    }
    wes = 0
    eas = 0
    console.log("done")
};

const matchPlus = () => {

    mapOne = sched.map( n =>  n  ) // Yarr would be a copy of the sched array
    indigo = (zed) => { return zed == cut2 }      // Yarr2 would be a copy of a random team array aka teams[j].games
    indigoGo = (zed) => { return zed == cut }    // testCar would be the original second random team array

    for (let i = Math.floor(Math.random() * mapOne.length); exit < sched.length; i = Math.floor(Math.random() * mapOne.length)) {
        
        cut = mapOne.splice(i, 1)
        console.log("c1, cut: " + cut)
        for (let j = 0; j < teamsEast.length; j++) {
            console.log("c2, j: " + j)
            if (teamsEast[j].number == cut) {
                
                mapTwo = teamsEast[j].games.map( n =>  n  )
                console.log("c3 ... " + mapTwo)

                for (let k = Math.floor(Math.random() * mapTwo.length); mapTwo.length > 0; k = Math.floor(Math.random() * mapTwo.length)) {
                    console.log("c4, k: " + k)
                    cut2 = mapTwo[k]
                    zero = 0

                    if (mapTwo[0] == 0 && mapTwo.length > 1) {
                        console.log("X0")
                        mapTwo.splice(0, 1)
                        k = Math.floor(Math.random() * mapTwo.length)
                        cut2 = mapTwo[k]
                    } else if (mapTwo[0] == 0 && mapTwo.length <= 1) {
                        console.log("X0X")
                        mapTwo.splice(0, 1)
                        cut4 = sched.findIndex(indigoGo)
                        sched.splice(cut4, 1)
                        zero = 2
                    }


                    if (mapOne.findIndex(indigo) !== -1) {

                        console.log("match " + cut2 + " found in " + cut)
                        exit = 100
                        break;

                    } else if (zero !== 2) {

                        console.log("remove " + cut2 + " from " + cut)
                        mapTwo.splice(k, 1)
                    }
                }
                console.log("c33")
                j = 100
            }
        }
        console.log("Trying new team on sched")
        exit++;
    }

    exit = 0
    console.log("Confirmed: match " + cut2 + " found in " + cut)
    console.log("Finish")

}

const matchPlusTwo = () => {

    mapOne = sched2.map( n =>  n  ) // Yarr would be a copy of the sched array
    indigo = (zed) => { return zed == cut2 }      // Yarr2 would be a copy of a random team array aka teams[j].games
    indigoGo = (zed) => { return zed == cut }    // testCar would be the original second random team array

    for (let i = Math.floor(Math.random() * mapOne.length); exit < sched2.length; i = Math.floor(Math.random() * mapOne.length)) {
        
        cut = mapOne.splice(i, 1)
        console.log("c1, cut: " + cut)
        for (let j = 0; j < teamsWest.length; j++) {
            console.log("c2, j: " + j)
            if (teamsWest[j].number == cut) {
                
                mapTwo = teamsWest[j].games.map( n =>  n  )
                console.log("c3 ... " + mapTwo)
                for (let k = Math.floor(Math.random() * mapTwo.length); mapTwo.length > 0; k = Math.floor(Math.random() * mapTwo.length)) {
                    console.log("c4, k: " + k)
                    cut2 = mapTwo[k]
                    zero = 0

                    if (mapTwo[0] == 0 && mapTwo.length > 1) {
                        console.log("0X")
                        mapTwo.splice(0, 1)
                        k = Math.floor(Math.random() * mapTwo.length)
                        cut2 = mapTwo[k]
                    } else if (mapTwo[0] == 0 && mapTwo.length <= 1) {
                        console.log("X0X")
                        mapTwo.splice(0, 1)
                        cut4 = sched2.findIndex(indigoGo)
                        sched2.splice(cut4, 1)
                        zero = 2
                    }

                    if (mapOne.findIndex(indigo) !== -1) {

                        console.log("match " + cut2 + " found in " + cut)
                        exit = 100
                        break;

                    } else if (zero !== 2) {

                        console.log("remove " + cut2 + " from " + cut)
                        mapTwo.splice(k, 1)
                    }
                }
                console.log("c33")
                j = 100
            }
        }
        console.log("Trying new team on sched")
        exit++;
    }

    exit = 0
    console.log("Confirmed: match " + cut2 + " found in " + cut)
    console.log("Finish")

}

const matchUp = () => {

    if (sched[0] == 0) {

        zero = 1
        matchZero();
        console.log(`match up: ${cut7} is 2nd T`)
        console.log(`match up: ${cut6} is 1st T`)

    } else if (sched[0] !== 0 && sched.length > 0) {

        matchPlus();
        cut6 = cut[0]
        cut7 = cut2
        console.log("oops")

    } else if (sched.length == 0 && sched2.length > 0) {

        matchPlusTwo();
        cut6 = cut[0]
        cut7 = cut2
        console.log("oops2")

    }

    if (zero == 2) {
        console.log("skipzero")
        zero = 0
        nextGame();
    } else {
        console.log("selectTeam")
        selectTeam(cut6);
    }
    

    // Newer matchUp
};












///////////////



mz = () => {

    mapOne = teams.map( n =>  n )
    let wes = 0
    let eas = 0

    for (let i = Math.floor(Math.random() * mapOne.length); ; i = Math.floor(Math.random() * mapOne.length)) {
        console.log("i " + i + " " + mapOne[i].number)
        
        if (mapOne.length > 1 && exit !== 2) {
            console.log("1st if")
            mapTwo = mapOne[i].games.map( n =>  n )
            

            for (let j = 0; j < mapTwo.length; j++) {
                console.log("j " + j + " " + mapTwo[j])
                
                if (mapTwo[j] == 0 && mapOne[i].conference == "Eastern" && eas == 0) {
                    console.log("2nd if")
                    
                    cut6 = mapOne[i].number
                    console.log("^ cut6 mapOne[i].number")
                    
                    mapOne.splice(i, 1)
                   
                    eas++
                    exit++;
                    break;

                } else if (mapTwo[j] == 0 && mapOne[i].conference == "Western" && wes == 0) {
                    console.log("3rd")
                    
                    cut7 = mapOne[i].number
                    console.log("^ cut7 mapOne[i].number")
                  
                    mapOne.splice(i, 1)
                    wes++;
                    exit++;
                    break;

                } else if (j == mapTwo.length) {

                    console.log("team with no zero")
                    mapOne.splice(i, 1)
                    break;
                } 
            }

        } else if (mapOne.length < 1 && exit <= 1) {

            exit = 0;
            console.log("no teams with 0")
            break;

        } else if (exit >= 2) {

            exit = 0;
            console.log("zero teams chosen: " + cut6 + " and " + cut7)
            break;
        }
    }
    wes = 0
    eas = 0
    console.log("done")
};

zz = () => {

    //mo();
    console.log("schedules: ")

    console.log("1: " + team1.games)
    console.log("2: " + team2.games)
    console.log("3: " + team3.games)
    console.log("4: " + team4.games)
    console.log("5: " + team5.games)
    console.log("6: " + team6.games)
    console.log("7: " + team7.games)
    console.log("8: " + team8.games)
    console.log("9: " + team9.games)
    console.log("10: " + team10.games)
    console.log("11: " + team11.games)
    console.log("12: " + team12.games)
    console.log("13: " + team13.games)
    console.log("14: " + team14.games)
    console.log("15: " + team15.games)
    console.log("16: " + team16.games)
    console.log("17: " + team17.games)
    console.log("18: " + team18.games)
    console.log("19: " + team19.games)
    console.log("20: " + team20.games)
    console.log("21: " + team21.games)
    console.log("22: " + team22.games)
    console.log("23: " + team23.games)
    console.log("24: " + team24.games)
    console.log("25: " + team25.games)
    console.log("26: " + team26.games)
    console.log("27: " + team27.games)
    console.log("28: " + team28.games)
    console.log("29: " + team29.games)
    console.log("30: " + team30.games)

   
}

zzz = () => {

    console.log("perfect scores: ")

    console.log("1: " + team1.history.perfect)
    console.log("2: " + team2.history.perfect)
    console.log("3: " + team3.history.perfect)
    console.log("4: " + team4.history.perfect)
    console.log("5: " + team5.history.perfect)
    console.log("6: " + team6.history.perfect)
    console.log("7: " + team7.history.perfect)
    console.log("8: " + team8.history.perfect)
    console.log("9: " + team9.history.perfect)
    console.log("10: " + team10.history.perfect)
    console.log("11: " + team11.history.perfect)
    console.log("12: " + team12.history.perfect)
    console.log("13: " + team13.history.perfect)
    console.log("14: " + team14.history.perfect)
    console.log("15: " + team15.history.perfect)
    console.log("16: " + team16.history.perfect)
    console.log("17: " + team17.history.perfect)
    console.log("18: " + team18.history.perfect)
    console.log("19: " + team19.history.perfect)
    console.log("20: " + team20.history.perfect)
    console.log("21: " + team21.history.perfect)
    console.log("22: " + team22.history.perfect)
    console.log("23: " + team23.history.perfect)
    console.log("24: " + team24.history.perfect)
    console.log("25: " + team25.history.perfect)
    console.log("26: " + team26.history.perfect)
    console.log("27: " + team27.history.perfect)
    console.log("28: " + team28.history.perfect)
    console.log("29: " + team29.history.perfect)
    console.log("30: " + team30.history.perfect)

   
}

zzzc = () => {

    console.log("fortunes: ")

    console.log("1: " + team1.fortune)
    console.log("2: " + team2.fortune)
    console.log("3: " + team3.fortune)
    console.log("4: " + team4.fortune)
    console.log("5: " + team5.fortune)
    console.log("6: " + team6.fortune)
    console.log("7: " + team7.fortune)
    console.log("8: " + team8.fortune)
    console.log("9: " + team9.fortune)
    console.log("10: " + team10.fortune)
    console.log("11: " + team11.fortune)
    console.log("12: " + team12.fortune)
    console.log("13: " + team13.fortune)
    console.log("14: " + team14.fortune)
    console.log("15: " + team15.fortune)
    console.log("16: " + team16.fortune)
    console.log("17: " + team17.fortune)
    console.log("18: " + team18.fortune)
    console.log("19: " + team19.fortune)
    console.log("20: " + team20.fortune)
    console.log("21: " + team21.fortune)
    console.log("22: " + team22.fortune)
    console.log("23: " + team23.fortune)
    console.log("24: " + team24.fortune)
    console.log("25: " + team25.fortune)
    console.log("26: " + team26.fortune)
    console.log("27: " + team27.fortune)
    console.log("28: " + team28.fortune)
    console.log("29: " + team29.fortune)
    console.log("30: " + team30.fortune)

   
}

ccc = () => {

    console.log("history: ")

    console.log("1: " + team1.history.matches)
    console.log("2: " + team2.history.matches)
    console.log("3: " + team3.history.matches)
    console.log("4: " + team4.history.matches)
    console.log("5: " + team5.history.matches)
    console.log("6: " + team6.history.matches)
    console.log("7: " + team7.history.matches)
    console.log("8: " + team8.history.matches)
    console.log("9: " + team9.history.matches)
    console.log("10: " + team10.history.matches)
    console.log("11: " + team11.history.matches)
    console.log("12: " + team12.history.matches)
    console.log("13: " + team13.history.matches)
    console.log("14: " + team14.history.matches)
    console.log("15: " + team15.history.matches)
    console.log("16: " + team16.history.matches)
    console.log("17: " + team17.history.matches)
    console.log("18: " + team18.history.matches)
    console.log("19: " + team19.history.matches)
    console.log("20: " + team20.history.matches)
    console.log("21: " + team21.history.matches)
    console.log("22: " + team22.history.matches)
    console.log("23: " + team23.history.matches)
    console.log("24: " + team24.history.matches)
    console.log("25: " + team25.history.matches)
    console.log("26: " + team26.history.matches)
    console.log("27: " + team27.history.matches)
    console.log("28: " + team28.history.matches)
    console.log("29: " + team29.history.matches)
    console.log("30: " + team30.history.matches)

   
}

let wow = ""

biggestUpset = () => {

    //mapOne = teams.map( n =>  n )

    let upset = 0
    /*
    let up1 = ""
    let up2 = ""
    let up3 = ""
    let up4 = ""
    let up5 = ""
    let upset2 = 0
    let upset3 = 0
    let upset4 = 0
    let upset5 = 0
    */
    let minus = ""

    for (let i = 0; i < teams.length; i++) {
        for (let j = 0; j < teams[i].history.matches.length; j++) {
            
            minus = teams[i].history.matches[j]

            console.log("waw")
            
            if (teams[i].history.matches[j][0] == "W" && minus[minus.length -2] == "-") {

                wow = minus[minus.length -2] + minus[minus.length -1]
                wow = Number(wow)
                console.log("wow")
            }

            wow < upset ? upset = wow : console.log("not")

            /*
            wow < upset2 ? upset2 = wow : console.log("not1")
            wow < upset3 ? upset3 = wow : console.log("not2")
            wow < upset4 ? upset4 = wow : console.log("not3")
            wow < upset5 ? upset5 = wow : console.log("not4")
            */
        }
        console.log(`Team ${teams[i].number}: ${upset}`)
    }
    
}



// team1.history.matches[0][0] == "L" && team1.history.matches[0][team1.history.matches.length - 1] < 0















































   //     eaTeam5.wins < 4 && eaTeam7.wins < 4 ? game(eaTeam5, eaTeam7) : console.log('one best of 7 done')
   //     eaTeam6.wins < 4 && eaTeam4.wins < 4 ? game(eaTeam6, eaTeam4) : console.log('one best of 7 done')
   //     weTeam4.wins < 4 && weTeam6.wins < 4 ? game(weTeam4, weTeam6) : console.log('one best of 7 done')
   //     weTeam7.wins < 4 && weTeam5.wins < 4 ? game(weTeam7, weTeam5) : console.log('one best of 7 done')


//// Should bestOfSeven be kept? Should bestOfFive stay? Stay tuned



let finalStretch = 0





const bestOfSeven = (game) => {

    /// When a team wins their best of 5, fill their last made table

    let c = 0
    game == 1 ? c = 3 : c = 2
    console.log(c)

    if (eaTeam5.losses < 99 && eaTeam6.losses < 99) {
        if (eaTeam5.wins >= 3 && finalStretch == 0) {    //// && final stretch
            if (game == 3) {
                console.log("1")
                colorCell = document.getElementById("game-one-three")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 4) {
                console.log("2")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {
                console.log("3")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            eaTeam6.losses = 99
        } else if (eaTeam6.wins >= 3 && finalStretch == 0) {    //// &&
            if (game == 3) {
                console.log("4")
                colorCell = document.getElementById("game-one-three")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 4) {
                console.log("5")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("6")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            eaTeam5.losses = 99
        } else if (eaTeam5.wins >= 4 && finalStretch == 1) {      //// 7 games
            if (game == 4) {           /// 4
                console.log("1")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {    /// 5
                console.log("2")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 6) {     //// 6
                console.log("3")
                colorCell = document.getElementById("game-one-six")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 7) {      ///// 7
                console.log("3")
                colorCell = document.getElementById("game-one-seven")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            eaTeam6.losses = 99
        }  else if (eaTeam6.wins >= 4 && finalStretch == 1) {    //// &&
            if (game == 4) {
                console.log("4")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("5")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 6) {
                console.log("6")
                colorCell = document.getElementById("game-one-six")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 7) {
                console.log("6")
                colorCell = document.getElementById("game-one-seven")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            eaTeam5.losses = 99
        }
    }


///// East T4  T7
    if (eaTeam4.losses < 99 && eaTeam7.losses < 99) {
        if (eaTeam4.wins >= 3 && finalStretch == 0) {    //// && final stretch
            if (game == 3) {
                console.log("1")
                colorCell = document.getElementById("game-two-three")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 4) {
                console.log("2")
                colorCell = document.getElementById("game-two-four")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {
                console.log("3")
                colorCell = document.getElementById("game-two-five")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            eaTeam7.losses = 99
        } else if (eaTeam7.wins >= 3 && finalStretch == 0) {    //// &&
            if (game == 3) {
                console.log("4")
                colorCell = document.getElementById("game-two-three")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 4) {
                console.log("5")
                colorCell = document.getElementById("game-two-four")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("6")
                colorCell = document.getElementById("game-two-five")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            eaTeam4.losses = 99
        } else if (eaTeam4.wins >= 4 && finalStretch == 1) {      //// 7 games
            if (game == 4) {           /// 4
                console.log("1")
                colorCell = document.getElementById("game-two-four")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {    /// 5
                console.log("2")
                colorCell = document.getElementById("game-two-five")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 6) {     //// 6
                console.log("3")
                colorCell = document.getElementById("game-two-six")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 7) {      ///// 7
                console.log("3")
                colorCell = document.getElementById("game-two-seven")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            eaTeam7.losses = 99
        }  else if (eaTeam7.wins >= 4 && finalStretch == 1) {    //// &&
            if (game == 4) {
                console.log("4")
                colorCell = document.getElementById("game-two-four")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("5")
                colorCell = document.getElementById("game-two-five")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 6) {
                console.log("6")
                colorCell = document.getElementById("game-two-six")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 7) {
                console.log("6")
                colorCell = document.getElementById("game-two-seven")
                colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            eaTeam4.losses = 99
        }
    }

///// West T6  T5
    if (weTeam6.losses < 99 && weTeam5.losses < 99) {
        if (weTeam6.wins >= 3 && finalStretch == 0) {    //// && final stretch
            if (game == 3) {
                console.log("1")
                colorCell = document.getElementById("game-four-three")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 4) {
                console.log("2")
                colorCell = document.getElementById("game-four-four")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {
                console.log("3")
                colorCell = document.getElementById("game-four-five")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            weTeam5.losses = 99
        } else if (weTeam5.wins >= 3 && finalStretch == 0) {    //// &&
            if (game == 3) {
                console.log("4")
                colorCell = document.getElementById("game-four-three")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 4) {
                console.log("5")
                colorCell = document.getElementById("game-four-four")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("6")
                colorCell = document.getElementById("game-four-five")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            weTeam6.losses = 99
        } else if (weTeam6.wins >= 4 && finalStretch == 1) {      //// 7 games
            if (game == 4) {           /// 4
                console.log("1")
                colorCell = document.getElementById("game-four-four")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {    /// 5
                console.log("2")
                colorCell = document.getElementById("game-four-five")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 6) {     //// 6
                console.log("3")
                colorCell = document.getElementById("game-four-six")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 7) {      ///// 7
                console.log("3")
                colorCell = document.getElementById("game-four-seven")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            weTeam5.losses = 99
        }  else if (weTeam5.wins >= 4 && finalStretch == 1) {    //// &&
            if (game == 4) {
                console.log("4")
                colorCell = document.getElementById("game-four-four")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("5")
                colorCell = document.getElementById("game-four-five")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 6) {
                console.log("6")
                colorCell = document.getElementById("game-four-six")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 7) {
                console.log("6")
                colorCell = document.getElementById("game-four-seven")
                colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            weTeam6.losses = 99
        }
    }

///// West T7  T4
    if (weTeam7.losses < 99 && weTeam4.losses < 99) {
        if (weTeam7.wins >= 3 && finalStretch == 0) {    //// && final stretch
            if (game == 3) {
                console.log("1")
                colorCell = document.getElementById("game-three-three")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 4) {
                console.log("2")
                colorCell = document.getElementById("game-three-four")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {
                console.log("3")
                colorCell = document.getElementById("game-three-five")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            weTeam4.losses = 99
        } else if (weTeam4.wins >= 3 && finalStretch == 0) {    //// &&
            if (game == 3) {
                console.log("4")
                colorCell = document.getElementById("game-three-three")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 4) {
                console.log("5")
                colorCell = document.getElementById("game-three-four")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("6")
                colorCell = document.getElementById("game-three-five")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            weTeam7.losses = 99
        } else if (weTeam7.wins >= 4 && finalStretch == 1) {      //// 7 games
            if (game == 4) {           /// 4
                console.log("1")
                colorCell = document.getElementById("game-three-four")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {    /// 5
                console.log("2")
                colorCell = document.getElementById("game-three-five")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 6) {     //// 6
                console.log("3")
                colorCell = document.getElementById("game-three-six")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 7) {      ///// 7
                console.log("3")
                colorCell = document.getElementById("game-three-seven")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            weTeam4.losses = 99
        }  else if (weTeam4.wins >= 4 && finalStretch == 1) {    //// &&
            if (game == 4) {
                console.log("4")
                colorCell = document.getElementById("game-three-four")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("5")
                colorCell = document.getElementById("game-three-five")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 6) {
                console.log("6")
                colorCell = document.getElementById("game-three-six")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 7) {
                console.log("6")
                colorCell = document.getElementById("game-three-seven")
                colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            weTeam7.losses = 99
        }
    }








    if (eaTeam5.wins < 3 && eaTeam6.wins < 3 && finalStretch == 0) {

        if (game == 1) {
            colorCell = "game-one-one"
            rowOne.innerHTML += '<table id="game-one-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("a")
        } else if (game == 2) {
            colorCell = "game-one-two"
            rowOne.innerHTML += '<table id="game-one-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("b")
        } else if (game == 3) {
            colorCell = "game-one-three"
            rowOne.innerHTML += '<table id="game-one-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("c")
        } else if (game == 4) {
            colorCell = "game-one-four"
            rowOne.innerHTML += '<table id="game-one-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("d")
        } else if (game == 5) {
            colorCell = "game-one-five"
            console.log("e")
        }

        if (eaTeam5.history.gains[eaTeam5.history.gains.length - 1] > 0) {
            colorCell = document.getElementById(colorCell)
            colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
            console.log("f")
        } else {
            colorCell = document.getElementById(colorCell)
            colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
            console.log("g")
        }

    } else if (eaTeam5.wins < 4 && eaTeam6.wins < 4 && finalStretch == 1) {

       // game(eaTeam5, eaTeam7);
      //  game(eaTeam6, eaTeam4);
      //  game(weTeam4, weTeam6);
      //  game(weTeam7, weTeam5);

        if (game == 1) {
            colorCell = "game-one-one"
            rowOne.innerHTML += '<table id="game-one-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("a")
        } else if (game == 2) {
            colorCell = "game-one-two"
            rowOne.innerHTML += '<table id="game-one-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("b")
        } else if (game == 3) {
            colorCell = "game-one-three"
            rowOne.innerHTML += '<table id="game-one-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("c")
        } else if (game == 4) {
            colorCell = "game-one-four"
            rowOne.innerHTML += '<table id="game-one-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("d")
        } else if (game == 5) {
            colorCell = "game-one-five"
            rowOne.innerHTML += '<table id="game-one-six"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("d")
        } else if (game == 6) {
            colorCell = "game-one-six"
            rowOne.innerHTML += '<table id="game-one-seven"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
            eaTeam6.skill + "</td><td>" + eaTeam6.points + `</td><td>${game + 1}</td></tr></table>`
            console.log("d")
        } else if (game == 7) {
            colorCell = "game-one-seven"
        }

        if (eaTeam5.history.gains[eaTeam5.history.gains.length - 1] > 0) {
            colorCell = document.getElementById(colorCell)
            colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
            console.log("f")
        } else {
            colorCell = document.getElementById(colorCell)
            colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = eaTeam6.history.gains[eaTeam6.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
            console.log("g")
        }

    } else if (finalStretch == 0) {
        if (eaTeam5.wins > 2) {
            colorCell = document.getElementById("game-one-one")
            colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
            console.log("h")
        } else {
            colorCell = document.getElementById("game-one-one")
            colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
            console.log("i")
        }
    } else if (finalStretch == 1) {
        if (eaTeam5.wins > 3) {
            colorCell = document.getElementById("game-one-one")
            colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
            console.log("h")
        } else {
            colorCell = document.getElementById("game-one-one")
            colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
            console.log("i")
        }
    }

////////

if (eaTeam4.wins < 3 && eaTeam7.wins < 3 && finalStretch == 0) {

    if (game == 1) {
        colorCell = "game-two-one"
        rowTwo.innerHTML += '<table id="game-two-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-two-two"
        rowTwo.innerHTML += '<table id="game-two-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-two-three"
        rowTwo.innerHTML += '<table id="game-two-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-two-four"
        rowTwo.innerHTML += '<table id="game-two-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-two-five"
        console.log("e")
    }

    if (eaTeam4.history.gains[eaTeam4.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (eaTeam4.wins < 4 && eaTeam7.wins < 4 && finalStretch == 1) {

    if (game == 1) {
        colorCell = "game-two-one"
        rowTwo.innerHTML += '<table id="game-two-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-two-two"
        rowTwo.innerHTML += '<table id="game-two-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-two-three"
        rowTwo.innerHTML += '<table id="game-two-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-two-four"
        rowTwo.innerHTML += '<table id="game-two-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-two-five"
        rowTwo.innerHTML += '<table id="game-two-six"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 6) {
        colorCell = "game-two-six"
        rowTwo.innerHTML += '<table id="game-two-seven"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam7.skill + "</td><td>" + eaTeam7.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 7) {
        colorCell = "game-two-seven"
    }

    if (eaTeam4.history.gains[eaTeam4.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = eaTeam7.history.gains[eaTeam7.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (finalStretch == 0) {
    if (eaTeam4.wins > 2) {
        colorCell = document.getElementById("game-two-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-two-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
} else if (finalStretch == 1) {
    if (eaTeam4.wins > 3) {
        colorCell = document.getElementById("game-two-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-two-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
}

///////////

if (weTeam6.wins < 3 && weTeam5.wins < 3 && finalStretch == 0) {

    if (game == 1) {
        colorCell = "game-four-one"
        rowFour.innerHTML += '<table id="game-four-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-four-two"
        rowFour.innerHTML += '<table id="game-four-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-four-three"
        rowFour.innerHTML += '<table id="game-four-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-four-four"
        rowFour.innerHTML += '<table id="game-four-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-four-five"
        console.log("e")
    }

    if (weTeam6.history.gains[weTeam6.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (weTeam6.wins < 4 && weTeam5.wins < 4 && finalStretch == 1) {

    if (game == 1) {
        colorCell = "game-four-one"
        rowFour.innerHTML += '<table id="game-four-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-four-two"
        rowFour.innerHTML += '<table id="game-four-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-four-three"
        rowFour.innerHTML += '<table id="game-four-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-four-four"
        rowFour.innerHTML += '<table id="game-four-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-four-five"
        rowFour.innerHTML += '<table id="game-four-six"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 6) {
        colorCell = "game-four-six"
        rowFour.innerHTML += '<table id="game-four-seven"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam6.skill + "</td><td>" + weTeam6.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 7) {
        colorCell = "game-four-seven"
    }

    if (weTeam6.history.gains[weTeam6.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam6.history.gains[weTeam6.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (finalStretch == 0) {
    if (weTeam6.wins > 2) {
        colorCell = document.getElementById("game-four-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-four-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
} else if (finalStretch == 1) {
    if (weTeam6.wins > 3) {
        colorCell = document.getElementById("game-four-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-four-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
}

////////

if (weTeam7.wins < 3 && weTeam4.wins < 3 && finalStretch == 0) {

    if (game == 1) {
        colorCell = "game-three-one"
        rowThree.innerHTML += '<table id="game-three-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-three-two"
        rowThree.innerHTML += '<table id="game-three-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-three-three"
        rowThree.innerHTML += '<table id="game-three-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-three-four"
        rowThree.innerHTML += '<table id="game-three-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-three-five"
        console.log("e")
    }

    if (weTeam7.history.gains[weTeam7.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (weTeam7.wins < 4 && weTeam4.wins < 4 && finalStretch == 1) {

    if (game == 1) {
        colorCell = "game-three-one"
        rowThree.innerHTML += '<table id="game-three-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-three-two"
        rowThree.innerHTML += '<table id="game-three-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-three-three"
        rowThree.innerHTML += '<table id="game-three-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-three-four"
        rowThree.innerHTML += '<table id="game-three-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-three-five"
        rowThree.innerHTML += '<table id="game-three-six"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 6) {
        colorCell = "game-three-six"
        rowThree.innerHTML += '<table id="game-three-seven"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam7.skill + "</td><td>" + weTeam7.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 7) {
        colorCell = "game-three-seven"
    }

    if (weTeam7.history.gains[weTeam7.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam7.history.gains[weTeam7.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (finalStretch == 0) {
    if (weTeam7.wins > 2) {
        colorCell = document.getElementById("game-three-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-three-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
} else if (finalStretch == 1) {
    if (weTeam7.wins > 3) {
        colorCell = document.getElementById("game-three-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-three-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
}

}




///
///
///




















const bestOfFiveAdv = (game) => {

    let c = 0
    game == 1 ? c = 3 : c = 2

    if (eaTeam4.losses < 99 && eaTeam5.losses < 99) {
        if (eaTeam4.wins >= 3 && finalStretch == 0) { 
            if (game == 3) {
                console.log("1")
                colorCell = document.getElementById("game-one-three")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 4) {
                console.log("2")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("3")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            eaTeam5.losses = 99
        } else if (eaTeam5.wins >= 3 && finalStretch == 0) { 
            if (game == 3) {
                console.log("4")
                colorCell = document.getElementById("game-one-three")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 4) {
                console.log("5")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {
                console.log("6")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            eaTeam4.losses = 99
        } else if (eaTeam5.wins >= 4 && finalStretch == 1) {      //// 7 games
            if (game == 4) {           /// 4
                console.log("1")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {    /// 5
                console.log("2")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 6) {     //// 6
                console.log("3")
                colorCell = document.getElementById("game-one-six")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 7) {      ///// 7
                console.log("3")
                colorCell = document.getElementById("game-one-seven")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            eaTeam4.losses = 99
        }  else if (eaTeam4.wins >= 4 && finalStretch == 1) {    //// &&
            if (game == 4) {
                console.log("4")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("5")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 6) {
                console.log("6")
                colorCell = document.getElementById("game-one-six")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 7) {
                console.log("6")
                colorCell = document.getElementById("game-one-seven")
                colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            eaTeam5.losses = 99
        }
    }
    
/////////

if (weTeam5.losses < 99 && weTeam4.losses < 99) {
    if (weTeam5.wins >= 3 && finalStretch == 0) { 
        if (game == 3) {
            console.log("1")
            colorCell = document.getElementById("game-two-three")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
        } else if (game == 4) {
            console.log("2")
            colorCell = document.getElementById("game-two-four")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
        } else if (game == 5) {
            console.log("3")
            colorCell = document.getElementById("game-two-five")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
        }
        weTeam4.losses = 99
    } else if (weTeam4.wins >= 3 && finalStretch == 0) { 
        if (game == 3) {
            console.log("4")
            colorCell = document.getElementById("game-two-three")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
        } else if (game == 4) {
            console.log("5")
            colorCell = document.getElementById("game-two-four")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
        } else if (game == 5) {
            console.log("6")
            colorCell = document.getElementById("game-two-five")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
        }
        weTeam5.losses = 99
    } else if (weTeam4.wins >= 4 && finalStretch == 1) {      //// 7 games
        if (game == 4) {           /// 4
            console.log("1")
            colorCell = document.getElementById("game-two-four")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
        } else if (game == 5) {    /// 5
            console.log("2")
            colorCell = document.getElementById("game-two-five")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
        } else if (game == 6) {     //// 6
            console.log("3")
            colorCell = document.getElementById("game-two-six")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
        } else if (game == 7) {      ///// 7
            console.log("3")
            colorCell = document.getElementById("game-two-seven")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "green"
            colorCell.rows[2].cells[c].style.color = "red"
        }
        weTeam5.losses = 99
    }  else if (weTeam5.wins >= 4 && finalStretch == 1) {    //// &&
        if (game == 4) {
            console.log("4")
            colorCell = document.getElementById("game-two-four")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
        } else if (game == 5) {
            console.log("5")
            colorCell = document.getElementById("game-two-five")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
        } else if (game == 6) {
            console.log("6")
            colorCell = document.getElementById("game-two-six")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
        } else if (game == 7) {
            console.log("6")
            colorCell = document.getElementById("game-two-seven")
            colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
            colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
            colorCell.rows[1].cells[c].style.color = "red"
            colorCell.rows[2].cells[c].style.color = "green"
        }
        weTeam4.losses = 99
    }
}



if (eaTeam5.wins < 3 && eaTeam4.wins < 3 && finalStretch == 0) {

    if (game == 1) {
        colorCell = "game-one-one"
        rowOne.innerHTML += '<table id="game-one-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-one-two"
        rowOne.innerHTML += '<table id="game-one-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-one-three"
        rowOne.innerHTML += '<table id="game-one-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-one-four"
        rowOne.innerHTML += '<table id="game-one-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-one-five"
        console.log("e")
    }

    if (eaTeam5.history.gains[eaTeam5.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (eaTeam5.wins < 4 && eaTeam4.wins < 4 && finalStretch == 1) {

    if (game == 1) {
        colorCell = "game-one-one"
        rowOne.innerHTML += '<table id="game-one-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-one-two"
        rowOne.innerHTML += '<table id="game-one-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-one-three"
        rowOne.innerHTML += '<table id="game-one-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-one-four"
        rowOne.innerHTML += '<table id="game-one-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-one-five"
        rowOne.innerHTML += '<table id="game-one-six"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 6) {
        colorCell = "game-one-six"
        rowOne.innerHTML += '<table id="game-one-seven"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam5.skill + "</td><td>" + eaTeam5.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        eaTeam4.skill + "</td><td>" + eaTeam4.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 7) {
        colorCell = "game-one-seven"
    }

    if (eaTeam5.history.gains[eaTeam5.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam5.history.gains[eaTeam5.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = eaTeam4.history.gains[eaTeam4.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (finalStretch == 0) {
    if (eaTeam5.wins > 2) {
        colorCell = document.getElementById("game-one-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-one-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
} else if (finalStretch == 1) {
    if (eaTeam5.wins > 3) {
        colorCell = document.getElementById("game-one-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-one-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
}

///////////

if (weTeam4.wins < 3 && weTeam5.wins < 3 && finalStretch == 0) {

    if (game == 1) {
        colorCell = "game-two-one"
        rowTwo.innerHTML += '<table id="game-two-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-two-two"
        rowTwo.innerHTML += '<table id="game-two-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-two-three"
        rowTwo.innerHTML += '<table id="game-two-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-two-four"
        rowTwo.innerHTML += '<table id="game-two-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-two-five"
        console.log("e")
    }

    if (weTeam4.history.gains[weTeam4.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (weTeam4.wins < 4 && weTeam5.wins < 4 && finalStretch == 1) {

    if (game == 1) {
        colorCell = "game-two-one"
        rowTwo.innerHTML += '<table id="game-two-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-two-two"
        rowTwo.innerHTML += '<table id="game-two-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-two-three"
        rowTwo.innerHTML += '<table id="game-two-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-two-four"
        rowTwo.innerHTML += '<table id="game-two-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-two-five"
        rowTwo.innerHTML += '<table id="game-two-six"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 6) {
        colorCell = "game-two-six"
        rowTwo.innerHTML += '<table id="game-two-seven"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + weTeam4.skill + "</td><td>" + weTeam4.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam5.skill + "</td><td>" + weTeam5.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 7) {
        colorCell = "game-two-seven"
    }

    if (weTeam4.history.gains[weTeam4.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = weTeam4.history.gains[weTeam4.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam5.history.gains[weTeam5.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else if (finalStretch == 0) {
    if (weTeam4.wins > 2) {
        colorCell = document.getElementById("game-two-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-two-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
} else if (finalStretch == 1) {
    if (weTeam4.wins > 3) {
        colorCell = document.getElementById("game-two-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-two-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
}

}















const bestOfEnd = (game) => {

    let c = 0
    game == 1 ? c = 3 : c = 2

    if (weTeam1.losses < 99 && eaTeam1.losses < 99) {
        if (eaTeam1.wins >= 4) {      //// 7 games
            if (game == 4) {           /// 4
                console.log("1")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 5) {    /// 5
                console.log("2")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 6) {     //// 6
                console.log("3")
                colorCell = document.getElementById("game-one-six")
                colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            } else if (game == 7) {      ///// 7
                console.log("3")
                colorCell = document.getElementById("game-one-seven")
                colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "green"
                colorCell.rows[2].cells[c].style.color = "red"
            }
            weTeam1.losses = 99
        }  else if (weTeam1.wins >= 4) {    //// &&
            if (game == 4) {
                console.log("4")
                colorCell = document.getElementById("game-one-four")
                colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 5) {
                console.log("5")
                colorCell = document.getElementById("game-one-five")
                colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 6) {
                console.log("6")
                colorCell = document.getElementById("game-one-six")
                colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            } else if (game == 7) {
                console.log("6")
                colorCell = document.getElementById("game-one-seven")
                colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
                colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
                colorCell.rows[1].cells[c].style.color = "red"
                colorCell.rows[2].cells[c].style.color = "green"
            }
            eaTeam1.losses = 99
        }
    }


if (eaTeam1.wins < 4 && weTeam1.wins < 4) {

    if (game == 1) {
        colorCell = "game-one-one"
        rowOne.innerHTML += '<table id="game-one-two"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam1.skill + "</td><td>" + eaTeam1.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam1.skill + "</td><td>" + weTeam1.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("a")
    } else if (game == 2) {
        colorCell = "game-one-two"
        rowOne.innerHTML += '<table id="game-one-three"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam1.skill + "</td><td>" + eaTeam1.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam1.skill + "</td><td>" + weTeam1.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("b")
    } else if (game == 3) {
        colorCell = "game-one-three"
        rowOne.innerHTML += '<table id="game-one-four"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam1.skill + "</td><td>" + eaTeam1.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam1.skill + "</td><td>" + weTeam1.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("c")
    } else if (game == 4) {
        colorCell = "game-one-four"
        rowOne.innerHTML += '<table id="game-one-five"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam1.skill + "</td><td>" + eaTeam1.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam1.skill + "</td><td>" + weTeam1.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 5) {
        colorCell = "game-one-five"
        rowOne.innerHTML += '<table id="game-one-six"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam1.skill + "</td><td>" + eaTeam1.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam1.skill + "</td><td>" + weTeam1.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 6) {
        colorCell = "game-one-six"
        rowOne.innerHTML += '<table id="game-one-seven"><th>S</th><th>P</th><th>G</th>' + "<tr><td>" + eaTeam1.skill + "</td><td>" + eaTeam1.points + `</td><td>${game + 1}</td></tr><tr><td>` +
        weTeam1.skill + "</td><td>" + weTeam1.points + `</td><td>${game + 1}</td></tr></table>`
        console.log("d")
    } else if (game == 7) {
        colorCell = "game-one-seven"
    }

    if (eaTeam1.history.gains[eaTeam1.history.gains.length - 1] > 0) {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "green"
        colorCell.rows[2].cells[c].style.color = "red"
        console.log("f")
    } else {
        colorCell = document.getElementById(colorCell)
        colorCell.rows[1].cells[c].innerText = eaTeam1.history.gains[eaTeam1.history.gains.length - 1]
        colorCell.rows[2].cells[c].innerText = weTeam1.history.gains[weTeam1.history.gains.length - 1]
        colorCell.rows[1].cells[c].style.color = "red"
        colorCell.rows[2].cells[c].style.color = "green"
        console.log("g")
    }

} else {
    if (eaTeam1.wins > 3) {
        colorCell = document.getElementById("game-one-one")
        colorCell.rows[1].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("h")
    } else {
        colorCell = document.getElementById("game-one-one")
        colorCell.rows[2].cells[0].style.backgroundColor = "#8FFE7B"
        console.log("i")
    }
}  
}





const rowOrBox = () => {

    if (orgOrBae == 2) {
        rowOne = document.getElementById("first-playoff-row")
        rowTwo = document.getElementById("second-playoff-row")
        rowThree = document.getElementById("third-playoff-row")
        rowFour = document.getElementById("fourth-playoff-row")
        rowOne.style.height = "0px";
        rowOne.style.width = "0px";
        rowTwo.style.height = "0px";
        rowTwo.style.width = "0px";
        rowThree.style.height = "0px";
        rowThree.style.width = "0px";
        rowFour.style.height = "0px";
        rowFour.style.width = "0px";
        rowThree = document.getElementById("matchup-left-container")
        rowFour = document.getElementById("matchup-right-container")
        rowThree.style.height = "100%";
        rowThree.style.width = "50%";
        rowFour.style.height = "100%";
        rowFour.style.width = "50%";
        rowOne = document.getElementById("first-playoff-box")
        rowTwo = document.getElementById("second-playoff-box")
        rowThree = document.getElementById("third-playoff-box")
        rowFour = document.getElementById("fourth-playoff-box")
        rowOne.style.border = "thin solid black";
        rowTwo.style.border = "thin solid black";
        rowThree.style.border = "thin solid black";
        rowFour.style.border = "thin solid black";
    } else {
        
    }
}

let rightBox = 0
let leftBox = 0
let coverElement = null

const expandRightBox = () => {
    if (rightBox == 0) {
        coverElement = document.getElementById("cover-right")
        coverElement.style.zIndex = "0";
        coverElement.style.borderLeft = "6px solid black"
        coverElement.style.height = "101%";
        coverElement.style.fontSize = "68%"
        coverElement = document.getElementById("cover-left")
        coverElement.style.height = "10%";
        //font-size: 68%;
        rightBox++;
    } else if (rightBox == 1) {
        coverElement = document.getElementById("cover-right")
        coverElement.style.zIndex = "-1";
        coverElement.style.borderLeft = "none"
        coverElement.style.height = "10%";
        coverElement.style.fontSize = "68%"
        coverElement = document.getElementById("cover-left")
        coverElement.style.height = "10%";
        rightBox--;
    }
}

const expandLeftBox = () => {
    if (leftBox == 0) {
        coverElement = document.getElementById("cover-left")
        coverElement.style.zIndex = "0";
        coverElement.style.borderRight = "6px solid black"
        coverElement.style.height = "101%";
        coverElement.style.width = "99%";
        coverElement.style.fontSize = "68%"
        coverElement = document.getElementById("cover-right")
        coverElement.style.height = "10%";
        leftBox++;
    } else if (leftBox == 1) {
        coverElement = document.getElementById("cover-left")
        coverElement.style.zIndex = "-1";
        coverElement.style.borderRight = "none"
        coverElement.style.height = "10%";
        coverElement.style.fontSize = "68%"
        coverElement = document.getElementById("cover-right")
        coverElement.style.height = "10%";
        leftBox--;
    }
}

const oneBox = (n) => {

    let boxTempOne = null
    let boxTempTwo = null
    let boxTempThree = null

    if (n == 1) {
        boxTempOne = document.getElementById("second-playoff-box")
        boxTempTwo = document.getElementById("third-playoff-box")
        boxTempThree = document.getElementById("fourth-playoff-box")
        boxTempOne.style.backgroundColor = "transparent"
        boxTempTwo.style.backgroundColor = "transparent"
        boxTempThree.style.backgroundColor = "transparent"
    //    boxTempOne.style.border = "none"
    //    boxTempTwo.style.border = "none"
    //    boxTempThree.style.border = "none"
    } else if (n == 2) {
        boxTempOne = document.getElementById("second-playoff-box")
        boxTempTwo = document.getElementById("third-playoff-box")
        boxTempThree = document.getElementById("fourth-playoff-box")
        boxTempOne.style.backgroundColor = "#D9FDFF"
        boxTempTwo.style.backgroundColor = "transparent"
        boxTempThree.style.backgroundColor = "transparent"
    //    boxTempOne.style.border = "1px solid black"
    //    boxTempTwo.style.border = "none"
    //    boxTempThree.style.border = "none"
    } else if (n == 4) {
        boxTempOne = document.getElementById("second-playoff-box")
        boxTempTwo = document.getElementById("third-playoff-box")
        boxTempThree = document.getElementById("fourth-playoff-box")
        boxTempOne.style.backgroundColor = "#D9FDFF"
        boxTempTwo.style.backgroundColor = "#D9FDFF"
        boxTempThree.style.backgroundColor = "#D9FDFF"
     //   boxTempOne.style.border = "1px solid black"
     //   boxTempTwo.style.border = "1px solid black"
     //   boxTempThree.style.border = "1px solid black"
    }
}



//rowFour = document.getElementById("cover-right")
//rowFour.style.backgroundColor = "transparent"



// bestOfBase(1, 4, eaTeam5, eaTeam6, weTeam7, weTeam4, eaTeam4, eaTeam7, weTeam6, weTeam5)


const bestOfBase = (game, boxes, bestof, team1, team2, team3, team4, team5, team6, team7, team8) => {

    console.log("test")
    if (boxes >= 1) {
        if (team1.history.perfect < 3 && team2.history.perfect < 3 && bestof == 5 || team1.history.perfect < 4 && team2.history.perfect < 4 && bestof == 7) {
            let scoreChange = team1.history.matches[team1.history.matches.length - 1].split(" ")
            let winOrL = scoreChange[0] 
            let scoreChangeTwo = document.getElementById("score-one-side")
            scoreChange = scoreChange[scoreChange.length - 1].split("-")  // end up with array with two numbers, each representing runs scored
            console.log('1' + scoreChange + winOrL)  
        
            if (winOrL == "W") {
                scoreChangeTwo.innerHTML = `<font color="green">${scoreChange[0]}</font><br><font color="red">${scoreChange[1]}</font>`
                team1.history.perfect++
            } else {
                scoreChangeTwo.innerHTML = `<font color="red">${scoreChange[0]}</font><br><font color="green">${scoreChange[1]}</font>`
                team2.history.perfect++
            }



/// Fills the series history in grey at top right of box
            if (game > 1) {
                let gamesScroll = document.getElementById("games-one")
                let gamesChange = team1.history.matches[team1.history.matches.length - 2].split(" ")
                winOrL = gamesChange[0]
                gamesChange = gamesChange[gamesChange.length - 1].split("-")
        
                if (winOrL == "W") {
                    gamesScroll.innerHTML += `<p onclick="details(1, ${game - 1})" class="boxscore-p">${team1.name} ${gamesChange[0]} ${team2.name} ${gamesChange[1]}</p>`
                } else {
                    gamesScroll.innerHTML += `<p onclick="details(1, ${game - 1})" class="boxscore-p">${team2.name} ${gamesChange[1]} ${team1.name} ${gamesChange[0]}</p>`
                }
            }
        } 

        if (team1.wins < 3 && team2.wins < 3 && bestof == 5 || team1.wins < 4 && team2.wins < 4 && bestof == 7) {
                    
        } else {
            rowOne.style.backgroundColor = "rgb(104, 194, 206)"
        }



        if (boxes >= 2) {
            if (team3.history.perfect < 3 && team4.history.perfect < 3 && bestof == 5 || team3.history.perfect < 4 && team4.history.perfect < 4 && bestof == 7) {

                scoreChange = team3.history.matches[team3.history.matches.length - 1].split(" ")
                winOrL = scoreChange[0] 
                scoreChangeTwo = document.getElementById("score-two-side")
                scoreChange = scoreChange[scoreChange.length - 1].split("-")  // end up with array with two numbers, each representing runs scored
                console.log('2' + scoreChange + winOrL)       
                
                if (winOrL == "W") {
                    scoreChangeTwo.innerHTML = `<font color="green">${scoreChange[0]}</font><br><font color="red">${scoreChange[1]}</font>`
                    team3.history.perfect++
                } else {
                    scoreChangeTwo.innerHTML = `<font color="red">${scoreChange[0]}</font><br><font color="green">${scoreChange[1]}</font>`
                    team4.history.perfect++
                } 
            
            
/// Fills the series history in grey at top right of box
                if (game > 1) {
                    gamesScroll = document.getElementById("games-two")
                    gamesChange = team3.history.matches[team3.history.matches.length - 2].split(" ")
                    winOrL = gamesChange[0]
                    gamesChange = gamesChange[gamesChange.length - 1].split("-")
               // console.log('3' + scoreChange)
                
                    if (winOrL == "W") {
                        gamesScroll.innerHTML += `<p onclick="details(2, ${game - 1})" class="boxscore-p">${team3.name} ${gamesChange[0]} ${team4.name} ${gamesChange[1]}</p>`
                    } else {
                        gamesScroll.innerHTML += `<p onclick="details(2, ${game - 1})" class="boxscore-p">${team4.name} ${gamesChange[1]} ${team3.name} ${gamesChange[0]} </p>`
                    }
                }

            } 

            if (team3.wins < 3 && team4.wins < 3 && bestof == 5 || team3.wins < 4 && team4.wins < 4 && bestof == 7) {
                    
            } else {
                rowTwo.style.backgroundColor = "rgb(104, 194, 206)"
            }
            


            if (boxes >= 4) {
                if (team5.history.perfect < 3 && team6.history.perfect < 3 && bestof == 5 || team5.history.perfect < 4 && team6.history.perfect < 4 && bestof == 7) {

                    scoreChange = team5.history.matches[team5.history.matches.length - 1].split(" ")
                    winOrL = scoreChange[0] 
                    scoreChangeTwo = document.getElementById("score-three-side")
                    scoreChange = scoreChange[scoreChange.length - 1].split("-")  // end up with array with two numbers, each representing runs scored
                    console.log('3' + scoreChange + winOrL)

                    if (winOrL == "W") {
                        scoreChangeTwo.innerHTML = `<font color="green">${scoreChange[0]}</font><br><font color="red">${scoreChange[1]}</font>`
                        team5.history.perfect++
                    } else {
                        scoreChangeTwo.innerHTML = `<font color="red">${scoreChange[0]}</font><br><font color="green">${scoreChange[1]}</font>`
                        team6.history.perfect++
                    }

                                    /// Fills the series history in grey at top right of box
                    if (game > 1) {
                        gamesScroll = document.getElementById("games-three")
                        gamesChange = team5.history.matches[team5.history.matches.length - 2].split(" ")
                        winOrL = gamesChange[0]
                        gamesChange = gamesChange[gamesChange.length - 1].split("-")
            
                        if (winOrL == "W") {
                            gamesScroll.innerHTML += `<p onclick="details(3, ${game - 1})" class="boxscore-p">${team5.name} ${gamesChange[0]} ${team6.name} ${gamesChange[1]}</p>`
                        } else {
                            gamesScroll.innerHTML += `<p onclick="details(3, ${game - 1})" class="boxscore-p">${team6.name} ${gamesChange[1]} ${team5.name} ${gamesChange[0]}</p>`
                        }
                    }
                } 

                if (team5.wins < 3 && team6.wins < 3 && bestof == 5 || team5.wins < 4 && team6.wins < 4 && bestof == 7) {
                    
                } else {
                    rowThree.style.backgroundColor = "rgb(104, 194, 206)"
                }
                
                if (team7.history.perfect < 3 && team8.history.perfect < 3 && bestof == 5 || team7.history.perfect < 4 && team8.history.perfect < 4 && bestof == 7) {

                    scoreChange = team7.history.matches[team7.history.matches.length - 1].split(" ")
                    winOrL = scoreChange[0] 
                    scoreChangeTwo = document.getElementById("score-four-side")
                    scoreChange = scoreChange[scoreChange.length - 1].split("-")  // end up with array with two numbers, each representing runs scored
                    console.log('4' + scoreChange + winOrL)
                    
                    if (winOrL == "W") {
                        scoreChangeTwo.innerHTML = `<font color="green">${scoreChange[0]}</font><br><font color="red">${scoreChange[1]}</font>`
                        team7.history.perfect++
                    } else {
                        scoreChangeTwo.innerHTML = `<font color="red">${scoreChange[0]}</font><br><font color="green">${scoreChange[1]}</font>`
                        team8.history.perfect++
                    }
    
                    if (game > 1) {
                        gamesScroll = document.getElementById("games-four")
                        gamesChange = team7.history.matches[team7.history.matches.length - 2].split(" ")
                        winOrL = gamesChange[0]
                        gamesChange = gamesChange[gamesChange.length - 1].split("-")
                
                        if (winOrL == "W") {
                            gamesScroll.innerHTML += `<p onclick="details(4, ${game - 1})" class="boxscore-p">${team7.name} ${gamesChange[0]} ${team8.name} ${gamesChange[1]}</p>`
                        } else {
                            gamesScroll.innerHTML += `<p onclick="details(4, ${game - 1})" class="boxscore-p">${team8.name} ${gamesChange[1]} ${team7.name} ${gamesChange[0]}</p>`
                        }
                    }

                }
                
                if (team7.wins < 3 && team8.wins < 3 && bestof == 5 || team7.wins < 4 && team8.wins < 4 && bestof == 7) {
                    
                } else {
                    rowFour.style.backgroundColor = "rgb(104, 194, 206)"
                }
            }
        }
    }
 }



 










 const leaderBoards = () => {
    console.log("boards")
    if (orgOrBae == 2 && document.getElementById("table").style.display !== "none") {
        document.getElementById("table").style.display = "none"
        document.getElementById("table-two").style.display = "block"
        generateTableTwo();
    } else if (orgOrBae == 2 && document.getElementById("table").style.display == "none") {
        document.getElementById("table").style.display = "block"
        document.getElementById("table-two").style.display = "none"
    }
}

const generatePlayerComparison = () => {
    for (let i = 0; i < teams.length; i++) {
        teams[i].players.position1.teamname = teams[i].name
        comparePlayers.push(teams[i].players.position1)
        teams[i].players.position2.teamname = teams[i].name
        comparePlayers.push(teams[i].players.position2)
        teams[i].players.position3.teamname = teams[i].name
        comparePlayers.push(teams[i].players.position3)
        teams[i].players.position4.teamname = teams[i].name
        comparePlayers.push(teams[i].players.position4)
        teams[i].players.position5.teamname = teams[i].name
        comparePlayers.push(teams[i].players.position5)
        teams[i].players.position6.teamname = teams[i].name
        comparePlayers.push(teams[i].players.position6)
        teams[i].players.position7.teamname = teams[i].name
        comparePlayers.push(teams[i].players.position7)
        teams[i].players.position8.teamname = teams[i].name
        comparePlayers.push(teams[i].players.position8)
        teams[i].players.position9.teamname = teams[i].name
        comparePlayers.push(teams[i].players.position9)
    }

    playerPicked = 1

    teams = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15, team16, team17, team18, team19, team20, team21, team22, team23, team24, team25, team26, team27, team28, team29, team30]
    teamsEast = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15]
    teamsWest = [team16, team17, team18, team19, team20, team21, team22, team23, team24, team25, team26, team27, team28, team29, team30]

    /// Change sidebar while we're at it
    cleanUpSidebar()

}


const cleanUpSidebar = () => {

    document.getElementById("sidebar-remove").innerHTML = '<span id="new-span"><button onclick="clickStart()" id="button">Start</button></span>'
    document.getElementById("sidebar-remove").style.padding = '1px'

    if (playerPicked == 1) {
        playerOne !== "" ? document.getElementById("sidebar-remove").innerHTML += '<div id="player-names"></div>' : console.log('no players')
        playerOne !== "" ? document.getElementById("player-names").innerHTML += `<span id="player-line-break">Player 1: <font color="#FF0000">${playerOne} &nbsp` : console.log('no players')
        playerTwo !== "" ? document.getElementById("player-names").innerHTML += `<span id="player-line-break">Player 2: <font color="#00BFFF">${playerTwo} &nbsp` : console.log('no players')
        playerThree !== "" ? document.getElementById("player-names").innerHTML += `<span id="player-line-break">Player 3: <font color="#008080">${playerThree} &nbsp` : console.log('no players')
        playerFour !== "" ? document.getElementById("player-names").innerHTML += `<span id="player-line-break">Player 4: <font color="#ffa500">${playerFour}` : console.log('no players')
    }
}



const setPlayerLeaderboard = (sortby) => {

    console.log("setPlayerLB")

    if (sortby == 'runs') {

        comparePlayers.sort(function(a, b) {

            return b.runs - a.runs
        
        })

    } else if (sortby == 'hits') {

        comparePlayers.sort(function(a, b) {

            return b.hits - a.hits
        
        })

    } else if (sortby == 'dubs') {

        comparePlayers.sort(function(a, b) {

            return b.dubsplus[0] - a.dubsplus[0]
        
        })

    } else if (sortby == 'trips') {

        comparePlayers.sort(function(a, b) {

            return b.dubsplus[1] - a.dubsplus[1]
        
        })

    } else if (sortby == 'hr') {

        comparePlayers.sort(function(a, b) {

            return b.homeruns - a.homeruns
        
        })

    } else if (sortby == 'grand') {

        comparePlayers.sort(function(a, b) {

            return b.dubsplus[2] - a.dubsplus[2]
        
        })

    } else if (sortby == 'rbi') {

        comparePlayers.sort(function(a, b) {

            return b.rbi - a.rbi
        
        })

    } else if (sortby == 'sb') {

        comparePlayers.sort(function(a, b) {

            return b.stolenbases - a.stolenbases
        
        })

    } else if (sortby == 'so') {

        comparePlayers.sort(function(a, b) {

            return b.strikeouts - a.strikeouts
        
        })

    } else if (sortby == 'field') {

        comparePlayers.sort(function(a, b) {

            return b.attributes[2] - a.attributes[2]
        
        })

    } else if (sortby == 'team') {
        
        teamPlayersShow == 0 ? teamPlayersShow++ : teamPlayersShow--
    }
    console.log("generateTB")
    generateTableTwo()
    console.log("generateTB finished")
};

const generateTableTwo = () => {

    let newTable = document.getElementById("table-two")
    let printOnTable = ""
    newTable.innerHTML = ""

    printOnTable += `<th id="baseball-table" onclick="leaderBoards()">[-]</th><th></th><th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('runs');">R</th>
                     <th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('hits')">H</th>
                     <th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('dubs')">D</th><th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('trips')">T</th>
                     <th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('hr')">HR</th><th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('grand')">GS</th>
                     <th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('rbi')">RBI</th><th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('sb')">SB</th>
                     <th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('so')">SO</th><th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('field')">F</th>
                     <th class="header-sort" id="header-hover" onclick="setPlayerLeaderboard('team')">Team</th>`
                    
    for (let i = 0; i < 50; i++) {

        let nameForNow = ''
        teamPlayersShow == 0 ? nameForNow = comparePlayers[i].name : nameForNow = colorBoldN(i)

        printOnTable += `<tr><td>${i + 1}</td><td>${nameForNow}</td><td>${comparePlayers[i].runs}</td><td>${comparePlayers[i].hits}</td>` +
                        `<td>${comparePlayers[i].dubsplus[0]}</td><td>${comparePlayers[i].dubsplus[1]}</td><td>${comparePlayers[i].homeruns}</td>` + 
                        `<td>${comparePlayers[i].dubsplus[2]}</td><td>${comparePlayers[i].rbi}</td><td>${comparePlayers[i].stolenbases}</td>` + 
                        `<td>${comparePlayers[i].strikeouts}</td><td>${comparePlayers[i].attributes[2].toFixed()}</td><td>${comparePlayers[i].teamname}</td></tr>`
                        console.log('for++')
    }

    newTable.innerHTML += printOnTable

}

let teamPlayersShow = 0
let tee1 = null
let tee2 = null
let tee3 = null
let tee4 = null
let tee5 = null
let tee6 = null
let tee7 = null
let tew1 = null
let tew2 = null
let tew3 = null
let tew4 = null
let tew5 = null
let tew6 = null
let tew7 = null


const colorBoldN = (i) => {

    console.log('colorBold')

    let coloredName = ''

    if (teamPlayersShow == 1) {
        if (comparePlayers[i].teamname == playerOne) {
            coloredName = `<font color="#FF0000">${comparePlayers[i].name}</font>`
        } else if (comparePlayers[i].teamname == playerTwo) {
            coloredName = `<font color="#00BFFF">${comparePlayers[i].name}</font>`
        } else if (comparePlayers[i].teamname == playerThree) {
            coloredName = `<font color="#008080">${comparePlayers[i].name}</font>`
        } else if (comparePlayers[i].teamname == playerFour) {
            coloredName = `<font color="#ffa500">${comparePlayers[i].name}</font>`
        } else if (playoffSteps >= 1) {

            if (comparePlayers[i].teamname == tee1.name || comparePlayers[i].teamname == tee2.name ||
                comparePlayers[i].teamname == tee3.name || comparePlayers[i].teamname == tee4.name ||
                comparePlayers[i].teamname == tee5.name || comparePlayers[i].teamname == tee6.name ||
                comparePlayers[i].teamname == tee7.name || comparePlayers[i].teamname == tew1.name ||
                comparePlayers[i].teamname == tew2.name || comparePlayers[i].teamname == tew3.name ||
                comparePlayers[i].teamname == tew4.name || comparePlayers[i].teamname == tew5.name ||
                comparePlayers[i].teamname == tew6.name || comparePlayers[i].teamname == tew7.name) {
            
                coloredName = `<b>${comparePlayers[i].name}</b>`
            } else {
                coloredName = comparePlayers[i].name
            }
            
        } else {
            coloredName = comparePlayers[i].name
        }

    } else {
        coloredName = comparePlayers[i].name
    }

    return coloredName
}

const helpColorSystem = () => {

    tee1 = eaTeam1
    tee2 = eaTeam2
    tee3 = eaTeam3
    tee4 = eaTeam4
    tee5 = eaTeam5
    tee6 = eaTeam6
    tee7 = eaTeam7

    tew1 = weTeam1
    tew2 = weTeam2
    tew3 = weTeam3
    tew4 = weTeam4
    tew5 = weTeam5
    tew6 = weTeam6
    tew7 = weTeam7
}


///// A N I M A T E     M A T C H       R E P O R T     F E A T U R E 


let currentMatchReport;

const animateWindow = () => {
    if (team1.history.matches.length == 0 || currentMatchReport.length !== 3) return
    let testSpace = document.getElementById("test-space").style.display
    let teamScores = document.getElementById('team-scores')
    let scrollDown = document.getElementById('set-interval')
    let homeAway;
    if (testSpace === "none" || testSpace === "") {
        console.log('appear')
        // un-comment this if need be:  document.getElementById("test-space").style.display = "block"
        unfade(document.getElementById("test-space"))
        //testSpace = "block"
        scrollDown.scrollIntoView()
        //window.scrollBy(0, 220)
        homeAway = findHomeTeam()
        cleanAnimateArea(1)
        homeAway = determineTeamsAndHomeAway(homeAway)
        console.log('This is homeAway: ')
        console.log(homeAway)
        console.log(homeAway[0])
        console.log(homeAway[0].name)
        onDeckCircle = [2, 2]
        teamScores.innerHTML = `${homeAway[0].name} - 0<br>${homeAway[1].name} - 0`
        setTimeout(() => nextInning(homeAway[0], homeAway[1], currentMatchReport[2], 0, [0, 0]), 2000)
    } else {
        console.log('remove')
        //document.getElementById("test-space").style.display = "none"
        fade(document.getElementById("test-space"))
        //testSpace = "none"
    }
}

function findHomeTeam() {

    let animateThisMatch = currentMatchReport.slice(2)[0]
    let trueIfHomeTeam = true
    let usefulArray = []
    
    for (let i = 0; ; i++) {
        if (animateThisMatch[i] === 'Inning') {
            trueIfHomeTeam ? trueIfHomeTeam = false : trueIfHomeTeam = true;
        }
        if (animateThisMatch[i] === 'singles!' || animateThisMatch[i] === 'doubles!' || animateThisMatch[i] === 'strikes' ||
            animateThisMatch[i] === 'triples!' || animateThisMatch[i] === 'hit') {
            
            let firstPlayerToShow = animateThisMatch[i - 1]
            //return firstPlayerToShow
            console.log('1 deep')
            for (let el in teams) {
                if (teams[el].name === currentMatchReport[0]) {
                    console.log('2 deep')
                    for (let pl in teams[el].players) {
                        if (teams[el].players[pl].name.split(" ")[1] === firstPlayerToShow) {
                            console.log('firstPlayerToShow')
                            console.log('we got there in the end!')
                            if (trueIfHomeTeam) {
                                usefulArray.push(teams[el])
                                usefulArray.push('Home')
                                console.log(usefulArray)
                            } else {
                                usefulArray.push(teams[el])
                                usefulArray.push('Away')
                                console.log(usefulArray)
                            }
                        }
                    }
                    console.log('2 end')
                    console.log(usefulArray)
                    if (usefulArray[0] !== undefined) {
                        break;
                    } else {
                        if (trueIfHomeTeam) {
                            usefulArray.push(currentMatchReport[1])
                            usefulArray.push('Home')
                            console.log(usefulArray)
                        } else {
                            usefulArray.push(currentMatchReport[1])
                            usefulArray.push('Away')
                            console.log(usefulArray)
                        }
                        break;
                    }
                }
            }
            break;
        }
    }
    return usefulArray;
    //findHomeTeamPartTwo(firstPlayerToShow, animateThisMatch, trueIfHomeTeam)
}

function cleanAnimateArea(x) {

    if (x == 1) {
        document.getElementById('team-scores').innerHTML = ''
        document.getElementById('team-batting').innerHTML = ''
    }

    document.getElementById('batter').innerHTML = ''
    document.getElementById('fb-runner').innerHTML = ''
    document.getElementById('sb-runner').innerHTML = ''
    document.getElementById('tb-runner').innerHTML = ''
    document.getElementById('pitcher').innerHTML = ''
    document.getElementById('catcher').innerHTML = ''
    document.getElementById('first-baseman').innerHTML = ''
    document.getElementById('second-baseman').innerHTML = ''
    document.getElementById('third-baseman').innerHTML = ''
    document.getElementById('shortstop').innerHTML = ''
    document.getElementById('left-field').innerHTML = ''
    document.getElementById('right-field').innerHTML = ''
    document.getElementById('center-field').innerHTML = ''
    document.getElementById('hit-type-one').style.display = 'none'
    document.getElementById('hit-type-two').style.display = 'none'
    document.getElementById('hit-type-three').style.display = 'none'
    document.getElementById('hit-type-four').style.display = 'none'
    document.getElementById('hit-type-five').style.display = 'none'
    document.getElementById('hit-type-six').style.display = 'none'
    document.getElementById('hit-type-seven').style.display = 'none'
    document.getElementById('hit-type-eight').style.display = 'none'
    document.getElementById('hit-type-nine').style.display = 'none'
    document.getElementById('field').style.border = 'none'
    //document.getElementById('inning').innerHTML = 'INNING 0.5'
    document.getElementById('outs').innerHTML = '0 Out(s)'
    document.getElementById('at-bat').innerHTML = 'ON DECK:'
    document.getElementById('pitcher').style.color = 'grey'
    document.getElementById('batter').style.color = 'yellow'
}

function determineTeamsAndHomeAway(homeAway) { /// Away team bats first so second object in array should be Home team
    let animatedTeams = []
    let finalOrder = []
    for(let el in teams) {
        if (teams[el].name === currentMatchReport[0] || teams[el].name === currentMatchReport[1]) animatedTeams.push(teams[el])
        if (animatedTeams.length === 2) break;  
    }
    console.log('animatedTeams:')
    console.log(animatedTeams)
    if (homeAway[1] === 'Away') {
        if (homeAway[0] === animatedTeams[0].name || homeAway[0].name === animatedTeams[0].name) {
            finalOrder.push(animatedTeams[0])
        } else {
            finalOrder.push(animatedTeams[1])
        }
        finalOrder[0] === animatedTeams[0] ? finalOrder.push(animatedTeams[1]) : finalOrder.push(animatedTeams[0])
    } else {
        if (homeAway[0] === animatedTeams[0].name || homeAway[0].name === animatedTeams[0].name) {
            finalOrder.push(animatedTeams[1])
        } else {
            finalOrder.push(animatedTeams[0])
        }
        finalOrder[0] === animatedTeams[0] ? finalOrder.push(animatedTeams[1]) : finalOrder.push(animatedTeams[0])
        //homeAway[0] === animatedTeams[0].name ? finalOrder.push(animatedTeams[1]) : finalOrder.push(animatedTeams[0])
        //finalOrder[0] === animatedTeams[0] ? finalOrder.push(animatedTeams[1]) : finalOrder.push(animatedTeams[0])
        //finalOrder.push(homeAway[0])
    }
    console.log('order set')
    return finalOrder
}

// Lav, Kiwi
function nextInning(away, home, report, inning, scoreboard, index = 0, leadoff = 2) {
    inning += .5
    let hitters;
    let fielders;
    leadoff >= 10 ? leadoff = 2 : undefined
  //let swap = [away, home];
    if (document.getElementById('team-batting').innerHTML.split(" ")[0] == '') {
        hitters = away //hitters !== swap[0] ? hitters = swap[0] : hitters = swap[1]
        fielders = home
        console.log('START: AWAY TEAM BATTING')
    } else {
        hitters = home
        fielders = away
        if (inning % 1 == .5) {
            onDeckCircle[1] = leadoff
            leadoff = onDeckCircle[0]
            console.log('AWAY TEAM BATTING AGAIN')
        } else {
            onDeckCircle[0] = leadoff
            leadoff = onDeckCircle[1]
            console.log('HOME TEAM BATTING')
        }
    } 
    
    let changeSpeed = document.getElementById("set-interval").value 
    if (changeSpeed !== setWaitTime) {
        if (changeSpeed >= 1 && changeSpeed <= 5000) {
            setWaitTime = changeSpeed
            console.log('speed changed')
        }
    }

    cleanAnimateArea(2)
    console.log('after')
    console.log(hitters.name)
    console.log(fielders.name)
    document.getElementById('inning').innerHTML = `INNING ${inning}<br>`
    document.getElementById('team-batting').innerHTML = `${hitters.name} at bat.`
    document.getElementById('at-bat').innerHTML = 'ON DECK:<br>'
    document.getElementById('batter').innerHTML = hitters.players[`position${leadoff}`].name.split(" ")[1]
    onDeck(hitters, leadoff)
    document.getElementById('pitcher').innerHTML = fielders.players['position1'].name.split(" ")[1]
    document.getElementById('catcher').innerHTML = fielders.players['position2'].name.split(" ")[1]
    document.getElementById('first-baseman').innerHTML = fielders.players['position3'].name.split(" ")[1]
    document.getElementById('second-baseman').innerHTML = fielders.players['position4'].name.split(" ")[1]
    document.getElementById('shortstop').innerHTML = fielders.players['position5'].name.split(" ")[1]
    document.getElementById('third-baseman').innerHTML = fielders.players['position6'].name.split(" ")[1]
    document.getElementById('left-field').innerHTML = fielders.players['position7'].name.split(" ")[1]
    document.getElementById('right-field').innerHTML = fielders.players['position8'].name.split(" ")[1]
    document.getElementById('center-field').innerHTML = fielders.players['position9'].name.split(" ")[1]
    console.log('next inning')
    setTimeout(() => {
        battingSequence(hitters, fielders, report, leadoff, inning, scoreboard, index);
    }, setWaitTime)
}

function battingSequence(hitters, fielders, report, leadoff, inning, scoreboard, index = 0) {
    let nextIndexIfFalse = false;
    let elementId;
    if (document.getElementById("test-space").style.display == 'none') {
        console.log('exited animation')
        return
    }
    if (index >= report.length) {
        if (scoreboard[0] > 30 || scoreboard[1] > 30) {
            document.getElementById('inning').innerHTML += '<br>Mercy Rule.' 
        }
        document.getElementById('inning').innerHTML += '<br>Game Over.' 
        return
    }
    if (report[index] === 'singles!' || report[index] === 'Ground') {
        let randomLine = Math.floor(Math.random() * 2)
        if (randomLine === 0) {
            elementId = document.getElementById('hit-type-one')
            elementId.style.display = 'block'
            //document.getElementById('hit-type-one').style.display = 'block'
        } else if (randomLine === 1) {
            elementId = document.getElementById('hit-type-two')
            elementId.style.display = 'block'
            //document.getElementById('hit-type-two').style.display = 'block'
        } else {
            elementId = document.getElementById('hit-type-three')
            elementId.style.display = 'block'
            //document.getElementById('hit-type-three').style.display = 'block'
        }
        nextIndexIfFalse = true;
        report[index] === 'singles!' ? elementId.style.borderColor = 'yellow' : elementId.style.borderColor = 'red'
        report[index] === 'singles!' ? document.getElementById('batter').style.color = 'yellow' : document.getElementById('batter').style.color = 'red'
    } else if (report[index] === 'doubles!' || report[index] === 'triples!' || report[index] === 'Fly') {
        let randomLine = Math.floor(Math.random() * 2)
        if (randomLine === 0) {
            elementId = document.getElementById('hit-type-four')
            elementId.style.display = 'block'
        } else if (randomLine === 1) {
            elementId = document.getElementById('hit-type-five')
            elementId.style.display = 'block'
        } else {
            elementId = document.getElementById('hit-type-six')
            elementId.style.display = 'block'
        }
        nextIndexIfFalse = true;
        report[index] === 'Fly' ? elementId.style.borderColor = 'red' : elementId.style.borderColor = 'yellow'
        report[index] === 'Fly' ? document.getElementById('batter').style.color = 'red' : document.getElementById('batter').style.color = 'yellow'
    } else if (report[index] === 'HR!') {
        let randomLine = Math.floor(Math.random() * 2)
        if (randomLine === 0) {
            elementId = document.getElementById('hit-type-seven')
            elementId.style.display = 'block'
        } else if (randomLine === 1) {
            elementId = document.getElementById('hit-type-eight')
            elementId.style.display = 'block'
        } else {
            elementId = document.getElementById('hit-type-nine')
            elementId.style.display = 'block'
        }
        nextIndexIfFalse = true;
        elementId.style.borderColor = 'yellow'
    } else if (report[index] === 'strikes') {
            document.getElementById('batter').style.color = 'red'
            document.getElementById('pitcher').style.color = 'maroon'
            nextIndexIfFalse = true;
    } else if (report[index] === 'steals') {
        if (report[index +1] === '2nd.') {
            document.getElementById('field').style.borderTopStyle = 'solid'
            document.getElementById('field').style.borderTopWidth = '5px'
            document.getElementById('field').style.borderTopColor = 'teal'
        } else {
            document.getElementById('field').style.borderLeftStyle = 'solid'
            document.getElementById('field').style.borderLeftWidth = '5px'
            document.getElementById('field').style.borderLeftColor = 'teal'
        } 
        nextIndexIfFalse = true;
    }

    if (report[index] === 'singles!' || report[index] === 'doubles!' || report[index] === 'triples!') {
        document.getElementById('inning').innerHTML += `<br> ${report[index - 1]} ${report[index]}`
    } else if (report[index] === 'HR!') {
        document.getElementById('inning').innerHTML += `<br> ${report[index - 3]} ${report[index - 2]} ${report[index - 1]} ${report[index]}`
    } else if (report[index] === 'Ground' || report[index] === 'Fly') {
        document.getElementById('inning').innerHTML += `<br> ${report[index]} ${report[index + 1]}`
    } else if (report[index] === 'strikes' || report[index] === 'steals') {
        document.getElementById('inning').innerHTML += `<br> ${report[index - 1]} ${report[index]} ${report[index + 1]}`
    }

    if (nextIndexIfFalse == true) {
        console.log('timeout then runningSeq')
        setTimeout(() => {
            runningSequence(hitters, fielders, report, leadoff, inning, scoreboard, index)
        }, setWaitTime)
    } else {
        console.log('skip index')
        index++
        battingSequence(hitters, fielders, report, leadoff, inning, scoreboard, index)
    }
}

function runningSequence(hitters, fielders, report, leadoff, inning, scoreboard, index) {
    let bBatter = document.getElementById('batter').innerHTML
    let firstB = document.getElementById('fb-runner').innerHTML
    let secondB = document.getElementById('sb-runner').innerHTML
    let thirdB = document.getElementById('tb-runner').innerHTML
    let runsRunsRuns = 0
    if (document.getElementById("test-space").style.display == 'none') {
        console.log('exited animation')
        return
    }
    if (report[index] === 'singles!') {
        if (thirdB !== '') {
            thirdB = ''
            document.getElementById('tb-runner').innerHTML = ''
            runsRunsRuns += 1
            document.getElementById('field').style.borderBottomStyle = 'solid'
            document.getElementById('field').style.borderBottomWidth = '5px'
            document.getElementById('field').style.borderBottomColor = 'green'
        }
        if (secondB !== '') {
            thirdB = secondB
            document.getElementById('tb-runner').innerHTML = secondB
            document.getElementById('sb-runner').innerHTML = ''
            document.getElementById('field').style.borderLeftStyle = 'solid'
            document.getElementById('field').style.borderLeftWidth = '5px'
            document.getElementById('field').style.borderLeftColor = 'green'
        }
        if (firstB !== '') {
            secondB = firstB
            document.getElementById('sb-runner').innerHTML = firstB
            document.getElementById('fb-runner').innerHTML = ''
            document.getElementById('field').style.borderTopStyle = 'solid'
            document.getElementById('field').style.borderTopWidth = '5px'
            document.getElementById('field').style.borderTopColor = 'green'
        }
        document.getElementById('fb-runner').innerHTML = bBatter
        document.getElementById('batter').innerHTML = ''
        document.getElementById('field').style.borderRightStyle = 'solid'
        document.getElementById('field').style.borderRightWidth = '5px'
        document.getElementById('field').style.borderRightColor = 'green'
        firstB = bBatter
        bBatter = ''
    } else if (report[index] === 'doubles!') {
        if (thirdB !== '') {
            thirdB = ''
            document.getElementById('tb-runner').innerHTML = ''
            runsRunsRuns += 1
            document.getElementById('field').style.borderBottomStyle = 'solid'
            document.getElementById('field').style.borderBottomWidth = '5px'
            document.getElementById('field').style.borderBottomColor = 'green'
        }
        if (secondB !== '') {
            secondB = ''
            document.getElementById('sb-runner').innerHTML = ''
            runsRunsRuns += 1
            document.getElementById('field').style.borderLeftStyle = 'solid'
            document.getElementById('field').style.borderLeftWidth = '5px'
            document.getElementById('field').style.borderLeftColor = 'green'
            document.getElementById('field').style.borderBottomStyle = 'solid'
            document.getElementById('field').style.borderBottomWidth = '5px'
            document.getElementById('field').style.borderBottomColor = 'green'
        }
        if (firstB !== '') {
            document.getElementById('fb-runner').innerHTML = ''
            document.getElementById('tb-runner').innerHTML = firstB
            //thirdB = firstB
            document.getElementById('field').style.borderLeftStyle = 'solid'
            document.getElementById('field').style.borderLeftWidth = '5px'
            document.getElementById('field').style.borderLeftColor = 'green'
        }
        document.getElementById('field').style.borderRightStyle = 'solid'
        document.getElementById('field').style.borderRightWidth = '5px'
        document.getElementById('field').style.borderRightColor = 'green'
        document.getElementById('field').style.borderTopStyle = 'solid'
        document.getElementById('field').style.borderTopWidth = '5px'
        document.getElementById('field').style.borderTopColor = 'green'
        document.getElementById('sb-runner').innerHTML = bBatter
        document.getElementById('batter').innerHTML = ''
        //secondB = bBatter
        bBatter = ''
    } else if (report[index] === 'triples!') {
        if (thirdB !== '') {
            thirdB = ''
            document.getElementById('tb-runner').innerHTML = ''
            runsRunsRuns += 1
            document.getElementById('field').style.borderBottomStyle = 'solid'
            document.getElementById('field').style.borderBottomWidth = '5px'
            document.getElementById('field').style.borderBottomColor = 'green'
        }
        if (secondB !== '') {
            secondB = ''
            document.getElementById('sb-runner').innerHTML = ''
            runsRunsRuns += 1
            document.getElementById('field').style.borderBottomStyle = 'solid'
            document.getElementById('field').style.borderBottomWidth = '5px'
            document.getElementById('field').style.borderBottomColor = 'green'
        }
        if (firstB !== '') {
            firstB = ''
            document.getElementById('fb-runner').innerHTML = ''
            runsRunsRuns += 1
            document.getElementById('field').style.borderBottomStyle = 'solid'
            document.getElementById('field').style.borderBottomWidth = '5px'
            document.getElementById('field').style.borderBottomColor = 'green'
        }
        document.getElementById('field').style.borderLeftStyle = 'solid'
        document.getElementById('field').style.borderLeftWidth = '5px'
        document.getElementById('field').style.borderLeftColor = 'green'
        document.getElementById('field').style.borderTopStyle = 'solid'
        document.getElementById('field').style.borderTopWidth = '5px'
        document.getElementById('field').style.borderTopColor = 'green'
        document.getElementById('field').style.borderRightStyle = 'solid'
        document.getElementById('field').style.borderRightWidth = '5px'
        document.getElementById('field').style.borderRightColor = 'green'
        document.getElementById('tb-runner').innerHTML = bBatter
        document.getElementById('batter').innerHTML = ''
        //thirdB = bBatter
        bBatter = ''
    } else if (report[index] === 'HR!') {
        if (thirdB !== '') {
            thirdB = ''
            document.getElementById('tb-runner').innerHTML = ''
            runsRunsRuns += 1
        }
        if (secondB !== '') {
            secondB = ''
            document.getElementById('sb-runner').innerHTML = ''
            runsRunsRuns += 1
        }
        if (firstB !== '') {
            firstB = ''
            document.getElementById('fb-runner').innerHTML = ''
            runsRunsRuns += 1
        }
        document.getElementById('field').style.border = '5px solid green'
        runsRunsRuns += 1
        bBatter = ''
    } else if (report[index] === 'steals') {
        if (report[index + 1] === '2nd.') {
            document.getElementById('sb-runner').innerHTML = firstB
            document.getElementById('fb-runner').innerHTML = ''
            secondB = firstB
        } else {
            document.getElementById('tb-runner').innerHTML = secondB
            document.getElementById('sb-runner').innerHTML = ''
            thirdB = secondB
        }
    } else if (report[index] === 'Fly' || report[index] === 'Ground' || report[index] === 'strikes') {
        let outsNum = document.getElementById('outs').innerHTML[0]
        if (outsNum == 0) {
            document.getElementById('outs').innerHTML = `1 Out(s)`
        } else if (outsNum == 1) {
            document.getElementById('outs').innerHTML = `2 Out(s)`
        } else if (outsNum == 2) {
            document.getElementById('outs').innerHTML = `3 Out(s)`
            console.log('end this madness')
            leadoff++
            index++
            return nextInning(hitters, fielders, report, inning, scoreboard, index, leadoff)
        }
    }
    if (runsRunsRuns > 0) {
        console.log('a run was scored')
        scoreboard = updateScore(hitters, fielders, runsRunsRuns, scoreboard)
        console.log(`this is the scoreboard: ${scoreboard}`)
    }
    console.log('runningSeq')
setTimeout(() => {
    console.log('cleanfield')
    cleanField()
    report[index] !== 'steals' ? leadoff++ : undefined
    leadoff >= 10 ? leadoff = 2 : undefined
    report[index] !== 'steals' ? document.getElementById('batter').innerHTML = '' : undefined
    report[index] == 'strikes' ? document.getElementById('pitcher').style.color = 'grey' : undefined
    index++
}, setWaitTime / 2)

setTimeout(() => {
    document.getElementById('batter').style.color = 'yellow'
    report[index] !== 'steals' ? nextBatter(hitters, leadoff) : undefined
}, setWaitTime / 1.2)

setTimeout(() => {
    console.log('after clean')
    battingSequence(hitters, fielders, report, leadoff, inning, scoreboard, index)
}, setWaitTime) /// an example of recursion. battingSeq invokes runningSeq, which invokes battingSeq again. This 
}              /// loop continues until a 'base case' return statement within the function stops it.  

let setWaitTime = 1500;
let onDeckCircle = [2, 2]


function nextBatter(hitters, leadoff) {
    console.log('nextBatter')
    document.getElementById('batter').innerHTML = hitters.players[`position${leadoff}`].name.split(" ")[1]
    document.getElementById('at-bat').innerHTML = 'ON DECK:<br>'
    onDeck(hitters, leadoff)
}


function cleanField() {
    document.getElementById('hit-type-one').style.display = 'none'
    document.getElementById('hit-type-two').style.display = 'none'
    document.getElementById('hit-type-three').style.display = 'none'
    document.getElementById('hit-type-four').style.display = 'none'
    document.getElementById('hit-type-five').style.display = 'none'
    document.getElementById('hit-type-six').style.display = 'none'
    document.getElementById('hit-type-seven').style.display = 'none'
    document.getElementById('hit-type-eight').style.display = 'none'
    document.getElementById('hit-type-nine').style.display = 'none'
    document.getElementById('field').style.border = 'none'
}

function onDeck(hitters, leadoff) {
    let oneBat;
    let twoBat; 
    let threeBat;
    if (leadoff == 7) {
        oneBat = 8
        twoBat = 9
        threeBat = 2
    } else if (leadoff == 8) {
        oneBat = 9
        twoBat = 2
        threeBat = 3
    } else if (leadoff == 9) {
        oneBat = 2
        twoBat = 3
        threeBat = 4
    } else {
        oneBat = leadoff + 1
        twoBat = leadoff + 2
        threeBat = leadoff + 3
    }
    document.getElementById('at-bat').innerHTML += '<br>' + hitters.players[`position${oneBat}`].name +
                                                   '<br>' + hitters.players[`position${twoBat}`].name +
                                                   '<br>' + hitters.players[`position${threeBat}`].name
}

function updateScore(hitters, fielders, runs, scoreboard) {
    console.log('calc runs')
    if (document.getElementById('team-scores').innerText.split(" ")[0] == hitters.name) {
        document.getElementById('team-scores').innerHTML = `<span id="highlight-top">${hitters.name} - ${scoreboard[0] + runs}</span><br><span id="highlight-bottom">${fielders.name} - ${scoreboard[1]}`
        scoreboard[0] += runs
        highlight(document.getElementById('highlight-top'), [230, 182, 182], [255, 255, 255])
        setTimeout(() => {
            highlight(document.getElementById('highlight-top'), [255, 255, 255], [230, 182, 182])
        }, setWaitTime * 3)
    } else {
        document.getElementById('team-scores').innerHTML = `<span id="highlight-top">${fielders.name} - ${scoreboard[0]}</span><br><span id="highlight-bottom">${hitters.name} - ${scoreboard[1] + runs}`
        scoreboard[1] += runs
        highlight(document.getElementById('highlight-bottom'), [230, 182, 182], [255, 255, 255])
        setTimeout(() => {
            highlight(document.getElementById('highlight-bottom'), [255, 255, 255], [230, 182, 182])
        }, setWaitTime * 3)
        
    }//rgb(230, 182, 182);

    return scoreboard
}





function unfade(element) {
    let op = 0.05; /// example of a closure. unfade is invoked, runs setInterval, which uses the op variable.
    element.style.opacity = op; /// Although declared in unfade, op remains in setInterval's scope. setInterval
    element.style.display = 'block';  /// then changes that variable and uses it. 
    let timer = setInterval(() => {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 60);
}


function fade(element) {
    let op = 1;
    let timer = setInterval(() => {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none'
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 40);
}


function highlight(element, startColor, finishColor) {
    let color = startColor;
    let highlight = finishColor;
    let timer = setInterval(() => {
        if (color[0] == highlight[0] && color[1] == highlight[1] && color[2] == highlight[2]) {
            console.log('color end')
            clearInterval(timer);
            element.style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        }
        element.style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        color[0] > highlight[0] ? color[0] -= 1 : color[0] += 1
        color[1] > highlight[1] ? color[1] -= 1 : color[1] += 1
        color[2] > highlight[2] ? color[2] -= 1 : color[2] += 1
    }, .5);
}

//let alertArrayDeleteLater = teamEx.slice(0)
//let alertArrayDeleteLaterTwo = teamWhy.slice(0)

function alertIfOneNamedPlayers() {
    for (let el in comparePlayers) {
        if (comparePlayers[el].name.split(" ").length < 2 || comparePlayers[el].name.split(" ")[1] == '') {
            alert(`ERROR: player '${comparePlayers[el].name}' in team '${comparePlayers[el].teamname}' is missing a last name`)
        } 
    }
    alert('All names should be fine')
}

// 128, 128, 128


//checkDatabase(team, match, print, array, index)


function matchHistoryDatabase() {

    let database = {}

    return function(team, match, print, array, index) {
        if (database[`${team}`] == undefined) { // check if team has an object database. If not, make one
            database[`${team}`] = {}
            console.log('created new nested object')
        }
        if (database[`${team}`][`${match}`] == undefined) { // check if the match or the team's match history is recorded in the team object database. If not, record it
            // If it's the match history, then create its key/value where the value is the printable history and its current version
            // Otherwise, create a key/value of the match where the value is the printable match report and the raw match report
            match == 'matches' ? database[`${team}`][`${match}`] = [0, 0] : database[`${team}`][`${match}`] = []
            console.log('new nested nested')
        } else {
            if (match == 'matches') {
                if (index > database[`${team}`].matches[1] && print !== 0) {
                    console.log('match history updated:')
                    database[`${team}`].matches = [print, index]
                } else if (index > database[`${team}`].matches[1] && print == 0) {
                    console.log('awaiting print...')
                } else {
                    console.log('match history available.')
                    let returnedArray = ['PRINT', database[`${team}`].matches[0]]
                    return returnedArray
                }
            } else if (database[`${team}`][`${match}`].length == 0) {
                database[`${team}`][`${match}`] = [print, array]
            }
        }
        //console.log(database[`${team}`][`${match}`])
        return database[`${team}`][`${match}`]
    }
}

let checkDatabase = matchHistoryDatabase()
