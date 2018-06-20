class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 );
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout = new Employee( 'Scout', '6243', '74750', 5 );
const robert = new Employee( 'Robert', '26835', '66000', 1 );
const mayella = new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT


function bonusCalc ( employee ){
  let bonusPercentage = 0;
  let salaryNum = parseInt(employee.annualSalary);
  if (employee.reviewRating === 5) {
    bonusPercentage = .10;
  } else if (employee.reviewRating === 4 ){
    bonusPercentage = .06;
  } else if (employee.reviewRating === 3 ){
    bonusPercentage = .04;
  } else {
    bonusPercentage = 0;
  }   
  if (employee.employeeNumber.length === 4 ){
    bonusPercentage = .05;
  }
  if (salaryNum > 65000 ){
    bonusPercentage -= .01;
  }
  if (bonusPercentage > .13){
    bonusPercentage = .13;
  } else if (bonusPercentage < 0){
    bonusPercentage = 0;
  }
  let bonus = salaryNum * bonusPercentage;
  return {
    name: employee.name,
    bonusPercentage: (bonusPercentage * 100).toString() + '%' ,
    totalCompensation: (bonus + salaryNum).toString(),
    totalBonus: Math.floor(bonus)
  }
}

console.log( employees );

function renderListItem( employee ){
  let name = $('<p></p>').text('Name:' + employee.name);
  let bonusPercentage = $('<p></p>').text('Bonus Percentage:' + employee.bonusPercentage);
  let totalCompensation = $('<p></p>').text('Total Compensation:' + employee.totalCompensation);
  let totalBonus = $('<p></p>').text('Total Bonus:' + employee.totalBonus);
  return $('<li></li>').append(name, bonusPercentage, totalCompensation, totalBonus);
}


$(document).ready(function(){
  for (let i = 0; i < employees.length; i++) {
    console.log(bonusCalc(employees[i]));
    let employeeInfo = bonusCalc(employees[i]);
    $('#employeeBonuses').append(renderListItem(employeeInfo));
 }
});