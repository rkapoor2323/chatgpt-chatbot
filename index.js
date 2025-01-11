import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';


async function main() {
    console.log(colors.bold.green('Welcome to the Chatbot Program!'));
    console.log(colors.bold.green('You can start chatting with the bot.'));

    const chatHistory = [] // Store conversation history

    while(true) {
        const userInput = readlineSync.question(colors.yellow('You: '));

        try {
            // Construct messages by iterating over the history
            const messages = chatHistory.map(([role, content]) => ({ role, content }))

            // Add latest user input 
            messages.push({ role: 'user', content: userInput });

            // Call API with user input and extract text/content from ChatGPT response
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: messages,
            });
            const completionText = completion.choices[0].message.content;

            // Exit case
            if (userInput.toLowerCase() === 'exit') {
                console.log(colors.green('Bot: ') + completionText);
                return;
            }

            // GPT response
            console.log(colors.green('Bot: ') + completionText);
            
            // Update history with user input and assistant response
            chatHistory.push(['user', userInput]);
            chatHistory.push(['assistant', completionText]);
        } catch (error) {
            console.error(colors.red(error));
        }
    }
}

main();

