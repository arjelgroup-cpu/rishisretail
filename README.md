# Rishis Retail - August-End Mega Dhamaka

A modern, mobile-optimized landing page for Rishis Retail's August-end sale campaign. Built with React, TypeScript, and Supabase for lead collection.

## 🚀 Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Lead Collection**: Phone number collection with Supabase integration
- **Countdown Timer**: Creates urgency for the sale campaign
- **Store Locations**: Interactive store locator with contact information
- **Modern UI**: Beautiful gradient design with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Supabase (PostgreSQL)
- **Package Manager**: pnpm

## 📱 Pages & Components

- **Hero Section**: Main campaign banner with countdown
- **Phone Form**: Lead collection form with Supabase integration
- **Store Locator**: Interactive map of Rishis Retail locations
- **Product Categories**: Display of available product categories
- **Contact Information**: Social media links and contact details

## 🗄️ Database Schema

```sql
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text UNIQUE NOT NULL,
  source text DEFAULT 'website',
  contacted boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rishisretail
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - Run the migration: `npx supabase db push`
   - Update the Supabase URL and anon key in `src/lib/supabase.ts`

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📊 Lead Management

Phone numbers submitted through the form are stored in the Supabase `leads` table. You can view them in the Supabase dashboard:

1. Go to your Supabase project dashboard
2. Navigate to Table Editor → leads
3. View all collected phone numbers

## 🎨 Customization

### Colors & Branding
- Update colors in `tailwind.config.js`
- Replace logo in `public/rishis transparent.png`
- Modify store locations in `src/App.tsx`

### Content
- Update sale details in the hero section
- Modify store information in the `storeLocations` array
- Change contact information and social media links

## 📦 Build for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary to Rishis Retail.

## 📞 Contact

- **Phone**: +91 70990 79777
- **Website**: [Rishis Retail](https://rishisretail.com)
- **Social Media**: @rishisretail
