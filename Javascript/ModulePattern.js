function EmployeeDetails(name,age,salary,desg,doj,bonus) {
    var name = name;
    var age = age;
    var salary = salary;
    var desg = desg;
    var doj=doj;
    var bonus = bonus;
    function getName() {
        console.log("Emp name: "+name);
    }
    function getAge() {
        console.log("Emp age: "+age);
    }
    function getDesgDetails() {
        console.log("Emp designation: "+desg);
    }
    function getJoiningDetails(){
        console.log("Joining date: "+doj);
    }
    function getSalary() {
        console.log("Salary is: "+(salary+bonus));
    }
    return {
        getName: getName, getAge: getAge,
        getDesgDetails: getDesgDetails,
        getSalary: getSalary,
        getJoiningDetails:getJoiningDetails,
        name: name
    }
}

//emp1 details
var emp1=EmployeeDetails("Lekhana",21,15000,"Trainee","03-01-2022",500)
var emp2=EmployeeDetails("devasena",20,16000,"Trainee","09-01-2022",800)
//to get details of emp1
emp1.getName();
emp1.getAge();
emp1.getDesgDetails();
emp1.getJoiningDetails();
emp1.getSalary();
//to get details of emp2
emp2.getSalary();
debugger;