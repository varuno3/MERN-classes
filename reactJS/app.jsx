import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = document.getElementById("root");
const parent2 = document.getElementById("root2");
const root = ReactDOM.createRoot(parent);
const root2 = ReactDOM.createRoot(parent2);

const parent3 = document.getElementById("root3")
const root3 = ReactDOM.createRoot(parent3);


const H1 = <h1>This is a Heading</h1>;
const main = <main>
    {H1}
    <p>This is a paragraph.</p>
</main>

const row1 = <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
</tr>
const row2 = <tr>
    <th>2</th>
    <td colSpan={2}>Jacob</td>
</tr>
const row3 = <tr>
    <th>3</th>
    <td>Larry the Bird</td>
    <td>@twitter</td>
</tr>
const Table1 = <table border={2}>{row1}{row2}{row3}</table>

const Grid = () => {
    const color1 = "#ff6347";
    const color2 = "#4682b4";
    const color3 = "#adff2f";
    const color4 = "#ffa500";
  
    const cellStyle = {
      width: '100px',
      height: '100px',
      border: '1px solid black',
    };
  
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ ...cellStyle, backgroundColor: "#ff6347" }}></div>
          <div style={{ ...cellStyle, backgroundColor: "#4682b4" }}></div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ ...cellStyle, backgroundColor: "#adff2f" }}></div>
          <div style={{ ...cellStyle, backgroundColor: "#ffa500" }}></div>
        </div>
      </div>
    );
  };
  

const  App = () => (
   <div className="container">  
   {main}
   </div>
);

root.render(<App/>)
root2.render(Table1)
root3.render(<Grid />)