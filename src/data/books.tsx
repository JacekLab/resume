import React from "react";
import { BookInterface } from "../types/index";

const MY_LIBRARY: Array<BookInterface> = [
  {
    id: 1,
    title: "Dizajn na co dzień",
    authorName: "Don",
    authorSurname: "Norman",
    cover: "design-na-codzien.jpg",
    pages: 367,
    format: "XL",
    editor: "Karakter",
    status: "Being read",
    genre: "Design",
    topic: ["Design", "Psychology", "Cognition"],
    brief_pl: (
      <p>
        Podręcznik dobrego projektowania nasycony konkretną wiedzą. Bardzo solidna dawka
        przydatnych informacji dla dizajnerów
      </p>
    ),
    brief_en: (
      <p>
        A classic book on design written by a father of usability and human center design.
        Very inquisitive and passionate lecture. A deep dive into human cognition and
        psychology. A book not only about the way we perceive design, but also how good
        design should be created.
      </p>
    ),
  },
  {
    id: 2,
    title: "Bystre Zwierzę",
    authorName: "Frans",
    authorSurname: "de Wall",
    cover: "bystre-zwierze.jpg",
    pages: 434,
    format: "M",
    editor: "Copernicus Center",
    status: "Read",
    genre: "Design",
    topic: ["Primatology", "Cognition", "Nature"],
    brief_pl: null,
    brief_en: (
      <p>
        A scientist and primatologist takes off for a journey through different species,
        showing off how wise they can be. An open mind of the author gives us insights in
        the world that is far richer that we usually think.
      </p>
    ),
  },
  {
    id: 3,
    title: "Miasto Archipelag. Polska mniejszych miast.",
    authorName: "Filip",
    authorSurname: "Springer",
    cover: "miasto-archipelag.jpg",
    pages: 316,
    format: "L",
    editor: "Karakter",
    status: "Read",
    genre: "Reportage",
    topic: ["Poland", "History", "Society"],
    brief_pl: <p>Fascynujący reportaż o współczesnej Polsce</p>,
    brief_en: (
      <p>
        A reportage that guides through Polish cities, once capitals of ex-voivodeship.
        Most of them has economically declined and greyed out. Springer enrolls dozens of
        small stories with his elegant and light style. All of them create archipelago, a
        big picture of those small islands scattered across the map of Poland.
      </p>
    ),
  },
  {
    id: 3,
    title: "Miasto Archipelag. Polska mniejszych miast.",
    authorName: "Filip",
    authorSurname: "Springer",
    cover: "miasto-archipelag.jpg",
    pages: 316,
    format: "XL",
    editor: "Karakter",
    status: "Read",
    genre: "Reportage",
    topic: ["Poland", "History", "Society"],
    brief_pl: <p>Fascynujący reportaż o współczesnej Polsce</p>,
    brief_en: (
      <p>
        A reportage that guides through Polish cities, once capitals of ex-voivodeship.
        Most of them has economically declined and greyed out. Springer enrolls dozens of
        stories with his elegant and light style. All of them create archipelago, a
        picture of those small islands scattered across the map of Poland.
      </p>
    ),
  },
  {
    id: 4,
    title: "Kolor. Kurs dla artystów i projektantów.",
    authorName: "David",
    authorSurname: "Hornung",
    cover: "kolor-hornung.jpg",
    pages: 167,
    format: "M",
    editor: "Universitas",
    status: "Being read",
    genre: "Design",
    topic: ["Art", "Design", "Color"],
    brief_pl: null,
    brief_en: (
      <p>
        A classic book that brings all the current knowledge about color and applies it
        into practical design implementation.
      </p>
    ),
  },
  {
    id: 5,
    title: "Sapiens. Od zwierząt do bogów.",
    authorName: "Juval Noah",
    authorSurname: "Harari",
    cover: "sapiens.jpg",
    pages: 539,
    format: "M",
    editor: "Wydawnicto literackie",
    status: "Read",
    genre: "Popular science",
    topic: ["Prehistory", "History", "Anthropology"],
    brief_pl: null,
    brief_en: <p>Facinating journey throughout history of homo sapiens.</p>,
  },
  {
    id: 6,
    title: "Wędrujący świat",
    authorName: "Grzegorz",
    authorSurname: " Kołodko",
    cover: "wedrujacy-swiat.jpg",
    pages: 440,
    format: "XL",
    editor: "Prószyński Media",
    status: "Read",
    genre: "Popular science",
    topic: ["Economy", "Society", "Polictics"],
    brief_pl: (
      <p>
        Świetna popularnonaukowa książka dla tych, którzy potrzebują dobrego przewodnika w
        skomplikowanym świecie współczesnej gospodarki. Wieloaspektowe podejście, nie
        tylko z perspektywy ekonomicznej.,
      </p>
    ),
    brief_en: (
      <p>
        Great book that puts in a simple language a hectic world of economy, politics and
        sociology. Written by economist, but not only for exonomist. After the lecture, a
        reader has an overview on complex processess that takes place in modern world.
      </p>
    ),
  },
  {
    id: 7,
    title: "Daleko",
    authorName: "Magdalena",
    authorSurname: "Gołębiowska",
    cover: "daleko.jpg",
    pages: 211,
    format: "S",
    editor: "Czarne",
    status: "Read",
    genre: "Reportage",
    topic: ["Culture", "History", "Nepal", "Tibet"],
    brief_pl: (
      <p>
        Opowieść o dalekim krańcu świata, kiedyś nietkniętym kulturą współczesnej
        cywilizacji, jednak obecnie stopniowo coraz bardziej przez nią pochłanianym
      </p>
    ),
    brief_en: (
      <p>
        The sotry about the forgotten world that only few decades ago was completely
        untouched by western civilisation. Himalayan peaks ocovered with snow an ancient
        culture intertwined with cheap chinese TV&apos;s where Indian bolywood films now
        teach the people what the modern human should be like
      </p>
    ),
  },
  {
    id: 8,
    title: "Duchowe życie zwierząt",
    authorName: "Peter",
    authorSurname: "Wohlleben",
    cover: "duchowe-zycie-zwierzat.jpg",
    pages: 264,
    format: "M",
    editor: "Otwarte",
    status: "Read",
    genre: "Popular science",
    topic: ["Nature", "Animals", "Cognition"],
    brief_pl: (
      <p>
        Anegdotyczna książka, nieco mniej fascynująca od &quot;Sekretnego życia
        drzew&quot; tego samego autora, ale wciąż ciekawa i przyjemna lektura
      </p>
    ),
    brief_en: (
      <p>
        Lots of anecdotes about animal intelligence. Amongst many others we&apos;ll meet
        here a lying cock, smart bees and socially supportive horses.
      </p>
    ),
  },
  {
    id: 9,
    title: "Zapisany w kręgach",
    authorName: "Marek",
    authorSurname: "Raganowicz",
    cover: "zapisany-w-kregach.jpg",
    pages: 399,
    format: "M",
    editor: "Góry Books",
    status: "Read",
    genre: "Autobiography",
    topic: ["Mountains", "Climbing"],
    brief_pl: (
      <p>
        Wspinaczkowe życie Marka Raganowicza i podróż przez kilkadziesiąt lat polskiego
        wspinania - Tatry, Alpy, Himalaje.
      </p>
    ),
    brief_en: (
      <p>
        A climbing life of Marek Raganowicz - a story of a man, but also a story of a
        climbing communicty in Poland, a story of Poland itself, from the 70&apos;s till
        today. Great read.
      </p>
    ),
  },
  {
    id: 10,
    title: "Robert Doisneau",
    authorName: "Jean-Claude",
    authorSurname: "Gautrand",
    cover: "robert-doisneau.jpg",
    pages: 191,
    format: "S",
    editor: "Taschen",
    status: "Read",
    genre: "Photography",
    topic: ["Life and art of Robert Doisneasu", "HIstory of Photography"],
    brief_pl: (
      <p>
        Doisneau potrafi zaczarować wieczór. Przeglądanie jego fotografii to wejście w
        równoległy świat, w którym emocje, mimo upływu czasu, są wciąż żywe
      </p>
    ),
    brief_en: (
      <p>
        True artist that depicts unique moments in a unique way. Also a warmhearted person
        gifted with a great sensitivity that results in emotional on black & white
        photography.
      </p>
    ),
  },
  {
    id: 11,
    title: "Dokąd zmierza świat",
    authorName: "Grzegorz",
    authorSurname: "Kołodko",
    cover: "dokad-zmierza-swiat.jpg",
    pages: 447,
    format: "XL",
    editor: "Prószyński i S-ka",
    status: "Read",
    genre: "Popular science",
    topic: ["Futurology", "Economy", "Society"],
    brief_pl: (
      <p>
        Synteza, która pozwala się zorientować w skomplikowanej codzienności. Po
        przeczytaniu tej książki poczułem, że nieco lepiej rozumiem historyczny moment, w
        którym jestem. To co się na niego złożyło, i co z niego może wyniknąć dla
        przyszłości.
      </p>
    ),
    brief_en: (
      <p>
        A synthesis of modern times and a very brave try to predict the paths the world
        could go in the future. Very rich in details, scientific and reliable.
      </p>
    ),
  },
  {
    id: 12,
    title: "Kolor i znaczenie",
    authorName: "John",
    authorSurname: "Gage",
    cover: "kolor-i-znaczenie.jpg",
    pages: 319,
    format: "M",
    editor: "Universitas",
    status: "Want to read",
    genre: "Manual",
    topic: ["Art", "Science"],
    brief_pl: null,
    brief_en: null,
  },
  {
    id: 13,
    title: "Chiński maharadża",
    authorName: "Wojtek",
    authorSurname: "Kurtyka",
    cover: "chinski-maharadza.jpg",
    pages: 130,
    format: "S",
    editor: "Góry Books",
    status: "Read",
    genre: "Novel",
    topic: ["Climbing", "Wojtek Kurtyka"],
    brief_pl: null,
    brief_en: (
      <p>
        Extraordinary book writte in great style. A story of free soloing super-hard sport
        climbing route by the author, as well as many other things happenning in
        Wojtek&apos;s life at that time.
      </p>
    ),
  },
  {
    id: 14,
    title: "Genesis",
    authorName: "Sebastião",
    authorSurname: "Salgado",
    cover: "genesis.jpg",
    pages: 520,
    format: "XL",
    editor: "Taschen",
    status: "Read",
    genre: "Photography",
    topic: ["Nature", "Wild places"],
    brief_pl: null,
    brief_en: (
      <p>
        A concept of depicting the most wild and untouched places on earth came to Salgado
        after decades he committed to photographing wars, poverty and inequaity across the
        world. It took him several years to complete and helped to recover from traumas.
      </p>
    ),
  },
  {
    id: 15,
    title: "Baron drzewołaz",
    authorName: "Italo",
    authorSurname: "Calvino",
    cover: "baron-drzewolaz.jpg",
    pages: 324,
    format: "S",
    editor: "Cyklady",
    status: "Read",
    genre: "Novel",
    topic: ["Freedom of an individual", "Reneissance Italy"],
    brief_pl: (
      <p>
        Opowieść wyrażająca niezwykłą potrzebę wolności i ukazująca nietuzinnkową
        wyobraźnię autora
      </p>
    ),
    brief_en: (
      <p>
        A perfect novel that has everything I look for in a literature. It is wise,
        amusing, unconventional and written with unprecedented style. Author is a Italian
        writter, a Nobel Prize winner.
      </p>
    ),
  },
  {
    id: 17,
    title: "Sekretne życie drzew",
    authorName: "Peter",
    authorSurname: "Wohlleben",
    cover: "sekretne-zycie-drzew.jpg",
    pages: 249,
    format: "M",
    editor: "Otwarte",
    status: "Read",
    genre: "Popular science",
    topic: ["Nature", "Trees"],
    brief_pl: <p>Opowieść o świecie roślin i ich niezwykłych zdolnościach</p>,
    brief_en: (
      <p>
        Lots of anecdotes about intelligence hidden in the silent creatures that human
        probably tends to underestimate.
      </p>
    ),
  },
  {
    id: 18,
    title: "Milczący Lama",
    authorName: "Albert",
    authorSurname: "Jawłowski",
    cover: "milczacy-lama.jpg",
    pages: 290,
    format: "S",
    editor: "Czarne",
    status: "Read",
    genre: "Reportage",
    topic: ["History", "Buryatia", "Buddhism"],
    brief_pl: (
      <p>
        Reportaż z odległej krainy. Co ma ze sobą wspólnego Buriacja, buddyzm,
        nieśmiertelność i polityka wielkiego mocarstwa?
      </p>
    ),
    brief_en: (
      <p>
        The main plot, a body of monk that for some reason denied to decompose, is a
        background of this story. Though seems to be the most important in the book, in
        fact it is a story of a culture, society and politics in a distant country of
        Buryatia.
      </p>
    ),
  },
  {
    id: 19,
    title: "Góry we mnie. Wspinaczka na krawędzi.",
    authorName: "Alexander",
    authorSurname: "Huber",
    cover: "gory-we-mnie.jpg",
    pages: 219,
    format: "S",
    editor: "Stapis",
    status: "Read",
    genre: "Autobiography",
    topic: ["Mountains", "Climbing"],
    brief_pl: null,
    brief_en: (
      <p>
        A story of Alex Huber and his incredible achievements. His extraordinary
        motivation lead him to become one of the best and most versatile climbers in the
        world.
      </p>
    ),
  },
];

export default MY_LIBRARY;
