"# Tugawe Feedback - Main Application Interface

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.1.14-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> A modern customer feedback and analytics platform for eateries, events, and products. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

## ✨ Features

- 📊 **Real-time Analytics** - CSAT scores, sentiment analysis, and trend tracking
- 🎨 **Modern UI** - Glassmorphism effects with blue gradient themes
- 📱 **Mobile-First** - Responsive design with bottom navigation for mobile
- 🚀 **Seamless Navigation** - Smooth page transitions and intuitive flow
- ♿ **Accessible** - ARIA labels, keyboard navigation, semantic HTML
- 🎯 **Optimized Code** - 90% reduction in code duplication through reusable components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/tugawe/tugawe-main-application-interface.git

# Navigate to the project
cd tugawe-main-application-interface/tugawe-app

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
tugawe-app/
├── app/                          # Next.js 15 App Router pages
│   ├── page.tsx                  # Landing page
│   ├── signin/                   # Authentication
│   ├── onboarding/               # User onboarding
│   ├── business-details/         # Business setup
│   ├── dashboard/                # Main dashboard
│   ├── analytics/                # Frequency analysis
│   ├── sentiment/                # Sentiment analysis
│   ├── csat/                     # CSAT trends
│   ├── csat-category/            # CSAT by category
│   └── trend-analysis/           # Trend rankings
│
├── components/                   # Reusable components
│   ├── GenericSidebar.tsx       # Universal sidebar
│   ├── AnalyticsLayout.tsx      # Analytics page wrapper
│   ├── DashboardLayout.tsx      # Main layout with nav
│   ├── ChartCard.tsx            # Chart wrapper
│   ├── BottomNavigation.tsx     # Mobile navigation
│   ├── PageTransition.tsx       # Page animations
│   └── [...]                    # Chart & form components
│
├── public/                       # Static assets
├── OPTIMIZATION_GUIDE.md        # Detailed optimization docs
├── QUICK_START.md               # Quick reference guide
├── NAVIGATION_MAP.md            # Navigation documentation
└── CODE_OPTIMIZATION_SUMMARY.md # Optimization summary
```

## 📊 Available Pages

### Public Pages
- `/` - Landing page with hero and features
- `/signin` - Email/OTP authentication
- `/onboarding` - Welcome and feature introduction
- `/business-details` - Business information setup

### Dashboard Pages (Authenticated)
- `/dashboard` - Main CSAT overview
- `/trend-analysis` - Word frequency and trends
- `/analytics` - Detailed frequency analysis
- `/sentiment` - Sentiment tracking and distribution
- `/csat` - CSAT trends over time
- `/csat-category` - CSAT breakdown by category

## 🎨 Design System

### Colors
- **Primary:** Blue gradient (`from-blue-600 via-blue-500 to-blue-400`)
- **Cards:** White with opacity + backdrop blur
- **Text:** White on colored backgrounds, gray on white

### Components
- **Glassmorphism:** `bg-white/10 backdrop-blur-md`
- **Rounded Corners:** `rounded-2xl` for cards, `rounded-full` for buttons
- **Transitions:** `transition-all duration-300` for smooth interactions

## 🧩 Key Components

### Reusable Layouts
```tsx
import DashboardLayout from '@/components/DashboardLayout'
import AnalyticsLayout from '@/components/AnalyticsLayout'
import GenericSidebar from '@/components/GenericSidebar'

// Create a new analytics page
export default function MyPage() {
  return (
    <DashboardLayout>
      <AnalyticsLayout sidebar={<GenericSidebar menuItems={items} />}>
        {/* Your content */}
      </AnalyticsLayout>
    </DashboardLayout>
  )
}
```

### Navigation
- **Header Tabs** - Desktop navigation (Dashboard, Analytics, Sentiment, CSAT)
- **Sidebar** - Contextual navigation per section
- **Bottom Nav** - Mobile navigation with icons

## 🚦 Navigation Flow

```
Landing → Sign In → Onboarding → Business Details → Dashboard
                                                      ├─ Analytics
                                                      ├─ Sentiment
                                                      ├─ CSAT
                                                      └─ Trends
```

## 🛠️ Tech Stack

- **Framework:** [Next.js 15.5.4](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.0.2](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4.1.14](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** pnpm

## 📱 Responsive Design

### Desktop (≥ 768px)
- Header navigation with tabs
- Expandable sidebar
- Multi-column layouts
- Hover effects

### Mobile (< 768px)
- Bottom navigation bar
- Full-width sidebar
- Single-column layouts
- Touch-optimized

## 🎯 Code Optimization

### Before Optimization
- 5 duplicate sidebar components
- 441 lines of repetitive code
- No navigation system
- Manual page transitions

### After Optimization
- 1 reusable GenericSidebar
- 100 lines of shared code
- Complete navigation system
- Smooth page transitions
- **90% code reduction**

See [CODE_OPTIMIZATION_SUMMARY.md](tugawe-app/CODE_OPTIMIZATION_SUMMARY.md) for details.

## 📚 Documentation

- **[QUICK_START.md](tugawe-app/QUICK_START.md)** - Quick reference guide
- **[OPTIMIZATION_GUIDE.md](tugawe-app/OPTIMIZATION_GUIDE.md)** - Detailed optimization docs
- **[NAVIGATION_MAP.md](tugawe-app/NAVIGATION_MAP.md)** - Complete navigation map
- **[CODE_OPTIMIZATION_SUMMARY.md](tugawe-app/CODE_OPTIMIZATION_SUMMARY.md)** - Optimization summary

## 🧪 Testing

### Manual Testing
```bash
# Run dev server
pnpm dev

# Test navigation flow
1. Visit http://localhost:3000
2. Click "Get started"
3. Complete sign-in flow
4. Navigate through dashboard pages
5. Test mobile view (< 768px)
```

### Check Active States
- Header tabs highlight current page
- Sidebar items highlight active view
- Bottom navigation shows active section

## 🏗️ Development

### Commands
```bash
# Development
pnpm dev              # Start dev server

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Linting
pnpm lint             # Run ESLint
```

### Adding a New Page

1. Create page component in `app/my-page/page.tsx`
2. Use reusable layouts (DashboardLayout, AnalyticsLayout)
3. Add to navigation (Header, Sidebar, or Bottom Nav)
4. Test navigation and active states

See [OPTIMIZATION_GUIDE.md](tugawe-app/OPTIMIZATION_GUIDE.md) for examples.

## 🎨 Customization

### Theme Colors
Update Tailwind config or use CSS variables:
```css
/* app/globals.css */
:root {
  --primary-blue: #3b82f6;
  --secondary-blue: #60a5fa;
}
```

### Component Variants
GenericSidebar supports two variants:
```tsx
<GenericSidebar variant="glass" />      // Semi-transparent
<GenericSidebar variant="gradient" />   // Blue gradient
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Tugawe Team** - *Initial work* - [tugawe](https://github.com/tugawe)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- The open-source community

## 📧 Contact

- **Project Repository:** [github.com/tugawe/tugawe-main-application-interface](https://github.com/tugawe/tugawe-main-application-interface)
- **Issues:** [Report a bug](https://github.com/tugawe/tugawe-main-application-interface/issues)

---

**Built with ❤️ by the Tugawe Team**" 
