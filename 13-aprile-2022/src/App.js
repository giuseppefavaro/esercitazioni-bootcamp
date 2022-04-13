// import logo from './logo.svg';
import './App.css';

import { Description } from './components/Description';
import { Header } from './components/Header';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Card } from './components/Card';

function App() {
  return (

    <div className="page">

      <Header> </Header>

      <Description> </Description>

      <div className="cards">
        <Card title="Esperienze" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."> </Card>
        <Card title="Hobby" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."> </Card>
        <Card title="Lingue" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."> </Card>
      </div>


      <Contact> </Contact>

      <Footer> </Footer>

    </div>

  );
}

export default App;
