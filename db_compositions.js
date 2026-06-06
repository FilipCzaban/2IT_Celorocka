/**
 * PyroData CZ — db_compositions.js
 * Database of compositions and DB assembler
 */
const DB_COMPOSITIONS = [
  // STARS (Spirit of '76: Peony / Strobe / Willow / Brocade Effects)
    { id:1,  name:'Červená hvězda — Strontium',   cat:'stars',     catL:'Hvězdy',          hazard:'med', youtubeId:'PSScd1m03pc',
      desc:'Klasická karmínová hvězda. Strontium emituje spektrální čáry v červené oblasti (~640 nm). Parlon stabilizuje spektrální emisi.',
      ing:[ {n:'Dusičnan strontnatý',p:55}, {n:'Magnalium 200 mesh',p:15}, {n:'Parlon',p:10}, {n:'Chloristan draselný',p:15}, {n:'Dextrin',p:5} ],
      notes:'Přidávejte Magnalium jako poslední. Vyhněte se kontaminaci sírou — reaguje s perchloridem.' },
    { id:2,  name:'Zelená hvězda — Barium',       cat:'stars',     catL:'Hvězdy',          hazard:'high', youtubeId:'U645hnBORQE',
      desc:'Intenzivně zelená hvězda. Barium emituje charakteristické zelené spektrální čáry (~505 nm). Toxická — práce v respirátoru.',
      ing:[ {n:'Dusičnan barnatý',p:61}, {n:'Magnalium 200 mesh',p:15}, {n:'Red Gum',p:10}, {n:'Chloristan draselný',p:9}, {n:'Dextrin',p:5} ],
      notes:'⚠️ Dusičnan barnatý je toxický. Pracujte v respirátoru v dobře větraném prostoru.' },
    { id:3,  name:'Modrá hvězda — Měď/PVC',       cat:'stars',     catL:'Hvězdy',          hazard:'high', youtubeId:'saKdqpjel1Y',
      desc:'Nejtěžší barva v pyrotechnice. Měděné ionty v chlorovém prostředí emitují modrou (~430–460 nm). Velmi citlivá na přesnost poměrů.',
      ing:[ {n:'Chloristan draselný',p:60}, {n:'Hexachlorobenzén',p:8}, {n:'Síran měďnatý',p:20}, {n:'Parlon',p:7}, {n:'Red Gum',p:5} ],
      notes:'⚠️ Hexachlorobenzén je toxický. Modrá závisí na precizním poměru složek — odchylka >2% degraduje barvu.' },
    { id:4,  name:'Bílá hvězda — Magnalium',      cat:'stars',     catL:'Hvězdy',          hazard:'med', youtubeId:'GQua_vgWhWw',
      desc:'Oslnivě bílá hvězda s intenzitou přesahující 100 000 candel. Magnalium produkuje záblesky ve spektru viditelného světla.',
      ing:[ {n:'Dusičnan draselný',p:60}, {n:'Magnalium 100 mesh',p:25}, {n:'Dextrin',p:8}, {n:'Síra',p:7} ],
      notes:'Extrémně oslnivá — nikdy se nepřímo nedívejte při testu. Citlivost na tření a náraz.' },
    { id:5,  name:'Zlatá hvězda — Uhlíková',      cat:'stars',     catL:'Hvězdy',          hazard:'low', youtubeId:'_9SbgrZV84I',
      desc:'Tradiční zlatá hvězda s hřejivým světlem. Základ na černém prachu — uhlíkové jiskry v oxidačním plameni dávají zlatý charakter.',
      ing:[ {n:'Dusičnan draselný',p:60}, {n:'Uhlí airfloat',p:20}, {n:'Síra',p:10}, {n:'Dextrin',p:8}, {n:'Olej pojivo',p:2} ],
      notes:'Skvělá pro začátečníky. Jedna z nejbezpečnějších hvězd.' },
    { id:6,  name:'Stříbrná hvězda — Ti jiskry', cat:'stars',     catL:'Hvězdy',          hazard:'med', youtubeId:'H31l_2pysU8',
      desc:'Hvězda s brilantními titanovými jiskrami. Titan produkuje bílé záblesky při oxidaci — efekt "prskavky" přímo v kompozici.',
      ing:[ {n:'Dusičnan draselný',p:58}, {n:'Titan hrubý',p:20}, {n:'Uhlí 80mesh',p:12}, {n:'Dextrin',p:7}, {n:'Síra',p:3} ],
      notes:'Titan skladujte odděleně od oxidátorů. Jiskry jsou intensivní — vhodné vzdálenosti pro diváky.' },

  // GLITTERS (Spirit of '76: Glitter & Strobe Effect - epzyLNuBuF0)
    { id:7,  name:'Klasický Glitter — Antimony',  cat:'glitters',  catL:'Glittery',        hazard:'high', youtubeId:'epzyLNuBuF0',
      desc:'Tradiční blikající glitter. Sb₂S₃ s KNO₃ vytváří reakci se zpožděnou detonací — charakteristické zlaté blikání za hvězdou.',
      ing:[ {n:'Dusičnan draselný',p:60}, {n:'Antimony sulfid',p:10}, {n:'Uhlí airfloat',p:6}, {n:'Síra',p:14}, {n:'Dextrin',p:10} ],
      notes:'⚠️ Antimony sulfid je toxický. Neskladujte ve vlhkém prostředí — reaktivita se ztrácí.' },
    { id:8,  name:'Barium Glitter — Zelenozlatý', cat:'glitters',  catL:'Glittery',        hazard:'high', youtubeId:'tYxo20_C6HA',
      desc:'Varianta glitteru s barnatými ionty. Zelenozlatý nádech s výrazným blikáním. Kombinace glitter efektu se slabou barvou.',
      ing:[ {n:'Dusičnan barnatý',p:62}, {n:'Antimony sulfid',p:8}, {n:'Uhlí 200mesh',p:6}, {n:'Síra',p:14}, {n:'Dextrin',p:10} ],
      notes:'Toxické složky — barium i antimony. Používajte respirátor FFP3.' },

  // PRIMES (Black Powder / Flash Powder Burn Tests)
    { id:9,  name:'Prime — Černý prach',           cat:'primes',    catL:'Priming',         hazard:'med', youtubeId:'Z-tkGeYU2MQ',
      desc:'Základní zápalná vrstva pro přenos ohně na hvězdy. Granulovaný nebo mokrý BP pokrývá hvězdu a zajišťuje spolehlivý start hoření.',
      ing:[ {n:'Dusičnan draselný',p:75}, {n:'Uhlí airfloat',p:15}, {n:'Síra',p:10} ],
      notes:'Aplikujte mokrou cestou (pasta s vodou). Suchý prach je citlivý. Důkladně sušte.' },
    { id:10, name:'Hot Prime — Al/KClO₄',          cat:'primes',    catL:'Priming',         hazard:'high', youtubeId:'D5qvxNk6bsY',
      desc:'Vysoce reaktivní zápalná vrstva pro hvězdy vyžadující horký start. Flash-like složení zajišťuje okamžité a silné vznícení.',
      ing:[ {n:'Chloristan draselný',p:70}, {n:'Hliník airfloat',p:25}, {n:'Dextrin',p:5} ],
      notes:'⚠️ Extrémně citlivá směs. Míchejte suchými nástroji. Max. 5 g najednou.' },

  // BURST (Display Shell Burst / Salute Explosion)
    { id:11, name:'Burst charge — Granulovaný BP', cat:'burst',     catL:'Výbušné náplně',  hazard:'med', youtubeId:'-c93Qf8hH3w',
      desc:'Granulovaný černý prach pro výbuch shellu. Granule zajišťují rovnoměrný a silný výbuch — prašný BP by deflagroval, ne detonoval.',
      ing:[ {n:'Dusičnan draselný',p:75}, {n:'Uhlí 80mesh',p:15}, {n:'Síra',p:10} ],
      notes:'MUSÍ být granulovaný pro správný výbuch. Hrubost granulí ovlivňuje razanci výbuchu.' },
    { id:12, name:'Flash Prach — Záblesk/Zvuk',   cat:'burst',     catL:'Výbušné náplně',  hazard:'high', youtubeId:'VlX2b_9f95E',
      desc:'Deflagrující slože pro intenzivní záblesk a hlasitý zvuk. NIKDY nemíchat >30 g a nikdy nemíchat jiné složky!',
      ing:[ {n:'Chloristan draselný',p:70}, {n:'Hliník airfloat',p:30} ],
      notes:'⚠️⚠️ EXTRÉMNÊ NEBEZPEČNÉ. Max. 30 g. Jen 2 složky. Citlivý na tření, náraz, teplo a ESD.' },

  // WHISTLE (Whistling Firework Test - APRqm9xl7pY)
    { id:13, name:'Whistle Mix — Benzoát',         cat:'whistle',   catL:'Whistle Mix',     hazard:'high', youtubeId:'6R8c8T3V-gM',
      desc:'Píšťalka produkuje charakteristický vysoký tón resonancí v úzké trubici. KClO₄ + benzoát sodný je nejstabilnější formulace.',
      ing:[ {n:'Chloristan draselný',p:72}, {n:'Benzoát sodný',p:28} ],
      notes:'⚠️ Pouze 2 složky — žádné přísady! Citlivý na tření. Lisujte opatrně.' },
    { id:14, name:'Whistle Mix — Salicylát',       cat:'whistle',   catL:'Whistle Mix',     hazard:'high', youtubeId:'6R8c8T3V-gM',
      desc:'Alternativa s salicylátem sodným. Mírně odlišný tón a charakter hoření. Trochu vyšší obsah paliva.',
      ing:[ {n:'Chloristan draselný',p:67}, {n:'Salicylát sodný',p:33} ],
      notes:'⚠️ Citlivý na tření. Pracujte s malými množstvími. Lisování opatrně.' },

  // ROCKETS (Model Rocket Launches - -rlpFX1LiGg)
    { id:15, name:'Raketové palivo — BKNO₃',      cat:'rockets',   catL:'Raketová paliva', hazard:'med', youtubeId:'-rlpFX1LiGg',
      desc:'Tradiční modelové raketové palivo. BP základ s vyšším obsahem uhlí pro konzistentnější tah. Granulujte pro rovnoměrný tah.',
      ing:[ {n:'Dusičnan draselný',p:65}, {n:'Uhlí airfloat',p:20}, {n:'Síra',p:10}, {n:'Dextrin',p:5} ],
      notes:'Granulujte pro konzistentní tah. Testujte na malých vzorcích. Měřte specifický impuls.' },
    { id:16, name:'Raketové palivo — AP/HTPB',    cat:'rockets',   catL:'Raketová paliva', hazard:'high', youtubeId:'7V6dM8k4g2U',
      desc:'Kompozitní palivo pro středně výkonné modelové rakety. AP jako oxidátor, HTPB jako elastomerní pojivo i palivo.',
      ing:[ {n:'Chloristan amonný (AP)',p:72}, {n:'HTPB pojivo',p:18}, {n:'Hliník 200mesh',p:10} ],
      notes:'Pokročilá formulace. Vyžaduje speciální formovací zařízení a bezpečnostní podmínky.' },

  // FOUNTAINS (Gold & Silver Fountains - 0l6Ebkp0ejQ)
    { id:17, name:'Zlatá fontána — Fe hoblovačky', cat:'fountains', catL:'Fontány',         hazard:'low', youtubeId:'DkvkJwpDlsw',
      desc:'Klasická zlatá fontána s hořícími železnými třískami. Oxidace Fe produkuje charakteristické zlatooranžové jiskry.',
      ing:[ {n:'Dusičnan draselný',p:55}, {n:'Železo hoblovačky',p:25}, {n:'Uhlí 80mesh',p:10}, {n:'Síra',p:5}, {n:'Dextrin',p:5} ],
      notes:'Hrubost železných třísek ovlivňuje délku a charakter jisker. Hruběji = delší jiskry.' },
    { id:18, name:'Titanová fontána — bílé jiskry',cat:'fountains', catL:'Fontány',         hazard:'med', youtubeId:'nu-DoCgs_CU',
      desc:'Fontána s bílými titanovými jiskrami a charakteristickým praskáním. Jeden z nejatraktivnějších fontánových efektů.',
      ing:[ {n:'Dusičnan draselný',p:55}, {n:'Titan hrubý',p:20}, {n:'Uhlí airfloat',p:12}, {n:'Síra',p:8}, {n:'Dextrin',p:5} ],
      notes:'Titan skladujte odděleně od oxidátorů. Jiskry jsou oslnivé.' },
    { id:19, name:'Zlatostříbrná fontána — Al/Fe', cat:'fountains', catL:'Fontány',         hazard:'med', youtubeId:'UjZiESiP-1w',
      desc:'Kombinace zlatých (Fe) a stříbřité (Al) jisker. Vizuálně atraktivní dvoubarevný efekt.',
      ing:[ {n:'Dusičnan draselný',p:58}, {n:'Železo hoblovačky',p:16}, {n:'Hliník 30mesh',p:12}, {n:'Uhlí 80mesh',p:8}, {n:'Dextrin',p:6} ],
      notes:'Poměr Fe:Al ovlivňuje charakter jisker. Experimentujte s poměrem.' },

  // FLARES (Red road flare / Green Bengal light)
    { id:20, name:'Červená flare — Signalizace',   cat:'flares',    catL:'Flares',          hazard:'med', youtubeId:'Q-3iP4m_7cM',
      desc:'Záchranná nebo signalizační světlice. Intenzivně červená díky strontiu. Hoří 60–120 s. Viditelná na km.',
      ing:[ {n:'Dusičnan strontnatý',p:55}, {n:'Hořčík Mg',p:20}, {n:'Parlon',p:15}, {n:'Dextrin',p:10} ],
      notes:'Vysoká teplota hoření. Drž za bezpečný konec. Nemiř na osoby nebo objekty.' },
    { id:21, name:'Zelená flare — Signalizace',    cat:'flares',    catL:'Flares',          hazard:'high', youtubeId:'oToQJclHk1U',
      desc:'Zelená signalizační světlice s báriem. Jasně zelená barva viditelná na velké vzdálenosti. Toxická příprava.',
      ing:[ {n:'Dusičnan barnatý',p:55}, {n:'Hořčík Mg',p:20}, {n:'Parlon',p:15}, {n:'Dextrin',p:10} ],
      notes:'⚠️ Barium je toxické — respirátor FFP3 při přípravě. Vysoká teplota hoření.' },

  // SMOKE (Color Smoke Grenades - zI_tqrbmZoo)
    { id:22, name:'Červená dýmovnice',             cat:'smoke',     catL:'Dýmovnice',       hazard:'low', youtubeId:'zI_tqrbmZoo',
      desc:'Dýmovnice s červeným organickým barvivem. Laktóza jako palivo hoří pomalu a vytváří husté barevné dýmy.',
      ing:[ {n:'Dusičnan draselný',p:30}, {n:'Laktóza',p:45}, {n:'Červené barvivo',p:15}, {n:'NaHCO₃',p:7}, {n:'Dextrin',p:3} ],
      notes:'Citlivá na vlhkost — skladujte v hermeticky uzavřených nádobách. Sušte důkladně.' },
    { id:23, name:'Modrá dýmovnice',               cat:'smoke',     catL:'Dýmovnice',       hazard:'low', youtubeId:'p4A_F6QeI1I',
      desc:'Modrá dýmovnice s indigo barvivem. Vizuálně nejatraktivnější barva dýmu — modrá je v atmosféře výrazně viditelná.',
      ing:[ {n:'Dusičnan draselný',p:30}, {n:'Laktóza',p:45}, {n:'Modré barvivo Indigo',p:15}, {n:'NaHCO₃',p:7}, {n:'Dextrin',p:3} ],
      notes:'Citlivost na vlhkost. Barvivo nesmí být příliš jemné — zhorší hoření.' },
    { id:24, name:'Fialová dýmovnice',              cat:'smoke',     catL:'Dýmovnice',       hazard:'low', youtubeId:'f5G_z8mKx9S',
      desc:'Fialová dýmovnice kombinující červené a modré barvivo. Vzácnější a vizuálně velmi atraktivní barva.',
      ing:[ {n:'Dusičnan draselný',p:30}, {n:'Laktóza',p:42}, {n:'Fialové barvivo',p:18}, {n:'NaHCO₃',p:7}, {n:'Dextrin',p:3} ],
      notes:'Fialová je náchylná na rozklad — testujte barvu dýmu na slunci před použitím.' },

  // SPARKLERS (Gold & Silver Sparklers - lsYjBet0rfU)
    { id:25, name:'Zlatá jiskrnice — Fe',           cat:'sparklers', catL:'Jiskrnice',       hazard:'low', youtubeId:'K-8P7e_vUo0',
      desc:'Tradiční zlatá jiskrnice. Ocelový drát pokrytý kastou s železnými třískami. Klasika silvestrovských oslav.',
      ing:[ {n:'Dusičnan draselný',p:62}, {n:'Železo jemné',p:18}, {n:'Hliník 200mesh',p:7}, {n:'Uhlí airfloat',p:5}, {n:'Dextrin',p:8} ],
      notes:'Namočte drát do kaše opakovaně (3–5× vrství). Sušte pečlivě po každé vrstvě.' },
    { id:26, name:'Stříbrná jiskrnice — MgAl',     cat:'sparklers', catL:'Jiskrnice',       hazard:'med', youtubeId:'cM1W32q3P2Y',
      desc:'Jiskrnice s magnaliem dávajícím studené stříbřité jiskry. Bezpečnější pro použití díky nižší teplotě jisker.',
      ing:[ {n:'Dusičnan barnatý',p:65}, {n:'Magnalium 100mesh',p:20}, {n:'Dextrin',p:10}, {n:'Voda',p:5} ],
      notes:'Sušte VELMI důkladně — magnalium reaguje s vlhkostí. Min. 48 h sušení.' }
];

const DB = {
  chemicals: DB_CHEMICALS,
  definitions: DB_DEFINITIONS,
  compositions: DB_COMPOSITIONS
};
