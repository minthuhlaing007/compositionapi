<template>
  <div class="spinner"></div>
</template>

<script>
export default {

}
</script>

<style>
.spinner{
  width: 20px;
  height: 20px;
  margin: 50px auto;
  border: 3px dashed transparent;
  border-top-color: purple;
  border-radius: 50%;
  animation: spin 1s infinite;
}
@keyframes spin {
  to{
    transform: rotate(360deg);
  }
}
</style>