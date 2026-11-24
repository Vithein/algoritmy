# Prompt pro GitHub Copilot: web Algoritmy

Vytvořte responzivní, přístupnou a vizuálně čistou vzdělávací stránku v češtině s názvem „Algoritmy“. Je určena začátečníkům, kteří se učí základy algoritmizace. Vycházejte z učebního materiálu `algo1.md`; zachovejte věcnou správnost a nevymýšlejte odlišné definice.

## Obsah stránky

- Úvodní sekce s hlavní myšlenkou „Nejdřív postup. Potom kód.“ a jednoduchou ukázkou vstupu, zpracování a výstupu.
- Definice algoritmu jako přesného a konečného postupu; počítač vykonává zadané příkazy.
- Šest vlastností správného algoritmu: konečnost (začátek a konec), věcná správnost, jednoznačnost, obecnost, opakovatelnost (determinismus) a srozumitelnost.
- Upozornění na podmínky řešitelnosti: nulový jmenovatel při dělení a záporný výraz pod odmocninou v oboru reálných čísel.
- Pět způsobů zápisu algoritmů: slovní vyjádření, matematický zápis, rozhodovací tabulky, vývojový diagram a počítačový program. Vysvětlete stručně, kdy se hodí.
- Základní značky vývojového diagramu: mezní značka, vstup/výstup, zpracování, rozhodování, příprava cyklu, spojka a podprogram. Uveďte význam jednotlivých značek a pravidlo čtení shora dolů a zleva doprava; spojky spojujte stejným označením.
- Pět otázek s výběrem jediné správné odpovědi a okamžitou zpětnou vazbou. Po dokončení ukažte skóre a nabídněte nový pokus.

## Otázky a klíč testu

1. Jak se projeví porušení věcné správnosti? Správně: program doběhne, ale poskytne chybné výsledky.
2. Jak se správně zapíše zlomek `(A + B) / (C + D)`? Správně: `X := (A+B) / (C+D)`.
3. Jak se ve vývojovém diagramu označí načtení vstupních dat? Správně: kosodélník s příkazem `Čti:`.
4. Která vlastnost zajišťuje stejné výsledky pro stejné vstupy? Správně: opakovatelnost.
5. Jaký je hlavní účel překladače? Správně: přeložit program do strojového kódu.

## Technické a UX požadavky

- Použijte sémantické HTML, přístupné popisky, ovládání klávesnicí, viditelné zaměření a vhodné živé oznámení zpětné vazby.
- Implementujte kvíz bez závislostí na serveru. Po volbě odpovědi ji potvrďte, zobrazte vysvětlení a správně aktualizujte průběh i skóre.
- Zajistěte použitelnost na mobilu, dostatečný kontrast a respektování `prefers-reduced-motion`.
- Nepoužívejte externí obrázky. Držte obsah i technické řešení jednoduché a srozumitelné pro začínající studenty.
- Výstup publikujte jako statickou stránku vhodnou pro GitHub Pages.
