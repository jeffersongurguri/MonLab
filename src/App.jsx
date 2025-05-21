import './App.css'
import Card from './components/Card'
import Grade from './components/Grade';
import _ from 'lodash';

export default function App() {

  return (
    <>
    <Grade>
      {_.range(20).map(e => (<Card id={e} key={e}> </Card>))}
    </Grade>
    </>
  );
}


