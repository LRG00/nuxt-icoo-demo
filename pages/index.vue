<template>
  <section class="container">
    <div>
      <nuxt-link to="about">去到about</nuxt-link>
      <ul>
        <li 
          v-for="(item, index) in list" 
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
      <h1 class="title">
        nuxt-icoo-demo <el-button>eee</el-button>
      </h1>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      list: ['1', '2']
    }
  },
  async asyncData () {
    let {status, data: { list }} = await axios.get('http://localhost:3000/users/bar')
    console.log(list, 'ppp')
    if (status === 200) {
      return {
        list
      }
    }
  }
}
</script>

<style lang='scss'>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
