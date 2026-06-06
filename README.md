# PyroFiles CZ – Pyrotechnická databáze

## Úvod
**PyroFiles CZ** je moderní, plně responzivní a přístupná webová aplikace fungující jako komplexní pyrotechnická databáze. Projekt slouží jako studijní a referenční příručka chemikálií, receptur pyrotechnických kompozic (hvězdy, fontány, dýmovnice atd.) a odborných definic.

* **Živý web (GitHub Pages):** [https://filipczaban.github.io/2IT_Celorocka/](https://filipczaban.github.io/2IT_Celorocka/)
* **Téma:** Pyrotechnická databáze (chemikálie, kompozice, definice)
* **Autor:** Filip Czaban (ročníkový celoroční projekt, 2IT)

## Použité technologie
Projekt je postaven na principu čistého webu bez použití externích CSS/JS knihoven nebo frameworků (No-Framework Policy):
* **HTML5:** Sémantická struktura a prvky přístupnosti.
* **CSS3:** Vanilla CSS, CSS proměnné, Flexbox, Grid, CSS animace.
* **JavaScript:** Vanilla JS (ES6+), dynamické klientské vyhledávání a filtrování.
* **Vývojové prostředí (IDE):** Visual Studio Code (verze 1.90.2).

## Adresářová struktura
```text
2IT_Celorocka/
├── index.html            # Hlavní HTML struktura a sémantický skelet
├── style.css             # Globální styly, design systém a temný/světlý režim
├── db_data.js            # Statická databáze chemikálií a slovníkových definic
├── db_compositions.js    # Databáze receptur (kompozic) a sestavení vyhledávacího indexu
├── script.js             # Klientská vyhledávací logika, filtrování a UI interakce
├── sitemap.xml           # XML mapa stránek pro vyhledávače
├── robots.txt            # Pravidla pro indexování vyhledávacími roboty
└── README.md             # Technická dokumentace k projektu
```

## Technický rozbor (Oblasti optimalizace)

### 1. Výkon (Performance)
* **Teoretický popis:** Rychlost načítání a parsování skriptů byla optimalizována rozdělením monolitického JS kódu na samostatná statická data (`db_data.js`, `db_compositions.js`) a samotnou logiku (`script.js`). Skripty jsou načítány na konci značky `<body>`, aby neblokovaly renderování sémantické struktury webu.
* **Kód:**
  ```html
  <script src="db_data.js?v=1.2.6"></script>
  <script src="db_compositions.js?v=1.2.6"></script>
  <script src="script.js?v=1.2.6"></script>
  ```
* **Vysvětlení:** Rozdělením se zabrání zbytečnému blokování hlavního vlákna velkým monolitickým souborem. Cache-buster (`?v=1.2.6`) navíc zajišťuje okamžité načtení nejnovějších dat bez nutnosti ručního promazávání mezipaměti prohlížeče.

### 2. SEO (Search Engine Optimization)
* **Teoretický popis:** Web je plně optimalizován pro vyhledávače. Využívá správné sémantické tagy, popisky a strukturovaná data JSON-LD v hlavičce, která vyhledávačům umožňují pochopit obsah a zobrazit přímé vyhledávací pole ve výsledcích vyhledávání.
* **Kód:**
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PyroFiles CZ",
    "url": "https://filipczaban.github.io/2IT_Celorocka/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://filipczaban.github.io/2IT_Celorocka/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
  </script>
  ```
* **Vysvětlení:** Formát JSON-LD poskytuje strukturované informace pro Google vyhledávač, což zlepšuje indexaci a umožňuje pokročilé zobrazení odkazu (rich snippets).

### 3. Přístupnost (Accessibility / WCAG)
* **Teoretický popis:** Stránka splňuje zásady přístupnosti WCAG 2.1 AA. Využívá odkaz skip-link pro přeskočení navigace klávesnicí a standardní ARIA atributy pro screen-readery, které interpretují stavy interaktivních prvků.
* **Kód:**
  ```html
  <a href="#main-content" class="skip-link">Přejít na hlavní obsah</a>
  <button class="hamburger" id="hamburger" aria-label="Otevřít menu" aria-expanded="false" aria-controls="navLinks">
  ```
  *(V JavaScriptu se při interakci dynamicky přepíná hodnota `aria-expanded` na `true/false`)*
* **Vysvětlení:** `.skip-link` umožňuje uživatelům odkázaným na klávesnici okamžitý skok k obsahu, zatímco ARIA atributy na hamburger tlačítku informují nevidomé uživatele o otevření/zavření menu.

### 4. Sociální sítě (Social Meta Tags)
* **Teoretický popis:** Karta náhledu při sdílení odkazu (např. na Discordu, Facebooku či X/Twitteru) je optimalizována pomocí standardů Open Graph a Twitter Cards, což zvyšuje atraktivitu sdílení.
* **Kód:**
  ```html
  <meta property="og:type" content="website">
  <meta property="og:title" content="PyroFiles CZ – Pyrotechnická databáze">
  <meta property="og:description" content="Komplexní pyrotechnická databáze pro nadšence. Chemikálie, kompozice, definice.">
  <meta property="og:image" content="https://filipczaban.github.io/2IT_Celorocka/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  ```
* **Vysvětlení:** Vyhledávací roboti sociálních sítí načítají tato metadata k vytvoření bohatého grafického náhledu (rich preview) s velkým obrázkem namísto pouhého textového odkazu.

### 5. UI/UX (User Interface / User Experience)
* **Teoretický popis:** Vzhled sází na moderní tmavou barvu s oranžovými akcenty ohně (fire glow) a čistým světlým režimem. Stránka je plně responzivní (Mobile-First) díky CSS Grid s automatickým přizpůsobením šířky sloupců bez zbytečných media queries.
* **Kód:**
  ```css
  .comp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.25rem;
  }
  ```
* **Vysvětlení:** Použitím `auto-fill` a `minmax` se mřížka s kartami kompozic automaticky přeformátuje podle šířky obrazovky od mobilních zařízení po širokoúhlé monitory.

### 6. Bezpečnost a XSS (Security / Cross-Site Scripting)
* **Teoretický popis:** Všechny uživatelské vstupy (vyhledávání) jsou ošetřeny před vykreslením do DOMu tak, aby se zabránilo spuštění škodlivého kódu (XSS). Vyhledané výrazy jsou v textu bezpečně zvýrazněny tagem `<mark>`.
* **Kód:**
  ```javascript
  function highlight(text, q) {
    if (!q) return esc(text);
    const safe = esc(text);
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  }
  ```
* **Vysvětlení:** Funkce nejprve bezpečně escapuje HTML entity pomocí `esc(text)` a teprve poté vyhledá dotaz a vloží do textu vizuální značku `<mark>`, čímž je zaručena bezpečnost i UX.

## AI Deník

### Co AI do projektu přinesla
Spolupráce s AI pomohla zrychlit vývoj a zvýšit technickou kvalitu projektu:
1. **Návrh a rozdělení architektury:** AI pomohla navrhnout rozdělení monolitického JS na čisté datové moduly (`db_data.js`, `db_compositions.js`) a oddělit je od aplikační logiky.
2. **Bezpečnost (XSS):** Implementace robustního escapování uživatelských vyhledávacích dotazů.
3. **UI/UX prvky:** Pomoc při psaní částicového canvas efektu stoupajících jisker a plynulých CSS transition efektů.
4. **Lokalizace češtiny:** Diagnostika problémů s kódováním českých znaků a zajištění správného uložení v kódování UTF-8 bez BOM.

### Seznam zajímavých promptů
* *„Rozděl databázi z script.js na samostatné skripty db_data.js a db_compositions.js a propoj je v index.html, protože celý soubor je příliš velký a narážíme na limity přenosu.“*
* *„Napiš bezpečný vyhledávací algoritmus v JS, který prohledá objekty kompozic, chemikálií i definic, zvýrazní shodu tagem <mark> a zároveň zabrání XSS útokům při renderování innerHTML.“*
* *„Oprav diakritiku v minifikovaném souboru a ulož všechny soubory s UTF-8 kódováním bez BOM, abychom odstranili mojibake v českých textech.“*

## Instalace a spuštění

Aplikace běží plně v prohlížeči (klientská strana), není potřeba Node.js ani buildovací skripty.

### Lokální spuštění (Live Server)
1. Otevřete složku projektu ve vývojovém prostředí **VS Code**.
2. Nainstalujte si rozšíření **Live Server** (od Ritwick Dey).
3. Klikněte pravým tlačítkem na soubor `index.html` a zvolte **Open with Live Server** (nebo klikněte na *Go Live* v pravé dolní liště).
4. Web se spustí na adrese `http://127.0.0.1:5500/`.

### Spuštění přes Python server (Alternativa)
Pokud máte nainstalovaný Python, spusťte v kořenovém adresáři příkaz:
```bash
python -m http.server 8000
```
Web bude dostupný na adrese `http://localhost:8000/`.
