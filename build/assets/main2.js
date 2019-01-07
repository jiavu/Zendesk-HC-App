// Initialise the Zendesk JavaScript API client
// https://developer.zendesk.com/apps/docs/apps-v2


const startpoint = "https://help.magine.com/hc/de/";
const endpointPrefix = "search?utf8=✓&query=";      // plus Suchbegriff.
//search?utf8=%E2%9C%93&query= // after encodeURI

let client = ZAFClient.init();
client.invoke('resize', { width: '100%', height: '121px' });
/* ^causes an error if submitting form 2nd time. client.invoke is not a function.
    I think it has something to do with my using of <form> in html.
    Working without it now. Can't use .onsubmit() so I have to use a key event listener for Enter/Return key.
*/


function openHC() {
    let url = startpoint;
    let endpoint;

    if ( $("#search-input").val() ) {
        endpoint = endpointPrefix + $("#search-input").val();
        url = startpoint + endpoint;
    }

    window.open( encodeURI(url), "_blank" );

    $("#search-input").val("");
}

// event listening:
jQuery(function($) {

    $("#button").click(openHC);
    //$("#form").submit(openHC);
    //$("#search-input").submit(openHC);
        
    $("#search-input").on('keyup', function (e) {
        if (e.keyCode == 13) { openHC() }
    });

});


/* ////////////////////////////// */

//encodeURIComponent(eingabe);
//encodeURI(eingabe);