import React from 'react';



function Form (props) {
    const { values, change, submit } = props;

    const onChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        change(inputName, inputValue)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        submit()
    }
    
    return (
<form onSubmit={onSubmit}>
        <label><h3>Username: </h3>
          <input type='text' name='username' value={values.username} onChange={onChange}></input>
        </label>
        <label>Email:
          <input type='text' name='email' value={values.email} onChange={onChange}></input>
        </label>
        <label>Role:
          <select name='role' value={values.role} onChange={onChange}>
            <option>Select role</option>
            <option>Front End devloper</option>
            <option>Back End devloper</option>
            <option>Full Stack devloper</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    )

}

export default Form