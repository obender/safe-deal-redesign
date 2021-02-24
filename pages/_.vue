<template>
  <div class="root">
    <div class="container">
      <div class="container__item">
        <div class="title">
          <img class="logo" src="~/assets/img/logo.svg" alt="" /> <h1>Safe Deal</h1>
        </div>
        <div class="content">
          <div style="font-size: 100px;">404</div>
          This is not the web page you are looking for
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.t {
  border: 1px solid red;
}
.root {
  height: 100vh;
  width: 100vw;
  background-color: #fff;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.container__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
}
.title {
  color: #00aa63;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content{
  color: #666;
  font-size: 30px;
  padding: 20px 30px;
  max-width: 400px;
  text-align: center;
  border-radius: 15px;
}
</style>