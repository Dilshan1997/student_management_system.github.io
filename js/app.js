$("document").ready(function(){
var date=new Date()
console.log(date)
const info=document.querySelector("#student-info")
let model_student_id=document.querySelector("#student_id_display")
let doc_count=0
let delete_doc_count


//create element and render
function renderInfo(doc){
let tr=document.createElement('tr')
let e_no=document.createElement('td')
let s_name=document.createElement('td')
let s_address=document.createElement('td')
let s_age=document.createElement('td')
let s_pho=document.createElement('td')
let national=document.createElement('td')
let o_name=document.createElement('td')
let o_address=document.createElement('td')
let o_pho=document.createElement('td')
let o_job=document.createElement('td')
let verification=document.createElement('td')
let bin=document.createElement('button')
let edit=document.createElement('button')


function setAttributes(el, options) {
   Object.keys(options).forEach(function(attr) {
     el.setAttribute(attr, options[attr]);
   })
}

bin.setAttribute('class','btn btn-danger')
setAttributes(edit, {"type":"button","class": 'btn btn-inform', "data-toggle":"modal", "data-target":"#edit_form"});



tr.setAttribute('data-id',doc.id)
e_no.textContent=doc.data().e_number;
s_name.textContent=doc.data().full_name;
s_address.textContent=doc.data().address;
s_age.textContent=doc.data().age;
national.textContent=doc.data().national
s_pho.textContent=doc.data().phone_no
o_name.textContent=doc.data().owner_name
o_address.textContent=doc.data().owner_address
o_pho.textContent=doc.data().owner_phone
o_job.textContent=doc.data().owner_job
verification.textContent=doc.data().verified
bin.textContent="Delete"
edit.textContent="Edit"
tr.appendChild(e_no)
tr.appendChild(s_name)
tr.appendChild(s_address)
tr.appendChild(s_age)
tr.appendChild(national)
tr.appendChild(s_pho)
tr.appendChild(o_name)
tr.appendChild(o_address)
tr.appendChild(o_pho)
tr.appendChild(o_job)
tr.appendChild(verification)
tr.appendChild(bin)
tr.appendChild(edit)
info.appendChild(tr)
 
//delete details
bin.addEventListener("click",(e)=>{
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
  
      e.stopPropagation()
      let id=e.target.parentElement.getAttribute('data-id')
      
      db.collection('Student_details').doc(id).delete()
      console.log('Delete')
     
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    
    };
   
  })
})

//edit
edit.addEventListener("click",(e)=>{

  let id=e.target.parentElement.getAttribute('data-id')
  console.log(id)
  const docRef=db.collection('Student_details').doc(id);
  docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

e_form.f_name.value=doc.data().full_name
e_form.address.value=doc.data().address
e_form.bd.value=doc.data(). birthdate
e_form.age.value=doc.data().age
e_form.national.value=doc.data().national
e_form.school.value=doc.data().school
e_form.phone_no.value=doc.data().phone_no
e_form.o_name.value=doc.data().owner_name
e_form.o_address.value=doc.data().owner_address
e_form.o_phone.value=doc.data().owner_phone
e_form.o_job.value=doc.data().owner_job
e_form.o_email.value=doc.data().owner_email
e_form.email.value=doc.data().email
e_form.m_name.value=doc.data().mother_name
e_form.m_address.value=doc.data().mother_address
e_form.m_nic.value=doc.data().mother_NIC
e_form.m_job.value=doc.data().mother_job
e_form.m_phone.value=doc.data().mother_phone
e_form.m_email.value=doc.data().mother_email
e_form.fa_name.value=doc.data().father_name
e_form.f_address.value=doc.data().father_address
e_form.f_nic.value=doc.data().father_NIC
e_form.f_job.value=doc.data().father_job
e_form.f_phone.value=doc.data().father_phone
e_form.f_email.value=doc.data().father_email
model_student_id.innerHTML=doc.data().e_number

e_form.addEventListener("submit",(e)=>{
  e.preventDefault()
  console.log("hh")
  
  // check if the form is valid

  if(true){
  
    console.log('Edit')
  
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Save`,
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      db.collection('Student_details').doc(id).update({
        full_name:e_form.f_name.value,
        address:e_form.address.value,
        birthdate:e_form.bd.value,
        age:e_form.age.value,
        national:e_form.national.value,
        school:e_form.school.value,
        phone_no:e_form.phone_no.value,
        owner_name:e_form.o_name.value,
        owner_address:e_form.o_address.value,
        owner_phone:e_form.o_phone.value,
        owner_job:e_form.o_job.value,
        
      });
      Swal.fire('Saved!', '', 'success')
    } 
    else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  }
 
});
});
}

var docRef = db.collection("Student_details");

docRef.get().then((snapshot) => {
  doc_count=snapshot.size
  console.log(doc_count)
 
  snapshot.docs.forEach(doc => {
    renderInfo(doc)
  
  });
});
//saving details
reg_form.addEventListener("submit",(e)=>{
  e.preventDefault()
    // check if the form is valid
    var valid = pristine.validate(); // returns true or false
   console.log(valid)
 
  if(valid){
    db.collection('Student_details').add({
      e_number:e_no_create(doc_count),
      full_name:reg_form.f_name.value,
      address:reg_form.address.value,
      birthdate:reg_form.bd.value,
      age:reg_form.age.value,
      national:reg_form.national.value,
      email:reg_form.email.value,
      school:reg_form.school.value,
      phone_no:reg_form.phone_no.value,
      owner_name:reg_form.o_name.value,
      owner_address:reg_form.o_address.value,
      owner_phone:reg_form.o_phone.value,
      owner_job:reg_form.o_job.value,
      owner_NIC:reg_form.o_nic.value,
      owner_email:reg_form.o_email.value,
      mother_name:reg_form.m_name.value,
      mother_address:reg_form.m_address.value,
      mother_phone:reg_form.m_phone.value,
      mother_NIC:reg_form.m_nic.value,
      mother_email:reg_form.m_email.value,
      mother_job:reg_form.m_job.value,
      father_name:reg_form.fa_name.value,
      father_address:reg_form.f_address.value,
      father_phone:reg_form.f_phone.value,
      father_NIC:reg_form.f_nic.value,
      father_email:reg_form.f_email.value,
      father_job:reg_form.f_job.value

    });
  
Swal.fire({
  icon: 'success',
  title: 'Data has been saved',
  showConfirmButton: false,
  timer: 1500
})
    console.log("save")
  
  }
else{
  console.log("not valid")
}


});
//Register_number creation
function e_no_create(n){
  //add deletion doc count
  return n+1
}
});



