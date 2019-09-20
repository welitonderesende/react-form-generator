import React from 'react';
import { Button, TextField } from '@material-ui/core';
import FormGenerator from './FormGenerator';

const App = () => {
  console.log(`what? working?`);
  const formGen = new FormGenerator();
  const schema = {
    fields: [
      {
        id: `nameInput`,
        type: `input`,
        inputType: `text`,
        value: ``,
        name: `nameInput`,
        label: `Name`,
        placeholder: `Name`,
        model: `name`,
        handleChange: () => {
          console.log(`foi`);
        },
      },
      {
        id: `passwordInput`,
        type: `input`,
        inputType: `password`,
        name: `passwordInput`,
        label: `Password`,
        value: ``,
        placeholder: `password`,
        model: `password`,
        handleChange: () => {
          console.log(`pass`);
        },
      },
      {
        id: `numberInput`,
        type: `number`,
        inputType: `Number`,
        name: `NumberInput`,
        label: `Number`,
        value: ``,
        placeholder: `Number`,
        model: `number`,
        handleChange: () => {
          console.log(`pass`);
        },
      },
      {
        id: `emailInput`,
        type: `email`,
        inputType: `email`,
        name: `emailInput`,
        label: `email`,
        value: ``,
        placeholder: `email`,
        model: `email`,
        handleChange: () => {
          console.log(`pass`);
        },
      },
      {
        id: `checkboxInput`,
        type: `checkbox`,
        inputType: `checkbox`,
        name: `checkboxInput`,
        label: `checkbox`,
        value: false,
      },
      {
        id: `selectInput`,
        type: `select`,
        inputType: `select`,
        name: `selectInput`,
        label: `select`,
        value: false,
        helperText: `A helper text used`,
        selectItems: [
          {
            value: 234,
            label: `Item 2`,
          },
          {
            value: 232,
            label: `Item 2`,
          },
          {
            value: 235,
            label: `Item 3`,
          },
        ],
      },
    ],
  };
  const options = {
    button: {
      label: `Button, click it`,
    },
  };

  const formGenerated = formGen.create(schema, options);
  console.log(formGenerated);
  return (
    <div>
      eh
      {formGenerated}
    </div>
  );
};

export default App;