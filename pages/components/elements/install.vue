<script>
import { isBrowser } from "../../../utils/utils";
const browser = () => {
  if (!isBrowser()) {
    return { link: "", icon: "", notSupported: "" };
  }

  const userAgent = navigator.userAgent;
  const isOpera = userAgent.indexOf(" OPR/") >= 0;
  const isYandex = userAgent.indexOf("YaBrowser") >= 0;
  const isFirefox = typeof InstallTrigger !== "undefined";
  const isEdgeChromium = userAgent.indexOf("Edg/") >= 0;
  const isChrome =
    (userAgent.indexOf("Chrome/") >= 0 || userAgent.indexOf("CriOS/") >= 0) &&
    !isEdgeChromium &&
    !isOpera;
  let icon = isYandex
    ? "/browsers/yandex_icon.png"
    : isOpera
    ? "/browsers/opera_icon.png"
    : isFirefox
    ? "/browsers/firefox_icon.png"
    : isChrome
    ? "/browsers/chrome_icon.png"
    : isEdgeChromium
    ? "/browsers/edge_icon.png"
    : "/browsers/chrome_icon.png";

  let link = isYandex
    ? "https://chrome.google.com/webstore/detail/safe-deal/ejjhlpepcaaaehcemmjgnaekfggehdan"
    : isOpera
    ? "https://addons.opera.com/extensions/details/safe-deal-shopping-aliexpress-ebay-amazon/"
    : isFirefox
    ? "https://addons.mozilla.org/firefox/addon/shopping-advisor-safe-deal"
    : isChrome
    ? "https://chrome.google.com/webstore/detail/safe-deal/ejjhlpepcaaaehcemmjgnaekfggehdan"
    : isEdgeChromium
    ? "https://microsoftedge.microsoft.com/addons/detail/safedeal-your-online-sh/diimbnkonenihjhekcinppckeadneiij"
    : "https://chrome.google.com/webstore/detail/safe-deal/ejjhlpepcaaaehcemmjgnaekfggehdan";

  return {
    link: link,
    icon: icon,
    notSupported: !isChrome && !isOpera && !isFirefox && !isEdgeChromium
  };
};

export default {
  props: ["layout"],
  data: function() {
    return {
      ...browser(),
      text: this.$t("Get Started Now, It's Free!")
    };
  }
};
</script>

<template>
  <client-only>
    <div>
      <a :class="layout" v-bind:href="link">
        <img v-bind:src="icon" class="chrome align-self-center" />
        {{ text }}
      </a>
    </div>
  </client-only>
</template>
