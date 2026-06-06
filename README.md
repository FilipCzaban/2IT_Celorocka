# PyroFiles CZ – Pyrotechnická databáze

## Úvod
* **Téma:** Studijní reference pyrotechnických chemikálií, kompozic (receptů) a definic.
* **Živý web (GitHub Pages):** [https://filipczaban.github.io/2IT_Celorocka/](https://filipczaban.github.io/2IT_Celorocka/)
* **Autor:** Filip Czaban (ročníkový projekt, 2IT)

## Použité technologie
* **HTML5 / CSS3 / ES6+ JS** (čistý kód bez externích knihoven/frameworků).
* **IDE:** VS Code (v1.90.2).

## Adresářová struktura
* `index.html` – Hlavní šablona a struktura webu.
* `style.css` – Globální design a temný/světlý režim.
* `db_data.js` / `db_compositions.js` – Statická data a rozdělení DB.
* `script.js` – Klientský vyhledávač a UI logika.
* `sitemap.xml` / `robots.txt` – Konfigurační soubory pro vyhledávače.

## Technický rozbor (Optimalizace)

### 1. Výkon (Performance)
* **Popis:** Rozdělení JS na data a logiku. Načítání na konci `<body>` pro neblokující renderování.
* **Kód:**
  ```html
  <script src="db_compositions.js?v=1.2.6"></script>
  <script src="script.js?v=1.2.6"></script>
  ```
* **Vysvětlení:** Zamezuje zpoždění načtení stránky. `?v=1.2.6` invaliduje mezipaměť (cache-buster).

### 2. SEO
* **Popis:** Využití strukturovaných dat JSON-LD pro vyhledávače.
* **Kód:**
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PyroFiles CZ",
    "url": "https://filipczaban.github.io/2IT_Celorocka/"
  }
  </script>
  ```
* **Vysvětlení:** Google díky tomu lépe porozumí struktuře a vyhledávání na webu.

### 3. Přístupnost (WCAG)
* **Popis:** Podpora navigace klávesnicí a čteček pomocí skip-linku a ARIA.
* **Kód:**
  ```html
  <a href="#main-content" class="skip-link">Přejít na hlavní obsah</a>
  <button class="hamburger" aria-expanded="false" aria-controls="navLinks">
  ```
* **Vysvětlení:** Přeskočení navigace klávesnicí a hlasová interpretace stavu menu čtečkou.

### 4. Sociální sítě (Meta Tagy)
* **Popis:** Implementace Open Graph a Twitter Cards náhledů.
* **Kód:**
  ```html
  <meta property="og:title" content="PyroFiles CZ – Pyrotechnická databáze">
  <meta property="og:image" content="https://filipczaban.github.io/2IT_Celorocka/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  ```
* **Vysvětlení:** Zajišťuje velký grafický náhled odkazu při sdílení.

### 5. UI/UX
* **Popis:** Responzivní Mobile-First design pomocí CSS Grid.
* **Kód:**
  ```css
  .comp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }
  ```
* **Vysvětlení:** Automatické uspořádání sloupců karet podle šířky obrazovky.

### 6. Bezpečnost (XSS)
* **Popis:** Sanitace uživatelských vstupů a zvýraznění výsledků pomocí `<mark>`.
* **Kód:**
  ```javascript
  function highlight(text, q) {
    if (!q) return esc(text);
    const safe = esc(text);
    return safe.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
  }
  ```
* **Vysvětlení:** Escapování vstupu (`esc()`) zabraňuje spuštění škodlivého JS kódu.

## AI Deník
* **Přínos:** Modulární rozdělení JS, XSS sanitace, canvas jiskry a oprava kódování češtiny (UTF-8).
* **Prompty:**
  * *„Rozděl databázi z script.js na db_data.js a db_compositions.js...“*
  * *„Napiš bezpečný vyhledávací algoritmus v JS ošetřený proti XSS...“*
  * *„Oprav diakritiku a ulož soubory v UTF-8 bez BOM...“*

## Instalace a spuštění
1. Otevřete projekt ve **VS Code**.
2. Spusťte přes rozšíření **Live Server** (pravým na `index.html` -> *Open with Live Server*).
3. Alternativně přes Python: `python -m http.server 8000`.
