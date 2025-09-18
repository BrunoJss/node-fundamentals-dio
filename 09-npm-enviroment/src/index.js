import connectToDatabase from "./database/data.js";


async function main() {
    console.log(process.env.USERDATABASE)
    await connectToDatabase("sasuke", "uchiha");
}

main()