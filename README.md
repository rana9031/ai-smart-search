# AI Smart Search

A professional ChatGPT-like AI web application built with React.

🔗 **Live Demo:** [https://rana9031.github.io/ai-smart-search/](https://rana9031.github.io/ai-smart-search/)

## Features

- 🎨 Modern, professional UI inspired by ChatGPT
- 💬 Real-time chat interface
- 🎤 Voice input (speech-to-text)
- 📷 Image upload and analysis
- 🔍 Deep search mode for comprehensive answers
- 🏥 Health assistant mode
- 👤 User authentication (login/register)
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design

## Screenshots

![AI Smart Search](https://via.placeholder.com/800x400?text=AI+Smart+Search)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rana9031/ai-smart-search.git
cd ai-smart-search
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Technologies Used

- **Frontend:** React 18, Vite
- **Styling:** CSS3 with modern design patterns
- **Features:** Web Speech API for voice input
- **Deployment:** GitHub Pages

## Features in Detail

### Voice Input
Click the microphone icon in the text input to speak your message. Uses browser's speech recognition API.

### Image Upload
Click the Images button in sidebar to upload images for analysis.

### Deep Search Mode
Toggle Deep Search for more comprehensive, detailed responses.

### Health Assistant
Click the Health button to start a health-focused conversation with medical disclaimers.

### Dark Mode
Toggle between light and dark themes for comfortable viewing.

## Project Structure

```
ai-smart-search/
├── src/
│   ├── components/     # React components
│   ├── App.jsx        # Main app component
│   ├── App.css        # Styles
│   └── main.jsx       # Entry point
├── public/            # Static assets
├── .github/
│   └── workflows/     # GitHub Actions for deployment
└── package.json
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

```bash
npm run build
# Deploy the dist folder to your hosting service
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

**rana9031**
- GitHub: [@rana9031](https://github.com/rana9031)

## Acknowledgments

- Inspired by ChatGPT's interface design
- Built with modern web technologies
- Icons from emoji set

## Future Enhancements

- [ ] Real AI API integration (OpenAI, Anthropic)
- [ ] Conversation history persistence
- [ ] Multi-language support
- [ ] Voice output (text-to-speech)
- [ ] File upload (PDF, documents)
- [ ] Export conversations
- [ ] User profile management

---

⭐ Star this repo if you find it helpful!
