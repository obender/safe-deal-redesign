<template>
  <div
    class="exhibition-screen bg-gray-light text-center extension-introduce-global"
  >
    <div class="container">
      <h3>{{ $t("Shopping securely is your superpower") }}</h3>
      <div class="row row-eq-height">
        <div class="col-md-3">
          <div class="icon">
            <img src="/icons/031-firewall.svg" />
          </div>
          <div class="feature-single">
            <h5>
              {{ $t("Eliminate threats,") }} <br />{{
                $t("buy with confidence")
              }}
            </h5>
            <p>
              {{
                $t(
                  "Unique Artificial Intelligence algorithms, effectively protect your shopping experience"
                )
              }}
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="icon">
            <img src="/icons/029-guarantee.svg" />
          </div>
          <div class="feature-single">
            <h5>{{ $t("Zero distraction, Maximum safety") }}</h5>
            <p>
              {{
                $t(
                  "Prevents malicious deals, phishing and scams to help you stay away from trouble"
                )
              }}
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="icon">
            <img src="/icons/search.svg" />
          </div>
          <div class="feature-single">
            <h5>{{ $t("When in doubt, Check it out") }}</h5>
            <p>
              {{
                $t(
                  "Silently analyzes, commerce deals you visit, immediately blocks suspicious activity"
                )
              }}
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="icon">
            <img src="/icons/004-umbrella-3.svg" />
          </div>
          <div class="feature-single">
            <h5>{{ $t("Easy, effective, discreet") }}</h5>
            <p>
              {{
                $t(
                  "Effectively prevents tracking your activities, fully protects your privacy"
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
