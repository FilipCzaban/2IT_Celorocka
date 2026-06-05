/**
 * PyroData CZ — db_data.js
 * Database of chemicals and definitions
 */

const DB_CHEMICALS = {
  binders: [
      { name:'Dextrin', formula:'(C6H10O5)n', desc:'Vodou rozpustné pojivo z hydrolýzy škrobu. Nejrozšířenější a nejlevnější pojivo v pyrotechnice. Ideální pro granulaci a výrobu hvězd.', props:['Vodou rozpustný','Nízká cena','Dobrá adheze'], hazard:'low', uses:['Hvězdy','Granulace','Priming'] },
      { name:'Red Gum (Šelak)', formula:'Přírodní pryskyřice', desc:'Přírodní pryskyřice z austrálského eukalyptu Xanthorrhoea. Výborné pojivo pro barevné hvězdy, zejména na bázi bária a stroncia.', props:['Přírodní původ','Čisté hoření','Výborná adheze'], hazard:'low', uses:['Červené hvězdy','Zelené hvězdy','Flares'] },
      { name:'Parlon (Chlorovaný kaučuk)', formula:'C10H11Cl7', desc:'Syntetické chlorové pojivo, které stabilizuje barvy plamenů. Chlor reaguje se sloučeninami kovů za vzniku čistých spektrálních barev.', props:['Obsah chloru','Stabilizátor barvy','Tepelná odolnost'], hazard:'medium', uses:['Barevné hvězdy','Flares','Barevné kompozice'] },
      { name:'Nitrocelulóza (NC lakk)', formula:'C6H7N3O11', desc:'Nitrovaná celulóza – vysoce hořlavé pojivo i palivo. V lakovém formě se používá pro výrobu zápalných kompozic a speciálních složí.', props:['Velmi hořlavá','Dobrá filmotvornost','Pojivo i palivo'], hazard:'high', uses:['Zápalné slože','Rychlá paliva','NC lak'] },
      { name:'Arabská guma', formula:'Polysacharid (Acacia)', desc:'Přírodní vodou rozpustné pojivo z akácie. Alternativa k dextrinu pro citlivé aplikace – jemnější film, vhodná pro výrobu hvězd s barvivem.', props:['Přírodní původ','Velmi jemná','Vodou rozpustná'], hazard:'low', uses:['Barevné hvězdy','Dýmy','Speciální slože'] },
      { name:'Laminac (Polyester)', formula:'Polyesterová pryskyřice', desc:'Dvousložková polyesterová pryskyřice s výbornou mechanickou pevností. Používá se tam, kde je potřeba silná odolnost pojiva.', props:['Silná adheze','Chemické tvrzení','Odolný'], hazard:'medium', uses:['Speciální aplikace','Výztuže'] },
    ],
    fuels: [
      { name:'Dřevěné uhlí — Airfloat', formula:'C (< 5 µm)', desc:'Extrémně jemně mleté uhlí, tak lehké, že pluje ve vzduchu. Dramaticky zvyšuje citlivost a rychlost hoření. Základ zápalných složí a rychlého BP.', props:['Extrémně jemné','Velmi reaktivní','Citlivé'], hazard:'high', uses:['Zápalné slože','Rychlý BP','Prime'] },
      { name:'Dřevěné uhlí — 80 mesh', formula:'C', desc:'Standardní pyrotechnické uhlí pro výrobu černého prachu. Kompromis mezi reaktivitou a bezpečností manipulace. Nejpoužívanější hrubost.', props:['Standardní hrubost','BP základ','Všestranné'], hazard:'medium', uses:['Černý prach','Zlaté efekty','Lift charge'] },
      { name:'Síra', formula:'S', desc:'Snižuje zápalnou teplotu a zvyšuje rychlost hoření. Nezbytná součást klasického černého prachu (KNO3/C/S). Nízká zápalná teplota: 232 °C.', props:['Snižuje zápalnou teplotu','Zvyšuje rychlost','Citlivá'], hazard:'medium', uses:['Černý prach','Urychlovač hoření','Prime'] },
      { name:'Magnalium (MgAl 50:50)', formula:'Mg₅₀Al₅₀', desc:'Slitina hořčíku a hliníku v poměru 50:50. Reaktivnější než oba kovy samostatně. Produkuje intenzivní bílé jiskry s praskáním v oxidátorech.', props:['Intenzivní jiskry','Bílé světlo','Reaktivní'], hazard:'high', uses:['Bílé hvězdy','Glittery','Crackle'] },
      { name:'Antimony sulfid (Sb₂S₃)', formula:'Sb₂S₃', desc:'Tradiční složka třpytivých glitter kompozic. Interaguje s dusičnany za vzniku charakteristického časově zpožděného blikání. Toxický!', props:['Glitter efekt','Nízká zápalná T','Toxický'], hazard:'high', uses:['Glittery','Třpytivé hvězdy','Krásný efekt'] },
      { name:'Karbid křemíku (SiC)', formula:'SiC', desc:'Tvrdý keramický materiál produkující zlaté jiskry v proudu hoření. Slouží jako zdroj jisker ve fontánách a pro zlaté vizuální efekty.', props:['Zlaté jiskry','Odolný','Stabilní'], hazard:'low', uses:['Zlaté fontány','Jiskrové efekty'] },
    ],
    metals: [
      { name:'Hliník — Airfloat', formula:'Al (< 10 µm)', desc:'Extrémně jemný hliník s obrovským specifickým povrchem. Velmi reaktivní — pro flash prach a zápalné materiály. Manipulace vyžaduje velkou opatrnost.', props:['Extrémně reaktivní','Flash aplikace','Citlivý na ESD'], hazard:'high', uses:['Flash prach','Zápalné slože','Bílé hvězdy'] },
      { name:'Hliník — 200 mesh', formula:'Al (74 µm)', desc:'Standardní pyrotechnický hliník pro barevné hvězdy a kompozice. Vyvážený poměr reaktivity a bezpečnosti. Nejpoužívanější hrubost v praxi.', props:['Standardní hrubost','Víceúčelový','Stříbřité světlo'], hazard:'medium', uses:['Barevné hvězdy','Kompozice','Bílé světlo'] },
      { name:'Hliník — 30 mesh', formula:'Al (600 µm)', desc:'Hrubý hliník pro jiskrové efekty v fontánách. Produkuje velké, dlouhotrvající jiskry. Ideální pro Roman Candles a fontány se stříbřitými jiskrami.', props:['Velké jiskry','Pomalé hoření','Fontánový efekt'], hazard:'medium', uses:['Fontány','Jiskrové efekty','Roman Candles'] },
      { name:'Hořčík (Mg)', formula:'Mg', desc:'Kov hořící extrémně intenzivním bílým světlem (teplota plamene ~2850 °C). Základ zábleskových světel a signalizačních světlic.', props:['Oslnivě bílé světlo','Velmi vysoká T','Vodíku při styku s vodou'], hazard:'high', uses:['Zábleskové světlo','Magnalium složka','Flares'] },
      { name:'Titan — hrubý', formula:'Ti (hrubý)', desc:'Kov produkující jasně bílé praskající jiskry charakteristického vizuálního efektu. Odolný a stabilní — vhodný pro profesionální fontány.', props:['Krásné jiskry','Praskání','Stabilní kov'], hazard:'high', uses:['Titanové fontány','Crackle','Salutní slože'] },
      { name:'Železo — hoblovačky', formula:'Fe', desc:'Hrubé železné třísky produkující charakteristické zlaté až oranžové jiskry při oxidaci. Klasický a levný materiál pro zlaté fontány a jiskrnice.', props:['Zlaté jiskry','Cenově dostupné','Charakteristické'], hazard:'low', uses:['Zlaté fontány','Jiskrnice','Zlaté hvězdy'] },
    ],
    oxidizers: [
      { name:'Dusičnan draselný (KNO₃)', formula:'KNO₃', desc:'Historicky nejdůležitější oxidátor — základ černého prachu. Středně silný, relativně bezpečný. Snadno rozpustný ve vodě, vhodný pro mokré míchání.', props:['Základní oxidátor','BP základ','Vodou rozpustný'], hazard:'medium', uses:['Černý prach','Hvězdy','Dýmy','Propellery'] },
      { name:'Chloristan draselný (KClO₄)', formula:'KClO₄', desc:'Moderní standard pro většinu pyrotechnických formulací. Silnější než KNO₃, ale méně citlivý než chloričitan. Nerozpustný ve vodě — vhodný pro vlhké prostředí.', props:['Silný oxidátor','Stabilní','Nerozpustný'], hazard:'medium', uses:['Barevné hvězdy','Glittery','Whistle mix','Flash prach'] },
      { name:'Dusičnan barnatý Ba(NO₃)₂', formula:'Ba(NO₃)₂', desc:'Oxidátor s ionty bária, které dávají plameni intenzivní zelenou barvu. Toxický barium je nenahraditelné pro plnou zelenou. Silná oxidační kapacita.', props:['Zelená barva','Silný oxidátor','TOXICKÝ'], hazard:'high', uses:['Zelené hvězdy','Zelené flares','Zelený záblesk'] },
      { name:'Dusičnan strontnatý Sr(NO₃)₂', formula:'Sr(NO₃)₂', desc:'Oxidátor se strontiem dávajícím karmínově červenou barvu. Stabilní a méně toxický než barium. Základ červených pyrotechnických složí.', props:['Červená barva','Středně silný','Stabilní'], hazard:'medium', uses:['Červené hvězdy','Červené flares','Signalizace'] },
      { name:'Chloristan amonný (AP)', formula:'NH₄ClO₄', desc:'Výkonný oxidátor pro kompozitní raketová paliva. Nízká molární hmotnost poskytuje vysoký obsah kyslíku. Citlivý na vlhkost — přísné skladování.', props:['Raketový oxidátor','Vysoký výkon','Citlivý na vlhkost'], hazard:'high', uses:['Raketová paliva','Výkonné kompozice'] },
      { name:'Oxid měďnatý (CuO)', formula:'CuO', desc:'Černý prášek — oxidátor dodávající ionty mědi pro modrou nebo modrozelenou barvu plamene. Kombinuje funkci oxidátoru i barviva.', props:['Modrá barva','Oxidátor i barvivo','Tmavý prášek'], hazard:'medium', uses:['Modré hvězdy','Modré flares','Modré dýmy'] },
    ],
  }
};

const DB_DEFINITIONS = {
  A: [
      { term:'Airfloat uhlí', def:'Extrémně jemně mleté dřevěné uhlí (< 5 µm). Je tak lehké, že pluje ve vzduchu. Dramaticky zvyšuje citlivost, rychlost hoření a reaktivitu pyrotechnických směsí.' },
      { term:'ANFO', def:'Amonium Nitrate Fuel Oil — průmyslová výbušnina z dusičnanu amonného a motorového oleje. Používána výhradně v hornictví a stavebnictví, nikoliv v hobbyistické pyrotechnice.' },
      { term:'Atomizace', def:'Proces výroby kovových prášků (Al, Mg, Ti) rozprašováním roztaveného kovu stlačeným plynem nebo vodou na jemné kapky, které tuhnou na prášek určité hrubosti.' },
    ],
    B: [
      { term:'Barium (Ba)', def:'Kov alkalických zemin. Sloučeniny bária — dusičnan Ba(NO₃)₂, uhličitan BaCO₃ — jsou základ zelené pyrotechnické barvy. Ionty Ba emitují světlo ~505 nm. Toxický.' },
      { term:'Black Match', def:'Zápalná šňůra z bavlněné niti potažené černým prachem. Hoří rychle (2–3 cm/s) bez ochranné vrstvy. Historický předchůdce Visco fuze — méně bezpečný.' },
      { term:'BP (Black Powder)', def:'Černý prach — nejstarší výbušnina (vynalezen v Číně ~9. stol.). Klasické složení: KNO₃ 75 %, uhlí 15 %, síra 10 %. Základ pyrotechniky po staletí. Deflagruje, nededetonuje.' },
      { term:'Burst charge', def:'Výbušná náplň uvnitř shellu, která ho rozptýlí ve vzduchu a zapálí hvězdy. Typicky granulovaný černý prach nebo flash prach pro větší razanci.' },
    ],
    C: [
      { term:'Crackling / Crackle', def:'Efekt praskání nebo šustění v pyrotechnické složi. Obvykle způsobeno magnaliem nebo bismutovými sloučeninami. Vizuálně i akusticky atraktivní.' },
      { term:'Chloristan (perchlorate)', def:'Soli kyseliny chloristé (ClO₄⁻). Chloristan draselný KClO₄ je nejběžnější oxidátor moderní pyrotechniky — stabilnější a méně citlivý než dřívější chloričitany.' },
      { term:'CSI (Cut Star Ignition)', def:'Metoda zapalování hvězd v shellu pomocí přímého kontaktu s burst charge. Hvězdy jsou po obvodu shellu, burst charge uprostřed.' },
    ],
    D: [
      { term:'Deflagrace', def:'Rychlé hoření látky šířící se pod rychlostí zvuku (subsonic). Typický jev v pyrotechnice. Zásadně se liší od detonace — neničí přístroje.' },
      { term:'Detonace', def:'Výbuch šířící se nadzvukovou rychlostí v látce. V hobbyistické pyrotechnice nežádoucí — může nastat u flash prachu při špatné manipulaci.' },
      { term:'Dextrin', def:'Vodou rozpustné pojivo z hydrolýzy škrobu. Nejpoužívanější pyrotechnické pojivo. Levný, dostupný, bezpečný. Standardně 3–10 % v recepturách.' },
      { term:'Driver', def:'Hnací slože v raketě nebo jiném pohybujícím se pyrotechnickém výrobku zajišťující pohon nebo výstřel.' },
    ],
    E: [
      { term:'Efekt hvězd', def:'Vizuální charakter hvězd při letu — plný (solid), blikající (glitter), praskající (crackling), s chvostkem (comet tail) nebo měnící barvu (colour-changing).' },
    ],
    F: [
      { term:'Flash prach', def:'Extrémně citlivá pyrotechnická směs (typicky KClO₄ 70 % + Al airfloat 30 %). Produkuje intenzivní záblesk a hlasitý zvuk. NIKDY nemíchat >30 g a nikdy nepřidávat jiné složky.' },
      { term:'Fuze (Visco)', def:'Ochranná zápalná šňůra s jádrem z černého prachu obaleným v textilním opletení a plastovém obalu. Bezpečná a vodovzdorná. Rychlost hoření ~0.8–1.2 cm/s.' },
      { term:'Fontána', def:'Pyrotechnický výrobek produkující proud jisker z pevného bodu. Jiskry mohou být zlaté (Fe), stříbřité (Al/Ti), nebo barevné (barevné kovy).' },
    ],
    G: [
      { term:'Glitter', def:'Pyrotechnická slože produkující charakteristické blikající světlo se zpožděním. Dosahováno interakcí Sb₂S₃ s dusičnany za vzniku krátkých zpožděných zábleskových reakcí.' },
      { term:'Granulace', def:'Proces přeměny prašné pyrotechnické směsi na granule pomocí vody a pojiva. Granulovaný materiál je méně citlivý, hoří rovnoměrněji a lze ho snadněji dávkovat.' },
    ],
    H: [
      { term:'Hvězda (Star)', def:'Komprimovaná peleta pyrotechnické slože spalující se za letu a produkující barevné nebo dekorativní světlo. Základní vizuální prvek každého shellu a ohňostroje.' },
      { term:'HTPB', def:'Hydroxyl-terminated polybutadiene — elastomerní pojivo pro kompozitní raketová paliva. Slouží jako pojivo, palivo i strukturální součást motoru. Dává palivu gumovitou konzistenci.' },
    ],
    I: [
      { term:'Iniciátor', def:'Zápalný prvek spouštějící hoření pyrotechnické slože. Může být elektrický (e-match), třecí (friction primer), nebo tepelný (spark igniter).' },
      { term:'Ionizace plamene', def:'Emise světla o specifických vlnových délkách způsobená excitací kovových iontů v plameni. Každý kov emituje unikátní spektrum — základ pyrotechnické koloristiky.' },
    ],
    J: [
      { term:'Jiskrnice (Sparkler)', def:'Kovový drát nebo tyčinka pokrytá pyrotechnickou kastou produkující při hoření dekorativní jiskry. Klasický a levný pyrotechnický výrobek.' },
    ],
    K: [
      { term:'KNO₃ (Dusičnan draselný)', def:'Sanytr. Historicky nejdůležitější oxidátor — základ černého prachu. Relativně bezpečný, vodou rozpustný, snadno dostupný. Bod tání 334 °C, dekompozice nad 400 °C.' },
      { term:'KClO₄ (Chloristan draselný)', def:'Moderní standardní oxidátor pro barevné slože. Silnější než KNO₃, stabilnější než KClO₃. Nerozpustný ve vodě — výhoda v mokrém prostředí.' },
    ],
    L: [
      { term:'Lift charge', def:'Hnací náplň vystřelující shell z houfnice do požadované výšky. Obvykle hrubý granulovaný černý prach. Množství určuje výšku výbuchu.' },
      { term:'Laminac', def:'Dvousložková polyesterová pryskyřice. Silné chemicky tvrzené pojivo pro speciální aplikace vyžadující mechanickou odolnost.' },
    ],
    M: [
      { term:'Magnalium (MgAl)', def:'Slitina hořčíku a hliníku v různých poměrech (50:50, 30:70). Reaktivnější než oba kovy samostatně — produkuje intenzivní bílé jiskry s praskáním v oxidačním prostředí.' },
      { term:'Měrný povrch (BET)', def:'Celková plocha povrchu prášku na jednotku hmotnosti [m²/g]. Jemnější prášek → větší měrný povrch → rychlejší hoření → větší reaktivita a citlivost.' },
    ],
    N: [
      { term:'Nitrát (Dusičnan)', def:'Sůl kyseliny dusičné (NO₃⁻). Primární třídy oxidátorů v pyrotechnice: KNO₃, Sr(NO₃)₂, Ba(NO₃)₂, NH₄NO₃. Bohaté na kyslík.' },
      { term:'Nitrocelulóza', def:'Esterifikovaná celulóza s kyselinou dusičnou. Vysoce hořlavá látka s vysokým obsahem energie. Používána jako pojivo v lakovém formě nebo jako palivo.' },
    ],
    O: [
      { term:'Oxidátor', def:'Látka poskytující kyslík pro exotermickou reakci hoření. Bez oxidátoru hoření v uzavřeném prostoru (pyrotechnice) není možné. Typicky soli s vysokým obsahem O.' },
    ],
    P: [
      { term:'Parlon (Chlorovaný kaučuk)', def:'Syntetické pojivo s vysokým obsahem chlóru (~65 %). Chlor stabilizuje spektrální emisi kovových iontů — zlepšuje čistotu a intenzitu barev.' },
      { term:'Prime (Priming)', def:'Zápalná vrstva aplikovaná na povrch hvězd nebo peletek pro spolehlivé vznícení burst charge. Obvykle černý prach nebo hot prime (KClO₄/Al).' },
      { term:'Propellant', def:'Pohonná hmota — látka hořící ke generování tlaku nebo tahu. V pyrotechnice pro rakety, výstřelné trubice a pohybující se výrobky.' },
    ],
    R: [
      { term:'Red Gum (Xanthorrhoea)', def:'Přírodní pryskyřice australského eukalyptu. Výborné pojivo pro barevné hvězdy — hoří čistě bez popela, vynikající adheze, příznivá cena.' },
      { term:'Roman Candle', def:'Trubice s hvězdami střídavě s lift charge. Postupně výstřeluje hvězdy do výšky. Klasický a oblíbený typ pyrotechnického výrobku.' },
    ],
    S: [
      { term:'Salutní slože', def:'Pyrotechnická směs produkující primárně zvukový a zábleskový efekt. Typicky flash prach v uzavřeném prostoru. Vyžaduje opatrnou manipulaci.' },
      { term:'Shell (Dělový koule)', def:'Sférická nebo cylindrická náplň s hvězdami a burst charge. Vystřeluje se z tubusové houfnice a detonuje ve vzduchu za vizuálního efektu.' },
      { term:'Strontium (Sr)', def:'Kov alkalických zemin. Sloučeniny Sr (dusičnan, uhličitan, síran) emitují charakteristickou karmínovou červenou barvu (~640–680 nm) v plameni.' },
    ],
    T: [
      { term:'Titan (Titanium)', def:'Přechodný kov produkující jasně bílé praskající jiskry při oxidaci. Jeden z nejatraktivnějších pyrotechnických kovů — odolný, stabilní, vizuálně efektní.' },
      { term:'Time delay', def:'Zpomalovací slože nebo fuze zajišťující definovanou časovou prodlevu (0.1–60+ s) mezi zapalením a pyrotechnickým efektem.' },
    ],
    V: [
      { term:'Visco fuze', def:'Standardní zápalná šňůra moderní pyrotechniky. Černý prach ve středu, textilní opletení, PVC vnější vrstva. Rychlost hoření ~1 cm/s, vodovzdorná, bezpečná.' },
    ],
    W: [
      { term:'Whistle mix', def:'Pyrotechnická slože produkující vysokofrekvenční pískání (kvílení) při deflagraci v rezonančním tubusovém prostoru. Typicky KClO₄ + organický benzoát nebo salicylát.' },
      { term:'Wetting agent', def:'Povrchově aktivní látka (smáčidlo) snižující povrchové napětí vody při mokrém míchání pyrotechniky. Zlepšuje homogenitu a granulaci směsi.' },
    ],
    Z: [
      { term:'Zápalná teplota', def:'Minimální teplota, při které se látka samovolně vznítí bez přímého přívodu tepla nebo jiskry. Zásadní bezpečnostní parametr pro skladování a transport.' },
      { term:'Zinek (Zn)', def:'Kov produkující modrozelené světlo při hoření. Využíván v dýmových složích a jako složka speciálních barevných efektů.' },
    ],
  }
};
