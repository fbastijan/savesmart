<template>
  <div>
    <div class="row mt-5 text-break">
      <h3>Tvoja primanja</h3>
      <div
        class="row mt-2 ms-2"
        v-for="(primanja, index) in primanja"
        :key="index"
      >
        <div class="col">
          <h4>{{ primanja.izvor }} : {{ primanja.iznosIzv }}€</h4>
        </div>
        <div class="col">
          <h4>Prema štednji: {{ primanja.odvojio }}€</h4>
        </div>
        <hr />
      </div>

      <div class="row mt-2 ms-2">
        <div class="col">
          <h4>Total : {{ this.total.primanja }}€</h4>
        </div>
        <div class="col">
          <h4>Total Prema štednji: {{ this.total.stednja }}€</h4>
        </div>
        <hr />
      </div>

      <div class="row mt-2 ms-2">
        <div class="col">
          <button class="btn btn-primary" @click="Sranje">
            Dodaj primanje
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primanja: [
        { izvor: "Plaća", iznosIzv: 2000, odvojio: 500 },
        { izvor: "Iznajmljivanje", iznosIzv: 1000, odvojio: 300 },
        { izvor: "Dodatno", iznosIzv: 1000, odvojio: 300 },
      ],
      total: {
        stednja: 0,
        primanja: 0,
      },
    };
  },
  methods: {
    izracunajTotal(total) {
      this.primanja.forEach((element) => {
        total.primanja += element.iznosIzv;
        total.stednja += element.odvojio;
      });
    },
  },
  mounted() {
    this.izracunajTotal(this.total);
  },
};
</script>
