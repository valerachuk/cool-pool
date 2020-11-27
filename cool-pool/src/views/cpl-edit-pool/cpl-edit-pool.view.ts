import { Component, Vue } from 'vue-property-decorator';
import { IQuestionEditCard } from '@/interfaces.ts';
import CplQuestionEdit from '@/components/cpl-question-edit/cpl-question-edit.component.vue';
import { notEmpty } from '@/validtaion.ts';
import draggable from 'vuedraggable';
import {
  VCard,
  VCardText,
  VTextField,
  VTextarea,
  VBtn,
  VTooltip,
  VIcon,
  VForm,
  VCardTitle,
  VDialog,
  VCardActions,
  VSpacer,
  VProgressCircular,
} from 'vuetify/lib';

@Component({
  components: {
    draggable,
    CplQuestionEdit,
    VCard,
    VCardText,
    VTextField,
    VTextarea,
    VBtn,
    VTooltip,
    VIcon,
    VForm,
    VCardTitle,
    VDialog,
    VCardActions,
    VSpacer,
    VProgressCircular,
  },
})
export default class CplFormEdit extends Vue {
  private questions = [
    {
      title: '',
      isMultiple: false,
      answerOptions: [
        {
          text: '',
        },
      ],
    },
  ];

  private formName = '';
  private formDescription = '';

  private sendFormDialog = false;
  private isFormSent = false;
  private fixErrorsDialog = false;

  private readonly notEmpty = notEmpty;

  private emptyQuestion(): IQuestionEditCard {
    return JSON.parse(JSON.stringify({
      title: '',
      isMultiple: false,
      answerOptions: [
        {
          text: '',
        },
      ],
    }));
  }

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
