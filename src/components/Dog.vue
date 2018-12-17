<template>
  <v-card color="grey lighten-2">
    <v-img :src="dog.img" height="170px"> </v-img>
    <v-card-title>
      <div>
        <h3>{{dog.name}}</h3>
        <h3>{{dog.breed}}</h3>
      </div>
    </v-card-title>
    <v-btn @click="$emit('addToFavorites', dog)">Add to Favorites</v-btn>
  </v-card>
</template>
<script>
export default {
  props: {
	    dog: {
	      type: Object
	    }
	  }
}
</script>
