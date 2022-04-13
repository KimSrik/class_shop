import {Switch,Route} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Data from './data';
import Detail from './Detail';
import StartPage from './startPage';
import QnA from './qna';
import FAQ from './faq';
import NavigationBar from './NavigationBar';
import DetailPage from './DetailPage';

function App() {
  let [shoes,shoesChange]=useState(Data);
  let [viewCnt,viewCntChange] = useState(3);
  return (
    <div className="App">
      {/* 공통페이지 */}
      {/* 내비게이션바 */}

      <NavigationBar/>
            
      <Switch> 
        
        {/* 제품별 상세페이지 */}
        <Route path="/Detail/:id">          
          <DetailPage shoes={ shoes }/> 
        </Route>

        {/* 상세페이지 */}
        <Route path="/Detail">
          <Detail shoes={shoes}/>
        </Route>
        

        {/* qna페이지 */}
        <Route path="/QnA">
          <QnA/>
        </Route>

        {/* faq페이지 */}
        <Route path="/faq">
          <FAQ/>
        </Route>

        {/* 시작페이지 */}
        <Route path="/">
          <StartPage shoes={shoes} viewCnt={viewCnt} viewCntChange={viewCntChange}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
