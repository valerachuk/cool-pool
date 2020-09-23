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
}
