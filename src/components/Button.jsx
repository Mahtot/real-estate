


function Button({id, name}) {
 
  return (
   
        <button className={`btn-container ${id}`} id={id}>
            {name}
        </button>
   
  )
}
export default Button