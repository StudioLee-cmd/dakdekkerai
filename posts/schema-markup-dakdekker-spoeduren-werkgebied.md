---
title: "Schema markup dakdekker: spoeduren en werkgebied tonen"
slug: "schema-markup-dakdekker-spoeduren-werkgebied"
date: "2026-10-14"
excerpt: "Leg als dakdekker openingstijden, spoedbereikbaarheid en werkgebied duidelijk vast in schema markup. Met een voorbeeld en controles voor je webbouwer."
image: "/images/blog/schema-markup-dakdekker-spoeduren-werkgebied.jpg"
authorSlug: "tim-van-der-lee"
tags: ["Vindbaarheid", "Schema"]
cluster: "vindbaarheid"
---

Je kantoor sluit om vijf uur, maar je spoednummer wordt later nog opgenomen. Je rijdt voor regulier werk in enkele gemeenten en bij storm soms verder. Als je website dat allemaal samenvat als 'altijd open, heel Nederland', wek je verwachtingen die je planning niet kan waarmaken.

Schema markup helpt om die bedrijfsgegevens gestructureerd te beschrijven. Voor een dakdekker zijn gewone openingstijden, bereikbaarheid voor spoed en werkgebied verschillende afspraken. Je kunt ze vastleggen, maar je kunt Google niet verplichten om ze op een bepaalde manier te tonen.

DakdekkerAI helpt ondernemers hun online informatie op orde te brengen. Deze uitleg geeft je een gerichte opdracht voor je webbouwer: controleer de bestaande bedrijfsmarkup, voeg alleen echte gegevens toe en test wat er uiteindelijk op de pagina staat.

## Wat schema markup voor je dakbedrijf beschrijft

Schema markup is aanvullende informatie in een vast formaat. Zoekmachines kunnen daarmee bijvoorbeeld herkennen welke organisatie bij een pagina hoort. Het vervangt de leesbare tekst op je website niet. Wie je contactpagina opent, moet dezelfde openingstijden en hetzelfde werkgebied kunnen vinden.

Voor een dakbedrijf bestaat het specifieke type [RoofingContractor binnen Schema.org](https://schema.org/RoofingContractor). Laat je webbouwer eerst controleren of je website al een bedrijfsobject heeft. Meerdere plugins die elk een andere bedrijfsnaam of andere tijden toevoegen, maken de informatie onduidelijker.

Dit is één afgebakend onderdeel van [SEO voor dakdekkers](/seo). Je beschrijft bestaande feiten beter; je voegt geen fictieve vestigingen, beoordelingen of landelijke dekking toe om meer zoektermen te raken.

Je Google Bedrijfsprofiel beheer je afzonderlijk. Hoe je de basis daarvan invult, staat in [je Google Bedrijfsprofiel als dakdekker op orde brengen](/blog/google-bedrijfsprofiel-dakdekker). Een wijziging in de code van je website is geen opdracht om dat profiel automatisch te wijzigen.

## Scheid openingstijden van de bereikbaarheid voor spoed

Vraag eerst aan je team wat 'open' betekent. Is het kantoor bereikbaar? Kunnen klanten langskomen? Worden spoedoproepen aangenomen? Staat er daadwerkelijk een ploeg klaar? Schrijf die antwoorden uit voordat iemand ze in code omzet.

Normale openingstijden passen bij `openingHoursSpecification` op het bedrijfsobject. Voor de beschikbaarheid van een dienst of contactpunt bestaat [hoursAvailable](https://schema.org/hoursAvailable). Daarmee kun je een apart spoedcontact beschrijven zonder je hele bedrijf als altijd geopend voor te stellen.

Een telefoon die wordt opgenomen betekent nog geen gegarandeerde aankomsttijd. Ook een [AI telefonist voor dakdekkers](/voice-ai) kan een melding helpen opvangen, terwijl jij nog moet bepalen of en wanneer iemand uitrukt. Houd dat onderscheid zichtbaar in je tekst en in de afspraak die je webbouwer vastlegt.

Binnen [lokale SEO voor dakdekkers](/seo) is consistentie belangrijker dan de ruimste belofte. Vermeld alleen uren die je werkelijk kunt waarmaken. Gebruik voor tijdelijke afwijkingen een concrete periode en laat de verantwoordelijke medewerker die wijziging controleren.

![Een gewone klok en een afzonderlijk telefooncontact naast een dakbedrijfkaart](/images/blog/schema-markup-dakdekker-spoeduren-werkgebied-2.jpg)

## Gebruik een klein voorbeeld voor de gewone uren

Dit fictieve fragment laat uitsluitend de besproken velden zien. Het is geen volledig Google-geschikt bedrijfsprofiel. Vervang naam, domein, tijden en plaatsen door je eigen gecontroleerde gegevens en voeg het in het bestaande bedrijfsobject in. Plaats het niet als een tweede, los profiel naast je huidige markup.

<pre style="max-width:100%;overflow-x:auto;" tabindex="0" aria-label="JSON-voorbeeld voor openingstijden"><code class="language-json">{
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id":
  "https://dakbedrijf.example/#bedrijf",
  "name": "Voorbeeld Dakbedrijf",
  "url": "https://dakbedrijf.example/",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "00:00"
    }
  ],
  "areaServed": ["Leiden", "Leiderdorp"]
}</code></pre>

Voor de uren volgt dit fragment de [voorbeelden van Google voor LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business). Daar betekent `00:00` bij zowel openen als sluiten dat het bedrijf die dag gesloten is. Voor de hele dag geopend gebruikt Google `00:00` tot `23:59`. Zet gesloten dagen dus niet per ongeluk op een volledig etmaal geopend.

Google stelt voor zijn LocalBusiness-weergave daarnaast eisen aan onder meer naam en adres. Het fragment hierboven laat het adres bewust weg omdat dit een veldenvoorbeeld is. Laat je webbouwer de volledige implementatie toetsen; verzin geen bezoekadres om een test groen te maken.

Voor [zoekmachine optimalisatie](/seo) heb je meer aan een correct bedrijfsobject dan aan veel losse codeblokken. Vraag daarom om een overzicht van wat je CMS, plugin en maatwerk ieder toevoegen.

## Beschrijf het werkgebied dat bij de dienst hoort

Met [areaServed](https://schema.org/areaServed) beschrijf je het geografische gebied waarin een dienst of aanbod beschikbaar is. Schema.org accepteert onder andere tekst en een gebiedsobject. In het voorbeeld gebruiken we plaatsnamen om het principe eenvoudig te houden.

Maak eerst zelf een lijst van de plaatsen waar je regulier werkt. Gaat je spoeddienst naar een ander gebied, beschrijf dat bij de betreffende dienst of het contactpunt en leg het ook uit op de zichtbare pagina. Een groot gebied in code zetten terwijl je website alleen nabijgelegen plaatsen noemt, levert tegenstrijdige informatie op.

Werkgebied is ook iets anders dan vestigingsadres. Een gemeente waarin je klussen uitvoert is niet automatisch een vestiging. Laat je webbouwer dus geen extra bedrijfsadressen aanmaken voor iedere plaats op de lijst.

Deze aanpak ondersteunt [gevonden worden als dakdekker](/seo) met duidelijke informatie. Het veld is geen instelling waarmee je een hogere Maps-positie of een kaart met alle bediende plaatsen afdwingt. Houd de verwachting bij wat je kunt controleren: juiste gegevens op een toegankelijke pagina.

## Test de code én de zichtbare afspraken

Vraag je webbouwer eerst het fragment op een testpagina te controleren. De Schema.org-validator kijkt naar de gebruikte begrippen en hun samenhang. Google's Rich Results Test toetst de ondersteunde Google-toepassingen. Een geldige Schema.org-eigenschap hoeft geen afzonderlijke Google-resultaatweergave te hebben.

Controleer daarna de gepubliceerde pagina. Staan de juiste bedrijfsnaam en uren in de broncode? Zijn ze ook leesbaar op de pagina? Is de oude markup vervangen of staat er nog een tweede object met andere tijden? Laat een echte spoedoproeproute administratief nalopen: de beschrijving moet overeenkomen met wie op dat moment de melding opvangt.

Maak de uitkomst concreet. 'Schema toegevoegd' is een te dunne oplevering. Vraag om de geteste URL, het gebruikte bedrijfsobject en de gevonden fouten of waarschuwingen. Voor [hoger in Google komen als dakdekker](/seo) is dat controleerbaar werk; een belofte over een vaste positie niet.

Een wijziging kan pas door een zoekmachine worden opgepakt nadat de pagina opnieuw is verwerkt. Beoordeel het werk daarom eerst op de juiste implementatie en volg de weergave daarna. Een testresultaat is geen garantie dat Google alle velden zichtbaar overneemt.

## Spreek af wie tijden en gebieden bijhoudt

Schema wordt verouderd als niemand eigenaar is van de gegevens. Zet in je werkafspraak wie een gewijzigde telefoondienst, aangepaste openingstijd of nieuw werkgebied doorgeeft. Laat die persoon tegelijk de zichtbare websitegegevens en de betrokken profielgegevens nalopen.

Controleer vooral de punten waarop je dienstverlening verandert. Verandert alleen de spoedbereikbaarheid, wijzig dan niet automatisch de gewone kantooruren. Valt een plaats tijdelijk buiten je planning, beloof daar geen vaste spoeddekking. Je hoeft hiervoor geen ingewikkeld onderhoudsproject te maken: een kort overzicht met verantwoordelijke en laatste controledatum is een bruikbaar begin.

<p class="lees-ook" style="background-color:rgba(230,126,34,0.12);border-radius:8px;padding:12px 16px;margin:24px 0;"><strong>Lees ook:</strong> <a href="/blog/dakdekker-leads-kopen-of-zelf-genereren">Leads kopen of je eigen klantenstroom opbouwen als dakdekker</a> →</p>

## Geef je webbouwer een controleerbare opdracht

De opdracht past op één pagina: bestaande bedrijfsmarkup inventariseren, gewone uren en spoedcontact scheiden, echt werkgebied vastleggen, de code testen en een eigenaar voor wijzigingen benoemen. Jij levert de bedrijfsafspraken; je webbouwer vertaalt ze naar de juiste velden.

Wil je je website daarop laten inrichten? Bekijk de [gratis website voor dakdekkers](/gratis-website) van DakdekkerAI. Jij dekt het dak, wij regelen de rest. De Groei-of-Geld-Terug Garantie hoort bij apart betaalde SEO- of resultaat-add-ons, met een afgesproken resultaat, termijn en bewijswijze. Het basisabonnement valt daarbuiten. Deze schema-inrichting belooft geen specifieke Google-weergave.
