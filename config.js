var config = {
    style: 'mapbox://styles/maningsambale/cl1umv5mx007115ozb5397dlk',
    accessToken: 'pk.eyJ1IjoibWFuaW5nc2FtYmFsZSIsImEiOiJjamx3YTQya2ExNWdlM3FwM3Z1YWp2bHZrIn0.mk2emL4LkX_uwFPq7nHZsA',
    showMarkers: false,
    markerColor: '#FF44CC',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Art Murals for Leni-Kiko',
    subtitle: 'Mga artista at kabataang tumitindig para sa kulay rosas na bukas.',
    byline: 'By: Aaliyah Sambale (fb - aaliyahsambale, ig - @aaliyuhninjuh)',
    footer: '<a href="https://github.com/aaliyahsambale/rosasmurals" target="_blank">Code</a> and <a href="https://github.com/aaliyahsambale/rosasmurals/tree/main/images" target="_blank">images</a>.<br> Special thanks to:<br><a href="https://www.facebook.com/groups/290894146192646" target="_blank">Youth for Vote for Leni - Marikina City</a><br><a href="https://www.youtube.com/watch?v=-L-MW7Q8hhg&list=PLSQP2MHpAR2MAlIGYwL-mWs5NLRJeLKin" target="_blank">Pinoy Adventure Rider</a><br><a href="https://www.facebook.com/santolenosforleni" target="_blank">Santolan for LeniKiko</a><br> <a href="https://www.facebook.com/groups/1111286456288772" target="_blank">Murals for Leni - Volunteers 🌸🌸🌸</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '24',
            alignment: 'left',
            hidden: false,
            title: 'Palamig ka Muna',
            image: './images/kasi.jpg',
            description: 'Address: Kasi St. Cor. Del Pilar, Calumpang Marikina <br> Artist/s: ART MURAL 4 LENI, Ranie, Jerald, Ching, Jeremy, Eidderf, Alyssa, Nicole, Aeron ',
            location: {
                center: [121.0939882, 14.6219945],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: 'True Leaders Shoe Up & Arangkada Leni-Kiko',
            image: './images/17JPRIZAL.JPG',
            description: 'Address: 17 JP Rizal Calumpang, Marikina <br> Artist/s: ART MURAL 4 LENI (Design: Vanessa Audrey Causing Volunteers: Aeron Jerralj Resurreccion, Arci Igagamao, Jeremy Alonzo, Maki Angeles, Nicole Stodomingo, Rain Therese Manbiotan, Sophia Reyes, Zyra Salomon)',
            location: {
                center: [121.09267, 14.62259],
                zoom: 17.66,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: 'Rosas ang Kulay ng Bukas',
            image: './images/MAROXAS.JPG',
            description: 'Address: 143 MA Roxas St. Calumpang, Marikina <br> Artist/s: ART MURAL 4 LENI (Design: Alyssa Susalta Volunteers: Aeron Jerralj Resurreccion, Jeremy Alonzo, Nicole Stodomingo, Vanessa Audrey Causing, Clark Esplanada)',
            location: {
                center: [121.09331, 14.62289],
                zoom: 17.06,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: 'Leni-Kiko Mural',
            image: './images/abadsantos.jpg',
            description: 'Address: Jose Abad Santos St. Cor Diego Silang St. San Roque, Marikina <br> Artist/s: ART MURAL 4 LENI, Frain_Manbiotan, Jafet Mercado, @pudpodnalapis, @_sarcartist, @colthyy, xenia',
            location: {
                center: [121.09745, 14.62315],
                zoom: 19,
                pitch: 60,
                bearing: -70
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: 'Sa Gobyernong Tapat Umaga ay Sasarap',
            image: './images/IMG_3022.jpg',
            description: 'Address: 11 I. Mendoza St. Sta. Elena, Marikina <br> Artist/s: Fabo',
            location: {
                center: [121.09597, 14.62923],
                zoom: 16.97,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'delapaz',
            alignment: 'left',
            hidden: false,
            title: 'Kulay Rosas ang Bukas',
            image: './images/delapazstonino.jpeg',
            description: 'Address: E. De la Paz St., Sto. Niño, Marikina <br> Artist/s: Unknown',
            location: {
                center: [121.095634,14.6389297],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: 'LENI 2022',
            image: './images/IMG_3016.jpg',
            description: 'Address: 29 2nd St. Paliparan Sto Niño, Marikina, 1800<br> Artist/s: Mary Imbong, Joe Don Garcia, Lily Beltran, Monique Pe Benito',
            location: {
                center: [121.09974, 14.63937],
                zoom: 17.52,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'left',
            hidden: false,
            title: 'Leni Mural',
            image: './images/IMG_3007.jpg',
            description: 'Address: 6 Florentino St. San Diego Compound, Sto Niño Marikina <br> Artist/s: Crisfragata Gomez, Jojit Gutierrez, BWAAAK 2022, LM Sales, H Gomez ',
            location: {
                center: [121.09759, 14.64245],
                zoom: 17.74,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: 'Lahat Kasama',
            image: './images/IMG_2993.jpg',
            description: 'Address: Woodridge Heights Monark Avenue (Links School for Life) <br> Artist/s: ART MURAL 4 LENI, Jake Del Rosario, Luigi Del Rosario, Ciara Del Rosario, Monica Mercado, Bavick Celera, Revil Gabriel, Bella Yela Bautista, Drei Cornelio, Bea Enriquez, Nathan Gabriel A. Bufi, Rafael Nicolas Cabrera, Katherina Fischeder, Nadine Bufi, Vince Rosales, Cody Bundoc, Unoni Abraham, Daniel de Guzman, Cedrick Caguing, Francine Nicholas, Michelle Santos, Pia David, Pat Valencia, Marie Panis, Bianca Ocbena, Claire Senga, Cher Agnes Senga, Joey Suyom, Euna Janna Dela Cruz, Julius Raz. ',
            location: {
                center: [121.09407, 14.65579],
                zoom: 18.13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: 'Marikeños for Leni',
            image: './images/IMG_2851.jpg',
            description: 'Address: Olive St. Cor Lilac St. Marikina <br> Artist/s: Olive Mural Group, Abe Medenilla, Jeska Barayuga, May Topacio.',
            location: {
                center: [121.12123, 14.63696],
                zoom: 17.62,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'right',
            hidden: false,
            title: 'Kabataan Panahon na Upang Tumindig!',
            image: './images/IMG_2861.jpg',
            description: 'Address: Sapphire St. Cor Sandalwood St. Marikina <br> Artist/s: angela, ralph, allei 💗, enju, dabid, elaine, louie, @heyimharveyy, @artnikulas, @xoxoarci, @erarhose, @artof.eiramj, @PDOI_, Shanie, Mirza, JM, PJ ',
            location: {
                center: [121.12075, 14.63958],
                zoom: 16.64,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'left',
            hidden: false,
            title: 'Kulay Rosas ang Bukas',
            image: './images/IMG_2875.jpg',
            description: 'Address: 27 Sapphire St. Cor Russet St. Marikina <br> Artist/s: Unknown',
            location: {
                center: [121.11692, 14.64014],
                zoom: 17.42,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            alignment: 'right',
            hidden: false,
            title: 'Ynang Kalayaan',
            image: './images/IMG_2881.jpg',
            description: 'Address: Bronze St. Cor Rainbow St. Marikina <br> Artist/s: Anthony Landusay, Aiyana Dimalanta ',
            location: {
                center: [121.11590, 14.64074],
                zoom: 17.74,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: 'Liwanag sa karimlan',
            image: './images/IMG_2894.jpg',
            description: 'Address: 73 Lakandula St. Marikina Heights <br> Artist/s: Anthony Landusay, Ding Royales, Marion Timtiman, Bryan Bayungan, Tednicolao Camahalan, Marvel Obenio, Martine Joy Irog, Rara Carillo, Rara Corpuz.',
            location: {
                center: [121.11699, 14.64451],
                zoom: 17.92,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            alignment: 'right',
            hidden: false,
            title: 'Para sa Aming Kinabukasan',
            image: './images/IMG_2909.jpg',
            description: 'Address: Ipil St. Cor Lakandula St. Marikina Heights <br> Artist/s: Team Bigote, Sabariza, Thogz, Baste, Jhun, PACH, Jazz, Alec, Arkin, Gael, Jas, Katsumi, Gia Terry, MDTIMTIMAN,  ',
            location: {
                center: [121.11666, 14.64518],
                zoom: 18.69,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14',
            alignment: 'left',
            hidden: false,
            title: 'Tunay at Pangmatagalang Pagbabago',
            image: './images/IMG_2919.jpg',
            description: 'Address: Ipil St. Cor Lakandula St. Marikina Heights <br> Artist/s: Ferchie, Aiya, Maxenne, Ae, Aminah, Drex, Miguel, J. Buising, M. Hilahan, P. Anarna, C. Bunag, T. Germono, April H., Catherine T. Nathaniel Q., Jzryl S., Maxene W., Erylle B., Maxene Q., Lizbel H., Aiyana D., Aedam G., Miguel I., Janine A., Trisha D., Samantha D., Jazcinth L., Arkin A., Jasmine P., Lizbel, Katsumi, Miguel, April, Nathan, Maxenne, Erylle, Catherine, Janine',
            location: {
                center: [121.11675, 14.64532],
                zoom: 18.69,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15',
            alignment: 'right',
            hidden: false,
            title: 'Let Women Lead',
            image: './images/IMG_2937.jpg',
            description: 'Address: 12 Lakandula St. Marikina Heights <br> Artist/s: Unknown ',
            location: {
                center: [121.11651, 14.64566],
                zoom: 18.51,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16',
            alignment: 'left',
            hidden: false,
            title: 'Leni Mural',
            image: './images/IMG_2947.jpg',
            description: 'Address: 92 Ipil St. Marikina Heights <br> Artist/s: Unknown ',
            location: {
                center: [121.11918, 14.64679],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'deafcom',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/deafcom.jpeg',
            description: 'Address: St. Maria Mattias Center Ipil St., Marikina Heights <br> Artist/s: Deaf for Leni-Kiko ',
            location: {
                center: [121.120534,14.6501876],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'lopek',
            alignment: 'right',
            hidden: false,
            title: 'Abante Babae Tibay at Husay',
            image: './images/genordonez.jpeg',
            description: 'Address: Gen. Ordonez St. cor Lope K Santos Marikina Heights <br> Artist/s: Grace Corpuz',
            location: {
                center: [121.119880,14.64596258],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'orfolilac',
            alignment: 'right',
            hidden: false,
            title: 'Leni Mural',
            image: './images/ordolilac.jpeg',
            description: 'Address: General Ordoñez St. Cor Lilac St. Marikina Heights <br> Artist/s: Unknown',
            location: {
                center: [121.119358,14.6455552],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17',
            alignment: 'right',
            hidden: false,
            title: 'Kulay Rosas ang Bukas',
            image: './images/IMG_2965.jpg',
            description: 'Address: 51 Champagnat St. Marikina Heights <br> Artist/s: C. Colegio, M. Delos Santos, M & M. Hilahan, P. Pascual, C&H Sandoval, C. Balderas, D. Tan, C. Santos',
            location: {
                center: [121.11949, 14.64862],
                zoom: 17.74,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18',
            alignment: 'left',
            hidden: false,
            title: 'The Future is Women',
            image: './images/IMG_2984.jpg',
            description: 'Address: 11 G. Del Pilar St. Cor Sumulong St. Parang Marikina <br> Artist/s: UP Asterisk',
            location: {
                center: [121.11395, 14.65771],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19',
            alignment: 'right',
            hidden: false,
            title: 'Bumoto ng tama para sa mga bata!',
            image: './images/278200798_384947000139385_8816609713986390110_n.jpg',
            description: 'Address: Guizama St., Concepcion Uno, Marikina (in front of Concepcion Elementary School)  <br> Artist/s: Tatak Youth for Leni-Kiko',
            location: {
                center: [121.104089, 14.648529],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '20',
            alignment: 'left',
            hidden: false,
            title: 'The best MAN for the job is a WOMAN.',
            image: './images/BARANGKA.jpeg',
            description: 'Address: Orchid St. Loyola Subdivision Barangka <br> Artist/s: ART MURAL 4 LENI',
            location: {
                center: [121.0842247, 14.63831],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '22',
            alignment: 'left',
            hidden: false,
            title: 'The Leni-Kiko Wave',
            image: './images/66BAYANBAYANAN.jpeg',
            description: 'Address: 66 Bayan-Bayanan Ave. Marikina Heights (infront of Puregold Ayala Marikina Heights) <br> Artist/s: ART MURAL 4 LENI (Design: Jessica Rianna R. Diza; Volunteers: Vanessa Audrey S. Causing, Maria Morata, Nerisa Jenn Banaticla, Alyssa Susalta, Clark Esplanada)',
            location: {
                center: [121.1165213, 14.6481122],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tawiran',
            alignment: 'right',
            hidden: false,
            title: 'Ihatid Natin Siya sa Malacañang',
            image: './images/IMG_4081.jpg',
            description: 'Address: Evangelista corner Tawiran, Santolan, Pasig <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.08584208414,14.610838555496],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'evang1',
            alignment: 'left',
            hidden: false,
            title: 'Ipanalo Natin To',
            image: './images/IMG_4090.jpg',
            description: 'Address: Evangelista St, Pasig, 1800 Metro Manila <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.085244454443,14.611401285184],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'evang2',
            alignment: 'right',
            hidden: false,
            title: 'Rosas Gate',
            image: './images/IMG_4097.jpg',
            description: 'Address: Evangelista St, Pasig, 1800 Metro Manila <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.0851235874,14.611506401437],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'evang3',
            alignment: 'left',
            hidden: false,
            title: 'Kay Leni Tayo',
            image: './images/IMG_4107.jpg',
            description: 'Address: Evangelista St, Pasig, 1800 Metro Manila <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.084720250219,14.612155103871],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'evang4',
            alignment: 'right',
            hidden: false,
            title: 'Leni at Kiko',
            image: './images/IMG_4116.jpg',
            description: 'Address: Evangelista St, Pasig, 1800 Metro Manila <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.083946097642,14.612952393687],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'evang5',
            alignment: 'left',
            hidden: false,
            title: 'Kulay Rosas ang Pasig',
            image: './images/IMG_4121.jpg',
            description: 'Address: Evangelista St, Pasig, 1800 Metro Manila <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.0834442,14.613445852181],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'evang6',
            alignment: 'right',
            hidden: false,
            title: 'Leni at Kiko',
            image: './images/IMG_4126.jpg',
            description: 'Address: Evangelista St, Pasig, 1800 Metro Manila <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.08254045248,14.614277364545],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'evang7',
            alignment: 'left',
            hidden: false,
            title: 'The Last Man Standing is a Woman',
            image: './images/IMG_4132.jpg',
            description: 'Address: Evangelista St, Pasig, 1800 Metro Manila <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.082424782217,14.614467317475],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mayon',
            alignment: 'right',
            hidden: false,
            title: 'The Best Man for the Job is a Woman',
            image: './images/IMG_4151.jpg',
            description: 'Address: Road 1 Maria Soledad Subdivision, Santolan, Pasig <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.082048099488,14.616300817112],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'evang8',
            alignment: 'left',
            hidden: false,
            title: 'Husay at Talino',
            image: './images/IMG_4154.jpg',
            description: 'Address: <br> Evangelista St, Pasig, 1800 Metro Manila Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.0814272,14.616452810511],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'diamondpasig',
            alignment: 'right',
            hidden: false,
            title: 'Kulay Rosas ang Bukas',
            image: './images/IMG_4168.jpg',
            description: 'Address: Diamond (Maria Soledad Subdivision), Santolan, Pasig <br> Artist/s:  Santoleños for Leni-Kiko',
            location: {
                center: [121.082796435803,14.61940717147],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fpacopasig',
            alignment: 'left',
            hidden: false,
            title: 'Rosas Gate',
            image: './images/IMG_4172.jpg',
            description: 'Address: F. Pasco Avenue corner Jade Street Santolan, Pasig <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.082843709737,14.618545993871],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: 'IMG_4171 .jpg',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stalucipasig',
            alignment: 'right',
            hidden: false,
            title: 'Leni Kiko',
            image: './images/IMG_4171.jpg',
            description: 'Address: Santa Lucia, Santolan, Pasig <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.084725446999,14.616421341236],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'grandmuralsantolan',
            alignment: 'fully',
            hidden: false,
            title: 'Santoleños for Leni',
            image: './images/IMG_4192.jpg',
            description: 'Address: Santo Domingo Street corner San Antonio, Santolan, Pasig<br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.083587687463,14.614548424568],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'angono',
            alignment: 'right',
            hidden: false,
            title: 'Walang Maiiwan Dahil Iisa Lang Ang Pinaglalaban',
            image: './images/angono.jpeg',
            description: 'Address: Al Ribaya Rose Garden Event Center along Ibañez Street, Angono, Rizal <br> Artist/s: Unknown',
            location: {
                center: [121.1484424,14.5250019],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'binangonan',
            alignment: 'left',
            hidden: false,
            title: 'Leni-Kiko Mural',
            image: './images/binangonan.jpeg',
            description: 'Address: Kalawaan, Binangonan Rizal <br> Artist/s: Unknown',
            location: {
                center: [121.1828551,14.4902853],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '29',
            alignment: 'left',
            hidden: false,
            title: 'Pililla for Leni-Kiko 2022',
            image: './images/pililla.jpeg',
            description: 'Address: M.A. Roxas St. Barangay Bagumbayan Pililla, Rizal<br> Artist/s: Unknown',
            location: {
                center: [121.312672, 14.4777131],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '23',
            alignment: 'fully',
            hidden: false,
            title: 'Leni-Kiko Volunteer Center',
            image: './images/katiphq.jpg',
            description: 'Address: 284 Katipunan Ave, Quezon City <br> Artist/s: Unknown ',
            location: {
                center: [121.07405, 14.635021],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'manggahan',
            alignment: 'right',
            hidden: false,
            title: 'Angat Buhay Lahat',
            image: './images/manggahan.jpeg',
            description: 'Address: Gomez St., Manggahan, Pasig City <br> Artist/s: Unknown',
            location: {
                center: [121.094744,14.6000636],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'santodomingo',
            alignment: 'left',
            hidden: false,
            title: 'Para sa Kulay Rosas na Bukas',
            image: './images/ilog.jpg',
            description: 'Address: Sgt. de Leon & Paseo De Animales, Pasig <br> Artist/s: Santoleños for Leni-Kiko',
            location: {
                center: [121.0806076,14.614945],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drsixto',
            alignment: 'right',
            hidden: false,
            title: 'Kulay Rosas ang Bukas',
            image: './images/sixtoave.jpeg',
            description: 'Address: 381 Dr Sixto Antonio Avenue, Pasig <br> Artist/s: Unknown ',
            location: {
                center: [121.0833429,14.5818318],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '28',
            alignment: 'left',
            hidden: false,
            title: 'Leni',
            image: './images/goodshepherd.jpeg',
            description: 'Address: Good Shepherd near Batino, Project 3, Quezon City, Metro Manila <br> Artist/s: Unknown',
            location: {
                center: [121.0710769, 14.630451],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '21',
            alignment: 'right',
            hidden: false,
            title: 'Gobyernong Tapat Angat Buhay Lahat',
            image: './images/liberty ave.jpeg',
            description: 'Address: 46-50 Liberty Ave, Cubao, Quezon City <br> Artist/s: Unknown',
            location: {
                center: [121.0589491, 14.6138632],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'balaraqc',
            alignment: 'left',
            hidden: false,
            title: 'Byaheng Leni',
            image: './images/balaraqc.jpeg',
            description: 'Address: La Piazza Event Place by Albergus sa Capitol Hills Drive, Brgy. Matandang Balara, Quezon City <br> Artist/s: Unknown',
            location: {
                center: [121.076186,14.6636263],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'holyspirit',
            alignment: 'right',
            hidden: false,
            title: 'Leni-Kiko Mural',
            image: './images/holyspirit.jpg',
            description: 'Address: Plaza Andrea, Holy Spirit Drive, Quezon City <br> Artist/s: Kevin Moralita',
            location: {
                center: [121.0786366,14.683215],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'maginhawa',
            alignment: 'left',
            hidden: false,
            title: 'Leni-Kiko Mural',
            image: './images/maginhawa.jpg',
            description: 'Address: 19B Maginhawa, Quezon City <br> Artist/s: Unknown',
            location: {
                center: [121.0556065,14.6516262],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '27',
            alignment: 'left',
            hidden: false,
            title: 'Kulay Rosas ang Bukas',
            image: './images/qcveterans.jpeg',
            description: 'Address: 33 Road B, Veterans Village, Quezon City, Metro Manila <br> Artist/s: Art Atak (Artists: AG Saño, Rashid Sandigan, Volunteers: Alonzo Cristobal, Angelo Manalo, Rommel Selorio, Che Cristobal, Dina Ocampo) ',
            location: {
                center: [121.02078, 14.65366],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'novaliches',
            alignment: 'fully',
            hidden: false,
            title: 'Leni-Kiko Para sa Kinabukasan ng mga Bata',
            image: './images/novaliches.jpeg',
            description: 'Address: Dahlia corner Fairlane Fairview Novaliches, QC <br> Artist/s: Unknown ',
            location: {
                center: [121.0661296,14.6998458],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'morningbreeze',
            alignment: 'left',
            hidden: false,
            title: 'Leni-Kiko Mural',
            image: './images/morningbreeze.jpeg',
            description: 'Address: 117 Asuncion Morning Breeze Subd. Caloocan City <br> Artist/s: Youth for Leni Caloocan ',
            location: {
                center: [120.987524110637,14.6588269840316],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eyeclinic',
            alignment: 'fully',
            hidden: false,
            title: 'Angat Lahat',
            image: './images/eyecare.jpg',
            description: 'Address: R. De Guzman Eye Care Optical Clinic, J.Teodoro, Grace Park West, Caloocan City <br> Artist/s: Youth for Leni Caloocan ',
            location: {
                center: [120.982935671209,14.6503843201157],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kapih',
            alignment: 'right',
            hidden: false,
            title: 'LENIwanag Para Sa KIKOnabukasan',
            image: './images/glow.gif',
            description: 'Address: KAPIH Deparo, North Caloocan <br> Artist/s: Jad Dela Cruz and friends ',
            location: {
                center: [121.020955,14.740942],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'alonzo',
            alignment: 'left',
            hidden: false,
            title: 'Leni-Kiko Para Sa Pilipinas',
            image: './images/alonzo.jpg',
            description: 'Address: Alonzo Drive, Deparo, North Caloocan <br> Artist/s: Jad Dela Cruz, Abi Sillas, Denice Mendoza, Romajean Bulan, Pina Lomibao, Jela Cabingue, Trisha Mae, Madie Arron, Josh Zee',
            location: {
                center: [121.0307808,14.7389035],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'malabon',
            alignment: 'right',
            hidden: false,
            title: 'Kulay Rosas ang Bukas',
            image: './images/malabon.jpeg',
            description: 'Address: Paseo de San Antonio Commercial Complex Gov. Pascual Ave, Malabon City <br> Artist/s: Unknown',
            location: {
                center: [120.9542127, 14.6709303],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '25',
            alignment: 'right',
            hidden: false,
            title: 'Leni-Kiko Murals',
            image: './images/samat.jpeg',
            description: 'Address: 889 Samat Street and 175 Lopez Rizal cor., Mandaluyong <br> Artist/s: Audrey Punsalang, Aileen Estoquia, Christopher San Pedro, Gabby Prado, Sofia Torres, Mica Adriano, Rico Lascano, Aileen Dabu, Marco Sumayao',
            location: {
                center: [121.0492287, 14.5837346],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '26',
            alignment: 'left',
            hidden: false,
            title: 'Ibalik ang Tiwala sa Gobyerno',
            image: './images/ndomingo.jpeg',
            description: 'Address: N. Domingo cor. H. Lozada St. San Juan, MM <br> Artist/s: Unknown ',
            location: {
                center: [121.026487, 14.6073814],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'makati',
            alignment: 'left',
            hidden: false,
            title: 'Lets Be Leni',
            image: './images/makati.jpeg',
            description: 'Address: Mayapis cor Sampaloc, San Antonio Village Makati <br> Artist/s: Unknown',
            location: {
                center: [121.006024,14.5620563],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pandacan',
            alignment: 'right',
            hidden: false,
            title: 'Leni-Kiko Mural',
            image: './images/pandacan.jpeg',
            description: 'Address: Beata St. Pandacan, Manila Distrito 6, Manila <br> Artist/s: Unknown ',
            location: {
                center: [121.0076873,14.5911219],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cavite',
            alignment: 'left',
            hidden: false,
            title: 'Sigaw ng Kabiteno: Leni Robredo Kiko Pangilinan',
            image: './images/dasma.jpeg',
            description: 'Address:Dasmarinas Volunteer Center 9044 Aguinaldo Highway, Corner Marilag St, Dasmariñas  <br> Artist/s: Unknown ',
            location: {
                center: [120.9397731,14.3292892],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'batangas',
            alignment: 'right',
            hidden: false,
            title: 'Leni-Kiko 2022',
            image: './images/batangas.jpeg',
            description: 'Address: NDLY Palico, Batangas <br> Artist/s: Unknown',
            location: {
                center: [120.6957286, 14.04759],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pampanga',
            alignment: 'right',
            hidden: false,
            title: 'Mas Radikal Magmahal',
            image: './images/guagua.jpeg',
            description: 'Address: San Pedro, Guagua, Pampanga (in front of Caltex San Pedro) <br> Artist/s: Manuel Madrid and Volunteers from Youth for Leni-Kiko Guagua',
            location: {
                center: [120.6279806,14.9645142],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sariaya',
            alignment: 'fully',
            hidden: false,
            title: 'Sariaya for Leni-Kiko',
            image: './images/sariaya.jpeg',
            description: 'Address: Sariaya, Quezon <br> Artist/s: Jairus Anlacan , Ian Graemar Almazan, Zyra Olivenne Pelaez Alicante, Stacey Lorraine Borero, Gabriel Manalo, John Wayne Bautista, Elise Margrette Abastillas, Kaori Chen Laviña , Akira Yessha Laviña, Alyssa Alzaga, April John Javelosa , Glenne Pada, Ramcel Christian Alba, Jeron Mendoza, Jan Karlo Luna, Jhayson Jamin Samonte, Johaira Laurel Sarip, Cyriss Marie, Kyle Fender Lacson, Rei Pasumbal , Francis Dyro Alpay Cabanas, Ned Glory',
            location: {
                center: [121.4788594,13.9317877],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bataan',
            alignment: 'left',
            hidden: false,
            title: 'Leni-Kiko Mural',
            image: './images/balanga.jpeg',
            description: 'Address: Doña Francisca Subd. Balanga City, Bataan <br> Artist/s: Unknown',
            location: {
                center: [120.5408871,14.684436],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'camsur',
            alignment: 'left',
            hidden: false,
            title: 'Radikal Magmahal!',
            image: './images/camsur.jpeg',
            description: 'Address:Potot, Libmanan, Cam Sur <br> Artist/s: Salingoy Art Group, Rein Ledesma, Geraldvic Badong, Jebo Padernal, & Junie Linsoco ',
            location: {
                center: [123.039735,13.6802069],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'lsa-iligan',
            alignment: 'left',
            hidden: false,
            title: 'La Salle Academy Mural',
            image: './images/lsa-iligan.jpeg',
            description: 'Address: Bro. Raymund Jeffrey Rd, Pala-o, Iligan City  <br> Artist/s: LSA & IITians volunteers',
            location: {
                center: [124.246499, 8.232511],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'montage',
            alignment: 'fully',
            hidden: false,
            //title: 'G. Del Pilar St. Cor Sumulong St. Parang Marikina',
            image: './images/montage.png',
            description: 'For corrections and to add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1obi4KOITLK8v-AhdJ0NM6riAnw1cmYcG4-EB3tTG1M8/edit?usp=sharing" target="_blank">spreadsheet</a>.',
            location: {
                center: [121.190745, 14.537721],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
