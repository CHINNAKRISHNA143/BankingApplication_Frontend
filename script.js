const BASE_URL ="http://localhost:8080";

function showSection(id){
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    documnet.getElementById(id).style.display='block';
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
}