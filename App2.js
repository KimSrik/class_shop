import style from 'styled-components';
import './App2.css';
import './App2.scss';

let 가운데정렬된제목상자 = style.h1`
                            text-align: center;
                            color: red;
                          `;


function App() {
  return (
    <div className="App">
      <ul className="background">
        <li>
          <ol>
            <li>1</li>
            <li>2</li>
          </ol>
        </li>
        <li>
          <ol>
            <li>3</li>
            <li>4</li>
          </ol>
        </li>
        <li>
          <ol>
            <li>5</li>
            <li>6</li>
          </ol>
        </li>
      </ul>
      <h2>안녕하세요</h2>
    </div>
  );
}

export default App;
