// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  function collectEmployees () {
    let employeesArray = [];
    while (true) {
       let firstName= prompt("Enter First Name");
       let lastName= prompt("Enter Last Name");
       let salary= prompt("Enter Salary");
       let employeeslist={
      firstName:firstName,
      lastName:lastName,
      salary:salary,}

    employeesArray.push(employeeslist);

    let continueInput = prompt("Do you want to add another employee? (yes/no)");
        if (continueInput.toLowerCase() !== 'yes') {
            break;

    }
  }
  return employeesArray;

}
let arrayOfEmployess = collectEmployees();
console.log(arrayOfEmployess);
}

// Display the average salary
const displayAverageSalary = (employeesArray) {
  // TODO: Calculate and display the average salary
   
   function displayAverageSalary(salary) {
    const total = salary.reduce((acc, curr) => acc + curr, 0);
    return total / salary.length;
   }
   const averageSalary = displayAverageSalary;
   console.log("The average salary is" ${displayAverageSalary} )
}





// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  function getRandomEmployee () {
  let randomIndex = Math.floor(Math.random('firstName' + 'lastName') * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];
  function randomEmployee(employeesArray) {
      return Math.random(firstName + lastName);
    }

  console.log(`Congrats to our random winner ${randomEmployee} !!!` );
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
function displayEmployees(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
