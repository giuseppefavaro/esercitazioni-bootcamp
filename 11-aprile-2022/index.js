const fs = require("fs").promises;
// console.log(fs)


const arguments = process.argv.slice(2);

const product = `${arguments[0]}`;
const quantity = `${arguments[1]}`;
const content = `Prodotto: ${product}: | Quantità: ${quantity} \n`;

// console.log(arguments);




// READ ************************************************

async function ReadFile(file) {
    const data = await fs.readFile(file);
    const dataToString = data.toString();
    console.log(dataToString)
}

// ReadFile("spesa.txt");




// WRITE ************************************************

async function WriteFile(content) {
    await fs.writeFile('spesa.txt', content, {flag: 'a+'})
}

// WriteFile("altro contenuto");




// WRITE + READ ******************************************

async function WriteAndRead () {
    await WriteFile(content);
    await ReadFile("spesa.txt")
}





WriteAndRead();