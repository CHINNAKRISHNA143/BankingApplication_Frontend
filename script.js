const BASE_URL ="http://localhost:8080";

function showSection(id){
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display='block';
}

function createAccount(){
    const data = {
        name : document.getElementById("c-name").value,
        email : document.getElementById("c-email").value,
        balance : parseFloat(document.getElementById("c-balance").value),
    };

    fetch(BASE_URL+"/accounts/create",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        document.getElementById("create-result").innerText="Account Created: "+result.accountNumber;
    });

}

function deposite(){
    const data = {
        accNo : document.getElementById("d-acc").value,
        amount : parseFloat(document.getElementById("d-amount").value),
    };

    fetch(BASE_URL+"/transactions/deposite",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg =>{
        document.getElementById("deposit-result").innerText = msg;
    });

}

function withdraw(){
    const data = {
        accNo : document.getElementById("d-acc").value,
        amount : parseFloat(document.getElementById("d-amount").value)
    };

    fetch(BASE_URL+"/tranctions/withdraw",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg =>{
        document.getElementById("withdraw-result").innerText = msg;
    });

}

function transfer(){
    const data = {
        fromAcc : document.getElementById("t-from").value,
        toAcc : document.getElementById("t-to").value,
        amount : parseFloat(document.getElementById("t-amount").value)
    };

    fetch(BASE_URL+"/transactions/transfer",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg =>{
        document.getElementById("transfer-result").innerText = msg;
    });

};

function viewAccount(){
    const acc= document.getElementById("v-acc").value;

    fetch(BASE_URL+"/accounts/"+acc)
    .then(res => res.json())
    .then(data =>{
        document.getElementById("view-result").innerText = JSON.stringify(data,null,2);
    });
    
}

function listAccounts(){
    fetch(BASE_URL+"/accounts/all")
    .then(res => res.json())
    .then(data => {
        document.getElementById("list-result").innerText = JSON.stringify(data,null,2);

    })
}














