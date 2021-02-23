<template>
  <footer class="pt-80">
    <div class="container">
      <div class="row footer-info mb-60">
        <div class="col-md-5 col-sm-6 col-xs-6 mb-sm-30 mb-xs-0 footer-menu">
          <ul class="link">
            <li>
              <b>{{ $t("Products") }}</b>
            </li>
            <li>
              <nuxt-link :to="localePath('/#home')">
                {{ $t("Safe Deal Extension") }}
              </nuxt-link>
            </li>
            <li>
              <a href="https://shop.joinsafedeal.com/" target="_blank">{{
                $t("Safe Deal Shopping Portal")
              }}</a>
            </li>
            <li>
              <nuxt-link :to="localePath('/#help')">
                {{ $t("Online Commerce Security Center") }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30 mb-xs-0 footer-menu">
          <ul class="link">
            <li>
              <b>{{ $t("Mission") }}</b>
            </li>
            <li>
              <nuxt-link :to="localePath('/#help')">
                {{ $t("Support") }}
              </nuxt-link>
            </li>
            <li>
              <a href="https://www.facebook.com/joinsafedeal" target="_blank">{{
                $t("Facebook")
              }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6 mb-sm-30 mb-xs-0 footer-menu">
          <ul class="link">
            <li>
              <b>{{ $t("Agreement") }}</b>
            </li>
            <li>
              <nuxt-link :to="localePath('/agreement')">
                {{ $t("End User License Agreement") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/privacy')">
                {{ $t("Privacy Policy") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/terms')">
                {{ $t("Terms of use") }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />

    <section class="copyright ptb-60">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class>
              © {{ new Date().getFullYear() }} <b>{{ $t("name") }}</b
              >. {{ $t("footer.copyright") }}
              <br />
              <span style="font-size: 13px;">{{ $t("footer.slogan") }}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
