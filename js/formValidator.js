var pristine;
window.onload = function () {

   var form = document.getElementById("form1");

   pristine = new Pristine(form);

   form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = pristine.validate();
      //alert('Form is valid: ' + valid);

   });


};