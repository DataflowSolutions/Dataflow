# Google Ads Konverteringsspårning - Setup Guide

## Översikt

Vi har nu två konverteringssidor för att spåra Google Ads-konverteringar:

1. **`/tack`** - För kontaktformulär
2. **`/mote-bokat`** - För mötesbokningar

## Setup-instruktioner

### 1. Google Ads Conversion Tracking Setup

#### Steg 1: Skapa Konverteringsmål i Google Ads

1. Logga in på Google Ads
2. Gå till **Verktyg och inställningar** → **Mätning** → **Konverteringar**
3. Klicka på **+ Ny konverteringsåtgärd**
4. Välj **Webbplats**

#### Steg 2: Konfigurera Konverteringsmål

**För Kontaktformulär:**

- **Kategori:** Kontakt (eller Lead)
- **Konverteringsnamn:** "Kontaktformulär inskickat"
- **Värde:** Använd samma värde för varje konvertering → 1 SEK (eller anpassat)
- **Räkningstyp:** En (räkna endast en gång per användare)
- **Konverteringsfönster för klick:** 30 dagar
- **URL för konvertering:** `https://dataflowsolutions.se/tack`

**För Mötesbokningar:**

- **Kategori:** Bokningar
- **Konverteringsnamn:** "Möte bokat"
- **Värde:** Använd samma värde för varje konvertering → 5 SEK (högre värde = viktigare)
- **Räkningstyp:** En (räkna endast en gång per användare)
- **Konverteringsfönster för klick:** 30 dagar
- **URL för konvertering:** `https://dataflowsolutions.se/mote-bokat`

#### Steg 3: Hämta Conversion ID och Label

Efter att ha skapat konverteringsmålen får du ett **Conversion ID** och **Label** som ser ut så här:

```
send_to: 'AW-123456789/AbC-dEfGhIjKlMnO'
```

### 2. Uppdatera Koden

#### Uppdatera `/app/tack/page.tsx`:

```typescript
window.gtag("event", "conversion", {
  send_to: "AW-123456789/AbC-dEfGhIjKlMnO", // Ersätt med ert CONTACT FORM Conversion ID
  value: 1.0,
  currency: "SEK",
});
```

#### Uppdatera `/app/mote-bokat/page.tsx`:

```typescript
window.gtag("event", "conversion", {
  send_to: "AW-987654321/XyZ-aBcDeFgHiJk", // Ersätt med ert MEETING Conversion ID
  value: 5.0,
  currency: "SEK",
});
```

### 3. Konfigurera Calendly Redirect

För att Calendly ska dirigera användare till `/mote-bokat` efter bokning:

1. Logga in på Calendly
2. Gå till ditt Event Type (30min-möte)
3. Klicka på **Settings** → **Confirmation Page**
4. Välj **Redirect to an external site**
5. Ange URL: `https://dataflowsolutions.se/mote-bokat`
6. Spara

### 4. Verifiera Google Ads Tag (gtag.js)

Kontrollera att Google Ads tracking-koden är installerad. Den ska finnas i er `GoogleAnalytics`-komponent eller `layout.tsx`:

```typescript
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-XXXXXXXXX'); // Ersätt med ert Google Ads ID
    `,
  }}
/>
```

### 5. Testa Konverteringarna

1. **Testa Kontaktformulär:**

   - Fyll i kontaktformuläret på er webbplats
   - Skicka formuläret
   - Verifiera att du kommer till `/tack`
   - Kolla i Google Ads → Konverteringar (det kan ta några timmar innan det dyker upp)

2. **Testa Mötesbokningar:**
   - Klicka på "Boka gratis möte"
   - Gå igenom Calendly-bokningsprocessen
   - Efter bokning ska du automatiskt dirigeras till `/mote-bokat`
   - Verifiera i Google Ads → Konverteringar

### 6. Debug Tips

Om konverteringar inte spåras:

1. **Öppna Developer Tools (F12)** i webbläsaren
2. Gå till **Console**-fliken
3. Leta efter `gtag`-anrop eller fel

4. Använd **Google Tag Assistant** Chrome Extension:

   - Installera: https://chrome.google.com/webstore
   - Besök er webbplats
   - Verifiera att Google Ads-taggen laddas korrekt

5. Kontrollera **Network**-fliken i Developer Tools:
   - Leta efter anrop till `google-analytics.com/collect`
   - Verifiera att konverteringsdata skickas

## Google Ads Kampanjinställningar

När du anger konverteringssidor i Google Ads:

- **Kontaktformulär konverteringssida:** `https://dataflowsolutions.se/tack`
- **Mötesbokningar konverteringssida:** `https://dataflowsolutions.se/mote-bokat`

## Viktiga URL:er

- Tack-sida (kontaktformulär): https://dataflowsolutions.se/tack
- Möte bokat-sida: https://dataflowsolutions.se/mote-bokat
- Hemsida: https://dataflowsolutions.se

## Support

Om ni behöver hjälp med att sätta upp detta, kontakta:

- Albin (Tech): albin@dataflowsolutions.se
- Oliver (Tech): oliver@dataflowsolutions.se
