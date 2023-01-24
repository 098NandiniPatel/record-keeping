import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

function App() {
  const [form,setForm]=useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data,form])
    setForm({});
  }

  const removeItem=(index)=>{
    let arr=data;
    arr.splice(index,1);
    setData([...arr]);
  }
  return (
    <div className="App">
      <Header />
      {/* form */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}    
            onChange={(e) => setForm({...form,name:e.target.value})}
            id="outlined-basic" label="name" variant="outlined" />
          <TextField
            value={form.email}
            onChange={(e) => setForm({...form,email:e.target.value})}
            id="outlined-basic" label="email" variant="outlined" />
          <Button
            onClick={addData} 
            color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div  key={index} className="data_val">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                  <Button
                    onClick={()=> removeItem(index)}
                    color="error" variant="contained">
                    <DeleteIcon />
                  </Button>
                </Stack>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
