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
    title: 'Art Murals for Leni-Kiko in Marikina',
    subtitle: 'Mga Artista at kabataang tumitindig para sa kulay rosas na bukas.',
    byline: 'By: Aaliyah Sambale & Maning Sambale',
    footer: 'Source: <a href="https://github.com/aaliyahsambale/rosasmurals" target="_blank">Code</a> and <a href="https://github.com/aaliyahsambale/rosasmurals/images/" target="_blank">images</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: 'True Leaders Shoe Up',
            image: './images/jprizal.jpg',
            description: 'Address: 17 JP Rizal Calumpang, Marikina <br> Artist/s: Unknown',
            location: {
                center: [121.09267, 14.62259],
                zoom: 17.66,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            image: './images/IMG_2840.jpg',
            description: 'Address: 143 MA Roxas St. Calumpang, Marikina <br> Artist/s: Unknown',
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
            description: 'Address: Jose Abad Santos St. Cor Diego Silang St. San Roque, Marikina <br> Artist/s: Frain_Manbiotan, Jafet Mercado, @pudpodnalapis, @_sarcartist, @colthyy, xenia',
            location: {
                center: [121.09745, 14.62315],
                zoom: 19,
                pitch: 60,
                bearing: -70
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            description: 'Address: 11 I. Mendoza St. Sta. Elena, Marikina <br> Artist/s: Unknown',
            location: {
                center: [121.09597, 14.62923],
                zoom: 16.97,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            description: 'Address: 2nd St. Paliparan Sto Niño Marikina <br> Artist/s: @maryimbong ',
            location: {
                center: [121.09974, 14.63937],
                zoom: 17.52,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: 'Lahat Kasama',
            image: './images/montage.png',
            description: 'Address: Woodridge Heights Monarch Avenue <br> Artist/s: Unknown ',
            location: {
                center: [121.09407, 14.65579],
                zoom: 18.13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: 'Marikeños for Leni',
            image: './images/montage.png',
            description: 'Address: Olive St. Cor Lilac St. Marikina <br> Artist/s: Unknown ',
            location: {
                center: [121.12123, 14.63696],
                zoom: 17.62,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'right',
            hidden: false,
            title: 'Kabataan Panahon na Upang Tumindig!',
            image: './images/montage.png',
            description: 'Address: Sapphire St. Cor Sandalwood St. Marikina <br> Artist/s: angela, ralph, allei 💗, enju, dabid, elaine, louie, @heyimharveyy, @artnikulas, @xoxoarci, @erarhose, @artof.eiramj, @PDOI_, Shanie, Mirza, JM, PJ ',
            location: {
                center: [121.12075, 14.63958],
                zoom: 16.64,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'left',
            hidden: false,
            title: 'Kulay Rosas ang Bukas',
            image: './images/montage.png',
            description: 'Address: 27 Sapphire St. Cor Russet St. Marikina <br> Artist/s: Unknown',
            location: {
                center: [121.11692, 14.64014],
                zoom: 17.42,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            alignment: 'right',
            hidden: false,
            title: 'Leni-Kiko Mural',
            image: './images/montage.png',
            description: 'Address: Bronze St. Cor Rainbow St. Marikina <br> Artist/s: Anthony Landusay, Aiyana Dimalanta ',
            location: {
                center: [121.11590, 14.64074],
                zoom: 17.74,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: 'Pag-Asa',
            image: './images/montage.png',
            description: 'Address: 73 Lakandula St. Marikina Heights <br> Artist/s: Anthony Landusay ',
            location: {
                center: [121.11699, 14.64451],
                zoom: 17.92,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            alignment: 'right',
            hidden: false,
            title: 'Para sa Aming Kinabukasan',
            image: './images/montage.png',
            description: 'Address: Ipil St. Cor Lakandula St. Marikina Heights <br> Artist/s: Team Bigote, Sabariza, Thogz, Baste, Jhun, PACH, Jazz, Alec, Arkin, Gael, Jas, Katsumi, Gia Terry, MDTIMTIMAN,  ',
            location: {
                center: [121.11666, 14.64518],
                zoom: 18.69,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14',
            alignment: 'left',
            hidden: false,
            title: 'In Leni We Trust',
            image: './images/montage.png',
            description: 'Address: Ipil St. Cor Lakandula St. Marikina Heights <br> Artist/s: Ferchie, Aiya, Maxenne, Ae, Aminah, Drex, Miguel, J. Buising, M. Hilahan, P. Anarna, C. Bunag, T. Germono, April H., Catherine T. Nathaniel Q., Jzryl S., Maxene W., Erylle B., Maxene Q., Lizbel H., Aiyana D., Aedam G., Miguel I., Janine A., Trisha D., Samantha D., Jazcinth L., Arkin A., Jasmine P., Lizbel, Katsumi, Miguel, April, Nathan, Maxenne, Erylle, Catherine, Janine',
            location: {
                center: [121.11675, 14.64532],
                zoom: 18.69,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15',
            alignment: 'right',
            hidden: false,
            title: 'Let Women Lead',
            image: './images/montage.png',
            description: 'Address: 12 Lakandula St. Marikina Heights <br> Artist/s: Unknown ',
            location: {
                center: [121.11651, 14.64566],
                zoom: 18.51,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16',
            alignment: 'left',
            hidden: false,
            title: 'Leni Mural',
            image: './images/montage.png',
            description: 'Address: 92 Ipil St. Marikina Heights <br> Artist/s: Unknown ',
            location: {
                center: [121.11918, 14.64679],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17',
            alignment: 'right',
            hidden: false,
            title: 'Kulay Rosas ang Bukas',
            image: './images/montage.png',
            description: 'Address: 51 Champagnat St. Marikina Heights <br> Artist/s: C. Colegio, M. Delos Santos, M & M. Hilahan, P. Pascual, C&H Sandoval, C. Balderas, D. Tan, C. Santos',
            location: {
                center: [121.11949, 14.64862],
                zoom: 17.74,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18',
            alignment: 'left',
            hidden: false,
            title: 'The Future is Women',
            image: './images/montage.png',
            description: 'Address: 11 G. Del Pilar St. Cor Sumulong St. Parang Marikina <br> Artist/s: UP Asterisk',
            location: {
                center: [121.11395, 14.65771],
                zoom: 18.54,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19',
            alignment: 'fully',
            hidden: false,
            //title: 'G. Del Pilar St. Cor Sumulong St. Parang Marikina',
            image: './images/montage.png',
            description: 'For corrections and to add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
            location: {
                center: [121.1033,14.6399],
                zoom: 13,
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
