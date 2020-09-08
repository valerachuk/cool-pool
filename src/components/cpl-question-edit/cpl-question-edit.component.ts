import { Component, Vue } from 'vue-property-decorator';
import {
  VCard,
  VCardText,
  VCardActions,
  VTextField,
  VSelect,
  VSpacer,
  VDivider,
  VBtn,
  VIcon,
  VTooltip,
  VSwitch,
  VTextarea,
} from 'vuetify/lib';

@Component({
  components: {
    VCard,
    VCardText,
    VTextField,
    VSelect,
    VSpacer,
    VCardActions,
    VDivider,
    VBtn,
    VIcon,
    VTooltip,
    VSwitch,
    VTextarea,
  },
})
export default class CplQuestionEdit extends Vue {
  public questionTypes = [
    {
      text: 'Short answer',
      value: 'shortAnswer',
    },
    {
      text: 'Paragraph',
      value: 'paragraph',
    },
    {
      divider: true,
    },
    {
      text: 'Checkboxes',
      value: 'checkboxes',
    },
    {
      text: 'Radiobuttons',
      value: 'radiobuttons',
    },
    {
      divider: true,
    },
    {
      text: 'Date',
      value: 'date',
    },
    {
      text: 'Time',
      value: 'time',
    },
  ];

  public questionType = this.questionTypes[0].value!;

  public radiobuttons: Array<{ text: string }> = [
    { text: '' },
  ];

  public checkboxes: Array<{ text: string }> = [
    { text: '' },
  ];

  public required = true;

  public questionText = '';

  public getValues() {
    return {
      questionText: this.questionText,
      questionType: this.questionType,
      required: this.required,
      checkboxes: this.questionType === 'checkboxes' ? this.checkboxes : undefined,
      radiobuttons: this.questionType === 'radiobuttons' ? this.radiobuttons : undefined,
    };
  }
}
