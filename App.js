import './App.css';
import Data from './data';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import { useState } from 'react';


function App() {
  let sIdx = 0;
  let [shoes, shoesChange] = useState(Data);

  return (
    <div className="App">

      {/* NavBar */}
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Jumbotron */}
      <Jumbotron className="background">
        <h1>신발사세요! 맛좋은 신발이요.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sint quo, dolorem tempora modi id at ipsum hic quisquam in quae molestias commodi expedita aspernatur mollitia nobis inventore quibusdam magni!
          Aliquid vero debitis hic eos repudiandae officiis beatae ea. Laudantium obcaecati repellendus doloribus deserunt maxime assumenda, incidunt, fuga modi, voluptas exercitationem iusto est facilis optio perferendis aspernatur repellat at cum!
        </p>
        <p>
        <Button variant="primary">더보기</Button>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">
            {
              shoes.map((item, idx, arr)=>{
                return <Card key={item.id} shoes={item} 인덱스={idx}/>
              })
            }
            <button onClick={()=>{
              
            }}>3개 더보기</button>
        </div>
      </div>    
    </div>
  );
}

function Card(props) {
  let listShoes = [];
  let shoesID = "";
  // if(props.인덱스<10){
  //   shoesID = "https://kimsrik.github.io/shop/images/shoes0"+ props.인덱스 + ".jpg";
  // }else{
  //   shoesID = "https://kimsrik.github.io/shop/images/shoes"+ props.인덱스 + ".jpg";
  // }
  
  
  
  return (
    <div className="col-md-4">
        <img src= { `https://kimsrik.github.io/shop/images/shoes${
          props.인덱스<10
          ? "0" +props.인덱스
          : +props.인덱스
        }.jpg` }/>
        <h2>{props.shoes.title}</h2>
        <p>{props.shoes.content}</p>
      </div>
  );
}

export default App;
