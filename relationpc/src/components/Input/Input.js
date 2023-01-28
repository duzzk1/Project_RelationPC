export const Input = (props) => {
  return (
    <>
    <div className="form">
    <label htmlFor={props.item}>{props.item}</label>
    <input type={props.type} name={props.item} id={props.item} value={props.text}/>
    </div>
    </>
  )
}