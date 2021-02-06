<template>
    <nav>
        <div class="menu">
            <ul>
                <li class="menu-ind">
                    <a href="index.html">Accueil</a>
                </li>
                <li class="menu-exp">
                    <a href="#">Animé en vedette</a>
                </li>
                <li class="menu-hobs">
                    <a href="#">Recommendation</a>
                </li>
                <li class="menu-con">
                    <a href="#">Mon profil</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Menu'
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
nav{
    width: 100%;
    background-color:rgb(41, 46, 68);
}

nav ul{
    margin: 0px;
    padding: 0px;
}

nav li{
    list-style-type: none;
    float: left;
}

nav a{
    display: inline-block;
    text-decoration: none;
    padding: 20px 30px;
    color: #FFF;
    text-transform: uppercase;
    font-size: 15px;
}

.menu{
    display: table;
    margin: 0px auto;
}


.menu-ind:hover{
    border-top: 5px solid #FFF;
    background-color: rgba(000, 112, 192, 0.15);
}
.menu-exp:hover{
    border-top: 5px solid #FFF;
    background-color: rgba(000, 112, 192, 0.15);
}

.menu-hobs:hover{
    border-top: 5px solid #FFF;
    background-color: rgba(000, 112, 192, 0.15);
}

.menu-con:hover{
    border-top: 5px solid #FFF;
    background-color: rgba(000, 112, 192, 0.15);
}

nav li:hover a{
    padding: 15px 30px 20px 30px;
}
</style>