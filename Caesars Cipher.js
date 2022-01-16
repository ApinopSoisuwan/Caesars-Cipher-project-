function rot13(str) {
    let first = str.split('')
    let tran = ''
    for (let i = 0 ; i < first.length; i ++){
        if (first[i] == ' '){
            tran += " "
        }else if (first[i].charCodeAt() > 90 || first[i].charCodeAt() < 65){
                tran += first[i]
        }else if(first[i].charCodeAt() >= 78 ){
            tran += String.fromCharCode(first[i].charCodeAt() - 13 )
        }else if(first[i].charCodeAt() <= 78 ){
            tran += String.fromCharCode(first[i].charCodeAt() + 13 )
        }
        
    }
    return tran ;
  }
  
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"))
//console.log('A'.charCodeAt() ) // + 25
//console.log('Z'.charCodeAt()) //  - 25
console.log('!'.charCodeAt())
