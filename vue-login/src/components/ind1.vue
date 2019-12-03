<template>
  <div class="login">
    <div v-if="loggingIn" class="container-loading">
      <img src="/loading.gif" alt="Loading Icon">
    </div>
    
    <form @submit.prevent="loginSubmit">
      
      
      <button type="submit">keywords</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
  .login {
    border: 1px solid black;
    border-radius: 5px;
    padding: 2rem;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    .container-loading {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,.3);
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    form {
      display: flex;
      flex-flow: column;
      *:not(:last-child) {
        margin-bottom: 1rem;
      }
      
      button {
        padding: 1rem;
        background-color: #044881;
        border: 1px solid gray;
        border-radius: 3px;
        cursor: pointer;
        color: white;
        &:hover {
          background-color: lightslategray;
        }
      }
    }
  }
</style>