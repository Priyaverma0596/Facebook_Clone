
 //Signup
 let usersdata = [];
var Signup = function ()
{
    console.log("IN Signup")
        let user = {
            id: Date.now(),
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            emailorphone: document.getElementById('emailorphone').value,
            password: document.getElementById('password').value,
            dob: document.getElementById('dob').value,
            gender: document.getElementById('gender').value
        }
        console.log(user);
        usersdata.push(user);
        document.querySelector('form').reset();

        console.warn('added', { usersdata });
        let pre = document.querySelector('#msg pre');
        pre.textContent = '\n' + JSON.stringify(usersdata, '\t', 2);
        //Saving to local staorage
        if((password=== password) && (emailorphone===emailorphone))
            {
            localStorage.setItem("UserList", JSON.stringify(usersdata));
            window.location.href= 'http://localhost:3000/login';
             alert("Signup successfully");
             
            }
            else{
                alert("Invalid information")
                return;
            }  
        

    
}
//login
// var login = function (){
//     let usersdata =[];
//                 const addusers  = (event)=>{
//                 event.preventDefault()//prevents the form from autosubmitting
//                 let user ={
//                     id: Date.now(),
//                     emailorphone: document.getElementById('emailorphone').value,
//                     password: document.getElementById('password').value
//                 }
//                 usersdata.push(user);
//                 document.querySelector('form').reset();
        
//                 console.warn('added',{usersdata});
//                 let pre=document.querySelector('#msg pre');
//                 pre.textContent = '\n' + JSON.stringify(usersdata, '\t', 6);
        
//                 //Saving to local staorage
                
//                 if((password== password) && (emailorphone== emailorphone))
//                 {
//                 localStorage.setItem("UserList", JSON.stringify(usersdata));
//                 window.location.href= 'http://localhost:3000';
//                  alert("Login successfully");
                 
//                 }
//                 else{
//                     alert("Invalid information")
//                     return;
//                 }  
//             }
//             document.addEventListener('DOMContentLoaded',()=>{
//                 document.getElementById('btn').addEventListener('click',addusers);
//             });      
// }


