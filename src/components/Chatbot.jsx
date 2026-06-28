import { useState, useEffect, useRef } from 'react';

const CHAT_RESPONSES = [
  {
    keywords: ['teleconsultation', 'consult', 'doctor', 'video', 'rural', 'urban'],
    text: "Vital Bharat bridges the rural-urban divide by enabling high-fidelity video consultations. Rural clinics are linked with urban medical specialists in real time, featuring integrated prescription templates, digital stethoscopes support, and instant pharmacist routing."
  },
  {
    keywords: ['secure', 'security', 'data', 'privacy', 'abdm', 'encryption', 'hipaa', 'safe'],
    text: "Data security is our core pillar. Vital Bharat is designed in compliance with Ayushman Bharat Digital Mission (ABDM) standards. All data is encrypted end-to-end, access is entirely consent-based, and we maintain complete immutable logs for every transaction."
  },
  {
    keywords: ['partner', 'demo', 'book', 'ngo', 'csr', 'hospital', 'join', 'contact', 'schedule'],
    text: "We make partnership seamless! You can request a custom sandbox walkthrough by filling out the 'Partner With Us' form at the bottom of this page. Alternatively, email our coordination desk directly at partnerships@vitalbharat.org."
  },
  {
    keywords: ['features', 'capabilities', 'benefit', 'analytics', 'dashboard', 'offline'],
    text: "Key features include: multi-tenant clinic dashboards, regional language prescription builders, offline-sync for remote areas, unified health records, and advanced population health analytics for institutional partners."
  },
  {
    keywords: ['about', 'vital bharat', 'who are', 'mission', 'aim', 'goal'],
    text: "Vital Bharat is a patient-centric teleconsultation and healthcare data exchange platform. Our mission is to democratize specialist care, bringing clinical expertise to the doorsteps of millions in tier-2, tier-3, and rural communities."
  },
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'greetings'],
    text: "Namaste! I am Arogya AI, your Vital Bharat digital guide. Ask me anything about our teleconsultation systems, data security model, or how to partner with us!"
  }
];

const FALLBACK_RESPONSE = "Thank you for asking! While I am currently operating as a simulated assistant, I can assure you our team has the answers. You can submit an inquiry through the Contact/Partnership Form on this page, or reach out to us directly at info@vitalbharat.org.";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! I am Arogya AI, your Vital Bharat assistant. How can I help you explore our teleconsultation & health data platform today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);

  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Alert notification indicator (pulse glow helper)
  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
    }
  }, [isOpen]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // 1. Append user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // 2. Simulate typing and bot reply
    setIsTyping(true);

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let replyText = '';

      // Find matching response based on keywords
      const matched = CHAT_RESPONSES.find(resp => 
        resp.keywords.some(keyword => lowerText.includes(keyword))
      );

      if (matched) {
        replyText = matched.text;
      } else {
        replyText = FALLBACK_RESPONSE;
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyText
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  const handleQuickReply = (text) => {
    handleSendMessage(text);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`floating-widget-btn floating-chatbot-btn d-flex align-items-center justify-content-center ${hasNewMessage && !isOpen ? 'pulse-glow' : ''}`}
        title="Chat with Arogya AI"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-chat-text-fill"></i>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="vb-chatbot-container">
          
          {/* Header */}
          <div className="chatbot-header">
            <div className="d-flex align-items-center">
              <div className="bg-vb-accent-light text-vb-accent rounded-circle p-2 me-2 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-robot fs-5"></i>
              </div>
              <div>
                <h6 className="mb-0 fw-bold">Arogya AI</h6>
                <small className="text-white-50" style={{ fontSize: '0.7rem' }}>
                  <span className="bg-success rounded-circle d-inline-block me-1" style={{ width: '6px', height: '6px' }}></span>
                  Online | Vital Bharat Guide
                </small>
              </div>
            </div>
            <button 
              type="button" 
              className="btn-close btn-close-white shadow-none" 
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            ></button>
          </div>

          {/* Body / Messages List */}
          <div className="chatbot-body">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`chatbot-message ${msg.sender === 'bot' ? 'bot' : 'user'}`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Quick Replies & Footer Input */}
          <div className="chatbot-footer">
            
            {/* Quick replies suggested prompts */}
            <div className="quick-replies-container">
              <button 
                onClick={() => handleQuickReply('What is Vital Bharat?')}
                className="quick-reply-btn"
                disabled={isTyping}
              >
                💡 What is it?
              </button>
              <button 
                onClick={() => handleQuickReply('How does teleconsultation work?')}
                className="quick-reply-btn"
                disabled={isTyping}
              >
                🏥 Teleconsultation
              </button>
              <button 
                onClick={() => handleQuickReply('Is our healthcare data secure?')}
                className="quick-reply-btn"
                disabled={isTyping}
              >
                🔒 Data Security
              </button>
              <button 
                onClick={() => handleQuickReply('How can we partner / book a demo?')}
                className="quick-reply-btn"
                disabled={isTyping}
              >
                🤝 Partner / Demo
              </button>
            </div>

            {/* Input form */}
            <div className="input-group">
              <input 
                type="text" 
                className="form-control form-control-sm border-end-0 shadow-none rounded-start-pill py-2 px-3" 
                placeholder="Ask about teleconsultation, data privacy..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
                aria-label="User inquiry input"
              />
              <button 
                className="btn btn-vb-primary btn-sm rounded-end-pill px-3 py-2 border-start-0" 
                type="button"
                onClick={() => handleSendMessage(inputValue)}
                disabled={isTyping || !inputValue.trim()}
                aria-label="Send message"
              >
                <i className="bi bi-send-fill"></i>
              </button>
            </div>

          </div>

        </div>
      )}
    </>
  );
}
