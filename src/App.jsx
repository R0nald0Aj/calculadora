import { useState } from "react";
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
import { Container,Content ,Row} from "./style"

const  App = () => {
   const [currentNumber,setCurrentNumber] = useState('0')
   const [firstNumber,setFirtNumber] = useState('0')
   const [operation,setOperation] = useState('0')
   
   const onAddNuumber= (num) =>{
      console.log(num)
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
   }
   
   const onSum = () =>{
      if(firstNumber === '0'){
          setFirtNumber(currentNumber)
          setCurrentNumber('0')
          setOperation('+')
      }else{
          const sum = Number(firstNumber) + Number(currentNumber)
          setCurrentNumber(sum); 
          setOperation('')
      }
   }

   const onMinus = () =>{
    if(firstNumber === '0'){
        setFirtNumber(currentNumber)
        setCurrentNumber('0')
        setOperation('-')
    }else{
        const sum = Number(firstNumber) - Number(currentNumber)
        setCurrentNumber(sum); 
        setOperation('')
    }
 }
   
   const onEquals = () => {
      if(firstNumber !== '0' && operation !=='' && currentNumber !== '0'){
          switch (operation) {
            case '+':
                onSum()        
              break;
            case '-':
               onMinus()
              break; 
            default:
              break;
          }
      }
   }
   
   const onClear = () =>{
     setCurrentNumber('0')
     setFirtNumber('0')
     setOperation('')
   }


   return (
   <Container>
    <Content>
     <Inputs value={currentNumber}/>  
     <Row>
       <Buttons label={"x"}/>
       <Buttons label={"/"}/>
       <Buttons label={"C"} onclick={onClear} />
       <Buttons label={"."}/>
      </Row>  

      <Row>
       <Buttons label={"7"} onclick={() =>onAddNuumber('7') } />
       <Buttons label={"8"} onclick={() =>onAddNuumber('8') } />
       <Buttons label={"9"} onclick={() =>onAddNuumber('9') }/>
       <Buttons label={"-"} onclick={onMinus} />
      </Row>  

      <Row>
       <Buttons label={"4"} onclick={() =>onAddNuumber('4') } />
       <Buttons label={"5"} onclick={() =>onAddNuumber('5') } />
       <Buttons label={"6"} onclick={() =>onAddNuumber('6') } />
       <Buttons label={"+"} onclick={onSum} />
      </Row>  

      <Row>
       <Buttons label={"1"}  onclick={() =>onAddNuumber('1') } />
       <Buttons label={"2"}  onclick={() =>onAddNuumber('2') }/>
       <Buttons label={"3"}  onclick={() =>onAddNuumber('3') }/>
       <Buttons label={"="}  onclick={() =>onEquals() }/>
      </Row>  
       
    </Content>
   </Container>
  
  )
}

export default App
