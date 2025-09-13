document.addEventListener('DOMContentloaded',() => {
   const form= document.getElementById('signup_form');
   const uname= document.getElementById('username');
   const email= document.getElementById('email');
   const pw= document.getElementById('password');
   const cpw= document.getElementById('confirmpw');
   const error= document.getElementById('error');
   
   if(!form) return; //return; is used inside a function to exit it.
   
   form.addEventListener('submit', onSignupSubmit);
   
   function onSignupSubmit(event) { event.preventDefault();
   const username= uname.value.trim();
   const emailid= email.value.trim().toLowerCase();
   const pass= pw.value;
   const confirm= cpw.value;
   
   error.textContent='';
   
   if(!username||!emailid||!pass||!confirm) {
      error.textContent='Please fill all fields';
      return;
   }
   //add a quick email & min pw char check later on. 5e, 5f
   
   
   if(pass!== confirm) {
      error.textContent='Passwords donot match!';
      return;
   }
   const users= JSON.parse(localStorage.getItem('users')|| '[]');
   
   const usernametaken = users.some(u=> u.username=== username);
   if (usernametaken){
      error.textContent='Username already registered!';
      return;
   }
   //below could be a problem. 
   const emailtaken = users.some(u=> u.emailid=== emailid);
   if (emailtaken) {
      error.textContent= 'Email already registered!';
      return;
   }
   
   const newUser= {
      id: 'u_' + Date.now(),
      username: username,
      email: emailid,
      password: pass,
      createdAt: new Date().toISOString()
   };
   
   users.push (newUser);
   
   localStorage.setItem('users', JSON.stringify(users));
   
   localStorage.setItem('loggedInUser', newUser.id);
   
   window.location.href= 'home.html';
   }
});