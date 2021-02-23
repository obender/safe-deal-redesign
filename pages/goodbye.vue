<script>
import install from "./components/install";

export default {
  components: {
    install
  },
  head() {
    return {
      title: `${this.$t(
        "Safe Deal - protect yourself from bad deals, scams and poor service"
      )} - ${this.$t("FREE Cup of Coffee for answering 3 questions!")}`,
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
      style="width: 100%;text-align: center;margin-top:1.5em;position:relative;"
    >
      {{ $t("FREE Cup of Coffee for answering 3 questions!") }}
    </h1>
    <iframe
      id="typeform-full"
      width="100%"
      height="600"
      frameborder="0"
      allow="camera; microphone; autoplay; encrypted-media;"
      src="https://form.typeform.com/to/V5x7zNy0"
      style="margin-top:-4em;"
    ></iframe>
    <script
      type="text/javascript"
      src="https://embed.typeform.com/embed.js"
    ></script>
    <h6 style="width: 100%;text-align: center;margin-top:1.5em;">
      {{
        $t(
          "We use your feedback to understand how we can make our product better and more useful"
        )
      }}
      <br />
      {{
        $t(
          "We’re committed to improving it, and we hope to see you again in the future"
        )
      }}
    </h6>
    <install />
  </div>
</template>
