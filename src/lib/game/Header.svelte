<script lang="ts">
  import logo from "$assets/images/logo.svg";
  import iconRestart from "$assets/images/icon-restart.svg";

  /** data renseigner par le composant parent */
  export let turnText: string;
  export let restart: () => void;
</script>

<div>
  <img height="32px" src={logo} alt="logo" class="logo" />
  <span>{turnText}</span>
  <button on:click={restart}>
    <img src={iconRestart} alt="icon-restart" />
  </button>
</div>

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 420px;

    & span {
      width: 140px;
      height: 52px;
      border-radius: 10px;
      background: var(--Semi-Dark-Navy, #1f3641);
      box-shadow: 0px -4px 0px 0px #10212a inset;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a8bfc9;
    }
    & button {
      justify-self: end; /* Aligner le bouton "Restart" à droite */
      border: none;
      background: none;
      height: 52px;
      width: 52px;
    }
  }
</style>
