$(document).ready(function(){
    // array number to multiply
    let multiTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let newTable = [];

    // multiply 1 by our array
    // multiTable.forEach(function(multiply){
    //     let num = 1;
    //     newTable.push(multiply * num);
    // });
    // console.log(newTable);

    //  multiply 2 by our array
    multiTable.forEach(function(multiply){
        let num = 2;
        newTable.push(multiply * num);

    });
    document.write(newTable);

    // multiply 3 by our array
    multiTable.forEach(function(multiply){
        let num = 3;
        newTable.push(multiply * num);
    });
    console.log(newTable);

    // multiply 4 by our array
    multiTable.forEach(function(){
        let num = 4;
        newTable.push(multiply * 4);
    });
    console.log(newTable);

    // multiply 5 by our array
    multiTable.forEach(function(){
        let num = 5;
        newTable.push(multiply * 5);
    });
    console.log(newTable);



   

   








});