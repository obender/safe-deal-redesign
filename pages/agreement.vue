<template>
  <div>
    <div class="content-wrap">
      <div id="main" class="container pitch-intro">
        <div class="row">
          <h1 class="col-md-12 col-sm-12">
            {{ $t("End User License Agreement") }}
          </h1>
        </div>
        <div class="row">
          <section class="col-md-12 col-sm-12">
            <p>
              {{ $t("legal_0") }}
            </p>
            <p>
              {{ $t("legal_1") }}
            </p>
            <p>
              {{ $t("legal_2") }}
            </p>
            <p>
              {{ $t("legal_3") }}
            </p>
            <p>
              {{ $t("legal_4") }}
            </p>
            <p>
              {{ $t("legal_5") }}
            </p>
            <p>
              {{ $t("legal_6") }}
            </p>
            <p>
              {{ $t("legal_7") }}
            </p>
            <p>
              {{ $t("legal_8") }}
            </p>
            <p>
              {{ $t("legal_9") }}
            </p>
            <p>
              {{ $t("legal_10") }}
            </p>
            <p>
              {{ $t("legal_11") }}
            </p>
            <p>
              {{ $t("legal_12") }}
            </p>
            <p>
              {{ $t("legal_13") }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `${this.$t(
        "Safe Deal - protect yourself from bad deals, scams and poor service"
      )} - ${this.$t("End User License Agreement")}`,
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
