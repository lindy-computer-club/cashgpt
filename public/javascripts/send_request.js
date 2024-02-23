const submitButton = document.getElementById('submit_reponse')
const endingResponse = document.getElementById('final_answer')

submitButton.addEventListener("click", async function(){
    endingResponse.innerText = "Sending request..."

    let response = await request_sender();
    try {
        endingResponse.innerText = response
    } 
    catch {
        endingResponse.innerText = "An error occured, and no response was given.";
    }
});

async function request_sender() {
    let c = new XMLHttpRequest();
    let questionFormat = JSON.stringify({
        goal: document.getElementById('goalInput').value,
        age: document.getElementById('ageInput').value,
        income: document.getElementById('incomeInput').value,
        expenses: document.getElementById('expenseInput').value,
        savings: document.getElementById('savingInput').value,
        funds: document.getElementById('fundInput').value,
        loans: document.getElementById('loanInput').value,
        assets: document.getElementById('assetInput').value,
        state: document.getElementById('stateInput').value,
        credit: document.getElementById('scoreInput').value
    });
    c.open('GET', '../question/' + questionFormat, false);
    c.send(null);
    return c.responseText
}