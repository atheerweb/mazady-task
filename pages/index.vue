<script setup lang="ts">
const recommendations = ["100000", "100010", "100020"];
</script>

<template>
  <div class="layout">
    <main class="auction">
      <section class="header section">
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
            <v-icon color="orange"> mdi-star </v-icon>
            <v-icon color="orange"> mdi-star </v-icon>
            <v-icon color="orange"> mdi-star </v-icon>
            <v-icon color="orange"> mdi-star </v-icon>
            <v-icon color="grey"> mdi-star </v-icon>
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
            <v-text-field placeholder="اكتب المبلغ"></v-text-field>

            <button class="submit-offer">تأكيد</button>
          </div>
        </div>
      </section>
      <section class="auction__details section">
        <h4 class="sub-title">تفاصيل المزاد</h4>
        <div class="some-data">
          <div class="data">
            <div class="location">
              <v-icon>mdi-map-marker</v-icon>
              <b>Egypt,Mansoura</b>
            </div>
            <div class="currency">
              <v-icon>mdi-currency-usd</v-icon>
              <p>البيع لأعلي سعر</p>
            </div>
            <div class="categories">
              <v-icon>mdi-grid-large</v-icon>
              <p>منتجات متعددة</p>
            </div>
          </div>
          <div class="data">
            <div class="count">200 قطعه</div>
            <div class="record"><v-icon>mdi-microphone</v-icon>صوت</div>
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
      <section class="auction-price"></section>
      <section class="auction__competitors"></section>
      <section class="auction__price-details"></section>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: 47em calc(100% - 47em);
  gap: 1em;
}
.section {
  box-shadow: 3px 5px 18.5px rgba(0, 0, 0, 0.0901961);
  background-color: #fff;
  padding: 1em;
  border-radius: 0.3em;
  margin-top: 1em;
}
.header {
  grid-area: 1/1/2/2;
  margin-top: 3.5em;
  .auction-slider {
    width: 100%;
    object-fit: scale-down;
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
  .code {
    font-size: 0.75rem;
  }
  .send-offer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1em;

    .submit-offer {
      background: linear-gradient(90deg, #d20653 6.17%, #9b0257 97.51%);
      padding: 1em;
      width: 6em;
      color: #fff;
      border-radius: 0.3em;
    }

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
        gap: 1em;
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
  grid-area: 2/2/3/3;
}
</style>
