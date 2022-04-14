title Muistiinpanon luominen

note over selain:
Käyttäjä kirjoittaa lomakkeeseen
ja painaa Save-nappulaa.
end note

selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
selain-->palvelin: lomakedata

note over palvelin:
Palvelin vastaanottaa lomakedatan
ja vastaa siihen koodilla 302 redirect
end note
palvelin->selain: HTTP 302 /exampleapp/notes

note over selain:
Selain lataa sivun uudestaan.
end note
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: HTML

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: main.js

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: data.json

note over selain:
Selain renderöi uudestaan muistiinpanot,
joihin käyttäjän lähettämä data on lisätty.
