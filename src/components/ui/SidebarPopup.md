# Sidebar Popup System

A modular, conversion-optimized sidebar popup system for collecting leads and appointments.

## Features

- 🎨 **Conversion Optimized**: Designed with UX best practices for maximum conversion rates
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Performance**: Smooth animations with Framer Motion
- 🔧 **Modular**: Easy to use across the entire application
- 📊 **Analytics Ready**: Built-in tracking for form submissions
- ♿ **Accessible**: Proper focus management and keyboard navigation

## Usage

### Method 1: Using PopupTrigger Component (Recommended)

The easiest way to trigger the popup:

```tsx
import PopupTrigger from '@/components/ui/PopupTrigger';

<PopupTrigger 
  popupTitle="Gratis SEO audit"
  popupSubtitle="Ontdek hoe je hoger kunt ranken in Google"
  formType="audit"
  source="seo-page"
  className="bg-green-500 hover:bg-green-600"
  size="lg"
>
  Gratis SEO audit aanvragen
</PopupTrigger>
```

### Method 2: Using Context Hook

For more control, use the context directly:

```tsx
import { useSidebarPopupContext } from '@/components/providers/SidebarPopupProvider';

function MyComponent() {
  const { openPopup } = useSidebarPopupContext();

  const handleClick = () => {
    openPopup({
      title: "Gratis Google Ads audit",
      subtitle: "Verbeter je advertenties en bespaar geld",
      formType: "audit",
      source: "google-ads-page"
    });
  };

  return (
    <button onClick={handleClick}>
      Aanvragen
    </button>
  );
}
```

## Configuration Options

### Form Types
- `adviesgesprek` - General consultation (default)
- `contact` - General contact form
- `demo` - Product demo request
- `audit` - Free audit request

### Props

#### PopupTrigger Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `popupTitle` | `string` | "Gratis adviesgesprek" | Popup header title |
| `popupSubtitle` | `string` | "Ontdek hoe wij..." | Popup subtitle |
| `formType` | `string` | "adviesgesprek" | Type of form |
| `source` | `string` | "popup-trigger" | Analytics tracking source |
| `...buttonProps` | `ButtonProps` | - | All Button component props |

#### Context openPopup Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | `string` | "Gratis adviesgesprek" | Popup title |
| `subtitle` | `string` | "Ontdek hoe wij..." | Popup subtitle |
| `formType` | `string` | "adviesgesprek" | Form type |
| `source` | `string` | - | Source for analytics |

## Form Fields

The popup includes the following fields:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Company** (optional)
- **Budget** (dropdown)
- **Timeline** (dropdown)
- **Message** (textarea)

## Styling

The popup is styled with Tailwind CSS and follows the existing design system. Key features:

- **Width**: 480px on desktop, full width on mobile
- **Height**: Full viewport height with scrollable content
- **Animation**: Smooth slide-in from right
- **Colors**: Uses primary color scheme
- **Typography**: Consistent with site typography

## Analytics Integration

The popup automatically tracks conversions when integrated with Google Analytics:

```javascript
// Automatic tracking on form submission
gtag('event', 'form_submit', {
  event_category: 'engagement',
  event_label: `${formType}_${source}`,
  form_type: formType,
  source: source
});
```

## Conversion Optimization Features

1. **Trust Indicators**: "100% vrijblijvend" message with checkmark
2. **Clear Value Prop**: Prominent subtitle explaining benefits  
3. **Progressive Disclosure**: Essential fields first, optional fields grouped
4. **Visual Hierarchy**: Clear section headers with icons
5. **Smart Defaults**: Pre-filled form type and source tracking
6. **Loading States**: Spinner during form submission
7. **Success State**: Confirmation message with next steps
8. **Mobile Optimized**: Touch-friendly form elements

## Best Practices

### Button Text
- Use action-oriented text: "Gratis audit aanvragen" vs "Klik hier"
- Include value proposition: "Gratis adviesgesprek" vs "Contact"
- Keep it concise but descriptive

### Popup Titles
- Be specific about the offer: "Gratis SEO audit" vs "Contact ons"
- Include the benefit: "Verhoog je online omzet"
- Match the button text for consistency

### Source Tracking
- Use descriptive sources: "homepage-hero", "pricing-page-cta"
- Include page context: "seo-service-page", "case-study-bottom"
- Keep naming consistent across the site

## Examples

### Service Page CTA
```tsx
<PopupTrigger 
  popupTitle="Gratis website audit"
  popupSubtitle="Ontdek hoe je website beter kan presteren"
  formType="audit"
  source="website-service-page"
  className="bg-primary-600 hover:bg-primary-700"
  size="lg"
>
  Gratis website audit
</PopupTrigger>
```

### Case Study CTA
```tsx
<PopupTrigger 
  popupTitle="Vergelijkbaar resultaat gewenst?"
  popupSubtitle="Laten we bespreken hoe we jouw bedrijf kunnen helpen groeien"
  formType="adviesgesprek"
  source="case-study-oudhollandsspel"
  variant="outline"
>
  Start een gesprek
</PopupTrigger>
```

### Pricing Page CTA
```tsx
<PopupTrigger 
  popupTitle="Welk pakket past bij jou?"
  popupSubtitle="Bespreek je wensen in een gratis adviesgesprek"
  formType="adviesgesprek"
  source="pricing-page"
  className="w-full bg-green-500 hover:bg-green-600"
>
  Persoonlijk advies
</PopupTrigger>
```
