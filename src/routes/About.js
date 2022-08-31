import styled from "styled-components";
import GoToTop from "../components/GoToTop";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./about.css";
import { ReactComponent as SpeakerPaused } from "../assets/headgreen.svg";
import mapNI from "../assets/map-NI-red-spots-sequence.webp";
import mapSI from "../assets/map-SI-red-spots-sequence.webp";
import cover1 from "../assets/cover-part-1.webp";
import cover2 from "../assets/cover-part-2.webp";
import cover3 from "../assets/cover-part-3.webp";

const TOC = styled.div`
  margin: 20px;
  background-color: white;
  font-size: 1.2rem;
  > ul > li > a,
  > ul > li > ul > li > a {
    text-decoration: none;
    color: black;
  }
`;

const StandardImg = styled.img`
  max-height: 250px;
`;

const About = () => {
  return (
    <>
      <main style={{ padding: "10px" }}>
        <TOC>
          <strong>Table of Contents</strong>
          <ul>
            <li>
              <a href={"#about"}>About | Mō “Ngā Ingoa o Aotearoa”</a>
              <ul>
                <li>
                  <a href="#outline">Outline | Whakamārama poto</a>
                </li>
                <li>
                  <a href="#howto">
                    How to use the dictionary | Me pehea te whakamahi i te
                    papakupu
                  </a>
                </li>
                <li>
                  <a href="#conventions">
                    Conventions | Ngā Tikanga o tēnei Papakupu
                  </a>
                </li>
                <li>
                  <a href="#zones">About the Zones | Mō ngā Takiwā</a>
                </li>
                <li>
                  <a href="#structure">Structure | Te whakatakotoranga</a>
                </li>
                <li>
                  <a href="#journey">My Journeys | Ōku Haererenga</a>
                </li>
                <li>
                  <a href="#technical">Technical | Te Hangarau</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#thanks">Thanks | Ngā whakamihi</a>
              <ul>
                <li>
                  <a href="#thanks1">Part 1: Te Upoko o te Ika</a>
                </li>
                <li>
                  <a href="#thanks2">Part 2: Te Hiku o te Ika</a>
                </li>
                <li>
                  <a href="#thanks3">
                    Part 3, Ka Ikoa o Te Waipounamu me Wharekauri (Rēkōhu)
                  </a>
                </li>
                <li>
                  <a href="#website">This Website | Tēnei Pae tukutuku</a>
                </li>
              </ul>
            </li>
          </ul>
        </TOC>
        <h1 id="about">About | Mō “Ngā Ingoa o Aotearoa”</h1>
        <h3 id="outline"> Outline | Whakamārama poto</h3>
        <p>
          “Ngā Ingoa o Aotearoa” (The Names of New Zealand) is literally a
          "pronouncing dictionary". More than 8000 names were spoken into a
          recorder in 1984-94 by 132 native speakers of te reo Māori, chosen by
          each other as the best speakers for their areas. Because they say only
          the names of their own areas, local accents are automatically
          accommodated.
        </p>
        <p>
          Mainly elders, most of the speakers are no longer with us. Their
          voices are taonga tuku iho, treasures handed down to us. Please
          respect them.
        </p>
        <p>
          The speakers all gave of their knowledge and voices on the strict
          understanding that they should not be used for profit. In releasing
          this site to the public, I can only trust to your honour that their
          wish be respected.
        </p>
        <p>
          The dictionary was intended especially for broadcasters and those who
          have to speak in public, but everyone who wants to pronounce
          placenames authentically will find it valuable.
        </p>
        <h3 id={"howto"}>
          How to use the dictionary | Me pehea te whakamahi i te papakupu
        </h3>
        <ol>
          <li>
            Click on the map where the place is, or type it into the box
            provided. (The maps do not appear on small screens.) The names are
            sorted into 177 clearly defined "Zones” (takiwā). A Zone name will
            appear below the box.
          </li>
          <li>
            Click on the Zone to open an alphabetical list of the names in it.
          </li>
          <li>
            If the name has a koruru&nbsp;
            <SpeakerPaused style={{ height: "1.25rem" }} /> beside it, click on
            that or the name to hear it spoken.
          </li>
          <li>
            Click on “Show more | Whakakitea atu” to the right of the basic
            information to bring down a box with further background, including
            associated names, such as the wharenui and wharekai on a marae.
          </li>
          <li>
            The speaker's name will appear in a popup. (Typing a speaker's name
            into the box will open every track in which that speaker's voice is
            heard.)
            {/*Click on a speaker's name at the head of the list for more*/}
            {/*information about the speaker.*/}
          </li>
        </ol>
        <h3 id={"conventions"}>Conventions | Ngā Tikanga o tēnei Papakupu</h3>
        <p>
          The speaker's voices are the prime authority. The written names follow
          them and/or the conventions of the time so far as capitalisation,
          spacing, hyphens etc. go. (Macrons were not commonplace in 1984-94 and
          have been added.) Where the NZ Gazetteer differs, this may be noted.
        </p>
        <p>
          In Whanganui and Taranaki, in words where h and wh are not aspirated,
          the h (or H) has been superscripted in the text. How this sounds
          varies between regions, between speakers, and by context. (For
          example, in Patea/Hawera “Hawera” vs “Te Hawera” for the same place.)
          Capitalisation of superscript h follows the usual convention, not any
          distinction of pronunciation.)
        </p>
        <p>
          In Te Wai Pounamu, the k that is written and spoken corresponding to
          ng in the north has been italicised, as in kaika; kainga in the north.
          (It was unmarked in 1991. There was a move to underline it in the
          1990s, but this seems to have faded, perhaps because it does not
          apparently affect pronunciation.) In the same way, the southern l that
          stands in for northern r, and g for ng/k, have been italicised. (This
          has nothing to do with the Southland prounciation of r, by the way.)
          Only one speaker, Huata Holmes, wanted the g written, though it occurs
          in Anglicised Māori words such as Kilmog, matagouri and Otago.
        </p>
        <h3 id={"zones"}>About the Zones | Mō ngā Takiwā</h3>
        <Zoom>
          <StandardImg src={mapNI} />
        </Zoom>
        <Zoom>
          <StandardImg src={mapSI} />
        </Zoom>
        <p></p>
        <p>
          They meander up the centre, west and east of the lower North Island;
          then the east, west and centre of the upper North Island; then down
          and clockwise around the South Island.
        </p>
        <p>
          The Zones do not claim to correspond to rohe-a-iwi, but there is often
          a rough alignment because of the speakers' whakapapa.
        </p>
        <p>
          The lists include geographic features down to the larger hills and
          streams, all human settlements, suburbs and schools, marae, meeting
          houses and dining halls and many other features. It does not include
          names conferred since 1994, such as Government departments or new
          buildings. It does not give the names' meanings. That would have taken
          more than a lifetime, and would be done better by tangata whenua in
          each area.
        </p>
        <h3 id="structure">Structure | Te whakatakotoranga</h3>
        <p>
          The dictionary was originally recorded in three parts:
          <ul>
            <li>
              Part 1: Te Upoko o te Ika (Wellington, Manawatu, Rangitikei,
              Taupo, Whanganui, Taranaki, Wairarapa, Hawkes Bay, East Coast,
              Urewera - south of a line running from the mouth of the Tarawera
              river, north of Lake Taupo, to the mouth of the Mokau river.); 59
              Zones, 2700 names, 50 speakers (4 women), , recorded October -
              November 1984, funded by a Bill Toft Memorial grant, 4000 km
              approx. travelled, launched May 1985.
            </li>
            <li>
              Part 2: Te Hiku o te Ika (Bay of Plenty, Coromandel, Hauraki, King
              Country, Waikato, Auckland, Northland, Overseas- north of a line
              running from the mouth of the Tarawera river, north of Lake Taupo,
              to the mouth of the Mokau river.); 80 Zones, 3300 names, 59
              speakers (12 women), recorded 1986-90 14,000 km approx. travelled,
              launched April 1991.
            </li>
            <li>
              Part 3: Te Wai Pounamu (Nelson, Marlborough, Canterbury, Otago,
              Southern Lakes, Southland, Southern Islands, Fiordland, West
              Coast, Chatham Islands); 38 Zones, 2000 names, 23 speakers (5
              women), recorded November 1992 - April 1993, funded by the NZ
              Lottery Board Heritage Fund and the Pacific Conservation and
              Development Trust, 5000 km approx. travelled, launched November
              1994.
            </li>
          </ul>
        </p>
        <p>
          To a large extent, the parts have been merged to create this website,
          and the numbering of the zones – crucial to finding places on the
          cassettes and CDs - backgrounded.
        </p>
        <h3 id={"journey"}>My Journeys | Ōku Haererenga</h3>
        <p>
          The first germ of the dictionary was planted in 1977, when as
          Journalist in Charge at Radio Gisborne, I asked Heni Sunderland to
          record a list of local placenames for the use of announcers. Then as a
          producer with Radio New Zealand Special Projects in 1983 I organised
          three half-day hui at Te Herenga Waka marae, Victoria University of
          Wellington, for weather forecasters to learn the pronunciations of the
          handful of Māori names then in use in forecasts, and issued them with
          cassettes of authentic pronunciations, by John Rangihau and others.
        </p>
        <p>
          That same year I applied for a Bill Toft memorial grant to record the
          names of the whole country, but was turned down. The following year my
          application was accepted. (Within seconds of the presentation, a
          non-speaker of te reo began lecturing me about the correct
          pronuncation of Whanganui. Far too much ink has been spilt and voices
          raised over the “correct” pronunciation of wh everywhere. For
          non-speakers of te reo a soft f will suffice and cannot change the
          meaning. For those who care more, I recommend following the speakers
          here.)
        </p>
        <p>
          With no Internet or online Gazetteer, I gathered names from wherever I
          could, beginning with the AA Road Map. This means it will be short on
          the names of places far from roads, and the coverage of minor names
          will be scattershot. The speakers themselves were invaluable in adding
          to the lists. Their memories and my understanding may have been faulty
          in associating marae, wharenui and wharekai, and the only guidebook
          was John Cresswell's 1977 “Maori Meeting Houses of the North Island”.
          Many houses have opened and others fallen into disuse since these
          recordings were made. Since the dictionary was aimed at radio
          announcers, these names were originally meant to be secondary to
          geographic features, but the speakers were determined that they should
          be comprehensive.
        </p>
        <p>
          I typed the first part at home on an electric typewriter, and the
          incredibly patient Radio NZ typing pool put up with my micromanagement
          for over a year. They put the lists on to 8" IBM floppy discs.
          (“Placenames” as a name for the files was mistyped early as
          “placements” and that name stuck.) In the first instance, I used
          double vowel orthography (eg Maaori) as I had learnt from Professor
          Bruce Biggs at Auckland University. One potential speaker refused
          point blank to have anything to do with the project if we used them.
          It became clear that - largely under the influence of Professor Tīmoti
          Kāretu at Waikato University - macrons (eg Māori) were going to win
          out, and we searched and replaced all 10 vowels (AA EE II OO UU, aa ee
          ii oo uu) with their macronned equivalents - then searched and
          de-macronned all the wrongly altered English words such as schōl and
          mēting. Creating macrons was a job in itself in those days. Each one
          involved executing a subroutine, or macro, of backspace, half-raise,
          hyphen, half-lower. When I returned to the reluctant speaker with a
          macronised list, he couldn't be happier to be recorded.
        </p>
        <p>
          Before I went out recording, I asked for printouts of the names, but
          invariably more would have to be added on the road. I tried to ensure
          the speakers chose each other. I asked that they have mana and te reo,
          preferably as their first language. In one case of one ideal
          candidate, it was his only language and I couldn't communicate in
          sufficient detail to reach him. I tried to insure that women were
          included, but they often proved reticent, despite being the better
          speakers. One influential contact insisted that only children of her
          late father could say the local names, but none of them spoke te reo.
          In the event she settled for a cousin, who was excellent. Often the
          best speakers were shy, while the less suitable ones pushed themselves
          forward. I learnt much about diplomacy on my travels, and the many
          gentle ways of saying “No.”
        </p>
        <p>
          The first volume was entirely recorded on a portable reel-to-reel
          recorder. From the outset I insisted on using the only stereo recorder
          of Radio NZ Special Projects, when it was free. (Fortunately Special
          Projects, broadcasting in AM, recorded in stereo only occasionally.) I
          knew that the sound quality would be substantially better in stereo,
          even though it was only ever a single voice. I made various short
          forays to southern parts of the North Island, and two big sweeps over
          several days into Wʰanganui, Taranaki, Taupo, the Urewera, East Coast
          and Hawkes Bay.
        </p>
        <p>
          I encountered occasional resistance to the project, sometimes
          explicitly because I was a Pākehā, but mainly enthusiasm and boundless
          hospitality. The blessings and voices of previous speakers melted
          resistance, especially once they included such famous names as John
          Rangihau, Wiremu Parker, Bill Kere Kere, Ruka Broughton, Eruera
          Manuera, Tupi Puriri, and Matenga Baker.
        </p>
        <p>
          I drew the covers of the booklets, the first especially, in day-long
          bursts of creativity, the North Island ones especially including many
          local references.
        </p>
        <Zoom>
          <StandardImg src={cover1} />
        </Zoom>
        <Zoom>
          <StandardImg src={cover2} />
        </Zoom>
        <Zoom>
          <StandardImg src={cover3} />
        </Zoom>
        <p></p>
        <p>
          I can't believe I completed recording and publishing the first parte
          in only 18 monthswhile holding down a full-time job. Itwas launched at
          Takapuwahia Marae by Rino Tirikatene (Snr). I paused the work in
          1985-6 to concentrate on passing the Homosexual Law Reform Act.
        </p>
        <p>
          Without a grant for the second part, I could no longer rely on the
          Radio NZ typing pool, and created the lists at home, teaching myself
          how to use databases, which were relatively new in 1986. (A
          “Superscript” word processor and “Superbase” database in a Commodore
          128 computer.)
        </p>
        <p>
          Most of the second volume was recorded on the Uher portable
          reel-to-reel machine, but at one point north of Auckland it broke down
          and I hired what had once been a top-of-the-line cassette machine, a
          Nakimichi. The sound quality, even though it had Dolby noise
          reduction, was decidedly inferior. I completed the thermal region by
          1988 and presented one copy to Radio NZ in Rotorua. The station
          manager seemed uninterested. I made several long hauls into the King
          Country, Waikato-Hauraki, Auckland and Northland in 1989-1990.
        </p>
        <p>
          Invaluable throughout Tainui was a letter from the secretary to Te
          Arikinui Dame Te Atairangikaahu giving her blessing to the project. I
          especially remember the hospitality of Raureti and Bob Harris of
          Kohukohu, who invited me to stay the night after recording them, help
          myself to breakfast and let myself out in the morning, while they were
          out milking cows and driving the school bus.
        </p>
        <p>
          By the time Part 2 was completed in 1991, Radio NZ was unsupportive
          and this volume was launched discreetly at my home by Bill Kere Kere.
        </p>
        <p>
          My first port of call when I embarked on the South Island was (later
          Sir) Tīpene O'Regan, who immediately referred me to Dr Maarire
          Goodall, and he became a dear friend. He was invaluable, with contacts
          all over Te Waipounamu.
        </p>
        <p>
          I was in Christchurch making my first South Island contacts in 1991
          when I learnt that I had been made redundant from Radio NZ
          (ironically, in part because the Corporation had spent so much
          fighting against Māori radio stations in courts). I determined to
          carry on, and gained two grants through Internal Affairs, from the
          Lottery Grants Board Culture and Heritage fund and the Pacific
          Conservation and Development Trust, which is funded from the French
          Government's grant of $13 million in recognition of (not "compensation
          for") the sinking of the "Rainbow Warrior". Much of that went on a
          Digital Audio Tape (DAT) recorder, and the third volume was entirely
          recorded on it. The improvement in sound quality is evident.
        </p>
        <p>
          I visited the South Island three times altogether, travelling as far
          as Tākaka, Hokitika and Tuatāpere. Again I created the lists at home,
          but this time I transmitted them to Dr Goodall's computer using a
          standalone modem and a precursor of the Internet, a dialup dating
          service called the Meetboard. At 300 Baud (bits/second), that took
          hours, and the issues of encoding and decoding the macrons in ASCII
          were horrendous. The third volume was launched at Tapu te Ranga Marae
          in 1994.
        </p>
        <p>
          The total distance travelled was approximately 23,000 km. The total
          track duration is 6 hours 30 minutes
        </p>
        <p>
          People often said “You should have done this years ago when Mea Te Mea
          was alive.” I'm very glad now that I did do it all those years ago,
          when so many great speakers were alive.
        </p>
        <p>
          It was in the back of my mind, as some kind of science fiction dream,
          that some day one could hear any of the names instantly at the touch
          of a button. I had no idea, when every computer had a room to itself,
          that a man in Rwanda could make that happen for me while we talked, or
          that then anyone in the world could hear those same names at the touch
          of that same button, yet here we are.
        </p>
        <p> - Hugh Young</p>
        <p>
          Hugh Young (Pākehā, Clan Chatten) was born in Christchurch when Māori
          there were almost invisible, and after graduating in Zoology from
          Canterbury University, worked in Auckland, Whāngarei and Gisborne as a
          journalist with the New Zealand Broadcasting Corporation, later Radio
          New Zealand, and then in Wellington as a producer. He began studying
          Māori almost accidentally at Auckland University under Professor Bruce
          Biggs and Merimeri Penfold in 1969, when few Pākehā did, and the
          linguistic and social landscape was very different. A friend, Murray
          Short invited him to Ruātoki and introduced him to Ngāi Tūhoe, John
          Rangihau took him under his wing and he competed at two Tūhoe
          Festivals in the back row of Tūhoe ki Pōneke. He also has a connection
          to Parihaka, unveiling Whatarau Wharehoka's headstone in 1973, and in
          1981 helping prepare for the centenary of te Rā o te Pāhua. As a VSA
          volunteer in Solomon Islands in 1974-6, he co-authored a dictionary
          and grammar of Solomon Islands Pijin. Although has no whakapapa Māori
          himself, he now has mokopuna of Tūhoe, and whanaunga of Ngāti Porou,
          descent.
        </p>
        <h3 id="technical"> Technical | Te Hangarau</h3>
        <p>
          Most of the North Island names were recorded on a Uher Report Monitor
          4200 portable stereo reel-to-reel recorder at 7 ½ in/sec using two
          SM-58 microphones, except for the voice of Hemi Konore, on a Nakimichi
          stereo cassette recorder. The South Island was recorded on a Sony
          TCD-D3 Walkman DAT recorder with a Sony ECM-S220 electret condenser
          stereo microphone. A vertical aspect was included in the microphone
          placement for the benefit of any future vocal analysis.
        </p>
        <p>
          The tapes of Parts 1 and 2 were edited by splicing copies of the
          masters, then copied again – at 15 ips to minimise degradation. The
          digital tapes were roughly edited with two Tascam DA-30 recorders,
          then finely with Mac Protocols. The first three tracks required one
          analogue transcription. The spliced master tapes and the DAT are held
          by Ngā Taonga Sound and Vision. The three parts were issued on pairs
          of cassettes, later on pairs of CDs, with accompanying booklets,
          naming the speakers and defining the places named. They were later
          united into a website, ingoa.nz, searchable only by Zone/takiwā, but
          with some common names playable separately.
        </p>
        <hr />
        <h1 id="thanks">Thanks | Ngā whakamihi</h1>
        <p>
          <i>
            "As teachers, we may and I think should, take care to encourage
            correct pronunciation and spelling of native names, carefully
            pointing out errors which have crept in and are repeated in
            geographies and on maps and choosing the native name, rather than
            the European, where such has been bestowed." - H.P. Young (c. 1923)
          </i>
        </p>
        <p>
          Ko te reo Maori <br />
          he Taonga no Aotearoa
        </p>
        <p>
          The Maori language is <br />a New Zealand heirloom
        </p>
        <p>
          (The three parts were issued separately, in 1985, 1991 and 1994, this
          website uploaded in 2022.)
        </p>
        <h2 id="thanks1">Part 1: Te Upoko o te Ika</h2>
        <h3>ACKNOWLEDGEMENTS</h3>
        <h4>Greeting</h4>
        <p>
          E ngā iwi, e ngā reo, e ngā mana, e ngā ihi, tēnē koutou, tēnā koutou,
          tēnā koutou!
        </p>
        <h4>Farewell</h4>
        <p>
          Tuatahi, kei te maumahara ake ki ētahi o ngā manu kōrero o tēnei mahi,
          arā ki a Pauro Mareikura rāua ko Te Aputa Parata-Kauri. Otirā, ki ā
          rātou kātoa, ki ngā kaumatua ō nanahi ake nei; ki ngā manu tioriori
          kāore I āhei ki te uru mai ki roto i tēnei pukapuka i te rironga
          kētanga ai i te ringa kaha ō aitua: ko Rangi Metekingi, ko Dick
          Himona, ko Eruera rāua ko Amiria Stirling, rātou ko ōku kaumatua
          aroha, a Whatarau Wharehoka, a Wena Rangihau, a Tumanako (Hope)
          Rewiti, a Taare rāua ko Zena Maitai, a Kaare Waaka, a Purewa Biddle, a
          Rori Manihera. Kua riro hoki ētahi o nga kaitautoko ki tenei mahi, a
          Ngoi Pewhairangi, a Kohe Webster, me te tumuaki ō nga wahine kaituhi,
          a Joan Scadden. Haere, e koro ma, e kui ma, haere, haere, haere.
        </p>
        <p>
          Many people contributed to the making of this dictionary. Special
          thanks go to Jack Gardiner and John Craig of Radio New Zealand for
          giving me access to word processing, and to the patient word processor
          operators, Jenny Kearns, Beverly Chin, Nicky Needham, Judi Hobbs,
          Tracey Smith, Jackie Osburn, Lynne Skilton, and perhaps others.
          Without them, the preparation of the lists would not have been
          possible.
        </p>
        <p>
          Then to all the speakers - Tairongo Amoamo, Hikaia Amohia, Derek
          Asher, Matenga Baker, Henry Bird, Ruka Broughton, Rangi Downs, Matawha
          Durie, Tom Gemmell, Arapera Governor, George Hawkins, Paoro Hekenui,
          Hoani Heremaia, Rex Hiakita, Canon Wi Huata, Taxi Kapua, Wara Katene,
          Robert Keepa, Wiremu Kere Kere, George Kereama, Ru Kotua, Jack
          McClutchie, Api Mahuika, Lena Manuel, Eruera Manuera, Hirini Mead,
          Eileen Ngahere, Tom Ngatai, Iwi Nicholson, Nepia Nikorima, Manahi
          Paewai, Wiremu Parker, Henare Petuha, Dan Pomana, Kara Puketapu, John
          Rangihau, Joe Reti, Jos Stewart, John Tangiora, Aila Taylor, Barney Te
          Kani, Tawhao Tioke, Rino Tirikatene, Boy Tomoana, Thompson Tukapua,
          Hemi Waenga, Huirangi Waikerepuru, Wai Waitere, Sonny Waru and Peter
          White - e koro mā, e kui mā, ngā mihi o te ngākau ki ā koutou katoa.
          They and the following people provided much advice, encouragement, and
          - with their spouses - hospitality:
        </p>
        <p>
          Ata Allen, Hine Amoamo, John Asher, Stephen Asher, Basil Avery,
          Neville Baker, Tungia Baker, Tony Batley, Henry Bennett, Ada Brown,
          Peter Brown, Mate Carr, Piripi Cherrington, Waikuharu Cooke, Inia Day,
          Monita Delamere, Eddie Durie, Mason Durie, Taute Eparaima, Ngaire
          Foley, Sir John Grace, Mauri Graham, Maggie Haeata, Nika Harrison,
          Weitia Hiha, Hori Hipango and the Whanganui kaumatuas, John Hohepa,
          Douglas Hoy, Mat Huirua, John (Bronco) Hunia, Leon Hunia, Witi
          Thimaera, Wishie Jaram, Marge Joe, Maaka Jones, Te Aopehi (Percy)
          Kara, Sally Karena, Timoti Karetu, Puoho Katene, Pita Kaua, Tukawekai
          (Darcy) Kereama, Whetumarama (Kelly) and Kawa Kereama, David Knowles,
          Phyllis Komene, Polly Kopu, David Lindsay, Ritchie Luke, Lou
          Macdonald, Jock MacEwan, Pat MacGregor, Jimmy Mapu, Jane Mareikura and
          family, Rehi Mariu, Polly Matenga, Ian Mathieson, Grey Matthews,Eddie
          McLeod, Te Ariki Mei, Tim Mulcock, Matarena Ngamanu, Rangi Nicholson,
          Tama Nikora, Puti O'Brian, Ina Okeroa, Ngawini O'Neill-Kuiti, Tipene
          O'Regan, Alwyn Owen, Wanatia Palmer, Cambridge Pani, Pat Park, Arthur
          Pere, George Pihema, Nick Pirikahu, Tua and Otawa Pitiroi, Maui
          Pomare, Kohine Ponika, Paul Puna, Ray Puna, Renata Rangi, Bunty
          Rangiihu, Joe and Pauline Ransfield, Matarena (Marge) Rau-Kupa, Sam
          Raumati, Amster Reedy, Peter Richardson, Maurice Riritahi, Pae Ruha,
          Te Kapua Rurehe, Piri Sciascia, Lucy Searancke, Matu and Harata
          Solomon, Jim Sullivan, Heni Sunderland, Archie Taiaroa, Tahi Tait,
          Rangitaamo Takarangi, Haame Tangiora, Tu Tawera, Mel Taylor, Pou
          Temara, Sir Hepi Te Heu Heu, Mihiroa Te Huia, Titi Tihu, Rima
          Tirikatene-Bailey, George Tito, Tainui Tokotaua, the Taranaki, Tuhoe
          and Tuwharetoa Trust Boards, the Raukawa Trustees, Tamati Tuhiwai, Te
          Iwa Wano, Te Pehi (Press) Waretini, Gary Wehipeihana, Te Karauna
          (Mack) Whakamoe, Hapai Winiata, Whatarangi Winiata, and David Young.
        </p>
        <p>
          I have not always taken their advice; sometimes experts disagreed;
          sometimes I will have asked the wrong questions; and the final
          responsibility for all mistakes is mine.
        </p>
        <p>
          I also thank Angela and Jos Brusse, Paul Buckley, Margaret and Ken
          Crawford, Kevin Giles and Kerry Willoughby, Patsy and Mike Jeory, Pare
          and John Irwin, Jo and Terry Keller, Barbara and Clyde Lambourn, Cathy
          MacDonald and Gavin MacLean, Robin and Paul Mason, Paul Maxwell,
          Caroline and Jolin Paul McCartin, Alison and Craig Roberts, Celia and
          Michael Short, Niniwa and Murray Short, David Tomlinson, and Pixie and
          Tamati Tuhiwai, for opening up their homes to me on my travels.
        </p>
        <p>
          This work was made possible by a grant from the Bill Toft Memorial
          fund. It is dedicated to the memory of my grandfather, Henry Paterson
          Young
        </p>
        <hr />
        <h2 id="thanks2">Part 2: Te Hiku o te Ika</h2>
        <h3>ACKNOWLEDGEMENTS</h3>
        <h4>Greeting</h4>
        <p>
          E ngā iwi, e ngā reo, e ngā mana, e ngā ihi, tēnā koutou, tēnā koutou,
          tēnā koutou!
        </p>
        <h4>Farewell</h4>
        <p>
          Tuatahi, kei te maumahara ake ki ētahi ō ngā manu kōrero ō tēnei mahi,
          arā ki a Wiremu Parker rātou ko Hoani Te Aniwaniwa Rangihau, ko Rapata
          Crown, ko Te Mata Morehu, ko Wiremu Kepa Wihapi. Otirā, ki a rātou
          katoa, ki ngā manu tīoriori o te tuatahi o nei wahanga: ko Matenga
          Baker, ko Ruka Broughton, ko Arapera Governor, ko Tarawara Katene, ko
          Eruera Manuera, ko Jack Te Kapenga McClutchie, ko Manahi Paewai, ko
          John Tangiora, ko Boy Tomoana, ko Waiharakeke Waitere, koTaniwharau
          (Sonny) Waru.
        </p>
        <p>
          Kua riro and hoki ētahi o ngā kaitautoko ō tēnei mahi, ko Ta John
          Grace, ko Doreen Gregory, ko Polly Matenga, ko Te Awhio (Whio) Motu,
          ko Kohine Ponika, ko Jim Pou, ko Matu Solomon.
        </p>
        <p>
          Tokorua ngā tino pū kōrero kāore i āhei ki te uru mai ki roto i ténei
          pukapuka i te rironga kétanga ai i te ringa kaha o aitua: ko Henare
          Tuwhangai raua ko Ta Hemi Henare.
        </p>
        <p>Nō reira, haere, e koro mā, e kui mā, haere, haere.</p>
        <p>Many people contributed to the making of this dictionary:</p>
        <p>
          Te Arikinui, Dame Te Atairangikaahu, gave the project her blessing,
          which opened many doors throughout the Tainui area. E te Arikinui,
          tēnā rā koe!
        </p>
        <p>
          Then to all the speakers, who gave so freely of their time, knowledge
          and voices —
        </p>
        <p>
          Hoani (Honoti) Apiti, Hemi Konore (Jim Connolly), Rameka Cope, Gordon
          Ponga Kingi Davies, Te Aue Davis, Rapata (Bob) Emery, Tukutahi
          (Darkie) Galvin, Ross Gregory, Henry (Pinga) Haggie, Bob Harris,
          Raureti (Reg) Harris, Pakariki (Paki) Harrison, Hiko Hohepa, Kenoa
          (Molly) Hotene, Maaka Jones, Hira (Sarah) Kahi, Jim Kaihau, the Rev
          Hare (Charlie) Kake, Tomairangi (Toby) Kameta, Johnson Kenny,
          Tukawekai (Darcy) Kereama, Peter Keremeta, Tawhi Kingi, Tarawau Kira,
          Joe Malcom, Eddie Matehaere, Major Meihana, Mita Mohi, Rangi Motu,
          Pineaha (Basil) Murray, Maehe Nikora, Wiremu (Bill) Ohia, Merimeri
          Penfold, Rawakata (Ra) Perenara, Wharengaio Tutengaehe (Bill Pio),
          Naida Pou, Tupi Puriri, Pukerau (Tommy) Rangitutea, Hoana Rapatini,
          Turoa Royal, Rangiwhakaewa Skinner, Vic Smith, Mere Taka, Kepa
          Tanirau, Koro Tawa, Frazer Te Hiko, Haki Thompson, Sam Toia, Hohepa
          Toia, Mere Toia, Hohepa (Joe) Toki, Huhurere (Shu) Tukukino, Hone
          Turei, Jim Turner, Tai Turoa, Haki (Jack) Wihongi, Autiti (Beaker)
          Wikiriwhi, Maurice Wilson and Hepora (Sybil) Young
        </p>
        <p>-~ e koro mā, e kui mā, ngā mihi ō te ngākau ki a koutou katoa.</p>
        <p>
          Professor Bruce Biggs helped me with many transcriptions, cajoled me
          into adding word-divisions and guided me in their principles; but he
          is not to blame for the raised dots [not shown on this website].
        </p>
        <p>
          They and the following people provided much advice, encouragement,
          technical assistance, and - with their spouses - hospitality:
        </p>
        <p>
          Aggie Ainsley, Bob Ashby, Major Ata, Sam Awhimate, Ces and Joan
          Badley, Michael Beasley, Ruth-Ana Begby, Gregg Blair, Eric Blumhardt,
          Chris and Avril Brayshaw, Joce Brown, Rena Bycroft, Dot Callahan, Max
          Carter, Ritchie Chase, Chris Chittenden, Campbell Clarke, Ashley Cody,
          Tom Collins, Rua Cooper, Tahau Cooper, Lynn Crown, Jeff Downs, Dr
          Meihana Durie, Carol Fleet, Mary Anne Frazer-Jones, Fay Freeman, Eru
          George, Marara (Muriel) George, Hariata Gordon, Roger Grahan, Bruce
          Gregory MP, Harry Hall, Joy Harihari, Witarina Harris, Tim Hemi, Rod
          Henden, Mana Herewini, Buddy Herewini, the Rev Mu Hetarake, Umu and
          Jacko Hikitia, Michael Hill, Dr Pat Hohepa, Peter Hope, John Hovell,
          Sir Kingi Ihaka, Brian Joyce, Max Karena, Professor Timoti Karetu, Sir
          Hugh Kawharu, George Kereama, Waimarie Kingi, Lois (nee Kingi),
          Tepania Kingi, Tus Kingi, Rau Kirikiri, John Kirkland, Barney
          Kirkwood, Carmen Kirkwood, Boycie Komene, Barbara and Clyde Lambourn,
          Ted Lloyd, Tommy (Mack) MacCausland, Marjorie Mahuri, Tai Maika,
          Michael Manukau, the Rev Taki Marsden, Te Aho-o-te-Rangi Marsh, Waea
          and Sue Mauriohoho, Trevor Maxwell, Whetu McGregor, Te Umu McLean,
          James McNeish, Wharehuia Milroy, Nganeko Minhinnick, Hamuera (Sambo)
          Mitchell, Robin Moore, Mihaka Morgan, Lola Morrison, Sarah Motu,
          Graham Murdoch, Sophie Iwa Muru, Hiwi Nathan, Dave Neho, Claire Loftus
          Nelson, Rena Ngataki, Stan Newton, Waireti Norman, Richard Northey MP,
          Tipene O’Regan, Pearl Ormbsby, Alwyn Owen, Rora Pakititi, Cambridge T.
          Pani, Tom Parore, Jack Perkins, Nora Pikia, Dr Maui Pomare, Te Weu
          (Fred) Porima, Arama Pou, Hare Puke, Kimoro Pukepuke, Koru and Noa
          Pungatara, Ngawini Puru, Stan Rakatau, Raiha Tai Rakena, Maggie and
          Mick Ratu, Sarah Rauputu, Dan Rawiri, Clayton Reiri, Toko Renata, Te
          Ra Reuben, Tex Rickard, J B Ringer, Jim Ritchie, Wharehuia (Kuni)
          Roberts, Raukura Robinson, Mātene Rūāwai, Peter Sharples, Murray
          Short, Niniwa Short, David Simmonds, Robert Ngawhakaro Simon, Don
          Stafford, Sonny Taikata, Pumi Taituha, Wi Taka, Tikitere Takuira, Wiki
          Tapsell, Pa Henare Tate; Te Warena Taua, Hiwi Tauroa, Pat Tauroa, Wina
          Taute, Tupana Te Hira,Diggeress Te Kanawa, Emily and Wetere Te Paki,
          Wilson Te Rangi, Henare Te Ua, Ngahina (Ina) Te Uira, Turoa Tepania,
          Tuke Tere, Peter Thompson, Rota Thompson, Anne Tia, Irirangi Tiakiawa,
          Wiremu Tohe, Sissy Trust, Puhanga Tupaea, Ngarau Tupaea, Nick
          Tuwhangai, Bella Urlich, Kuru Waaka, Toko Waikato, Dr Ranginui Walker,
          Graham Warren, Walter Wete, Reg Wharekura, Takutai (Doc) Wikiriwhi,
          Polly Williams, Sue Williams, Mahia Wilson, Kimo Winiata, Piripi
          Winiata, David Young, and Ngeungeu Zister.
        </p>
        <p>
          I have not always taken their advice; sometimes experts disagreed;
          sometimes I will have asked the wrong questions; and the final
          responsibility for all mistakes is mine.
        </p>
        <p>
          I thank Joce Brown and Bruce Jesson, Paul Buckley and Bruce Philpott,
          Karen Chappell, Julie Chappell, Phillipa Clark and John Young, Deb
          Davidson, Denise Davies and Richard Dyson, Keri de Carlo, Robyn
          Douglas and Dennis Winfield, Kim Dyson, John Elliott and Peter
          Janssen, Winky Foley and Peter Smith, Peter Gilmour, Ngareta and Bob
          Harris, Jill and Mark Jones, Tanira and Denise Kingi, Andrew Lambourn,
          Gregg Langstone, Liz and Jim Percy, Judy and Alec Picard, Allison
          Rowe, Celia and Michael Short, Barbara and Bernard Stanley, Brian
          Stoddard, Siddhi Tyler and Henry Mackeson, Gill and Phil Underwood,
          and Peter Watson, for opening up their homes and their hearts to me on
          my travels.
        </p>
        <p>
          It was Piripi Whaanga who insisted I go on with Part 2, and Jan
          Bennett, Helen McConnochie and Kim Saffron gave much moral support.
        </p>
        <p>
          John, Malcom Curson, Ron Magan and Geoff Thomason of Computer Village
          guided me through the early stages of computeracy.
        </p>
        <p> Miria Simpson offered many corrections to the booklet of Part 1</p>
        <p>
          Joan and Bill Jackson, and Dot and the late Roger Morris, kept an eye
          on my house while I was away recording.
        </p>
        <p>
          This volume is dedicated to the memory of ny mother, Anne Grant
          (MacBean) Young 1905 - 1985
        </p>
        <p>
          Ā, he aha ta Ihowa e rapu nei ki a koe?
          <br /> Heoi anō, ko te whakawā tika,
          <br /> ko te pai ki te tohu tangata,
          <br /> ko te whakaiti me te haere tahi i tōu Atua.
          <br /> - Mika 6:8
        </p>
        <hr />
        <h2 id="thanks3">
          Part 3, <i>K</i>a I<i>k</i>oa o Te Waipounamu me Wharekauri (Rēkōhu)
          <br />
          The South Island and the Chathams
        </h2>
        <h3>ACKNOWLEDGEMENTS</h3> <h4>Greeting</h4>
        <p>
          E ngā iwi, e ngā reo, e ng mana, e ngā ihi, tēnā koutou, tēnā koutou,
          tēnā koutou!
        </p>
        <h4>Farewell</h4>
        <p>
          Tuatahi, kei te maumahara ake ki ētahi ō ngā manu kōrero ō tēnei
          wahanga ō te mahi, arā ki a Tom Bailey rātou ko Henry Robinson, ā, ō
          nga wahanga kua puta ki ao, ara ko Hikaia Amohia, ko Henry Bird, ko
          Tukutahi Galvin, ko Bob Harris, ko Kenoa Hotene, ko Wi Huata, ko Tawhi
          Kingi, ko Tarawau Kira, ko Wiremu Ohia, ko Rawakata Perenara, ko Dan
          Pomana, ko Tupi Puriri, ko Te Otane Reti, ko Rangiwhakaewa Skinner, ko
          Frazer Te Hiko, ko Hohepa Toia, ko Sam Toia, ko Hohepa Toki, ko
          Huhurere Tukukino, ko Jim Turner, ko Autiti Wikiriwhi.
        </p>
        <p>
          Kua riro ano hoki e te ringa kaha o aitua ētahi ō nga kaitautoko ō
          tēnei mahi, ko Jos Brusse, ko Rua Cooper, ko Monita Delamere, ko John
          Hippolyte, ko Mat Huirua, ko Ta Kingi Ihaka, ko Hamuera Mitchell, ko
          ‘Ina Okeroa, ko Harata Solomon, ko Te Wharetutu Stirling, ko Pumi
          Taituha, ko Ani (Anne) Tia, ko Te Karauna Whakamoe, a wai ake, a wai
          ake.
        </p>
        <p> No reira, haere, e koro ma, e kui ma, haere, haere. </p>
        <p>
          Many people contributed to the making of this dictionary: Chairman of
          the Kai Tahu Māori Trust Board, Ta Tipene O’Regan, gave invaluable
          support. E koro, tēnā rā koe!
        </p>
        <p>
          Then to all the surviving speakers, who gave so freely of their time,
          knowledge and voices -
        </p>
        <p>
          Kelly Davis, Turi Elkington, Paddy Gilroy, Maarire Goodall, Maurice
          Gray, Kath Hemi, Huata Holmes, Malcom Hoskins, Moutere ‘Island’ Love,
          Lee Luke, Jane Manahi, Maika Mason, Hannah Moari Mason, Maui Pomare,
          Jack Reihana, Bill Solomon, Charles Solomon, Rakiihia (Rik) Tau,
          George Te Au, Magdalene (Magda) Wallscott, Tatane (Tat) Wesley and
          Mahia Whatarau-Tainui - e koro mā, e kui mā, ngā mihi ō te ngākau ki a
          koutou katoa.
        </p>
        <p>
          David Lindsay of Replay Radio has been a tower of strength yet again.
          Evan Roberts skilfully computer-edited the tapes. Maarire Goodall of
          Aoraki Press transformed the text into the beautiful volume you now
          hold.
        </p>
        <p>
          Nga Kaiwhakapiimau i te Reo (The Wellington Maori Language Board) were
          my sponsors for one grant. Prof. Timoti Karetu and Beverley Wakem were
          referees for the other.
        </p>
        <p>
          The following people provided much advice, encouragement, technical
          assistance, and - with their spouses and families - hospitality:
        </p>
        <p>
          Tom Akina, Athol Anderson, Andy, Harold Ashwell, Harold Bennett, Bruce
          Biggs, Mere Bolson, Dot Bradley, Lisa Bradley, Cath Brown, Kera Brown,
          Carolynn Bull, Huia Cole, Syd Cormack, Bill Dacker, Janie Davis,
          Margaret Dwyer, Edward Ellison, Waimaria Erueti, Pat Farrell, Michael
          Field, Rena Fowler, George Gibbs, Adam Gifford, Bill Gillies, Violet
          Goodall, Edie Guard, Brian Henskie, David Higgins, Marama
          Higgins-Leonard, the Hocken Librarians, Susie Hodson, Keri Hulme,
          Richard Hulse, Jan James, Maaka Jones, Rae Julian, Michael Keith,
          Wiremu Kere Kere, Hilla King, David Knowles, Jack Kohi, Kelly
          Koroheke, Kuao Langsbury, Maurice Lawrence, Steve Lowndes, Lthrbthr,
          Shirley and Joe MacDonald, Marty McColgan, Malcom McKinnon, Tui
          Martin, Marlene Mason, Hohana Mason Tootell, Moana ‘Auntie Lady’
          Mason, Hepa McCready, Bill McCready, John McLachlan, Alan Merry and
          the Meetboard, John Mitchell, Maggie Monaghan, Maehe ‘Marsh’ Nikora,
          Sandra O’Regan, Te Pura Parata, Ted Parata, Emmy Paynter, Ken Polson,
          Chris Poki, Lou Ramage, Emma Roache, Anaru Robb, Naina Russell, James
          Russell, Guy Salmon, Maui Solomon, Charles Solomon Jr, Bert Spiers,
          Lou Stafford, Lexi Starky, Robert Stephens, Una Stephens, Michael
          Taylor, Heemi Te Rakau, Puhanga Tupaea, the Alexander Turnbull
          Librarians, Albert Tuuta, Hine (Thwaites), Ossie Thwaites, Joe Waaka,
          Mana Walsh, Lou and Joe Warren, Bob Whaitiri, Mela Wills, Hugh Wilson,
          Héni Wong, Evin Wood and Taini Wright.
        </p>
        <p>
          I have not always taken their advice; sometimes experts disagreed;
          sometimes I will have asked the wrong questions; and the final
          responsibility for all mistakes is mine.
        </p>
        <p>
          I thank James Bennett and Mitsue Nomura, Simon Gurnsey, Peter Gilmour,
          Susie Hodson and William Bennett, Margaret Hudson, Malcom Hutchinson,
          Kevin Jensen, Henk Kagei and John Rooney, Peter Kemp, Harry Richardson
          and Koji Miyazaki, Dorothy Morris, Heina Petzold, Kim Saffron and
          Jeremy Lowe, Yvonne and Norman Shallard, Celia and Michael Short,
          Darryl Stewart, Brent Stuart, Bruce Wilson, Hugh Wilson and Evin Wood,
          for opening up their homes and their hearts to me on my travels.
        </p>
        <p>
          Joan and Bill Jackson kept an eye on my house while I was away
          recording. Jan Bennett, Kim Saffron, Murray and Niniwa Short and
          Henare Te Ua gave vital moral support again.
        </p>
        <p>
          Work on this volume was supported by grants from the Heritage Fund of
          the New Zealand Lottery Grants Board / Te Tari Rota and the Pacific
          Development and Conservation Trust (muru for the sinking of the
          Rainbow Warrior).
        </p>
        <p>This volume is dedicated to the memory of two friends, </p>
        <p>
          Hoani (John) Te Rangianiwaniwa Rangihau <br />
          1919 – 1987
          <br /> and <br />
          Elizabeth Louise (Simes) Sewell
          <br />
          1940 - 1988
        </p>
        <p>
          and to my great-niece <br />
          Chloe Wairata Bennett, <br />
          b. 1991
          <br /> who deserves the best of both worlds,
        </p>
        <p> “E tipu, e rea ...”</p>
        <hr />
        <h2 id="website">This Website/Tēnei Pae tukutuku </h2>
        <p>
          Mark Honeychurch created the database from which this website draws
          its data, including the timings of the start and finish of each name,
          and remastered the audio. It was Kevin Hodder (in Rwanda and Uganda)
          who created the convenient site you see. I have been greatly supported
          in bringing the site to this stage by Professor Peter Adds and Paul
          Edwards of Te Herenga Waka/Victoria University of Wellington,
          Vicki-Anne Heikell and Paul Diamond of the Alexander Turnbull Library,
          my friends Lance Gunderson and Mark Masterson, and most of all by my
          devoted husband, Tim Bish-Young. Ngā mihi aroha ki ā koutou katoa.
        </p>
        <p>
          Nō reira, e koro mā, e kui mā, e hoa mā, e ōku rangatira maha, nō
          koutou i uta ngā taonga ki runga i tēnei waka, tēnā koutou. Ka tukua e
          au inaianei kia rere atu ki runga i ngā karekare o te moana, kia tai
          atu ki tēhea te uta?
        </p>
        <p>- Hugh Young(-Bish)</p>
      </main>
      <GoToTop />
    </>
  );
};

export default About;
