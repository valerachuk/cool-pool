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
  public questionTypes = [
    {
      text: 'Single chose',
      value: false,
    },
    {
      text: 'Multiple chose',
      value: true,
    },
  ];

  public answerOptions: Array<{ text: string }> = [
    {
      text: '',
    },
  ];

  public isMultipleChoise = false;

  public required = true;

  public questionText = '';

}
