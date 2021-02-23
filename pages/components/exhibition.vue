<template>
  <div class="exhibition-screen extension-introduce-first">
    <div class="container">
      <div class="row row-eq-height">
        <div class="col-md-5">
          <h1>{{ $t("Shop Online With Confidence") }}</h1>
          <h3>
            {{
              $t(
                "Don't really know what can go wrong when you shop online? You don't have to"
              )
            }}
            <br />
            {{
              $t(
                "Safe Deal protects you from security issues like phishing, commerce fraud, online scams, and dangerous deals"
              )
            }}
          </h3>
          <install layout="btn btn-primary btn-lg popup btn-block" />
        </div>
        <div class="col-md-7 ml-md-auto pc-display"></div>
        <div class="col-md-7 mobile-display"></div>
      </div>
    </div>
  </div>
</template>
<script>
import install from "./elements/install";
export default {
  components: {
    install
  }
};
</script>
