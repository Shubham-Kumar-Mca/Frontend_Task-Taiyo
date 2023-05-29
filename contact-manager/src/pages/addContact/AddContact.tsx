import React, { useState, FC } from 'react';
import { createContact } from '../../Redux/action';
import { Contacts } from '../../Redux/reducer';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'
import "./AddContact.css";

const initialState = {
    firstName  : "",
    lastName : "",
    email : "",
    status : ""
}

const AddContact : FC  = () => {
    const [contactInfo, setContactInfo] = useState(initialState);
    const dispatch = useDispatch()

    const handelInputChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target
        setContactInfo({...contactInfo, [name] : value})
    }

    const handelContactSave = () =>{
        if(contactInfo.firstName === ""){
            alert("Please Enter First Name")
        }else if(contactInfo.lastName === ""){
            alert("Please Enter Last Name")
        }else if(contactInfo.email === ""){
            alert("Please Enter Email")
        }else{
            const neContact : Contacts = {
                ...contactInfo, 
                id : nanoid()
            }
            dispatch(createContact(neContact))
            setContactInfo(initialState)
        }
    }
    return (
        <div className='addContact__container'>
            <div>
                <form>
                    <div className='d-flex'>
                        <label htmlFor="">First Name</label>
                        <input required type="text" name='firstName' value={contactInfo.firstName} onChange = {handelInputChange}/>
                    </div>
                    <div className='d-flex'>
                        <label htmlFor="">Last Name</label>
                        <input required type="text" name='lastName' value={contactInfo.lastName} onChange = {handelInputChange}/>
                    </div>
                    <div className='d-flex'>
                        <label htmlFor="">Email</label>
                        <input required type="email" name='email' value={contactInfo.email} onChange = {handelInputChange}/>
                    </div>
                    <div className='status__container'>
                        <label htmlFor="" className='status__title'>Status</label>
                        <div>
                            <div>
                                <input type="radio"  name='status' value="active" onChange = {handelInputChange} />
                                <label htmlFor="">Active</label>
                            </div>
                            <div>
                                <input type="radio" name='status' value="inactive" onChange = {handelInputChange} />
                                <label htmlFor="" >Inactive</label>
                            </div>
                        </div>
                    </div>
                </form>

                <button type='button' className='saveContact__btn' onClick={handelContactSave}>Save Contact</button>
            </div>
        </div>
    )
}

export default AddContact