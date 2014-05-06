msa = angular.module("adventureRegister", ["ngResource"]);

msa.controller("GuidePlanCtrl", ["$scope", "trip",
    function ($scope, trip) {



        // initialize expand/collapse settings for trip form
        $scope.expandBasicInfo = false;
        $scope.expandRouteInfo = false;
        $scope.expandRelaventEquipment = false;
        $scope.expandSharing = false;
        $scope.expandTripReport = false;


        // populate contact information
        $scope.contacttext = "(914) 434-1529";
        $scope.contactemail = "c.g.burk@gmail.com";
        $scope.name="Chris Burk";
        $scope.email="c.g.burk@gmail.com";
        $scope.password="********";

        // populate flag contact information
        $scope.flagContact_a_name = "Becky Burk";
        $scope.flagContact_a_text = "(303) 815-7796";
        $scope.flagContact_a_email = "becky.e.burk@gmail.com";
        $scope.flagContact_b_name = "Johst Burk";
        $scope.flagContact_b_text = "(914) 434-1533";
        $scope.flagContact_b_email = "johst@aol.com";


        // populate trip a information
        $scope.trip_a_name = "The Gnar";
        $scope.trip_a_type = "ski mountaineering";
        $scope.trip_a_location = "Cameron Pass";

        $scope.trip_a_members = ["Paul George", "Christian Soneru"];

        $scope.trip_a_description = "One night at Nokhu Hut.  Skiing on Mount Mahler.";

        $scope.trip_a_departureDate = "4/5/2014";
        $scope.trip_a_departureTime = "04:00 AM";

        $scope.trip_a_returnDate = "4/6/2014";
        $scope.trip_a_returnTime = "04:00 PM";

        $scope.trip_a_flagDate = "4/5/2014";
        $scope.trip_a_flagTime = "10:00 PM";

        $scope.trip_a_flagContacts = ["Becky Burk", "Jason Killgore"];

        $scope.trip_a_routeDescription = "Approach to Mount Mahler via Agnes Creak drainage.  Climb to summit via north east ridge.  Ski Gnar.";
        $scope.trip_a_shareWithEverybody = true;
        $scope.trip_a_cellPhone = true;
        $scope.trip_a_radio = true;
        $scope.trip_a_personalLocatorBeacon = true;
        $scope.trip_a_tarp = true;
        $scope.trip_a_insulation = true;
        $scope.trip_a_headlamps = true;
        $scope.trip_a_communicationEquipmentNotes = "Chris cell# 914.434.1529.  Radio tuned to AMGA freq.";
        $scope.editTrip_a_communicationEquipment = false;
        $scope.editTrip_a_overnightEquipment = false;



        // populate trip b information
        $scope.trip_b_name = "Eldo climbing";
        $scope.trip_b_type = "Rock climbing";
        $scope.trip_b_location = "Eldo, Red Garden Wall";

        $scope.trip_b_members = ["Chris Sheridan"];

        $scope.trip_b_description = "Touch n Go to the Naked Edge.  Maybe Hawk Eagle Ridge after.";

        $scope.trip_b_departureDate = "4/5/2014";
        $scope.trip_b_departureTime = "08:00 AM";

        $scope.trip_b_returnDate = "4/5/2014";
        $scope.trip_b_returnTime = "06:00 PM";

        $scope.trip_b_flagDate = "4/5/2014";
        $scope.trip_b_flagTime = "10:00 PM";

        $scope.trip_b_flagContacts = ["Sam Killgore", "Chris Burk"];

        $scope.trip_b_routeDescription = "http://www.mountainproject.com/v/the-naked-edge/105748786";
        $scope.trip_b_shareWithEverybody = true;
        $scope.trip_b_cellPhone = true;
        $scope.trip_b_radio = false;
        $scope.trip_b_personalLocatorBeacon = true;
        $scope.trip_b_tarp = false;
        $scope.trip_b_insulation = false;
        $scope.trip_b_headlamps = false;
        $scope.trip_b_communicationEquipmentNotes = "";
        $scope.editTrip_b_communicationEquipment = false;
        $scope.editTrip_b_overnightEquipment = false;


        
        
        // populate trip c information
        $scope.editTrip_c_name = true;
        $scope.editTrip_c_type = true;
        $scope.editTrip_c_location = true;

        $scope.trip_c_members=[""];
        $scope.editTrip_c_members = true;

        $scope.editTrip_c_description = true;

        $scope.editTrip_c_departure = true;

        $scope.editTrip_c_return = true;

        $scope.editTrip_c_flag = true;

        $scope.editTrip_c_flagContacts = true;
        $scope.trip_c_flagContacts = [""];

        $scope.editTrip_c_routeDescription = true;
        $scope.editTrip_c_sharing = true;
        $scope.editTrip_c_communicationEquipment = true;
        $scope.editTrip_c_identificationEquipment = true;
        $scope.editTrip_c_overnightEquipment = true;
        $scope.editTrip_c_tripReport=true;
        $scope.trip_c_expandBasicInfo=true;
        
        
        

        
        

        // functions for adding and removing people from lists
        $scope.addMember = function () {
            // this will not work for multiple trips
            $scope.trip_a_members.push({});
        };

        $scope.removeMember = function (idx) {
            // this will not work for multiple trips
            $scope.trip_a_members.splice(idx, 1);
        };

        $scope.addFlagContact = function () {
            // this will not work for multiple trips
            $scope.trip_a_flagContacts.push({});
        };

        $scope.removeFlagContact = function (idx) {
            // this will not work for multiple trips
            $scope.trip_a_flagContacts.splice(idx, 1);
        };



        // trip types
        $scope.types = {
            rockClimbing: "rock climbing",
            iceClimbing: "ice climbing",
            mountaineering: "mountaineering",
            nordicSkiing: "nordic skiing",
            skiMountaineering: "ski mountaineering",
            other: "other"
        };



        // balling out of control with a model!
        // default selected...
        $scope.trip = new trip({
            //type: $scope.types.rockClimbing

        });



    }
]);

// --------------------------------------------------
//  Angular Models
// --------------------------------------------------
// Ok, so here's where things get a bit more complicated...
// Earlier (above) I was touting the importance of MVC (Model-View-Controller) or MVVM (Model-View-View-Model) architectures. Cool.
// So far we've only dealt with Views and Controllers; so what about Models? We've sort of hacked a model in place by using $scope,
//  which is fine, but that doesn't scale. In essence, we want to encapsulate all of the parameters that define a time calculation
//  into some sort of trip model, or something like that. We've already defined the components above (elevation, units, distance, etc.)
//  and now we need to add some structure. Even though this is going to get confusing, its utility will become apparent when we start
//  doing things like creating lists of trips, saving them to a database, loading them from a database (lookup CRUD), editing them,
//  etc.
// For the time being, don't worry about "$resource"...that will come up later when we integrate this with a database for persistence
msa.factory("trip", ["$resource",
    function ($resource) {
        return $resource("some/RESTful/url/:id", {
            id: "@id"
        });
    }
]);

// --------------------------------------------------
//  Angular Filters
// --------------------------------------------------
// Sweet! A simple display function for time! Notice that despite the fancy declaration as an AngularJS Filter, this is really just a function!
// Also note that, because we've "jammed" this filter onto our "msa" object (i.e. our AngularJS Module/Application), it is available anywhere
//  within our application and can be reused.
msa.filter("prettyTime", function () {
    return function (time) {
        var h, m;
        h = Math.floor(time / 3600);
        m = Math.round((time - 3600 * h) / 60);
        // returns a string of the format: hh:mm:ss
        // the "join(<delimiter>)" function is a sweet native JS function on Arrays (things liek [el0, el1, ..., elN])
        //   that concats the Array elements separated by the <delimiter> string that you can specify (in this case, a colon ":")
        return h < (7 * 24) ? [h + " hr ", (m < 10 ? "0" : "") + m + "  min"].join("") : "way too much...";
    };
});

// --------------------------------------------------
//  Utils
// --------------------------------------------------
// a function to convert from miles/kilometers/feet to meters
function normalize(value, units) {
    switch (units) {
    case "mi":
        return value * 1609;
    case "km":
        return value * 1000;
    case "ft":
        return value / 3.281;
    case "m":
        return value;
    }
}

function unNormalize(value, units) {
    switch (units) {
    case "mi":
        return value / 1609;
    case "km":
        return value / 1000;
    case "ft":
        return value * 3.281;
    case "m":
        return value;
    }
}


function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// --------------------------------------------------
//  Mucking Around!
// --------------------------------------------------
msa.controller("BurkCtrl", ["$scope",
    function ($scope) {
        $scope.mOptions = {
            1: "blue",
            2: "red",
            3: "green"
        };
    }
]);