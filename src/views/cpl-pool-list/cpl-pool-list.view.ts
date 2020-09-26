import { Component, Vue } from 'vue-property-decorator';
import poolList from '@/mock/poolList1.ts';
import { IPoolInfo } from '@/interfaces.ts';
import {
  VDataTable,
  VIcon,
  VToolbar,
  VDivider,
  VSpacer,
  VBtn,
  VToolbarTitle,
  VTextField,
  VTooltip,
  VSnackbar,
  VDialog,
  VCard,
  VCardTitle,
  VCardActions,
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
    VTooltip,
    VSnackbar,
    VDialog,
    VCard,
    VCardTitle,
    VCardActions,
  },
})
export default class CplPoolList extends Vue {

  private deletedSnackbar = false;
  private deleteDialog = false;
  private clipboardSnackbar = false;
  private search = '';
  private pools = poolList;
  private pendingToDelete: IPoolInfo | null = null;

  private headers = [
    {
      text: 'Name',
      value: 'title',
    },
    {
      text: 'Creation date',
      value: 'creationDate',
    },
    {
      text: 'Last Fill',
      value: 'lastFillDate',
    },
    {
      text: 'Answers',
      value: 'answersCount',
    },
    {
      text: 'Actions',
      value: 'actions',
      sortable: false,
    },
  ];

  private deleteEntry(): void {
    this.pools = this.pools.filter((pool: IPoolInfo) => pool.id !== this.pendingToDelete!.id);
  }

  private customSorter(items: any[], index: string[], isDesc: boolean[]): any[] {

    if (index[0] === 'title') {
      items.sort((a, b) => a.title > b.title ? 1 : a.title === b.title ? 0 : -1);
    } else if (!index[0]) {
      items.sort((a, b) => a.creationDate - b.creationDate);
    } else {
      items.sort((a, b) => a[index[0]] - b[index[0]]);
    }

    if (isDesc[0]) {
      items.reverse();
    }

    return items;
  }

  private copy(id: string): void {
    (this as unknown as { $clipboard: (str: string) => void }).$clipboard(`${window.location.host}${window.location.pathname}#/fill/${id}`);
  }

}
