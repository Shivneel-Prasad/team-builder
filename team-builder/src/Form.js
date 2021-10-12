import React from "react";

export default function Form(props) {
    const { update, submit, values } = props;

    const onChange = evt => {
        // const { name, value } = evt.target;
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = (evt) => {
        // it does not allow the browser to reload
        evt.preventDefault();
        // use the submit as a callback coming in through the props
        submit();
    };

    return (
        <form className='form-container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
            <label>Name
                <input 
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  placeholder="Enter Your Name"
                />
            </label>
            <label>Email
                <input 
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  name="email"
                  placeholder="Please enter Your Email"
                />
            </label>
            {/* ////////// DROPDOWN ////////// */}
            <label>Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>Select a Role</option>
                    <option value='Front-End Engineer'>Front-End Engineer</option>
                    <option value='Back-End Engineer'>Back-End Engineer</option>
                    <option value='Web Designer'>Web Designer</option>
                    <option value='Full-Stack Engineer'>Full-Stack Engineer</option>
                    <option value='Student'>Student</option>
                </select>
                <div className='submit'/>
                <button>Submit</button>
            </label>
          </div>
        </form>
    );
}
