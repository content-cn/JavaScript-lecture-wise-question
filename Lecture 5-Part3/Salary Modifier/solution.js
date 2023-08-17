const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 }
];

function increaseSalaries(employees){
  const updatedEmployees = employees.map((employee) => {
    let salary = employee.salary;
    switch (employee.department) {
      case "sales":
        salary = (salary * 1.1).toFixed(1);
        break;
      case "engineering":
        salary = (salary * 1.15).toFixed(1);
        break;
      default:
        salary = (salary * 1.05).toFixed(1);
        break;
    }
    return { ...employee, salary };
  });
  return updatedEmployees;
};