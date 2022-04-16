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
            description: 'Artist: Uknown',
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
            description: 'Artists: Uknown',
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
            description: 'Frain_Manbiotan, Jafet Mercado, @pudpodnalapis, @_sarcartist, @colthyy, xenia',
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
            description: 'Frain_Manbiotan, Jafet Mercado, @pudpodnalapis, @_sarcartist, @colthyy, xenia',
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
            alignment: 'fully',
            hidden: false,
            title: '2nd St. Paliparan Sto Niño Marikina',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
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
        }
    ]
};
