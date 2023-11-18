import { useExpenseStore } from '../store/store';
export default ({
  data() {
    return {
      expenses: []
    }
  },
  mounted() {
    this.getAllExpense()
  },
  methods: {
    async getAllExpense() {
      const expenseStore = useExpenseStore()
      try {
        await expenseStore.getAllExpenses()
        this.expenses = expenseStore.expenses

      } catch (error) {
        console.error('Error fetching expenses:', error)
      }
    }
  }
})