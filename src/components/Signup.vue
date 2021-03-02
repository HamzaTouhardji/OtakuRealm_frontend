<template>
    <div class="signup-box">
        <h1>Sign-up</h1>
        <div class="text-box">
            <i class="fa fa-user" aria-hidden="true"></i>
            <input type="text" placeholder="Username" name="" value="">
        </div>
        <div class="text-box">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input type="password" placeholder="Password" name="" value="">
        </div>
        <input class="btn" type="button" name="" value="Log-in">
        

    </div>
</template>

<script>
export default {
    name: "Signup"
    
}
</script>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.signup-box{
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:white; 
}

.signup-box h1{

    //float: left;
    font-size: 40px;
    border-bottom: 6px solid #C03A6D;
    margin-bottom: 50px;
    padding: 13px 0px;
}

.text-box{
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 8px 0;
    border-bottom: 1px solid #C03A6D;
}

.text-box i{
    width: 26px;
    float: left;
    text-align: center;
}

.text-box input{
    border: none;
    outline: none;
    background: none;
    color:white;
    font-size: 18px;
    width: 80%;
    float: left;
    margin: 0 10px;
}

.btn{
    width: 100%;
    background: none;
    border: 2px solid #C03A6D;
    color: white;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
    margin: 12px 0;
}




</style>