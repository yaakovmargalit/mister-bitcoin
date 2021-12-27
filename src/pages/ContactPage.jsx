import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import contactService from '../services/contactService'

export class ContactPage extends Component {
    state = {
        contacts: null,
        filterBy: '',
    }
    async componentWillMount() {
        this.loadContacts()
    }

    async loadContacts() {
        const { filterBy } = this.state
        const contacts = await contactService.getContacts(filterBy)
        this.setState({ contacts })
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts, currContact } = this.state
        return (
            !contacts ? <div>Loading...</div> :
                <div className='container'>
                    <ContactFilter onChangeFilter={this.onChangeFilter} />
                    <Link to='/contact/edit'>Add Contact</Link>
                    <ContactList  contacts={contacts} />
                </div>
        )
    }
}
