# ChatGPT Chatbot using Node.js and OpenAI API

Overview
--------

This repository contains a simple chatbot implementation using Node.js and the OpenAI API. The chatbot utilizes the GPT-4-mini model to respond to user input and maintains a history of prior prompts to provide context for the AI assistant.

Prerequisites
-------------

### Node.js Installation

To run this program, you need to have Node.js installed on your system. Here are the installation instructions for different platforms:

#### Mac (using Homebrew)
```bash
brew install node
```

#### Windows

Download and install Node.js from the official website: <https://nodejs.org/en/download/>

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install nodejs
```

### OpenAI API Key

To use the OpenAI API, you need to acquire an API key from your OpenAI account. Follow these steps:

1. Create an account on the OpenAI website: <https://openai.com/>
2. Go to your account settings and click on "API Keys"
3. Generate a new API key and save it securely

Getting Started
---------------

1. Clone this repository: `git clone https://github.com/your-username/chatgpt-chatbot.git`
2. Navigate to the project directory: `cd chatgpt-chatbot`
3. Install the required dependencies: `npm install`
4. Create a new file named `.env` and add your OpenAI API key:
```bash
OPENAI_API_KEY=your_api_key_here
```
5. Run the program: `npm start`

Usage
-----

Once the program is running, you will be prompted to enter your input in the terminal. The chatbot will respond to your input using the GPT-4-mini model. The chatbot maintains a history of prior prompts to provide context for the AI assistant.

Example Use Case
-----------------

Here's an example conversation:

```
User: Hello!
AI: Hi! How can I assist you today?
User: I'm looking for information on the latest advancements in AI.
AI: There have been significant advancements in AI recently, particularly in the field of natural language processing. Can you tell me more about what you're interested in learning?
```

Note: The AI responses are generated based on the GPT-4-mini model and may not always be accurate or up-to-date.

Contributing
------------

Contributions are welcome! If you'd like to improve the chatbot or add new features, please submit a pull request with your changes.

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.
