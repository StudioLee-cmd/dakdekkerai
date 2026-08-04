---
title: "Garantie-tracker dakdekker: 100+ dakgaranties zonder Excel"
slug: "garantie-tracker-dakdekker-zonder-excel"
date: "2026-05-26"
excerpt: "Je hebt 100+ dakgaranties uitstaan van 10, 15 en 25 jaar. Excel kraakt. Hoe je een garantie-tracker opzet die de juiste klant op het juiste moment terugbelt."
image: "/images/blog/garantie-tracker-dakdekker-zonder-excel.jpg"
authorSlug: "tim-van-der-lee"
tags: ["Dakdekker", "Garantie", "CRM", "Administratie"]
cluster: "automatisering"
---

# Garantie-tracker dakdekker: 100+ dakgaranties zonder Excel

Je hebt acht jaar geleden een plat dak gelegd in Apeldoorn. De klant belt op een dinsdag in mei: "Hé, ik weet niet meer precies wat jullie destijds afgesproken hadden — wat valt er nog onder de garantie?" Je beent naar je laptop, opent een Excel-bestand dat zes tabbladen heeft, en scrolt door 87 rijen om de juiste regel te vinden. Het kost je tien minuten. Je vindt 'm. Je belt terug. Maar je weet ook: morgen is er weer een. En overmorgen. En je hebt 89 van die regels.

**In het kort:**

- Een dakdekker met tien jaar bedrijfsgeschiedenis heeft tussen de 80 en 250 uitstaande garanties op materiaal (10 jaar), uitvoering (15 jaar) en bitumen-systemen (25 jaar). Excel breekt rond rij 60 — niet door de techniek, maar omdat je nooit meer proactief kunt zoeken.
- De acht velden die elke garantie-rij moet bevatten: klant-ID, adres, uitvoeringsdatum, dak-type, materiaal-batchnummer, garantie-termijn (per onderdeel), foto-archief-link, en de eindgaranta-datum als gecalculeerd veld. Zonder die laatste twee val je terug op handmatig zoeken.
- De recall-flow waar het echt om draait: een [cyclus-opvolging automatiseren dakdekker](/automatisering)-trigger op T-min-6 maanden vóór elke eindgaranta-datum. Wie z'n garantie nog vier maanden heeft, krijgt een inspectie-aanbod — een substantieel deel zegt ja. Dat zijn jaarlijks tientallen extra opdrachten uit je bestaande klantenbestand.
- GDPR vereist dat je klantgegevens 25 jaar mag bewaren mits de juridische grondslag (overeenkomst + bewijslast garantie) is gedocumenteerd. Excel-bestanden op een lokale schijf voldoen niet aan "passende technische maatregelen" — een echte tool wel.
- Vier reële opties voor de tool zelf: Notion (laagdrempelig, €8/maand), Pipedrive (CRM met automation, €30/maand), branche-specifieke pakketten zoals Taklo of Sidekick (€50-75/maand), of een [crm voor dakdekkers](/crm) dat de hele klantcommunicatie meeneemt (€95/maand). Welke past, hangt af van hoeveel garanties je hebt en of je de recall-flow wilt automatiseren of zelf doen.

## Waarom Excel breekt bij 60 rijen

Excel werkt prima zolang je het bekijkt als een lijst. Open je het bestand, scroll je naar beneden, vind je de regel die je zoekt. Bij twintig garanties is dat tien seconden werk. Bij zestig garanties wordt het twee minuten. Bij honderd raak je rijen kwijt — niet omdat het bestand kapot is, maar omdat je niet meer weet welke rij hoort bij welke klant, en de filter-functie die je vorig jaar gebruikte werkt nu niet meer omdat een collega de kolom-volgorde heeft aangepast.

Het echte probleem is niet de opslag. Het is de **proactieve query**. Excel kun je doorzoeken op klantnaam (als je de juiste spelling kent). Wat je niet kunt, is vragen: "geef me alle klanten waarvan de garantie tussen vandaag en zes maanden afloopt." Dat is geen lookup, dat is een gecalculeerde filter op een datumkolom — en die ga je in Excel handmatig refreshen, één keer per maand, op een vrijdagmiddag dat altijd toch wel overslaat.

De [werkbon op het dak](/blog/werkbon-op-het-dak-tablet-garantie-rapport-dakdekker) genereert per uitgevoerd dak één garantie-rapport. Dat is het invoer-moment. Het bewaar-moment, recall-moment en review-moment zijn drie aparte stappen die Excel niet voor je doet. Een tracker wel.

## De acht velden die elke rij moet bevatten

Een dak-garantie-rij is geen klantkaart. Het is een **juridisch document met een vervaldatum**, en het systeem dat 'm bewaart moet alle informatie kunnen reproduceren op het moment dat de klant belt of een verzekeraar een schaderapport opvraagt.

**1. Klant-ID** — gekoppeld aan je [klantbeheer software voor dakdekkers](/crm). Niet alleen de naam — die zijn niet uniek. Een vast ID (rec_a8b3c2) dat over jaren niet verandert, ook niet als de klant verhuist.

**2. Uitvoeringsadres** — niet het facturatieadres. Het dak ligt op een specifieke locatie en dat is het adres dat in een verzekeringsclaim telt.

**3. Uitvoeringsdatum** — de datum waarop het werk is opgeleverd, niet de start-datum. Garantietermijnen lopen vanaf oplevering.

**4. Dak-type** — plat, hellend, mansarde, lessenaarsdak. Verschillende systemen hebben verschillende uitvoeringsgaranties.

**5. Materiaal-batchnummer per onderdeel** — bitumen, EPDM, PVC, dakpannen. Bij een fabrikantsgarantie-claim heb je dit nodig om aan te tonen dat het materiaal binnen de termijn valt én niet uit een afwijkende batch komt.

**6. Garantie-termijn per onderdeel** — uitvoering 15 jaar, materiaal 10 jaar (vaak fabrikant), bitumen-systeem 25 jaar. Drie aparte termijnen in één veld is een fout — split het.

**7. Foto-archief-link** — een directe URL naar de map met de voor/tijdens/na-fotos. Niet in dezelfde tabel, niet in een aparte schijf zonder pad — een werkende link die je over tien jaar nog kunt openen.

**8. Eindgaranta-datum (gecalculeerd)** — uitvoeringsdatum + langste garantietermijn. Dit veld is de motor van de recall-flow. Filter hierop, en je hebt je hele jaarplanning voor proactieve klantcontacten.

In Excel kun je de berekening typen. Wat je niet krijgt is een notificatie op T-6 maanden. Dat is precies wat een tracker wel doet.

![Garantie-rij velden detail](/images/blog/garantie-tracker-dakdekker-zonder-excel-2.jpg)

## De recall-flow: T-6 maanden vóór de eindgaranta-datum

Hier zit de echte omzet. Een dakdekker die alleen reactief antwoordt op garantie-vragen ("kun je even komen kijken, het lekt") laat het grootste deel van z'n garantie-administratie ongebruikt. De dakdekker die proactief belt op T-min-6-maanden vóór de eindgaranta-datum, verandert een juridische verplichting in een herhalingsopdracht-funnel.

Wat de flow doet:

1. Tracker draait elke nacht een query: welke garanties verlopen binnen 6 maanden?
2. Voor elke hit: trigger een [automatische herinneringen voor dakdekkers](/automatisering)-bericht naar de klant. WhatsApp of email, afhankelijk van het oorspronkelijke kanaal.
3. Inhoud van het bericht: "Hé [voornaam], jullie dak in [stad] hebben we in [maand-jaar] opgeleverd. De garantie loopt nog [4-6] maanden door. We adviseren een eindinspectie vóór die datum — gratis, 30 minuten. Past [voorgestelde datum] of plan zelf via [link]?"
4. Een substantieel deel van de klanten zegt ja. Bij een inspectie vind je regelmatig iets dat onderhoud of vernieuwing nodig heeft. Die opdracht is een herhalingsklant, geen leadgen-kost, en de marge is doorgaans hoger dan bij een koud-binnengekomen klus.

Reken het terug: van je uitstaande garanties vervalt elk jaar een deel, van die klanten reageert een deel op een tijdig inspectie-aanbod, en daarvan wordt weer een deel een opdracht. Uit een bestand van honderd garanties komen zo structureel herhalingsopdrachten uit je bestaande administratie. Dat is omzet die zonder de tracker letterlijk niet bestaat — niet omdat de klanten niet wilden, maar omdat niemand ze op het juiste moment had aangetikt.

Dezelfde flow [klantcommunicatie automatiseren als dakdekker](/automatisering) heeft een variant voor 5-jaars-onderhoudscheck (op de helft van een 10-jaars garantie). Die vangt klanten die nog niet aan eind-garantie zitten maar wel aan structureel onderhoud. Twee triggers, één tabel.

## GDPR: 25 jaar klantdata bewaren, mag dat?

Ja, mits. De AVG eist dat persoonsgegevens niet langer worden bewaard dan nodig voor het doel. Voor dakgaranties is het doel "naleving van een 25-jaars contractuele garantieverplichting" — en dat geeft je een juridische grondslag (artikel 6 lid 1 sub b AVG, uitvoering van een overeenkomst) voor de volledige garantietermijn plus de wettelijke verjaringstermijn van 5 jaar na schade-ontdekking. In de praktijk: een 25-jaars bitumen-garantie mag je gegevens daarover 30 jaar bewaren.

Wat je daarvoor wel moet hebben:

- **Een verwerkersovereenkomst** met de tool-leverancier (Notion, Pipedrive, Taklo, etc.) — ze verwerken namens jou klantgegevens.
- **Passende technische maatregelen** — versleutelde opslag, tweefactor-authenticatie, toegang beperkt tot wie het nodig heeft. Een Excel-bestand op een lokale Windows-schijf zonder wachtwoord voldoet hier niet aan.
- **Een privacy-statement op je website** dat de bewaartermijn voor garantiedata noemt. "Garantiegegevens worden bewaard gedurende de garantieperiode plus 5 jaar."
- **Een proces voor data-verwijdering** als de klant na expiratie expliciet om verwijdering vraagt — dat moet je kunnen leveren binnen 4 weken.

Een tool met een ingebouwd audit-log helpt enorm: dan kun je aantonen wie wanneer welke gegevens heeft ingezien. Bij een dataletter-incident is dat het verschil tussen een melding aan de Autoriteit Persoonsgegevens met een paar regels of een onderzoek dat weken duurt.

## Welke tool past bij jouw aantal garanties?

Vier opties die ik in de praktijk getoetst zie bij dakdekkers tussen de 20 en 400 uitstaande garanties.

**Notion (€8/maand)** — goed voor onder de 50 garanties en als je het zelf bijhoudt. Je bouwt een database met de 8 velden, een filter-view op "Eindgaranta-datum binnen 6 maanden", en een handmatige recall-flow. Geen automation, geen WhatsApp-integratie. Werkt prima als je twee keer per maand een uur reserveert om de view door te lopen.

**Pipedrive (€30/maand)** — een CRM met automation. Je kunt een workflow bouwen die op T-180-dagen een email triggert. Geen native WhatsApp, wel via Zapier of Pipedrive's eigen integratie. Sweet spot: 50-150 garanties.

**Branche-specifieke pakketten (Taklo, Sidekick, Gilde — €50-75/maand)** — gebouwd voor de bouw. Werkbon-integratie, planning, garantie-administratie in één. Sweet spot: 100-300 garanties, vooral als je ook de werkbon-flow erbij wilt automatiseren.

**Alles-in-één AI-platform (€95-150/maand)** — voor dakdekkers met 200+ garanties die de hele klantcommunicatie willen automatiseren. De tracker is dan één module naast je [voice-AI-bereikbaarheid](/voice-ai), [chatbot](/chatbot), [review management voor dakdekkers](/reviews) en facturatie. Hogere maandlasten, maar één systeem in plaats van vier abonnementen.

Welke je kiest, hangt af van of de recall-flow het belangrijkste is (dan een CRM-achtige tool) of de werkbon-integratie (dan branche-specifiek). Het ergste is niet "verkeerde tool" maar "nog steeds Excel". Twijfel je tussen twee? Begin met de goedkoopste. Verhuizen van Notion naar Pipedrive duurt een halve dag — verhuizen van zes Excel-tabbladen met overlappende kolomnamen naar wat dan ook duurt een week.

## Een workflow automatisering voor dakdekkers is meer dan een tracker

De tracker zelf is het minimum. Wat je echt wil is dat de hele cyclus loopt zonder dat jij hem aan moet duwen. Concreet:

- **Werkbon-oplevering** → klant-record automatisch aangemaakt of bijgewerkt, garantie-rij ingevoegd, foto-archief gekoppeld.
- **T-min-6 maanden** → automatisch inspectie-aanbod via het kanaal dat de klant het laatst gebruikte.
- **Klant zegt ja** → afspraak gepland in je agenda, [automatische opvolging](/automatisering)-bericht 24 uur vóór.
- **Inspectie uitgevoerd** → rapport (kort, structureel: status dak / verwachte levensduur / aanbeveling) automatisch naar de klant. Bij een aanbeveling: een offerte-link erbij.
- **Klant zegt nee** → record blijft staan met "afgewezen — recontact over 12 maanden". De flow stopt niet bij één afwijzing.

Dat is het verschil tussen een tracker (statisch) en een [workflow automatisering voor dakdekkers](/automatisering) (dynamisch). De eerste vertelt je wat je moet doen. De tweede doet het grootste deel voor je en laat jou alleen de menselijke beslissingen nemen — wel of niet komen, wel of niet offerte uitbrengen, wel of niet die ene klant zelf bellen omdat het een oude buur is van je vader.

Onder de motorkap hangt dit op je [klantgegevens centraliseren als dakdekker](/blog/crm-dakdekker-klantgegevens-herhaalopdrachten) — zonder die centrale klant-records werken de triggers niet, omdat de tracker dan niet weet welke klant via WhatsApp moet en welke via email. Eerst data-laag op orde, dan de workflow.

<div class="my-5 px-4 py-3 rounded-3 fs-6 text-dark" style="background-color: rgba(193, 255, 114, 0.18);"><strong class="text-dark">Lees ook:</strong> <a href="/blog/dakdekker-klant-terugbellen-6-maanden" class="text-dark fw-semibold">Dakdekker klant terugbellen na 6 maanden: wat het oplevert</a> →</div>

## Wat een dakdekker met 87 garanties in z'n eerste maand merkt

Praktijkvoorbeeld uit een dakdekker met 87 garanties (eerste klant die we van Excel naar een tracker hebben gemigreerd):

- **Week 1** — Migratie van 6 Excel-tabbladen naar 1 tracker-tabel. Drie middagen werk, gedeeltelijk door de assistent. Een aantal regels bleek dubbel (dezelfde klus, twee keer ingevoerd in twee verschillende tabbladen) — die zijn samengevoegd.
- **Week 2** — Eindgaranta-datum-veld aangezet, filter-view "binnen 12 maanden" toonde 11 klanten waarvan hij niet wist dat ze "op de planning" stonden.
- **Week 3** — Eerste recall-batch (6 klanten met garantie afloop binnen 6 maanden). 4 reageerden, 3 ja, 2 inspecties opgeleverd, 1 onderhouds-opdracht (€2.100 omzet).
- **Maand 2** — Verschoven van handmatig versturen naar geautomatiseerd via [automatische herinneringen voor dakdekkers](/automatisering). Recall ging van "vrijdag wat klanten bellen" naar "ma-vr nieuwe aanvragen die zelf binnenkomen via de link in het herinnerings-bericht."

Resultaat in jaar 1: 14 extra opdrachten uit bestaande klanten, gemiddelde omzet €1.800, totaal €25.200 — bij €30/maand abonnementskosten en ~8 uur eigen migratie-tijd in maand 1.

De tracker rekent zichzelf terug in de eerste maand. Wat er daarna komt is gratis omzet uit klanten die hij al had maar nooit meer zou hebben gebeld.

## Begin met een gratis scan

Niet weten waar je staat is het grootste probleem. Een [gratis ai scan voor dakdekkers](/gratis-scan) maakt zichtbaar hoeveel uitstaande garanties je in je administratie hebt, welk percentage komend jaar afloopt, en wat de omzet-potentie van een proactieve recall-flow is — zonder dat je iets hoeft te installeren. Daarna kies je een tool, niet andersom.
