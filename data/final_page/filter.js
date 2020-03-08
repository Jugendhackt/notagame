const fs = require("fs");

var data = parseData();

var total = 0
var rejected = 0
for(let i = 0; i < data.length; i++){
    if(data[i][0].includes("TOTAL,TOTAL")){
        total += parseInt(data[i][11])
    }
    if(data[i][0].includes("REJECTED")){
        rejected += parseInt(data[i][11])
    }
}

console.log("Total", total)
console.log("Rejected", rejected);
console.log("Ratio", (Math.floor(rejected/total * 10000)/100) + "%")
console.log(data)

fs.writeFileSync("data.json", JSON.stringify(data), "utf8")

setInterval(() => {}, 0)

function parseData(){
    var d = fs.readFileSync("tps00193.tsv", "utf8")
    var data = {
        AT: null,
        BE: null,
        BG: null,
        CH: null,
        CY: null,
        CZ: null,
        DE: null,
        DK: null,
        EE: null,
        EL: null,
        ES: null,
        EU27_2020: null,
        EU28: null,
        FI: null,
        FR: null,
        HR: null,
        HU: null,
        IE: null,
        IS: null,
        IT: null,
        LI: null,
        LT: null,
        LU: null,
        LV: null,
        MT: null,
        NL: null,
        NO: null,
        PL: null,
        PT: null,
        RO: null,
        SE: null,
        SI: null,
        SK: null,
        UK: null
    }

    var i = 0;
    for(let line of d.split("\n")){
        if(i == 0) {
            i++;
            continue;
        }
    
        var j = 0;
        var country = "";
        var prop = ""
        for(let val of line.split("\t")){
            if(country == "" && prop == ""){
                var props = val.split(",");
                prop = props[4];
                country = props[props.length - 1]
                if(!data[country]){
                    data[country] = {}
                }
                data[country][prop] = []
                // console.log(country, prop, data[country])
                continue;
            }
            data[country][prop].push(parseInt(val == ":" ? 0 : val));
        }
        i++;
    }
    return data;
}