import { Component, Vue } from 'vue-property-decorator';
import { IQuestionEditCard } from '@/interfaces.ts';
import { notEmpty } from '@/validtaion.ts';
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
    value: {
      type: Object,
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

  private readonly notEmpty = notEmpty;

  private questionValue: IQuestionEditCard = {
    title: '',
    isMultiple: false,
    answerOptions: [
      {
        text: '',
      },
    ],
  };

}
