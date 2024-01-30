"use strict"
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
                "content": data.message 
                /* data is an object, and as such can be easily edited
                to be multiple messages depending on our params */
                
            },
            {
                "role": "system",
                "content": "Please give this user specific advice to improve their financial situation."
            }
        ],
    });
    console.log("Finished OpenAI request")
    return chatCompletion.choices[0].message.content;
    
}

module.exports = airequest
console.log('backend exists')