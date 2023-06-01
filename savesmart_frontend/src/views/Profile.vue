<template>
  <div class="mt-5 container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <h1 class="mb-5">Tvoj profil</h1>
        <div class="row">
          <div class="col">
            <img
              src="https://placehold.co/200"
              class="rounded float-start"
              alt="..."
            />
          </div>
          <div class="col-9">
            <h5 class="text-break mt-2">Filip Bastijanić</h5>
            <hr />
            <h5 class="text-break">Opis:</h5>

            <p class="text-break text-md">
              Jeo sam naranče i upao u predikament
            </p>
            <hr />
            <h5 class="text-break">Pridružio se</h5>
            <p class="text-beak text-md">2. veljače 2023</p>
          </div>
        </div>
        <div>
          <div class="row mt-5 text-break">
            <h3>Tvoja primanja</h3>
            <div class="row mt-2 ms-2">
              <div class="col"><h4>Plaća : 2000€</h4></div>
              <div class="col"><h4>Prema štednji: 500€</h4></div>
              <hr />
            </div>

            <div class="row mt-2 ms-2">
              <div class="col"><h4>Iznajmljivanje : 1000€</h4></div>
              <div class="col"><h4>Prema štednji: 150€</h4></div>
              <hr />
            </div>
            <div class="row mt-2 ms-2">
              <div class="col"><h4>Total : 3000€</h4></div>
              <div class="col"><h4>Total Prema štednji: 650€</h4></div>
              <hr />
            </div>

            <div class="row mt-2 ms-2">
              <div class="col">
                <button class="btn btn-primary">Dodaj primanje</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 text-break">
          <h3>Tvoji prijatelji</h3>
          <p class="text-secondary ms-3">2300 prijatelja</p>
        </div>
        <div class="row">
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><h6>prijatelj 1</h6></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center"><a>prijatelj 1</a></div>
          </div>
          <div class="col">
            <div class="row">
              <img
                src="https://placehold.co/100"
                class="rounded float-start"
                alt="..."
              />
            </div>
            <div class="row text-center">
              <h6 class="">prijatelj 1</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileStart",
};
</script>
