var pokemonPNG = [];
var myPokeControl;
var trackingEnabled = false;
var shownMarker = [];
var cookiedelimchar = 'x';

var PokemonIdList={"BULBASAUR":1,"IVYSAUR":2,"VENUSAUR":3,"CHARMANDER":4,"CHARMELEON":5,"CHARIZARD":6,"SQUIRTLE":7,"WARTORTLE":8,"BLASTOISE":9,"CATERPIE":10,"METAPOD":11,"BUTTERFREE":12,"WEEDLE":13,"KAKUNA":14,"BEEDRILL":15,"PIDGEY":16,"PIDGEOTTO":17,"PIDGEOT":18,"RATTATA":19,"RATICATE":20,"SPEAROW":21,"FEAROW":22,"EKANS":23,"ARBOK":24,"PIKACHU":25,"RAICHU":26,"SANDSHREW":27,"SANDSLASH":28,"NIDORAN_FEMALE":29,"NIDORINA":30,"NIDOQUEEN":31,"NIDORAN_MALE":32,"NIDORINO":33,"NIDOKING":34,"CLEFAIRY":35,"CLEFABLE":36,"VULPIX":37,"NINETALES":38,"JIGGLYPUFF":39,"WIGGLYTUFF":40,"ZUBAT":41,"GOLBAT":42,"ODDISH":43,"GLOOM":44,"VILEPLUME":45,"PARAS":46,"PARASECT":47,"VENONAT":48,"VENOMOTH":49,"DIGLETT":50,"DUGTRIO":51,"MEOWTH":52,"PERSIAN":53,"PSYDUCK":54,"GOLDUCK":55,"MANKEY":56,"PRIMEAPE":57,"GROWLITHE":58,"ARCANINE":59,"POLIWAG":60,"POLIWHIRL":61,"POLIWRATH":62,"ABRA":63,"KADABRA":64,"ALAKAZAM":65,"MACHOP":66,"MACHOKE":67,"MACHAMP":68,"BELLSPROUT":69,"WEEPINBELL":70,"VICTREEBEL":71,"TENTACOOL":72,"TENTACRUEL":73,"GEODUDE":74,"GRAVELER":75,"GOLEM":76,"PONYTA":77,"RAPIDASH":78,"SLOWPOKE":79,"SLOWBRO":80,"MAGNEMITE":81,"MAGNETON":82,"FARFETCHD":83,"DODUO":84,"DODRIO":85,"SEEL":86,"DEWGONG":87,"GRIMER":88,"MUK":89,"SHELLDER":90,"CLOYSTER":91,"GASTLY":92,"HAUNTER":93,"GENGAR":94,"ONIX":95,"DROWZEE":96,"HYPNO":97,"KRABBY":98,"KINGLER":99,"VOLTORB":100,"ELECTRODE":101,"EXEGGCUTE":102,"EXEGGUTOR":103,"CUBONE":104,"MAROWAK":105,"HITMONLEE":106,"HITMONCHAN":107,"LICKITUNG":108,"KOFFING":109,"WEEZING":110,"RHYHORN":111,"RHYDON":112,"CHANSEY":113,"TANGELA":114,"KANGASKHAN":115,"HORSEA":116,"SEADRA":117,"GOLDEEN":118,"SEAKING":119,"STARYU":120,"STARMIE":121,"MR_MIME":122,"SCYTHER":123,"JYNX":124,"ELECTABUZZ":125,"MAGMAR":126,"PINSIR":127,"TAUROS":128,"MAGIKARP":129,"GYARADOS":130,"LAPRAS":131,"DITTO":132,"EEVEE":133,"VAPOREON":134,"JOLTEON":135,"FLAREON":136,"PORYGON":137,"OMANYTE":138,"OMASTAR":139,"KABUTO":140,"KABUTOPS":141,"AERODACTYL":142,"SNORLAX":143,"ARTICUNO":144,"ZAPDOS":145,"MOLTRES":146,"DRATINI":147,"DRAGONAIR":148,"DRAGONITE":149,"MEWTWO":150,"MEW":151};

var pokemonNames={1:'Bulbasaur',2:'Ivysaur',3:'Venusaur',4:'Charmander',5:'Charmeleon',6:'Charizard',7:'Squirtle',8:'Wartortle',9:'Blastoise',10:'Caterpie',11:'Metapod',12:'Butterfree',13:'Weedle',14:'Kakuna',15:'Beedrill',16:'Pidgey',17:'Pidgeotto',18:'Pidgeot',19:'Rattata',20:'Raticate',21:'Spearow',22:'Fearow',23:'Ekans',24:'Arbok',25:'Pikachu',26:'Raichu',27:'Sandshrew',28:'Sandslash',29:'Nidoran F',30:'Nidorina',31:'Nidoqueen',32:'Nidoran M',33:'Nidorino',34:'Nidoking',35:'Clefairy',36:'Clefable',37:'Vulpix',38:'Ninetales',39:'Jigglypuff',40:'Wigglytuff',41:'Zubat',42:'Golbat',43:'Oddish',44:'Gloom',45:'Vileplume',46:'Paras',47:'Parasect',48:'Venonat',49:'Venomoth',50:'Diglett',51:'Dugtrio',52:'Meowth',53:'Persian',54:'Psyduck',55:'Golduck',56:'Mankey',57:'Primeape',58:'Growlithe',59:'Arcanine',60:'Poliwag',61:'Poliwhirl',62:'Poliwrath',63:'Abra',64:'Kadabra',65:'Alakazam',66:'Machop',67:'Machoke',68:'Machamp',69:'Bellsprout',70:'Weepinbell',71:'Victreebel',72:'Tentacool',73:'Tentacruel',74:'Geodude',75:'Graveler',76:'Golem',77:'Ponyta',78:'Rapidash',79:'Slowpoke',80:'Slowbro',81:'Magnemite',82:'Magneton',83:'Farfetch\'d',84:'Doduo',85:'Dodrio',86:'Seel',87:'Dewgong',88:'Grimer',89:'Muk',90:'Shellder',91:'Cloyster',92:'Gastly',93:'Haunter',94:'Gengar',95:'Onix',96:'Drowzee',97:'Hypno',98:'Krabby',99:'Kingler',100:'Voltorb',101:'Electrode',102:'Exeggcute',103:'Exeggutor',104:'Cubone',105:'Marowak',106:'Hitmonlee',107:'Hitmonchan',108:'Lickitung',109:'Koffing',110:'Weezing',111:'Rhyhorn',112:'Rhydon',113:'Chansey',114:'Tangela',115:'Kangaskhan',116:'Horsea',117:'Seadra',118:'Goldeen',119:'Seaking',120:'Staryu',121:'Starmie',122:'Mr. Mime',123:'Scyther',124:'Jynx',125:'Electabuzz',126:'Magmar',127:'Pinsir',128:'Tauros',129:'Magikarp',130:'Gyarados',131:'Lapras',132:'Ditto',133:'Eevee',134:'Vaporeon',135:'Jolteon',136:'Flareon',137:'Porygon',138:'Omanyte',139:'Omastar',140:'Kabuto',141:'Kabutops',142:'Aerodactyl',143:'Snorlax',144:'Articuno',145:'Zapdos',146:'Moltres',147:'Dratini',148:'Dragonair',149:'Dragonite',150:'Mewtwo',151:'Mew',};
var filterdict = {};
var isLoading = false;

L.HtmlIcon = L.Icon.extend({
    options: {},

    initialize: function(options) {
        L.Util.setOptions(this, options);
    },

    createIcon: function() {
        //console.log("Adding pokemon");
        var div = document.createElement('div');
        if(this.options.hide) {
            div.innerHTML =
                '<div class="displaypokemon hidden" data-pokeid="' + this.options.pokemonid  + '">' +
                '<div class="pokeimg">' +
                '<img src="data:image/png;base64,' + pokemonPNG[this.options.pokemonid] + '" />' +
                '</div>' +
                '<div class="remainingtext" data-expire="' + this.options.expire + '"></div>' +
                '</div>';
        } else {
            div.innerHTML =
                '<div class="displaypokemon" data-pokeid="' + this.options.pokemonid  + '">' +
                '<div class="pokeimg">' +
                '<img src="data:image/png;base64,' + pokemonPNG[this.options.pokemonid] + '" />' +
                '</div>' +
                '<div class="remainingtext" data-expire="' + this.options.expire + '"></div>' +
                '</div>';
        }
/*         var displaypokemonDiv = $(div).find('.displaypokemon');
        displaypokemonDiv.tooltip({
            title: pokemonNames[this.options.pokemonid] + '<br>Despawns in ' +
                '<span class=\'remainingtext-tooltip\' data-expire=\'' + this.options.expire + '\'></span>',
            trigger: 'hover focus click',
            html: true
        });
        displaypokemonDiv.on('shown.bs.tooltip', function() {
            calculateRemainingTime(this.parentNode.querySelector('.remainingtext-tooltip'));
        }); */

        return div;
    },

    createShadow: function() {
        return null;
    }
});

var map;

function deleteDespawnedPokemon() {
    var j;
    for (j in shownMarker) {
        var active = shownMarker[j].active;
        var expire = shownMarker[j].expire;
        var now = Date.now();
        if (active == true && expire <= now) {
            map.removeLayer(shownMarker[j].marker);
            shownMarker[j].active = false;
        }
    }
}

function createPokeIcon(pokemonid, timestamp, filtered) {
    return new L.HtmlIcon({
        pokemonid: pokemonid,
        expire: timestamp,
        hide: filtered
    });
}


function loadCache(cp) { //Loads cache around object
    $.getJSON("https://cache.fastpokemap.se/?key=" + window.fingerprint + "&ts=" + window.salt + "&compute=" + window.myIp + "&lat=" + cp.lat + "&lng=" + cp.lng, function(data) {

        //console.log(data.length);
        if (data.length >= 1) {

            var i = 0;
            var spawn = {};

            for (i in data) {
                var cachedSpawn = data[i];
                spawn.encounter_id = cachedSpawn.encounter_id;
                spawn.latitude = cachedSpawn.lnglat.coordinates[1];
                spawn.longitude = cachedSpawn.lnglat.coordinates[0];
                spawn.pokemon_id = cachedSpawn.pokemon_id;
                spawn.expiration_timestamp_ms = new Date(cachedSpawn.expireAt).getTime();
                addPokemonToMap(spawn);
            }
        }
    });
}

var throttledLoadCache = _.throttle(loadCache, 5000);

function addPokemonToMap(spawn) {
    var j;
    var toAdd = true;
    for (j in shownMarker) {
        if (shownMarker[j].id == spawn.encounter_id) {
            toAdd = false;
            break
        }
    }
    if (toAdd) {
        var cp = new L.LatLng(spawn.latitude, spawn.longitude);
        var pokeid = PokemonIdList[spawn.pokemon_id];
        var filtered = false;
        if(parseInt(pokeid) in filterdict) {
            filtered = true;
        }
        var pokeMarker = new L.marker(cp, {
            icon: createPokeIcon(pokeid, spawn.expiration_timestamp_ms, filtered)
        });
        shownMarker.push({
            marker: pokeMarker,
            expire: spawn.expiration_timestamp_ms,
            id: spawn.encounter_id,
            active: true
        });
        map.addLayer(pokeMarker);
        pokeMarker.setLatLng(cp);
    }
}

var isScanning = false;

function getPokemon(lat, lng) {
	
    $.ajax({
        dataType: "json",
        url: "https://api.fastpokemap.se/?key=" + window.fingerprint + "&ts=" + window.salt + "&lat=" + lat + "&lng=" + lng,
        success: function (data) {
			if (data.error && data.error == "overload") {
				return setTimeout(function() { getPokemon(lat,lng); }, 500);
			}
            console.log("Successful scan");
            $(".scan").prop("disabled", false);
            isScanning = false;
            
            /*Scanning button animation*/
            status = 'success';       
            $('.scan').removeClass('active').addClass(status); // Add statuscolor to scanbutton
            setTimeout(function() {
                $('.scan').removeClass(status);
            }, 1500); // Hide status color after 1,5 seconds
            /*End animation section*/
            
            $(".nearby").html('<h3>NEARBY (Tap to see zone)</h3>');

            if (data.result.length >= 1) {
                console.log("Found something");
                var i;
                var bufferRadar = '<h3>NEARBY (Tap to see zone)</h3>';
                var foundNearbyPokemon = false;
                for (i in data.result) {
                    var spawn = data.result[i];
                    if (spawn.spawn_point_id != undefined) {
                        //console.log(spawn.pokemon_id,, spawn.latitude, spawn.longitude);
                        if (spawn.expiration_timestamp_ms <= 0)
                            spawn.expiration_timestamp_ms = Date.now() + 930000;
                        addPokemonToMap(spawn);
                    } else if (spawn.lure_info != undefined) {
                        spawn.encounter_id = spawn.lure_info.encounter_id;
                        spawn.pokemon_id = spawn.lure_info.active_pokemon_id;
                        spawn.expiration_timestamp_ms = spawn.lure_info.lure_expires_timestamp_ms;
                        addPokemonToMap(spawn);
                    } else {
                        foundNearbyPokemon = true;
                        bufferRadar += '<div data-zone="' + spawn.zone + '" class="pokemon"><img src="data:image/png;base64,' + pokemonPNG[PokemonIdList[spawn.pokemon_id]] + '" /></div>';
                    }
                }
                $(".nearby").html(bufferRadar);
            }        
            if (foundNearbyPokemon) {
                $(".nearby").show();
            } else {
                $(".nearby").hide();
            }
	    autoTrack();
        },
        timeout: 50000        
    }).fail( function( xhr, status ) {
        console.log("Scan failed");
        console.log(xhr);
        console.log(status);        
        $(".scan").prop("disabled", false);
        curstatus = 'failed';
        isScanning = false;
        var currfailure = (new Date).getTime();
        $('.scan').data("failid", currfailure);
        $('.scan').removeClass('active').addClass(curstatus); // Add statuscolor to scanbutton
        setTimeout(function() {
            if($('.scan').data("failid") == currfailure) { //make sure the status color of the last failure will always last 1.5s
                $('.scan').removeClass(curstatus);
                currfailure = null;
            }
        }, 1500); // Hide status color after 1,5 seconds
        autoTrack();
    });
}

var nearbyForm;
function DrawS2(S2ID) {
	var S2 = window.S2.S2;
	console.log(S2);
	var latlng = S2.idToLatLng("" + S2ID + "");
	var cell = S2.S2Cell.FromLatLng(latlng, 15);
	var corner = cell.getCornerLatLngs();
	var arrayLatLng = [];
	arrayLatLng.push(new L.LatLng(corner[0].lat, corner[0].lng));
	arrayLatLng.push(new L.LatLng(corner[1].lat, corner[1].lng));
	arrayLatLng.push(new L.LatLng(corner[2].lat, corner[2].lng));
	arrayLatLng.push(new L.LatLng(corner[3].lat, corner[3].lng));
    if (nearbyForm != undefined) {
		map.removeLayer(nearbyForm);
	}	
    nearbyForm = new L.polygon(arrayLatLng);
	map.addLayer(nearbyForm);
}

function findCoordinate(addr) {
    $.getJSON("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find?text=" + addr + "&f=json", function(data) {
        $("#locationBtn").prop("disabled", false);
        $("#locationBtn").html('<span class="glyphicon glyphicon-search" aria-hidden="true"></span>');
        if (data.locations && data.locations[0] && data.locations[0].feature && data.locations[0].feature && data.locations[0].feature.geometry) {
            $('.window').removeClass('show');
            $('.nearby, .left, .center, .right').removeClass('hidden');
            var lat = data.locations[0].feature.geometry.y;
            var lng = data.locations[0].feature.geometry.x;
            var resultLatLng = new L.LatLng(lat, lng);
            window.location.hash = (lat + "," + lng)
            map.setView(resultLatLng, 16);
            marker.setLatLng(resultLatLng);
            throttledLoadCache(resultLatLng);
        } else {
            alert("Couldn't find location... Be less specific");
        }
    });
}

function onLocationFound(event) {
    console.log("New location");
    var cp = new L.LatLng(event.latlng.lat, event.latlng.lng);
    marker.setLatLng(cp);
    map.setView(cp);
    throttledLoadCache(cp);
    
    if(!isScanning) {
        if(!$('.scan').hasClass('active')) {
            $('.scan').removeClass('success').removeClass('failed').addClass('active'); // Start spinning
        }
        $(".scan").prop("disabled", true);
		circle.setLatLng(cp);
		//circleNearby.setLatLng(cp);
        isScanning = true;                    
        getPokemon(cp.lat, cp.lng);
    }
}

function initmap() {

    map = new L.Map('map', {
        attributionControl: false
    });
    //var osmUrl = 'https://jmakarkklfrvdvg.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
    var osmUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
    //var osmUrl = 'https://tiles.getwemap.com/osm_tiles/{z}/{x}/{y}.png'
    var osm = new L.TileLayer(osmUrl, {
        minZoom: 2,
        maxZoom: 18,
		noWrap: true,		
    });

    map.addLayer(marker);
    map.addLayer(osm);
	//map.addLayer(circleNearby);
    map.addLayer(circle);
	
    
    var credits = L.control.attribution().addTo(map);
    //credits.addAttribution('&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors');
    credits.addAttribution('Powered by Esri, HERE, DeLorme, NGA, USGS');

    map.on("click", function(event) {
        var lat = event.latlng.lat;
        var lng = event.latlng.lng;
        var cp = new L.LatLng(lat, lng);
        try {
            //console.log(lat);
            //console.log(lng);
            window.location.hash = (lat + "," + lng)
            marker.setLatLng(cp);
            if(!isScanning) {
                $(".scan").prop("disabled", true);
                isScanning = true;    
                if(!$('.scan').hasClass('active')) {
                    $('.scan').removeClass('success').removeClass('failed').addClass('active'); // Start spinning
                }                
                circle.setLatLng(cp);
				//circleNearby.setLatLng(cp);
                getPokemon(cp.lat, cp.lng);
                //triggerScanTimeout();
            }
        } catch (e) {
            //Pressing enter fires this on some browser...
        }
        throttledLoadCache(cp);
    });
    map.on("dblclick", function(event) {
        var cp = new L.LatLng(event.latlng.lat, event.latlng.lng);
        marker.setLatLng(cp);
    });
    map.locate({
        setView: true,
        maxZoom: 17
    });
    map.on('locationfound', onLocationFound);


}

function autoTrack() { //does this not do anything?
    if (trackingEnabled)
        map.locate({
            setView: true,
            maxZoom: 16
        });
}

function component(x, v) {
    return Math.floor(x / v);
}

function calculateRemainingTime(element) {
    var $element = $(element);
    var ts = ($element.data("expire") / 1000 | 0) - (Date.now() / 1000 | 0);
    var minutes = component(ts, 60) % 60,
        seconds = component(ts, 1) % 60;
    if (seconds < 10)
        seconds = '0' + seconds;
    $element.html(minutes + ":" + seconds);
}

function updateTime() {
    deleteDespawnedPokemon();
    $(".remainingtext, .remainingtext-tooltip").each(function() {
        calculateRemainingTime(this);
    });
}

function parseHash(hash) {
    var defaultLat = "34.0095897345215";
    var defaultLng = "-118.49791288375856";
    var match = /^#(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/.exec(hash);
    if (!match) {
        return [defaultLat, defaultLng];
    }
    return [match[1], match[3]];
}

var marker;
var circle;
//var circleNearby;

/* iPhone (not homescreen) Ads fix */               /* <------- NEW!!! */
var iphoneheight = (window.navigator.userAgent.indexOf('iPhone') != -1 && window.navigator.standalone == false) ? "68px" : "0px";
$("#map").css('height', 'calc(100vh - ('+iphoneheight+' + 100px))');

/* Start iPhone Homescreen fix */
if (window.navigator.userAgent.indexOf('iPhone') != -1 && window.navigator.standalone == true) {
    $('body').addClass('homescreen'); // iPhone site added to homescreen as Webapp (because of the navigationbars are hidden then)
}
/* End iPhone Homescreen fix */

$(function() {    
    $('.nearby').hide(); //Hide nearby box
    $('#menu').slicknav({ label: '' }); //Start Slicknav
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        $('.slicknav_menu').prepend('<div class="message">Get <strong><a href="https://goo.gl/CzM9bc">GoChat for iOS</a></strong> and chat with <br />nearby trainers while scanning!</div>');
    } else if (/(android)/i.test(navigator.userAgent)) {
        $('.slicknav_menu').prepend('<div class="message">Get <strong><a href="https://goo.gl/HhBwtt">GoChat for Android</a></strong> and chat <br />with nearby trainers while scanning!</div>');
    }
    
    
    
    /* Populate filter list */    
    var reversedPokemonNames = _.invert(pokemonNames);
    var orderedPokemonNames = {}
    Object.keys(reversedPokemonNames).sort().forEach(function(key) {
      orderedPokemonNames[key] = reversedPokemonNames[key];
    });
    var filterhtml = "";
    for (var name in orderedPokemonNames) {
        var id = orderedPokemonNames[name];
        var filtertag = 'filter-' + id;
        filterhtml += '<div class="filteritem"><input type=checkbox name="' + id + '" id="' + filtertag + '" /><label for="' + filtertag + '">' + name + '</label></div>';
    }
    $(".inner-filter").html(filterhtml);
    
    /* Load filterdict */
    var filtercookie = Cookies.get('filter');
    if (filtercookie) {
        var filterlist = filtercookie.split(cookiedelimchar);
        filterdict = {};
        for (var i in filterlist){
            filterdict[filterlist[i]] = true;
        }
    }
    
    $.get("https://gist.githubusercontent.com/anonymous/50c284e815df6c81aa53497a305a29f2/raw", function(data) { //Init map
        var pokemons = data.split("\n");
        var i;
        for (i in pokemons) {
            var pokemondata = pokemons[i].split(":");
            if (pokemondata.length == 2) {
                pokemonPNG[pokemondata[0]] = pokemondata[1];
            };
        }

        //Get map starting coordinates
        var parsedLatLng = parseHash(window.location.hash);
        var startLatLng = new L.LatLng(parsedLatLng[0], parsedLatLng[1]);
        console.log(startLatLng);

        //Set up map
        marker = new L.marker(startLatLng, {
            draggable: true
        });
        circle = new L.circle(startLatLng, 200);
		//circleNearby = new L.circle(startLatLng, 200,  {color: 'red', opacity: '0.1', fillColor: '#f03', fillOpacity: 0.1});
		
		/*
        marker.on("drag", function(e) {
            circle.setLatLng(e.latlng);
			//circleNearby
        });
		*/
		
        initmap();
        map.setView(startLatLng, 16);        
        
        L.DomEvent.disableClickPropagation($('.scan')[0]);
        L.DomEvent.disableClickPropagation($('.search')[0]);
        L.DomEvent.disableClickPropagation($('.location')[0]);
        L.DomEvent.disableClickPropagation($('.info')[0]);
        L.DomEvent.disableClickPropagation($('.filter')[0]);
		L.DomEvent.disableClickPropagation($('.nearby')[0]);

        $('.searchbutton').on('click', function(e) {
           
            if ($("#location").val() != "") {
                findCoordinate($("#location").val());
                $("#locationBtn").prop("disabled", true);
                $("#locationBtn").html('...');
            }
        });
        
        throttledLoadCache(startLatLng);
        //_.delay(throttledLoadCache, 500, startLatLng); //delay a little to let map initiate

    });
    
    setInterval(updateTime, 1000);

    /* Start Scan */
    $('.scan').on('click', function() {
        if(!$('.scan').hasClass('active')) {
            $('.scan').removeClass('success').removeClass('failed').addClass('active'); // Start spinning
            
            var cp = marker.getLatLng();
            
            if(!isScanning) {
                if(!$('.scan').hasClass('active')) {
                    $('.scan').removeClass('success').removeClass('failed').addClass('active'); // Start spinning
                }
                $(".scan").prop("disabled", true);
                isScanning = true; 
				circle.setLatLng(cp);
				//circleNearby.setLatLng(cp);
                getPokemon(cp.lat, cp.lng);
            }
        }
    });
    /* End Scan */
    
	
	/* Show Nearby Zone */
	$(document.body).on('click', '.pokemon' ,function()
	{
		//console.log("lol");
        var zone = $(this).data("zone");
		//console.log(zone);
		if (zone != undefined) {			
			DrawS2(zone);			
		}
    });
	
	/* End Show Nearby Zone */
	
    /* Start location */
    $('.location').on('click', function() {        
        if (!trackingEnabled) {
            if(!$('.location').hasClass('active')) { // If locationbutton has been activated
                $('.location').addClass('active');
                trackingEnabled = true;
                console.log("Tracking enabled");
                map.locate({
                    setView: true,
                    maxZoom: 16
                });
            }
        } else {
            trackingEnabled = false;
            $('.location').removeClass('active'); // locationbutton has been deactived
            console.log("Tracking disabled");
        }
    });
    /* End location */
    
    $('.infowindow').addClass('show');
    $('.nearby, .left, .center, .right, .leaflet-control-zoom').addClass('hidden'); /* <--- EDITED!! */
    
    /* Start Notifications */                       /** NEWW!!!!!! NEW!!!! NEW!!!! **/
    $('.notifications').on('click', function() {
        if(!$('.notifications').hasClass('active')) { // If locationbutton has been activated
            $('.notifications').addClass('active');
            setTimeout(function() {
                 alert('Notification!'); // Lolz thats a long time ago I kept a alertbox in code xD
            }, 500); 
        }
        else {
            $('.notifications').removeClass('active'); // locationbutton has been deactived
        } 
    });
    /* End location */
    
    /* Start Windows */
    $('.info').on('click', function() { // Open infowindow
        $('.infowindow').addClass('show');
        $('.left, .center, .right, .leaflet-control-zoom').addClass('hidden'); /* <--- EDITED!! */
        if(!$('.nearby').hasClass('hidden')) {
            $('.nearby').addClass('hidden');
        }
    });
    
    $('.search').on('click', function() { // Open searchwindow        
        $('.searchwindow').addClass('show');
        $('.nearby, .left, .center, .right, .leaflet-control-zoom').addClass('hidden');/* <--- EDITED!! */
        $("#location").focus();
    });
    
    /* Start Filter */    
    $('#openfilter').on('click', function() { // Open filterwindow          /** NEWW!!!!!! NEW!!!! NEW!!!! **/
        $('.filteritem input').each(function() {
            if(this.name in filterdict) {
                this.checked = true;
            }
        });
        $('.filterwindow').addClass('show');
        $('.nearby, .left, .center, .right, .leaflet-control-zoom').addClass('hidden');/* <--- EDITED!! */
    });
    
    $('#select-all').on('click', function() {
        $('.filteritem input').each(function() {
            this.checked = true;
        });
    });

    $('#deselect-all').on('click', function() {
        $('.filteritem input').each(function() {
            this.checked = false;
        });
    });
    
    $('#applyfilter').on('click', function() {
        var filterlist = []; //get filter from list
        $('.filteritem input').each(function() {
            if(this.checked) {
                filterlist.push(this.name);
            }
        });
        Cookies.set('filter', filterlist.join(cookiedelimchar), {expires: 3650, path: ''}); //update cookies
        filterdict = {}; //update internal data structure
        for (var i in filterlist){
            filterdict[filterlist[i]] = true;
        }
        
        //hide new pokemon and show unhidden ones
        $('.displaypokemon').each(function() {
            var curpokeid = $(this).data("pokeid");
            if(curpokeid in filterdict) {
                //hide
                $(this).addClass('hidden');
            } else {
                //display
                $(this).removeClass('hidden');
            }
        });        
        $('.window').removeClass('show');
        $('.nearby, .left, .center, .right, .leaflet-control-zoom').removeClass('hidden');/* <--- EDITED!! */
    });    
    /* End Filter */
    
    
    $('.close').on('click', function() { // Close all windows
        $('.window').removeClass('show');
        $('.nearby, .left, .center, .right, .leaflet-control-zoom').removeClass('hidden');/* <--- EDITED!! */
    });
    /* End Windows */
    
    /* Start Search */
    $('form.search').on('submit', function(e) { // Searchform has been submitted.
        e.preventDefault();
    }); 
    /* End Search */
    
    $("body").css({
        height: $(window).height()
    });

});



