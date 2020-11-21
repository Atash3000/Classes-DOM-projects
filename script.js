class School{
    constructor(name,numberOfStudents,level){
        this._name = name;
        this._numberOfStudents = numberOfStudents;
        this._level = level;
    }
    get name(){
        return this._name
    }
    get numberOfStudents(){
        return this._numberOfStudents
    }
    get level(){
        return this._level
    }
    set numberOfStudents(value){
      typeof numberOfStudents =="number"? this.numberOfStudents = value : console.log(`Invalid input ${value}, Enter a number`);
    }
    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the level ${this._level} `)
    }
    static pickTeacher(arr){
        let random = Math.floor(Math.random()*arr.length)
        return arr[random]
    }
}


class PrimarySchool extends School{
    constructor(name,numberOfStudents,level,pickupPolicy){
        super(name,numberOfStudents,level)
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy
    }
}

 class HighSchool extends School{
     constructor(name,numberOfStudents,level,sportsTeam){
         super(name,numberOfStudents,level)
         this._sportsTeam = sportsTeam;

     }
     get sportsTeam(){
         return this._sportsTeam
     }
 }

 class MiddleSchool extends School{
     constructor(name,numberOfStudents,level){
         super(name,numberOfStudents,level)

     }
 }

 class SchoolCatalog{
     constructor(){
         this._myCatalog = []
     }
     get myCatalog(){
         return this._myCatalog;
     }
     addSchool(value){
         this._myCatalog.push(value)
     }
 }

 let sierraNevada = new PrimarySchool('Siera Nevada' , 412,3,'Students must be picked up by a parent, guardian, or a family member over the age of 15.')
 sierraNevada.quickFacts()
 School. pickTeacher(['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles'])


 let elkhart = new HighSchool('Elkhart',233,4,['Baseball', 'Basketball', 'Volleyball', 'Ice Hockey'])
 
let catalog = new SchoolCatalog()
catalog.addSchool(PrimarySchool)
catalog.addSchool(HighSchool)
catalog.addSchool(MiddleSchool)

//DOM 
let submitBtn = document.getElementById('submit_btn')
let schoolSelect = document.getElementById('schoolTypeSelect')
let titleSchool = document.getElementById('titleOfSchool')
let studentsNumber = document.getElementById('studentsNumber')
let pickupPolicy = document.getElementById('pickupPolicy')
let sportsTeams = document.getElementById('sportsTeams')
let schoolOverview = document.getElementById('schoolOverview')
let catalogHTML = document.getElementById('catalogSchool')

submitBtn.onclick = ()=>{
  let constructor = schoolSelect.value === "High" ? HighSchool :
   schoolSelect.value === "Middle" ? MiddleSchool :
   schoolSelect.value === "Primary" ? PrimarySchool :"";
  let newSchool = new constructor(titleSchool.value, studentsNumber.value, constructor===HighSchool? sportsTeams.value: constructor===MiddleSchool? name.value: constructor===PrimarySchool? pickupPolicy.value: "")
  
 catalog.addSchool(newSchool);
  let result=[];
  console.log(catalog.myCatalog)
  catalog.myCatalog.forEach(elem => result.push(elem.name));
  return catalogHTML.innerHTML = result.join(" <br> ");
}