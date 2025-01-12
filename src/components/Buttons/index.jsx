import { ButtonContainer } from './style';

function Buttons({label,onclick}){
    return(
         <ButtonContainer onClick = {onclick}>
             <p>{label}</p>
         </ButtonContainer>
    );
}

export default Buttons;