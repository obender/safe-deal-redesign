export const isBrowser = () => typeof window !== "undefined";

export const detectBrowser = () => {
  const userAgent = navigator.userAgent;
  const isOpera = userAgent.indexOf(" OPR/") >= 0;
  const isFirefox = typeof InstallTrigger !== "undefined";
  const isEdgeChromium = userAgent.indexOf("Edg/") >= 0;
  const isChrome =
    (userAgent.indexOf("Chrome/") >= 0 || userAgent.indexOf("CriOS/") >= 0) &&
    !isEdgeChromium &&
    !isOpera;

  if (isOpera) {
    return "Opera";
  }

  if (isChrome) {
    return "Chrome";
  }

  if (isFirefox) {
    return `Firefox`;
  }

  if (isEdgeChromium) {
    return "EdgeChromium";
  }

  return "Unable to Detect";
};

export const getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
