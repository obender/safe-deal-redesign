<template>
  <div>
    <div class="content-wrap">
      <div id="main" class="container pitch-intro pull--top">
        <section class="p-4 p-lg-5 text-center pull--top">
          <h1 class="col-md-12 col-sm-12">{{ $t("Get in Touch") }}</h1>
          <p>
            {{
              $t(
                "If you have any questions or need help, please fill out the form below, we do our best to respond within 1 business day"
              )
            }}
          </p>

          <form
            class="contact-form d-flex flex-column align-items-center"
            name="support"
            method="POST"
            data-netlify="true"
          >
            <div class="form-group w-75">
              <input
                type="name"
                class="form-control"
                v-bind:placeholder="$t('Your Name')"
                name="name"
                required
                v-model="form.name"
              />
            </div>
            <div class="form-group w-75">
              <input
                type="email"
                class="form-control"
                v-bind:placeholder="$t('Email')"
                name="email"
                required
                v-model="form.email"
              />
            </div>

            <div class="form-group w-75">
              <textarea
                class="form-control"
                type="text"
                v-bind:placeholder="$t('Message')"
                rows="7"
                name="message"
                required
                v-model="form.message"
              ></textarea>
            </div>

            <button
              type="button"
              @click="sendFeedback"
              class="btn btn-primary btn-lg w-75"
            >
              {{ $t("Send message to a friendly human") }}
            </button>
          </form>
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
      )} - ${this.$t("Get in Touch")}`,
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
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    sendFeedback(evt) {
      if (this.form.email) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({ "form-name": "contact", ...this.form })
        })
          .then(() =>
            this.$swal({
              title: $t("Your request has been sent"),
              text: $t(
                "Thank you for contacting us, We do our best to respond within 1 business day"
              )
            })
          )
          .catch(error => alert(error));
      } else {
        this.$swal({
          title: $t("Email Missing"),
          text: $t("Please enter your email address")
        });
        evt.preventDefault();
      }
    }
  }
};
</script>
