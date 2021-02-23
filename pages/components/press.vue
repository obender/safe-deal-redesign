<template>
  <div
    class="exhibition-screen bg-gray-light text-center extension-introduce-global"
  >
    <div class="container">
      <div class="row">
        <h1 class="text-xxxl">{{ $t("Press wrote about us") }}</h1>
        <div class="col-md-6">
          <div class="icon">
            <img
              style="width: 9rem; height:1.5em;margin-bottom: 2.5em;"
              src="../../assets/images/Geektime logo.png"
            />
          </div>
          <div class="feature-single">
            <h6>
              {{ $t("Largest tech media platform in Israel") }}
              <br />
            </h6>
            <p>
              {{
                $t(
                  "Best chrome extensions for black friday shopping 11-11-2020"
                )
              }}
            </p>
            <a
              href="https://www.geektime.co.il/chrome-extensions-for-black-friday-shopping-il-11-11-2020/"
              target="_blank"
              class="btn btn-primary"
              >{{ $t("Read more") }}</a
            >
          </div>
        </div>
        <div class="col-md-6">
          <div class="icon">
            <img
              style="width: 9rem;height:3em;"
              src="../../assets/images/onu-news.png"
            />
          </div>
          <div class="feature-single">
            <h6>
              {{ $t("Uno News") }}
              <br />
            </h6>
            <p>{{ $t("Safe you from Fraud on online shopping on Amazon") }}</p>
            <a
              href="https://ononews.co.il/home-page-headlines/%d7%a7%d7%a0%d7%99%d7%99%d7%94-%d7%91%d7%98%d7%95%d7%97%d7%94-%d7%94%d7%9e%d7%aa%d7%9b%d7%a0%d7%aa%d7%99%d7%9d-%d7%a9%d7%a4%d7%99%d7%aa%d7%97%d7%95-%d7%90%d7%aa-%d7%94%d7%aa%d7%95%d7%a1%d7%a3-%d7%9c/"
              target="_blank"
              class="btn btn-primary"
              >{{ $t("Read more") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
