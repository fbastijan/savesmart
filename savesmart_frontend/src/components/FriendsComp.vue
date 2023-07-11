<template>
  <div>
    <div class="row mt-5 text-break">
      <h3>Tvoji prijatelji</h3>
      <p class="text-secondary ms-3">{{ friendsCount }} prijatelja</p>
    </div>
    <div class="row">
      <div class="col">
        <div class="row">
          <img
            src="https://placehold.co/100"
            class="rounded float-start"
            alt="..."
            style="max-height: 100; max-width: 100"
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
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Dodaj prijatelja
      </button>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Dodaj prijatelje
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search by full name"
                  aria-label="Search by full name"
                  aria-describedby="button-addon2"
                  v-model="query"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  @click="search"
                >
                  Search
                </button>
              </div>
              <ul class="list-group">
                <li class="list-group-item">{{ found[0] }}</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { friends } from "@/Warehouse/Friends";
export default {
  props: ["friendsCount"],
  data() {
    return {
      query: "",
      found: [{ _id: "", name: "", username: "", avatar: "" }],
    };
  },

  methods: {
    async search() {
      let res = await friends.Search("gogogogo");

      this.found = res.data;
      console.log(res);
    },
  },
};
</script>
