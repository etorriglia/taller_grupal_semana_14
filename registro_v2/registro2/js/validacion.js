let all_fields = document.getElementsByTagName('input');


function validateFields(){
    for (i=0; i<all_fields.length; i++){
        if(emptyField(all_fields[i]) && !isPassword(all_fields[i])){
            console.log(all_fields[i])
            all_fields[i].setCustomValidity(`Debe ingresar un ${all_fields[i].id}`)
            all_fields[i].reportValidity();
    }
}
}

function emptyField(field){
    return (field.value === '');
    }


function isPassword(field){
    return (field.id === "password1" || field.id === "password2");
}





validateFields();
