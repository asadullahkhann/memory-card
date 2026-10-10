export default function Card({name, imageUrl, onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt="" width={150}/>
      {name.replaceAll('-', ' ')}
    </div>
  )
}