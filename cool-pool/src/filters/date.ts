import Vue from 'vue';

Vue.filter('date', (date: Date): string => {
  function addZero(num: number): string {
    if (num < 10) {
      return `0${num}`;
    }
    return num.toString();
  }
  return `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`;
});
