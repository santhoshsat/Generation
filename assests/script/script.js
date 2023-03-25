// generation finder using js
function Relation(code, gender) {
    //finding relation
    if ((gender == "m" || gender == "M") && code < 0) {
      relation = " Father";
    } else if ((gender == "f" || gender == "f") && code < 0) {
      relation = " Mother";
    } else if ((gender == "m" || gender == "M") && code > 0) {
      relation = " Son";
    } else if ((gender == "f" || gender == "f") && code > 0) {
      relation = " Daughter";
    }
    
    //checking ancestor or descendant
    switch (code) {
      case -3:
        console.log("Great grand" + relation);
        break;
      case -2:
        console.log("Grand" + relation);
        break;
      case -1:
        console.log(relation);
        break;
      case 0:
        console.log("Me");
        break;
      case 1:
        console.log(relation);
        break;
      case 2:
        console.log("Grand" + relation);
        break;
      case 3:
        console.log("Great grand" + relation);
        break;
    }
}
  
var code = 0;
var gender = "f";
var relation;
Relation(code, gender);

//checking examples
Relation(2, "f") //➞ "granddaughter"
Relation(-3, "m") //➞ "great grandfather"
Relation(1, "f") //➞ "daughter"