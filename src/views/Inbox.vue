<template>

    <Header v-bind:currentPage="currentPage" />
    <Sidebar />
    <div class="inbox">
        <div class="message-side">
            <ul>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <div class="content">
                        <span>09154236704</span>
                        <span style="font-weight: 500">{{this.sampleMessage.substring(0,80)}}</span>

                    </div>
                </li>
            </ul>
        </div>

        <div class="message-box">
            <div class="sender">
                <div class="icon">
                        <img src="../assets/02-1User-Outline(1).png" alt="">
                    </div>
                    <h2>09154236704</h2>
            </div>

            <div class="message-body">
                <ul style="padding-left: 0">
                    <li>
                        <span>{{this.sampleMessage}}</span>
                    </li>
                </ul>

            </div>

        </div>


    </div>
</template>
  
  
  
<script>
import Header from '../views/Header.vue'
import Sidebar from '../views/Sidebar.vue'

// @ is an alias to /src


export default {
    name: 'Inbox',
    data() {
        return {
            currentPage: "Inbox",
            sampleMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    },
    components: {
        Header,
        Sidebar

    }
}
</script>

<style scoped>
    .sender {
    display: flex;
    gap: 15px;
   height: 90px;
   align-items: center;
   border-bottom: solid #0000002b 3px

}
.message-side{
    
    width: 100%;
    min-width: 390px;
    max-width: 390px;
    overflow-y: scroll !important;

}
.message-body {
    padding: 10px;
}
.message-box {
    padding: 10px;
    background-color: white;
}
.inbox {
 
    display: flex;
    gap: 10px;
    min-height: 90vh;
    max-height: 100vh;
    overflow: hidden;
}
.message-side ul {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.message-side ul li {
    height: 80px;
    padding: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

}
.content {
    max-width: 290px;
}
.message-box .icon img {
    max-width: 50px;
   
}
.icon img {
    max-width: 30px;
    background: #FF10F0;
    padding: 10px;
    border-radius: 50%;
}
.icon {
    display: flex;
    align-items: center;
}
.content span {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>