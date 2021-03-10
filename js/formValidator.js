var form = document.getElementById("add_student_form");
var edit_form=document.getElementById("edit_student_form");

var pristine = new Pristine(form);
var pristine2=new Pristine(edit_form);

let defaultConfig = {
  // class of the parent element where the error/success class is added
  classTo: 'form-group',
  errorClass: 'has-danger',
  successClass: 'has-success',
  // class of the parent element where error text element is appended
  errorTextParent: 'form-group',
  // type of element to create for the error text
  errorTextTag: 'div',
  // class of the error text element
  errorTextClass: 'text-help' 
};