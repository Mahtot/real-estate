export default function Testimonal({name, src, comment}) {
  
  
  return (
    <div className="test-box">
        <div id='test-img'>
            <img src={src}
                 alt='person'/>
      
        </div>
        <div className="test-desc">
            <h3>{name}</h3>
            <p>
                <span>“ </span> {comment}
                <span>”</span>
            </p>
        </div>

    </div>
  )
}