# Sammanfattning av ändringar för Google Ads Tracking

## Nya filer skapade:

### 1. `/app/tack/page.tsx`

- Tack-sida som visas efter att användare skickat kontaktformuläret
- Spårar konvertering för Google Ads
- URL: `https://dataflowsolutions.se/tack`

### 2. `/app/mote-bokat/page.tsx`

- Bekräftelsesida som visas efter mötesbokningar
- Spårar konvertering för Google Ads
- URL: `https://dataflowsolutions.se/mote-bokat`

### 3. `/lib/bookingUtils.ts`

- Hjälpfunktion för att öppna Calendly med tracking
- Kan användas för att centralisera bokningslogiken

### 4. `/types/globals.d.ts`

- TypeScript-definitioner för gtag (Google Analytics/Ads)
- Fixar TypeScript-fel

### 5. `GOOGLE_ADS_SETUP.md`

- Detaljerad guide för att sätta upp Google Ads tracking
- Steg-för-steg instruktioner

## Uppdaterade filer:

### 1. `/app/components/ModernContact.tsx`

- Kontaktformuläret dirigerar nu till `/tack` efter framgångsrik inskickning
- Spårar konvertering automatiskt

### 2. `/lib/analytics.ts`

- Lagt till `trackConversion()` funktion för Google Ads
- Uppdaterad TypeScript-stöd för gtag

## Nästa steg för er:

### 1. Konfigurera Calendly (VIKTIGT!)

Logga in på Calendly och:

1. Gå till ert 30min-möte event
2. Klicka på **Settings** → **Confirmation Page**
3. Välj **"Redirect to an external site"**
4. Ange: `https://dataflowsolutions.se/mote-bokat`
5. Spara

### 2. Skapa Google Ads Konverteringsmål

I Google Ads:

1. Skapa två konverteringsmål:

   - **Kontaktformulär** → URL: `https://dataflowsolutions.se/tack`
   - **Möte bokat** → URL: `https://dataflowsolutions.se/mote-bokat`

2. Hämta Conversion ID från varje mål (ser ut som: `AW-123456789/AbC-dEfGhIjKlMnO`)

### 3. Uppdatera Conversion IDs i koden

Ersätt `AW-XXXXXXXXX/XXXXXXXXXXXX` med era riktiga Conversion IDs i:

- `/app/tack/page.tsx` (rad 27)
- `/app/mote-bokat/page.tsx` (rad 27)

### 4. Lägg till Google Ads tracking-script

Om inte redan gjort, lägg till Google Ads script i `app/layout.tsx` eller `GoogleAnalytics.tsx`:

```typescript
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: \`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-XXXXXXXXX');
    \`,
  }}
/>
```

### 5. Testa allt

1. Testa kontaktformuläret → ska komma till `/tack`
2. Klicka på "Boka gratis möte" → genomför bokning i Calendly → ska komma till `/mote-bokat`
3. Verifiera i Google Ads att konverteringar registreras (kan ta några timmar)

## Google Ads Kampanjinställningar

När ni sätter upp kampanjer, använd dessa URLs som konverteringssidor:

- **Kontaktformulär:** `https://dataflowsolutions.se/tack`
- **Mötesbokningar:** `https://dataflowsolutions.se/mote-bokat`

## Support

Se `GOOGLE_ADS_SETUP.md` för detaljerade instruktioner och felsökning.
