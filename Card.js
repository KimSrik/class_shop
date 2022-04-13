

function Card(props){
    return (
      <div className="col-md-4">
        <img src={`https://pam7464.github.io/shop/images/shoes0${
          props.index<10
          ?'0'+props.index
          :props.index
        }.jpg`}/>
        <h2>{props.신발.title}</h2>
        <p>{props.신발.content}</p>
      </div>
    )
}
export default Card;