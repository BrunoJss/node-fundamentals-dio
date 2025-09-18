async function connectToDatabase(user, pass) {
    if(user === 'naruto' && pass === 'uzumaki'){
        console.log("Conexão estabelecida com sucesso");
    }else{
        console.log("Falha de login!")
    }
}

export default connectToDatabase;