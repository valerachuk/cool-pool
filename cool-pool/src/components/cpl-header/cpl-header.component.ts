import { Component, Vue } from 'vue-property-decorator';
import {
  VAppBar,
  VIcon,
  VSpacer,
  VChip,
  VTooltip,
} from 'vuetify/lib';

@Component({
  components: {
    VAppBar,
    VIcon,
    VSpacer,
    VChip,
    VTooltip,
  },
})
export default class CplHeader extends Vue {
  private isSignedIn = false;

  private baseDocs = './docs/pageReference.html';

  private routeHelpMap = {
    Home: this.baseDocs + '#home',
    New: this.baseDocs + '#pool-creation',
    List: this.baseDocs + '#pool-list',
    Answers: this.baseDocs + '#pool-statistics',
    Fill: this.baseDocs + '#answer',
  };
}
