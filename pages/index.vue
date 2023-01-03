<script setup lang="ts">
import StarIcon from "~/assets/images/star.svg?component";
import MarkerIcon from "~/assets/images/marker.svg?component";
import PaidIcon from "~/assets/images/paid.svg?component";
import CategoriesIcon from "~/assets/images/categories.svg?component";
import MicIcon from "~/assets/images/mic.svg?component";
import chevronDown from "~/assets/images/chevronDown.svg?component";
import chevronUp from "~/assets/images/chevron-up.svg?component";
import SendIcon from "~/assets/images/send.svg?component";
const recommendations = ["100000", "100010", "100020"];
</script>

<template>
  <div class="layout">
    <chevronUp />
    <div class="slider-imgs">
      <chevronUp class="icon" />
      <img
        v-for="index in 4"
        :key="index"
        src="~/assets/images/70782355_964775460532132_2751270695932526592_n.png"
      />
      <chevronDown class="icon" />
    </div>
    <main class="auction">
      <section class="header">
        <div class="section">
          <img
            class="auction-slider"
            src="~/assets/images/offer-img.png"
            alt=""
          />
          <div class="auction-holder">
            <img src="~/assets/images/auction-holder-profile.png" alt="" />
            <div class="auction-holder-data">
              <h4 class="auction-holder__name">إسم البائع</h4>
              <b class="auction-holder__number">+966598398</b>
            </div>
            <div class="rating">
              <StarIcon class="fill-orange" />
              <StarIcon class="fill-orange" />
              <StarIcon class="fill-orange" />
              <StarIcon class="fill-orange" />
              <StarIcon class="fill-gray" />
            </div>
          </div>
          <h2>شراء مجموعة من السيارات من موديلات1990</h2>
          <p class="code grey">code 1234</p>
          <div class="send-offer">
            <div class="recommendations">
              <p
                v-for="(recommendation, index) in recommendations"
                class="recommendation"
                :key="index"
              >
                +{{ recommendation }}
              </p>
            </div>
            <div class="write-offer">
              <input placeholder="اكتب المبلغ" />

              <button class="submit offer-button">تأكيد</button>
            </div>
          </div>
        </div>
      </section>
      <section class="auction__details section">
        <h2 class="sub-title">ارسل رسالة الي البائع</h2>
        <p class="send-message-text">
          يمكنك في وقت البث المباشر إرسال رسالة للبائع
        </p>
        <div class="send-message">
          <input class="send-message-input" placeholder="اكتب المبلغ" />

          <button class="submit send-message-button"><SendIcon /></button>
        </div>
      </section>
      <section class="auction__details section">
        <h4 class="sub-title">تفاصيل المزاد</h4>
        <div class="some-data">
          <div class="data">
            <div class="location">
              <MarkerIcon />
              <b>Egypt,Mansoura</b>
            </div>
            <div class="currency">
              <PaidIcon />
              <p>البيع لأعلي سعر</p>
            </div>
            <div class="categories">
              <CategoriesIcon />
              <p>منتجات متعددة</p>
            </div>
          </div>
          <div class="data">
            <div class="count">200 قطعه</div>
            <div class="record"><MicIcon /> صوت</div>
          </div>
        </div>
        <hr />
        <h4 class="sub-title">وصف</h4>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم
          أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص
          العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع
          الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
        </p>
        <h4 class="sub-title">سياسة الاسترجاع والاستبدال</h4>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم
          أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص
          العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع
          الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
        </p>
      </section>
    </main>
    <aside class="aside-data">
      <section class="auction-price section">
        <div class="current-auction-value bg-secondary">
          <p>القيمة الحالية للمزاد</p>
          <h2>$5000</h2>
        </div>
        <div class="current-auction-value bg-grey">
          <p>تاريخ اليث</p>
          <h2>22-1-2022</h2>
        </div>
      </section>
      <section class="auction__buy section">
        <div class="buy-price">
          <p>سعر الشراء الحالي</p>
          <h3>$5000</h3>
        </div>
        <button class="submit">شراء الان</button>
      </section>
      <section class="auction__competitors section">
        <h2>المتنافسون</h2>
        <div class="competitors">
          <div v-for="index in 6" :key="index" class="competitor">
            <div class="auction-holder">
              <img src="~/assets/images/auction-holder-profile.png" alt="" />
              <div class="auction-holder-data">
                <h4 class="auction-holder__name">إسم البائع</h4>
                <p class="auction-holder__number">13:59:00</p>
              </div>
            </div>
            <h4 class="points bg-accent-thirdly thirdly">+20</h4>
          </div>
        </div>
      </section>
      <section class="auction-price-details-wrapper section">
        <div v-for="index in 4" :key="index" class="auction-price-details">
          <p>القيمة الابتدائية</p>
          <h2>5000</h2>
        </div>
      </section>
      <section class="favourite-auctions section">
        <div
          v-for="index in 4"
          :key="index"
          class="favourite-auctions__details"
        >
          <div class="img-state">
            <img src="~/assets/images/public.png" class="public-img" />
            <div>
              <img src="~/assets/images/favourites.png" />
              <img src="~/assets/images/live.png" />
            </div>
          </div>
          <div class="text">
            سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة بى ام
            دابليو تصنيع 2021 حالته جديدة
            <div class="price">
              <p class="currency">
                <PaidIcon />
                اعلى سعر
              </p>
              <b class="primary">$500</b>
            </div>
          </div>
        </div>
      </section>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.slider-imgs {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5em;
  align-items: center;
  gap: 0.5em;
  grid-area: 1/1/2/2;
}
.layout {
  display: grid;
  grid-template-columns: 4em 55em 27em;
  gap: 1.5em;
  max-width: 90em;
  margin: auto;
  margin-top: 3.5em;
}
.auction {
  grid-area: 1/2/2/3;
}
.section {
  box-shadow: 3px 5px 18.5px rgba(0, 0, 0, 0.0901961);
  background-color: #fff;
  padding: 1em;
  border-radius: 0.3em;
  margin-top: 1em;
}
.header {
  gap: 0.5em;

  .section {
    grid-area: 1/2/2/3;
  }
  .auction-slider {
    width: 100%;
    object-fit: contain;
  }

  .code {
    font-size: 0.75rem;
  }
  .send-offer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1em;

    .recommendations {
      direction: ltr;
      display: flex;
      gap: 0.5em;
      align-items: center;
      .recommendation {
        color: var(--primary-color);
        background-color: var(--accent);
        padding: 1em;
        border-radius: 0.3em;
      }
    }

    .write-offer {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 1em;
      width: 20em;
      input {
        border: solid 1px rgba(0, 0, 0, 0.25);
        padding: 1em;
        border-radius: 0.3em;
        height: 4em;
      }
    }
  }
}

.auction__details {
  .some-data {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .data {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      div {
        display: flex;
        gap: 0.3em;
      }
      .record {
        color: orange;
      }
    }
  }
  .sub-title {
    font-size: 1.3rem;
    margin: 0.5em 0;
    font-weight: 800;
  }
}

.aside-data {
  grid-area: 1/3/2/4;
}
.auction-price {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  .current-auction-value {
    border-radius: 0.25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff !important;
    width: 50%;
    height: 76px;
  }
  .bg-secondary {
    background-color: var(--secondary) !important;
  }
  .bg-grey {
    background-color: #707070 !important;
  }
}
.auction__buy {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.submit {
  background: linear-gradient(90deg, #d20653 6.17%, #9b0257 97.51%);
  padding: 0.5em 1em;
  color: #fff;
  border-radius: 0.3rem;
}

.competitors {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 0.5em;
  .competitor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .points {
      direction: ltr;
      padding: 0.5em 1em;
      border-radius: 0.3em;
    }
  }
}

.auction-holder {
  display: flex;
  gap: 1em;
  .auction-holder-data {
    .auction-holder__name {
      font-weight: 700;
    }
    .auction-holder__number {
      font-size: 0.75rem;
    }
  }
}
.auction-price-details-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  .auction-price-details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.7);
    padding: 1em;
    border-radius: 0.3em;
  }
}

.offer-button {
  width: 6em;
  color: #fff;
  border-radius: 0.3em;
  height: 3.4em;
}

.fill-orange {
  fill: orange;
}

.fill-gray {
  fill: #707070;
}

.icon {
  margin: 0.5em;
}

.send-message-text {
  font-size: 1rem;
  opacity: 0.6;
  margin-bottom: 0.5em;
}
.send-message {
  display: flex;
  justify-content: center;
  align-items: center;

  .send-message-input {
    width: 100%;
    padding: 1em;
    border-radius: 10em;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
  }
  .send-message-button {
    border-radius: 10em;
    width: 3em;
    height: 3em;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.favourite-auctions {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
  .favourite-auctions__details {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    .price {
      display: flex;
      justify-content: space-between;
      margin: 1em 0;
    }

    .img-state {
      background-image: url(/_nuxt/assets/images/fav.png);
      width: 14.7em;
      height: 5em;
      background-size: contain;
      display: flex;
      flex-direction: column-reverse;

      justify-content: space-between;
      align-items: flex-start;
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .public-img {
    
        margin-right: -0.5em;
      }
    }
  }
}

.primary {
  color: var(--primary-color);
  font-size: 1.3rem;
}

.currency {
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
</style>
