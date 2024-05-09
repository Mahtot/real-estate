export default function GoToAction({head, body, btn, id}) {
 
    return (
    
        <div className="gotoAction-container">
                <h1>{head}</h1>
                <p>{body}</p>
                <button id={id}>{btn}</button>
        </div>
  )
}