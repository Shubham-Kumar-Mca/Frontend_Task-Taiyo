import { CREATE_CONTACT, DELETE_USER, GET_CONTACT, UPDATE_USER } from "./actionType";

export interface Contacts {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    status : string;
}

export const contactReducer = (state : Contacts[] = [], {type, payload} : any) =>{
    switch (type) {
        case CREATE_CONTACT:
            return [...state, payload];
        case GET_CONTACT :
            return state
        case UPDATE_USER:
            const udatedContacts = state.map(contact=>contact.id === payload.id ? payload : contact)
            return udatedContacts;
        case DELETE_USER:
            const filterdContacts = state.filter(contact=>contact.id !== payload);
            return filterdContacts;
        default:
            return state;
    }
}