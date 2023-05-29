import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteContact } from '../../Redux/action';
import { ImCancelCircle } from "react-icons/im"
import { Contacts } from '../../Redux/reducer';
import "./Contact.css"

const Contact: FC = () => {
  const contacts = useSelector((store: Contacts[]) => store);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log("contacts is", contacts);

  const handelContactDelete = (id: string) => {
    dispatch(deleteContact(id))
  }
  return (
    <div className='contact__container'>
      <button className='crateContact__btn' onClick={() => navigate("/addContact")}>Create Contact</button>

      {
        contacts.length > 0 ?
          <table className='table-wrapper'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                contacts.map((contact: any) => (
                  <tr key={contact.id}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.status}</td>
                    <td className='action'>
                      <Link to={`/editContact/${contact.id}`}>Edit</Link>
                      <button onClick={() => handelContactDelete(contact.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          :
          <div className='no__contact__found__container'>
            <div>
              <ImCancelCircle />
            </div>
            <div>
              <p>No Contact Found Please add Contact from Create Contact Button</p>
            </div>
          </div>
      }

    </div>
  )
}

export default Contact