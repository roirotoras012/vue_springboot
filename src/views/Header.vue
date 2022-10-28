<template>
    <header>
        <div class="navbar">
            <div class="navbar-wrapper">
                <div class="navbar-minimize">
                    <button id="minimizeSidebar" class="btn btn-warning btn-fill btn-round btn-icon d-none d-lg-block">
                        <i class="fa fa-ellipsis-v visible-on-sidebar-regular"></i>
                        <i class="fa fa-navicon visible-on-sidebar-mini"></i>
                    </button>
                </div>
                <span class="navbar-brand" href>{{this.currentPage}}</span>
            </div>
            <div class="drop-down-container">
                <ul>
                    <li class="dropdown nav-item">
                        <a href="#" class="dropdown-toggle">
                            <i class="far fa-bell"></i>

                            <i class="fas fa-caret-down"></i>
                        </a>
                        <!-- <ul class="dropdown-menu">
<a class="dropdown-item" href="#">Notification 1</a>
<a class="dropdown-item" href="#">Notification 2</a>
<a class="dropdown-item" href="#">Notification 3</a>
<a class="dropdown-item" href="#">Notification 4</a>
<a class="dropdown-item" href="#">Notification 5</a>
</ul> -->
                    </li>
                    <li class="dropdown nav-item">
                        <a href="#" class="dropdown-toggle">
                            <i class="fas fa-list-ul"></i>
                            <i class="fas fa-caret-down"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Header",
    components: {
       
    },
    props: ['currentPage']
    
    
};
</script>

<style scoped>
    .drop-down-container ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
}
.drop-down-container a.dropdown-toggle {
    display: flex;
    gap: 10px;
    text-decoration: none !important;
}
.dropdown-toggle {
    color: #888;
}

.btn-warning {
    border: 1px solid #1089ff;
    color: #fff;
    background-color: #1089ff;
    cursor: pointer;
}

.btn-round {
    border-radius: 50% !important;
    height: 40px;
    width: 40px;
}

.navbar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}

.navbar-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 25px;
}

.navbar .navbar-brand {
    font-weight: 400;
    margin: 5px 0;
    font-size: 18px;
    color: #888;
    opacity: 0.8;
}

.navbar {
    font-family: helvetica;
    border: 0;
    font-size: 1rem;
    border-radius: 0;
    min-height: 50px;
    padding: 10px 30px;

    background-color: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
<style>
body {
    margin: 0;
    
}

ul {
    list-style-type: none;
}
</style>
