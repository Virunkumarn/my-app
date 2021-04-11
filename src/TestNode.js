
const fetch = require("node-fetch");
var jsdom = require("jsdom");
async function thisIsSyncFunction() {
    const a = await fetch('https://codequiz.azurewebsites.net', { headers: { 'Cookie': 'hasCookie=true' } }).then((res) => res.text())
    return a;
}

const number1 = async () => {
    let textHtml = await thisIsSyncFunction();
    let dom = new jsdom.JSDOM(textHtml)
    let testTable = dom.window.document.getElementsByTagName("table");
    let keepVal = [];
    for (let i = 1; i < testTable[0].rows.length; i++) {
        keepVal.push({ navName: testTable[0].rows[i].getElementsByTagName("td")[0].innerHTML.replace(" ", ""), navVal: testTable[0].rows[i].getElementsByTagName("td")[1].innerHTML })
    }
    if (process.argv[2] && keepVal.length > 0) {
        const objNav = keepVal.find((item) => item.navName === process.argv[2].toUpperCase())
        console.log('the Nav value of Your Args Is:', objNav ? objNav.navVal : "Not found Nav Val")

    }
    // testTable[0].rows[1].getElementsByTagName("td")[1].innerHTML
    // console.log(dom.getElementById('table'));
    // console.log(number1);
    // parser.
}
number1().catch((err) => { console.log("error while fetch", err) })
