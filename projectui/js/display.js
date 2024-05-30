
async function dataShow(){
    let myTable = `
    <table border="1px" width="600px" bgcolor="lightblue" align="center">
    <tr>
        <th>Employee no</th>
        <th>Employee Nmae</th>
        <th>City</th>
        <th>Salary</th>
    </tr>
    `;


    let url="http://localhost:3000/employess";

    let myobj =await fetch(url);
    console.log(myobj);
    let myData = await myobj.json();
    console.log(myData);

    myData.map((key)=> {
        myTable += `
        <tr>
            <td>${key.emplyeeno}</td>
            <td>${key.name}</td>
            <td>${key.city}</td>
            <td>${key.salary}</td>
        
        </tr>
        `;
        
    });

    myTable += `</table>` ;
    document.getElementById("demo").innerHTML=  myTable;


}

dataShow();