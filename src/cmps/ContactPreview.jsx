import { Link } from "react-router-dom"

export function ContactPreview({ contact }) {
    return (
        <Link to={`/contact/${contact._id}`}>
            <div className="contact-preview">
                <img src={contact.imgUrl} alt="" />
                <h3>{contact.name}</h3>
            </div>
        </Link>
    )
}
