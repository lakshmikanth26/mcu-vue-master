<template>
  <table aria-describedby="table" class="table table-success table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Expense Type</th>
      <th scope="col">Date</th>
      <th scope="col">Reference #</th>
      <th scope="col">Particulars</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(expense,index) in expenses.data" :key="expense.id">
      <th scope="row">{{index}}</th>
      <td>{{expense.expenseType}}</td>
      <td>{{expense.date}}</td>
      <td>{{expense.expenseRefNo}}</td>
      <td>{{expense.particulars}}</td>
    </tr>
  </tbody>
</table>
</template>
<script src="./welcome.ts"></script>