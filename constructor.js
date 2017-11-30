function User(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}
var pete = new User('Pete','Burns',18,'Male');
User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function(){
    return this.firstName + this.lastName + this.emailDomain;
};
console.log(pete.getEmailAddress());