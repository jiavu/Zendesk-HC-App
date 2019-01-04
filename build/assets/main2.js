// Initialise the Zendesk JavaScript API client
// https://developer.zendesk.com/apps/docs/apps-v2


const url = "https://help.magine.com/hc/de/";
let endpoint = "search?utf8=✓&query=";      // plus Suchbegriff.


let client = ZAFClient.init();
client.invoke('resize', { width: '100%', height: '115px' });



//encodeURIComponent(eingabe);