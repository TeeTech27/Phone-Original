function School(name, address){
    this.name = name;
    this.address = address;
    this.students =[];
}
School.prototype.addStudent = function(people){
    this.students.push(people);
}
module.exports = School;