// a random token generator function

function generateToken(){
    let token = ''
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for(i=0;i<32;i++){
        let index = Math.floor((Math.random() * char.length))
        token = token + char[index]
    }
}

generateToken();