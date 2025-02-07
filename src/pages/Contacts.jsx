import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Contacts/Filter";

export const Contacts = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
