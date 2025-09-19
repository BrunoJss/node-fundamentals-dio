async function connectToDatabase(user, pass) {
    if(user === process.env.USERDATABASE && pass === process.env.PASSDATABASE){
        console.log("Conexão estabelecida com sucesso");
    }else{
        console.log("Falha de login!")
    }
}

export default connectToDatabase;