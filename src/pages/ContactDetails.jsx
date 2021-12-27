import  { Component } from 'react'
import { Link } from 'react-router-dom'
import contactService from '../services/contactService'

export class ContactDetails extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    onGoBack = () => {
        this.props.history.push('/contact')
    }
    render() {
        const { contact } = this.state
        if(!contact) return <div>Loading...</div>
        return (
            <div className="container contact-details">
            <div>
                <img src={contact.imgUrl} alt="" />
                <button onClick={this.onGoBack}>Back</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
            </div>
            <div>
                <div className="details-row">
                <span className="material-icons icon">badge</span>
                    <h2>Name:</h2>
                    <h3>{contact.name}</h3>
                </div>
                    <hr/>
                <div className="details-row">
                <span className="material-icons icon">call</span>
                    <h2>Phone:</h2>
                    <h3>{contact.phone}</h3>
                </div>
                <hr/>
                <div className="details-row">
                <span className="material-icons icon">email</span>
                    <h2>Email:</h2>
                    <h3>{contact.email}</h3>
                </div>
            </div>
        </div>
        )
    }
}







