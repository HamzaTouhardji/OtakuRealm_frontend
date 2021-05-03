<template>
<!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="container-item">
          <div class="about">
            <h6>About</h6>
            <p class="text-justify">otakurealm.mooo.com <i>DEVELOPPED BY STUDENTS FOR A SCHOOL PROJECT </i> is a web application, offering personalized anime recommendations for users </p>
          </div>

          <div class="categorie">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://cazabetremy.fr/wiki/doku.php?id=projet:sujets">LifProjet</a></li>
              <li><a href="https://myanimelist.net/">MyAnimeList</a></li>
              <li><a href="#">PHP</a></li>
            </ul>
          </div>

          <div class="links">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="container-item">
          <div class="copyright">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by OtakuRealm.</p>
          </div>

          
        </div>
      </div>
</footer>
    
</template>

<script>
export default {
  name: "Footer",
  methods: {},
};
</script>

<style scoped>

.copyright{
    margin-top: 20px;
    margin-left: 3%;
}
.container-item{
    display:flex;
    justify-content: space-between;
}
.about, .categorie, .links{
    width: 30%;
    margin-left: auto;
    
}

a{
    text-decoration: none;
}
.site-footer
{
  background-color: #111;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}


</style>
