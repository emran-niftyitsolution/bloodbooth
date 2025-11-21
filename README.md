# 🩸 BloodBooth

A modern, ultra-responsive blood donation platform built with Next.js 16, Ant Design, Framer Motion, and Tailwind CSS v4.

## ✨ Features

- **Modern UI/UX**: Cutting-edge design with glassmorphism, bento grids, and 3D transforms
- **Smooth Animations**: Physics-based animations powered by Framer Motion
- **Real-time Blood Demand**: Live status of blood type availability
- **Donor Stories**: Testimonials from our community of heroes
- **Mobile Responsive**: Fully optimized for all screen sizes
- **Integrated Navigation**: Modern hero section with transparent navigation inside
- **Scroll Progress Bar**: Animated gradient progress indicator
- **Modern Ant Design Buttons**: All buttons styled with gradients and rounded shapes
- **Custom Loading State**: Animated loading screen with brand elements
- **404 & Error Pages**: Beautiful custom error pages
- **PWA Ready**: Manifest file and icons for progressive web app
- **SEO Optimized**: Complete metadata and Open Graph tags

## 🚀 Getting Started

First, install dependencies:

```bash
bun install
# or
npm install
```

Then, run the development server:

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Ant Design 5
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: Bun

## 📁 Project Structure

```
bloodb/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   └── ui/                 # Reusable UI components
├── public/                 # Static assets
└── package.json
```

## 🎨 Design Features

- **Glassmorphism Effects**: Frosted glass UI elements
- **Animated Gradients**: Smooth color transitions
- **Bento Grid Layouts**: Modern card-based designs
- **3D Transforms**: Interactive hover effects
- **Spring Animations**: Natural motion physics
- **Scroll Triggers**: Content reveals on scroll
- **Dark Mode Sections**: Contrast for visual hierarchy

## 🌐 Sections

1. **Hero with Navigation**: Integrated header in hero section
2. **Stats Dashboard**: Live donation statistics
3. **Urgent Need Banner**: Critical blood requirement alerts
4. **Blood Type Demand**: Real-time availability status
5. **Testimonials**: Donor success stories
6. **Impact Gallery**: Visual showcase of our work
7. **Process Guide**: Step-by-step donation process
8. **Benefits**: Why donate blood
9. **Ways to Help**: Multiple contribution options
10. **Call to Action**: Prominent donation prompts
11. **Footer**: Contact and quick links

## 🔧 Configuration

### Image Optimization

Images are configured to load from Unsplash in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

### Custom Fonts

The project uses Geist Sans and Geist Mono fonts, optimized with `next/font`.

## 📦 Dependencies

- `next`: ^16.0.3
- `react`: ^19.2.0
- `antd`: ^5.29.1
- `framer-motion`: ^12.23.24
- `lucide-react`: ^0.554.0
- `tailwindcss`: ^4
- `typescript`: ^5

## 🎯 Performance

- Optimized images with Next.js Image component
- Lazy loading for off-screen content
- Reduced motion support for accessibility
- Smooth 60fps animations
- Minimal JavaScript bundle

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For support, email info@bloodbooth.org or join our community channels.

---

**BloodBooth** - *Saving lives, one donation at a time.* ❤️
