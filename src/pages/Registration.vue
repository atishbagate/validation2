<template>
  <div class="bg">
    <div class=" mt-5" style="margin:0px 15px; height:92.7vh; opacity: .8;">
      <div class="d-flex">
        <div
          class="card"
          style="width: 60rem; margin-top:2rem; border: 2px solid #669ccb;; padding:5px; border-radius: 10px;"
        >
          <div class="card-body">
            <h5
              class="card-title"
              style="text-align: center; font-size: xx-large; background: #AA7867;"
            >
              Registration Forms
            </h5>
            <div class="row mt-md-5 mt-sm-3">
              <div class="form-group col-md-6 col-sm-12">
                <label for="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  aria-describedby="fname"
                  v-model="state.name.fname"
                  placeholder="Enter first name"
                />
                <span
                  class="text-center font-weight-bold text-danger"
                  v-if="v$.name.fname.$error"
                  >{{ v$.name.fname.$errors[0].$message }}</span
                >
              </div>
              <div class="form-group col-md-6 col-sm-12">
                <label for="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  aria-describedby="lname"
                  v-model="state.name.lname"
                  placeholder="Enter Last name"
                />
                <span
                  class="text-center font-weight-bold text-danger"
                  v-if="v$.name.lname.$error"
                  >{{ v$.name.lname.$errors[0].$message }}</span
                >
              </div>
            </div>
            <div class="row mt-md-3 mt-sm-3">
              <div class="form-group col-md-6 col-sm-12">
                <label for="exampleInputEmail1">Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="number"
                  aria-describedby="number"
                  v-model="state.number"
                  placeholder="Enter mobile name"
                />
                <span
                  class="text-center font-weight-bold text-danger"
                  v-if="v$.number.$error"
                  >{{ v$.number.$errors[0].$message }}</span
                >
              </div>
              <div class="form-group col-md-6 col-sm-12">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="state.email"
                  placeholder="Enter email"
                />
                <span
                  class="text-center font-weight-bold text-danger"
                  v-if="v$.email.$error"
                  >{{ v$.email.$errors[0].$message }}</span
                >
              </div>
            </div>
            <div class="row mt-md-3 mt-sm-3">
              <div class="form-group col-md-6 col-sm-12">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  v-model="state.password.password"
                />
                <span
                  class="text-center font-weight-bold text-danger"
                  v-if="v$.password.password.$error"
                  >{{ v$.password.password.$errors[0].$message }}</span
                >
              </div>
              <div class="form-group col-md-6 col-sm-12">
                <label for="exampleInputPasswordconfirm"
                  >Re-enter Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPasswordconfirm"
                  placeholder="Password"
                  v-model="state.password.confirm"
                />
                <span
                  class="text-center font-weight-bold text-danger"
                  v-if="v$.password.confirm.$error"
                  >{{ v$.password.confirm.$errors[0].$message }}</span
                >
              </div>
            </div>
            <div class="form-group col-md-6 col-sm-12 mt-3">
              <button
                @click="submitForm"
                class="btn btn-primary"
                style="width:30%; margin-right:5px;"
              >
                Submit
              </button>
              <button
                @click="submitForm"
                class="btn btn-secondary"
                style="width:20%; margin-right:5px;"
              >
                cancel
              </button>
              <router-link
                class="nav-link btn btn-link text-danger  "
                to="/Home"
                style="width:20%; color:red;"
                >Home</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
  alpha,
  numeric,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "Registration",

  mounted() {
    // Add the following code if you want the name of the file appear on select
    $(".custom-file-input").on("change", function() {
      var fileName = $(this)
        .val()
        .split("\\")
        .pop();
      $(this)
        .siblings(".custom-file-label")
        .addClass("selected")
        .html(fileName);
    });
  },
  setup() {
    const state = reactive({
      name: {
        fname: "",
        lname: "",
      },
      number: "",
      email: "",
      password: {
        password: "",
        confirm: "",
      },
      image: "",
      doc: "",
      pdf: "",
    });
    // custom validator  using helpers and  (withmessage to to show the custom message)
    const mustBeGmail = (value) => value.includes("gmail");
    const mustimg = helpers.regex("image", /\.(jpe?g|png)$/);
    const rules = computed(() => {
      return {
        name: {
          fname: { required, alpha, minLength: minLength(4) },
          lname: { required, alpha, minLength: minLength(5) },
        },
        number: { numeric, required, minLength: minLength(10) },
        email: {
          required,
          email,
          mustBeGmail: helpers.withMessage("must be a gmail", mustBeGmail),
        },
        password: {
          password: { required, minLength: minLength(6) },
          confirm: { required, sameAs: sameAs(state.password.password) },
        },
        image: { mustimg: helpers.withMessage("must png/jpg", mustimg) },
        doc: { required },
        pdf: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // console.log(this.v$);
        alert("form Submitted successfully");
      } else {
        alert("form invalid");
      }
    },
    previewFiles(event) {
      console.log(event.target.files);
    },
  },
};
</script>
<style scoped>
.d-flex {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
.bg {
  /* The image used */
  background-image: url("https://c4.wallpaperflare.com/wallpaper/970/11/817/nanoflowcell-quant-48volt-4k-hd-background-image-wallpaper-preview.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
