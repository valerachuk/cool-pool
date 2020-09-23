import { Component, Vue } from 'vue-property-decorator';
import VueApexCharts from 'vue-apexcharts';
import { IQuestionAnswer } from '@/interfaces.ts';
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
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    series() {
      return (this as Vue & { value: IQuestionAnswer }).value.options.map((x) => x.answersCount);
    },
    chartOptions() {
      return {
        labels: (this as Vue & { value: IQuestionAnswer }).value.options.map((x) => x.name),
        legend: {
          position: 'bottom',
        },
      };
    },
  },
})
export default class CplAnswerCard extends Vue { }
