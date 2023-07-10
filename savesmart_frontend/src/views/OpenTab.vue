<template>
  <div class="my-3 container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <h1>Tvoj račun za podmiriti</h1>
        <hr />
        <h5>Svrha:</h5>
        <p>Neka random svrha</p>
        <h5>Iznos za podmiriti:</h5>
        <p>500 Eura</p>
        <hr />
        <h5>Tko sudjeluje?</h5>
        <ol class="list-group list-group-numbered">
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
            v-for="(duznici, index) in duznici"
            :key="index"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ duznici.ime }}</div>
            </div>
            <p class="">iznos: 500</p>
            <i class="bi bi-check-lg"></i>
            <i class="bi bi-pencil"></i>
          </li>
        </ol>
        <hr />
        <h5>Koliko do podmirivanja:</h5>
        <h4 class="fw-bold">500 Eura</h4>
      </div>

      <div class="col"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "openTab",
  data() {
    return {
      duznici: [
        {
          ime: "Marko",
          dug: 0,
        },
        {
          ime: "Filip",
          dug: 0,
        },
        {
          ime: "Luka",
          dug: 0,
        },
      ],
    };
  },
};
</script>
