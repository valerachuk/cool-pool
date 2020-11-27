import { Component, Vue } from 'vue-property-decorator';
import {
  VImg,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VSpacer,
  VBtn,
} from 'vuetify/lib';

@Component({
  components: {
    VImg,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VSpacer,
    VBtn,
  },
})
export default class CplHome extends Vue { }
