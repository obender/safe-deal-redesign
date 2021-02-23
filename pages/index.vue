<template>
  <div>
    <exhibition />
    <a name="benefits" />
    <features />
    <a name="about" />
    <about />
    <statistics />
    <a name="press" />
    <press />
    <a name="help" />
    <helpme />
    <install />
  </div>
</template>

<script>
import exhibition from "./components/exhibition";
import features from "./components/features";
import statistics from "./components/statistics";
import about from "./components/about";
import install from "./components/install";
import helpme from "./components/help";
import press from "./components/press";

export default {
  components: {
    exhibition,
    features,
    statistics,
    about,
    install,
    helpme,
    press
  },
  head() {
    return {
      title: this.$t(
        "Safe Deal - protect yourself from bad deals, scams and poor service"
      ),
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
