/*
    common file with js functions 
*/

export let SessioniOSObject = class {

    constructor(){}

    calliOSNativeApp2(){
      try {
          window.webkit.messageHandlers.callbackHandler.postMessage("okok");
        } catch(err) {
          console.log('The native context does not exist yet');
        }
      }
    

};

export function calliOSNativeApp(value){
  try {
      window.webkit.messageHandlers.callbackHandler.postMessage(value);
    } catch(err) {
      console.log('The native context does not exist yet');
    }
}

export function getOriginPlatform(){
  var standalone = window.navigator.standalone,
  userAgent = window.navigator.userAgent.toLowerCase(),
  safari = /safari/.test(userAgent),
  ios = /iphone|ipod|ipad/.test(userAgent),
  platformResult = "";

  if (ios) {
    if (!standalone && safari) {
      platformResult = "Safari";
    } else if (!standalone && !safari) {
      platformResult = "iOS webview";
    };
  } else {
    if (userAgent.includes('wv')) {
      platformResult = "Android webview";
    } else {
      platformResult = "Chrome";
    }
  }
  console.log("The Origin is from: " + platformResult);
  return platformResult;
}


