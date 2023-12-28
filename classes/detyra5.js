/*
Execute an EmpTable class for generating html code of a table with the list of employees.

The staff array should be passed through a constructor and receive html code via getHtml() method.

Create an object of the EmpTable class and display the result of getHtml() method on screen. 
*/

class EmpTable {
    constructor(staff) {
      this.staff = staff;
    }
  
    getHtml() {
      let tableHtml = '<table border="1">';
      tableHtml += '<tr><th>Name</th><th>Position</th></tr>';
  
      this.staff.forEach(employee => {
        tableHtml += `<tr><td>${employee.name}</td><td>${employee.position}</td></tr>`;
      });
  
      tableHtml += '</table>';
      return tableHtml;
    }
  }
  
  
  const employees = [
    { name: 'Hana Neziri', position: 'Developer' },
    { name: 'Dua Kastrati', position: 'Designer' },
    { name: 'Enes Gashi', position: 'Manager' },
  ];
  
  const empTable = new EmpTable(employees);
  
  document.write(empTable.getHtml());
  