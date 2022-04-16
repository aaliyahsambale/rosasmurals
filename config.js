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
    title: 'Art Murals for Leni/Kiko in Marikina',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Mappers 4 Leni/Kiko',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: '17 JP Rizal Calumpang, Marikina',
            image: './images/1.png',
            description: 'Artist: Unknown',
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
            title: 'MA Roxas, Calumpang',
            image: './images/jprizal.jpg',
            description: 'Artists: Unknown',
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
            title: 'Jose Abad Santos San Roque, Marikina',
            image: './images/abadsantos.jpg',
            description: 'Artists: Frain_Manbiotan, Jafet Mercado, @pudpodnalapis, @_sarcartist, @colthyy, xenia',
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
            alignment: 'left',
            hidden: false,
            title: 'I Mendoza, Sta. Elena Marikina',
            image: './images/abadsantos.jpg',
            description: 'Artists: Unknown',
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
            title: '2nd St. Paliparan Sto Niño Marikina',
            image: './images/montage.png',
            description: 'Artists: Unknown',
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
            title: 'Florentino St. Sto Niño Marikina',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Woodridge Heights Monarch Avenue',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Olive St. Cor Lilac St. Marikina',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Sapphire St. Cor Sandalwood St. Marikina',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Sapphire St. Cor Russet St. Marikina',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Bronze St. Cor Rainbow St. Marikina',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Lakandula St. Marikina Heights 1',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Ipil St. Cor Lakandula St. Marikina 1',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Ipil St. Cor Lakandula St. Marikina 2',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Lakandula St. Marikina Heights 2',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Ipil St. Marikina Heights',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'Champagnat St. Marikina',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            title: 'G. Del Pilar St. Cor Sumulong St. Parang Marikina',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
            id: '18',
            alignment: 'fully',
            hidden: false,
            title: 'G. Del Pilar St. Cor Sumulong St. Parang Marikina',
            image: './images/montage.jpg',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
