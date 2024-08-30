let form = document.querySelector("form");
let main = document.querySelector('.main');
form.addEventListener("submit", e=> {
  
  let name = e.target.uname.value;

let password = e.target.password.value;

let email = e.target.email.value;
  //console.log(name);
 // console.log(password);
 // console.log(email)
  
  let userData =JSON.parse( localStorage.getItem('user-data')) ?? [];
  
  userData.push({
  "name":name,
  "password":password,
  "email":email
});


  localStorage.setItem('user-data',JSON.stringify(userData));
  e.target.reset()
  showData();
console.log(userData);
  e.preventDefault();
});


let showData = () =>{
  let userData =JSON.parse( localStorage.getItem('user-data')) ?? [];
  let finalData = '';
  userData.forEach((element,i)=>{
    console.log(element)
    finalData += `<div class="item">
  <i onclick="removeData(${i})">&times;</i>
  
  <h3>username</h3>
  <span>${element.name}</span>
  
  <h3>password</h3>
  <span>${element.password}</span>
  
  <h3>email</h3>
  <span>${element.email}</span>
</div>`;
  });
  console.log(finalData)
 main.innerHTML =finalData;
}

let removeData =(index)=>{
 
  let userData =JSON.parse( localStorage.getItem('user-data')) ?? [];
  userData.splice(index,1);
  
  localStorage.setItem('user-data',JSON.stringify(userData));
  showData();
}


showData();

//let user = [
// {
//   "name":"sabbir",
//   "email":"sabbir123@gmail.com"
// },
//{
//  "name":"ashik",
 // "gmail":"ashik34@gmail.com"
//}
//];

//localStorage.setItem('user',JSON.stringify(user));

//console.log(JSON.parse(localStorage.getItem('user')));