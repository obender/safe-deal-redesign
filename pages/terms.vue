<template>
  <div>
    <div class="content-wrap">
      <div id="main" class="container pitch-intro">
        <div class="row">
          <h1 class="col-md-12 col-sm-12">{{ $t("Terms of use") }}</h1>
        </div>

        <div class="row">
          <section class="col-md-12 col-sm-12">
            <p>
              {{ $t("terms_0") }}
              <a href="/privacy" target="_blank">{{ $t("Privacy Policy") }}</a>
              {{ $t("and") }}
              <a href="/agreement">{{ $t("End User License Agreement") }}</a>
              {{ $t("terms_1") }}
            </p>
            <p class="txtU">{{ $t("Permitted Use") }}</p>
            <p>
              {{ $t("terms_2") }}
            </p>
            <p>
              {{ $t("terms_3") }}
            </p>
            <p>
              {{ $t("terms_4") }}
            </p>
            <p>
              <span class="txtU"
                >{{ $t("Copyright") }}
                <br />
              </span>
              <br />
              {{ $t("terms_5") }}
            </p>
            <p>
              <span class="txtU"
                >{{ $t("Trademarks") }}
                <br />
              </span>
              <br />
              {{ $t("terms_6") }}
            </p>
            <p>
              <span class="txtU">{{ $t("Third Parties Sites") }}</span>
            </p>
            <p>
              {{ $t("terms_7") }}
            </p>
            <p>
              <span class="txtU"
                >{{ $t("Adding Data and Link Exchange To Your Website") }}
                <br />
              </span>
              <br />
              {{ $t("terms_8") }}
            </p>
            <p>
              <span class="txtU">{{ $t("Modification of the Site") }}</span>
            </p>
            <p>
              {{ $t("terms_9") }}
            </p>
            <p>
              <span class="txtU">{{ $t("User Content") }}</span>
            </p>
            <p>
              {{ $t("terms_10") }}
            </p>
            <p>
              <span class="txtU">{{ $t("Access Details") }}</span>
            </p>
            <p>
              {{ $t("terms_11") }}
            </p>
            <p>
              <span class="txtU"
                >{{ $t("Indemnification") }}
                <br />
              </span>
              <br />
              {{ $t("terms_12") }}
            </p>
            <p>
              <span class="txtU"
                >{{ $t("Site Information") }}
                <br />
              </span>
              <br />
              {{ $t("terms_13") }}
            </p>
            <p>
              <span class="txtU"
                >{{
                  $t("Disclaimer of Warranties and Limitations of Liabilities")
                }}
                <br />
              </span>
              <br />
              {{ $t("terms_14") }}
            </p>
            <p>
              {{ $t("terms_15") }}
            </p>
            <p>
              {{ $t("terms_16") }}
            </p>
            <p>
              {{ $t("terms_17") }}
            </p>
            <p>
              {{ $t("terms_18") }}
            </p>
            <p>
              {{ $t("terms_19") }}
            </p>
            <p>
              <span class="txtU"
                >{{ $t("Governing Law") }}
                <br />
              </span>
              <br />
              {{ $t("terms_20") }}
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
      )} - ${this.$t("Terms of use")}`,
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
