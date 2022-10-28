<template>
  <Header v-bind:currentPage="currentPage" />
  <Sidebar />

  <div class="notepad-container">
    <!--  OPEN FILE MODAL  -->
    <div v-show="this.openfile" class="notepad-open">
      <div class="open_container">
        <div class="open_header">
          <div class="col1">
            <div class="icon">
              <img src="../assets/pngegg.png" alt="" />
            </div>
            <div class="title">
              <span>Notepad</span>
            </div>
          </div>
          <div class="col2">
            <span @click="this.openfile = false"
              ><i class="fas fa-times"></i
            ></span>
          </div>
        </div>
        <div class="open_body">
          <div v-for="note of notes" class="note-item">
            <button
              @click="chosen_file = note.id"
              :class="{ selected_background: chosen_file == note.id }"
            >
              <img src="../assets/7970360.png" alt="" />
              <span>{{ note.filename }}</span>
            </button>
          </div>
        </div>
        <div class="open_footer">
          <div>
            <button @click="open_note" class="open_note">Open</button>
          </div>
          <div>
            <button @click="delete_note" class="delete_note">Delete</button>
          </div>
          
          <div>
            <button @click="this.openfile = false">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!--  OPEN FILE MODAL  END-->

    <div @click="this.file_sub = false" class="notepad-overlay"></div>
    <div v-show="!this.notepad_open" class="minimized_button">
      <button @click="this.notepad_open = !this.notepad_open">Notepad</button>
    </div>
    <transition name="modal">
      <div v-show="this.notepad_open" class="notepad">
        <!-- SAVE MODAL POPUP -->
        <div v-show="this.save_open" class="save-modal">
          <div>
            <span>File Name: </span>
            <input type="text" name="" id="" v-model="noteArray.filename" />
          </div>

          <div class="buttons">
            <button @click="save">Save</button>
            <button
              @click="this.save_open = false"
            >
              Cancel
            </button>
          </div>
        </div>
        <!--  -->
        <div class="notepad-header">
          <div class="top_bar">
            <div class="layer1">
              <div class="icon">
                <img src="../assets/pngegg.png" alt="" />
              </div>
              <div class="title">
                <span v-show="noteArray.filename != ''">{{
                  noteArray.filename
                }}</span>
                <span v-show="noteArray.filename == ''">Notepad</span>
              </div>
            </div>
            <div class="layer1_2">
              <button @click="this.notepad_open = !this.notepad_open">
                <span>
                  <i class="fas fa-window-minimize"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="layer2">
            <div class="notepad-menu">
              <span
                @click="this.file_sub = !this.file_sub"
                :class="{ chosen_menu: this.file_sub }"
                ><u>F</u>ile</span
              >

              <div v-show="this.file_sub" class="file-sub">
                <ul>
                  <li>
                    <button @click="this.newfile">New</button>
                  </li>
                  <li>
                    <button @click="this.openfile = true">Open</button>
                  </li>
                  <li>
                    <button @click="save_open = true">Save</button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="notepad-menu">
              <span><u>E</u>dit</span>
            </div>
            <div class="notepad-menu">
              <span><u>F</u>ormat</span>
            </div>
            <div class="notepad-menu">
              <span><u>V</u>iew</span>
            </div>
            <div class="notepad-menu">
              <span><u>H</u>elp</span>
            </div>
          </div>
        </div>
        <div @click="this.file_sub = false" class="notepad-body">
          <textarea id="notepad_app" v-model="noteArray.notes"></textarea>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from "../views/Header.vue";
import Sidebar from "../views/Sidebar.vue";
import { ContactService } from "@/services/ContactService";

// @ is an alias to /src

export default {
  name: "Notepad",
  data() {
    return {
      chosen_file: null,
      currentPage: "Notepad",
      openfile: false,
      notepad_open: true,
      file_sub: false,
      save_open: false,
      notes: [],
      noteArray: {
        notes: "",
        filename: "",
      },
    };
  },
  components: {
    Header,
    Sidebar,
  },

  methods: {

    newfile(){
        this.noteArray.notes = '';
          this.noteArray.filename = '';
          this.noteArray.id = null;
          this.file_sub = false;
          this.chosen_file = null
    },

    async delete_note(){

      if(this.chosen_file == this.noteArray.id){
        try {
          let response = await ContactService.deleteNote(this.chosen_file);
          if (response) {
         
            this.getNotes();
          } else {
          
          }
        } catch (error) {
          console.log(error);
        }
        this.newfile()
        this.getNotes();

      }
      else{
        try {
          let response = await ContactService.deleteNote(this.chosen_file);
          if (response) {
         
            this.getNotes();
          } else {
          
          }
        } catch (error) {
          console.log(error);
        }
      }
     

      
    },
    async open_note() {
      this.notes.forEach((value) => {
        if (value.id == this.chosen_file) {
          this.noteArray.notes = value.notes;
          this.noteArray.filename = value.filename;
          this.noteArray.id = value.id;
        }
      });
      this.openfile = false;
      this.file_sub = false;
    },
    async getNotes() {
      try {
        let response = await ContactService.getAllNotes();
        this.notes = response.data;
      } catch (error) {
        this.errorMessage = error;
      }
    },
    async save() {
      if (this.noteArray.filename != "") {
        if (this.noteArray.id) {
            try {
          let response = await ContactService.updateNote(this.noteArray,this.noteArray.id);
          if (response) {
            this.save_open = false;
              this.file_sub = false;
          } else {
            
          }
        } catch (error) {
          console.log(error);
        }

        this.getNotes();
        }
        else{

            try {
            let response = await ContactService.addNote(this.noteArray);
            if (response) {
              this.save_open = false;
              this.file_sub = false;
              this.noteArray.notes = "";
              this.noteArray.filename = "";
            } else {
            }
          } catch (error) {
            console.log(error);
            this.save_open = false;
            this.file_sub = false;
            this.noteArray.notes = "";
            this.noteArray.filename = "";
          }
          this.getNotes();
        }
      } else {
      }
    },
  },
  created() {
    this.getNotes();
  },
};
</script>

<style scoped>
.selected_background {
  background-color: #3b71ca !important;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
}
.save-modal {
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  background: white;
  border: solid #000 1px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
}

.note-item button {
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
    height: 75px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.note-item {
  width: 100%;
  max-width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.note-item button {
  height: 75px;
}

.open_body {
  height: 100%;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.note-item img {
  max-width: 45px;
}
.open_footer div {
  width: 100%;
  max-width: 75px;
}
.open_footer button {
  width: 100%;
}

.open_footer {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  padding: 10px;
  border-top: solid #00000040 1px;
}

.col1 {
  display: flex;
  align-items: center;
  gap: 5px;
}

.open_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid #00000040 1px;
  padding: 3px 10px;
}

.open_container {
  display: flex;
  width: 500px;
  height: 400px;
  flex-direction: column;
  justify-content: space-between;
  border: solid #00000059 1px;
}
.notepad-open {
  z-index: 9;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notepad-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.notepad-menu span {
  padding: 2px 5px;
  cursor: default;
}
span.chosen_menu {
  background: #0000ff70;
}
.notepad-menu {
  position: relative;
}
.notepad-menu button {
  background-color: transparent;
  border: none;
  outline: none;
}
.file-sub {
  position: absolute;
  top: 0;
  left: 0;
  /* display: inline-table; */
}
.file-sub ul li {
  text-align: center;
  width: 100%;
}
.file-sub ul {
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.file-sub {
  display: flex;
  position: absolute;
  top: 24px;
  left: -10px;
  width: 100px;
  background: #f2f2f2;
  border: solid #0000004f 0.5px;
  /* width: 100%; */
  /* display: inline-table; */
  align-items: center;
  justify-content: center;
  padding: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.minimized_button {
  position: fixed;
  bottom: 0;
  left: 291px;
}

.minimized_button button {
  padding: 10px 30px;
  /* background: #004e9b; */
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #3b71ca;
  color: #fff;
  box-shadow: 0 4px 9px -4px #3b71ca;
  text-transform: uppercase;
  font-weight: bold;
}

.top_bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.notepad-body textarea {
  width: 100%;
  outline: none;
  border: none;
  height: 100%;
}
.notepad-body {
  height: 100%;
}
.layer2 {
  display: flex;
  gap: 10px;
}
.layer1 {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.notepad-header {
  border-bottom: solid #0000000d 2px;
  display: flex;
  padding: 5px 10px;

  width: auto;
  flex-direction: column;
}
.icon img {
  max-width: 25px;
}
.notepad-container {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  min-height: 90vh;
  padding: 10px;
}

.notepad {
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 900px;
  background-color: white;
  border: solid #00000059 1px;
}
</style>

<style></style>
