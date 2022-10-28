<template>
    <div class="sidebar">
        <div class="user">
            <div class="photo">
                <img src="../assets/dummy-man-570x570.png" alt="" />
            </div>
            <div class="info">
                <span>Jane Smith</span>
            </div>
        </div>
        <div>
            <ul class="sidebar-list">
                <li>
                    <router-link to="/">
                        <div class="nav-link">
                        <i class="fas fa-list"></i>
                        <span>Dashboard</span>
                    </div>
                    </router-link>
                   
                </li>
                <li>
                    <router-link to="/contacts">
                        <div class="nav-link">
                        <i class="far fa-address-book"></i>
                        <span>Contacts</span>
                    </div>
                    </router-link>
                    
                </li>
                <li>
                    <router-link to="/inbox">
                        <div class="nav-link">
                        <i class="far fa-envelope"></i>
                        <span>Inbox</span>
                    </div>
                    </router-link>
                   
                </li>
                <li>
                    <router-link to="/notepad">
                        <div class="nav-link">
                        <i class="far fa-file-alt"></i>
                        <span>Notepad</span>
                    </div>
                    </router-link>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Sidebar",
    components: {},
};
</script>

<style scoped>
a:-webkit-any-link {
    color: white;
    cursor: pointer;
    text-decoration: none;
}
.nav-link i {
    width: 20px;
    text-align: center;
}

ul.sidebar-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.nav-link span {
    margin: 0;
    line-height: 30px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;
    position: relative;
    color: #fff;
    -webkit-transform: translate3d(0px, 0, 0);
    -moz-transform: translate3d(0px, 0, 0);
    -o-transform: translate3d(0px, 0, 0);
    -ms-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
    display: block;
    height: auto;
    opacity: 1;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 20px;
}

.user {
    padding-left: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 20px;
    display: flex;
    align-items: center;

    gap: 15px;
}

.photo img {
    max-width: 34px;
}

.sidebar .photo {
    overflow: hidden;
    border-radius: 50%;

    z-index: 5;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.sidebar {
    padding: 20px 20px;
    font-family: Helvetica;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 240px;
    display: block;
    z-index: 1;
    color: #fff;
    font-weight: 200;
    background-size: cover !important;
    background-position: center center;
    background-repeat: no-repeat !important;
}

.sidebar {
    background: linear-gradient(to bottom, #1089ff 0%, rgb(16 137 255 / 70%) 100%),
        url("../assets/1280px-Shaqi_jrvej.jpg") !important;
    background-size: cover !important;
}
</style>
<style>
#app {
    /* background: rgba(203, 203, 210, 0.15); */
    position: relative;
    float: right;
    width: calc(100% - 280px);
}
</style>
