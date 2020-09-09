import { Component, Vue } from 'vue-property-decorator';
import CplAnswerCard from '@/components/cpl-answer-card/cpl-answer-card.component.vue';

@Component({
  components: {
    CplAnswerCard,
  },
})
export default class CplAnswers extends Vue {}
