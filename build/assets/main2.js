// Initialise the Zendesk JavaScript API client
// https://developer.zendesk.com/apps/docs/apps-v2


const startpoint = "https://help.magine.com/hc/de/";
const endpointPrefix = "search?utf8=✓&query=";      // plus Suchbegriff.
//search?utf8=%E2%9C%93&query= // after encodeURI

let client = ZAFClient.init();
client.invoke('resize', { width: '100%', height: '115px' });  // causes an error if submitting form 2nd time.


jQuery(function($) {

    $("#form").submit(function() {
    //$("#button").click(function() {

        let url = startpoint;
        let endpoint;

        if ( $("#search-input").val() ) {
            endpoint = endpointPrefix + $("#search-input").val();
            url = startpoint + endpoint;
        }

        window.open( encodeURI(url), "_blank" );

        $("#search-input").val("");

    });

});


/* ////////////////////////////// */

//encodeURIComponent(eingabe);
//encodeURI(eingabe);