# K-Preps: Your Ultimate Academic Companion 🎓

K-Preps is a comprehensive study platform designed to help students master their subjects with ease. Featuring a dynamic dashboard, rich resource library, and intelligent learning tools, K-Preps transforms the way you prepare for exams.

<div align="center">
<img width="1200" height="475" alt="Dashboard Preview" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 🚀 Features

### 📊 Real-Time Dashboard

- **Track Your Progress**: Visual daily activity charts powered by real usage data stored on your device.
- **Streak System**: Keep your momentum going with intelligent daily streak tracking.
- **Stats Overview**: Monitor focus time, modules completed, and your calculated global ranking.

### 📚 Resource Library

- **Real Data Integration**: Dynamic loading of study materials ensuring you always have the latest content.
- **Organized Content**: Access notes, cheatsheets, and flashcards categorized by subject and module.
- **Smart Reader**: Built-in Markdown reader with table of contents and mathematical formula support.
- **Diverse Formats**: dedicated support for PDFs, Mind Maps, Videos, and Interactive Notes.

### 🤖 Smart Assistant

- **AI Tutor**: Get instant answers and explanations for your doubts.
- **Practice Arena**: Test your knowledge with tailored quizzes and flashcards.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Local Persistence & React Hooks
- **Build Tool**: Vite
- **Icons**: Lucide React

## 🏃‍♂️ Getting Started

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/k-preps.git
    cd k-preps
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Setup Environment**
    Create a `.env.local` file and add your Gemini API Key for AI features:

    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 📝 Usage

- **Dashboard**: Your central hub. Stats are automatically updated as you engage with the app.
- **Resources**: Filter and search through your study materials.
- **Practice**: Engage with interactve quizzes.

---

**Note**: This project uses local storage to simulate a backend for user progress, ensuring data persistence across sessions on the same device.
