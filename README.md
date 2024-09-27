# Nocturnal Navigator

## 🦉 Overview

Nocturnal Navigator is an interactive web application that simulates controlling a robot on a 5x5 grid. This project showcases modern React development practices, state management, and responsive design.

Demo: https://nocturnal-navigator.vercel.app

## 🚀 Features

- Control an owl-themed robot on a 5x5 grid
- Move the robot forward in its facing direction
- Rotate the robot left or right
- Visual feedback for the robot's movement and orientation
- Compass indicator for current direction
- Trail visualization of the robot's path
- Collision detection with grid boundaries

## 🛠 Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite

## 🏗 Project Structure

```
nocturnal-navigator/
├── src/
│   ├── _tests_/
│   │   ├── Grid.test.tsx
│   │   ├── OwlRobot.test.tsx
│   │   ├── useRobotState.test.ts
│   ├── components/
│   │   ├── Compass.tsx
│   │   ├── Controls.tsx
│   │   ├── Grid.tsx
│   │   ├── OwlRobot.tsx
│   │   ├── OwlRobotSvg.tsx
│   │   └── SpeechBubble.tsx
│   ├── hooks/
│   │   └── useRobotState.ts
│   ├── styles/
│   │   └── index.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── constants.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚦 Getting Started

1. Clone the repository:
   ```
   git clone  https://github.com/hellomishki/nocturnal-navigator.git
   ```

2. Navigate to the project directory:
   ```
   cd nocturnal-navigator
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## 🖥 Usage

- Use the "Move Forward" button to move the robot in its current facing direction.
- Use the "Rotate Left" and "Rotate Right" buttons to change the robot's orientation.
- The compass at the top indicates the current direction.
- A speech bubble appears when the robot cannot move further in a direction.

## 🚢 Deployment

This project is set up for easy deployment on Vercel. Follow these steps:

1. Push your code to a GitHub repository.
2. Log in to your Vercel account (or create one if you haven't already).
3. Click "New Project" and select your GitHub repository.
4. Vercel will automatically detect the project type. Ensure it's set to React.
5. Click "Deploy" and wait for the build to complete.

Your project will now be live on a Vercel URL!

## 🧪 Testing

To run the test suite:

```
npm run test
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/hellomishki/nocturnal-navigator/issues).

## 👤 Author
Liliana Summers
- GitHub: [@hellomishki](https://github.com/hellomishki)
- LinkedIn: [@lilianasummers](https://www.linkedin.com/in/lilianasummers/)

## 🙏 Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite](https://vitejs.dev/guide/)

---

Made with 💖 and ☕
