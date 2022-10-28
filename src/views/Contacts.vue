<template>
  <Header v-bind:currentPage="currentPage" />
  <Sidebar />
  <!-- <pre>{{this.contact}}</pre> -->
<!-- add popup -->
  <div v-show="this.popup" class="add_popup">
    <div @click="this.switch_modal" class="popup-overlay"></div>
    <div class="popup-container">
      <div class="close_button">
        <button @click="this.switch_modal">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="popup-row1">
        <div class="popup-header">
          <h2>INPUT CONTACT DETAILS</h2>
        </div>

        <div class="popup-form">
          <form>
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              v-model="contact.name"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              v-model="contact.email"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Number"
              v-model="contact.phone"
            />
          </form>
        </div>

        <div
          v-show="this.valid == false"
          class="error-message"
          style="color: red"
        >
          Please complete required fields
        </div>
      </div>

      <div class="popup-button">
        <button @click="submit()">ADD CONTACT</button>
      </div>
    </div>
  </div>

<!--  -->

<!-- EDIT POPUP -->
  <div v-show="this.edit_popup" class="add_popup">
    <div @click="this.switch_modal2" class="popup-overlay"></div>
    <div class="popup-container">
      <div class="close_button">
        <button @click="this.switch_modal2">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="popup-row1">
        <div class="popup-header">
          <h2>UPDATE CONTACT DETAILS</h2>
        </div>

        <div class="popup-form">
          <form>
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              v-model="contact.name"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              v-model="contact.email"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Number"
              v-model="contact.phone"
            />
          </form>
        </div>

        <div
          v-show="this.valid == false"
          class="error-message"
          style="color: red"
        >
          Please complete required fields
        </div>
      </div>

      <div class="popup-button">
        <button @click="update(contact.id)">UPDATE CONTACT</button>
      </div>
    </div>
  </div>

<!--  -->


  <div class="contacts">
    <div class="row1">
      <div>
        <h2>CONTACT MANAGER</h2>
      </div>
      <div>
        <button @click="this.popup = true">
          <i class="fas fa-plus-circle"></i>
        </button>
      </div>
    </div>

    <div class="contacts-container" v-if="contacts.length > 0">
      <div v-for="contact of contacts" class="contacts-card" :key="contact">
        <div class="icon">
          <img src="../assets/219986.png" alt="" />
        </div>
        <div class="info">
          <span
            >Name: <b>{{ contact.name }}</b></span
          >
          <span
            >Email: <b>{{ contact.email }}</b></span
          >
          <span
            >Mobile: <b>{{ contact.phone }}</b></span
          >
        </div>

        <div class="action">

          <button @click="switch_modal2(contact.id)"><i class="far fa-edit"></i></button>
          <button @click="deleteContact(contact.id)"><i class="fas fa-trash-alt"></i></button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from "@/services/ContactService";
import Header from "../views/Header.vue";
import Sidebar from "../views/Sidebar.vue";



// @ is an alias to /src

export default {
  name: "Contacts",
  data() {
    return {
      currentPage: "Contacts",
      popup: false,
      edit_popup: false,
      loading: false,
      contacts: [],
      errorMessage: null,
      valid: null,
      updateID: null,
      contact: {
        name: "",
        email: "",
        phone: "",
        
      },
    };
  },
  components: {
    Header,
    Sidebar,
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getAllContacts();
      this.contacts = response.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
    }
  },
  methods: {
    // add
    switch_modal() {
      this.popup = !this.popup;
      this.contact.name = "";
      this.contact.email = "";
      this.contact.phone = "";
    },
    // update modal
    switch_modal2(id) {
      this.updateID = id;
      this.edit_popup = !this.edit_popup;

      if(this.edit_popup){
        this.contacts.forEach((value ) => {
         if(value.id == id){
          this.contact.name = value.name;
          this.contact.email = value.email;
          this.contact.phone = value.phone;

         }
      });
    

      }
      else{
        this.contact.name = "";
          this.contact.email = "";
          this.contact.phone = "";

      }
     
    },
    
    async getContacts() {
      let response = await ContactService.getAllContacts();
      this.contacts = response.data;
    },
    async submit() {
      if (
        this.contact.name != "" &&
        this.contact.email != "" &&
        this.contact.phone != ""
      ) {
        this.valid = null;
        try {
          let response = await ContactService.addContact(this.contact);
          if (response) {
            this.switch_modal();
            this.getContacts();
          } else {
            this.popup = false;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        this.valid = false;
      }
    },
    async deleteContact(id){
      try {
          let response = await ContactService.deleteContact(id);
          if (response) {
         
            this.getContacts();
          } else {
          
          }
        } catch (error) {
          console.log(error);
        }



    },
    async update() {
      console.log(this.updateID)
      if (
        this.contact.name != "" &&
        this.contact.email != "" &&
        this.contact.phone != ""
      ) {

        let update_contact = this.contact;
        update_contact.id = this.updateID
        this.valid = null;
        try {
          let response = await ContactService.updateContact(update_contact,this.updateID);
          if (response) {
            this.switch_modal2();
            this.getContacts();
          } else {
            this.edit_popup = false;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        this.valid = false;
      }
    }
  },
};
</script>



<style scoped>
  .action i {
    font-size: 15px;
}

.action button {
    display: flex;
    max-width: 30px;
    justify-content: center;
    align-items: center;
}

.action {
    width: 100%;
    max-width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 5px;
}
.popup-row1 {
  padding: 20px;
}
.popup-form {
  margin-bottom: 15px;
  width: 100%;
}
.popup-form form {
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.popup-form input {
  outline: none;
  /* margin-left: 50px; */
  font-size: 20px;
  height: 40px;

  border: none;
  border-bottom: solid #0000002b 1px;
}
.close_button button {
  font-size: 20px;
  background: none;
  outline: none;
  border: none;
}
.close_button {
  position: absolute;
  right: 0;
  top: 0;
}

.popup-button {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  /* text-align: center; */
  align-items: center;
  justify-content: center;
}
.popup-button button {
  width: 100%;
  height: 100%;
  border: none;
  background: #1089ff;
  outline: none;
  color: white;
  /* font-size: 25px; */
  font-weight: bold;
}
.add_popup {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  /* background: #00000063; */
  /* z-index: 100; */
  align-items: flex-start;
  justify-content: center;
}
.popup-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #00000063;
}

.popup-container {
  margin-top: 100px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  z-index: 10;
  /* height: 500px; */
  padding-bottom: 50px;
  /* width: 500px; */
  background: white !important;
}
i.fas.fa-plus-circle {
  font-size: 25px;
}

.row1 button {
  border: none;
  background: none;
  outline: none;
  color: #1089ff;
}

.row1 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
}

.row1 h1 {
  text-align: center;
}
.icon img {
  max-width: 150px;
}

.contacts-card {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  gap: 20px;
  display: flex;
  padding: 20px;
  background: #1089ff63;
  width: 100%;
  max-width: 420px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.info span {
  border: solid #00000054 1px;
  padding: 5px;
}
.contacts-container {
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 200px;
    background: white;
}
</style>

<style>
button {
  cursor: pointer;
}
</style>
