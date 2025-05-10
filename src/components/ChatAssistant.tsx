
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mic, Send, X, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

const INITIAL_MESSAGES = [
  {
    id: "welcome-message",
    text: "Hi there! I'm the AI assistant for this portfolio. How can I help you today?",
    isUser: false,
  },
];

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Speech recognition with proper type checking
  const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognitionAPI ? new SpeechRecognitionAPI() : null;
  
  if (recognition) {
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => {
      setIsListening(false);
    };
    recognition.onend = () => {
      setIsListening(false);
    };
  }
  
  const portfolioResponses = {
    "skills": "I specialize in front-end and back-end development, with expertise in React, Node.js, TypeScript, and database design. I also have experience with AI/ML integration.",
    "experience": "I have experience in full-stack development, creating responsive web applications, and integrating AI/ML models into web applications.",
    "education": "I'm currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at M.Kumarasamy College of Engineering.",
    "contact": "You can contact me through the contact form on this website or connect with me on social media platforms linked in the footer.",
    "projects": "My portfolio includes various web applications built with modern frameworks like React, responsive design projects, and AI-integrated solutions.",
    "default": "Thank you for your interest in my portfolio. If you have specific questions about my skills, projects, or experience, feel free to ask!"
  };

  const getAIResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("skill") || lowerCaseMessage.includes("technology")) {
      return portfolioResponses.skills;
    } else if (lowerCaseMessage.includes("experience") || lowerCaseMessage.includes("work")) {
      return portfolioResponses.experience;
    } else if (lowerCaseMessage.includes("education") || lowerCaseMessage.includes("study")) {
      return portfolioResponses.education;
    } else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("reach")) {
      return portfolioResponses.contact;
    } else if (lowerCaseMessage.includes("project") || lowerCaseMessage.includes("portfolio")) {
      return portfolioResponses.projects;
    } else {
      return portfolioResponses.default;
    }
  };
  
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(userMessage.text),
        isUser: false,
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    }
  };
  
  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };
  
  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };
  
  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Focus textarea when chat opens
  useEffect(() => {
    if (isOpen) {
      textareaRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-portfolio-teal text-white p-3 rounded-full shadow-lg hover:bg-portfolio-navy transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
      
      {/* Chat modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md h-[600px] bg-white/95 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl flex flex-col overflow-hidden glass-card">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="font-medium text-lg text-portfolio-navy">Portfolio Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.isUser ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl p-3 text-sm",
                        message.isUser
                          ? "bg-portfolio-teal text-white"
                          : "bg-portfolio-subtle text-portfolio-navy"
                      )}
                    >
                      {message.text}
                      {!message.isUser && (
                        <button
                          onClick={() => isSpeaking ? stopSpeaking() : speakMessage(message.text)}
                          className="ml-2 text-portfolio-navy/60 hover:text-portfolio-navy"
                        >
                          {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] bg-portfolio-subtle rounded-2xl p-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-portfolio-teal animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-portfolio-teal animate-bounce delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-portfolio-teal animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            {/* Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <Textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="min-h-12 resize-none border-gray-200 focus:border-portfolio-teal"
                  disabled={isLoading}
                />
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    className="h-12 bg-portfolio-teal hover:bg-portfolio-navy"
                  >
                    <Send size={18} />
                  </Button>
                  <Button
                    onClick={isListening ? stopListening : startListening}
                    disabled={isLoading || !recognition}
                    className={cn(
                      "h-12",
                      isListening
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-portfolio-purple hover:bg-portfolio-navy"
                    )}
                  >
                    <Mic size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
