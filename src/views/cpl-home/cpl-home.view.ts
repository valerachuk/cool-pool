import { Component, Vue } from 'vue-property-decorator';
import CplQuestionEdit from '@/components/cpl-question-edit/cpl-question-edit.component.vue';

@Component({
  components: {
    CplQuestionEdit,
  },
})
export default class Home extends Vue {}
