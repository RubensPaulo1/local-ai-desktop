async function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");
    const button = document.getElementById("sendButton");
  
    const message = input.value.trim();
    if (!message) return;
  
    // 1️⃣ Mostra sua mensagem imediatamente
    chatBox.innerHTML += `<p><strong>Você:</strong> ${message}</p>`;
    input.value = "";
  
    // 2️⃣ Mostra indicador de carregamento
    const loadingId = "loading-" + Date.now();
    chatBox.innerHTML += `<p id="${loadingId}"><strong>IA:</strong> pensando...</p>`;
  
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // 3️⃣ Desabilita botão
    button.disabled = true;
  
    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });
  
      const data = await response.json();
  
      // 4️⃣ Remove o "pensando..."
      const loadingElement = document.getElementById(loadingId);
      loadingElement.remove();
  
      // 5️⃣ Mostra resposta real
      chatBox.innerHTML += `<p><strong>IA:</strong> ${data.response}</p>`;
  
    } catch (error) {
      document.getElementById(loadingId).innerText = "Erro ao conectar com a IA.";
    }
  
    button.disabled = false;
    chatBox.scrollTop = chatBox.scrollHeight;
  }