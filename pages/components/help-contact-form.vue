<template>
  <b-modal
    id="support"
    ref="support"
    centered
    @ok="sendFeedback"
    v-bind:ok-title="$t('Send message to a friendly human')"
    v-bind:cancel-title="$t('Close')"
    size="lg"
    v-bind:title="
      $t(
        'If you have any questions or need help, please fill out the form below, we do our best to respond within 1 business day'
      )
    "
  >
    <div class="form-wrap">
      <p class="page-info">
        {{
          $t(
            "Send your queries, questions, suggestions, or ask for assistance with online fraud"
          )
        }}
      </p>
      <form
        class="contact-form d-flex flex-column align-items-center"
        name="contact"
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
            name="name"
            required="required"
            v-model="form.message"
          ></textarea>
        </div>

        <input class="d-none" name="bot-field" />
      </form>
    </div>
  </b-modal>
</template>
<script>
export default {
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
              title: this.$t("Your request has been sent"),
              text: this.$t(
                "Thank you for contacting us, we will respond to you as soon as possible"
              )
            })
          )
          .catch(error => alert(error));
      } else {
        this.$swal({
          title: this.$t("Email Missing"),
          text: this.$t("Please enter your email address")
        });
        evt.preventDefault();
      }
    },
    showModal() {
      this.$refs.support.show();
    },
    hideModal() {
      this.$refs.support.hide();
    }
  }
};
</script>
