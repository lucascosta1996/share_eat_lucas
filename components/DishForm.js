import { useInput } from './hooks/useInput'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'

const FormWrapper = styled.form`
  margin-top: 6px;
  
  .paddingBottom {
    padding-bottom: 93px;
  }

  .submit-button--wrapper {
    text-align: center;
  }
`

function DishForm() {
  const { value: name, bind: bindName, reset: resetName } = useInput( '' )
  const { value: price, bind: bindPrice, reset: resetPrice } = useInput( '' )
  
  const handleSubmit = ( event ) => {
      event.preventDefault()
      alert(`Submitting Name ${name} ${price}`)
      resetName()
      resetPrice()
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className="paddingBottom">
        <Input label="Nome do prato" placeholder="Prato" {...bindName} />
        <Input label="Valor" mask="brl" placeholder="R$ 0,00" {...bindPrice} />
        <Input label="Descrição do prato" placeholder="Insira uma descrição" textarea={ true } warningtext="*A descrição deve conter até 200 caracteres." />
      </div>
      <div className="submit-button--wrapper">
        <Button defaultB type="submit" label="Salvar" route="" />
      </div>
    </FormWrapper>
  );
}

export default DishForm