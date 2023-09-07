<script lang="ts">
  import cross from "$assets/images/icon-x.svg";
  import circle from "$assets/images/icon-o.svg";

  import Header from "./game/Header.svelte";

  export let mode = "solo";

  let buttons = new Array(9).fill(null);
  let result = null as string | null;
  let turn = "X";
  let playerXScore = 0; // Score du joueur X
  let playerOScore = 0; // Score de l'ordinateur O
  let playerDScore = 0;
  let turnText = "X's turn";

  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  function setValue(i: number) {
    if (!buttons[i] && !result) {
      buttons[i] = turn;
      buttons = [...buttons];
      turn = turn === "X" ? "O" : "X";
      updateTurnText();
      checkWinner();
      if (!buttons.includes(null)) {
        result = "Match Draw";
        playerDScore++;
      }
    }
  }
  function checkWinner() {
    for (let i = 0; i < winCombinations.length; i++) {
      if (buttons[winCombinations[i][0]] !== null) {
        if (
          buttons[winCombinations[i][0]] === buttons[winCombinations[i][1]] &&
          buttons[winCombinations[i][1]] === buttons[winCombinations[i][2]]
        ) {
          result = "Winner " + buttons[winCombinations[i][0]];
          if (buttons[winCombinations[i][0]] === "X") {
            playerXScore++; // Incrémenter le score du joueur X
          } else {
            playerOScore++; // Incrémenter le score de l'ordinateur O
          }

          break;
        }
      }
    }
  }

  function restart() {
    buttons = new Array(9).fill(null);
    result = null;
    turn = "X";
  }
  function updateTurnText() {
    if (turn === "X") {
      turnText = "X  TURN";
    } else {
      turnText = "O TURN";
    }
  }
</script>

<Header {turnText} {restart} />

<img src="" alt="" />
<p>mode: {mode}</p>
{#if !result}
  <div class="tictac">
    {#each buttons as button, i (i)}
      <button
        on:click={() => {
          setValue(i);
        }}
      >
        {#if button === "X"}
          <img src={cross} alt="cross" />
        {:else if button === "O"}
          <img src={circle} alt="circle" />
        {/if}
      </button>
    {/each}
  </div>
{:else}
  <div>
    {result}
    <button on:click={restart}> Restart </button>
  </div>
{/if}

<div class="rectangles">
  <div class="rectangle">
    <div class="player-info">
      <span class="player-text">X (YOU)</span>
      <div class="score">{playerXScore}</div>
    </div>
  </div>

  <div class="rectangle">
    <div class="player-info">
      <span class="player-text">TIES</span>
      <div class="score">{playerDScore}</div>
    </div>
  </div>
  <div class="rectangle">
    <div class="player-info">
      <span class="player-text">O (CPU)</span>
      <div class="score">{playerOScore}</div>
    </div>
  </div>
</div>

<style>
  .tictac {
    width: 420px; /* Largeur pour accueillir trois boutons de 140px chacun */
    display: grid;
    grid-template-columns: repeat(
      3,
      140px
    ); /* Trois colonnes de 140px chacune */
    gap: 10px; /* Espace entre les boutons */
    justify-content: center; /* Centrer la grille horizontalement */
    align-content: center; /* Centrer la grille verticalement */
  }

  .tictac button {
    width: 140px;
    height: 140px;
    flex-shrink: 0;
    border-radius: 15px;
    background: var(--Semi-Dark-Navy, #1f3641);
    box-shadow: 0px -8px 0px 0px #10212a inset;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* Styles pour les rectangles */
  .rectangles {
    display: flex;
    justify-content: space-between; /* Les rectangles sont espacés uniformément */
    margin-top: 20px; /* Espace entre les boutons et les rectangles */
  }

  .rectangle {
    width: 140px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 15px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Styles individuels pour chaque rectangle */
  .rectangle:nth-child(1) {
    background-color: #31c3bd;
    margin-left: -10px;
  }

  .rectangle:nth-child(2) {
    background-color: #a8bfc9;
  }

  .rectangle:nth-child(3) {
    background-color: #f2b137;
    margin-right: -10px;
  }
  span {
    font-weight: 500;
  }
  .score {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }
</style>
