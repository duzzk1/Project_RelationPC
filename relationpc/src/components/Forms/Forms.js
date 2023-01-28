import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
export const Forms = () => {
  return (
    <>
    <div className="form_comp">
    <form action="#" method="get">
      
      <Input item="filial" type="text"/>
      <Input item="nome" type="text"/>
      <Button value="Enviar" class="btnEnviar"/>
    </form>
    </div>
    </>
  )
}