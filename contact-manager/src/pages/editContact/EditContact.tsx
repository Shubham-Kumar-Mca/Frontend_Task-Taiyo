import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateContactDetails } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Contacts } from '../../Redux/reducer';
import "./EditContact.css"

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    status: ""
}

const EditContact = () => {
    const contacts = useSelector((store: Contacts[]) => store);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [updateContact, setUpdateContact] = useState(initialState);
    const { id } = useParams()

    const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUpdateContact({ ...updateContact, [name]: value })
    }

    const handelContactSave = () => {
        const newUpdateContact: Contacts = {
            ...updateContact,
            id : id as string
        }
        dispatch(updateContactDetails(newUpdateContact))
        alert("Contact Update Sucessfully!");
        navigate("/")
    }

    useEffect(() => {
        const findCurrentContact = contacts.find(contacts => contacts.id === id);
        if (findCurrentContact) {
            setUpdateContact(findCurrentContact);
        }
    }, [id, contacts]);

    return (
        <div className='editContact__container'>
            <div>
                <form>
                    <div className='d-flex'>
                        <label htmlFor="">First Name</label>
                        <input type="text" name='firstName' value={updateContact.firstName} onChange={handelInputChange} />
                    </div>
                    <div className='d-flex'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" name='lastName' value={updateContact.lastName} onChange={handelInputChange} />
                    </div>
                    <div className='d-flex'>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' value={updateContact.email} onChange={handelInputChange} />
                    </div>
                    <div className='status__container'>
                        <label htmlFor="" className='status__title'>Status</label>
                        <div>
                            <div>
                                <input type="radio" name='status' checked={updateContact.status === "active"} value="active" onChange={handelInputChange} />
                                <label htmlFor="">Active</label>
                            </div>
                            <div>
                                <input type="radio" name='status' checked={updateContact.status === "inactive"} value="inactive" onChange={handelInputChange} />
                                <label htmlFor="" >Inactive</label>
                            </div>
                        </div>
                    </div>
                </form>

                <button className='saveContact__btn' onClick={handelContactSave}>Save Edit Contact</button>
            </div>
        </div>
    )
}

export default EditContact