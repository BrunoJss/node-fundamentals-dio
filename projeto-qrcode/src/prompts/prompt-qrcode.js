import chalk from "chalk";


const promptQrCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link para gerar o QRCode:")
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha entre os tipos 1) Normal ou 2) Terminal "),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha entre 1 e 2 apenas")
    }
];

export default promptQrCode;