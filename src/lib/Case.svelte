<script lang="ts">
  export let name = "";

  let button: HTMLButtonElement;
  function click() {
    button.innerHTML = `Hello ${name}`;
  }
</script>

<h1>Hello World!</h1>

<button bind:this={button} on:click={click}>Hello</button>
