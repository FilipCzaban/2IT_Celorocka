# PyroData CZ – Pyrotechnická databáze

## Úvod
**PyroData CZ** je moderní, plně responzivní a přístupná pyrotechnická databáze určená pro hobbyisty, chemické nadšence a studenty. Tento projekt slouží jako komplexní referenční příručka pro:
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
* **Vývojové prostředí (IDE):** Antigravity.

---

## Adresářová struktura
Projekt má čisté rozložení souborů přímo v kořenovém adresáři repozitáře, což usnadňuje přímé nasazení na GitHub Pages bez nutnosti jakýchkoliv build skriptů:

```text
2IT_Celorocka/
├── index.html            # Hlavní sémantická šablona a struktura webu
├── style.css             # Globální CSS (design systém, proměnné, režimy a animace)
├── db_data.js            # Databáze chemikálií a slovníkových definic A-Z
├── db_compositions.js    # Databáze receptur (kompozic) a sestavení vyhledávacího indexu
├── script.js             # Hlavní JS logika (vyhledávání, filtry, přepínání témat, jiskry)
├── sitemap.xml           # Mapa stránek pro vyhledávače
├── robots.txt            # Pokyny pro vyhledávací roboty
└── README.md             # Kompletní technická dokumentace (tento soubor)
```

---

## Technický rozbor

V této části detailně rozebíráme 6 klíčových oblastí optimalizace, které byly v projektu implementovány.

### 1. Výkon (Performance)
* **Teoretický popis:** Rychlost načítání a zpracování (Time to Interactive - TTI, Total Blocking Time - TBT) byla optimalizována rozdělením monolitického JavaScriptového kódu do samostatných souborů: statická data (`db_data.js`, `db_compositions.js`) a samotná logika (`script.js`). Tím se zabrání zbytečnému parsování velkého bloku dat v rámci jednoho vlákna a prohlížeč může skripty stahovat asynchronně. Skripty jsou umístěny na konci značky `<body>`, aby neblokovaly renderování samotného HTML stromu.
* **Výstřižek kódu:**
  ```html
  <!-- index.html -->
  <script src="db_data.js"></script>
  <script src="db_compositions.js"></script>
  <script src="script.js"></script>
  ```
* **Vysvětlení:** Rozdělením kódu na datové moduly a aplikační logiku se kód stal modulárním a snadno spravovatelným. Prohlížeč načítá a zpracovává data postupně, což výrazně zrychluje první vykreslení obsahu (First Contentful Paint - FCP).

### 2. SEO (Search Engine Optimization)
* **Teoretický popis:** Stránka plně vyhovuje vyhledávacím algoritmům. Obsahuje unikátní a výstižné tagy `<title>`, `<meta name="description">` a kanonické odkazy (`rel="canonical"`). Pro roboty jsou připraveny soubory `robots.txt` a `sitemap.xml`. Dále je implementován strukturovaný datový formát JSON-LD podle standardu Schema.org pro typ `WebSite`, což vyhledávačům (např. Google) umožňuje lépe porozumět obsahu a zobrazit přímé vyhledávací pole (Sitelinks Searchbox) přímo ve výsledcích vyhledávání.
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
* **Vysvětlení:** Tento JSON-LD skript poskytuje vyhledávačům strukturovaná metadata o webu. Google díky tomu ví, že web disponuje vyhledávací funkcí, a může ji nabídnout uživatelům přímo ve výsledcích vyhledávání (Search Snippet).

### 3. Přístupnost (Accessibility)
* **Teoretický popis:** Stránka splňuje standardy přístupnosti WCAG 2.1 na úrovni AA. Obsahuje „skip-link“ pro rychlé přeskočení navigace klávesnicí, plně sémantické prvky HTML5, vizuální indikátory zaměření (focus) a ARIA atributy (`aria-expanded`, `aria-controls`, `aria-label`) na všech interaktivních prvcích (např. hamburger menu a vyhledávání).
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
* **Vysvětlení:** Odkaz `.skip-link` je standardně skrytý mimo obrazovku a zobrazí se pouze při navigaci tabulátorem. Hamburger menu je napojeno na stavové atributy `aria-expanded` (které se v JS mění na `true`/`false` při kliknutí) a `aria-controls` odkazující na ID seznamu odkazů, což umožňuje asistenčním čtečkám hlasově interpretovat stav menu.

### 4. Sociální sítě (Social Meta Tags)
* **Teoretický popis:** Pro zajištění atraktivního zobrazení při sdílení na sociálních sítích (Facebook, X/Twitter, LinkedIn, Discord atd.) jsou implementovány meta tagy standardu Open Graph a Twitter Cards. Při odeslání odkazu se automaticky vygeneruje bohatý náhled (rich card) s velkým náhledovým obrázkem, nadpisem a popisem.
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
* **Vysvětlení:** Tyto tagy jsou parsovány crawlery sociálních sítí. Využití `summary_large_image` zajistí zobrazení velkého a vizuálně přitažlivého obrázku namísto malé čtvercové ikony, což zvyšuje míru prokliku (CTR).

### 5. UI/UX (User Interface / User Experience)
* **Teoretický popis:** Stránka kombinuje moderní tmavé téma s oranžovo-žlutými akcenty ohně (fire glow) a čistým světlým režimem. Rozvržení je plně responzivní za použití CSS Grid a Flexboxu, postavené na metodice Mobile-First. K interakci přispívají plynulé přechody (transitions), micro-animations na tlačítkách a kartách a dynamický částicový efekt jisker v záhlaví (Canvas).
* **Výstřižek kódu:**
  ```css
  /* style.css */
  .comp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.25rem;
  }
  ```
* **Vysvětlení:** Použití CSS Grid s funkcí `repeat(auto-fill, minmax(340px, 1fr))` zaručuje, že se sloupce karet kompozic automaticky přizpůsobí šířce okna prohlížeče. Na mobilních telefonech se zobrazí jeden sloupec, na širokých monitorech se plynule poskládá více sloupců bez nutnosti psát složitá `@media` pravidla.

### 6. AI Integrace (AI Integration)
* **Teoretický popis:** Umělá inteligence byla využita pro optimalizaci vyhledávacího algoritmu, který prohledává všechny sekce (chemikálie, kompozice, definice) najednou a označuje vyhledaný řetězec pomocí značky `<mark>`. Algoritmus navíc bezpečně ošetřuje vstup proti útokům typu XSS (Cross-Site Scripting) tím, že před vyhledáváním a renderingem nahrazuje speciální znaky za HTML entity.
* **Výstřižek kódu:**
  ```javascript
  // script.js
  function highlight(text, q) {
    if (!q) return esc(text);
    const safe = esc(text);
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  }
  ```
* **Vysvětlení:** Funkce `highlight` nejprve bezpečně escapuje text pomocí pomocné funkce `esc(text)`. Poté vyhledávaný dotaz zbaví speciálních regexových znaků a provede nahrazení za HTML značku `<mark>` pro vizuální zvýraznění shody na stránce.

---

## AI Deník

### Co AI do projektu přinesla
Spolupráce s AI asistencí umožnila vytvořit vysoce profesionální a optimalizovaný web za zlomek času:
1. **Návrh robustní datové struktury:** AI pomohla zkonstruovat čistá a přehledná JS pole a objekty pro databázi chemikálií a receptů, což usnadňuje budoucí rozšiřování obsahu.
2. **Optimalizace a refaktorizace:** Původní monolitický kód byl rozdělen do modulárních JS souborů, což vyřešilo limity výkonu a zrychlilo načítání webu.
3. **Zvýšení bezpečnosti:** Implementace XSS ochrany při dynamickém generování vyhledávacích výsledků.
4. **Vylepšené UI/UX:** Návrh vizuálních efektů (canvas částice jisker, CSS fire glow stíny, hladké přechody barevných témat).
5. **Vyřešení kódování češtiny:** AI pomohla diagnostikovat a vyřešit problémy s chybným zobrazováním českých znaků (mojibake) přepsáním souborů s UTF-8 kódováním bez BOM na platformě Windows.

### Seznam zajímavých promptů
Během vývoje byly použity tyto klíčové a zajímavé dotazy pro AI:
* **Prvotní zadání:** *„Create a complete modern redesign of PyroData (pyrodata.com) - a pyrotechnics database website for hobbyists. Use only pure HTML5, CSS3 with Flexbox/Grid and Vanilla JavaScript ES6+. NO frameworks allowed.“*
* **Oprava kódování češtiny:** *„Oprav diakritiku v minifikovaném souboru a ulož všechny soubory s UTF-8 kódováním bez BOM, abychom odstranili mojibake v českých textech.“*
* **Refaktorizace kódu:** *„Rozděl databázi z script.js na samostatné skripty db_data.js a db_compositions.js a propoj je v index.html, protože celý soubor je příliš velký a narážíme na limity přenosu.“*
* **Optimalizace vyhledávače:** *„Napiš bezpečný vyhledávací algoritmus v JS, který prohledá objekty kompozic, chemikálií i definic, zvýrazní shodu tagem <mark> a zároveň zabrání XSS útokům při renderování innerHTML.“*

---

## Instalace a spuštění

Pro lokální zprovoznění a testování projektu na vašem počítači nepotřebujete instalovat žádné kompilátory, Node.js ani buildovací nástroje. Projekt běží přímo v prohlížeči.

### Krok 1: Klonování repozitáře
Otevřete terminál a stáhněte si projekt do svého počítače:
```bash
git clone https://github.com/FilipCzaban/2IT_Celorocka.git
```

### Krok 2: Spuštění lokálního webového serveru
Z důvodu bezpečnostních politik prohlížečů (CORS) a načítání modulů doporučujeme spouštět web přes lokální server, nikoliv přímým poklepáním na soubor v průzkumníku:

* **Možnost A (Doporučená – VS Code a Live Server):**
  1. Otevřete složku projektu ve Visual Studio Code.
  2. Nainstalujte si rozšíření **Live Server** (od Ritwick Dey).
  3. Klikněte pravým tlačítkem myši na soubor `index.html` a zvolte **Open with Live Server** (nebo klikněte na tlačítko *Go Live* v pravém dolním rohu VS Code).
  4. Web se automaticky otevře ve vašem výchozím prohlížeči na adrese `http://127.0.0.1:5500/`.

* **Možnost B (Spuštění přes Python):**
  Pokud máte na počítači nainstalovaný Python, otevřete terminál v adresáři projektu a spusťte:
  ```bash
  python -m http.server 8000
  ```
  Následně otevřete prohlížeč a přejděte na adresu `http://localhost:8000/`.

---

## Živý web na GitHubu (GitHub Pages)
Nemusíte nic stahovat a instalovat, pokud se chcete rovnou podívat na funkční verzi. Web je nepřetržitě nasazen a spuštěn jako statická stránka přes GitHub Pages na této adrese:

**[👉 Spustit živý web PyroData CZ 👈](https://filipczaban.github.io/2IT_Celorocka/)**
```text
https://filipczaban.github.io/2IT_Celorocka/
```
