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
  props: {
    deletable: {
      type: Boolean,
      required: true,
    },
  },
})
export default class CplQuestionEdit extends Vue {
  private questionTypes = [
    {
      text: 'Single choice',
      value: false,
    },
    {
      text: 'Multiple choice',
      value: true,
    },
  ];

  private answerOptions: Array<{ text: string }> = [
    {
      text: '',
    },
  ];

  private isMultipleChoise = false;

  private required = true;

  private questionText = '';

}
