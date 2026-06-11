// ================= REDIRECT FUNCTIONS =================
function redirectToPrintPage() {
    window.location.href = "index_punkprint.html";
}
function redirectToCDDPage() {
    window.location.href = "index_cdd.html";
}
function redirectToHysterischePage() {
    window.location.href = "index_hysterische.html";
}
function redirectToCDDVideo() {
    window.location.href = "https://www.instagram.com/p/DC4ezoNuBe_/";
}
function redirectTo10PPGitPage() {
    window.location.href = "https://github.com/sprocacci/archive-2024/tree/main/sprocacci/10_PRINT_VARIATION";
}

function redirectTo10PPGitPage() {
    window.location.href = "https://github.com/sprocacci/archive-2024/tree/main/sprocacci/10_PRINT_VARIATION";
}

// ================= SISTEMA BILINGUE =================
let currentLanguage = 'en'; // Lingua predefinita

const translations = {
    en: {
        mainTitle: 'Who I am',
        mainText: `<p>
        Hi!
        I'm Sirio Procacci, a designer from 
        <a href="https://www.google.com/maps/place/64100+Teramo+TE/@42.739287,12.309783,7.81z/data=!4m6!3m5!1s0x1331e7f3308c4aa3:0x3406d617b9391a6b!8m2!3d42.6611431!4d13.6986639!16zL20vMDQ0c3Fo?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" class="inline-link">Teramo</a>, 
        a small city in the Abruzzo region of Italy that you've probably never heard of—but yes, it exists, and it also produces designers.
        I studied Industrial and Environmental Design in 
        <a href="https://www.google.com/maps/place/Ascoli+Piceno/@42.8536947,12.7383746,9z/data=!4m6!3m5!1s0x13296f44fcb1f6b1:0x40781e2c8e7b8f0!8m2!3d42.8535882!4d13.5732475!16zL20vMDI0N2hu" target="_blank" class="inline-link">Ascoli Piceno</a> 
        at SAAD, before continuing my academic journey in 
        <a href="https://www.google.com/maps/place/San+Marino/@43.9352313,12.4467607,12z" target="_blank" class="inline-link">San Marino</a>, 
        where I earned a Master's degree in Interaction & Experience Design at UNIRSM.
        During those years, I had the opportunity to collaborate with Fondazione Zimei in 
        <a href="https://www.google.com/maps/place/Pescara+PE/@42.4617624,14.2160321,12z" target="_blank" class="inline-link">Pescara</a>, 
        an experience that introduced me to the world of contemporary art and cultural design—a field where people work a lot, sleep very little, and still manage to do it with style.
        My practice focuses on visual, product, and exhibition design.
        <br />
        <br />- enter FULL SCREEN;
        <br />- CLICK and move the mouse to look around;
        <br />- SCROLL to see projects.
        <div class="button-row">
          <a href="mailto:sirio.procacci@outlook.com" class="button-row:">HIT ME UP!</a>
          <a href="file/CV_SirioProcacciEN1125.pdf" download class="button-row:">DOWNLOAD RESUME</a>
        </div>`,
        
        projects: {
            set1: {
                title: 'Cluster',
                text: `<p>
                Cluter is an interactive installation that evokes the imagery of the cosmos and galaxies. 
                The project features countless luminous particles reacting to user movements. 
                By moving your hands, you can control gravity and shape the forces of the surrounding space.
                The project was developed during a TouchDesigner workshop with Laura Arcangeli from Studio 
                <a href="https://ultraviolet.to/" target="_blank" class="inline-link">Ultravioletto</a>.
                <div class="button-row">`,
                keywords: ['2024','Interaction','Experience Design','Motion Capture']
            },
            set2: {
                title: 'New Media Art',
                text: `<p>
                The thesis was further developed in collaboration with
                <a href="https://www.ulissegallery.com/index.html" target="_blank" class="inline-link">Ulisse Gallery Contemporary Art</a>
                 in Rome, a 350 m² exhibition space near Piazza di Spagna. 
                 The gallery has worked with major international artists, including Maestro Ugo Attardi, whose Historical Archive it holds. 
                The project was selected during the festival among the 100 innovative works at NEOLOGIA, Graphic Days 2023 in Turin.
                <br /><br /><a href="https://www.graphicdays.it/neologia/new-media-art-come-il-computer-ha-rivoluzionato-il-mondo-sirio-procacci/()" target="_blank" class="inline-button">VIEW PROJECT</button>
                <div class="button-row"> `,
                keywords: ['2022','Bachelor Project', 'Editorial','Archive Research']
            },
            set3: {
                title: '[8583 Hysterische Postkarten]',
                text: `<p> 
                [8583 Hysterische Postkarten] is a project based on the Austrian archive 
                <a href="https://labs.onb.ac.at/en/datasets/akon/" target="_blank" class="inline-link">Historical Postcards</a>.
                It draws inspiration from Bruno Munari's "Saluti e Baci" series.
                Here you can create unique and surreal collages.
                <br /><br />- Enter a value from 1 to 100;
                <br />- Use the "GENERATE" button or the "ENTER" key;
                <br />- Use the mouse to view the information;
                <br />- Click on the portion you want to view.
                <br />
                <div class="button-row">
                <button onclick="redirectToHysterischePage()" class="inline-button">VIEW PROJECT</button>`,
                keywords: ['2024','Interaction','Data Visualization','Creative Coding']
            },
            set4: {
                title: '\\m/ 10 PUNK PRINT \\m/',
                text: `<p>
                This project draws inspiration from the "10 PRINT" code to explore randomness, creativity, and digital complexity.
                By transforming videos into visual patterns, the application investigates new forms of representation through content that is hard to censor.
                The app only supports .mp4 video so please don't be an a**hole!
                <br />If you've been a good boy, now you can play with colors and patterns! Who's my good boy?
                <br />
                <div class="button-row">
                    <button onclick="redirectToPrintPage()" class="inline-button">VIEW PROJECT</button>
                    <button onclick="redirectTo10PPGitPage()" class="inline-button">MORE INFO</button>`,
                keywords: ['2024','Interaction','Creative Coding','Digital Research']
            },
            set5: {
                title: 'Circolo Del Design',
                text: `<p>
                An interactive application designed to develop 
                <a href="https://www.circolodeldesign.it/" target="_blank" class="inline-link">Circolo del Design</a>'s
                video identity. It lets users interact in real time with a 3D model of the CDD logo.
                Developed under the art direction of
                <a href="https://www.studiograndhotel.it/" target="_blank" class="inline-link">Studio Grand Hotel</a>.
                </p>
                <div class="button-row">
                    <button onclick="redirectToCDDPage()" class="inline-button">VIEW PROJECT</button>
                    <button onclick="redirectToCDDVideo()" class="inline-button">VIEW VIDEO</button>`,
                keywords: ['2024','Visual Identity','Creative Coding','Video Editing']
            },
            set6: {
                title: '0721 Pesaro Zona Acustica',
                text: `<p>
                Pesaro makes a sound and it's urban. 
                Its rhythm shifts with space and time, from the industrial outskirts to the coast where architecture meets the Adriatic.
                Nature weaves through the city's forms, blending culture and environment into a sound that can be mapped and explored.
                "0721" is an exhibition project developed with the 
                <a href="https://www.comune.pesaro.pu.it/turismo/dettaglio/news/storie-e-geografie/?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=fd8ba27f281f902ae5092e4a562d5607" target="_blank" class="inline-link">Municipality of Pesaro</a> 
                and 
                <a href="https://pesaromusei.it/guide/nbart-opere-di-gio-ross-2-3-2-2-2-2/" target="_blank" class="inline-link">Pesaro Musei</a>
                for "Pesaro Italian Capital of Culture 2024" featuring both urban and indoor installations at 
                <a href="https://pesaromusei.it/pescheria-centro-arti-visive/" target="_blank" class="inline-link">Pescheria Centro Arti Visive</a>.
                <div class="button-row">`,
                keywords: ['2023','Exhibition','Sound Design','Arduino']
            },
            set7: {
                title: 'The North Face',
                text: `<p>
                "Can AI Unlock Your Creativity?" was a workshop on Artificial Intelligence led by the Art Director and Creative Technologist at <a href="https://monogrid.com/en" target="_blank" class="inline-link">MONOGRID</a>.
                AI tools such as Midjourney and Stable Diffusion were used, and I eventually created a short film combining the different outputs.
                The video was produced in a vertical format for mobile viewing, as a reel for the launch of three new The North Face products.
                <br />
                <div class="button-row">
                    <a href="https://vimeo.com/1125189923?share=copy" target="_blank" class="inline-link">VIEW PROJECT</a>`,
                keywords: ['2023','AI','Video Editing','Tehcnologic Research']
            },
            set8: {
                title: 'O`Family',
                text: `<p>
                O'Bucket is a product-service designed to address pollution caused by Expanded Polystyrene (EPS) in the fish market.
                It features an internal cavity that ensures thermal insulation, while its modular design makes it easy to disassemble and reuse.
                Thanks to its returnable deposit system, O'Bucket eliminates single-use waste.
                Developed with sustainability in mind, it was presented at the 2024 James Dyson Award in line with EU Directive 2019/904.
                <div class="button-row">`,
                keywords: ['2022','Product','Sustainable Design','3D Modelling']
            },
            set9: {
                title: 'A KIND OF HUMANITY',
                text: `<p>
                "A Kind of Humanity is an interactive installation that invites silence, reflection, and introspection. 
                At its center burns a fire, a symbol of energy and collective connection, that reacts to visitors' voices.
                Using 
                <a href="https://www.hume.ai/" target="_blank" class="inline-link">HUME AI</a>, 
                the system analyzes vocal emotions and reshapes its form in response, creating a dialogue between humans and space.
                Inspired by the intimacy of the hearth, the piece reimagines communication as an emotional, ancestral experience.
                <br /></p>
                <div class="button-row">`,
                keywords: ['2025','Exhibition','AI','Visual Design']
            },
            set10: {
                title: 'A-Tempo',
                text: `<p>
                The project is a two-step journey leading visitors into the 
                <a href="https://www.museoiluoghidellanima.it/orto-dei-frutti-dimenticati" target="_blank" class="inline-link">Orto dei Frutti Dimenticati</a> 
                in Pennabilli (RN). Each stage offers sensory experiences that evoke Tonino Guerra's poetic vision of the past.
                Through research and design, a pre-visit path was created to help visitors fully immerse themselves in the museum's atmosphere.
                <div class="button-row">`,
                keywords: ['2023','Interaction','3D Modelling','Arduino']
            },
            set11: {
                title: 'ARCAICO',
                text: `<p>
                The short film, created for the
                <a href="https://www.cini.it/" target="_blank" class="inline-link">Fondazione Giorgio Cini</a>,
                explores the spirit of Eduardo Souto De Moura’s Vatican Chapel, part of the
                <a href="https://www.cini.it/eventi/vatican-chapels-padiglione-della-santa-sede-alla-16-mostra-internazionale-di-architettura/" target="_blank" class="inline-link">Holy See’s Distributed Pavilion</a>
                at the 16th Venice Architecture Biennale.
                Materiality, geometry, and time—recurring themes in De Moura’s work—emerge through a meticulous visual and sonic exploration.
                The framing and sound design, developed in collaboration with the
                <a href="https://www.biovision.ch/en/soundingsoil/soundmap/" target="_blank" class="inline-link">Sounding Soil</a> project,
                evoke an aesthetic suspended between the sacred and the ancient.
                <div class="button-row">
                <a href="https://vimeo.com/1025145739" target="_blank" class="inline-button">VIEW PROJECT</button>`,
                keywords: ['2024','Art Direction','Video Editing','Sound Design']
            },
            set12: {
                title: 'Museo in Libera Uscita',
                text: `<p>
                The project involved designing and displaying three large posters on the main facade of Turin's Alberto Geisser, Natalia Ginzburg, and Dietrich Bonhoeffer libraries.
                The project    
                <a href="https://www.museoantropologia.unito.it/museo-in-libera-uscita/" target="_blank" class="inline-link">Museo in Libera Uscita</a>
                was realized under the art direction of 
                <a href="https://www.studiograndhotel.it/" target="_blank" class="inline-link">Studio Grand Hotel</a>.
                <br /></p>
                <div class="button-row">`,
                keywords: ['2025','Manifesto','Art Direction','Graphic Design']
            },
            set13: {
                title: 'Inseguendo Orlando',
                text: `<p>
                Inseguendo Orlando is a theatrical comedy inspired by Orlando Furioso by Ludovico Ariosto, staged at Teatro La Fenice in Senigallia.
                The project focused on creating interactive 3D scenography using three.js and cannon.js.
                Developed within the Digital Experience Lab led by Daniele Tabellini, my team designed dynamic landscapes, including a forest of lances that transformed throughout the performance.
                <div class="button-row">
                    <a href="https://github.com/del-2024-unirsm/three-sessions-2024-senigallia" target="_blank" class="inline-button">DOCUMENTATION</button>
                    <a href="https://github.com/del-2024-unirsm/three-sessions-2024-senigallia/wiki/2.-Paesaggi" target="_blank" class="inline-button">MORE INFO</button>`,
                keywords: ['2024','Digital Scenography','Interactive Visual','Creative Coding']
            },
            set14: {
                title: 'VIVIDA',
                text: `<p>
                Vivida is a startup concept that designs data visualization systems, combining technical precision with visual aesthetics to create interactive experiences that make data more human and accessible.
                One of Vivida’s projects, ENSI, presents NASA’s database of meteorites that have fallen to Earth from the 9th century to the present day through an interactive globe with filters for location, mass, and time period.
                </p>
                <div class="button-row">
                    <a href="https://vimeo.com/1125186622?share=copy" target="_blank" class="inline-button">VIEW PROJECT</button>`,
                keywords: ['2024','Interaction','Data Visualization','Web Application']
            }
        }
    },
    it: {
        mainTitle: 'Chi sono',
        mainText: `<p>
        Ciao!
        Sono Sirio Procacci, designer, e vengo da 
        <a href="https://www.google.com/maps/place/64100+Teramo+TE/@42.739287,12.309783,7.81z/data=!4m6!3m5!1s0x1331e7f3308c4aa3:0x3406d617b9391a6b!8m2!3d42.6611431!4d13.6986639!16zL20vMDQ0c3Fo?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" class="inline-link">Teramo</a>, 
        una città dell'Abruzzo che probabilmente non conosci, ma che esiste e produce anche designer.
        Ho studiato Design Industriale e Ambientale ad 
        <a href="https://www.google.com/maps/place/64100+Teramo+TE/@42.739287,12.309783,7.81z/data=!4m6!3m5!1s0x1331e7f3308c4aa3:0x3406d617b9391a6b!8m2!3d42.6611431!4d13.6986639!16zL20vMDQ0c3Fo?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" class="inline-link">Ascoli Piceno</a> 
        presso la SAAD, per poi proseguire il mio percorso a 
        <a href="https://www.google.com/maps/place/San+Marino/@43.5190949,6.576968,5z/data=!4m6!3m5!1s0x132ceb5ff5e63f79:0xf39982342010!8m2!3d43.9352313!4d12.4467607!16zL20vMDZzZmY?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"_blank" class="inline-link">San Marino</a> 
        con la laurea magistrale in Interaction & Experience Design all'UNIRSM.
        Durante questi anni ho avuto modo di collaborare con Fondazione Zimei a 
        <a href="https://www.google.com/maps/place/Pescara+PE/@42.2149842,12.3487484,6.91z/data=!4m6!3m5!1s0x1331a60db9286477:0xa0b89e89b22cbfe2!8m2!3d42.4617624!4d14.2160321!16zL20vMDNmMmhj?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" class="inline-link">Pescara</a>
        un'esperienza che mi ha introdotto al mondo dell'arte contemporanea e della progettazione culturale: un settore in cui si lavora molto e si dorme poco, ma sempre con stile.
        Mi occupo di visual, product ed exhibit design.
        <br />
        <br />- vai a SCHERMO INTERO;
        <br />- CLICCA e usa il mouse per visualizare;
        <br />- SCROLLA per scoprire i progetti.
        <div class="button-row">
          <a href="mailto:sirio.procacci@outlook.com" class="button-row:">SCRIVIMI!</a>
          <a href="file/CV_SirioProcacciIT1125.pdf" download class="button-row:">DOWNLOAD CURRICULUM</a>
        </div>`,
        
        projects: {
            set1: {
                title: 'Cluster',
                text: `<p>
                Cluster è un'installazione interattiva che evoca l'immaginario del cosmo e delle galassie.
                Il progetto presenta innumerevoli particelle luminose che reagiscono ai movimenti dell'utente.
                Muovendo le mani, puoi controllare la gravità e modellare le forze dello spazio circostante.
                Il progetto è stato sviluppato durante un workshop di TouchDesigner con Laura Arcangeli dello Studio
                <a href="https://ultraviolet.to/" target="_blank" class="inline-link">Ultravioletto</a>.
                <div class="button-row">`,
                keywords: ['2024','Interazione','Experience Design','Motion Capture']
            },
            set2: {
                title: 'New Media Art',
                text: `<p>
                La tesi è stata ulteriormente sviluppata in collaborazione con
                <a href="https://www.ulissegallery.com/index.html" target="_blank" class="inline-link">Ulisse Gallery Contemporary Art</a>
                 a Roma, uno spazio espositivo di 350 m² vicino a Piazza di Spagna.
                 La galleria ha collaborato con importanti artisti internazionali, tra cui il Maestro Ugo Attardi, del quale custodisce l'Archivio Storico.
                Il progetto è stato selezionato durante il festival tra i 100 progetti più innovativi a NEOLOGIA, Graphic Days 2023 a Torino.
                <br /><br /><a href="https://www.graphicdays.it/neologia/new-media-art-come-il-computer-ha-rivoluzionato-il-mondo-sirio-procacci/()" target="_blank" class="inline-button">VEDI PROGETTO</button>
                <div class="button-row"> `,
                keywords: ['2022','Tesi Triennale', 'Editoriale','Ricerca Archivistica']
            },
            set3: {
                title: '[8583 Hysterische Postkarten]',
                text: `<p> 
                [8583 Hysterische Postkarten] è un progetto basato sull'archivio austriaco
                <a href="https://labs.onb.ac.at/en/datasets/akon/" target="_blank" class="inline-link">Historical Postcards</a>.
                Trae ispirazione dalla serie "Saluti e Baci" di Bruno Munari.
                Qui puoi creare collage unici e surreali.
                <br /><br />- Inserisci un valore da 1 a 100;
                <br />- Usa il pulsante "GENERA" o il tasto "INVIO";
                <br />- Usa il mouse per visualizzare le informazioni;
                <br />- Clicca sulla porzione che vuoi visualizzare.
                <br />
                <div class="button-row">
                <button onclick="redirectToHysterischePage()" class="inline-button">VEDI PROGETTO</button>`,
                keywords: ['2024','Interazione','Visualizzazione Dati','Creative Coding']
            },
            set4: {
                title: '\\m/ 10 PUNK PRINT \\m/',
                text: `<p>
                IL progetto trae ispirazione dalla stringa "10 PRINT" per esplorare casualità, creatività e complessità digitale.
                Trasformando video in pattern visivi, l'applicativo indaga nuove forme di rappresentazione attraverso contenuti difficili da censurare.
                L'app supporta solo video .mp4, quindi per favore non fare lo str**zo!
                <br />Se sei stato bravo, ora puoi giocare con colori e pattern! Chi è il mio bravo ragazzo?
                <br />
                <div class="button-row">
                    <button onclick="redirectToPrintPage()" class="inline-button">VEDI PROGETTO</button>
                    <button onclick="redirectTo10PPGitPage()" class="inline-button">PIÙ INFO</button>`,
                keywords: ['2024','Interazione','Creative Coding','Ricerca Digitale']
            },
            set5: {
                title: 'Circolo Del Design',
                text: `<p>
                Un'applicazione interattiva progettata per sviluppare l'identità video del
                <a href="https://www.circolodeldesign.it/" target="_blank" class="inline-link">Circolo del Design</a>.
                Permette agli utenti di interagire in tempo reale con un modello 3D del logo CDD.
                Sviluppato sotto la direzione artistica di
                <a href="https://www.studiograndhotel.it/" target="_blank" class="inline-link">Studio Grand Hotel</a>.
                </p>
                <div class="button-row">
                    <button onclick="redirectToCDDPage()" class="inline-button">VEDI PROGETTO</button>
                    <button onclick="redirectToCDDVideo()" class="inline-button">VEDI VIDEO</button>`,
                keywords: ['2024','Identità Visiva','Creative Coding','Video Editing']
            },
            set6: {
                title: '0721 Pesaro Zona Acustica',
                text: `<p>
                Pesaro fa un suono ed è urbano.
                Il suo ritmo cambia con lo spazio e il tempo, dalla periferia industriale alla costa dove l'architettura incontra l'Adriatico.
                La natura si intreccia alle forme della città, fondendo cultura e ambiente in un suono che può essere mappato ed esplorato.
                "0721" è un progetto espositivo sviluppato con il
                <a href="https://www.comune.pesaro.pu.it/turismo/dettaglio/news/storie-e-geografie/?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=fd8ba27f281f902ae5092e4a562d5607" target="_blank" class="inline-link">Comune di Pesaro</a>
                e
                <a href="https://pesaromusei.it/guide/nbart-opere-di-gio-ross-2-3-2-2-2-2/" target="_blank" class="inline-link">Pesaro Musei</a>
                per "Pesaro Capitale Italiana della Cultura 2024" con installazioni urbane e indoor alla
                <a href="https://pesaromusei.it/pescheria-centro-arti-visive/" target="_blank" class="inline-link">Pescheria Centro Arti Visive</a>.
                <div class="button-row">`,
                keywords: ['2023','Mostra','Sound Design','Arduino']
            },
            set7: {
                title: 'The North Face',
                text: `<p>
                "Can AI Unlock Your Creativity?" è stato un workshop sull'Intelligenza Artificiale condotto dall'Art Director e Creative Technologist di
                <a href="https://monogrid.com/en" target="_blank" class="inline-link">MONOGRID</a>.
                Sono stati utilizzati strumenti di AI come Midjourney e Stable Diffusion e, infine, ho realizzato un cortometraggio combinando i diversi contenuti.
                Il video è stato prodotto in formato verticale per la visione mobile come reel per il lancio di tre nuovi prodotti di The North Face.
                <br />
                <div class="button-row">
                    <a href="https://vimeo.com/1125189923?share=copy" target="_blank" class="inline-link">VEDI PROGETTO</a>`,
                keywords: ['2023','AI','Video Editing','Ricerca Tecnologica']
            },
            set8: {
                title: 'O`Family',
                text: `<p>
                O'Bucket è un prodotto-servizio che risponde all'inquinamento causato dal Polistirene Espanso (EPS) nel mercato ittico.
                Utilizza una cavità interna per garantire l'isolamento termico, mentre il suo design modulare lo rende facile da smontare e riutilizzare.
                Grazie al servizio di vuoto a rendere, O'Bucket elimina i rifiuti usa e getta.
                Progettato per la sostenibilità, è stato presentato al James Dyson Award 2024 in linea con la Direttiva UE 2019/904.
                <div class="button-row">`,
                keywords: ['2022','Prodotto','Design Sostenibile','Modellazione 3D']
            },
            set9: {
                title: 'A KIND OF HUMANITY',
                text: `<p>
                "A Kind of Humanity" è un'installazione interattiva che invita al silenzio, alla riflessione e all'introspezione.
                Al suo centro arde un fuoco, simbolo di energia e connessione collettiva, che reagisce alle voci dei visitatori.
                Usando 
                <a href="https://www.hume.ai/" target="_blank" class="inline-link">HUME AI</a>, 
                il sistema analizza le emozioni vocali e rimodella la sua forma in risposta, creando un dialogo tra umani e spazio.
                Ispirata all'intimità del focolare, l'opera reinterpreta la comunicazione come un'esperienza emotiva e ancestrale.
                <br /></p>
                <div class="button-row">`,
                keywords: ['2025','Mostra','AI','Visual Design']
            },
            set10: {
                title: 'A-Tempo',
                text: `<p>
                Il progetto è un viaggio in due tappe che conduce i visitatori nell'
                <a href="https://www.museoiluoghidellanima.it/orto-dei-frutti-dimenticati" target="_blank" class="inline-link">Orto dei Frutti Dimenticati</a>
                a Pennabilli (RN). Ogni tappa offre esperienze sensoriali che evocano la visione poetica del passato di Tonino Guerra.
                Attraverso ricerca e progettazione, è stato creato un percorso pre-visita per aiutare i visitatori a immergersi completamente nell'atmosfera del museo.
                <div class="button-row">`,
                keywords: ['2023','Interazione','Modellazione 3D','Arduino']
            },
            set11: {
                title: 'ARCAICO',
                text: `<p>
                Il cortometraggio, realizzato per la 
                <a href="https://www.cini.it/" target="_blank" class="inline-link">Fondazione Giorgio Cini</a>, 
                esplora l'anima della Cappella Vaticana di Eduardo Souto De Moura per il
                <a href="https://www.cini.it/eventi/vatican-chapels-padiglione-della-santa-sede-alla-16-mostra-internazionale-di-architettura/" target="_blank" class="inline-link">Padiglione Distribuito della Santa Sede</a>
                alla 16ª Biennale di Architettura di Venezia. 
                Materialità, geometria e tempo, temi ricorrenti nell'opera di De Moura, emergono da un'attenta ricerca visiva e sonora: 
                le inquadrature e i suoni, sviluppati grazie al progetto
                <a href="https://www.biovision.ch/en/soundingsoil/soundmap/" target="_blank" class="inline-link">Sounding Soil</a>, 
                evocano un'estetica sospesa tra il sacro e l'antico.
                <div class="button-row">
                <a href="https://vimeo.com/1025145739" target="_blank" class="inline-button">VEDI PROGETTO</button>`,
                keywords: ['2024','Direzione Artistica','Video Editing','Sound Design']
            },
            set12: {
                title: 'Museo in Libera Uscita',
                text: `<p>
                Il progetto ha previsto la progettazione e l'esposizione di tre grandi manifesti sulla facciata principale delle biblioteche Alberto Geisser, Natalia Ginzburg e Dietrich Bonhoeffer di Torino.
                Il progetto
                <a href="https://www.museoantropologia.unito.it/museo-in-libera-uscita/" target="_blank" class="inline-link">Museo in Libera Uscita</a>
                è stata realizzata sotto la direzione artistica di
                <a href="https://www.studiograndhotel.it/" target="_blank" class="inline-link">Studio Grand Hotel</a>.
                <br /></p>
                <div class="button-row">`,
                keywords: ['2025','Manifesto','Direzione Artistica','Graphic Design']
            },
            set13: {
                title: 'Inseguendo Orlando',
                text: `<p>
                Inseguendo Orlando è una commedia teatrale ispirata all'Orlando Furioso di Ludovico Ariosto, messa in scena al Teatro La Fenice di Senigallia.
                Il progetto si è concentrato sulla realizzazione di scenografie 3D interattive attraverso gli strumenti three.js e cannon.js.
                Sviluppato nel Digital Experience Lab guidato da Daniele Tabellini, il mio team ha progettato paesaggi dinamici come il bosco di lance che si trasformava durante lo spettacolo.
                <div class="button-row">
                    <a href="https://github.com/del-2024-unirsm/three-sessions-2024-senigallia" target="_blank" class="inline-button">DOCUMENTAZIONE</button>
                    <a href="https://github.com/del-2024-unirsm/three-sessions-2024-senigallia/wiki/2.-Paesaggi" target="_blank" class="inline-button">PIÙ INFO</button>`,
                keywords: ['2024','Scenografia Digitale','Visual Interattivi','Creative Coding']
            },
            set14: {
                title: 'VIVIDA',
                text: `<p>
                Vivida è un concept di startup che progetta sistemi di visualizzazione dati, unisce tecnica ed estetica visiva per creare esperienze
                interattive col fine di rendere i dati più umani e accessibili:
                ENSI, uno dei progetti di Vivida, mostra il database della NASA dei meteoriti caduti sulla terra dal IX secolo a oggi attraverso un globo interattivo con filtri per posizione, massa e periodo.
                </p>
                <div class="button-row">
                    <a href="https://vimeo.com/1125186622?share=copy" target="_blank" class="inline-button">VEDI PROGETTO</button>`,
                keywords: ['2024','Interazione','Visualizzazione Dati','Applicazione Web']
            }
        }
    }
};

// Funzione per cambiare lingua
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Aggiorna i bottoni lingua
    document.querySelectorAll('.lang-button').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Aggiorna il contenuto principale se nessun progetto è selezionato
    const anyProjectSelected = document.querySelector('.back-button.selected');
    if (!anyProjectSelected) {
        const titolo = document.getElementById('titolo-h1');
        const testoContenuto = document.getElementById('testo-contenuto');
        
        if (titolo) titolo.textContent = translations[lang].mainTitle;
        if (testoContenuto) testoContenuto.innerHTML = translations[lang].mainText;
        aggiornaKeywords([]);
    } else {
        // Se c'è un progetto selezionato, aggiorna quello
        updateCurrentProjectLanguage();
    }
}

// Funzione per aggiornare la lingua del progetto corrente
function updateCurrentProjectLanguage() {
    const selectedButton = document.querySelector('.back-button.selected');
    if (!selectedButton) return;
    
    // Identifica quale set è selezionato
    const onclick = selectedButton.getAttribute('onclick');
    const setMatch = onclick.match(/cambiaContenuto\('(set\d+)'\)/);
    
    if (setMatch) {
        const setId = setMatch[1];
        const project = translations[currentLanguage].projects[setId];
        
        if (project) {
            const titolo = document.getElementById('titolo-h1');
            const testoContenuto = document.getElementById('testo-contenuto');
            
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            aggiornaKeywords(project.keywords);
        }
    }
}


// Funzione per aggiornare le keywords
function aggiornaKeywords(keywords) {
    const keywordsContainer = document.getElementById('keywords-container');
    if (!keywordsContainer) return;
    
    if (keywords && keywords.length > 0) {
        keywordsContainer.classList.remove('hidden');
        keywordsContainer.innerHTML = '';
        keywords.forEach(keyword => {
            const span = document.createElement('span');
            span.className = 'keyword';
            span.textContent = keyword;
            
            if (!keyword.trim().includes(' ')) {
                span.classList.add('single-word');
            }
            
            keywordsContainer.appendChild(span);
        });
        
        // Aggiorna la posizione dopo aver aggiunto il contenuto
        setTimeout(updateKeywordsPosition, 0);
    } else {
        keywordsContainer.classList.add('hidden');
        keywordsContainer.innerHTML = '';
    }
}

function updateKeywordsPosition() {
    const titolo = document.getElementById('titolo-h1');
    const keywordsContainer = document.getElementById('keywords-container');
    
    if (titolo && keywordsContainer) {
        const titoloRect = titolo.getBoundingClientRect();
        const titoloTop = parseFloat(window.getComputedStyle(titolo).top);
        
        // Calcola la nuova posizione: altezza del titolo + margine
        const newTop = titoloTop + titoloRect.height + 0; 
        keywordsContainer.style.top = newTop + 'px';
    }
}

// Event listeners per aggiornare la posizione al resize
window.addEventListener('resize', updateKeywordsPosition);
window.addEventListener('load', updateKeywordsPosition);

// ================= NAVIGAZIONE TASTIERA E MOUSE SINCRONIZZATA CON SCROLL =================
let currentButtonIndex = -1; 
let isKeyboardNavigating = false; 
let lastInteractionWasMouse = false; 
let mouseIsOverButton = false; // Nuovo flag per tracciare se il mouse è sopra un bottone

// Funzione per gestire lo scroll automatico
function scrollToElementIfNeeded(element) {
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    // Margine di sicurezza per evitare che l'elemento sia troppo vicino ai bordi
    const margin = 28;
    
    let scrollX = 0;
    let scrollY = 0;
    let needsScroll = false;
    
    // Verifica se l'elemento è fuori dalla viewport verticalmente
    if (rect.top < margin) {
        // L'elemento è sopra la viewport
        scrollY = window.pageYOffset + rect.top - margin;
        needsScroll = true;
    } else if (rect.bottom > viewportHeight - margin) {
        // L'elemento è sotto la viewport
        scrollY = window.pageYOffset + rect.bottom - viewportHeight + margin;
        needsScroll = true;
    }
    
    // Verifica se l'elemento è fuori dalla viewport orizzontalmente
    if (rect.left < margin) {
        // L'elemento è a sinistra della viewport
        scrollX = window.pageXOffset + rect.left - margin;
        needsScroll = true;
    } else if (rect.right > viewportWidth - margin) {
        // L'elemento è a destra della viewport
        scrollX = window.pageXOffset + rect.right - viewportWidth + margin;
        needsScroll = true;
    }
    
    // Esegui lo scroll se necessario
    if (needsScroll) {
        // Usa scrollTo per uno scroll fluido
        window.scrollTo({
            left: scrollX || window.pageXOffset,
            top: scrollY || window.pageYOffset,
            behavior: 'smooth'
        });
    }
}

function updateButtonHighlight() {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));

    // Rimuovi highlight da tutti i bottoni
    buttons.forEach(btn => btn.classList.remove('keyboard-selected'));

    if (currentButtonIndex >= 0 && currentButtonIndex < buttons.length && isKeyboardNavigating) {
        const btn = buttons[currentButtonIndex];
        btn.classList.add('keyboard-selected');

        // Focus solo se necessario
        try {
            btn.focus({ preventScroll: true });
        } catch {
            btn.focus();
        }
        
        // SCROLL AUTOMATICO: verifica se l'elemento è visibile nella viewport
        scrollToElementIfNeeded(btn);
    }
}

function syncFromMouseToKeyboard(targetElement) {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
    const newIndex = buttons.indexOf(targetElement);
    
    if (newIndex !== -1) {
        // Se stiamo passando da navigazione tastiera a mouse
        if (isKeyboardNavigating) {
            // Disattiva la navigazione tastiera
            isKeyboardNavigating = false;
            // Rimuovi tutti gli highlight della tastiera
            buttons.forEach(btn => btn.classList.remove('keyboard-selected'));
        }
        
        currentButtonIndex = newIndex;
        lastInteractionWasMouse = true;
        mouseIsOverButton = true;
        
        // Aggiungi highlight solo al bottone corrente (stile mouse)
        buttons.forEach(btn => btn.classList.remove('keyboard-selected'));
        targetElement.classList.add('keyboard-selected');
        
        console.log(`Mouse sync: currentButtonIndex = ${currentButtonIndex}, keyboardNav = ${isKeyboardNavigating}`);
    }
}

function clearAllHighlights() {
    if (!isKeyboardNavigating) {
        const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
        buttons.forEach(btn => btn.classList.remove('keyboard-selected'));
        mouseIsOverButton = false;
        console.log('All highlights cleared');
    }
}

function findSelectedButton() {
    const selectedContentButton = document.querySelector('.back-button.selected, .link-button.selected');
    if (selectedContentButton) {
        return selectedContentButton;
    }
    return null;
}

function getSelectedButtonIndex() {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
    const selectedButton = findSelectedButton();
    
    if (selectedButton) {
        return buttons.indexOf(selectedButton);
    }
    
    return -1;
}

function handleKeyboardNavigation(event) {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
    if (buttons.length === 0) return;

    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            
            // Se non stiamo già navigando con la tastiera, inizializza
            if (!isKeyboardNavigating) {
                // Disabilita qualsiasi highlight del mouse
                clearAllHighlights();
                
                // PRIORITÀ 1: Bottone selezionato
                const selectedIndexDown = getSelectedButtonIndex();
                if (selectedIndexDown !== -1) {
                    currentButtonIndex = selectedIndexDown;
                    console.log(`Starting navigation from selected button at index: ${currentButtonIndex}`);
                }
                // PRIORITÀ 2: Ultima interazione mouse
                else if (lastInteractionWasMouse && currentButtonIndex !== -1) {
                    console.log(`Starting navigation from mouse position: ${currentButtonIndex}`);
                } 
                // PRIORITÀ 3: Prima volta
                else {
                    currentButtonIndex = 0;
                }
            } else {
                // Navigazione normale
                currentButtonIndex = (currentButtonIndex + 1) % buttons.length;
            }
            
            isKeyboardNavigating = true;
            lastInteractionWasMouse = false;
            mouseIsOverButton = false;
            updateButtonHighlight();
            break;

        case 'ArrowUp':
            event.preventDefault();
            
            // Se non stiamo già navigando con la tastiera, inizializza
            if (!isKeyboardNavigating) {
                // Disabilita qualsiasi highlight del mouse
                clearAllHighlights();
                
                // PRIORITÀ 1: Bottone selezionato
                const selectedIndexUp = getSelectedButtonIndex();
                if (selectedIndexUp !== -1) {
                    currentButtonIndex = selectedIndexUp;
                    console.log(`Starting navigation from selected button at index: ${currentButtonIndex}`);
                    currentButtonIndex = (currentButtonIndex - 1 + buttons.length) % buttons.length;
                }
                // PRIORITÀ 2: Ultima interazione mouse
                else if (lastInteractionWasMouse && currentButtonIndex !== -1) {
                    console.log(`Starting navigation from mouse position: ${currentButtonIndex}`);
                    currentButtonIndex = (currentButtonIndex - 1 + buttons.length) % buttons.length;
                } 
                // PRIORITÀ 3: Prima volta
                else {
                    currentButtonIndex = buttons.length - 1;
                }
            } else {
                // Navigazione normale
                currentButtonIndex = (currentButtonIndex - 1 + buttons.length) % buttons.length;
            }
            
            isKeyboardNavigating = true;
            lastInteractionWasMouse = false;
            mouseIsOverButton = false;
            updateButtonHighlight();
            break;

        case 'Enter':
            event.preventDefault();
            if (buttons[currentButtonIndex]) {
                buttons[currentButtonIndex].click();
            }
            break;

        case 'Escape':
            event.preventDefault();
            resetAllContainers();
            currentButtonIndex = -1;
            isKeyboardNavigating = false;
            lastInteractionWasMouse = false;
            mouseIsOverButton = false;
            buttons.forEach(btn => {
                btn.classList.remove('keyboard-selected');
                btn.blur();
            });
            break;
    }
}

// ================= GESTIONE EVENTI MOUSE =================

// Click sui bottoni
document.addEventListener('click', (e) => {
    const targetButton = e.target.closest('.back-button, .link-button');
    if (targetButton) {
        syncFromMouseToKeyboard(targetButton);
    }
});

// Hover sui bottoni
document.addEventListener('mouseover', (e) => {
    const targetButton = e.target.closest('.back-button, .link-button');
    if (targetButton) {
        syncFromMouseToKeyboard(targetButton);
    }
});

// Mouse esce da un bottone
document.addEventListener('mouseout', (e) => {
    const targetButton = e.target.closest('.back-button, .link-button');
    if (targetButton) {
        const relatedTarget = e.relatedTarget;
        // Verifica se il mouse sta davvero uscendo dall'elemento
        if (!targetButton.contains(relatedTarget)) {
            mouseIsOverButton = false;
            // Solo se non stiamo navigando con la tastiera, rimuovi l'highlight
            if (!isKeyboardNavigating) {
                clearAllHighlights();
            }
        }
    }
});

// Movimento generale del mouse - importante per rilevare quando esce completamente dall'area bottoni
document.addEventListener('mousemove', (e) => {
    const targetButton = e.target.closest('.back-button, .link-button');
    
    if (!targetButton && !isKeyboardNavigating) {
        // Il mouse non è su nessun bottone e non stiamo navigando con la tastiera
        if (mouseIsOverButton) {
            clearAllHighlights();
            currentButtonIndex = -1;
            lastInteractionWasMouse = false;
        }
    }
});

// Focus management - migliorato per gestire la transizione
document.addEventListener('focusin', (e) => {
    const buttons = Array.from(document.querySelectorAll('.back-button, .link-button'));
    const targetButton = e.target.closest('.back-button, .link-button');
    
    if (targetButton) {
        const idx = buttons.indexOf(targetButton);
        if (idx !== -1) {
            // Se il focus è dovuto a Tab (non alle nostre frecce)
            if (!isKeyboardNavigating) {
                syncFromMouseToKeyboard(targetButton);
            } else {
                // Se invece siamo in navigazione tastiera, aggiorna l'indice
                currentButtonIndex = idx;
            }
        }
    }
});

// Event listener principale per la tastiera
document.addEventListener('keydown', handleKeyboardNavigation);

// Reset function (deve essere accessibile globalmente)
function resetAllContainers() {
    const imgMain = document.getElementById('Immagine_Centrata');
    const containerSet1 = document.querySelector('.container-set1');
    const containerSet2 = document.querySelector('.container-set2');
    const containerSet3 = document.querySelector('.container-set3');
    const containerSet4 = document.querySelector('.container-set4');
    const containerSet5 = document.querySelector('.container-set5');
    // Aggiungi i nuovi container
    const containerSet6 = document.querySelector('.container-set6');
    const containerSet7 = document.querySelector('.container-set7');
    const containerSet8 = document.querySelector('.container-set8');
    const containerSet9 = document.querySelector('.container-set9');
    const containerSet10 = document.querySelector('.container-set10');
    const containerSet11 = document.querySelector('.container-set11');
    const containerSet12 = document.querySelector('.container-set12');
    const containerSet13 = document.querySelector('.container-set13');
    const containerSet14 = document.querySelector('.container-set14');
    
    const titolo = document.getElementById('titolo-h1');
    const testoContenuto = document.getElementById('testo-contenuto');
    const bottoneA = document.querySelector("button[onclick*='set1']");
    const bottoneB = document.querySelector("button[onclick*='set2']");
    const bottoneC = document.querySelector("button[onclick*='set3']");
    const bottoneD = document.querySelector("button[onclick*='set4']");
    const bottoneE = document.querySelector("button[onclick*='set5']");
    // Aggiungi i nuovi bottoni
    const bottone6 = document.querySelector("button[onclick*='set6']");
    const bottone7 = document.querySelector("button[onclick*='set7']");
    const bottone8 = document.querySelector("button[onclick*='set8']");
    const bottone9 = document.querySelector("button[onclick*='set9']");
    const bottone10 = document.querySelector("button[onclick*='set10']");
    const bottone11 = document.querySelector("button[onclick*='set11']");
    const bottone12 = document.querySelector("button[onclick*='set12']");
    const bottone13 = document.querySelector("button[onclick*='set13']");
    const bottone14 = document.querySelector("button[onclick*='set14']");

    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) languageToggle.classList.remove('hidden');
    const defaultImg = 'immagini/base/wp5404034-59414419.png';
    const defaultTitolo = translations[currentLanguage].mainTitle;
    const defaultTesto = translations[currentLanguage].mainText;

    fermaRotazioneImmaginiSet3(); // stop immagini random set3
    aggiornaKeywords([]); // Array vuoto = nascondi
    
    if (containerSet1) containerSet1.classList.add('hidden');
    if (containerSet2) containerSet2.classList.add('hidden');
    if (containerSet3) containerSet3.classList.add('hidden');
    if (containerSet4) containerSet4.classList.add('hidden');
    if (containerSet5) containerSet5.classList.add('hidden');
    if (containerSet6) containerSet6.classList.add('hidden');
    if (containerSet7) containerSet7.classList.add('hidden');
    if (containerSet8) containerSet8.classList.add('hidden');
    if (containerSet9) containerSet9.classList.add('hidden');
    if (containerSet10) containerSet10.classList.add('hidden');
    if (containerSet11) containerSet11.classList.add('hidden');
    if (containerSet12) containerSet12.classList.add('hidden');
    if (containerSet13) containerSet13.classList.add('hidden');
    if (containerSet14) containerSet14.classList.add('hidden');
    
    if (imgMain) {
        imgMain.classList.remove('hidden');
        imgMain.src = defaultImg;
    }
    
    if (titolo) titolo.textContent = defaultTitolo;
    if (testoContenuto) testoContenuto.innerHTML = defaultTesto;
    
    bottoneA?.classList.remove('selected');
    bottoneB?.classList.remove('selected');
    bottoneC?.classList.remove('selected');
    bottoneD?.classList.remove('selected');
    bottoneE?.classList.remove('selected');
    bottone6?.classList.remove('selected');
    bottone7?.classList.remove('selected');
    bottone8?.classList.remove('selected');
    bottone9?.classList.remove('selected');
    bottone10?.classList.remove('selected');
    bottone11?.classList.remove('selected');
    bottone12?.classList.remove('selected');
    bottone13?.classList.remove('selected');
    bottone14?.classList.remove('selected');

    // Reset navigation state
    currentButtonIndex = -1;
    isKeyboardNavigating = false;
    lastInteractionWasMouse = false;
    mouseIsOverButton = false;
    
    const buttons = document.querySelectorAll('.back-button, .link-button');
    buttons.forEach(btn => {
        btn.classList.remove('keyboard-selected');
        btn.blur();
    });
}

// ================= BOTTONI EXTRA =================
function aggiungiBottone(testo, funzioneCallback, indice) {
    const body = document.body;
    const nuovoBottone = document.createElement('div');
    nuovoBottone.className = 'bottone bottone-extra';
    nuovoBottone.setAttribute('data-index', indice);
    nuovoBottone.style.setProperty('--button-index', indice);

    const button = document.createElement('button');
    button.className = 'back-button';
    button.textContent = testo;
    button.onclick = funzioneCallback;

    nuovoBottone.appendChild(button);
    body.appendChild(nuovoBottone);
}

// ================= SCROLL LOCK =================
function disableScroll() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    
    if (scrollbarWidth > 0) {
        const titolo = document.getElementById('titolo-h1');
        
        if (titolo) {
            titolo.style.transform = `translateX(calc(-50% - ${scrollbarWidth / 2}px))`;
        }
    }
}

function enableScroll() {
    document.body.style.overflow = '';
    
    const titolo = document.getElementById('titolo-h1');
    
    if (titolo) {
        titolo.style.transform = 'translateX(-50%)';
    }
}

// ================= VIDEO CACHE =================
const videoCache = {};

function preloadVideo(key, src) {
    const video = document.createElement('video');
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.crossOrigin = 'anonymous'; // Aiuta con la cache
    
    // Forza il caricamento completo
    video.addEventListener('loadeddata', () => {
        console.log(`Video ${key} preloaded`);
    });
    
    video.load();
    video.style.display = 'none';
    videoCache[key] = video;
}

// ================= IMMAGINI RANDOM (SET3) =================
var immaginiJSON = [];
var intervalloImmaginiSet3 = null;

function caricaImmaginiJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', './image.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    immaginiJSON = JSON.parse(xhr.responseText).map(item => item.URL);
                    console.log('JSON caricato con successo:', immaginiJSON.length, 'immagini');
                    callback();
                } catch (e) {
                    console.error('Errore nel parsing del JSON:', e);
                    callback(); // Chiama comunque il callback
                }
            } else {
                console.error('Errore nel caricamento del JSON. Status:', xhr.status);
                callback(); // Chiama comunque il callback
            }
        }
    };
    xhr.onerror = function() {
        console.error('Errore di rete nel caricamento del JSON');
        callback();
    };
    xhr.send(null);
}

function selezionaImmagineCasuale() {
    if (immaginiJSON.length === 0) {
        console.warn('Array immaginiJSON vuoto');
        return null;
    }
    var i = Math.floor(Math.random() * immaginiJSON.length);
    console.log('Immagine selezionata:', i, '/', immaginiJSON.length);
    return immaginiJSON[i];
}

function avviaRotazioneImmaginiSet3() {
    const imgSet3 = document.getElementById('immagine-set3');
    if (!imgSet3) return;
    
    // IMMAGINE SEGNAPOSTO
    const immaginePlaceholder = 'immagini/set/placeholder_hysterische.jpg';
    
    // Mostra subito il placeholder
    imgSet3.src = immaginePlaceholder;
    
    let retryCount = 0;
    const maxRetries = 10; // Massimo 10 tentativi (5 secondi totali)
    
    // Funzione per iniziare la rotazione
    const iniziaRotazione = () => {
        if (immaginiJSON.length > 0) {
            console.log('✅ Avvio rotazione immagini Set3 con', immaginiJSON.length, 'immagini');
            
            // Prima immagine dopo un breve delay
            setTimeout(() => {
                const nuovaImg = selezionaImmagineCasuale();
                if (nuovaImg) {
                    imgSet3.src = nuovaImg;
                    console.log('Prima immagine caricata:', nuovaImg);
                }
            }, 500);
            
            // Poi avvia l'intervallo per cambiare le immagini
            intervalloImmaginiSet3 = setInterval(() => {
                const nuovaImg = selezionaImmagineCasuale();
                if (nuovaImg) {
                    imgSet3.src = nuovaImg;
                }
            }, 2000);
        } else {
            retryCount++;
            if (retryCount < maxRetries) {
                console.warn(`⏳ JSON non ancora caricato, riprovo tra 500ms... (tentativo ${retryCount}/${maxRetries})`);
                setTimeout(iniziaRotazione, 500);
            } else {
                console.error('❌ Impossibile caricare il JSON dopo', maxRetries, 'tentativi');
                // Mantieni il placeholder visibile
            }
        }
    };
    
    iniziaRotazione();
}

function fermaRotazioneImmaginiSet3() {
    if (intervalloImmaginiSet3) clearInterval(intervalloImmaginiSet3);
    intervalloImmaginiSet3 = null;
}

// ================= RANDOMIZE POSIZIONE IMMAGINI =================
function randomizeImagePositions(container) {
    const images = container.querySelectorAll('.randomized-image');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const imageSize = 100;
    const margin = 10;
    const occupied = [];

    // Funzione helper per ottenere coordinate assolute
    function getAbsoluteRect(element) {
        const rect = element.getBoundingClientRect();
        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            right: rect.right + window.pageXOffset,
            bottom: rect.bottom + window.pageYOffset,
            width: rect.width,
            height: rect.height
        };
    }
    
    // Ottieni le aree occupate dai testi
    const testoContenuto = document.getElementById('testo-contenuto');
    const titolo = document.getElementById('titolo-h1');
    const keywordsContainer = document.getElementById('keywords-container');
    
    const safetyMargin = margin * 4;
    
    if (testoContenuto && testoContenuto.offsetParent !== null) {
        const rect = getAbsoluteRect(testoContenuto);
        occupied.push({
            left: rect.left - safetyMargin,
            top: rect.top - safetyMargin,
            right: rect.right + safetyMargin,
            bottom: rect.bottom + safetyMargin
        });
    }
    
    if (titolo && titolo.offsetParent !== null) {
        const rect = getAbsoluteRect(titolo);
        occupied.push({
            left: rect.left - safetyMargin,
            top: rect.top - safetyMargin,
            right: rect.right + safetyMargin,
            bottom: rect.bottom + safetyMargin
        });
    }
    
    if (keywordsContainer && !keywordsContainer.classList.contains('hidden') && keywordsContainer.offsetParent !== null) {
        const rect = getAbsoluteRect(keywordsContainer);
        occupied.push({
            left: rect.left - safetyMargin,
            top: rect.top - safetyMargin,
            right: rect.right + safetyMargin,
            bottom: rect.bottom + safetyMargin
        });
    }

    // NUOVA STRATEGIA: Dividi lo schermo in griglia e distribuisci uniformemente
    const numImages = images.length;
    const cols = Math.ceil(Math.sqrt(numImages * (viewportWidth / viewportHeight)));
    const rows = Math.ceil(numImages / cols);
    
    // Crea array di celle disponibili
    const cells = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            cells.push({ row, col });
        }
    }
    
    // Mescola le celle per distribuzione randomica ma uniforme
    for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
    }
    
    const cellWidth = viewportWidth / cols;
    const cellHeight = viewportHeight / rows;
    
    // Posiziona le immagini
    images.forEach((img, index) => {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 50;
        
        // Prova prima con la cella assegnata
        if (index < cells.length) {
            const cell = cells[index];
            
            while (!placed && attempts < maxAttempts) {
                // Posizione randomica all'interno della cella
                const cellX = cell.col * cellWidth;
                const cellY = cell.row * cellHeight;
                
                // Aggiungi variazione randomica dentro la cella (80% della dimensione per evitare bordi)
                const randomX = cellX + Math.random() * (cellWidth - imageSize) * 0.8 + (cellWidth * 0.1);
                const randomY = cellY + Math.random() * (cellHeight - imageSize) * 0.8 + (cellHeight * 0.1);
                
                const x = randomX + window.pageXOffset;
                const y = randomY + window.pageYOffset;

                const overlap = occupied.some(pos => (
                    x < pos.right + margin &&
                    x + imageSize + margin > pos.left &&
                    y < pos.bottom + margin &&
                    y + imageSize + margin > pos.top
                ));

                if (!overlap) {
                    img.style.left = x + 'px';
                    img.style.top = y + 'px';
                    occupied.push({ 
                        left: x, 
                        top: y, 
                        right: x + imageSize, 
                        bottom: y + imageSize 
                    });
                    placed = true;
                }
                attempts++;
            }
        }
        
        // Se non è riuscito con la cella, prova posizionamento casuale globale
        if (!placed) {
            attempts = 0;
            while (!placed && attempts < 100) {
                const x = Math.random() * (viewportWidth - imageSize) + window.pageXOffset;
                const y = Math.random() * (viewportHeight - imageSize) + window.pageYOffset;

                const overlap = occupied.some(pos => (
                    x < pos.right + margin &&
                    x + imageSize + margin > pos.left &&
                    y < pos.bottom + margin &&
                    y + imageSize + margin > pos.top
                ));

                if (!overlap) {
                    img.style.left = x + 'px';
                    img.style.top = y + 'px';
                    occupied.push({ 
                        left: x, 
                        top: y, 
                        right: x + imageSize, 
                        bottom: y + imageSize 
                    });
                    placed = true;
                }
                attempts++;
            }
        }
        
        // Ultimo fallback: posiziona negli angoli
        if (!placed) {
            const corners = [
                { x: margin, y: margin }, // Alto-Sinistra
                { x: viewportWidth - imageSize - margin, y: margin }, // Alto-Destra
                { x: margin, y: viewportHeight - imageSize - margin }, // Basso-Sinistra
                { x: viewportWidth - imageSize - margin, y: viewportHeight - imageSize - margin } // Basso-Destra
            ];
            
            const corner = corners[index % corners.length];
            img.style.left = (corner.x + window.pageXOffset) + 'px';
            img.style.top = (corner.y + window.pageYOffset) + 'px';
        }
    });
}

// ================= DOM READY =================
document.addEventListener('DOMContentLoaded', function () {
    const imgMain = document.getElementById('Immagine_Centrata');
    const imgHover = document.getElementById('Immagine_Sottostante');

    // ================= FUNZIONI HOVER (SPOSTATE QUI) =================
    function showHoverImage(src) {
        disableScroll();
        if (imgHover) {
            imgHover.src = src;
            resizeImageToFillViewport(imgHover, src);
            imgHover.classList.remove('hidden');
            requestAnimationFrame(() => imgHover.classList.add('fullscreen'));
        }
    }
    
    function hideHoverImage() {
        enableScroll();
        if (imgHover) {
            imgHover.classList.remove('fullscreen');
            imgHover.classList.add('hidden');
            imgHover.src = '';
            imgHover.style.cssText = '';
        }
    }
    
    function showHoverVideo(videoKey) {
    disableScroll();
    
    let displayVideo = document.getElementById('hover-video');
    
    // Se il video esiste già e corrisponde alla stessa key, riutilizzalo
    if (displayVideo && displayVideo.dataset.videoKey === videoKey) {
        displayVideo.style.display = 'block';
        displayVideo.classList.add('fullscreen');
        displayVideo.currentTime = 0;
        displayVideo.play().catch(e => console.log('Play error:', e));
        resizeVideoToFillViewport(displayVideo); // AGGIUNTO
        return;
    }
    
    // Rimuovi il video esistente se diverso
    if (displayVideo) {
        displayVideo.remove();
    }
    
    const video = videoCache[videoKey];
    if (!video) {
        console.error('Video non trovato:', videoKey);
        return;
    }
    
    // Usa direttamente il video dalla cache invece di clonarlo
    displayVideo = video;
    displayVideo.id = 'hover-video';
    displayVideo.dataset.videoKey = videoKey;
    displayVideo.style.display = 'block';
    displayVideo.style.position = 'fixed';
    displayVideo.classList.add('fullscreen');
    displayVideo.loop = true;
    displayVideo.currentTime = 0;
    
    if (!displayVideo.parentElement) {
        document.body.appendChild(displayVideo);
    }
    
    resizeVideoToFillViewport(displayVideo); // AGGIUNTO
    
    displayVideo.play().catch(e => console.log('Play error:', e));
}
    
        function hideHoverMedia() {
        enableScroll();
        
        if (imgHover) {
            imgHover.classList.remove('fullscreen');
            imgHover.classList.add('hidden');
            imgHover.src = '';
            imgHover.style.cssText = '';
        }
        
        const v = document.getElementById('hover-video');
        if (v) { 
            v.pause();
            v.style.display = 'none';
            v.classList.remove('fullscreen');
            // Non rimuoverlo, nascondilo solo per riutilizzarlo
        }
    }

    //CONTAINER SET
    const containerSet1 = document.querySelector('.container-set1');
    const containerSet2 = document.querySelector('.container-set2');
    const containerSet3 = document.querySelector('.container-set3');
    const containerSet4 = document.querySelector('.container-set4');
    const containerSet5 = document.querySelector('.container-set5');
    // Container fuori viewport
    const containerSet6 = document.querySelector('.container-set6');
    const containerSet7 = document.querySelector('.container-set7');
    const containerSet8 = document.querySelector('.container-set8');
    const containerSet9 = document.querySelector('.container-set9');
    const containerSet10 = document.querySelector('.container-set10');
    const containerSet11 = document.querySelector('.container-set11');
    const containerSet12 = document.querySelector('.container-set12');
    const containerSet13 = document.querySelector('.container-set13');
    const containerSet14 = document.querySelector('.container-set14');
    
    // QUERY IMMAGINI
    const set1Images = containerSet1?.querySelectorAll('.set1-image');
    const set2Images = containerSet2?.querySelectorAll('.set2-image');
    const set6Images = containerSet6?.querySelectorAll('.set6-image');
    const set7Images = containerSet7?.querySelectorAll('.set7-image');
    const set8Images = containerSet8?.querySelectorAll('.set8-image');
    const set9Images = containerSet9?.querySelectorAll('.set9-image');
    const set10Images = containerSet10?.querySelectorAll('.set10-image');
    const set11Images = containerSet11?.querySelectorAll('.set11-image');
    const set12Images = containerSet12?.querySelectorAll('.set12-image');
    const set13Images = containerSet13?.querySelectorAll('.set13-image');
    const set14Images = containerSet14?.querySelectorAll('.set14-image');
    
    //BOTTONI PROGETTO
    const bottoneA = document.querySelector("button[onclick*='set1']");
    const bottoneB = document.querySelector("button[onclick*='set2']");
    const bottoneC = document.querySelector("button[onclick*='set3']");
    const bottoneD = document.querySelector("button[onclick*='set4']");
    const bottoneE = document.querySelector("button[onclick*='set5']");
    // Bottoni fuori viewport
    const bottone6 = document.querySelector("button[onclick*='set6']");
    const bottone7 = document.querySelector("button[onclick*='set7']");
    const bottone8 = document.querySelector("button[onclick*='set8']");
    const bottone9 = document.querySelector("button[onclick*='set9']");
    const bottone10 = document.querySelector("button[onclick*='set10']");
    const bottone11 = document.querySelector("button[onclick*='set11']");
    const bottone12 = document.querySelector("button[onclick*='set12']");
    const bottone13 = document.querySelector("button[onclick*='set13']");
    const bottone14 = document.querySelector("button[onclick*='set14']");
    
    const testoContenuto = document.getElementById('testo-contenuto');
    const titolo = document.getElementById('titolo-h1');

    const defaultImg = 'immagini/base/wp5404034-59414419.png';
    const hoverDefault = 'immagini/base/0031_31A.jpg';

    if (testoContenuto) testoContenuto.innerHTML = translations[currentLanguage].mainText;
    if (titolo) titolo.textContent = translations[currentLanguage].mainTitle;

    // ================= KEYBOARD NAVIGATION SETUP =================
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Rimuovi l'highlight quando si clicca con il mouse
    document.addEventListener('click', (event) => {
        if (event.target.matches('.back-button, .link-button')) {
            currentButtonIndex = -1;
            updateButtonHighlight();
        }
    });

    // Carico immagini JSON
    caricaImmaginiJSON(() => console.log("Immagini JSON caricate:", immaginiJSON.length));

    // ================= PRELOAD =================
    const preloadImages = {};
    function preloadImage(src) {
        if (!preloadImages[src]) {
            const img = new Image();
            img.src = src;
            preloadImages[src] = img;
        }
        return preloadImages[src];
    }
    preloadImage('immagini/set/placeholder_hysterische.jpg'); // <-- AGGIUNGI QUESTA
    preloadImage(hoverDefault);
    [   
        //NWA
        'immagini/alta/NWA/NEWMEDIART_alta.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta2.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta3.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta4.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta5.jpg',
        'immagini/alta/NWA/NEWMEDIART_alta6.jpg',

        //CLUSTER
        'immagini/alta/CLUSTER/CLUSTER_alta.jpg',
        'immagini/alta/CLUSTER/CLUSTER_alta2.jpg',

        //OCLICK
        'immagini/alta/OCLICK/OCLICK_alta.jpg',
        'immagini/alta/OCLICK/OCLICK_alta2.jpg',
        'immagini/alta/OCLICK/OCLICK_alta3.jpg',
        'immagini/alta/OCLICK/OCLICK_alta4.jpg',
        'immagini/alta/OCLICK/OCLICK_alta5.jpg',
        'immagini/alta/OCLICK/OCLICK_alta6.jpg',

        //PZA
        'immagini/alta/PZA/PZA_alta.jpg',
        'immagini/alta/PZA/PZA_alta2.jpg',
        'immagini/alta/PZA/PZA_alta3.jpg',
        'immagini/alta/PZA/PZA_alta4.jpg',
        'immagini/alta/PZA/PZA_alta5.jpg',
        'immagini/alta/PZA/PZA_alta6.jpg',
        'immagini/alta/PZA/PZA_alta7.jpg',
        'immagini/alta/PZA/PZA_alta8.jpg',
        'immagini/alta/PZA/PZA_alta9.jpg',

        //ATEMPO
        'immagini/alta/ATEMPO/ATEMPO_alta.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta2.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta3.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta4.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta5.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta6.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta7.jpg',
        //'immagini/alta/ATEMPO_alta8.jpg',
        'immagini/alta/ATEMPO/ATEMPO_alta9.jpg',

        //MLU
        'immagini/alta/MLU/MLU_alta.jpg',
        //'immagini/alta/MLU_alta2.jpg',
        //'immagini/alta/MLU_alta3.jpg',

        //ORLANDO
        'immagini/alta/ORLANDO/ORLANDO_alta.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta2.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta3.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta4.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta5.jpg',
        'immagini/alta/ORLANDO/ORLANDO_alta6.jpg',
        //'immagini/alta/ORLANDO/ORLANDO_alta7.jpg',
        //'immagini/alta/ORLANDO/ORLANDO_alta8.jpg',

        //ARCAICO
        'immagini/alta/ARCAICO/ARCAICO_alta.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta2.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta3.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta4.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta5.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta6.jpg',
        'immagini/alta/ARCAICO/ARCAICO_alta7.jpg',

        //AKOH
        //'immagini/alta/AKOH/AKOH_alta.jpg',
        'immagini/alta/AKOH/AKOH_alta2.jpg',
        'immagini/alta/AKOH/AKOH_alta3.jpg',
        'immagini/alta/AKOH/AKOH_alta4.jpg',
        'immagini/alta/AKOH/AKOH_alta5.jpg',
        'immagini/alta/AKOH/AKOH_alta6.jpg',
        'immagini/alta/AKOH/AKOH_alta7.jpg',
        'immagini/alta/AKOH/AKOH_alta8.jpg',
        'immagini/alta/AKOH/AKOH_alta9.jpg',

        //VIVIDA
        'immagini/alta/VIVIDA/VIVIDA_alta.jpg',

        //TNF
        //nessuna perchè uso gif

    ].forEach(preloadImage);

    // Precarica video DOPO che il DOM è pronto
    preloadVideo('CLUSTER', 'immagini/alta/CLUSTER/CLUSTER.mp4');
    preloadVideo('AKOH', 'immagini/alta/AKOH/AKOH.mp4');
    preloadVideo('TNF', 'immagini/alta/TNF/TNF.mp4');
    preloadVideo('TNF2', 'immagini/alta/TNF/TNF2.mp4');
    preloadVideo('TNF3', 'immagini/alta/TNF/TNF3.mp4');
    preloadVideo('TNF4', 'immagini/alta/TNF/TNF4.mp4');
    preloadVideo('TNF5', 'immagini/alta/TNF/TNF5.mp4');
    preloadVideo('TNF6', 'immagini/alta/TNF/TNF6.mp4');
    preloadVideo('TNF7', 'immagini/alta/TNF/TNF7.mp4');
    preloadVideo('TNF8', 'immagini/alta/TNF/TNF8.mp4');
    
    // ================= RESIZE HELPER =================
    function resizeImageToFillViewport(img, targetSrc) {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        const pre = preloadImages[targetSrc] || preloadImage(targetSrc);

        if (pre.naturalHeight && pre.naturalWidth) {
            const arImg = pre.naturalWidth / pre.naturalHeight;
            const arView = vw / vh;
            let w, h;
            if (arImg > arView) { h = vh; w = h * arImg; }
            else { w = vw; h = w / arImg; }
            img.style.width = w + 'px';
            img.style.height = h + 'px';
            img.style.left = '50%';
            img.style.top = '50%';
            img.style.transform = 'translate(-50%, -50%)';
            img.style.position = 'fixed';
            img.style.objectFit = 'cover';
        } else {
            pre.onload = () => resizeImageToFillViewport(img, targetSrc);
        }
    }

    function resizeVideoToFillViewport(video) {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    
    // Aspetta che il video sia caricato per ottenere le dimensioni
    const resize = () => {
        if (video.videoWidth && video.videoHeight) {
            const arVideo = video.videoWidth / video.videoHeight;
            const arView = vw / vh;
            let w, h;
            
            if (arVideo > arView) {
                h = vh;
                w = h * arVideo;
            } else {
                w = vw;
                h = w / arVideo;
            }
            
            video.style.width = w + 'px';
            video.style.height = h + 'px';
            video.style.left = '50%';
            video.style.top = '50%';
            video.style.transform = 'translate(-50%, -50%)';
            video.style.position = 'fixed';
            video.style.objectFit = 'cover';
            video.style.minWidth = '100vw';
            video.style.minHeight = '100vh';
        } else {
            // Se non è ancora caricato, riprova quando lo sarà
            video.addEventListener('loadedmetadata', resize, { once: true });
        }
    };
    
    resize();
}

    window.addEventListener('resize', () => {
    if (imgHover && imgHover.classList.contains('fullscreen')) {
        resizeImageToFillViewport(imgHover, imgHover.src);
    }
    
    // AGGIUNTO - Resize video se presente
    const displayVideo = document.getElementById('hover-video');
    if (displayVideo && displayVideo.classList.contains('fullscreen')) {
        resizeVideoToFillViewport(displayVideo);
    }
        if (containerSet1 && !containerSet1.classList.contains('hidden')) randomizeImagePositions(containerSet1);
        if (containerSet2 && !containerSet2.classList.contains('hidden')) randomizeImagePositions(containerSet2);
        if (containerSet6 && !containerSet6.classList.contains('hidden')) randomizeImagePositions(containerSet6);
        if (containerSet7 && !containerSet7.classList.contains('hidden')) randomizeImagePositions(containerSet7);
        if (containerSet8 && !containerSet8.classList.contains('hidden')) randomizeImagePositions(containerSet8);
        if (containerSet9 && !containerSet9.classList.contains('hidden')) randomizeImagePositions(containerSet9);
        if (containerSet10 && !containerSet10.classList.contains('hidden')) randomizeImagePositions(containerSet10);
        if (containerSet11 && !containerSet11.classList.contains('hidden')) randomizeImagePositions(containerSet11);
        if (containerSet12 && !containerSet12.classList.contains('hidden')) randomizeImagePositions(containerSet12);
        if (containerSet13 && !containerSet13.classList.contains('hidden')) randomizeImagePositions(containerSet13);
        if (containerSet14 && !containerSet14.classList.contains('hidden')) randomizeImagePositions(containerSet14);
    });

   
    // Hover Set1
    if (set1Images) {
        set1Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set1Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("CLUSTER_bassa.jpg")) showHoverImage('immagini/alta/CLUSTER/CLUSTER_alta.jpg');
                else if (img.src.includes("CLUSTER_bassa2.jpg")) showHoverImage('immagini/alta/CLUSTER/CLUSTER_alta2.jpg');
                else if (img.src.includes("CLUSTER_bassa3.gif")) showHoverVideo('CLUSTER');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set1Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set2
    if (set2Images) {
        set2Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set2Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("NEWMEDIART_bassa.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta.jpg');
                else if (img.src.includes("NEWMEDIART_bassa2.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta2.jpg');
                else if (img.src.includes("NEWMEDIART_bassa3.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta3.jpg');
                else if (img.src.includes("NEWMEDIART_bassa4.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta4.jpg');
                else if (img.src.includes("NEWMEDIART_bassa5.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta5.jpg');
                else if (img.src.includes("NEWMEDIART_bassa6.jpg")) showHoverImage('immagini/alta/NWA/NEWMEDIART_alta6.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set2Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverImage();
            });
        });
    }

    // Hover Set6 (Pesaro Zona Acustica)
    if (set6Images) {
        set6Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set6Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("PZA_bassa.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta.jpg');
                else if (img.src.includes("PZA_bassa2.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta2.jpg');
                else if (img.src.includes("PZA_bassa3.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta3.jpg');
                else if (img.src.includes("PZA_bassa4.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta4.jpg');
                else if (img.src.includes("PZA_bassa5.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta5.jpg');
                else if (img.src.includes("PZA_bassa6.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta6.jpg');
                else if (img.src.includes("PZA_bassa7.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta7.jpg');
                else if (img.src.includes("PZA_bassa8.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta8.jpg');
                else if (img.src.includes("PZA_bassa9.jpg")) showHoverImage('immagini/alta/PZA/PZA_alta9.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set6Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set7 (TNF)
    if (set7Images) {
        set7Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set7Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("TNF_bassa.gif")) showHoverVideo('TNF');
                if (img.src.includes("TNF_bassa2.gif")) showHoverVideo('TNF2');
                if (img.src.includes("TNF_bassa3.gif")) showHoverVideo('TNF3');
                if (img.src.includes("TNF_bassa4.gif")) showHoverVideo('TNF4');
                if (img.src.includes("TNF_bassa5.gif")) showHoverVideo('TNF5');
                if (img.src.includes("TNF_bassa6.gif")) showHoverVideo('TNF6');
                if (img.src.includes("TNF_bassa7.gif")) showHoverVideo('TNF7');
                if (img.src.includes("TNF_bassa8.gif")) showHoverVideo('TNF8');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set7Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set8 (O Family)
    if (set8Images) {
        set8Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set8Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("OCLICK_bassa.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta.jpg');
                else if (img.src.includes("OCLICK_bassa2.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta2.jpg');
                else if (img.src.includes("OCLICK_bassa3.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta3.jpg');
                else if (img.src.includes("OCLICK_bassa4.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta4.jpg');
                else if (img.src.includes("OCLICK_bassa5.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta5.jpg');
                else if (img.src.includes("OCLICK_bassa6.jpg")) showHoverImage('immagini/alta/OCLICK/OCLICK_alta6.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set8Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set9 (A KIND OF HUMANITY)
    if (set9Images) {
        set9Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set9Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("AKOH_bassa.gif")) showHoverVideo('AKOH');
                else if (img.src.includes("AKOH_bassa2.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta2.jpg');
                else if (img.src.includes("AKOH_bassa3.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta3.jpg');
                else if (img.src.includes("AKOH_bassa4.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta4.jpg');
                else if (img.src.includes("AKOH_bassa5.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta5.jpg');
                else if (img.src.includes("AKOH_bassa6.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta6.jpg');
                else if (img.src.includes("AKOH_bassa7.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta7.jpg');
                else if (img.src.includes("AKOH_bassa8.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta8.jpg');
                else if (img.src.includes("AKOH_bassa9.jpg")) showHoverImage('immagini/alta/AKOH/AKOH_alta9.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set9Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set10 (A-Tempo)
    if (set10Images) {
        set10Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set10Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("ATEMPO_bassa.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta.jpg');
                else if (img.src.includes("ATEMPO_bassa2.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta2.jpg');
                else if (img.src.includes("ATEMPO_bassa3.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta3.jpg');
                else if (img.src.includes("ATEMPO_bassa4.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta4.jpg');
                else if (img.src.includes("ATEMPO_bassa5.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta5.jpg');
                else if (img.src.includes("ATEMPO_bassa6.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta6.jpg');
                else if (img.src.includes("ATEMPO_bassa7.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta7.jpg');
                //else if (img.src.includes("ATEMPO_bassa8.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta8.jpg');
                else if (img.src.includes("ATEMPO_bassa9.jpg")) showHoverImage('immagini/alta/ATEMPO/ATEMPO_alta9.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set10Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set11 (ARCACO)
    if (set11Images) {
        set11Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set11Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("ARCAICO_bassa.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta.jpg');
                else if (img.src.includes("ARCAICO_bassa2.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta2.jpg');
                else if (img.src.includes("ARCAICO_bassa3.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta3.jpg');
                else if (img.src.includes("ARCAICO_bassa4.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta4.jpg');
                else if (img.src.includes("ARCAICO_bassa5.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta5.jpg');
                else if (img.src.includes("ARCAICO_bassa6.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta6.jpg');
                else if (img.src.includes("ARCAICO_bassa7.jpg")) showHoverImage('immagini/alta/ARCAICO/ARCAICO_alta7.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set11Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

// Hover Set12 (MLU)
    if (set12Images) {
        set12Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set12Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("MLU_bassa.jpg")) showHoverImage('immagini/alta/MLU/MLU_alta.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set12Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set13 (ORLANDO)
    if (set13Images) {
        set13Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set13Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("ORLANDO_bassa.gif")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta.jpg');
                else if (img.src.includes("ORLANDO_bassa2.gif")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta2.jpg');
                else if (img.src.includes("ORLANDO_bassa3.gif")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta3.jpg');
                else if (img.src.includes("ORLANDO_bassa4.jpg")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta4.jpg');
                else if (img.src.includes("ORLANDO_bassa5.jpg")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta5.jpg');
                else if (img.src.includes("ORLANDO_bassa6.jpg")) showHoverImage('immagini/alta/ORLANDO/ORLANDO_alta6.jpg');
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set13Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover Set14 (VIVIDA)
    if (set14Images) {
        set14Images.forEach(img => {
            img.addEventListener('mouseover', () => {
                disableScroll();
                set14Images.forEach(o => { if (o !== img) o.style.visibility = 'hidden'; });
                img.style.filter = 'contrast(0%) brightness(1000%)';
                //IMMAGINI DI PROGETTO
                if (img.src.includes("VIVIDA_bassa.jpg")) showHoverImage('immagini/alta/VIVIDA/VIVIDA_alta.jpg');
                
            });
            img.addEventListener('mouseout', () => {
                enableScroll();
                set14Images.forEach(o => { o.style.visibility = 'visible'; o.style.filter = ''; });
                hideHoverMedia();
            });
        });
    }

    // Hover immagine principale
if (imgMain) {
    imgMain.addEventListener('mouseover', () => {
        const isA = bottoneA?.classList.contains('selected');
        const isB = bottoneB?.classList.contains('selected');
        const isC = bottoneC?.classList.contains('selected');
        
        // Solo se NESSUN bottone è selezionato, mostra l'hover default
        if (!isA && !isB && !isC) {
            disableScroll();
            imgMain.src = hoverDefault;
            if (imgHover) imgHover.classList.add('hidden');
        }
        // Se uno dei bottoni è selezionato, l'immagine è già nascosta
        // quindi questo evento non dovrebbe mai verificarsi
    });
    
    imgMain.addEventListener('mouseout', () => {
        const isA = bottoneA?.classList.contains('selected');
        const isB = bottoneB?.classList.contains('selected');
        const isC = bottoneC?.classList.contains('selected');
        
        enableScroll();
        
        // Solo se NESSUN bottone è selezionato, ripristina l'immagine default
        if (!isA && !isB && !isC) {
            imgMain.src = defaultImg;
        }
        
        hideHoverImage();
    });
}

// ================= EVENT LISTENERS LINGUA =================
    const langButtons = document.querySelectorAll('.lang-button');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });

});

// ================== CAMBIA CONTENUTO ==================
function cambiaContenuto(set) {
    const imgMain = document.getElementById('Immagine_Centrata');
    const imgHover = document.getElementById('Immagine_Sottostante');
    const containerSet1 = document.querySelector('.container-set1');
    const containerSet2 = document.querySelector('.container-set2');
    const containerSet3 = document.querySelector('.container-set3');
    const containerSet4 = document.querySelector('.container-set4');
    const containerSet5 = document.querySelector('.container-set5');
    const containerSet6 = document.querySelector('.container-set6');
    const containerSet7 = document.querySelector('.container-set7');
    const containerSet8 = document.querySelector('.container-set8');
    const containerSet9 = document.querySelector('.container-set9');
    const containerSet10 = document.querySelector('.container-set10');
    const containerSet11 = document.querySelector('.container-set11');
    const containerSet12 = document.querySelector('.container-set12');
    const containerSet13 = document.querySelector('.container-set13');
    const containerSet14 = document.querySelector('.container-set14');

    const titolo = document.getElementById('titolo-h1');
    const testoContenuto = document.getElementById('testo-contenuto');
    const bottoneA = document.querySelector("button[onclick*='set1']");
    const bottoneB = document.querySelector("button[onclick*='set2']");
    const bottoneC = document.querySelector("button[onclick*='set3']");
    const bottoneD = document.querySelector("button[onclick*='set4']");
    const bottoneE = document.querySelector("button[onclick*='set5']");
    const bottone6 = document.querySelector("button[onclick*='set6']");
    const bottone7 = document.querySelector("button[onclick*='set7']");
    const bottone8 = document.querySelector("button[onclick*='set8']");
    const bottone9 = document.querySelector("button[onclick*='set9']");
    const bottone10 = document.querySelector("button[onclick*='set10']");
    const bottone11 = document.querySelector("button[onclick*='set11']");
    const bottone12 = document.querySelector("button[onclick*='set12']");
    const bottone13 = document.querySelector("button[onclick*='set13']");
    const bottone14 = document.querySelector("button[onclick*='set14']");

    const defaultImg = 'immagini/base/wp5404034-59414419.png';
    // NUOVO: Nascondi lo switch lingua quando si apre un progetto
    const languageToggle = document.getElementById('language-toggle');

    // Ottieni le traduzioni per la lingua corrente
    const project = translations[currentLanguage].projects[set];

    // Gestione set1 (Cluster)
    if (set === 'set1') {
        if (bottoneA?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet1) {
                containerSet1.classList.remove('hidden');
                randomizeImagePositions(containerSet1);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottoneA) bottoneA.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set2 (New Media Art)
    if (set === 'set2') {
        if (bottoneB?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (containerSet2) {
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
                containerSet2.classList.remove('hidden');
                randomizeImagePositions(containerSet2);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottoneB) bottoneB.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set3 (Hysterische Postkarten)
    if (set === 'set3') {
        if (bottoneC?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet3) containerSet3.classList.remove('hidden');
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottoneC) bottoneC.classList.add('selected');
            avviaRotazioneImmaginiSet3();
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set4 (10 Punk Print)
    if (set === 'set4') {
        if (bottoneD?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet4) containerSet4.classList.remove('hidden');
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottoneD) bottoneD.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set5 (Circolo del Design)
    if (set === 'set5') {
        if (bottoneE?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet5) {
                containerSet5.classList.remove('hidden');
                randomizeImagePositions(containerSet5);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottoneE) bottoneE.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set6 (0721 Pesaro Zona Acustica)
    if (set === 'set6') {
        if (bottone6?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet6) {
                containerSet6.classList.remove('hidden');
                randomizeImagePositions(containerSet6);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottone6) bottone6.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set7 (The North Face)
    if (set === 'set7') {
        if (bottone7?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet7) {
                containerSet7.classList.remove('hidden');
                randomizeImagePositions(containerSet7);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottone7) bottone7.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set8 (O Family)
    if (set === 'set8') {
        if (bottone8?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet8) {
                containerSet8.classList.remove('hidden');
                randomizeImagePositions(containerSet8);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottone8) bottone8.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set9 (A KIND OF HUMANITY)
    if (set === 'set9') {
        if (bottone9?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet9) {
                containerSet9.classList.remove('hidden');
                randomizeImagePositions(containerSet9);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottone9) bottone9.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set10 (A-Tempo)
    if (set === 'set10') {
        if (bottone10?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet10) {
                containerSet10.classList.remove('hidden');
                randomizeImagePositions(containerSet10);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottone10) bottone10.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set11 (ARCAICO)
    if (set === 'set11') {
        if (bottone11?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet11) {
                containerSet11.classList.remove('hidden');
                randomizeImagePositions(containerSet11);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottone11) bottone11.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set12 (Museo in Libera Uscita)
    if (set === 'set12') {
        if (bottone12?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet12) {
                containerSet12.classList.remove('hidden');
                randomizeImagePositions(containerSet12);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottone12) bottone12.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set13 (Inseguendo Orlando)
    if (set === 'set13') {
        if (bottone13?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet13) {
                containerSet13.classList.remove('hidden');
                randomizeImagePositions(containerSet13);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottone13) bottone13.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }

    // Gestione set14 (VIVIDA)
    if (set === 'set14') {
        if (bottone14?.classList.contains('selected')) {
            resetAllContainers();
        } else {
            resetAllContainers();
            if (languageToggle) languageToggle.classList.add('hidden'); // NUOVO
            if (containerSet14) {
                containerSet14.classList.remove('hidden');
                randomizeImagePositions(containerSet14);
            }
            if (imgMain) imgMain.classList.add('hidden');
            if (titolo) titolo.textContent = project.title;
            if (testoContenuto) testoContenuto.innerHTML = project.text;
            if (bottone14) bottone14.classList.add('selected');
            aggiornaKeywords(project.keywords);
        }
    }
}
