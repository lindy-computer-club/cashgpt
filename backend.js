"use strict"

function format_request(data) {
    let f_query = "";
    f_query = f_query + (data.age         != "" ? `I am ${data.age} years old. `                  : '')
    f_query = f_query + (data.state       != "" ? `I live in ${data.state}. `                     : '')
    f_query = f_query + (data.goal        != "" ? `My main goal right now is to ${data.goal}. `   : "I don't have any specific goals right now. ")
    f_query = f_query + (data.income      != "" ? `My income is \$${data.income}/month. `         : "I don't have any monthly income. ")
    f_query = f_query + (data.expenses    != "" ? `My expenses are \$${data.expenses}/month. `    : "I don't have any monthly expenses. ")
    f_query = f_query + (data.savings     != "" ? `I have \$${data.savings} in savings. `         : "I don't have any savings. ")
    f_query = f_query + (data.funds       != "" ? `I have \$${data.funds} in emergency funds. `   : "I don't have any emergency funds. ")
    f_query = f_query + (data.assets      != "" ? `All of my assets are worth \$${data.assets} `  : "I don't have any assets. ")
    f_query = f_query + (data.loans       != "" ? `My loans are currently worth \$${data.loans} ` : "I don't have any outstanding loans. ")
    f_query = f_query + (data.credit      != "" ? `My credit score is currently ${data.credit}. ` : "I don't have a credit card nor a credit score. ")
    return f_query;
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
console.log('Backend setup complete')