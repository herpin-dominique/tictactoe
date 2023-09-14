<script lang="ts">
  import Game from "./lib/Game.svelte";
  import Menu from "./lib/Menu.svelte";
  import { currentPage } from "./lib/stores";
  import Case from "$lib/Case.svelte";
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

<Case name={"Toto"} />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

  :global(body) {
    background-color: #1a2a33;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: outfit;
  }
</style>
