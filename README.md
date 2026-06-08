# PyroFiles CZ – Pyrotechnická databáze

## Úvod
**PyroFiles CZ** je moderní, plně responzivní a přístupná pyrotechnická databáze určená pro hobbyisty, chemické nadšence a studenty. Tento projekt slouží jako komplexní referenční příručka pro:
* **Chemikálie:** Přehledně roztříděné podle funkcí (pojiva, paliva, kovy, oxidovadla).
* **Kompozice:** Receptury na výrobu pyrotechnických efektů (hvězdy, glittery, fontány, dýmovnice, jiskrnice atd.) včetně tabulky složení a bezpečného postupu.
* **Definice:** Odborný abecední rejstřík A–Z vysvětlující klíčové pojmy v pyrotechnice.

Stránka je navržena s důrazem na moderní tmavý design (s motivem ohně a jisker), plnou přístupnost a okamžité vyhledávání. Veškeré informace na tomto webu mají výhradně vzdělávací charakter.

* **Živý web (GitHub Pages):** [https://filipczaban.github.io/2IT_Celorocka/](https://filipczaban.github.io/2IT_Celorocka/)
* **Autor projektu:** Filip Czaban (ročníkový projekt, 2IT)

---

## Použité technologie
Projekt důsledně dodržuje zásadu **nepoužívat žádné externí knihovny ani frameworky** (No-Framework Policy). Vše je napsáno na zelené louce:
* **HTML5:** Sémantický kód pro strukturu stránky a přístupnost.
* **CSS3 (Vanilla CSS):** Pokročilý design systém s CSS proměnnými, Flexbox a Grid rozložením, klíčovými animacemi a podporou temného/světlého režimu.
* **JavaScript (Vanilla JS - ES6+):** Rychlá klientská logika, vyhledávací index a dynamické filtrování v reálném čase bez nutnosti načítat data ze serveru.
* **Vývojové prostředí (IDE):** Visual Studio Code (verze 1.90.2 nebo novější).

---

## Adresářová struktura
Projekt má čisté rozložení souborů přímo v kořenovém adresáři repozitáře, což usnadňuje přímé nasazení na GitHub Pages bez nutnosti jakýchkoliv build skriptů:

```text
2IT_Celorocka/
├── index.html            # Hlavní sémantická šablona a struktura webu
├── style.css             # Globální CSS (design systém, proměnné, režimy a animace)
├── db_data.js            # Statická databáze chemikálií a slovníkových definic A-Z
├── db_compositions.js    # Databáze receptur (kompozic) a sestavení vyhledávacího indexu
├── script.js             # Hlavní JS logika (vyhledávání, filtry, přepínání témat, jiskry)
├── sitemap.xml           # Mapa stránek pro vyhledávače
├── robots.txt            # Pokyny pro vyhledávací roboty
└── README.md             # Kompletní technická dokumentace (tento soubor)
```

---

## Technický rozbor (Optimalizace)

### 1. Výkon (Performance)
* **Teoretický popis:** Rozdělení JS na data a logiku. Načítání skriptů na konci `<body>` pro neblokující renderování.
* **Výstřižek kódu:**
  ```html
  <script src="db_data.js?v=1.2.8"></script>
  <script src="db_compositions.js?v=1.2.8"></script>
  <script src="script.js?v=1.2.8"></script>
  ```
* **Vysvětlení:** Zamezuje zpoždění načtení stránky. Parametr `?v=1.2.8` invaliduje mezipaměť (cache-buster).

### 2. SEO (Search Engine Optimization)
* **Teoretický popis:** Optimalizace pro vyhledávače pomocí sémantických tagů a strukturovaných dat JSON-LD.
* **Výstřižek kódu:**
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
* **Vysvětlení:** Poskytuje vyhledávačům strukturovaná metadata o webu.

### 3. Přístupnost (Accessibility)
* **Teoretický popis:** Přístupnost pro klávesnici a čtečky (skip-link, sémantické tagy a ARIA atributy).
* **Výstřižek kódu:**
  ```html
  <a href="#main-content" class="skip-link">Přejít na hlavní obsah</a>
  <button class="hamburger" aria-expanded="false" aria-controls="navLinks">
  ```
* **Vysvětlení:** Skip-link umožňuje přeskočit menu, ARIA atributy informují čtečky o stavu prvků.

### 4. Sociální sítě (Social Meta Tags)
* **Teoretický popis:** Implementace Open Graph a Twitter Cards pro vizuální náhledy při sdílení.
* **Výstřižek kódu:**
  ```html
  <meta property="og:title" content="PyroFiles CZ – Pyrotechnická databáze">
  <meta property="og:image" content="https://filipczaban.github.io/2IT_Celorocka/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  ```
* **Vysvětlení:** Zajišťuje zobrazení velkého náhledového obrázku a nadpisu při sdílení odkazu.

### 5. UI/UX (User Interface / User Experience)
* **Teoretický popis:** Responzivní layout pomocí CSS Grid s automatickým přizpůsobením šířky sloupců bez zbytečných media queries.
* **Výstřižek kódu:**
  ```css
  .comp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }
  ```
* **Vysvětlení:** Sloupce karet se dynamicky přeformátují a přizpůsobí šířce okna zařízení.

### 6. AI Integrace (AI Integration / Security)
* **Teoretický popis:** Klientské vyhledávání se sanitací uživatelských vstupů proti XSS útokům.
* **Výstřižek kódu:**
  ```javascript
  function highlight(text, q) {
    if (!q) return esc(text);
    const safe = esc(text);
    return safe.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
  }
  ```
* **Vysvětlení:** Vstup je nejprve escapován funkcí `esc()` a teprve poté je bezpečně vložena značka `<mark>` pro zvýraznění shody.

---

## AI Deník
* **Co AI přinesla:** Modulární rozvržení databáze, XSS sanitace dotazů, canvas efekt jisker a oprava kódování češtiny (UTF-8).
* **Zajímavé prompty:**
  * *„Rozděl databázi z script.js na db_data.js a db_compositions.js...“*
  * *„Napiš bezpečný vyhledávací algoritmus v JS ošetřený proti XSS...“*
  * *„Oprav diakritiku a ulož soubory v UTF-8 bez BOM...“*

---

## Instalace a spuštění
1. Otevřete projekt ve **VS Code**.
2. Klikněte pravým tlačítkem na `index.html` -> **Open with Live Server**.
3. Případně lokálně přes Python: `python -m http.server 8000`.

* **Živý web (GitHub Pages):** [https://filipczaban.github.io/2IT_Celorocka/](https://filipczaban.github.io/2IT_Celorocka/)
