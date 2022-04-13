import Card from './Card.js';
import {Link} from 'react-router-dom';

function Detail(props){
    return (
      <div className="container">
        <div className="row">
          <h2>상품목록</h2>
          {
            props.shoes.map((item,idx,arr)=>{                  
              return (
              <Link to = {`/Detail/${item.id}`}>
                <Card 신발={item} index={idx} key={item.id}/>                     
              </Link>
              );
            })                   
          }              
        </div>        
      </div>
    );    
}
export default Detail;