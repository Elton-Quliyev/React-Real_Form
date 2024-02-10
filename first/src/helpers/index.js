const Validate = (name, value) =>{
    let error = '';

    switch (name) {
        case 'email':
            let EmailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
            if(!EmailRegex.test(value)){
                error='Emailizi duzgun daxil edin'
            }
            
            break;

        case 'password':
            if(value.length < 8){
                error = 'Parolu duzgun daxil edin'
            }

            break;

        case 'gender':
            if(value.length <2){
                error='Bir gender secmelisiniz'
            }
            break
        case 'phoneNumber':
            if(value.length !== 7){
                error='Nomrenizi duzgun daxil edin'
            }
            break
        case 'date':
            if(value.length < 2){
                error ='Dogum gununuzu duzgun daxil edin'
            }
            break
        case 'name':
            if(value.length<3){
                error = 'Adinizi duzgun daxil edin'
            }
            break
    
        default:
            break;
    }


    return error
}
export default Validate