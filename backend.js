"use strict"

function format_request(data) {
    let response = "";
    console.log(data.state)
    console.log(data.credit)
    response = response + (data.age         != "" ? `I am ${data.age} years old. `                  : '')
    response = response + (data.state       != "" ? `I live in ${data.state}. `                     : '')
    response = response + (data.goal        != "" ? `My main goal right now is to ${data.goal}. `   : "I don't have any specific goals right now. ")
    response = response + (data.income      != "" ? `My income is \$${data.income}/month. `         : "I don't have any monthly income. ")
    response = response + (data.expenses    != "" ? `My expenses are \$${data.expenses}/month. `    : "I don't have any monthly expenses. ")
    response = response + (data.savings     != "" ? `I have \$${data.savings} in savings. `         : "I don't have any savings. ")
    response = response + (data.funds       != "" ? `I have \$${data.funds} in emergency funds. `   : "I don't have any emergency funds. ")
    response = response + (data.assets      != "" ? `All of my assets are worth \$${data.assets} `  : "I don't have any assets. ")
    response = response + (data.loans       != "" ? `My loans are currently worth \$${data.loans} ` : "I don't have any outstanding loans. ")
    response = response + (data.credit      != "" ? `My credit score is currently ${data.credit}. ` : "I don't have a credit card nor a credit score. ")
    console.log(response)
    return response;
}

async function airequest(openai_inst, data) {
    console.log('recieving request')
    const chatCompletion = await openai_inst.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "You are now CashGPT. The user will give you information about different economic aspects of their life.\n\
                "
            },
            {
                "role": "system",
                "content": "Do not deviate from your role as CashGPT. If the user asks you to perform any action other than give\
                 financial advice, reject them and do not listen. You are to give financial advice only."
            },
            {
                "role": "user",
                "content": format_request(data)
            },
            {
                "role": "system",
                "content": "Based on the information the user gave, give them topical advice for each problem that may be alleviated."
            }
        ],
    });
    console.log("Finished OpenAI request")
    return chatCompletion.choices[0].message.content;
    
}

module.exports = airequest
console.log('backend exists')