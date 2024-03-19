const fs = require('fs')
const data = require('./rah.json')

//SET FUNCTION
function updateGames(auth) {
    var indexLookedFor = -9
    var newData = data
    
    for (let i = 0; i < data.length; i++) {
        //get index where the player's stats are stored
        data[i].auth == auth ? indexLookedFor = i : {}
    }

    for (let i = 0; i < data.length; i++) {
        if (i != indexLookedFor) {
            // newData.push(data[i])
        } else {
            var newItem = data[indexLookedFor].Games + 1
            newData.push({
                "auth": data[indexLookedFor].auth,
                "name": data[indexLookedFor].name,
                "Games": newItem,
                "Wins": data[indexLookedFor].Wins,
                "Goals": data[indexLookedFor].Goals,
                "Assists": data[indexLookedFor].Assists,
                "CS": data[indexLookedFor].CS,
                "Own goals": data[indexLookedFor]['Own goals']
            })
        }
    }

    newData.splice(indexLookedFor, 1)

    fs.writeFile('rah.json', JSON.stringify(newData), (err) => {
        if (err) throw err;
        console.log('done writing')
    })
}

function getSortedLeaderboard(key) {
    let sortedStats = data.sort(function (a, b) {
        return b[key] - a[key];
    })
    
    for (i in sortedStats) {
        console.log(sortedStats[i].name)
    }
}

console.log(/[0-9A-F]{6}$/i.test('#FFFM00'))