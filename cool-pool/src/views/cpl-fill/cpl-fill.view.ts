import { Component, Vue } from 'vue-property-decorator';
import CplFillCard from '@/components/cpl-fill-card/cpl-fill-card.component.vue';
import MockPool from '@/mock/pool1.ts';
import {
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VSpacer,
  VBtn,
  VCardSubtitle,
  VForm,
  VDialog,
  VProgressCircular,
} from 'vuetify/lib';

@Component({
  components: {
    CplFillCard,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VSpacer,
    VBtn,
    VCardSubtitle,
    VForm,
    VDialog,
    VProgressCircular,
  },
})
export default class CplFill extends Vue {
  private mockPool = MockPool;
  private sendFormDialog = false;
  private isFormSent = false;
  private fixErrorsDialog = false;

  private sendForm(): void {
    const isValid = (this.$refs.form as Vue & { validate(): boolean }).validate();
    if (!isValid) {
      this.fixErrorsDialog = true;
      return;
    }
    this.sendFormDialog = true;
    setTimeout(() => {
      this.isFormSent = true;
    }, 3000);
  }
}
