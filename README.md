# Smart Goal Planner

A modern React application for tracking and managing financial goals with an intuitive interface and comprehensive features.

## Features

- ✅ Create and manage financial goals
- 💰 Track savings progress with visual indicators
- 📊 Overview dashboard with statistics
- 🎯 Goal categorization (Travel, Emergency, Electronics, etc.)
- ⏰ Deadline tracking with status indicators
- 💳 Deposit functionality to update savings
- 🔍 Filter goals by deadline (24+ days away)
- 📱 Responsive design for all devices
- 💾 Local storage persistence

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: CSS3 with modern design
- **Storage**: LocalStorage
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd "Simple goal planner"
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Vercel Deployment

This project is optimized for Vercel deployment:

1. **Automatic Deployment**: Connect your GitHub repository to Vercel
2. **Manual Deployment**: Use Vercel CLI
   ```bash
   npm install -g vercel
   vercel
   ```

The project includes:
- `vercel.json` configuration for SPA routing
- Optimized build settings
- Environment variable support

### Build Configuration

The project uses Vite for building:
- Output directory: `dist`
- Optimized for production
- Tree-shaking enabled
- Modern browser support

## Project Structure

```
src/
├── Components/
│   ├── GoalForm.jsx      # Form for creating new goals
│   ├── GoalItem.jsx      # Individual goal display
│   ├── GoalList.jsx      # List of all goals
│   ├── Overviwe.jsx      # Dashboard overview
│   └── DeposiFormt.jsx   # Deposit form component
├── data/
│   └── currentGoal.js    # Initial goal data
├── App.jsx               # Main application component
├── App.css              # Application styles
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## Features in Detail

### Goal Management
- Create goals with name, target amount, category, and deadline
- Edit existing goals inline
- Delete goals with confirmation
- Visual progress tracking

### Dashboard Overview
- Total goals count
- Total amount saved
- Completed goals counter
- Individual goal status display

### Goal Status Indicators
- **Completed**: Goal amount reached (green border)
- **On Track**: More than 30 days remaining (blue border)
- **Near Deadline**: 30 days or less remaining (yellow border)
- **Overdue**: Past deadline (red border)

### Filtering
- Show all goals
- Filter goals with 24+ days remaining
- Real-time filtering updates

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:4000/goals
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Martin's Smart Goal Planner** - Track your financial goals with Martin's Tracker

---

© 2025 Smart Goal Planner - Built with React and Vite