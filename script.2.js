const log=()=>{
    localStorage.removeItem('auth')
    window.location.href="/index.html"
    
}
const bu1=()=>{
    if(document.getElementById(`hm2`).style.display =`flex`)
    document.getElementById(`hm1`).style.display =`none`
    else{
        document.getElementById(`on`).style.display=`flex`
    }
}

const bu2=()=>{
    if(document.getElementById(`hm1`).style.display =`flex`)
    document.getElementById(`hm2`).style.display =`none`
    else{
        document.getElementById(`off`).style.display=`flex`
    }
}
const verify=()=>{
    if(localStorage.auth){

    }
    else{
        window.location.href="index.html"
    }
}
verify()