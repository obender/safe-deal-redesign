<template>
  <div class="help-section support">
    <contact-form />
    <div class="container" id="help">
      <div class="row">
        <div class="col-md-7">
          <div class="content">
            <h1>{{ $t("Any help needed?") }}</h1>
            <p>
              {{
                $t(
                  "Contact us if you have any suggestions, questions or any assistance regarding handling scams online"
                )
              }}
            </p>
          </div>
        </div>
        <div class="col-md-5">
          <div class="content">
            <div class="btn-group-vertical">
              <b-btn
                @click="showModal"
                type="button"
                class="btn btn-light list-group-item border-first"
              >
                <img src="/icons/022-internet.svg" />
                {{ $t("Online") }}
              </b-btn>
              <a
                href="https://www.facebook.com/SAFE-DEAL-263882200964746/"
                target="_blank"
              >
                <button type="button" class="btn btn-light list-group-item">
                  <img src="/icons/facebook.svg" />
                  {{ $t("Facebook") }}
                </button>
              </a>
              <a href="mailto:hi@joinsafedeal.com" target="_blank">
                <button type="button" class="btn btn-light list-group-item">
                  <img src="/icons/arroba.svg" />
                  {{ $t("Email") }}
                </button>
              </a>
              <a href="https://m.me/263882200964746" target="_blank">
                <button
                  type="button"
                  class="btn btn-light list-group-item border-first"
                >
                  <img src="/icons/messenger.svg" />
                  {{ $t("Messenger") }}
                </button>
              </a>
              <a href="https://www.joinsafedeal.com/hi" target="_blank">
                <button
                  type="button"
                  class="btn btn-light list-group-item border-first"
                >
                  <img src="/icons/022-internet.svg" />
                  {{ $t("General Feedback") }}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import contactForm from "./help-contact-form";
export default {
  methods: {
    showModal() {
      this.$root.$emit("bv::show::modal", "support");
    }
  },
  components: {
    contactForm
  }
};
</script>
