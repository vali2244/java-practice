const hm=()=>{
    
    if(document.getElementById("homcnt").style.display===`flex`){
        document.getElementById("homcnt").style.display=`none`;
    }
    
    else{
        document.getElementById("homcnt").style.display=`flex`;
        document.getElementById(`abocnt`).style.display =`none`
        document.getElementById(`sercnt`).style.display =`none`
        document.getElementById(`video`).style.display = `none`
        
    }
    
}

const ab=()=>{
    if(document.getElementById(`abocnt`).style.display===`flex`)
    document.getElementById(`abocnt`).style.display =`none`;
    
    else{
        document.getElementById(`abocnt`).style.display=`flex`
        document.getElementById(`homcnt`).style.display =`none`
        document.getElementById(`sercnt`).style.display =`none`
        document.getElementById(`video`).style.display = `none`
    }
} 

const se=()=>{
    if(document.getElementById (`sercnt`).style.display===`flex`)
    document.getElementById(`sercnt`).style.display =`none`
    else{
        document.getElementById(`sercnt`).style.display =`flex`
        document.getElementById(`homcnt`).style.display =`none`
        document.getElementById(`abocnt`).style.display= `none`
        document.getElementById(`video`).style.display = `none`
    }
}

const bar=()=>{
    if(document.getElementById(`video`).style.display ===`flex`)
    document.getElementById(`video`).style.display = `none`
    else{
        document.getElementById(`video`).style.display= `flex`
        document.getElementById(`sercnt`).style.display =`none`
        document.getElementById(`homcnt`).style.display =`none`
        document.getElementById(`abocnt`).style.display =`none`
    }
}





const mybuton = () => {
    em = document.getElementById(`em`).value;
    pass = document.getElementById(`pass`).value;
    if (em == "syedvali@gmail.com" && pass == "123456") {
        document.getElementById(`form`).style.display = `none`;
        document.getElementById("l1").style.display = "flex";
        document.getElementById(`navbar`).style.display =`none`
        setTimeout(myone, 2000);
        localStorage.setItem('auth',true)
    } else {
        alert("wrong site password");
        document.getElementById(`sercnt`).style.display = `none`
        
        
    }
};

const myone = () => {
    document.getElementById(`l1`).style.display = "none";
    window.location.href = "index2.html";
};


const verify=()=>{
    if(localStorage.auth){
        window.location.href ="index2.html";
    }
}
verify();



