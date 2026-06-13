//your JS code here. If required.
const form=document.getElementById("sub")
const age=document.getElementById("age");
const name=document.getElementById("name")
const btn=document.getElementById("btn")
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	const userAge = Number(age.value);
    const userName = name.value;

    if (!userName || !userAge) {
        alert("Please enter valid details.");
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAge > 18) {
                resolve(`Welcome, ${userName}. You can vote.`);
            } else {
                reject(`Oh sorry ${userName}. You aren't old enough.`);
            }
        }, 4000);
    });

    promise
        .then((msg) => alert(msg))
        .catch((err) => alert(err));
});
