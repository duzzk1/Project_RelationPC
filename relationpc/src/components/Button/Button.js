export const Button = (props) => {
  return (
    <>
    <div className="button">
    <input type="submit" value={props.value} className={props.class}/>
    </div>
    </>
  )
}