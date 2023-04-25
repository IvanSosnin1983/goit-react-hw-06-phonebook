// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
