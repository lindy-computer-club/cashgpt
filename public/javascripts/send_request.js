const submitButton = document.getElementById('submit_reponse')
const endingResponse = document.getElementById('final_answer')

submitButton.addEventListener("click", function(){
    let c = new XMLHttpRequest();
    let questionFormat = JSON.stringify({
        goal: document.getElementById('goalInput').innerText,
        age: document.getElementById('ageInput').innerText,
        income: document.getElementById('incomeInput').innerText,
        expenses: document.getElementById('expenseInput').innerText,
        savings: document.getElementById('savingInput').innerText,
        funds: document.getElementById('fundInput').innerText,
        loans: document.getElementById('loanInput').innerText,
        assets: document.getElementById('assetInput').innerText,
        state: document.getElementById('stateInput').innerText,
        credit_score: document.getElementById('scoreInput').innerText
    });
    c.open('GET', '../question/' + questionFormat, false);
    c.send(null);
    try {
        endingResponse.innerText = c.responseText
    } 
    catch {
        endingResponse.innerText = "An error occured, and no response was given.";
    }
});

