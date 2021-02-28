<template>
    <div class="home">
        <div class="featured">
            <div class="featured-vertical">
                <div class="featured-horizontal">
                    <div class="featured-content">
                        <div class="featured-content-title">
                            Kimestsu no Yaiba
                        </div>
                        <span class="featured-content-synopsis">
                                Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.
                        </span>
                    </div>
                </div>
            </div>
        </div>
  </div>    
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style scoped>

 .featured {
  height: calc(70vh);
  background-size: cover;
  background-position: center;
  background-image: url(https://pbs.twimg.com/media/EVP0f8iUwAIjf4w?format=jpg&name=4096x4096);
}

.featured-content {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3vw;
  max-width: 40vw;
}


.featured-vertical {
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
}

.featured-horizontal {
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
}

.featured-content-title {
  
  font-size: 32px;
  color: #ececec;
  font-weight: bold;
  margin-bottom: 12px;
  letter-spacing: 1.2px;
}

.featured-content-synopsis {
  overflow: hidden;
  color: #ececec;
  display: -webkit-box;
  font-size: 16px;
  margin-bottom: 24px;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 767px) {
  .featured {
    height: calc(100vh - 60px);
  }
}
</style>
