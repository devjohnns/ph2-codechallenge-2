# Smart Goal Planner

A fintech React + Vite application for managing multiple savings goals, tracking deposits, and monitoring progress toward each goal.

## Features

- **Multiple Savings Goals:** Add, edit, and delete financial goals (e.g., "Travel Fund", "Emergency Fund").
- **Progress Tracking:** Visual progress bars, remaining amount, and deadline warnings for each goal.
- **Deposits:** Allocate deposits to any goal and update progress in real time.
- **Overview Dashboard:** See total goals, total saved, completed goals, and time left for each goal.
- **Data Persistence:** All data is stored in `db.json` and served via [json-server](https://github.com/typicode/json-server) for full CRUD operations.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/)
- [json-server](https://github.com/typicode/json-server) (for local API)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/smart-goal-planner.git
   cd smart-goal-planner
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the React development server:**
   ```sh
   npm run dev
   ```

4. **Start the mock backend:**
   ```sh
   npx json-server --watch db.json --port 3000
   ```

5. **Open the app:**  
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## API Structure (`db.json` Example)

```json
{
  "goals": [
    {
      "id": "1",
      "name": "Travel Fund - Japan",
      "targetAmount": 5000,
      "savedAmount": 3200,
      "category": "Travel",
      "deadline": "2025-12-31",
      "createdAt": "2024-01-15"
    }
    // ...more goals
  ]
}
```

## Project Structure

- `src/` - React source code and components
- `db.json` - Mock backend data
- `public/` - Static files

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Author

**John Maina**

---

Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).