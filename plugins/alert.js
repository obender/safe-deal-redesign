import Swal from "vue-sweetalert2";
import Vue from "vue";
Vue.use(Swal);

export default ({ app }, inject) => {
  inject("swal", params => {
    Swal(params);
  });
};
