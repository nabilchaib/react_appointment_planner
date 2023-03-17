import React, {useState} from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';


export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      setIsDuplicate(true);
      return;
    }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
    setIsDuplicate(false);    
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
          <ContactForm
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
            isDuplicate={isDuplicate}
          />
          
          {/* Submit button */}
        {isDuplicate && <p>Contact name already exists!</p>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
        data={contacts}/>
      </section>
    </div>
  );
};
 