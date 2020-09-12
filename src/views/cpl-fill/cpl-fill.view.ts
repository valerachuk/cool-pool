import { Component, Vue } from 'vue-property-decorator';
import CplFillCard from '@/components/cpl-fill-card/cpl-fill-card.component.vue';
import {
  VCard,
  VCardTitle,
  VCardText,
  VBtn,
} from 'vuetify/lib';

@Component({
  components: {
    CplFillCard,
    VCard,
    VCardTitle,
    VCardText,
    VBtn,
  },
})
export default class CplFill extends Vue { }
