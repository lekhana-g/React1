var sobj = (function Student(name,age,rollno,school,standard) {
    const getDetails = function () {
        console.log("Name: " + name);
        console.log("Age: " + age);
        console.log("Roll-no: " + rollno);
        console.log("School: " + school);
        console.log("Standard: "+standard);
    }
    return{
        getDetails: getDetails,
    };
})("Ram",21,12,"svbk","10th");
console.log(sobj.getDetails());