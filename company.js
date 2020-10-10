function Company(name, namthanhlap){
    this.name = name;
    this.namthanhlap = namthanhlap;
    this.Members = [];
}
Company.prototype.addMember = function(people){
    this.Members.push(people);
}