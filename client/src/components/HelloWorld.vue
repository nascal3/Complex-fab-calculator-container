<template>
  <section>
    <div class="title">
      Fib Calculator V2
    </div>
    <div class="content-area">
      <form @submit.prevent="insertIndex">
        <span>Enter your index:</span>
        <label>
          <input type="text" v-model="indexNumber">
        </label>
        <button type="submit">Submit</button>
      </form>

      <div class="seen">
        <div class="seen-title">Indices I have seen:</div>
        <template v-if="seenIndexes.length">
          <span
            class="seen-indices"
            v-for="(number, i) in seenIndexes"
            :key="i"
          >{{number.number}}</span>
        </template>
      </div>

      <div class="values">
        <div class="values-title">Calculated Values:</div>
        <div
          class="values-calculated"
          v-for="(value, i) in values"
          :key="i"
        >
          For index {{i}} | calculated {{value}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data: () => ({
    indexNumber: '0'
  }),
  computed: {
    ...mapGetters({
      values: 'values',
      seenIndexes: 'seenIndexes'
    })
  },
  methods: {
    ...mapActions({
      fetchIndexes: 'fetchIndexes',
      fetchValues: 'fetchValues',
      submitIndex: 'submitIndex'
    }),
    getInitValues () {
      this.fetchValues()
      this.fetchIndexes()
    },
    async insertIndex () {
      const payload = { index: this.indexNumber }
      await this.submitIndex(payload)
      this.indexNumber = ''
    }
  },
  created () {
    this.getInitValues()
  }
}
</script>

<style scoped lang="scss">
 .title {
   width: 100%;
   color: white;
   font-size: 24px;
   font-weight: 500;
   background-color: orangered;
   padding: 10px 0 10px 0;
   text-align: center;
 }

 .content-area {
   padding-top: 25px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   form {
     span:first-child {
       margin-right: 10px;
       font-weight: 600;
     }
     button {
       margin-left: 10px;
     }
   }

   .seen {
     margin-top: 20px;

     &-title {
       font-weight: 600;
       font-size: 16px;
       padding-bottom: 10px;
     }

     &-indices {
       font-style: italic;
     }
     &-indices:before {
       content: ', ';
     }
   }

   .values {
     margin-top: 20px;

     &-title {
       font-weight: 600;
       font-size: 16px;
       padding-bottom: 10px;
     }

     &-calculated {
       font-style: italic;
     }
   }
 }
</style>
