<template>
  <div>
    <div class="mt-5 container-fluid">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <h1 class="mb-3">Tvoji ciljevi!</h1>
          <div class="container-md">
            <div class="row gx-3 row-cols-1 row-cols-lg-4 row-cols-md-3">
              <div class="col mb-3">
                <div class="card h-100">
                  <a
                    class="card-block stretched-link text-decoration-none"
                    href
                  >
                    <img
                      src="https://www.svgrepo.com/show/170952/add-button.svg"
                      class="card-img-bottom p-5"
                      alt="..."
                    />
                  </a>
                </div>
              </div>
              <div
                class="col mb-3"
                v-for="(goal, index) in sviGoalovi"
                :key="index"
              >
                <div class="card h-100">
                  <a
                    class="card-block stretched-link text-decoration-none"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    href="#"
                  >
                    <img
                      src="https://placehold.co/450x400"
                      class="card-img-top"
                      alt="..."
                    />

                    <div class="card-body">
                      <p class="card-text text-dark">{{ goal.opis }}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoalsView",
  data() {
    return {
      ime: "aaaaaa",
      sviGoalovi: [
        {
          img: "",
          opis: "asddafa",
        },
        {
          img: "",
          opis: "1",
        },
        {
          img: "",
          opis: "2",
        },
        {
          img: "",
          opis: "3",
        },
        {
          img: "",
          opis: "5",
        },
        {
          img: "",
          opis: "6",
        },
      ],
    };
  },
};
</script>
<style></style>
