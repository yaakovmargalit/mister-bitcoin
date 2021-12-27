
import { ContactPreview } from "./ContactPreview";

export function ContactList({ contacts }) {

    return (
        <div>
            <section>
                {contacts.map(contact => <ContactPreview contact={contact} key={contact._id} />)}
            </section>
        </div>
    )
}








