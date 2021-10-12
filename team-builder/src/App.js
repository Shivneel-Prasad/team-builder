import './App.css';
import React, { useState } from 'react'
import Form from './Form'

const myTeam = [
  {
    name: 'Goten', email: 'Goten@gmail.com',  role: 'Front-End Engineer',
  },
  {
    name: 'Trunks', email: 'Trunks@gmail.com',  role: 'Back-End Engineer',
  },
  {
    name: 'Vegeta', email: 'Vegeta@gmail.com', role: 'Web-Designer',
  },
  {
    name: 'Goku', email: 'Goku@gmail.com',  role: 'Full-Stack Engineer',
  },
];

const initialFormValues = { 
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
};

export default function App() {
  const [members, setMembers] = useState(myTeam);
  const [formValue, setFormValue] = useState(initialFormValues);

  const update = (inputName, inputValue) => {
    setFormValue({ ...formValue, [inputName]: inputValue});
  }

  const onSubmit = () => {
    const fighters = {
      name: formValue.name.trim(),
      email: formValue.name.trim(),
      role: formValue.role.trim(),
    }

    setMembers([...members, fighters]);
    setFormValue(myTeam);
  };

  return (
    <div className='container'>
      <h1>A Simple Web Development Form</h1>
      <Form 
        values={formValue} 
        update={update} 
        submit={onSubmit} 
      />

      {members.map((member, idx) => {
        return (
          <div key={idx} details={member} >
            {member.name} is the {member.role} their email is {member.email}
          </div>
        );
      })}
      
    </div>
  );
}

