import axios from "axios";

export class ContactService{

    static serverURL = 'http://localhost:8080';

    
    static getAllContacts(){

        let dataURL = `${this.serverURL}/student/all`;
        return axios.get(dataURL);

    }
    static getContact(contactId){

        let dataURL = `${this.serverURL}/student/${contactId}`;
        return axios.get(dataURL);

    }
    static addContact(contact){

        let dataURL = `${this.serverURL}/student/save`;
        return axios.post(dataURL, contact);

    }
    static deleteContact(contactId){

        let dataURL = `${this.serverURL}/student/${contactId}`;
        return axios.delete(dataURL, contactId);

        
    }

    static updateContact(contact,contactId){

        let dataURL = `${this.serverURL}/student/${contactId}`;
        return axios.put(dataURL, contact);

    }




    static addNote(note){


        let dataURL = `${this.serverURL}/notes`;
        return axios.post(dataURL, note);

    }

    static getAllNotes(){
        let dataURL = `${this.serverURL}/notes`;
        return axios.get(dataURL);


    }


    static openNote(chosen){

        let dataURL = `${this.serverURL}/notes/${chosen}`;
        return axios.get(dataURL);

    }
    static updateNote(note,noteId){

        let dataURL = `${this.serverURL}/notes/${noteId}`;
        return axios.put(dataURL, note);

    }

    static deleteNote(noteId){

        let dataURL = `${this.serverURL}/notes/${noteId}`;
        return axios.delete(dataURL);

        
    }








}