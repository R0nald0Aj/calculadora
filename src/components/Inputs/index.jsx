import {InputContainer} from './style'

function Inputs({value}){
    return (
        <InputContainer>
            <input disabled value={value} />
        </InputContainer>
    
    );
}

export default Inputs;