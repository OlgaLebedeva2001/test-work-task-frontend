import '../src/App.css';
import Popup from './components/Popup';
import Card from './components/Card';
import Input from './components/Input';
import React from 'react';

export const PopupContext = React.createContext();

function App() {
  const [items, setItems] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const search = searchValue ? `&term=${searchValue}` : '';

  React.useEffect(() => {
    fetch(`http://localhost:3000?${search}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, [searchValue]);

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  console.log(searchValue, 'input changed');

  return (
    <body className="page">
      <PopupContext.Provider value={{ open, setOpen, selected, setSelected }}>
        <div className="page__main main">
          <Input searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className="main__grid">
            {items.map((obj) => (
              <Card key={obj.name} obj={obj} />
            ))}
          </div>
        </div>
        <Popup />
      </PopupContext.Provider>
    </body>
  );
}

export default App;
