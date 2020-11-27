import { Component, Vue } from 'vue-property-decorator';
import CplAnswerCard from '@/components/cpl-answer-card/cpl-answer-card.component.vue';
import answersMock1 from '@/mock/poolAnswer1.ts';
import {
  VCard,
  VCardTitle,
  VCardText,
  VCardSubtitle,
} from 'vuetify/lib';
@Component({
  components: {
    CplAnswerCard,
    VCard,
    VCardTitle,
    VCardText,
    VCardSubtitle,
  },
})
export default class CplAnswers extends Vue {
  private pool = answersMock1;
}
