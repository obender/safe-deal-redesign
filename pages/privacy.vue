<template>
  <div>
    <div id="main" class="container pitch-intro">
      <div class="row">
        <h1 class="col-md-12 col-sm-12">{{ $t("Privacy Policy") }}</h1>
      </div>
      <div class="row">
        <section class="col-md-12 col-sm-12">
          <p>
            {{ $t("privacy_0") }}
          </p>
          <p>
            <span class="txtU">{{ $t("Information that We collect") }}</span>
          </p>
          <p>
            {{ $t("privacy_1") }}
          </p>
          <p>
            {{ $t("privacy_2") }}
          </p>
          <p>
            {{
              $t(
                "You further agree that SFD may save and archive any content of any nature posted to the Site"
              )
            }}
          </p>
          <p>
            <span class="txtU">{{ $t("Cookies") }}</span>
          </p>
          <p>
            {{ $t("privacy_3") }}
          </p>
          <p>
            <span class="txtU">{{
              $t("Usage and Disclosure of Information")
            }}</span>
          </p>
          <p>
            {{ $t("privacy_4") }}
          </p>
          <p>
            {{ $t("privacy_5") }}
          </p>
          <p>
            {{ $t("privacy_6") }}
          </p>
          <p>
            {{ $t("privacy_7") }}
          </p>
          <p>
            {{ $t("privacy_8") }}
          </p>
          <p>
            {{ $t("privacy_9") }}
          </p>
          <p>
            <span class="txtU">{{ $t("Protection of Information") }}</span>
          </p>
          <p>
            {{ $t("privacy_10") }}
          </p>
          <p>
            {{ $t("privacy_11") }}
          </p>
          <p>
            <span class="txtU"
              >{{
                $t(
                  "Disclosure of Personal Information in the Event of a Merger"
                )
              }}
              <br />
            </span>
            <br />
            {{ $t("privacy_12") }}
          </p>
        </section>
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
      )} - ${this.$t("Privacy Policy")}`,
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
