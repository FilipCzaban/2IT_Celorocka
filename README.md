# PyroData CZ – Pyrotechnická databáze

## Úvod
**PyroData CZ** je moderní, plně responzivní pyrotechnická databáze určená pro hobbyisty a nadšence. Tento projekt slouží jako komplexní reference pro chemikálie (pojiva, paliva, kovy, oxidátory), pyrotechnické kompozice (hvězdy, glittery, fontány, dýmovnice, jiskrnice atd.) a odborné definice v abecedním rejstříku A–Z. Veškeré informace na webu jsou určeny výhradně pro studijní a vzdělávací účely.

* **Živý web (GitHub Pages):** [https://filipczaban.github.io/2IT_Celorocka/](https://filipczaban.github.io/2IT_Celorocka/)
* **Autor:** Filip Czaban (školní projekt 2IT)

---

## Použité technologie
Projekt je postaven výhradně na čistých webových technologiích bez použití jakýchkoliv externích knihoven nebo frameworků (No-Framework Policy):
* **Struktura a sémantika:** HTML5
* **Stylování a vizuální design:** CSS3 (moderní layouty Flexbox a Grid, CSS proměnné, CSS animace)
* **Klientská logika a vyhledávání:** Vanilla JavaScript (ES6+)
* **Vývojové prostředí (IDE):** VS Code (verze 1.90.2)

---

## Adresářová struktura
Projekt je organizován bez zbytečných podsložek přímo v kořenovém adresáři repozitáře, což zajišťuje přímé nasazení na GitHub Pages:
```text
2IT_Celorocka/
├── index.html            # Hlavní sémantická šablona webu
├── style.css             # Kompletní CSS soubor (design systém, temný/světlý režim, responzivita)
├── db_data.js            # Databáze chemikálií a definic A–Z
├── db_compositions.js    # Databáze pyrotechnických kompozic a sestavení DB
├── script.js             # Hlavní klientská logika (vyhledávání, filtry, přepínání témat, částice)
├── sitemap.xml           # Mapa stránek pro vyhledávače
├── robots.txt            # Pokyny pro vyhledávací roboty
└── README.md             # Kompletní technická dokumentace projektu
```

---

## Technický rozbor

### 1. Výkon (Performance)
* **Teoretický popis:** Rychlost načítání byla optimalizována minimalizací HTTP požadavků a rozdělením JavaScriptové databáze do samostatných souborů. Tím se zabrání zbytečnému parsování velkého bloku dat při každém spuštění stránky a zrychlí se počáteční rendering (First Contentful Paint). Všechny interaktivní prvky a animace částic jsou inicializovány asynchronně na pozadí.
* **Výstřižek kódu:**
  ```html
  <!-- index.html -->
  <script src="db_data.js"></script>
  <script src="db_compositions.js"></script>
  <script src="script.js"></script>
  ```
* **Vysvětlení:** Rozdělením na `db_data.js` (statické texty a definice), `db_compositions.js` (kompozice) a `script.js` (logika) prohlížeč načítá a zpracovává data postupně. Soubory jsou vkládány na úplný konec těla `<body>`, což neblokuje vykreslování samotného HTML dokumentu.

### 2. SEO (Search Engine Optimization)
* **Teoretický popis:** Stránka plně splňuje moderní SEO standardy. Obsahuje unikátní a popisné tagy `<title>` a `<meta description>`, kanonické odkazy (`rel="canonical"`), soubory `sitemap.xml` a `robots.txt` pro vyhledávače a strukturovaná JSON-LD data standardu Schema.org, která umožňují zobrazit web ve výsledcích vyhledávání Google s interaktivním vyhledávacím polem.
* **Výstřižek kódu:**
  ```html
  <!-- index.html -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PyroData CZ",
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
* **Vysvětlení:** Tento JSON-LD skript definuje strukturovaná data typu `WebSite`. Google a další vyhledávače díky tomu chápou strukturu vyhledávání na webu a mohou nabídnout přímé vyhledávací pole přímo ve výsledcích vyhledávání.

### 3. Přístupnost (Accessibility)
* **Teoretický popis:** Stránka byla optimalizována podle standardů WCAG 2.1 AA. Zahrnuje „skip-link“ pro uživatele navigující pomocí klávesnice, plnou sémantickou strukturu HTML5 elementů (main, section, header, footer, article), ARIA atributy (`aria-expanded`, `aria-controls`, `aria-label`) u všech interaktivních prvků a plné ovládání rozhraní klávesou Tab.
* **Výstřižek kódu:**
  ```html
  <!-- index.html -->
  <a href="#main-content" class="skip-link">Přejít na hlavní obsah</a>
  
  <button class="hamburger" id="hamburger" aria-label="Otevřít menu" aria-expanded="false" aria-controls="navLinks">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </button>
  ```
* **Vysvětlení:** Třída `.skip-link` umožňuje uživatelům se čtečkami obrazovky přeskočit dlouhou navigaci stisknutím klávesy Tab hned po načtení stránky. Hamburger menu využívá atributy `aria-expanded` pro indikaci stavu otevření a `aria-controls` pro provázání s menu.

### 4. Sociální sítě (Social Meta Tags)
* **Teoretický popis:** Web je vybaven meta tagy pro Open Graph (OG) protokol používaný sítěmi Facebook, LinkedIn a Twitter/X Cards. Při sdílení odkazu na těchto sítích se automaticky vygeneruje bohatý náhled obsahující titulek projektu, popisek tématu a reprezentativní obrázek.
* **Výstřižek kódu:**
  ```html
  <!-- index.html -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://filipczaban.github.io/2IT_Celorocka/">
  <meta property="og:title" content="PyroData CZ – Pyrotechnická databáze">
  <meta property="og:description" content="Komplexní pyrotechnická databáze pro nadšence. Chemikálie, kompozice, definice a bezpečnostní informace.">
  <meta property="og:image" content="https://filipczaban.github.io/2IT_Celorocka/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  ```
* **Vysvětlení:** Tyto tagy specifikují metadata, která sociální sítě parsují při sdílení. Definování `og:image` a `twitter:card` jako `summary_large_image` zajistí zobrazení velkého náhledového obrázku.

### 5. UI/UX (User Interface / User Experience)
* **Teoretický popis:** Design kombinuje moderní tmavé téma s oranžovo-žlutými akcenty ohně (fire glow efekty) a čistým světlým režimem. Stránka je navržena plně metodou Mobile-First za použití CSS Grid a Flexboxu, což zaručuje bezchybnou responzivitu na mobilech, tabletech i desktopu. Pro plynulou interakci jsou využity micro-animations a dynamické efekty najetí myší (hover).
* **Výstřižek kódu:**
  ```css
  /* style.css */
  .comp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.25rem;
  }
  ```
* **Vysvětlení:** Využití CSS Grid s hodnotami `repeat(auto-fill, minmax(340px, 1fr))` automaticky přizpůsobuje počet sloupců karet kompozic šířce obrazovky. Netřeba složitých mediálních dotazů, mřížka je přirozeně fluidní.

### 6. AI Integrace
* **Teoretický popis:** Umělá inteligence (Antigravity) byla využita k detailnímu návrhu celého databázového modelu, optimalizaci vyhledávacího algoritmu (který vyhledává napříč všemi sekcemi a označuje shody tagem `<mark>`), opravě chyb v kódování češtiny a k rozdělení monolitického kódu do modulární struktury s cílem zlepšit výkonnost a čistotu projektu.
* **Výstřižek kódu:**
  ```javascript
  // script.js
  function highlight(text, q) {
    if (!q) return esc(text);
    const safe = esc(text);
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  }
  ```
* **Vysvětlení:** AI navrhla a implementovala bezpečný zvýrazňovač vyhledávaných slov, který před vyhledáváním escapuje HTML znaky (obrana proti XSS) a dynamicky označuje vyhledaný výraz pomocí regulárního výrazu.

---

## AI Deník (Seznam zajímavých promptů)
Během tvorby projektu a komunikace s AI byly použity tyto klíčové prompty:
1. **Redesign databáze:** *„Create a complete modern redesign of PyroData (pyrodata.com) - a pyrotechnics database website for hobbyists. Use only pure HTML5, CSS3 with Flexbox/Grid and Vanilla JavaScript ES6+. NO frameworks allowed.“* (AI na základě tohoto navrhla kompletní vizuál s temným režimem, částicovým efektem a strukturou databáze).
2. **Kódování češtiny:** *„Oprav diakritiku v minifikovaném souboru a ulož všechny soubory s UTF-8 kódováním bez BOM, abychom odstranili mojibake v českých textech.“*
3. **Refaktorizace:** *„Rozděl databázi z script.js na samostatné skripty db_data.js a db_compositions.js a propoj je v index.html, protože celý soubor je příliš velký.“*

---

## Instalace a spuštění

Pro lokální spuštění a testování projektu na vašem počítači nepotřebujete žádné buildovací nástroje. Stačí postupovat podle těchto kroků:

1. **Stažení / Klonování repozitáře:**
   ```bash
   git clone https://github.com/FilipCzaban/2IT_Celorocka.git
   ```
2. **Spuštění lokálního serveru:**
   * **Možnost A (Doporučená – VS Code):** Otevřete složku projektu ve VS Code a nainstalujte rozšíření **Live Server**. Poté klikněte pravým tlačítkem na `index.html` a vyberte možnost **Open with Live Server**. Stránka se automaticky otevře na adrese `http://127.0.0.1:5500/`.
   * **Možnost B (Python):** Pokud máte nainstalovaný Python, spusťte v adresáři projektu příkaz:
     ```bash
     python -m http.server 8000
     ```
     Stránka bude dostupná na adrese `http://localhost:8000/`.
