import Vue from "vue";
import CloudinaryImage from "@teamnovu/vue-cloudinary-image";

let options = JSON.parse(`<%= JSON.stringify(options) %>`);

Vue.use(CloudinaryImage, {
  ...options,
});
