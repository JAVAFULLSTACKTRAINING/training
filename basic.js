function getName(name,age){

    var persons = ["Ramu","Somu","Naresh","Suresh"];
    //console.log(persons);

    for(var i=0 ; i<persons.length;i++){
       // console.log(persons[i]);
    }

    var personss = new Array("Ramu_1","Somu_1","Naresh_1","Suresh_1");
    //console.log(personss);
    return "Mr."+name +" Age :"+ age;
}

function getPersonDetails(){
    var person = {id:1001,name:"teseuser",email:"user@test.com",address:"India"};
    var persons = [person];
    for(var i=0 ; i<persons.length;i++){
        //console.log(persons[i].id);
        //console.log(persons[i].name);
        //console.log(persons[i].email);
        //console.log(persons[i].address);
    }

    for(p in persons){
       console.log("ID :: "+p.id +" Namme :: "+p.name+" Email :; "+p.email+" Address ::"+p.address)
    }
    
    
    return persons;
}
function getDetails(name,age){
    //console.log(getName(name,age));
    document.getElementById("view").innerHTML = getName(name,age);
    document.getElementById("viewarray").innerHTML = getPersonDetails();
}


