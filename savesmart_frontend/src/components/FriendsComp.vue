<template>
  <div>
    <div class="row mt-5 text-break">
      <h3>Tvoji prijatelji</h3>
      <p class="text-secondary ms-3">0 prijatelja</p>
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
              <ul
                class="list-group"
                v-for="(found, added, index) in found"
                :key="index"
              >
                <li
                  class="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div class="d-flex">
                    <img
                      :src="found.friend.avatar"
                      alt=""
                      class="img-fluid rounded"
                      style="height: 50px; width: 50px"
                    />
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">{{ found.friend.username }}</div>
                      {{ found.friend.name }}
                    </div>
                  </div>
                  <div class="py-2">
                    <button
                      class="btn btn-primary"
                      @click="
                        add(found._id);
                        added = true;
                      "
                      v-if="!found.added"
                    >
                      <i class="bi bi-person-fill-add"></i>
                    </button>
                    <button class="btn btn-primary disabled" v-if="found.added">
                      <i class="bi bi-person-fill-check"></i>
                    </button>
                  </div>
                </li>
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
      query: null,
      found: [],
    };
  },
  computed: {},
  methods: {
    async search() {
      let res = await friends.Search(this.query);

      this.found = await res.map((element) => {
        return {
          added: false,
          friend: element,
        };
      });
      //this.excludeYou();
      this.excludeAdded();
    },
    async add(friend_id) {
      let res = await friends.Add(sessionStorage.getItem("_id"), friend_id);
      console.log(res);
    },
    excludeYou() {
      let index;

      if (
        (index = this.found.findIndex(
          (element) => element.friend._id == sessionStorage.getItem("_id")
        ))
      ) {
        this.found.splice(index, 1);
      }
    },
    excludeAdded() {
      let existing = JSON.parse(sessionStorage.getItem("more")).friends;
      this.found = this.found.map((element) => {
        if (existing.includes(element.friend._id)) {
          return { added: true, friend: element.friend };
        } else {
          return element;
        }
      });
      console.log(this.found);
    },
  },
};
</script>
