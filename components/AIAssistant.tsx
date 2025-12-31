
import React, { useState, useRef, useEffect } from 'react';
import { getAIAssistantResponse } from '../services/geminiService';
import { PERSONAL_INFO } from '../constants';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: `Hi! I'm ${PERSONAL_INFO.name.split(' ')[0]}'s AI assistant. Ask me anything about my experience!` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user' as 'model' | 'user',
      parts: [{ text: m.text }]
    }));

    const aiResponse = await getAIAssistantResponse(userText, history as any);
    
    setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="chat-widget">
      {!isOpen && (
        <button className="chat-trigger position-relative" onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-headset"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light">
            1
          </span>
        </button>
      )}

      {isOpen && (
        <div className="chat-window card border-0 animate-up">
          <div className="card-header bg-dark text-white p-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                  <i className="fa-solid fa-robot"></i>
                </div>
                <span className="status-dot position-absolute bottom-0 end-0 border border-dark border-2"></span>
              </div>
              <div>
                <h6 className="mb-0 fw-bold">Portfolio Bot</h6>
                <small className="text-white-50">Online</small>
              </div>
            </div>
            <button className="btn btn-sm btn-link text-white text-decoration-none" onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-times fs-5"></i>
            </button>
          </div>

          <div className="chat-messages card-body d-flex flex-column gap-3 p-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-bubble ${msg.role === 'assistant' ? 'message-assistant shadow-sm border' : 'message-user'}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message-bubble message-assistant shadow-sm border d-flex align-items-center">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="card-footer bg-white p-3 border-top">
            <form className="input-group" onSubmit={handleSend}>
              <input 
                type="text" 
                className="form-control border-0 bg-light rounded-pill-start px-3" 
                placeholder="Ask me a question..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button className="btn btn-primary rounded-pill-end px-3" type="submit" disabled={isLoading || !input.trim()}>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
