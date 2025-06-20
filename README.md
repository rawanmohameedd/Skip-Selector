# 🚛 Skip Selector Redesign

This project is a complete redesign of the **"Choose Your Skip Size"** page for REMWaste, created as part of a front-end coding challenge. The goal was to build a **modern, responsive, and user-friendly interface** while preserving all original functionalities.

---

## 🚀 Getting Started

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev -- --host
   ```

   > Use `--host` to access the app from any device on the same network (e.g., laptop and mobile).

---

## ✨ Features

* 📏 Visual skip size comparison
* 🎯 Smart filtering (by price, size, heavy waste, road placement)
* 📱 Fully responsive design (mobile + desktop)
* ⚡ Instant skip selection with real-time summary

---

## 🧠 Design & Implementation Decisions

* **UI Redesign**
  The entire page layout was reimagined to look clean, modern, and responsive. The original structure was removed to meet the requirement of looking “completely different.” Smart filtering (by price, size, heavy waste, road placement) was added to improve the user experience while retaining all original features.


* **Data Handling**
  Data is fetched using `fetch` and strongly typed with custom TypeScript interfaces for type safety.
  ➤ Endpoint used: `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

* **Error Handling**
  Basic error states (e.g., loading spinner, fetch failure messages) enhance the UX.

* **Performance**
  Built using Vite for faster development and optimized reloads. The app uses modular, reusable components to minimize re-renders.
