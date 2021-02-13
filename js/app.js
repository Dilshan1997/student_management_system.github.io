
const info=document.querySelector("#student-info")
let doc_count=0

//create element and render
function renderInfo(doc){
let tr=document.createElement('tr')
let reg_no=document.createElement('td')
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

bin.setAttribute('class','btn btn-danger')
edit.setAttribute('class','btn btn-inform')

tr.setAttribute('data-id',doc.id)
reg_no.textContent=doc.data().reg_number;
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
tr.appendChild(reg_no)
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
info.appendChild(tr);

//delete details
bin.addEventListener("click",(e)=>{
  e.stopPropagation()
  let id=e.target.parentElement.getAttribute('data-id')
  db.collection('Student_details').doc(id).delete()
  console.log('Delete')
});
}

var docRef = db.collection("Student_details");

docRef.get().then((snapshot) => {
  doc_count=snapshot.size
 
  snapshot.docs.forEach(doc => {
    renderInfo(doc)
  
  });
});
//saving details
reg_form.addEventListener("submit",(e)=>{
  e.preventDefault()
  db.collection('Student_details').add({
    reg_number:reg_no_create(doc_count),
    full_name:reg_form.f_name.value,
    address:reg_form.address.value,
    birthdate:reg_form.bd.value,
    age:reg_form.age.value,
    national:reg_form.national.value,
    school:reg_form.school.value,
    phone_no:reg_form.phone_no.value,
    owner_name:reg_form.o_name.value,
    owner_address:reg_form.o_address.value,
    owner_phone:reg_form.o_phone.value,
    owner_job:reg_form.o_job.value,
  });
  console.log("save")
});




//Register_number creation
function reg_no_create(n){
  return n+1
  
}
