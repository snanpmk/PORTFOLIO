function btnClick(){
    let btn;

    var name=document.getElementById("name").value.trim();
    var e_mail=document.getElementById("email").value.trim();
    var number=document.getElementById("Mob").value.trim();
    var messg=document.getElementById("description").value.trim();


    if(name==="" || e_mail==="" || number==="" || messg==="")
    {
        alert('Please fill all fields');
        btn=false;
    }else if(!/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(e_mail)){
        alert('Please enter a valid Email adress');

    
        btn=flase;
    }
    else if(!/^\d+$/.test(number)){
        alert('Please enter a valid Phone number');

        btn=false;
    }
    
  return btn;
}