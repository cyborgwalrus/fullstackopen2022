title Muistiinpanon luominen

selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
selain-->palvelin: lomake data
palvelin->selain: HTTP 302 /exampleapp/notes

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: HTML

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: main.js

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: data.json
