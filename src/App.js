import React from 'react';
import 'phi-css/dist/phi.min.css'
import Typography from './components/Typography';
import Grid from './components/Grid';
import './css/main.css'
import Blockquote from './components/Blockquote';
import Button from './components/Button';
import FormComponents from './components/FormComponents';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
        <div className="container">
            <section>
                <h5 className="section-heading">Typography Style</h5>
                <Typography/>
            </section>
            <section>
                <h5 className="section-heading">Grid</h5>
                <Grid/>
            </section>
            <section>
                <h5 className="section-heading">Blockquote</h5>
                <Blockquote/>
            </section>
            <section>
                <h5 className="section-heading">Button</h5>
                <Button/>
            </section>
            <section>
                <h5 className="section-heading">Form Components</h5>
                <FormComponents/>
            </section>
            <section>
                <h5 className="section-heading">Table</h5>
                <Table/>
            </section>
        </div>
    </div>
  );
}

export default App;
