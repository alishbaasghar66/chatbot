
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const deleteBtn = document.getElementById('deleteBtn');

// Sample chatbot replies
const botReplies = [
  "Hello! How can I help you?",
  "I'm here to assist you.",
   "That's interesting!",
   "Can you please elaborate?",
  "I see. Tell me more.",
  "Nice to hear that!",
  "Let me think about that..."
  
  
];

// Handle send message
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, 'user');
  userInput.value = "";

  setTimeout(() => {
    const botReply = botReplies[Math.floor(Math.random() * botReplies.length)];
    addMessage(botReply, 'bot');
  }, 600);
}

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Delete all messages
deleteBtn.addEventListener('click', () => {
  chatBox.innerHTML = '';
});
