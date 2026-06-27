document.getElementById("details")
.addEventListener("submit",function(event){
    event.preventDefault();
    let Name=document.getElementById("Name").value;
    let Email=document.getElementById("E-mail").value;
    let Phone=document.getElementById("Phone").value;
    let Age=document.getElementById("Age").value;
    let Address=document.getElementById("Address").value;
    let Gender =document.querySelector('input[name="Gender"]:checked').value;
    document.getElementById("p1").innerText="Name:-"+Name;
    document.getElementById("p2").innerText="E-mail:-"+Email;
    document.getElementById("p3").innerText="Phone number:-"+Phone;
    document.getElementById("p4").innerText="Age:-"+Age;
    document.getElementById("p5").innerText="Gender:-"+Gender;
    document.getElementById("p6").innerText="Address:-"+Address;

    let IDProof=document.getElementById("IDProof").files[0];
    if(IDProof){
        let read=new FileReader();
        read.onload=function(e){
            document.getElementById("dp").src=e.target.result;
        };
        read.readAsDataURL(IDProof);
    }
})