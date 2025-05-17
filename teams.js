
let teamEx = ["Bob", "Henry", "George", "Ico", "Mooky", "Hendo", "Mark", "Jeter", "Vlad", "Marco",
              "Iggy", "Willy", "Clover", "Pop", "Franklin", "Common", "Callum", "Geo", "Ken", "Andy",
              "Oliver", "Reece", "Kyle", "Kyrie", "William", "Mariano", "Jose", "Yunjin", "Mike", "Cam",
              "Wax", "Rafael", "Sammy", "Pablo", "Ichi", "Clark", "Walter", "Bob", "Lando", "Bron",
              "Zion", "Zachary", "Lucas", "Eli", "Job", "Ezra", "Lincoln", "Miles", "Brandon", "Kelly",

              "Mateo", "Levi", "Sansa", "Roman", "Austin", "Axel", "Sawyer", "John", "Nicholas", "Galway",
              "Sadio", "Moe", "Tino", "Paul", "Ringo", "Oakie", "Onyx", "Avi", "Mars", "Alex",  
              "Mojo", "Quin", "Gibbs", "Leaf", "Earnest", "Earl", "Edmond", "Edison", "Eddy", "Master",
              "Xavier", "Caesar", "Caliban", "Romeo", "Maxwell", "Calvin", "Cordial", "Ace", "Abhor", "Air",
              "Drogo", "Daegon", "Teddy", "Cosme", "Tefe", "Hacon", "Jade", "Haddi", "Amar", "Harmon",

              "Robinson", "Jared", "Rain", "Red", "Radman", "Sky", "Raynor", "Lamar", "Laborc", "Ladislav",
              "Lance", "Kahil", "Adam", "Kotaku", "Pace", "Paquito", "Pako", "Pancho", "Don", "Ike",
              "Igor", "Idryss", "Imanuel", "Scrub", "Ice", "Ray", "Jansen", "Jack", "Jacquis", "Jerome",
              "Martin", "Drake", "Blake", "Euro", "Safron", "Sage", "Scion", "Slate", "Silvester", "Tim",
              "Howard", "Cobra", "Mamba", "Wayne", "Dwayne", "Stephan", "Seth", "Odell", "Serge", "North",

              "Dairus", "David", "Daily", "Dago", "Yammo", "Daffy", "Faris", "Pharrel", "Falxo", "Farley",
              "Galileo", "Gael", "Tyrian", "Mac", "Maddax", "Mackie", "Magnus", "Magic", "Nas", "Narcissus",
              "Nardwar", "Nate", "Waldo", "Napea", "Taboo", "Time", "Tanner", "Tadeo", "Bobby", "Tai", 
              "Taku", "Tajo", "Wale", "Walker", "Wake", "Walcot", "Almond", "Victor", "Valor", "Glory",
              "Yvo", "Yoshi", "Toad", "Bowzer", "Eden", "Flavor", "Meta", "Oz", "Rabina", "Roisin", 

              "Teal", "Xerxes", "Oleg", "Mosh", "Brad", "Harrison", "Denzel", "Marlon", "Arnold", "Clint",
              "Al", "Liam", "Bruce", "Sean", "Kirk", "Leo", "Montgomery", "Marcello", "Toshiro", "Gerard",
              "Antonio", "Heath", "Dusty", "Caliph", "Dexter", "Kiran", "Azzo", "Daffodil", "Dragon", "Maybe",
              "Donald", "Alfred", "Cristiano", "Frank", "Prince", "Tiger", "Chester", "Paper", "Ernesto", "Cat",
              "Robin", "Maxi", "Keanu", "Rick", "Ewan", "Hank", "Post", "Justice", "Barack", "Che",

              "Santiago", "Diego", "Sebastian", "Alejandro", "Eduardo", "Babe", "Cy", "Lou", "Yogi", "Sandy",
              "Cal", "Nolan", "Satchel", "Reggie", "Mel", "Dizzy", "Ozzie", "Goose", "Duck", "Lefty"]

let teamWhy = ["Johnson", "Smart", "Glass", "Bell", "Bird", "Jordan", "Rosario", "Money", "Lexington", "Wood",
                "Black", "Hicks", "Sosa", "Bonds", "Freedom", "Dejean", "Jefferson", "Cox", "Phillips", "Peterson",
                "Robertson", "McCarthy", "Puckett", "Baker", "Blue", "Perez", "Garcia", "Rodriguez", "Thompson", "Perry",
                "Butler", "Simmons", "Ward", "Foster", "Gonzales", "Miyazaki", "Brooks", "Griffin", "Turner", "Moore",
                "Lee", "Young", "Rogers", "Curry", "Rivera", "Ramirez", "Ross", "Long", "Hughes", "Washington",

                "Bryant", "Russell", "Hayes", "Diaz", "Myers", "Page", "Ford", "Graham", "Sullivan", "West", 
                "Cruz", "Gomez", "Ortiz", "Hunter", "Boyd", "Mann", "Shakir", "Morales", "Hazard", "Dixon",
                "Coutinho", "Rice", "Snyder", "Spider", "Cunningham", "Ham", "Fox", "Lawrence", "Gutierrez", "Fields",
                "Strawberry", "Richards", "Carr", "Bishop", "Harvey", "Little", "Reid", "Fulman", "Fuller", "Romero",
                "Frazier", "Ali", "Silva", "Pearson", "Holland", "Texas", "Hopkins", "Trout", "Salmon", "Soto",

                "Love", "Graves", "Castro", "Gregory", "Lucas", "McKinney", "Holt", "Jolt", "Watts", "Rhodes", 
                "Pena", "Beck", "Newman", "Mendez", "Bush", "Trump", "Parks", "Budden", "Powers", "Kuzman", 
                "Bryant", "Webber", "Lyons", "Wolfe", "Schneider", "Sharp", "Barber", "Hines", "Valdez", "Hubbard",
                "Burgess", "Cross", "Moss", "Thornton", "Delgado", "Vega", "Glover", "Cohen", "Harmon", "Blair",
                "Higgins", "Strickland", "Townsend", "Drinkwater", "Swanson", "Patton", "Maldonaldo", "Rios", "Hodge", "Malone",

                "Osborne", "Henry", "Guerrero", "Estrada", "Sandoval", "Fitzegerald", "Saunders", "Wise", "Dunce", "Creed",
                "Waters", "Houston", "Klein", "French", "Mouton", "Copeland", "Brady", "Holloway", "Poole", "Bass",
                "Marsh", "Swarm", "Wong", "Sparks", "Massey", "Bowers", "Train", "Lamb", "Cortez", "Mathis", 
                "Cain", "Underwood", "Hogan", "Luna", "Bridges", "Summers", "Winter", "Wilcox", "Atkins", "Marquee",
                "Gates", "Davenport", "Sawyer", "Dickens", "Monroe", "Morrow", "Marrow", "Randall", "Whitaker", "Ware",

                "Gilmore", "Dominguez", "Cano", "Kramer", "Hancock", "Gallagher", "Hypia", "Carragher", "McClain", "Wall",
                "Fantano", "Dyer", "Grimes", "Alison", "Whitehead", "Savage", "Kemp", "Booth", "Navarro", "Lester",
                "Durant", "Hess", "Beard", "Avila", "Blackwell", "Rich", "York", "Moses", "Golden", "Stafford", 
                "Booker", "Miranda", "Orr", "Knox", "Pacheco", "Rojas", "Maduro", "Chicarron", "English", "Weiss",
                "Trujillo", "Villarreal", "Sexton", "Leblanc", "House", "Herring", "Rivers", "Pugh", "Livingston", "Bean",
                
                "Kerr", "Harding", "Solis", "Frost", "Blackburn", "Koch", "Solomon", "Dudley", "Mejia", "Joyce", 
                "Valentine", "Carmichael", "Moon", "Berg", "Meadows", "Gay", "Cherry", "Fuentes", "Key", "Gamble"]

const playerNames = () => {

    let random = 0
    let random2 = 0

    for (let i = 0; i < teams.length; i++) {

        random = Math.floor(Math.random() * teamEx.length)
        random2 = Math.floor(Math.random() * teamWhy.length)
       
        if (teams[i].players.position1.name == "") {
        
            teams[i].players.position1.name += teamEx.splice(random, 1) + " " + teamWhy.splice(random2, 1)
        }

        random = Math.floor(Math.random() * teamEx.length)
        random2 = Math.floor(Math.random() * teamWhy.length)

        if (teams[i].players.position2.name == "") {
        
            teams[i].players.position2.name += teamEx.splice(random, 1) + " " + teamWhy.splice(random2, 1)
        }

        random = Math.floor(Math.random() * teamEx.length)
        random2 = Math.floor(Math.random() * teamWhy.length)

        if (teams[i].players.position3.name == "") {
        
            teams[i].players.position3.name += teamEx.splice(random, 1) + " " +  teamWhy.splice(random2, 1)
        }

        random = Math.floor(Math.random() * teamEx.length)
        random2 = Math.floor(Math.random() * teamWhy.length)

        if (teams[i].players.position4.name == "") {
        
            teams[i].players.position4.name += teamEx.splice(random, 1) + " " +  teamWhy.splice(random2, 1)
        }

        random = Math.floor(Math.random() * teamEx.length)
        random2 = Math.floor(Math.random() * teamWhy.length)

        if (teams[i].players.position5.name == "") {
        
            teams[i].players.position5.name += teamEx.splice(random, 1) + " " +  teamWhy.splice(random2, 1)
        }

        random = Math.floor(Math.random() * teamEx.length)
        random2 = Math.floor(Math.random() * teamWhy.length)

        if (teams[i].players.position6.name == "") {
        
            teams[i].players.position6.name += teamEx.splice(random, 1) + " " +  teamWhy.splice(random2, 1)
        }

        random = Math.floor(Math.random() * teamEx.length)
        random2 = Math.floor(Math.random() * teamWhy.length)

        if (teams[i].players.position7.name == "") {
        
            teams[i].players.position7.name += teamEx.splice(random, 1) + " " +  teamWhy.splice(random2, 1)
        }

        random = Math.floor(Math.random() * teamEx.length)
        random2 = Math.floor(Math.random() * teamWhy.length)

        if (teams[i].players.position8.name == "") {
        
            teams[i].players.position8.name += teamEx.splice(random, 1) + " " +  teamWhy.splice(random2, 1)
        }

        random = Math.floor(Math.random() * teamEx.length)
        random2 = Math.floor(Math.random() * teamWhy.length)

        if (teams[i].players.position9.name == "") {
        
            teams[i].players.position9.name += teamEx.splice(random, 1) + " " +  teamWhy.splice(random2, 1)
        }
    }

}

function lastN(last) {
    var n = last.split(" ");
    return n[n.length - 1];

}

let firstBase = 0
let secondBase = 0
let thirdBase = 0
let baseHit = 0
let doubleHit = 0
let tripleHit = 0
let runsIn = 0
let hit = 0
let hr = 0
let stolenBase = 0
let outs = 0
let report = ""
let scoreTeamA = 0
let scoreTeamB = 0
let thisFielder = 0
let disparity = 0;
let dispah = []






const baseball = (a, b) => {
    
    removeSchedules(a, b);

    disparity = 0;
    
    let random = 0;
    let lineUpTwo = 0;
    let lineUpTwoReset = 0;
    let lineUpOne = 0;
    let lineUpOneReset = 0;

    for (let i = 1; ; i++) { // innings for loop (9 innings)
        console.log("next inning")
        console.log(`scoreTeamA: ${scoreTeamA}, scoreTeamB: ${scoreTeamB}, firstBase: ${firstBase}, secondBase: ${secondBase}, thirdBase: ${thirdBase}`)
        report += `Inning ${i / 2}. `
        firstBase = 0
        secondBase = 0
        thirdBase = 0
        outs = 0
        if (i % 2 == 1) { // this would be an odd inning like top of the first
            lineUpOneReset = 1
            console.log("odd")
            for (let j = 1; outs < 3; j++) { // run through team1s batting lineup
                console.log("batting")
                tripleHit = 0
                doubleHit = 0
                baseHit = 0

                if (lineUpOneReset == 1) {
                    console.log(`lineUpOne: ${lineUpOne}, j: ${j}`)
                    lineUpOneReset = 0
                    j += lineUpOne 
                    lineUpOne = j
                }

                if (j >= 9) {
                    j = 1
                    console.log("reset lineup")
                }

                lineUpOne = j
                console.log(`${i}: POSITION ${j + 1} AT BAT - AWAY`)

                let whatKindOfAtBat = atBat(a.players[`position${j+1}`], b.players, a.players, j + 1, 'A')  
                whatKindOfAtBat == 'sb' ? j -= 1 : undefined
            }
        } else if (i % 2 == 0) { // this would be an odd inning like top of the first
            lineUpTwoReset = 1
            console.log("even")
            for (let j = 1; outs < 3; j++) { // run through team1s batting lineup
                console.log("batting")
                tripleHit = 0
                doubleHit = 0
                baseHit = 0
                
        
                if (lineUpTwoReset == 1) {
                    console.log(`lineUpTwo: ${lineUpTwo}, j: ${j}`)
                    lineUpTwoReset = 0
                    j += lineUpTwo 
                    lineUpTwo = j
                }
                
                if (j >= 9) {
                    j = 1
                    console.log("reset lineup")
                }
        
                lineUpTwo = j
                console.log(`${i}: POSITION ${j + 1} AT BAT - HOME`)

                let whatKindOfAtBat = atBat(b.players[`position${j+1}`], a.players, b.players, j + 1, 'H') 
                whatKindOfAtBat == 'sb' ? j -= 1 : undefined
            }
        }   

    if (i >= 18 && i % 2 == 0 && scoreTeamA !== scoreTeamB) {
        if (scoreTeamA > scoreTeamB) {
            a.wins += 1
            b.losses += 1
            a.history.matches.push(`W vs ${b.name} ${scoreTeamA}-${scoreTeamB}`)
            b.history.matches.push(`L to ${a.name} ${scoreTeamB}-${scoreTeamA}`)
        } else {
            b.wins += 1
            a.losses += 1
            a.history.matches.push(`L to ${b.name} ${scoreTeamA}-${scoreTeamB}`)
            b.history.matches.push(`W vs ${a.name} ${scoreTeamB}-${scoreTeamA}`)
        }
        console.log("game condition")
        break;
    } else if (i >= 50) {
        
        if (scoreTeamA > scoreTeamB) {
            a.wins += 1
            b.losses += 1
            a.history.matches.push(`W vs ${b.name} ${scoreTeamA}-${scoreTeamB}`)
            b.history.matches.push(`L to ${a.name} ${scoreTeamB}-${scoreTeamA}`)
        } else {
            b.wins += 1
            a.losses += 1
            a.history.matches.push(`L to ${b.name} ${scoreTeamA}-${scoreTeamB}`)
            b.history.matches.push(`W vs ${a.name} ${scoreTeamB}-${scoreTeamA}`)
        }
        console.log("game too long")
        break;
    } else if (scoreTeamA > 30 || scoreTeamB > 30) {
        
        if (scoreTeamA > scoreTeamB) {
            a.wins += 1
            b.losses += 1
            a.history.matches.push(`W vs ${b.name} ${scoreTeamA}-${scoreTeamB}`)
            b.history.matches.push(`L to ${a.name} ${scoreTeamB}-${scoreTeamA}`)
        } else {
            b.wins += 1
            a.losses += 1
            a.history.matches.push(`L to ${b.name} ${scoreTeamA}-${scoreTeamB}`)
            b.history.matches.push(`W vs ${a.name} ${scoreTeamB}-${scoreTeamA}`)
        }
        console.log("mercy rule")
        break;
    }

    } /// all innings for loop end
    cut5 = 0   // game() also has this
    a.history.reports.push(report)
    b.history.reports.push(report)
    report = ""
    a.points += scoreTeamA
    b.points += scoreTeamB
    scoreTeamA = 0
    scoreTeamB = 0
    console.log("baseball form")
    setForm(a, b);
}






function atBat(a, b, otherA, positionNum, homeOrAway) {  /// atBat(a.players[`position${j+1}`], b.players) 

    let batterMax = 1000;   /// originally 310 
    let pitcherMax = 1000;   /// originally 350
    let randomC = Math.floor(Math.random() * 2)

    disparity = a.attributes[0] - b.position1.attributes[0] // finds difference between batter of one team and pitcher of the other
    random = Math.floor(Math.random() * 999)

    if (a.attributes[0] + disparity >= random) { // did the batter get a favorable roll?
        console.log("hit... but what kind")
        random = Math.floor(Math.random() * 999) // new roll for HR
        disparity = a.attributes[1] - b.position1.attributes[0]

        if(a.attributes[1] + disparity >= random) { // did the batter get a HR roll?
             dispark("HR")
            a.attributes[1] += dispah[0]
            b.position1.attributes[0] > 190 ? b.position1.attributes[0] -= dispah[1] : console.log("limit")

            a.homeruns += 1
            a.hits += 1
            a.rbi += 1
            a.runs += 1
            hr = 1
            
            homer(otherA);
            a.rbi += runsIn
            homeOrAway == 'A' ? scoreTeamA += runsIn + 1 : scoreTeamB += runsIn + 1
            runsIn + 1 == 4 ? a.dubsplus[2] += 1 : undefined
            console.log("...HR")
            report += `${lastN(a.name)} hit a HR! `
        } else { // if not a homerun, then it's either a triple, dub, or base hit
            
            random = Math.floor(Math.random() * 999) // new roll for double or triple
            console.log("trip, dub, or hit")
            if (random <= 300 && random > 100) { // double 30% chance
                 dispark("BH")
                a.attributes[0] < batterMax ? a.attributes[0] += dispah[0] : console.log("limit")   
                b.position1.attributes[0] > 190 ? b.position1.attributes[0] -= dispah[1] : console.log("limit")
                
                a.hits += 1
                a.dubsplus[0] += 1
                doubleHit = 1
                tempHitter = positionNum // the batter
                
                runners(otherA);
                a.rbi += runsIn
                homeOrAway == 'A' ? scoreTeamA += runsIn : scoreTeamB += runsIn
                console.log("dub!")
                report += `${lastN(a.name)} doubles! `
            } else if (random <= 100) { // triple 10
                 dispark("T")
                a.attributes[0] < batterMax ? a.attributes[0] += dispah[0] : console.log("limit")
                b.position1.attributes[0] > 190 ? b.position1.attributes[0] -= dispah[1] : console.log("limit")
                a.attributes[3] += dispah[2]

                a.hits += 1
                a.dubsplus[1] += 1
                tripleHit = 1
                tempHitter = positionNum
                runners(otherA);
                a.rbi += runsIn
                homeOrAway == 'A' ? scoreTeamA += runsIn : scoreTeamB += runsIn
                console.log("trip!")
                report += `${lastN(a.name)} triples! `
            } else { // normal hit
                 dispark("BH")
                a.attributes[0] < batterMax ? a.attributes[0] += dispah[0] : console.log("limit")
                b.position1.attributes[0] > 190 ? b.position1.attributes[0] -= dispah[1] : console.log("limit")

                a.hits += 1
                baseHit = 1
                tempHitter = positionNum
                runners(otherA);
                a.rbi += runsIn
                homeOrAway == 'A' ? scoreTeamA += runsIn : scoreTeamB += runsIn
                console.log("hit!")
                report += `${lastN(a.name)} singles! `
            }
        }

    } else { // if batter does not hit, check if strikeout by pitcher
                // both the pitcher and hitter are attribute[0] because pitchers have only 1 attribute (pitching)
        disparity = b.position1.attributes[0] - a.attributes[0] // how good is the pitcher?
        random = Math.floor(Math.random() * 999)
        console.log("not hit... strikeout?")
        if (b.position1.attributes[0] + disparity >= random) {// strikeout?
             dispark("SO")
            b.position1.attributes[0] < pitcherMax ? b.position1.attributes[0] += dispah[0] : console.log("limit")
            
            a.attributes[0] -= dispah[1]
            b.position2.attributes[2] += dispah[2]

            b.position1.strikeouts += 1
            outs += 1
            console.log(`strikeout! disparity: ${disparity}`)
            report += `${lastN(a.name)} strikes out. `
        } else { // if not a hit or strikeout, then it could be a groundball
            let g = 2
            g += Math.floor(Math.random() * 8) // which fielder will field?
            random = Math.floor(Math.random() * 999)
            console.log("fielder")
            if (g == 2) {
                disparity = a.attributes[0] - b.position2.attributes[2]
                thisFielder = 2
            }

            if (g == 3) {
                disparity = a.attributes[0] - b.position3.attributes[2]
                thisFielder = 3
            }

            if (g == 4) {
                disparity = a.attributes[0] - b.position4.attributes[2]
                thisFielder = 4
            }

            if (g == 5) {
                disparity = a.attributes[0] - b.position5.attributes[2]
                thisFielder = 5
            }

            if (g == 6) {
                disparity = a.attributes[0] - b.position6.attributes[2]
                thisFielder = 6
            }

            if (g == 7) {
                disparity = a.attributes[0] - b.position7.attributes[2]
                thisFielder = 7
            }

            if (g == 8) {
                disparity = a.attributes[0] - b.position8.attributes[2]
                thisFielder = 8
            }

            if (g == 9) {
                disparity = a.attributes[0] - b.position9.attributes[2]
                thisFielder = 9
            }

            if (a.attributes[0] + disparity >= random) { // ground ball passes the infield
                 dispark("GB")
                a.attributes[0] < batterMax ? a.attributes[0] += dispah[0] : console.log("limit")
                b.position1.attributes[0] > 190 ? b.position1.attributes[0] -= dispah[1] : console.log("limit")
                
                if (g == 2) {
                    b.position2.attributes[2] -= 3
                } else if (g == 3) {
                    b.position3.attributes[2] -= 3
                } else if (g == 4) {
                    b.position4.attributes[2] -= 3
                } else if (g == 5) {
                    b.position5.attributes[2] -= 3
                } else if (g == 6) {
                    b.position6.attributes[2] -= 3
                } else if (g == 7) {
                    b.position7.attributes[2] -= 3
                } else if (g == 8) {
                    b.position8.attributes[2] -= 3
                } else if (g == 9) {
                    b.position9.attributes[2] -= 3
                }

                a.hits += 1
                baseHit = 1
                tempHitter = positionNum
                runners(otherA);
                a.rbi += runsIn
                homeOrAway == 'A' ? scoreTeamA += runsIn : scoreTeamB += runsIn
                console.log("groundball hit!")
                report += `${lastN(a.name)} singles! `
            } else {                                          // ground ball is either cauught or there's a stolen base
                random = Math.floor(Math.random() * 999)
                let caught = 1
                
                if (firstBase == 3 && secondBase == 0) { // the pitcher and the player at bat can't steal, so only 7 player variations
                    disparity = otherA.position3.attributes[3] - b.position2.attributes[2] // runner on first - catcher fielding aka position 2
                    if (otherA.position3.attributes[3] + disparity >= random) {
                         dispark("SB")
                        otherA.position3.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        otherA.position3.stolenbases += 1
                        secondBase = firstBase
                        firstBase = 0
                        caught = 0
                        console.log("stolen base!")
                        report += `${lastN(otherA.position3.name)} steals 2nd. `
                        return 'sb' // hopefully this resets the at bat
                        
                    }
                } else if (firstBase == 4 && secondBase == 0) {
                    disparity = otherA.position4.attributes[3] - b.position2.attributes[2]
                    if (otherA.position4.attributes[3] + disparity >= random) {
                         dispark("SB")
                        otherA.position4.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        otherA.position4.stolenbases += 1

                        secondBase = firstBase
                        firstBase = 0
                        caught = 0
                        console.log("stolen base!")
                        report += `${lastN(otherA.position4.name)} steals 2nd. `
                        return 'sb' 
                        
                    }
                } else if (firstBase == 5 && secondBase == 0) {
                    disparity = otherA.position5.attributes[3] - b.position2.attributes[2]
                    if (otherA.position5.attributes[3] + disparity >= random) {
                        otherA.position5.stolenbases += 1
                        secondBase = firstBase
                        firstBase = 0
                        caught = 0
                         dispark("SB")
                        otherA.position5.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base!")
                        report += `${lastN(otherA.position5.name)} steals 2nd. `
                        return 'sb' 
                        
                    }
                } else if (firstBase == 6 && secondBase == 0) {
                    disparity = otherA.position6.attributes[3] - b.position2.attributes[2]
                    if (otherA.position6.attributes[3] + disparity >= random) {
                        otherA.position6.stolenbases += 1
                        secondBase = firstBase
                        firstBase = 0
                        caught = 0
                         dispark("SB")
                        otherA.position6.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base!")
                        report += `${lastN(otherA.position6.name)} steals 2nd. `
                        return 'sb' 
                        
                    }
                } else if (firstBase == 7 && secondBase == 0) {
                    disparity = otherA.position7.attributes[3] - b.position2.attributes[2]
                    if (otherA.position7.attributes[3] + disparity >= random) {
                        otherA.position7.stolenbases += 1
                        secondBase = firstBase
                        firstBase = 0
                        caught = 0
                         dispark("SB")
                        otherA.position7.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base!")
                        report += `${lastN(otherA.position7.name)} steals 2nd. `
                        return 'sb' 
                        
                    }
                } else if (firstBase == 8 && secondBase == 0) {
                    disparity = otherA.position8.attributes[3] - b.position2.attributes[2]
                    if (otherA.position8.attributes[3] + disparity >= random) {
                        otherA.position8.stolenbases += 1
                        secondBase = firstBase
                        firstBase = 0
                        caught = 0
                         dispark("SB")
                        otherA.position8.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base!")
                        report += `${lastN(otherA.position8.name)} steals 2nd. `
                        return 'sb' 
                        
                    }
                } else if (firstBase == 9 && secondBase == 0) {
                    disparity = otherA.position9.attributes[3] - b.position2.attributes[2]
                    if (otherA.position9.attributes[3] + disparity >= random) {
                        otherA.position9.stolenbases += 1
                        secondBase = firstBase
                        firstBase = 0
                        caught = 0
                         dispark("SB")
                        otherA.position9.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base!")
                        report += `${lastN(otherA.position9.name)} steals 2nd. `
                        return 'sb' 
                        
                    }
                } else if (secondBase == 3 && thirdBase == 0) { // stolen base from 2nd to 3rd
                    disparity = otherA.position3.attributes[3] - b.position2.attributes[2]
                    if (otherA.position3.attributes[3] + disparity >= random) {
                        otherA.position3.stolenbases += 1
                        thirdBase = secondBase
                        secondBase = 0
                        caught = 0
                         dispark("SBS")
                        otherA.position3.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base2")
                        report += `${lastN(otherA.position3.name)} steals 3rd. `
                        return 'sb' 
                        
                    }
                } else if (secondBase == 4 && thirdBase == 0) { 
                    disparity = otherA.position4.attributes[3] - b.position2.attributes[2]
                    if (otherA.position4.attributes[3] + disparity >= random) {
                        otherA.position4.stolenbases += 1
                        thirdBase = secondBase
                        secondBase = 0
                        caught = 0
                         dispark("SBS")
                        otherA.position4.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base2")
                        report += `${lastN(otherA.position4.name)} steals 3rd. `
                        return 'sb' 
                        
                    }
                } else if (secondBase == 5 && thirdBase == 0) { 
                    disparity = otherA.position5.attributes[3] - b.position2.attributes[2]
                    if (otherA.position5.attributes[3] + disparity >= random) {
                        otherA.position5.stolenbases += 1
                        thirdBase = secondBase
                        secondBase = 0
                        caught = 0
                         dispark("SBS")
                        otherA.position5.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base2")
                        report += `${lastN(otherA.position5.name)} steals 3rd. `
                        return 'sb' 
                        
                    }
                } else if (secondBase == 6 && thirdBase == 0) { 
                    disparity = otherA.position6.attributes[3] - b.position2.attributes[2]
                    if (otherA.position6.attributes[3] + disparity >= random) {
                        otherA.position6.stolenbases += 1
                        thirdBase = secondBase
                        secondBase = 0
                        caught = 0
                         dispark("SBS")
                        otherA.position6.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base2")
                        report += `${lastN(otherA.position6.name)} steals 3rd. `
                        return 'sb' 
                        
                    }
                } else if (secondBase == 7 && thirdBase == 0) { 
                    disparity = otherA.position7.attributes[3] - b.position2.attributes[2]
                    if (otherA.position7.attributes[3] + disparity >= random) {
                        otherA.position7.stolenbases += 1
                        thirdBase = secondBase
                        secondBase = 0
                        caught = 0
                         dispark("SBS")
                        otherA.position7.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base2")
                        report += `${lastN(otherA.position7.name)} steals 3rd. `
                        return 'sb' 
                        
                    }
                } else if (secondBase == 8 && thirdBase == 0) { 
                    disparity = otherA.position8.attributes[3] - b.position2.attributes[2]
                    if (otherA.position8.attributes[3] + disparity >= random) {
                        otherA.position8.stolenbases += 1
                        thirdBase = secondBase
                        secondBase = 0
                        caught = 0
                         dispark("SBS")
                        otherA.position8.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base2")
                        report += `${lastN(otherA.position8.name)} steals 3rd. `
                        return 'sb' 
                        
                    }
                } else if (secondBase == 9 && thirdBase == 0) { 
                    disparity = otherA.position9.attributes[3] - b.position2.attributes[2]
                    if (otherA.position9.attributes[3] + disparity >= random) {
                        otherA.position9.stolenbases += 1
                        thirdBase = secondBase
                        secondBase = 0
                        caught = 0
                         dispark("SBS")
                        otherA.position9.attributes[3] += dispah[0]
                        b.position2.attributes[2] -= dispah[1]
                        console.log("stolen base2")
                        report += `${lastN(otherA.position9.name)} steals 3rd. `
                        return 'sb' 
                        
                    }
                }

                if (caught == 1) { // caught ball 
                    let g = 2
                    g += Math.floor(Math.random() * 8) // which fielder caught the ball?
                    console.log("caught ball")
                    if (g == 2) {
                        thisFielder = 2
                         dispark("C")
                        a.attributes[0] -= dispah[1]
                        b.position2.attributes[2] += dispah[0]
                        outs += 1
    
                        randomC >= 1? report += `Fly ball. ` : report += `Ground ball. `
                    }

                    if (g == 3) {
                        thisFielder = 3
                         dispark("C")
                        a.attributes[0] -= dispah[1]
                        b.position3.attributes[2] += dispah[0]
                        outs += 1
    
                        randomC >= 1? report += `Fly ball. ` : report += `Ground ball. `
                    }

                    if (g == 4) {
                        thisFielder = 4
                         dispark("C")
                        a.attributes[0] -= dispah[1]
                        b.position4.attributes[2] += dispah[0]
                        outs += 1
    
                        randomC >= 1? report += `Fly ball. ` : report += `Ground ball. `
                    }

                    if (g == 5) {
                        thisFielder = 5
                         dispark("C")
                        a.attributes[0] -= dispah[1]
                        b.position5.attributes[2] += dispah[0]
                        outs += 1
    
                        randomC >= 1? report += `Fly ball. ` : report += `Ground ball. `
                    }

                    if (g == 6) {
                        thisFielder = 6
                         dispark("C")
                        a.attributes[0] -= dispah[1]
                        b.position5.attributes[2] += dispah[0]
                        outs += 1
    
                        randomC >= 1? report += `Fly ball. ` : report += `Ground ball. `
                    }

                    if (g == 7) {
                        thisFielder = 7
                         dispark("C")
                        a.attributes[0] -= dispah[1]
                        b.position7.attributes[2] += dispah[0]
                        outs += 1
    
                        randomC >= 1? report += `Fly ball. ` : report += `Ground ball. `
                    }

                    if (g == 8) {
                        thisFielder = 8
                         dispark("C")
                        a.attributes[0] -= dispah[1]
                        b.position8.attributes[2] += dispah[0]
                        outs += 1
    
                        randomC >= 1? report += `Fly ball. ` : report += `Ground ball. `
                    }

                    if (g == 9) {
                        thisFielder = 9
                         dispark("C")
                        a.attributes[0] -= dispah[1]
                        b.position9.attributes[2] += dispah[0]
                        outs += 1
    
                        randomC >= 1? report += `Fly ball. ` : report += `Ground ball. `
                    }
                }
            }
        }
    }




}












let tempHitter = 0

const runners = (sc) => {

    runsIn = 0
    let tempOne = 0
    let tempTwo = 0
    let runOne = 0
    let runTwo = 0
    let runThree = 0

    if (tripleHit == 1) {
        runOne = firstBase
        firstBase = 0
        runTwo = secondBase
        secondBase = 0
        runThree = thirdBase
        thirdBase = tempHitter
        tripleHit = 0  
        console.log("just a triple") 
        
    } else if (doubleHit == 1) {
        runOne = secondBase
        secondBase = 0
        runTwo = thirdBase
        thirdBase = 0
        thirdBase = firstBase
        firstBase = 0
        secondBase = tempHitter
        doubleHit = 0
        console.log("just a double")

    } else if (baseHit == 1) {
        tempOne = firstBase
        firstBase = tempHitter  
        tempTwo = secondBase 
        secondBase = tempOne
        runOne = thirdBase
        thirdBase = tempTwo
        baseHit = 0
        console.log("just a basehit")
    } 

    if (runOne == 2) {
        sc.position2.runs += 1
        runOne = 0
        runsIn += 1
    } else if (runOne == 3) {
        sc.position3.runs += 1
        runOne = 0
        runsIn += 1
    } else if (runOne == 4) {
        sc.position4.runs += 1
        runOne = 0
        runsIn += 1
    } else if (runOne == 5) {
        sc.position5.runs += 1
        runOne = 0
        runsIn += 1
    } else if (runOne == 6) {
        sc.position6.runs += 1
        runOne = 0
        runsIn += 1
    } else if (runOne == 7) {
        sc.position7.runs += 1
        runOne = 0
        runsIn += 1
    } else if (runOne == 8) {
        sc.position8.runs += 1
        runOne = 0
        runsIn += 1
    } else if (runOne == 9) {
        sc.position9.runs += 1
        runOne = 0
        runsIn += 1
    }

    if (runTwo == 2) {
        sc.position2.runs += 1
        runTwo = 0
        runsIn += 1
    } else if (runTwo == 3) {
        sc.position3.runs += 1
        runTwo = 0
        runsIn += 1
    } else if (runTwo == 4) {
        sc.position4.runs += 1
        runTwo = 0
        runsIn += 1
    } else if (runTwo == 5) {
        sc.position5.runs += 1
        runTwo = 0
        runsIn += 1
    } else if (runTwo == 6) {
        sc.position6.runs += 1
        runTwo = 0
        runsIn += 1
    } else if (runTwo == 7) {
        sc.position7.runs += 1
        runTwo = 0
        runsIn += 1
    } else if (runTwo == 8) {
        sc.position8.runs += 1
        runTwo = 0
        runsIn += 1
    }   else if (runTwo == 9) {
        sc.position9.runs += 1
        runTwo = 0
        runsIn += 1
    }

    if (runThree == 2) {
        sc.position2.runs += 1
        runThree = 0
        runsIn += 1
    } else if (runThree == 3) {
        sc.position3.runs += 1
        runThree = 0
        runsIn += 1
    } else if (runThree == 4) {
        sc.position4.runs += 1
        runThree = 0
        runsIn += 1
    } else if (runThree == 5) {
        sc.position5.runs += 1
        runThree = 0
        runsIn += 1
    } else if (runThree == 6) {
        sc.position6.runs += 1
        runThree = 0
        runsIn += 1
    } else if (runThree == 7) {
        sc.position7.runs += 1
        runThree = 0
        runsIn += 1
    } else if (runThree == 8) {
        sc.position8.runs += 1
        runThree = 0
        runsIn += 1
    } else if (runThree == 9) {
        sc.position9.runs += 1
        runThree = 0
        runsIn += 1
    }


};



const homer = (te) => {

    runsIn = 0

    if (firstBase >= 1) {
        if (firstBase == 2) {
            te.position2.runs += 1
            runsIn += 1
            firstBase = 0
        } else if (firstBase == 3) {
            te.position3.runs += 1
            runsIn += 1
            firstBase = 0
        } else if (firstBase == 4) {
            te.position4.runs += 1
            runsIn += 1
            firstBase = 0
        } else if (firstBase == 5) {
            te.position5.runs += 1
            runsIn += 1
            firstBase = 0
        } else if (firstBase == 6) {
            te.position6.runs += 1
            runsIn += 1
            firstBase = 0
        } else if (firstBase == 7) {
            te.position7.runs += 1
            runsIn += 1
            firstBase = 0
        } else if (firstBase == 8) {
            te.position8.runs += 1
            runsIn += 1
            firstBase = 0
        } else if (firstBase == 9) {
            te.position9.runs += 1
            runsIn += 1
            firstBase = 0
        }
    }

    if (secondBase >=1 ) {
        if (secondBase == 2) {
            te.position2.runs += 1
            runsIn += 1
            secondBase = 0
        } else if (secondBase == 3) {
            te.position3.runs += 1
            runsIn += 1
            secondBase = 0
        } else if (secondBase == 4) {
            te.position4.runs += 1
            runsIn += 1
            secondBase = 0
        } else if (secondBase == 5) {
            te.position5.runs += 1
            runsIn += 1
            secondBase = 0
        } else if (secondBase == 6) {
            te.position6.runs += 1
            runsIn += 1
            secondBase = 0
        } else if (secondBase == 7) {
            te.position7.runs += 1
            runsIn += 1
            secondBase = 0
        } else if (secondBase == 8) {
            te.position8.runs += 1
            runsIn += 1
            secondBase = 0
        } else if (secondBase == 9) {
            te.position9.runs += 1
            runsIn += 1
            secondBase = 0
        }
    }

    if (thirdBase >=1 ) {
        if (thirdBase == 2) {
            te.position2.runs += 1
            runsIn += 1
            thirdBase = 0
        } else if (thirdBase == 3) {
            te.position3.runs += 1
            runsIn += 1
            thirdBase = 0
        } else if (thirdBase == 4) {
            te.position4.runs += 1
            runsIn += 1
            thirdBase = 0
        } else if (thirdBase == 5) {
            te.position5.runs += 1
            runsIn += 1
            thirdBase = 0
        } else if (thirdBase == 6) {
            te.position6.runs += 1
            runsIn += 1
            thirdBase = 0
        } else if (thirdBase == 7) {
            te.position7.runs += 1
            runsIn += 1
            thirdBase = 0
        } else if (thirdBase == 8) {
            te.position8.runs += 1
            runsIn += 1
            thirdBase = 0
        } else if (thirdBase == 9) {
            te.position9.runs += 1
            runsIn += 1
            thirdBase = 0
        }
    }
};








const dispark = (c) => {
    
    if (c == "HR") {
        if (disparity <= 10) {    // [0] added to batter, [1] subtracted from pitcher
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [2, 2] : row = [4, 3]
            dispah = row                    
        } else if (disparity > 10 && disparity <= 30) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1.75, 1] : row = [3.5, 2]
            dispah = row    
        } else if (disparity > 30 && disparity <= 60) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1.5, 1] : row = [3, 1]
            dispah = row    
        } else if (disparity > 60 && disparity <= 100) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1.25, 1] : row = [2.5, 0]
            dispah = row    
        } else if (disparity > 100 && disparity <= 150) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1.25, 1] : row = [2.5, 0]
            dispah = row    
        } else if (disparity > 150 && disparity <= 200) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1, 1] : row = [2, 0]
            dispah = row    
        } else if (disparity > 150 && disparity <= 250) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.75, 0] : row = [.5, 0]
            dispah = row    
        } else if (disparity > 250 && disparity <= 300) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.5, 0] : row = [0, 0]
            dispah = row    
        } 
    } else if (c == "BH" || c == "GB" || c == "T") {
       /* if (disparity <= -50) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [3, 3, 3] : row = [4, 0, 2]
            dispah = row    
        } else if (disparity > -50 && disparity <= -10) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [2.25, 2.75, 3] : row = [3.5, 0, 2]
            dispah = row    */
        if (disparity <= 10) {    // [0] added to batter, [1] subtracted from pitcher, [2] credit to batter for running
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [2, 1.58, 3] : row = [3.5, 0, 2]
            dispah = row                    
        } else if (disparity > 10 && disparity <= 30) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1.75, 1.28, 3] : row = [3, 0, 2]
            dispah = row    
        } else if (disparity > 30 && disparity <= 60) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1.55, 1.1, 3] : row = [2.5, 0, 2]
            dispah = row    
        } else if (disparity > 60 && disparity <= 100) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1.25, 1, 3] : row = [1.5, 0, 2]
            dispah = row    
        } else if (disparity > 100 && disparity <= 150) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1, 1, 3] : row = [1, 0, 2]
            dispah = row    
        } else if (disparity > 150 && disparity <= 200) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.75, 1, 3] : row = [.5, 0, 2]
            dispah = row    
        } else if (disparity > 150 && disparity <= 250) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.50, 1, 3] : row = [0, 0, 2]
            dispah = row    
        } else if (disparity > 250 && disparity <= 300) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.25, 1, 3] : row = [0, 0, 2]
            dispah = row    
        } 

        if (playoffSteps >= 1) {
            dispah[0] /= 2
            dispah[1] /= 2
            dispah[2] /= 2
        }

    } else if (c == "SO") {         // [0] gets added to pitcher, [1] subtracts from batter, [2] adds to catchers fielding 
        if (disparity < -220) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [30, 20, 0] : row = [20, 8, 1]
            dispah = row  
        
        } else if (disparity >= -220 && disparity < -160) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [25, 15, 0] : row = [12, 7, 1]
            dispah = row  
    
        } else if (disparity >= -160 && disparity < -110) { 
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [20, 12, 0] : row = [9, 6, 1]
            dispah = row  
    
        } else if (disparity >= -110 && disparity < -70) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [13, 8, 0] : row = [7, 5, 1]
            dispah = row  
    
        } else if (disparity >= -70 && disparity < -40) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [8, 2, 0] : row = [5.5, 4, 1]
            dispah = row  
        
        } else if (disparity >= -40 && disparity < -20) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [5, 2, 0] : row = [4.5, 3, 1]
            dispah = row  

        } else if (disparity >= -20 && disparity < 1) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [2, 1, 0] : row = [4, 2, 1]
            dispah = row  
            
        } else if (disparity <= 10 && disparity > 0) {    // [0] added to batter, [1] subtracted from pitcher
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [2, 0, 0] : row = [4, 1, 1]
            dispah = row                    
        } else if (disparity > 10 && disparity <= 30) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1.5, 1, 0] : row = [3.5, 0, 1]
            dispah = row    
        } else if (disparity > 30 && disparity <= 60) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [1.2, 1, 0] : row = [3, 0, 1]
            dispah = row    
        } else if (disparity > 60 && disparity <= 100) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.3, 1, 0] : row = [2.5, 0, 1]
            dispah = row    
        } else if (disparity > 100 && disparity <= 150) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.18, 1, 0] : row = [2.5, 0, 1]
            dispah = row    
        } else if (disparity > 150 && disparity <= 200) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.13, 1, 0] : row = [2, 0, 1]
            dispah = row    
        } else if (disparity > 150 && disparity <= 250) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.11, 1, 0] : row = [.5, 0, 1]
            dispah = row    
        } else if (disparity > 250 && disparity <= 300) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [.1, 1, 0] : row = [0, 0, 1]
            dispah = row    
        } 
        
        if (playoffSteps >= 1) {
            dispah[0] /= 2
            dispah[1] /= 2
            dispah[2] /= 2

        }

    } else if (c == "C") {
        if (thisFielder == 2) {
            let row = Math.floor(Math.random() * 3)
            row == 0 ? row = [2, 1] : row = [3, 0]
            dispah = row
        } else if (thisFielder == 3) {
            let row = Math.floor(Math.random() * 3)
            row == 0 ? row = [1, 1] : row = [2, 0]
            dispah = row
        }   else if (thisFielder == 4) {
            let row = Math.floor(Math.random() * 3)
            row == 0 ? row = [1, 1] : row = [2, 0]
            dispah = row
        }   else if (thisFielder == 5) {
            let row = Math.floor(Math.random() * 3)
            row == 0 ? row = [1, 1] : row = [2, 0]
            dispah = row
        }   else if (thisFielder == 6) {
            let row = Math.floor(Math.random() * 3)
            row == 0 ? row = [1, 1] : row = [2, 0]
            dispah = row
        }   else if (thisFielder == 7) {
            let row = Math.floor(Math.random() * 3)
            row == 0 ? row = [1, 1] : row = [2, 0]
            dispah = row
        }   else if (thisFielder == 8) {
            let row = Math.floor(Math.random() * 3)
            row == 0 ? row = [1, 1] : row = [2, 0]
            dispah = row
        }   else if (thisFielder == 9) {
            let row = Math.floor(Math.random() * 3)
            row == 0 ? row = [1, 1] : row = [2, 0]
            dispah = row
        }   

    } else if (c == "SB" || c == "SBS") {      // a is runner, b is catcher
        if (disparity < 500) {
            let row = 0
            c == "SBS" ? row = [9, 5] : row = [7, 4]  
            dispah = row
        }
    }

}

const pitchers = () => {
    console.log(`${team1.name}: ${team1.players.position1.attributes[0]}, 
                 ${team2.name}: ${team2.players.position1.attributes[0]}, 
                 ${team3.name}: ${team3.players.position1.attributes[0]}, 
                 ${team4.name}: ${team4.players.position1.attributes[0]}, 
                 ${team5.name}: ${team5.players.position1.attributes[0]}, 
                 ${team6.name}: ${team6.players.position1.attributes[0]}, 
                 ${team7.name}: ${team7.players.position1.attributes[0]}, 
                 ${team8.name}: ${team8.players.position1.attributes[0]}, 
                 ${team9.name}: ${team9.players.position1.attributes[0]}, 
                 ${team10.name}: ${team10.players.position1.attributes[0]}, 
                 ${team11.name}: ${team11.players.position1.attributes[0]}, 
                 ${team12.name}: ${team12.players.position1.attributes[0]}, 
                 ${team13.name}: ${team13.players.position1.attributes[0]}, 
                 ${team14.name}: ${team14.players.position1.attributes[0]}, 
                 ${team15.name}: ${team15.players.position1.attributes[0]}, 
                 ${team16.name}: ${team16.players.position1.attributes[0]}, 
                 ${team17.name}: ${team17.players.position1.attributes[0]}, 
                 ${team18.name}: ${team18.players.position1.attributes[0]}, 
                 ${team19.name}: ${team19.players.position1.attributes[0]}, 
                 ${team20.name}: ${team20.players.position1.attributes[0]}, 
                 ${team21.name}: ${team21.players.position1.attributes[0]}, 
                 ${team22.name}: ${team22.players.position1.attributes[0]}, 
                 ${team23.name}: ${team23.players.position1.attributes[0]}, 
                 ${team24.name}: ${team24.players.position1.attributes[0]}, 
                 ${team25.name}: ${team25.players.position1.attributes[0]}, 
                 ${team26.name}: ${team26.players.position1.attributes[0]}, 
                 ${team27.name}: ${team27.players.position1.attributes[0]}, 
                 ${team28.name}: ${team28.players.position1.attributes[0]}, 
                 ${team29.name}: ${team29.players.position1.attributes[0]}, 
                 ${team30.name}: ${team30.players.position1.attributes[0]}

                 

                        `)
}

const pitchersTwo = (a) => {
    console.log(`${a.players.position1.name}: ${a.players.position1.attributes[0]}`)
}


const battersAll = () => {
    battersQ(team1);
    battersQ(team2);
    battersQ(team3);
    battersQ(team4);
    battersQ(team5);
    battersQ(team6);
    battersQ(team7);
    battersQ(team8);
    battersQ(team9);
    battersQ(team10);
    battersQ(team11);
    battersQ(team12);
    battersQ(team13);
    battersQ(team14);
    battersQ(team15);
    battersQ(team16);
    battersQ(team17);
    battersQ(team18);
    battersQ(team19);
    battersQ(team20);
    battersQ(team21);
    battersQ(team22);
    battersQ(team23);
    battersQ(team24);
    battersQ(team25);
    battersQ(team26);
    battersQ(team27);
    battersQ(team28);
    battersQ(team29);
    battersQ(team30);
}

const battersQ = (a) => {
    console.log(`${a.name}: ${Math.floor(a.players.position2.attributes[0])}, ${Math.floor(a.players.position3.attributes[0])}, ${Math.floor(a.players.position4.attributes[0])}, ${Math.floor(a.players.position5.attributes[0])}, ${Math.floor(a.players.position6.attributes[0])}, ${Math.floor(a.players.position7.attributes[0])}, ${Math.floor(a.players.position8.attributes[0])}, ${Math.floor(a.players.position9.attributes[0])}`)
}


/*


if (disparity < -220) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [18, 30, 0] : row = [20, 0, 1]
            dispah = row  
        
        } else if (disparity >= -220 && disparity < -160) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [10, 25, 0] : row = [12, 0, 1]
            dispah = row  
    
        } else if (disparity >= -160 && disparity < -110) { 
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [6, 20, 0] : row = [9, 0, 1]
            dispah = row  
    
        } else if (disparity >= -110 && disparity < -70) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [3.75, 15, 0] : row = [7, 0, 1]
            dispah = row  
    
        } else if (disparity >= -70 && disparity < -40) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [2.75, 10, 0] : row = [5.5, 0, 1]
            dispah = row  
        
        } else if (disparity >= -40 && disparity < -20) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [2.25, 5, 0] : row = [4.5, 0, 1]
            dispah = row  

        } else if (disparity >= -20 && disparity < 1) {
            let row = Math.floor(Math.random() * 3)
            row >= 1 ? row = [2, 4, 0] : row = [4, 0, 1]
            dispah = row  


        } else 




*/