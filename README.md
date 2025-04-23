# Next Win Website

Een moderne website voor Next Win, een creatief digital agency.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework met optimale performance en SEO
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animaties**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [Poppins](https://fonts.google.com/specimen/Poppins)
- **Deployment**: [Vercel](https://vercel.com/)

## Features

- Responsive design met mobile-first benadering
- Lichte en donkere modus
- SEO geoptimaliseerd
- Performante laadtijden
- Moderne UI/UX met subtiele animaties
- Modulaire componentstructuur

## Ontwikkeling

### Vereisten

- Node.js 18+
- npm of yarn

### Installatie

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Bouw voor productie
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Structuur

```
src/
├── app/               # App router pages
├── components/        # React components
│   ├── layout/        # Layout componenten (Navbar, Footer)
│   ├── sections/      # Section componenten voor pagina's
│   └── ui/            # UI componenten (Button, Section, etc.)
├── hooks/             # Custom React hooks
└── lib/               # Utility functies en helpers
```

## Pagina's

- **Home**: / - Landingspagina met hero, services, cases en contact sectie
- **Cases**: /cases - Overzicht van projecten
- **Services**: /services - Diensten overzichtspagina
- **Over ons**: /about-us - Informatie over het bedrijf
- **Contact**: /contact - Contactpagina met formulier
