import Vue from "vue";
import CloudinaryImage from "vue-cloudinary-image";

let options = JSON.parse(`<%= JSON.stringify(options) %>`);

Vue.use(CloudinaryImage, {
  ...options,
});
