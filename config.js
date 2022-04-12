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
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'I. Mendoza San Roque, Marikina',
            image: './images/1.png',
            description: 'Artist: Uknown',
            location: {
                center: [121.09605, 14.62926],
                zoom: 19,
                pitch: 60,
                bearing: 167
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
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '17 JP Rizal Calumpang, Marikina',
            image: './images/jprizal.jpg',
            description: 'Artists: Uknown',
            location: {
                center: [121.09269, 14.62263],
                zoom: 19,
                pitch: 60,
                bearing: -88,
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
            id: 'third-identifier',
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
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './images/montage.png',
            description: 'To add more to this map, submit an entry to this <a href="https://docs.google.com/spreadsheets/d/1pjHlUx8UbR4M-BiHHSrOQwmtsYT6Gr79AWItigowR-U/edit?usp=sharing">spreadsheet</a>',
            location: {
                center: [121.10903, 14.64689],
                zoom: 13,
                pitch: 0,
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
