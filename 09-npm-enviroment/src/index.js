import connectToDatabase from "./database/data.js";


//para carregar o .env no node é necessário usar a flag "--env-file=". Ex. package.json 

async function main() {
    await connectToDatabase(process.env.USERDATABASE, process.env.PASSDATABASE);
}

main()