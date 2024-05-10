

export default function Team({src, name, job}) {
  return (
    <div className="person-container">
        
        <div id="img-container">
            <img src={src}
                 alt="person"/>
            <h2>{name}</h2>
        </div>
        
        <div id='job'>
            <h3>{job}</h3>
        </div>
        
    </div>
  )
}