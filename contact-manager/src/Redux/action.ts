import { CREATE_CONTACT, DELETE_USER, GET_CONTACT, UPDATE_USER } from "./actionType";
import { Contacts } from "./reducer";

export const gettingContact = () => ({ type: GET_CONTACT })
export const createContact = (newContact : Contacts) => ({ type: CREATE_CONTACT, payload: newContact });
export const updateContactDetails = (updatedContact : Contacts) => ({ type: UPDATE_USER, payload: updatedContact });
export const deleteContact = (id : string) => ({ type: DELETE_USER, payload: id });