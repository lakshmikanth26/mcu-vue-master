import { defineStore } from 'pinia';
import axios from 'axios';

export const useExpenseStore = defineStore({
  id: 'expense',
  state: () => ({
    expenses: [],
  }),
  actions: {
    async getAllExpenses() {
      try {
        const response = await axios.get('api/expense/getAllExpenses');
        this.expenses = response.data;
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    },
  },
});
