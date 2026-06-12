# 🎮 Tic Tac Toe

A clean, modern, and responsive **Tic Tac Toe** game built with vanilla **HTML**, **CSS**, and **JavaScript** — no frameworks, no dependencies. Play with a friend in Player vs Player mode, keep score across rounds, and enjoy a polished glassmorphism UI.

---

## ✨ Features

- **Player vs Player** — classic 3×3 grid, X goes first.
- **Live turn indicator** — always know whose move it is.
- **Win & draw detection** — winning line is highlighted; draws are handled.
- **Persistent scoreboard** — tracks X wins, O wins, and draws across rounds.
- **Restart anytime** — reset the board without losing the score.
- **Responsive & accessible** — works on mobile and desktop, with ARIA labels and keyboard-friendly buttons.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| ---------- | --------------------------------------- |
| HTML       | Structure and layout                    |
| CSS        | Styling, grid, and animations           |
| JavaScript | Game logic, state, and interactivity    |

---

## 📁 Project Structure

```
tic-tac-toe/
├── index.html              # Markup and page structure
├── css/
│   └── styles.css          # Styles, layout, and animations
├── js/
│   └── script.js           # Game logic and state management
├── .github/
│   └── workflows/
│       └── ci-checks.yml   # Lint & format CI pipeline
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

No build step or installation required — it's a static site.

1. **Clone the repository**

   ```bash
   git clone https://github.com/Saadnadeem07/Tic-Tac-Toe-with-JS.git
   cd Tic-Tac-Toe-with-JS
   ```

2. **Open the game**

   Open `index.html` directly in your browser, or serve it locally:

   ```bash
   # Python 3
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```

---

## 🕹️ How to Play

1. Click any empty cell to place your mark.
2. Players alternate between **X** and **O**.
3. The first to line up three marks — horizontally, vertically, or diagonally — wins.
4. If all nine cells fill with no winner, it's a **draw**.
5. Click **Restart Game** to play again. The scoreboard carries over.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
