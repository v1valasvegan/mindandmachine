import router from '../router';

<template>
  <form v-if="!this.error" class="form" @submit.prevent="handleSubmit">
    <input type="text" v-model="text" />
    <button class="button" type="submit">Submit</button>
  </form>
  <div class="error" v-else>
    <h2 class="error-message">The truth is out there</h2>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return { text: '', error: false };
    },
  methods: {
    handleSubmit() {
      if (this.text === 'test') {
        this.$router.push('main');
        return;
      }
      this.error = true;
      }
    }
  
}
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    height: 200px;
    margin: auto;
    border: solid 1px limegreen;
    border-radius: 10px;
    }

    .button {
      align-self: center;
      padding: 10px 25px;
      border-radius: 5px;
      font-size: inherit;
      cursor: pointer;
      }

      input {
        min-height: 30px;
        margin-left: 20px;
        margin-right: 20px;
        border: 1px solid lime;
        border-radius: 5px;
        font-size: inherit;
      }

      .error {
        display: flex;
        width: 100%;
        background-image: url('https://image.freepik.com/free-vector/aliens-pattern-background_1224-169.jpg');
        }

      .error-message {
        margin: auto;
      }
</style>