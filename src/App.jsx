import { useState, useRef } from 'react';
import ChatContainer from './components/ChatContainer';
import InputContainer from './components/InputContainer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [searchMode, setSearchMode] = useState('quick');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setMessages([]);
    setSidebarOpen(false);
  };

  const handleNewSearch = () => {
    setMessages([]);
    setSidebarOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleHealthMode = () => {
    const healthMessage = {
      id: Date.now(),
      text: "I'm your health assistant. I can help with general health information, symptoms, medications, and wellness tips. How can I assist you today?\n\n⚠️ Important: I provide general information only and am NOT a substitute for professional medical advice. Always consult healthcare professionals for medical concerns.",
      type: 'ai',
      timestamp: new Date()
    };
    setMessages([healthMessage]);
    setSidebarOpen(false);
  };

  const handleAppsMode = () => {
    const appsMessage = {
      id: Date.now(),
      text: "⚡ Apps & Integrations\n\nI can help you with various productivity apps and tools:\n\n📝 Productivity:\n• Task management\n• Note-taking\n• Calendar scheduling\n• Reminders\n\n💼 Business:\n• Email drafting\n• Document creation\n• Data analysis\n• Report generation\n\n🎨 Creative:\n• Content writing\n• Brainstorming\n• Design ideas\n• Marketing copy\n\n🔧 Development:\n• Code assistance\n• Debugging help\n• API documentation\n• Technical writing\n\n📊 Analytics:\n• Data interpretation\n• Chart creation\n• Trend analysis\n• Insights generation\n\nWhat would you like help with?",
      type: 'ai',
      timestamp: new Date()
    };
    setMessages([appsMessage]);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (window.handleImageSelect) {
          window.handleImageSelect(file, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAIResponse = (userMessage, mode, hasImage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (hasImage) {
      return `🖼️ Image Analysis Complete:\n\nI can see you've uploaded an image. In a production version, this would use:\n• Computer Vision APIs (Google Vision, Azure CV, AWS Rekognition)\n• Medical image analysis for health-related queries\n• Object detection and classification\n• OCR for text extraction\n\nFor health-related images:\n• Skin condition analysis\n• X-ray/MRI interpretation (with proper medical AI)\n• Symptom visualization\n• Medication identification\n\nNote: Always consult healthcare professionals for medical advice.`;
    }
    
    if (lowerMessage.includes('health') || lowerMessage.includes('medical') || 
        lowerMessage.includes('symptom') || lowerMessage.includes('doctor') ||
        lowerMessage.includes('medicine') || lowerMessage.includes('disease')) {
      return `🏥 Health Information:\n\nI can help with general health information. In a full implementation, I would:\n\n• Provide evidence-based health information\n• Suggest when to see a doctor\n• Explain medical terms\n• Offer wellness tips\n• Connect to telemedicine services\n\n⚠️ Important Medical Disclaimer:\nThis AI assistant provides general information only and is NOT a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions about a medical condition.\n\nFor medical emergencies, call emergency services immediately.`;
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm your AI assistant. How can I help you today?";
    }
    
    if (lowerMessage.includes('how are you')) {
      return "I'm doing great, thank you for asking! I'm here to help you with any questions or tasks you have.";
    }
    
    if (lowerMessage.includes('what can you do')) {
      return "I can help you with various tasks like answering questions, providing information, having conversations, and assisting with problem-solving. What would you like to know?";
    }
    
    if (lowerMessage.includes('weather')) {
      return "I don't have real-time weather data in this demo, but you can integrate weather APIs to get current conditions for any location.";
    }
    
    if (lowerMessage.includes('time')) {
      return `The current time is ${new Date().toLocaleTimeString()}.`;
    }
    
    if (lowerMessage.includes('date')) {
      return `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`;
    }
    
    if (mode === 'deep') {
      const deepResponses = [
        `🔍 Deep Search Analysis:\n\nQuery: "${userMessage}"\n\n1. Context Understanding: I've analyzed your query in depth.\n2. Multiple Sources: In production, this would search across multiple databases, APIs, and knowledge bases.\n3. Comprehensive Results: Deep search provides more detailed, researched answers with citations.\n4. Cross-referencing: Information would be verified across multiple sources.\n5. Advanced Processing: Using advanced NLP and semantic understanding.\n\nTo enable real deep search, integrate with:\n- Vector databases (Pinecone, Weaviate)\n- Search APIs (Google, Bing)\n- Knowledge graphs\n- AI APIs (OpenAI, Anthropic, Google)`,
        
        `📊 Deep Search Results for: "${userMessage}"\n\nAnalysis Complete:\n• Query complexity: Medium\n• Search depth: 3 levels\n• Sources checked: 15+ (simulated)\n• Confidence score: 87%\n\nIn a production environment, deep search would:\n1. Query multiple data sources simultaneously\n2. Perform semantic analysis\n3. Cross-reference information\n4. Provide source citations\n5. Offer related topics and follow-up questions\n\nThis requires integration with advanced search infrastructure and AI models.`
      ];
      return deepResponses[Math.floor(Math.random() * deepResponses.length)];
    }
    
    const responses = [
      "That's an interesting question! In a production version, this would connect to an AI API like OpenAI's GPT to provide intelligent responses.",
      "I understand your query. To make this fully functional, you'd integrate with AI services like OpenAI, Anthropic, or Google's AI APIs.",
      "Great question! This demo shows the interface structure. For real AI capabilities, you'd need to add backend API integration.",
      "I'm processing your request. In a complete implementation, this would use natural language processing to understand and respond intelligently.",
      "Thanks for your message! To enhance this further, consider adding features like conversation history, context awareness, and multi-language support."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = (message, imageFile, imagePreview) => {
    const userMessage = {
      id: Date.now(),
      text: message,
      type: 'user',
      timestamp: new Date(),
      image: imagePreview
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    const delay = searchMode === 'deep' ? 2000 + Math.random() * 1500 : 1000 + Math.random() * 1000;
    
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: generateAIResponse(message, searchMode, imagePreview),
        type: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, delay);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      <div className="container">
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`}
          onClick={closeSidebar}
        ></div>
        <Sidebar
          searchMode={searchMode}
          onSearchModeChange={setSearchMode}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
          onNewSearch={handleNewSearch}
          hasMessages={messages.length > 0}
          onLogout={handleLogout}
          onImageUpload={handleImageUpload}
          onHealthMode={handleHealthMode}
          onAppsMode={handleAppsMode}
          disabled={isTyping}
          isOpen={sidebarOpen}
          onClose={closeSidebar}
        />
        <div className="main-content">
          <Header user={user} onMenuClick={toggleSidebar} />
          <ChatContainer messages={messages} isTyping={isTyping} darkMode={darkMode} />
          <InputContainer 
            onSendMessage={handleSendMessage} 
            disabled={isTyping} 
            darkMode={darkMode}
            onImageClick={handleImageUpload}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
