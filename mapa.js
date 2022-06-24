// let podcast_props = {
//   tea1: [
//     [45, 30],
//     [13.8607011, 49.6057875],
//     "https://www.staryrozmital.cz/news/a12-dil-vila-manzelu-vorzovych/",
//     "jmeno",
//     "Aloisie Vorzová se společně s manželem Josefem přestěhovali do Rožmitálu pod Třemšínem krátce po zabrání Sudet. Během druhé světové války se jejich dům stal místem, kde se scházeli místní odbojáři. V roce 1943 se ve vile objevil jako nájemník jistý Miroslav Náhlovský. Tehdy ještě nikdo nemohl tušit, jak tento mladý student zkomplikuje životy mnoha obyvatel Rožmitálu. Příběh vily je také příběhem odvahy a zrady za časů protektorátu.",
//   ],
//   tea2: [
//     [51, 34],
//     [13.8622922, 49.6021342],
//     "https://upload.wikimedia.org/wikipedia/commons/2/28/Deska_odboj_zamekrozmital.jpg",
//     "jmeno",
//     "Odboj v Rožmitálu pod Třemšínem začal téměř okamžitě po zabrání Sudet. Z počátku se jednalo spíše o ojedinělé akce bez větších dopadů a s malou mírou organizovanosti. Změnu přinesl František Lízl, kterému se podařilo navázat spolupráci se skupinou odbojářů z Voltuše, kterou vedli Jaroslav Pompl a Alois Hovorka. Obě skupiny se roku 1942 spojily, a velitelem se stal právě František Lízl. Klíčovým úkolem této skupiny byla distribuce ilegálních tiskovin. Později, když se v Brdech začali objevovat sovětští vojáci, kteří uprchli z nacistického zajetí, se tato skupina starala o jejich přístřeší a stravu. V roce 1943 došlo k rozsáhlé razii, při které klatovské gestapo pozatýkalo téměř všechny představitele protinacistického odboje v Brdech. Někteří odbojáři se následně snažili ukrýt v lesích nebo na tajných adresách, jiní se při dopadení bránili se zbraní v ruce. Mnoho z nich však padlo nebo bylo umučeno či popraveno.",
//   ],
// };

// for (let i in podcast_props) {
//   console.log(podcast_props[i][2]);

// }
debugger;

var center = SMap.Coords.fromWGS84(13.8643006, 49.6019553);
var ryba = SMap.Coords.fromWGS84(13.8433614, 49.5772531);
var m = new SMap(JAK.gel("m"), center, 13);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();

options = {
  title: "Podcast",
};

var podcast_props = {
  tea1: [
    [45, 30],
    [13.8607011, 49.6057875],
    "https://051cf0dd00.clvaw-cdnwnd.com/047b3ee423497877efe093014898febe/200000759-b0f5cb1738/Vorzovi.JPG",
    "Vila číslo 112 v Rybově ulici",
    "Aloisie Vorzová se společně s manželem Josefem přestěhovali do Rožmitálu pod Třemšínem krátce po zabrání Sudet. Během druhé světové války se jejich dům stal místem, kde se scházeli místní odbojáři. V roce 1943 se ve vile objevil jako nájemník jistý Miroslav Náhlovský. Tehdy ještě nikdo nemohl tušit, jak tento mladý student zkomplikuje životy mnoha obyvatel Rožmitálu. Příběh vily je také příběhem odvahy a zrady za časů protektorátu.",
  ],
  tea2: [
    [51, 34],
    [13.8622922, 49.6021342],
    "https://upload.wikimedia.org/wikipedia/commons/2/28/Deska_odboj_zamekrozmital.jpg",
    "Odboj na Rožmitálsku",
    "Odboj v Rožmitálu pod Třemšínem začal téměř okamžitě po zabrání Sudet. Z počátku se jednalo spíše o ojedinělé akce bez větších dopadů a s malou mírou organizovanosti. Změnu přinesl František Lízl, kterému se podařilo navázat spolupráci se skupinou odbojářů z Voltuše, kterou vedli Jaroslav Pompl a Alois Hovorka. Obě skupiny se roku 1942 spojily, a velitelem se stal právě František Lízl. Klíčovým úkolem této skupiny byla distribuce ilegálních tiskovin. Později, když se v Brdech začali objevovat sovětští vojáci, kteří uprchli z nacistického zajetí, se tato skupina starala o jejich přístřeší a stravu. V roce 1943 došlo k rozsáhlé razii, při které klatovské gestapo pozatýkalo téměř všechny představitele protinacistického odboje v Brdech. Někteří odbojáři se následně snažili ukrýt v lesích nebo na tajných adresách, jiní se při dopadení bránili se zbraní v ruce. Mnoho z nich však padlo nebo bylo umučeno či popraveno.",
  ],
  //   taischa: [
  //     []
  //   //
  oscar: [
    [37, 51],
    [13.8641825, 49.6018411],
    "Images/289006535_1246095682799872_5892602752608219913_n.jpg",
    "Sametová revoluce a pálení totality v Rožmitále pod Třemšínem",
    'Dny změn v regionu poodhalují svědectví pamětníků a fotografie ukryté v místním muzeu. První významná demonstrace se odehrála na zdejším náměstí již 27. 11. 1989 u příležitosti generální stávky, nad hlavami desítek občanů vlály státní vlajky, lidé provolávali hesla podporující stoupence demokratických změn. Ke shromážděným promluvili z balkonu radnice, který byl ozdoben nápisem "Chceme dialog, nechceme rozvracet!"zástupci právě se formujícího místního Občanského fóra. A k otevřeným diskuzím zde skutečně došlo. V následujících dnech proběhly v místním kině veřejné diskuse, kterých se zúčastnili studenti pražských vysokých škol, herec Otakar Brousek st., moderátor Československé televize Jan Vávra i představitelé tehdejšího komunistického vedení města. Do debat se zapojili také zdejší občané p. Hásek, p. Králíček a p. Mařík, kteří byli ještě nedávno za své názory pronásledování a vězněni. Poslední tečku za totalitou pojali místní symbolicky. Při tradičním pálení čarodějnic (30. 4. 1990), tedy den před svátkem práce dosud zneužívaným komunistickou propagandou, spálili místní občané na velké hranici za městem staré transparenty s hesly, které dříve propagovaly komunistickou ideologii. Na jejím vrcholu byla umístěna hlava čarodějnice a velký nápis "Soudružka totalita už dočarovala!"',
  ],
  taischa: [
    [51, 34],
    [13.8691464, 49.6032325],
    "Images/image.png",
    "Den v Hofmeistrově americké kolonii",
    "Málokdo ví, že zde v Rožmitále vznikl skauting dříve, než Antonín B. Svojsík založil v Českém království organizaci Junák. S počátky skautování je spojeno jméno Františka Hofmeistera, rožmitálského rodáka, učitele na vyšší lesnické škole v Písku a milovníka všeho francouzského. Hofmeister se kolem roku 1908 vydal do USA, kde ho doslova uchvátila činnost Setonova hnutí Woodcraft neboli Ligy lesní moudrosti. Po návratu domů kolem sebe na jaře roku 1911 shromáždil skupinu chlapců a dívek. Společným činnostem se věnovali nejen na letních táborech, ale také v průběhu roku. Tábořili v přírodě,  vařili na otevřeném ohni, učili se signalizovat, učili se znát stopy zvířat v přírodě, vařili na ohništi, sportovali a muzicírovali. Jezdili na koních, šermovali, učili se jezdit na lyžích anebo pomáhali zemědělcům s polními pracemi. V rámci oddílu vznikl trubačský soubor a později dokonce malý smyčcový orchestr. Dívčí skupina se věnovala také zahradničení, šítí a vaření. František Hofmeister se pro práci s mládeží inspiroval nejen Ernestem Thomsonem Setonem, ale také zakladatelem britského skautingu Robertem Baden-Powellem. Jeho středisko používalo pojmenování Americká kolonie pro mládež, zároveň se však sami po Baden-Powellově vzoru nazývali skauti. Činnost chlapců a dívek však přervala první světová válka, František Hofmeister musel v roce 1915 narukovat na frontu. Válku přežil, nicméně k obnovení střediska pod jeho vedením již nedošlo. Vzpomínky na několik let skautování naštěstí nezmizely a byly zaznamenány, a s nimi také příběh o prvním (na dlouhou dobu zapomenutém) skautském experimentu v Českém království.",
  ],
  paya: [
    [40, 28],
    [13.8630211, 49.6029992],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Namesti_rozmital.jpg/800px-Namesti_rozmital.jpg",
    "nářečí v Rožmitálsku",
    "Představte si, že jste v 19. Století a právě teď probíhá rozhovor mezi Marií Hoškovou a Karolíny, sestry bohuslavy Rajské. Všimnete si, že používají nářečí. Dozvíte se také, jak to probíhalo, když Bohuslava s Marií zakládali společnost dívek českých.\n\nJaké nářečí jsme používali:\npražka - pražačka\njahody - borůvky\nnejčky/nejčko - nyní\nkterak - jak\nrejchotnej - nepřístupně zvědavej\nvíšli - to je ale co?\nnemám gdá - nemám čas",
  ],
  paya2: [
    [52, 29],
    [13.8711469, 49.6022556],
    "Images/8d4279b4f9d4f26eb8940494135ed135.jpg",
    "Bohuslava Rajská",
    "Bohuslava Rajská (spisovatelka, básnířka, česká vlastenka) se narodila v Rožmitále pod Třemšínem. Po smrti její matky žila u své sestry Karolíny. O několik let později roku 1842 navštěvuje obrozeneckou školu Budeč česká - K.S Amerling. Její velký sen byl založení vzdělávacího ústavu pro dívky. To Uskutečňuje téhož roku společně s Marií Terezií. Roku 1844 se koná sňatek Bohuslavy Rajské a Františka Ladislava Čelakovského. Bohuslava Rajská se stává Čelakovskou a stěhuje se do Varšavy. Později zjišťuje, že je v manželství nešťastná. Ve 35 letech roku 1852 umírá na tuberkulózu.",
  ],
};

var obrazky = [];

for (var i in podcast_props) {
  podcast_props[i][3] = podcast_props[i][3].toUpperCase();
  var obrazek = JAK.mel(
    "img",
    {
      src: podcast_props[i][2],
    },
    { width: podcast_props[i][0][0], height: podcast_props[i][0][1] }
  );

  var znacka = JAK.mel("div");

  znacka.appendChild(obrazek);
  var card = new SMap.Card();

  card.setSize(600, 250);
  card.getHeader().innerHTML = podcast_props[i][3];
  card.getBody().innerHTML = podcast_props[i][4];

  // add a space between the body and the header
  card.getHeader().appendChild(document.createElement("p"));

  var marker = new SMap.Marker(
    SMap.Coords.fromWGS84(podcast_props[i][1][0], podcast_props[i][1][1]),
    podcast_props[i][3],
    { url: znacka }
  );
  marker.decorate(SMap.Marker.Feature.Card, card);

  layer.addMarker(marker);
}
// for (let obrazek in obrazky) {
//   znacka.appendChild(obrazek);
// }
// let popisek = JAK.mel(
//   "div",
//   {},
//   {
//     position: "absolute",
//     left: "0px",
//     top: "2px",
//     textAlign: "center",
//     width: "22px",
//     color: "white",
//     fontWeight: "bold",
//   }
// );
// popisek.innerHTML = "JJR";
// znacka.appendChild(popisek);
