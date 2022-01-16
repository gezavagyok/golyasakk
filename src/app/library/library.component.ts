import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  booksToRent: Book[] = [
      this.createBook("assets/img/megnyitasokkonyve.png", "Kállai Gábor", "Megnyitások könyve", "Nyílt és zárt megnyitásokról szóló könyv, 100 oldalon taglal, sok megnyitást és a hozzájuk kapcsolódó lehetőségeket."),
      this.createBook("assets/img/sakktaktikatitka.png","Pongó István", "A sakk taktika titkai", "1986-os könyv, taktikai feladványokkal. Edzésekhez hasznos lehet"),
      this.createBook("assets/img/ezeregyfeladatkezdosakkozoknak.png","Honfi György", "1001 feladat kezdő sakkozóknak", "A cím nem hazudik, valóban ez található a könyvben."),
      this.createBook("/assets/img/orokossakkban.png","Bilek István", "Örökös sakkban", "Önéletrajz és játszmagyűjtemény Bilek Istán nemzetközi nagymesterről."),
      this.createBook("assets/img/portischlajos.png","Hajtun József", "Portisch nagymester", "Portisch Lajos életét ismerhetjük meg, játszmáival együtt"),
      this.createBook("assets/img/neolj.png","Polgár László", "Ne ölj!", "A 9/11-es eseményekre reflektál a szerző, erősen amerikai patrióta szerepet felvéve, idézeteket, sakkfeladványokat tartalmaz a könyv."),
      this.createBook("assets/img/minisakk.png","Polgár László", "Minisakk, 777+1 hadállás", "Joseph Miccio találmánya a 6x5-ös táblán játszott sakk volt. A könyv tartalmazza a szabályokat és a címnek megfelelő mennyiségű feladványt. "),
      this.createBook("assets/img/feher.png","Polgár László", "Fehér", "A nem túl woke cím miniatűr játékokat takar, illetve a csillagsakk rejtelmeibe is bevezet"),
      this.createBook("assets/img/esperantoessakk.png","Polgár László", "Eszperantó és sakk", "Az eszperantó nyelv népszerűsítése a sakk által, nem egy hétköznapi gondolat, Polgár László viszont meglépte. Inkább ezoterikus kategóriába sorolnám."),
      this.createBook("assets/img/sakkromantikaja.png","Schneider Attila", "A sakk romantikája", "A 19. század híres sakkozói, a romantikus sakk jegyében játszották partijaikat, ezeket gyűjti össze a könyv. Rövid életrajzokkal, partikkal"),
      this.createBook("assets/img/sakkjatekelemei.png","Asztalos Lajos, Bán Jenő", "A sakkjáték elemei", "A páros könyveit hamar elkapkodták (ha hihetünk az előszónak) viszont 2005-ben újranyomták, így remek segédlet lehet edzésekhez"),
      this.createBook("assets/img/sherlockholmessakkrejtelyei.png","Raymond Smullyan", "Sherlock Holmes sakkrejtélyei", "Az 1979-ben kiadott könyv félig szórakoztató irodalom, félig sakkfeladvány kategóriában indul, olyan mint egy kezdetleges szerepjáték könyv."),
      this.createBook("assets/img/ezustvezer.png","Ivánka Mária", "Ezüstvezér", "Fénykorában a női világranglista 6. helyén állt, aztán 2000-ben könyvet írt Ivánka Mária női sakknagymester. Az életéről, játszmáiról szól, képekkel. "),
      this.createBook("assets/img/harmincharomsakklecke.png","Alföldi László", "33 sakk lecke", "1978-as könyv, edzésekhez nyújt segítséget olyan témák alapján, mint a centrum, gyaloglánc, stb."),
      this.createBook("assets/img/nebizdaveletlenre.png","Bruce Pandolfini", "Ne bízd a véletlenre!", "A szerző wall streeti brókernek tanult és a sakk és az üzleti élet kapcsolatait boncolgatja. A bevezető alapján nem túl jó könyv, kár volt a fákért :( "),
      this.createBook("assets/img/kombinationen.png","Paul Tibor", "Kombinationen, lernen und lehren", "Sakkfeladványok valós játszmák alapján, megoldással. Az előszó németül van, tolmácsot kérek..."),
      this.createBook("assets/img/sakkozogondolkodadasnaktitka.png","Alexandr Alexandrovics Kotov", "A sakkozó gondolkodásának titkai", "Saját játszmák elemzése van benne, 1974-ben jelent meg a könyv, betekintést ad a szovjet sakktudományba"),
      this.createBook("assets/img/igysakkoztakok.png","Papp Márió", "Így sakkoztak ők", "Híres személyek sakkjátékai, képekkel, elemzéssel. Inkább érdekesség, mint tanulási segédlet"),
  ];

  createBook(img: string, auth: string, title: string, description: string): Book {
    return { 
      author: auth,
      title: title,
      available: "Igen",
      whoBroughtItHome: " - ",
      description: description,
      img: img
    }
  }

  displayedColumns = ["Kép", "Szerző", "Cím", "Elérhető?", "Kinél van?", "Leírás"]

  constructor() { }

  ngOnInit(): void {
  }

}
