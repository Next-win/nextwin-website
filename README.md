# Next Win Website

Een moderne website voor Next Win, een creatief digital agency.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework met optimale performance en SEO
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animaties**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [Poppins](https://fonts.google.com/specimen/Poppins)
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

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

## Vercel Deployment Workflow

### Initiële Setup

De website is gedeployed op Vercel met de volgende configuratie:

1. **GitHub Repository**: Het project is gelinkt aan de GitHub repository [Next-win/nextwin-website](https://github.com/Next-win/nextwin-website)
2. **Branch**: De `main` branch wordt automatisch gedeployed
3. **Framework**: Next.js wordt automatisch gedetecteerd
4. **Domein**: De website is beschikbaar op:
   - Productie: [https://nextwin-website-w681.vercel.app/](https://nextwin-website-w681.vercel.app/)
   - Custom domein: [https://next-win.nl](https://next-win.nl) (zodra geconfigureerd)

### Wijzigingen Doorvoeren

Om wijzigingen aan de website door te voeren:

1. **Maak lokale wijzigingen**:
   ```bash
   # Bewerk bestanden in de repository
   ```

2. **Commit en push naar GitHub**:
   ```bash
   git add .
   git commit -m "Beschrijving van wijzigingen"
   git push
   ```

3. **Automatische deployment**: Vercel detecteert de push naar GitHub en start automatisch een nieuwe build en deployment

4. **Controleer de deployment status** in het Vercel Dashboard

### Performance Monitoring

De website gebruikt Vercel Speed Insights voor performance monitoring:

1. **Setup**: De `@vercel/speed-insights` package is geïnstalleerd en geïmplementeerd in `src/app/layout.tsx`

2. **Data bekijken**: Ga naar de "Speed Insights" tab in het Vercel dashboard om performance metrics te bekijken

3. **Optimalisaties**: Gebruik de verzamelde gegevens om gerichte performance optimalisaties uit te voeren

### Afbeeldingsoptimalisatie

Voor optimale prestaties van afbeeldingen:

1. Gebruik altijd de Next.js `Image` component:
   ```jsx
   import Image from 'next/image';
   
   <Image 
     src="/images/example.jpg"
     alt="Beschrijving"
     width={800}
     height={600}
     priority={true} // Voor above-the-fold afbeeldingen
   />
   ```

2. Voor belangrijke hero afbeeldingen, gebruik de `priority` prop
3. Gebruik WebP/AVIF formaten via de next.config.js configuratie
4. Houd bestanden klein en geoptimaliseerd voordat ze worden toegevoegd

### Custom Domein Configuratie

Om het custom domein (next-win.nl) te configureren:

1. Ga naar "Settings" > "Domains" in het Vercel Dashboard
2. Voeg het domein toe en volg de instructies voor DNS configuratie
3. Configureer SSL/TLS certificaten volgens de Vercel instructies
