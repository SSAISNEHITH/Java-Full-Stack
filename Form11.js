document.getElementById("details").addEventListener("submit", function(event) {
    event.preventDefault();

    let Name = document.getElementById("name").value.trim();
    let Email = document.getElementById("mail").value.trim();
    let Phone = document.getElementById("phone").value.trim();
    let Dob = document.getElementById("dob").value;
    let Age = document.getElementById("age").value;
    let Address = document.getElementById("address").value.trim();

   
    let genderInput = document.querySelector('input[name="gender"]:checked');
    let Gender = genderInput ? genderInput.value : "Not specified";

    
    document.getElementById("p1").innerText = "Name: " + Name;
    document.getElementById("p2").innerText = "Email: " + Email;
    document.getElementById("p3").innerText = "Mobile: " + Phone;
    document.getElementById("pDob").innerText = "Date of birth: " + Dob;
    document.getElementById("pAge").innerText = "Age: " + Age;
    document.getElementById("pGender").innerText = "Gender: " + Gender;
    document.getElementById("pAddress").innerText = "Address: " + Address;

    let image = document.getElementById("image").files[0];
    if (image) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("dp").src = e.target.result;
        };
        reader.readAsDataURL(image);
    } else {
        document.getElementById("dp").src = ""; 
    }
});