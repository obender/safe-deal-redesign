<script>
import install from "./components/install";

export default {
  components: {
    install
  }, head() {
    return {
      title: `${this.$t(
        "Safe Deal - protect yourself from bad deals, scams and poor service"
      )} - ${this.$t("How are we doing?")}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t(
            "Safe Deal - protect yourself from bad deals, scams and poor service"
          )
        }
      ]
    };
  }
};
</script>
<template>
  <div>
    <h1
      style="width: 100%;text-align: center;margin-top:1.5em;position:relative;left:-0.5em;"
    >
      {{ $t("How are we doing?") }}
    </h1>
    <iframe
      id="typeform-full"
      width="100%"
      height="600"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://form.typeform.com/to/OBq51swh"
      style="margin-top:-4em;"
    ></iframe>
    <script
      type="text/javascript"
      src="https://embed.typeform.com/embed.js"
    ></script>
    <h6 style="width: 100%;text-align: center;margin-top:1.5em;">
      {{
        $t(
          "We're always working to improve the Safe Deal experience, so we’d love to hear what’s working and how we can do better"
        )
      }}
    </h6>
    <install />
  </div>
</template>
