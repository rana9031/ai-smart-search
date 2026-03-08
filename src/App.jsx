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
    
    // Image analysis responses
    if (hasImage) {
      return `🖼️ **Image Analysis Complete**

I can see you've uploaded an image. Here's what I can help with:

**Visual Analysis:**
• Object and scene identification
• Text extraction (OCR)
• Color and composition analysis
• Quality assessment

**For Health Images:**
• Skin condition observations
• Medication identification
• Medical equipment recognition
• Symptom visualization

**For Documents:**
• Text extraction and formatting
• Data table recognition
• Diagram interpretation

⚠️ **Important Note:** For medical images, always consult healthcare professionals. AI analysis is for informational purposes only.

What specific information would you like about this image?`;
    }
    
    // Health-related responses
    if (lowerMessage.includes('health') || lowerMessage.includes('medical') || 
        lowerMessage.includes('symptom') || lowerMessage.includes('doctor') ||
        lowerMessage.includes('medicine') || lowerMessage.includes('disease')) {
      return `🏥 **Health Information Assistant**

I can help with general health information:

**What I Can Assist With:**
• General health questions and wellness tips
• Explaining medical terms and conditions
• Medication information (general)
• Healthy lifestyle guidance
• When to seek professional care

**How to Get Help:**
1. Ask specific questions about symptoms or conditions
2. Request explanations of medical terms
3. Inquire about general wellness practices
4. Get guidance on when to see a doctor

⚠️ **Critical Medical Disclaimer:**
This AI provides general information only and is NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers for medical concerns.

🚨 **For emergencies, call emergency services immediately.**

What health topic can I help you understand better?`;
    }
    
    // Coding/Programming queries
    if (lowerMessage.includes('code') || lowerMessage.includes('programming') || 
        lowerMessage.includes('function') || lowerMessage.includes('javascript') ||
        lowerMessage.includes('python') || lowerMessage.includes('react')) {
      return `💻 **Programming Assistant**

I can help you with:

**Code Examples:**
• Clean, working code snippets
• Best practices and patterns
• Debugging assistance
• Code optimization

**Languages & Frameworks:**
• JavaScript, Python, Java, C++
• React, Node.js, Django
• HTML, CSS, SQL
• And many more!

**How I Help:**
1. Provide step-by-step explanations
2. Show working code examples
3. Explain concepts clearly
4. Suggest improvements

Please share your specific coding question or the problem you're trying to solve!`;
    }
    
    // Comparison requests
    if (lowerMessage.includes('compare') || lowerMessage.includes('difference') || 
        lowerMessage.includes('vs') || lowerMessage.includes('versus')) {
      return `📊 **Comparison Analysis**

I'll help you compare options clearly:

**My Approach:**
• Present information in table format
• Highlight key differences
• Show pros and cons
• Provide recommendations

**Example Format:**

| Feature | Option A | Option B |
|---------|----------|----------|
| Speed | Fast | Moderate |
| Cost | High | Low |
| Ease | Simple | Complex |

Please specify what you'd like to compare, and I'll create a detailed comparison for you!`;
    }
    
    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return `👋 **Hello! I'm AI Smart Search**

I'm here to help you find and understand information quickly!

**What I Can Do:**
• Answer general knowledge questions
• Provide programming help
• Explain complex topics simply
• Research and summarize information
• Brainstorm ideas
• Assist with learning

**How to Get the Best Results:**
• Ask specific questions
• Request step-by-step guidance if needed
• Let me know if you want comparisons or summaries
• Feel free to ask follow-up questions

What would you like to know today?`;
    }
    
    if (lowerMessage.includes('how are you')) {
      return `I'm functioning perfectly and ready to assist! 😊

**I'm here to help you with:**
• Quick answers to your questions
• Detailed explanations of complex topics
• Step-by-step guidance
• Research and information gathering
• Problem-solving and brainstorming

What can I help you with today?`;
    }
    
    if (lowerMessage.includes('what can you do')) {
      return `⚡ **My Capabilities**

**Knowledge & Research:**
• Answer general knowledge questions
• Explain complex topics in simple terms
• Provide up-to-date information
• Summarize long content

**Technical Help:**
• Programming assistance with code examples
• Debugging and optimization tips
• Technical explanations
• Best practices guidance

**Productivity:**
• Brainstorming ideas
• Creating outlines and plans
• Writing assistance
• Data analysis help

**Learning Support:**
• Step-by-step tutorials
• Concept explanations
• Practice problems
• Study guidance

**Response Formats:**
• Tables for comparisons
• Bullet points for clarity
• Code blocks for programming
• Summaries for long answers

How can I assist you today?`;
    }
    
    // Time and date
    if (lowerMessage.includes('time')) {
      return `🕐 **Current Time**

The current time is: **${new Date().toLocaleTimeString()}**

**Need more help with time?**
• Time zone conversions
• Scheduling assistance
• Time management tips
• Deadline calculations

Just ask!`;
    }
    
    if (lowerMessage.includes('date')) {
      return `📅 **Today's Date**

Today is: **${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}**

**Need date-related help?**
• Date calculations
• Event planning
• Calendar assistance
• Historical dates

Feel free to ask!`;
    }
    
    // Deep search mode
    if (mode === 'deep') {
      return `🔍 **Deep Search Analysis**

**Query:** "${userMessage}"

**Comprehensive Analysis:**

**1. Understanding Your Question**
I'm analyzing your query to provide the most relevant and detailed information.

**2. Multi-Source Research** (Simulated)
In a production environment, I would:
• Search across multiple databases
• Cross-reference information
• Verify facts from reliable sources
• Analyze different perspectives

**3. Detailed Explanation**
For complex topics, I break down:
• Core concepts and definitions
• Step-by-step processes
• Real-world applications
• Common misconceptions

**4. Related Topics**
• Connected concepts you might find useful
• Follow-up questions to explore
• Additional resources

**5. Summary**
Key takeaways presented clearly at the end.

**To Get Real Deep Search:**
This is a demo interface. For actual AI-powered deep search, integrate with:
• OpenAI GPT-4
• Anthropic Claude
• Google Gemini
• Custom AI models

**What specific aspect would you like me to explore in depth?**`;
    }
    
    // Default helpful response
    return `**I'm AI Smart Search - Here to Help!**

I received your message: "${userMessage}"

**How I Can Assist:**

📚 **If you need information:**
• Ask specific questions
• Request explanations
• Seek comparisons

💻 **If you need technical help:**
• Share your code or problem
• Describe what you're trying to build
• Ask for best practices

📝 **If you need guidance:**
• Request step-by-step instructions
• Ask for examples
• Seek recommendations

**Tips for Better Results:**
• Be specific about what you need
• Mention if you want code examples
• Let me know your experience level
• Ask follow-up questions anytime

**Ready to help!** What would you like to know more about?`;
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
