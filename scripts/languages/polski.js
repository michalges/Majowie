document.getElementById("polski_button").addEventListener("click", () => {
    document.getElementById("title").innerHTML = "Majowie";
    
    const menu_links = document.querySelectorAll("nav > a");
    menu_links[0].innerHTML = "Home";
    menu_links[1].innerHTML = "Historia";
    menu_links[2].innerHTML = "Kultura";
    menu_links[3].innerHTML = "Zabytki";
    menu_links[4].innerHTML = "Bibliografia";
    
    document.getElementById("wstep_p").innerHTML = "Cywilizacja Majów była jedną z wielkich cywilizacji prekolumbijskich, rozciągającą się poprzez tropikalne lasy Ameryki Środkowej. Majowie byli mistrzami w rolnictwie, ceramice, piśmie hieroglificznym, tworzeniu kalendarzy i matematyce. Cywilizacja ta zostawiła za sobą zdumiewająca ilość imponującej architektury i dzieł sztuki.";
    
    document.getElementById("historia_h2").innerHTML = "Historia";
    document.getElementById("historia_p").innerHTML = "Już około 1500 roku p.n.e. Majowie osiedlili się w wioskach i rozwinęli rolnictwo oparte na uprawie kukurydzy, fasoli i dyni. Zaczęli budować centra ceremonialne, które przekształciły się w miasta ze świątyniami, piramidami, pałacami i placami.<br><br>Około 300 roku p.n.e. Majowie przyjęli hierarchiczny system władzy składającej się ze szlachty i królów. Ta cywilizacja składała się z wysoko rozwiniętych małych państw. Społeczeństwo Majów składało się z wielu niepodległych państw, każde z własnymi miastami i wioskami zbudowanymi wokół miejsc kultu.<br><br>Od końca ósmego i poprzez dziewiąty wiek n.e wydarzyło się coś, co wstrząsnęło cywilizacją Majów. Stopniowo opuszczano miasta na południowych nizinach, a około 900 roku n.e. cywilizacja Majów w tym regionie upadła. Przyczyna tego tajemniczego procesu do dziś nie jest znana.<br><br>Na wyżynach Połwyspu Jukatan, kilka miast takich jak Chichén Itzá czy Uxmal kontynuowały prosperować w późniejszych okresach. Kiedy jednak przybyli hiszpańscy konkwistadorzy, większość Majów mieszkała w małych wioskach, a ich niegdyś wielkie miasta były dawno pochłonięte przez gęstą dżunglę.<br><br>Historia Majów może być scharakteryzowana jako cykle wznoszeń i upadków. Państwa-miasta rosły w znaczeniu tylko po to by upaść i być zastąpione przez inne. Cywilizacja ta, może też zostać opisana cywilizacją postępu i zmiany, kierowana religią, która stała u podstaw jej kultury.";
    
    document.getElementById("kultura_h2").innerHTML = "Kultura";
    document.getElementById("kultura_p").innerHTML = "W latach 300 p.n.e. - 300 n.e., cywilizacja majów kontynuowała rozkwit wraz z rozwojem szlaków handlowych, postępami w uprawie kukurydzy i początkiem bardziej złożonych praktyk rolniczych, a także budową piramid i ośrodków miejskich. Społeczeństwo Majów nadal rozwijało się w oparciu o złożoną kosmologi, która zaowocowała skomplikowanymi kalendarzami, pismem i wnikliwymi obliczeniami matematycznymi. <br><br>Innowacje w sztuce, medycynie i nauce, zwłaszcza w dziedzinie matematyki i astronomii, były fenomenalne. Nawiązali złożone relacje, sojusze i intrygi z sąsiednimi miastami-państwami. Działania wojenne oraz branie niewolników również nie było niczym niezwykłym. <br><br>Ofiary z ludzi składano przy specjalnych okazjach. Wśród Majów składanie ofiar z ludzi nie było wydarzeniem codziennym, ale było niezbędne do uświęcenia pewnych rytuałów, takich jak inauguracja nowego władcy, wyznaczenie nowego dziedzica tronu lub poświęcenie ważnej nowej świątyni. Ofiarami często byli jeńcy wojenni. W Chichén Itzá, ofiary byłyby pomalowane na niebiesko, kolor, który uważano za cześć boga Chaaka, i wrzucone do studni.";
    
    document.getElementById("zabytki_prolog_h2").innerHTML = "Zabytki i turystyka";
    document.getElementById("zabytki_prolog_p").innerHTML = "Ameryka Środkowa ma na ogół dwie pory roku, deszczową i suchą. Wizyta w porze deszczowej, która trwa od maja do października, nie jest najlepszym pomysłem, ponieważ opady deszczu pojawiają się regularnie po południu i trwają godzinami. Ponadto o tej porze roku może być dość wilgotno, co sprawia, że wizyta staje się jeszcze bardziej męcząca. Z kolei w porze suchej jest najgoręcej, szczególnie w kwietniu i maju.<br><br>Innym czynnikiem, który należy wziąć pod uwagę podczas planowania wizyty, są tłumy w szczycie sezonu, który trwa od grudnia do marca. Jednakże największe natężenie turystów występuje w okresie Bożego Narodzenia i Wielkanocy. Większy popyt na zakwaterowanie w tym okresie oznacza, że ceny są wyższe niż w innych porach roku. Konkluzja jest take, że najlepszym czasem na wizytę jest luty i marzec, kiedy pogoda jest nieco chłodniejsza i suchsza, a ceny nieco niższe.";
    
    const zabytki = document.querySelectorAll(".card > p");
    zabytki[0].innerHTML = "W sercu gwatemalskiej dżungli, otoczone przez gęstą roślinność leży jedno z ważniejszych miast cywilizacji Majów. W centrum ceremonialnym znajdują się wspaniałe świątynie i pałace, a także place, do których można się dostać za pomocą ramp. Tikal jest największym i prawdopodobnie najstarszym miastem Majów, jako że jego historia się dziesiątego wieku p.n.e. Jeśli masz ochotę na wyprawę wgłąb dżungli w poszukiwaniu starożytnych świątyń, Tikal jest miejscem dla Ciebie.";
    zabytki[1].innerHTML = "Tulum położone w południowo-wschodnim Meksyku, było ostatnie wielkim miastem zbudowanym i zamieszkałym przez Majów pomiędzy trzynastym i piętnastm wiekiem. Największym atutem tego miejsca jest jego lokacja. Miasto zostało zbudowane na urwisku z widokiem na wschodzące słońce i jest jedyną osadą majów leżącą na plażach Karaibów. Dzięki temu Tulum stało się ważnym ośrodkiem handlowym imperium. Do dnia dzisiejszego zachowały się liczne budynki, rozłożone na zadbanych trawnikach i klifach. Ruiny te znajdują się w południowo-wschodnim Meksyku, około 125km od miasta Cancún. Te dwa miejsca są ze sobą dobrze połączone, więc dotarcie do tych niesamowitych ruin nie powinno być dużym problemem. Jeśli szukasz pięknego miejsca na wakacje lub okazji do poznania kultury i historii Majów, Tulum jest idealną destynacją.";
    zabytki[2].innerHTML = "Palenque leży na porośniętych lasem wyżynach południowego Meksyku. Miasto swoją historią sięga 700 roku p.n.e. Z badań wynika, że była to nekropolia i miejsce sakralne. Miasto to było niegdyś jednym z najważniejszych miast Majów. Jego populacja sięgąła nawey miliona mieszkańców, co ostatecznie było przyczyną jego upadku - okoliczne surowce nie były w stanie wszystkich wyżywić ludzi. Pomimo tego, że udostępniona do zwiedzania przestrzeń jest dość mała, wyjątkowość scenerii, zachowana sztuka Majów i skarby znajdujące się w grobowcach wyróżniają ruiny Palanque spomiędzy innych.";
    zabytki[3].innerHTML = "Wiekowe ruiny Chichén Itzá śa bez wątpienia jednym z najsłynniejszych zabytków archeologicznych Meksyku, a nawet świata. Miasto zostało wybudowane około 8 wieku n.e. i szybko stało się gospodarczym centrum regioniu. Ruiny zostały wpisane na listę Nowym 7 Cudów Świata. Historia drzemiąca w tych ruinach, świadectwo zaawansowanie technologicznego Majów i łatwy dostęp do pobliskich miast jak Cancún i Playa del Carmen robią z Chichén Itzá idealne miejsce do odwiedzenia.";
    zabytki[4].innerHTML = "Yaxchilán jest prawdziwym zaginionym miastem ciągle otoczonym przez gęstą roślinność. Ruiny są położone głęboko w dżungli Lacandón, przez co jedynym sposobem by się do niego dostać jest przeprawienie się przez rzekę przy użyciu łodzi. Na miejscu można odnaleźć imponujące ruiny pałaców i świątyń. Yaxchilán jest znany z dużej ilości rzeźb - monolitów oraz płaskorzeźb wykonanych na drzwiach świątyń.";
    zabytki[5].innerHTML = "Uxmal było niegdyś jednym z najważniejszych i najpotężniejszych z miast całego imperium Majów. Jego budowa rozpoczęła się pomiędzy siódmym a dziewiątym wiekiem, u swojego szczytu potęgi zamieszkiwało je około 25 tysięcy ludzi. W momencie odkrycia przez konkwistadorów było opuszczone i nie stanowiło dla nich większej wartości, dlatego też nie zniczyli miasta. Dzięki temu architektura tego miejsca i kompleksy budynków zachowały się w niemal idealnym stanie. Dzisiaj, te niesamowite ruiny pozwalają turystom zrozumieć styl życia starożytnych ludzi.";
    zabytki[6].innerHTML = "Edzná to ruiny miasta Maj w północnej części meksykańskiego stanu Campeche. <br><br>Najbardziej niezwykłą budowlą w tym miejscu jest główna świątynia znajdująca się na placu. Zbudowana na platformie o wysokości 40 m zapewnia szeroki widok na okolicę. <br><br>Innym znaczącym budynkiem znajdującym się na placu jest boisko do piłki nożnej. Boisko do piłki tworzą dwie równoległe struktury. Górne pomieszczenia boiska były prawdopodobnie używane do przechowywania wizerunków bogów związanych z wydarzeniami, wraz z przedmiotami potrzebnymi do gry.";
    zabytki[7].innerHTML = "Nie trzeba podróżować na drugi koniec świata by poznać świat cywilizacji prekolumbijskich. British Museum w Londynie jest w posiadaniu imponującej kolekcji rzeźb, sztuki Majów.";
    
    const zabytkiDiv = document.querySelectorAll(".zabytki_div_text_div > p");
    zabytkiDiv[0].innerHTML = "W sercu gwatemalskiej dżungli, otoczone przez gęstą roślinność leży jedno z ważniejszych miast cywilizacji Majów. W centrum ceremonialnym znajdują się wspaniałe świątynie i pałace, a także place, do których można się dostać za pomocą ramp. Tikal jest największym i prawdopodobnie najstarszym miastem Majów, jako że jego historia się dziesiątego wieku p.n.e. Jeśli masz ochotę na wyprawę wgłąb dżungli w poszukiwaniu starożytnych świątyń, Tikal jest miejscem dla Ciebie.";
    zabytkiDiv[1].innerHTML = "Tulum położone w południowo-wschodnim Meksyku, było ostatnie wielkim miastem zbudowanym i zamieszkałym przez Majów pomiędzy trzynastym i piętnastm wiekiem. Największym atutem tego miejsca jest jego lokacja. Miasto zostało zbudowane na urwisku z widokiem na wschodzące słońce i jest jedyną osadą majów leżącą na plażach Karaibów. Dzięki temu Tulum stało się ważnym ośrodkiem handlowym imperium. Do dnia dzisiejszego zachowały się liczne budynki, rozłożone na zadbanych trawnikach i klifach. Ruiny te znajdują się w południowo-wschodnim Meksyku, około 125km od miasta Cancún. Te dwa miejsca są ze sobą dobrze połączone, więc dotarcie do tych niesamowitych ruin nie powinno być dużym problemem. Jeśli szukasz pięknego miejsca na wakacje lub okazji do poznania kultury i historii Majów, Tulum jest idealną destynacją.";
    zabytkiDiv[2].innerHTML = "Palenque leży na porośniętych lasem wyżynach południowego Meksyku. Miasto swoją historią sięga 700 roku p.n.e. Z badań wynika, że była to nekropolia i miejsce sakralne. Miasto to było niegdyś jednym z najważniejszych miast Majów. Jego populacja sięgąła nawey miliona mieszkańców, co ostatecznie było przyczyną jego upadku - okoliczne surowce nie były w stanie wszystkich wyżywić ludzi. Pomimo tego, że udostępniona do zwiedzania przestrzeń jest dość mała, wyjątkowość scenerii, zachowana sztuka Majów i skarby znajdujące się w grobowcach wyróżniają ruiny Palanque spomiędzy innych.";
    zabytkiDiv[3].innerHTML = "Wiekowe ruiny Chichén Itzá śa bez wątpienia jednym z najsłynniejszych zabytków archeologicznych Meksyku, a nawet świata. Miasto zostało wybudowane około 8 wieku n.e. i szybko stało się gospodarczym centrum regioniu. Ruiny zostały wpisane na listę Nowym 7 Cudów Świata. Historia drzemiąca w tych ruinach, świadectwo zaawansowanie technologicznego Majów i łatwy dostęp do pobliskich miast jak Cancún i Playa del Carmen robią z Chichén Itzá idealne miejsce do odwiedzenia.";
    zabytkiDiv[4].innerHTML = "Yaxchilán jest prawdziwym zaginionym miastem ciągle otoczonym przez gęstą roślinność. Ruiny są położone głęboko w dżungli Lacandón, przez co jedynym sposobem by się do niego dostać jest przeprawienie się przez rzekę przy użyciu łodzi. Na miejscu można odnaleźć imponujące ruiny pałaców i świątyń. Yaxchilán jest znany z dużej ilości rzeźb - monolitów oraz płaskorzeźb wykonanych na drzwiach świątyń.";
    zabytkiDiv[5].innerHTML = "Uxmal było niegdyś jednym z najważniejszych i najpotężniejszych z miast całego imperium Majów. Jego budowa rozpoczęła się pomiędzy siódmym a dziewiątym wiekiem, u swojego szczytu potęgi zamieszkiwało je około 25 tysięcy ludzi. W momencie odkrycia przez konkwistadorów było opuszczone i nie stanowiło dla nich większej wartości, dlatego też nie zniczyli miasta. Dzięki temu architektura tego miejsca i kompleksy budynków zachowały się w niemal idealnym stanie. Dzisiaj, te niesamowite ruiny pozwalają turystom zrozumieć styl życia starożytnych ludzi.";
    zabytkiDiv[6].innerHTML = "Edzná to ruiny miasta Maj w północnej części meksykańskiego stanu Campeche. <br><br>Najbardziej niezwykłą budowlą w tym miejscu jest główna świątynia znajdująca się na placu. Zbudowana na platformie o wysokości 40 m zapewnia szeroki widok na okolicę. <br><br>Innym znaczącym budynkiem znajdującym się na placu jest boisko do piłki nożnej. Boisko do piłki tworzą dwie równoległe struktury. Górne pomieszczenia boiska były prawdopodobnie używane do przechowywania wizerunków bogów związanych z wydarzeniami, wraz z przedmiotami potrzebnymi do gry.";
    zabytkiDiv[7].innerHTML = "Nie trzeba podróżować na drugi koniec świata by poznać świat cywilizacji prekolumbijskich. British Museum w Londynie jest w posiadaniu imponującej kolekcji rzeźb, sztuki Majów.";
    
    document.querySelectorAll("div > button").forEach(element => {
        element.innerHTML = "Zobacz więcej";
    });
});