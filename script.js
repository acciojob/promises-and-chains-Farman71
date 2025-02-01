//your JS code here. If required.
let form=document.getElementById("voteForm")
form.addEventListener("submit",function(event){
	 event.preventDefault();
let age=document.getElementById("age").value.trim();
let name=document.getElementById("name").value.trim();
age=parseInt(age);
let myPromise= new Promise((resolve,reject)=>{
	if(age>18)
	{
		setTimeout(()=>{
			resolve(`Welcome ${name} . You can Vote.`);
		},4000);
	}
	else
	{
		reject(`oh Sorry ${name} . You aren't old enough.`);
	}
});
  myPromise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});