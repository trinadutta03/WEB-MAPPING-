var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SOUTH24PGS_1 = new ol.format.GeoJSON();
var features_SOUTH24PGS_1 = format_SOUTH24PGS_1.readFeatures(json_SOUTH24PGS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOUTH24PGS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOUTH24PGS_1.addFeatures(features_SOUTH24PGS_1);
var lyr_SOUTH24PGS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOUTH24PGS_1, 
                style: style_SOUTH24PGS_1,
                popuplayertitle: "SOUTH24PGS",
                interactive: true,
                title: '<img src="styles/legend/SOUTH24PGS_1.png" /> SOUTH24PGS'
            });
var format_pointexF_2 = new ol.format.GeoJSON();
var features_pointexF_2 = format_pointexF_2.readFeatures(json_pointexF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointexF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointexF_2.addFeatures(features_pointexF_2);
var lyr_pointexF_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointexF_2, 
                style: style_pointexF_2,
                popuplayertitle: "pointexF",
                interactive: true,
                title: '<img src="styles/legend/pointexF_2.png" /> pointexF'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SOUTH24PGS_1.setVisible(true);lyr_pointexF_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SOUTH24PGS_1,lyr_pointexF_2];
lyr_SOUTH24PGS_1.set('fieldAliases', {'Id': 'Id', });
lyr_pointexF_2.set('fieldAliases', {'PLACE': 'PLACE:', 'PLACE_NAME': 'TOURIST SPOT:', 'ADDRESS': 'LOCATION:', 'PH_NO_': 'CONTACT NO:', 'lat': 'lat', 'long': 'long', });
lyr_SOUTH24PGS_1.set('fieldImages', {'Id': 'TextEdit', });
lyr_pointexF_2.set('fieldImages', {'PLACE': 'TextEdit', 'PLACE_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'PH_NO_': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_SOUTH24PGS_1.set('fieldLabels', {'Id': 'inline label - visible with data', });
lyr_pointexF_2.set('fieldLabels', {'PLACE': 'inline label - visible with data', 'PLACE_NAME': 'inline label - visible with data', 'ADDRESS': 'inline label - visible with data', 'PH_NO_': 'inline label - visible with data', });
lyr_pointexF_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});