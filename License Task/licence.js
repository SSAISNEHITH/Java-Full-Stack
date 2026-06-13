document.getElementById("details")
.addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("licenceCard").style.display = "block";

    document.getElementById("lName").innerText =
    document.getElementById("Name").value;

    document.getElementById("lEmail").innerText =
    document.getElementById("Email").value;

    document.getElementById("lPhone").innerText =
    document.getElementById("Phone").value;

    document.getElementById("lAge").innerText =
    document.getElementById("Age").value;

    document.getElementById("lGender").innerText =
    document.getElementById("Gender").value;

    document.getElementById("lVehicle").innerText =
    document.getElementById("Vehicle").value;

    document.getElementById("lWheeler").innerText =
    document.getElementById("Wheeler").value;

    document.getElementById("lExp").innerText =
    document.getElementById("Exp").value;

    document.getElementById("licenceNo").innerText =
    "AP" + Math.floor(Math.random() * 1000000);

    let imageFile = document.getElementById("Image").files[0];

    if(imageFile){

        let reader = new FileReader();

        reader.onload = function(e){
            document.getElementById("lImage").src = e.target.result;
        };

        reader.readAsDataURL(imageFile);
    }

});