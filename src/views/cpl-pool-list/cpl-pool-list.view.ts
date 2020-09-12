import { Component, Vue } from 'vue-property-decorator';
import {
  VDataTable,
  VIcon,
  VToolbar,
  VDivider,
  VSpacer,
  VBtn,
  VToolbarTitle,
  VTextField,
} from 'vuetify/lib';

@Component({
  components: {
    VDataTable,
    VIcon,
    VToolbar,
    VDivider,
    VSpacer,
    VBtn,
    VToolbarTitle,
    VTextField,
  },
})
export default class CplPoolList extends Vue {

  private search = '';

  private pools = [
    {
      name: 'Form a1',
      creationDate: '01.04.2010',
      answers: 100,
    },
    {
      name: 'Phone models',
      creationDate: '11.04.2011',
      answers: 120,
    },
    {
      name: 'Form a2',
      creationDate: '06.04.2010',
      answers: 1000,
    },
    {
      name: 'Form a6',
      creationDate: '12.12.2017',
      answers: 578,
    },
    {
      name: 'Form a2',
      creationDate: '06.05.2017',
      answers: 3,
    },
    {
      name: 'Form a112',
      creationDate: '30.06.2015',
      answers: 9232,
    },
    {
      name: 'Form a1qwf',
      creationDate: '01.05.2010',
      answers: 10,
    },
    {
      name: 'Form aqqq1',
      creationDate: '01.07.2010',
      answers: 750,
    },
    {
      name: 'Fqform aqeg1',
      creationDate: '01.08.2010',
      answers: 1005,
    },
    {
      name: 'Form qqqqa1',
      creationDate: '01.12.2010',
      answers: 10,
    },
  ];

  private headers = [
    {
      text: 'Name',
      value: 'name',
    },
    {
      text: 'Creation date',
      value: 'creationDate',
    },
    {
      text: 'Answers',
      value: 'answers',
    },
    {
      text: 'Actions',
      value: 'actions',
      sortable: false,
    },
  ];
}
