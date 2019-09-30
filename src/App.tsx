import React from 'react';
import TextField from './components/TextField';

const App: React.FC = () => {
  return (
    <div>
        <TextField text='hello' person={{firstName: 'Bob', lastName: 'Smith'}}
        handleChange={e => {
            console.log(`${e.target}`)
        }}></TextField>
    </div>
  );
}

export default App;
