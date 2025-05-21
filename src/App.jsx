import './App.css'
import Card from './components/Card'
import Grade from './components/Grade';
import _ from 'lodash';
import '../mock/api.json';

export default function App() {

  return (
    <>
    <Grade>
      {_.range(1, 6).map(e => (<Card id={e} key={e}> </Card>))}
    </Grade>
    </>
  );
}


