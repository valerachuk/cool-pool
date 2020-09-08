import { Component, Vue } from 'vue-property-decorator';
import CplQuestionEdit from '@/components/cpl-question-edit/cpl-question-edit.component.vue';
import {
  VCard,
  VCardText,
  VTextField,
  VTextarea,
  VBtn,
  VTooltip,
  VIcon,
} from 'vuetify/lib';

@Component({
  components: {
    CplQuestionEdit,
    VCard,
    VCardText,
    VTextField,
    VTextarea,
    VBtn,
    VTooltip,
    VIcon,
  },
})
export default class Home extends Vue {
  private questions = [null];
  private formName = 'New form';
  private formDescription = '';
}
