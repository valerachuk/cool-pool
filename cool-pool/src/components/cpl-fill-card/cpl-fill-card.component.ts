import { Component, Vue } from 'vue-property-decorator';
import { notNullUndef } from '@/validtaion.ts';
import {
  VCard,
  VCardText,
  VCardTitle,
  VRadio,
  VRadioGroup,
  VCheckbox,
} from 'vuetify/lib';

@Component({
  components: {
    VCard,
    VCardText,
    VCardTitle,
    VRadio,
    VRadioGroup,
    VCheckbox,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
})
export default class CplFillCard extends Vue {
  private radios: number | null = null;
  private checkboxes: number[] = [];
  private notNullUndef = notNullUndef;

  private checkboxNotEmpty(): true | string {
    return this.checkboxes.length > 0 || 'Please, choise at least one option';
  }

}
