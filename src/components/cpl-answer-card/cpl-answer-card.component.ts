import { Component, Vue } from 'vue-property-decorator';
import VueApexCharts from 'vue-apexcharts';
import {
  VCard,
  VCardText,
  VCardTitle,
} from 'vuetify/lib';

@Component({
  components: {
    VueApexCharts,
    VCard,
    VCardText,
    VCardTitle,
  },
})
export default class CplAnswerCard extends Vue {

  private series = [44, 55, 13, 43, 22];

  private chartOptions = {
    labels: ['ASUS', 'A4', 'Microsoft', 'Logitech', 'Xiaomi'],
    legend: {
      position: 'bottom',
      fontSize: '16px',
    },
  };

}
