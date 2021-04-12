<template>
  <div class="Recommandation">
    <div class="featured">
      <div class="featured-vertical">
        <div class="featured-horizontal">
          <div class="featured-content">
            <div class="checkbox">
                <h3>Renseignez vos genres favoris</h3>
                <div class=genres>
                  <div class="genre" v-for="item in genres" :key="item.genre">
                    <input type="checkbox" v-bind:id="item.genre" v-bind:value="item.genre" v-model="selected">
                    <label v-bind:for="item.genre" >{{item.genre}}</label>
                  </div>
                </div>

                <span>selected : {{selected}} </span>

                

            </div>
            <div class="checkbox">
                <h1>Recommandation</h1>
                <input type="checkbox" id="todo" name="todo" value="todo">
                <label for="todo" data-content="Get out of bed">Romantique</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommandation",
  data: function () {
    return {
      genres: [
      { genre: 'Hentai'},
      { genre: 'Shounen'},
      { genre: 'Romantique' },
      { genre: 'Drama'},
      { genre: 'Jojo'},
      { genre: 'Nono'},
      { genre: 'Momo'},
      { genre: 'Hamham'},
      { genre: 'la street'},
      ],
      selected:[]
    };
  },

  methods: {},
};
</script>

<style scoped>
.genres{
  display:flex;
  flex-wrap: wrap;
  
}

.genre{
  margin-right: 20px;
}

.featured {
  height: calc(100vh);
  background-size: cover;
  background-position: center;
  background-image: url(https://images3.alphacoders.com/144/thumb-1920-144565.jpg);
}

.featured-vertical {
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
}

.featured-horizontal {
  width: inherit;
  height: inherit;
  /*background: linear-gradient(to right, #111 10%, transparent 70%);*/
}

.btn {
  background: none;
  border: none;
  color: rgb(131, 131, 131);
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 50%;
  transform: translate(-50%);
}

.form {
  padding-top: 100px;
}

.checkbox {
  padding-top: 100px;
  width: 25%;
  margin: auto;
  color: white;
}

.checkbox h3{
  //float: left;
  //font-size: 40px;
  border-bottom: 6px solid #D42525;
  margin-bottom: 50px;
  padding: 13px 0px;
}

</style>
