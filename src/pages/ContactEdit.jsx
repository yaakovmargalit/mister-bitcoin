import { Component, createRef } from 'react'
import contactService from '../services/contactService'

export class ContactEdit extends Component {
    state = {
        contact: null
    }
    inputRef = createRef()

    async componentDidMount() {
        const contactId = this.props.match.params.id
        const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
        this.setState({ contact }, () => this.inputRef.current.focus())
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        if (field === 'name') {
            this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value, imgUrl: `https://robohash.org/${value}?set=set4` } }))
        } else {
            this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
        }

    }
   async onRemoveContact(id) {
       await contactService.deleteContact(id)
       this.props.history.push('/contact')
    }
    removeBtn = () => {
        const { contact } = this.state
        if (contact._id) {
            return (
                <button onClick={() => this.onRemoveContact(contact._id)}><span className="material-icons icon">delete</span></button>
            )
        }
    }
    onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }
    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-edit'>
                <h1>Add Contact</h1>
                <img src={contact.imgUrl} alt="" />
                {this.removeBtn()}
                <form onSubmit={this.onSaveContact} >
                    <label htmlFor="name">Nmae</label>
                    <input ref={this.inputRef} onChange={this.handleChange} value={contact.name} type="text" name="name" id="name" />
                    <label htmlFor="phone">Phone</label>
                    <input ref={this.inputRef} onChange={this.handleChange} value={contact.phone} type="text" name="phone" id="phone" />
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} value={contact.email} type="text" name="email" id="email" />
                    <button >Save</button>
                </form>
            </div>
        )
    }
}
