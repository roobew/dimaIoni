var url1= "http://www.alrocol.com/img/ospitalita/appartamento01-big.jpg",
    url2= "http://www.bikedolomite.com/img/appartamento.jpg",
    url3= "http://www.alrocol.com/img/ospitalita/appartamento01-big.jpg",
    url4= "http://www.bikedolomite.com/img/appartamento.jpg";

angular.module('starter.services', [])

.factory('ManageRentTabs', function(){
    var selectedTab = 'pub' ;

    return {
        set : function(value){
            selectedTab = value;
        },
        get : function(){
            return selectedTab;
        }
    };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
         console.log("ELIMINO "+chat);
          console.log("indexOf: "+chats.indexOf(chat));
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('FavouriteList', function($http){

    var favArray = [];

    function callAjax(utenteID){
         favArray.splice(0, favArray.length);
        $http({
            method : "GET",
            url : 'http://rentme.altervista.org/IONIC/get_preferiti.php?'+
                    'id_user='+utenteID,

        }).then(function mySucces(response) {
            console.log("Get_Favourite: ");

            if(response.data!=0){
                for(var i=0; i<response.data.length; i++){
                    favArray.push(response.data[i]);
                }
            }
            else{
                console.log("Nessun Preferito");
            }
            console.log(favArray);
        }, function myError(response) {
            console.log(response.statusText);
        });
    }


    return{
        call : function(idUSER){
            callAjax(idUSER);
            return;
        },

        getFavArray : function(){
            return favArray;
        },
        clear : function (){

                    favArray.splice(0, conArray.length);

             return;


        },

        rimuovi : function (i){
            console.log(favArray);
            favArray.splice(favArray.indexOf(i), 1);


             myUrl=  "http://rentme.altervista.org/IONIC/rimuovi_preferito.php?" +
                        "id_preferito=" +   i.preferitoID
                    ;
                xhttp = new XMLHttpRequest;
                xhttp.open("GET", myUrl, false);
                xhttp.send();
                jResponse=xhttp.response;

            console.log(favArray);
        },

        rimuoviPreferito : function(itemID){
            console.log(favArray);
            for (var i = 0; i < favArray.length; i++) {
                if (favArray[i].id_annuncio == parseInt(itemID)) {
                    favArray.splice(i, 1);
                    console.log(favArray);
                    return;
                }
            }
            console.log("Fav_ non trovato");
        },

        aggiungi : function (newElement){
            favArray.push(newElement);
        },

        getFavourite : function(xx){
            for (var i = 0; i < favArray.length; i++) {
                if (favArray[i].id_annuncio == parseInt(xx)) {
                    //console.log("Trovato");
                    return favArray[i];
                }
            }
            //console.log("Non trovato");
            return null;
        },

        //setFavArray : function(myArray){
        //    favArray = myArray;
       // },

    };

})

.factory('ContactsList', function($http){

    var conArray = [];

    function callAjax(utenteID){
        $http({
            method : "GET",
            url : 'http://rentme.altervista.org/IONIC/get_contatti.php?'+
                    'id_user='+utenteID,

        }).then(function mySucces(response) {
            console.log("Get_Contacts: ");

            if(response.data!=0){
                for(var i=0; i<response.data.length; i++){
                    //console.log(response.data[i]);
                    conArray.push(response.data[i]);
                }
            }
            else{
                console.log("Nessun Contatto");
            }


            console.log(conArray);
        }, function myError(response) {
            console.log(response.statusText);
        });
    }


    return{
        call : function(idUSER){
            callAjax(idUSER);
            return;
        },

        getConArray : function(){
            return conArray;
        },

        rimuovi : function (i){
            console.log(conArray);
            conArray.splice(conArray.indexOf(i), 1);
            console.log(conArray);
        },
         clear : function (){

                    conArray.splice(0, conArray.length);

             return;


        },

        rimuoviContatto : function(itemID){
            console.log(conArray);
            for (var i = 0; i < conArray.length; i++) {
                if (conArray[i].id_annuncio == parseInt(itemID)) {
                    conArray.splice(i, 1);
                    console.log(conArray);
                    return;
                }
            }
            console.log("Fav_ non trovato");
        },

        aggiungi : function (newElement){
            conArray.push(newElement);
        },

        getContacts : function(xx){
            for (var i = 0; i < conArray.length; i++) {
                if (conArray[i].id_annuncio == parseInt(xx)) {
                    //console.log("Trovato");
                    return conArray[i];
                }
            }
            //console.log("Non trovato");
            return null;
        },

        //setFavArray : function(myArray){
        //    conArray = myArray;
       // },

    };

})


.factory('RentPubblicatiList', function($http){

    var pubblicatiArray = [];
    function callAjax(utenteID){
        pubblicatiArray.splice(0, pubblicatiArray.length);
        $http({
            method : "GET",
            url : 'http://rentme.altervista.org/IONIC/get_annuncio.php?'+
                    'id_user='+utenteID,

        }).then(function mySucces(response) {
            console.log("Get_Annuncio: ");

            if(response.data!=0){
                for(var i=0; i<response.data.length; i++){
                    pubblicatiArray.push(response.data[i]);
                }
            }
            else{
                console.log("Nessun Annuncio");
            }

            //console.log(pubblicatiArray);

        }, function myError(response) {
            console.log(response.statusText);
        });
    }

    return {
        call : function(idUSER){
            callAjax(idUSER);
            return;
        },

        getPubblicatiArray : function(){
           //console.log(pubblicatiArray);
            return pubblicatiArray;
        },
        rimuoviPubblicato : function (i){
            //console.log("Ricevo "+i);
            pubblicatiArray.splice(pubblicatiArray.indexOf(i), 1);
            //console.log(pubblicatiArray);
        },

        getPubblicato : function(xx){
            for (var i = 0; i < pubblicatiArray.length; i++) {
                if (pubblicatiArray[i].id_annuncio == parseInt(xx)) {
                    //console.log("Trovato");
                    return pubblicatiArray[i];
                }
            }
            //console.log("Non trovato");
            return null;
        },
        AddNewElement : function(elem){
            pubblicatiArray.push(elem);
        }

    };

})

.factory('BozzeList', function($http){
    var bozzeArray = [];

    function callAjax(utenteID){
          bozzeArray.splice(0, bozzeArray.length);

         console.log(utenteID);

        $http({
            method : "GET",
            url : 'http://rentme.altervista.org/IONIC/get_bozze.php?'+
                  'id_user='+utenteID,

        }).then(function mySucces(response) {
            console.log("Get_Bozze: ");

            if(response.data!=0){
                for(var i=0; i<response.data.length; i++){
                    bozzeArray.push(response.data[i]);
                }
            }
            else{
                console.log("Nessuna Bozza");
            }

        }, function myError(response) {
            console.log(response.statusText);
        });
    }

    return {
        call : function(idUSER){
            callAjax(idUSER);
            return;
        },

        getBozzeArray : function(){
           //console.log(bozzeArray);
            return bozzeArray;
        },


        rimuoviBozza : function (oldBozza){
            //console.log("Ricevo "+i);
            bozzeArray.splice(bozzeArray.indexOf(oldBozza), 1);
            console.log(bozzeArray);
        },

        getBozza : function(xx){
            for (var i = 0; i < bozzeArray.length; i++) {
                if (bozzeArray[i].id_annuncio == parseInt(xx)) {
                    //console.log("Trovato");
                    return bozzeArray[i];
                }
            }
            //console.log("Non trovato");
            return null;
        },

        aggiungiBozza : function(nuovaBozza){

            console.log(nuovaBozza.id_annuncio);

            bozzeArray.push(nuovaBozza);

            console.log(bozzeArray)
        }
    }
})

.factory('NuovoAnnuncioService', function(){
    var annuncioCounter = 300;
    var nuovoAnnuncioArray = [{
        "id_annuncio":annuncioCounter,
        "id_utente":JSON.parse(localStorage.getItem("userData")).idRENTME,
        "titolo":"-",
        "tipo":"-",
        descrizione:"-",
        zona:"-",
        indirizzo:"-",
        num_locali:"-",
        superficie:"-",
        piano:"-",
        posti_letto:"-",
        posti_letto_tot:"-",
        autobus:"-",
        metro:"-",
        treno:"-",
        tram:"-",
        prezzo:"-",
        imgPreview:"",
        img1:"", img2:"", img3:"",img4:"", img5:"", img6:"",
        lat:"", long:""
    }];
    return {
        getNuovoAnnuncioArray : function(){
            //console.log("all!");
            console.log(nuovoAnnuncioArray[0].id_annuncio);
            return nuovoAnnuncioArray[0];
        },

        createNewArray : function(){
            annuncioCounter+=1;
            var x = [{
                "id_annuncio":annuncioCounter,
                "id_utente":JSON.parse(localStorage.getItem("userData")).idRENTME,
                "titolo":"-",
                "tipo":"-",
                descrizione:"-",
                zona:"-",
                indirizzo:"-",
                num_locali:"-",
                superficie:"-",
                piano:"-",
                posti_letto:"-",
                posti_letto_tot:"-",
                autobus:"-",
                metro:"-",
                treno:"-",
                tram:"-",
                prezzo:"-",
                imgPreview:"",
                img1:"", img2:"", img3:"",img4:"", img5:"", img6:"",
                lat:"", long:""
            }];
            console.log(x[0].id_annuncio);
            return x[0];
        },
        clearArray : function(){
            console.log("Clear NuovoAnnuncioArray");

            nuovoAnnuncioArray[0].id_annuncio = annuncioCounter;
            nuovoAnnuncioArray[0].id_utente=JSON.parse(localStorage.getItem("userData")).idRENTME,
            nuovoAnnuncioArray[0].titolo = "-";
            nuovoAnnuncioArray[0].tipo = "-";
            nuovoAnnuncioArray[0].descrizione = "-";
            nuovoAnnuncioArray[0].zona = "-";
            nuovoAnnuncioArray[0].indirizzo = "-";
            nuovoAnnuncioArray[0].locali = "-";
            nuovoAnnuncioArray[0].superficie = "-";
            nuovoAnnuncioArray[0].piano = "-";
            nuovoAnnuncioArray[0].posti_letto = "-";
            nuovoAnnuncioArray[0].posti_letto_tot = "-";
            nuovoAnnuncioArray[0].autobus = "-";
            nuovoAnnuncioArray[0].metro = "-";
            nuovoAnnuncioArray[0].treno = "-";
            nuovoAnnuncioArray[0].tram = "-";
            nuovoAnnuncioArray[0].prezzo = "-";
            nuovoAnnuncioArray[0].imgPreview = "",
            nuovoAnnuncioArray[0].img1 = "",
            nuovoAnnuncioArray[0].img2 = "",
            nuovoAnnuncioArray[0].img3 = "",
            nuovoAnnuncioArray[0].img4 = "",
            nuovoAnnuncioArray[0].img5 = "",
            nuovoAnnuncioArray[0].img6 = "",
            nuovoAnnuncioArray[0].lat = "",
            nuovoAnnuncioArray[0].long = "";
        },

    };

})

.factory('MapService', function(){
    return {
       initialize : function(){

       }
    };
})

.factory('ResultList', function($http){


    var resArray = [];


    function callAjax(zone,address,type,priceStart,priceEnd){

        console.log("http://rentme.altervista.org/IONIC/get_annunci.php?" +
                    "zone=" + zone +
                    "&address="       +  address   +
                    "&tipo="       +  type   +
                    "&min="   +       priceStart                            +
                    "&max="    +    priceEnd);
        resArray = [];
        $http({
            method : "GET",
            url :   "http://rentme.altervista.org/IONIC/get_annunci.php?" +
                    "zone=" + zone +
                    "&address="       +  address   +
                    "&tipo="       +  type   +
                    "&min="   +       priceStart                            +
                    "&max="    +    priceEnd
        }).then(function mySucces(response) {
            console.log("Get_Result: ");

            for(var i=0; i<response.data.length; i++){
                //console.log(response.data[i]);
                resArray.push(response.data[i]);
            }
            console.log(resArray);
        }, function myError(response) {
            console.log(response.statusText);
        });
    };

    function vicino(km){
        console.log("NEAR");
        function distance(lat1, lon1, lat2, lon2, unit) {
            var radlat1 = Math.PI * lat1/180
            var radlat2 = Math.PI * lat2/180
            var radlon1 = Math.PI * lon1/180
            var radlon2 = Math.PI * lon2/180
            var theta = lon1-lon2
            var radtheta = Math.PI * theta/180
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist)
            dist = dist * 180/Math.PI
            dist = dist * 60 * 1.1515
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist
        };

        navigator.geolocation.getCurrentPosition(function(pos) {
             var geocoder = new google.maps.Geocoder();
            var userLatlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
            console.log(pos.coords.latitude);
            console.log(pos.coords.longitude);
            for (var i = 0; i < resArray.length; i++) {
                console.log(i);
                var d = distance(pos.coords.latitude,pos.coords.longitude,resArray[i].lat,resArray[i].lng,'K');
                console.log("ci siamo");
                console.log(i);
                console.log(d);
                if(d>km){
                    console.log("rimuovo");
                    console.log(i);
                    console.log(resArray.length);
                    resArray.splice(i, 1);
                    console.log(resArray.length);
                    i--;
                }
            }
            console.log(resArray.length);

        }, function(error) {
            console.log('Unable to get location: ' + error.message);
        });
    };

    return{
        call : function(zone,address,type,priceStart,priceEnd){

            callAjax(zone,address,type,priceStart,priceEnd);
            return;
        },

        near : function(km){
            if(km!=0)
                vicino(km);
            return;
        },

        getResArray : function(){
            return resArray;
        },

        rimuovi : function (i){
            console.log(resArray);
            resArray.splice(resArray.indexOf(i), 1);
            console.log(resArray);
        },

        rimuoviAnnuncio : function(itemID){
            for (var i = 0; i < resArray.length; i++) {
                if (resArray[i].id_annuncio == parseInt(itemID)) {
                    resArray.splice(i, 1);
                    return;
                }
            }
            console.log("Res_ non trovato");
        },

        aggiungi : function (newElement){
            resArray.push(newElement);
        },

        getAnnuncio : function(xx){
            for (var i = 0; i < resArray.length; i++) {
                if (resArray[i].id_annuncio == parseInt(xx)) {
                    //console.log("Trovato");
                    return resArray[i];
                }
            }
            //console.log("Non trovato");
            return null;
        },

        //setResArray : function(myArray){
        //    resArray = myArray;
       // },

    };

})

.factory("ModificaPasswordController", function(){
    var password1="", password2="";
    var pwArray = [{
        "pw1":"",
        "pw2":""
    }];
    return {
        getPwArray : function(){
            return pwArray;
        }

    }
})

.service('UserService', function() {
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setUser = function(user_data) {
    window.localStorage.starter_facebook_user = JSON.stringify(user_data);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
  };

  return {
    getUser: getUser,
    setUser: setUser
  };
})



;


