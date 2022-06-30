import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button size='large'>BUTTON</Button>
      <Button size='medium'>BUTTON</Button>
      <Button size='small'>BUTTON</Button>
      <Button size='large' color='black'>BUTTON</Button>
      <Button size='medium' color='black'>BUTTON</Button>
      <Button size='small' color='black'>BUTTON</Button>
      <Button size='large' color='pink'>BUTTON</Button>
      <Button size='medium' color='pink'>BUTTON</Button>
      <Button size='small' color='pink'>BUTTON</Button>
      <Button size='large' color='white' bord='one'>BUTTON</Button>
      <Button size='medium' color='white' bord='two'>BUTTON</Button>
      <Button size='small' color='white' bord='thr'>BUTTON</Button>
      <Button size='big'>BUTTON</Button>
      <Button size='big' color='black'>BUTTON</Button>
      <Button size='big' color='pink'>BUTTON</Button>


    </div>
  );
}

export default App;
