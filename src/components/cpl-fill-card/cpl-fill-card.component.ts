import { Component, Vue } from 'vue-property-decorator';
import {
  VCard,
  VCardText,
  VCardTitle,
  VRadio,
  VRadioGroup,
} from 'vuetify/lib';

@Component({
  components: {
    VCard,
    VCardText,
    VCardTitle,
    VRadio,
    VRadioGroup,
  },
})
export default class CplFillCard extends Vue {

}
