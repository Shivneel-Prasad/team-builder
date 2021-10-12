import './App.css';
import React, { useState } from 'react'
import Form from './Form'

const myTeam = [
  {
    name: 'Dragoon', email: 'Dragoon@gmail.com',  role: 'Front-End Engineer',
  },
  {
    name: 'Dranzer', email: 'Dranzer@gmail.com',  role: 'Back-End Engineer',
  },
  {
    name: 'Driger', email: 'Driger@gmail.com', role: 'Web-Designer',
  },
  {
    name: 'Draciel', email: 'Draciel@gmail.com',  role: 'Full-Stack Engineer',
  },
];

const initialFormValues = { 
  name: '',
  email: '',
  role: '',
};

function App() {
  const [members, setMembers] = useState(myTeam);
  const [formValue, setFormValue] = useState(initialFormValues);

  const update = (evt) => {
    const { newName, newValue} = evt.target;
    setFormValue({ ...formValue, [newName]: newValue});
  }

  const onSubmit = () => {
    const rookie = {
      name: formValue.name.trim(),
      email: formValue.name.trim(),
      role: formValue.role.trim(),
    }

    setMembers([...members, rookie]);
    setFormValue(myTeam);
  };

  return (
    <div className='container'>
      <h1>A Simple Web Development Form</h1>
      <Form formValue={formValue} update={update} submit={onSubmit} />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            {member.name} is the {member.role} its email is {member.email}
          </div>
        );
      })}
      
    </div>
  );
}

export default App;
