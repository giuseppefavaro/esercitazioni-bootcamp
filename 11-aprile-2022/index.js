const fs = require("fs").promises;
// console.log(fs)


const arguments = process.argv.slice(2);

const product = arguments[0];
const quantity = arguments[1];
const contentTxt = `Prodotto: ${product}: | Quantità: ${quantity} \n`;

// console.log(arguments);

const data = require("./data.json");

data.list.push({
    "prodotto": product,
    "quantita": quantity,
})

const contentJson = JSON.stringify(data);


const liElements = data.list.map(({prodotto, quantita}) => `<li> ${prodotto} ${quantita} </li>`).join("\n\t\t\t")


const contentHtml = `

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spesa</title>
</head>
<body>
    <ul>
        ${liElements}
    </ul>
</body>
</html>

`;



// READ FILE TXT ************************************************

async function ReadFileTxt(file) {
    const data = await fs.readFile(file);
    const dataToString = data.toString();
    console.log(dataToString)
}





// WRITE FILE TXT ************************************************

async function WriteFileTxt(content) {
    await fs.writeFile('spesa.txt', content, {flag: 'a+'})


}


// WRITE FILE JSON + HTML ****************************************

async function WriteFileJsonHtml(json, html) {
    await fs.writeFile('./data.json',  json);
    await fs.writeFile('./index.html',  html)
}


// WRITE + READ **************************************************

async function WriteAndRead () {
    await WriteFileTxt(contentTxt);
    await ReadFileTxt("spesa.txt");

    await WriteFileJsonHtml(contentJson,contentHtml)
}





WriteAndRead();