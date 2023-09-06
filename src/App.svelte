<script lang="ts">
  import Game from "./lib/Game.svelte";
  import Menu from "./lib/Menu.svelte";
  import { currentPage } from "./lib/stores";

  function stop() {
    $currentPage = "menu";
  }
</script>

{#if $currentPage === "menu"}
  <Menu />
{/if}
{#if $currentPage === "gameSolo" || $currentPage === "gameDuo"}
  <Game mode={$currentPage === "gameSolo" ? "solo" : "duo"} />
  <button on:click={stop}> Stop </button>
{/if}

<style>
  :global(body) {
    background-color: #1a2a33;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
