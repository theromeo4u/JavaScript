var name = process.argv[2]
var age = parseInt(process.argv[3])
var salary = parseFloat(process.argv[4])

var hra = (50*salary)
var allowance = (20*salary)
var pf = (12*salary)

var annualSalary = 12*(salary+hra+allowance)-pf

console.log(`The annual salary of ${name} is ${annualSalary} and age is ${age}`)