<script>
  import { flip } from 'svelte/animate';
  import { cubicOut } from 'svelte/easing';
  import Die from './lib/Die.svelte';
  import roseImage from './assets/rose.png';

  let dice = [];
  let showAnswer = false;
  let layout = 'random';
  let calculatedAnswer = null;

  const GRID_COLS = 7;
  const GRID_ROWS = 2;
  const ANIM_DURATION = 400;

  $: buttonText = (() => {
    if (layout === 'random') {
      return 'Align\nDice';
    } else if (!showAnswer) {
      return 'Show\nAnswer';
    } else {
      return 'Roll\nAgain';
    }
  })();

  function rollDice() {
    dice = [];
    calculatedAnswer = null;
    layout = 'random';
    showAnswer = false;

    let availableCells = [];
    for (let r = 1; r <= GRID_ROWS; r++) {
      for (let c = 1; c <= GRID_COLS; c++) {
        availableCells.push({ col: c, row: r });
      }
    }

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * availableCells.length);
      const cell = availableCells.splice(randomIndex, 1)[0];
      const value = Math.floor(Math.random() * 6) + 1;
      const initialRotation = Math.random() * 90 - 45;

      dice = [...dice, {
        id: i,
        value,
        col: cell.col,
        row: cell.row,
        rotation: initialRotation
      }];
    }
  }

  function calculatePetals(diceArray) {
    let totalPetals = 0;
    for (const die of diceArray) {
      if (die.value === 3) {
        totalPetals += 2;
      } else if (die.value === 5) {
        totalPetals += 4;
      }
    }
    return totalPetals;
  }

  function alignDiceInRow() {
    const targetRow = 1;
    const startCol = 2;

    const sortedDice = [...dice].sort((a, b) => a.col - b.col);

    dice = sortedDice.map((die, index) => {
      return {
        ...die,
        col: startCol + index,
        row: targetRow,
        rotation: 0
      };
    });
    layout = 'row';
  }

  function toggleView() {
    if (layout === 'random') {
      alignDiceInRow();
    } else if (!showAnswer) {
      calculatedAnswer = calculatePetals(dice);
      showAnswer = true;
    } else {
      rollDice();
    }
  }

  rollDice();
</script>

<main>
  <h1>Petals Around the Roses</h1>

  <section class="rules">
    <img src={roseImage} alt="Rose" class="rules-image-absolute" />
    <h2>The Rules</h2>
    <ul>
      <li>Rule 1: The name of the game is "<b>Petals Around the Roses</b>."</li>
      <li>Rule 2: The name <i>is</i> significant.</li>
      <li>Rule 3: The answer is always even (or zero).</li>
    </ul>
  </section>

  <div class="controls">
    <button on:click={toggleView}>
      {buttonText}
    </button>

    <div class="answer">
      There are
      <span class="answer-box">
        {#if showAnswer}
          {calculatedAnswer}
        {:else}
          <!-- Placeholder to maintain box height when empty -->
          &nbsp;
        {/if}
      </span>
      petals around the roses.
    </div>
  </div>

  <section class="dice-area">
    {#each dice as die (die.id)}
      <div
        class="die-wrapper-outer"
        style="grid-column-start: {die.col}; grid-row-start: {die.row};"
        animate:flip={{ duration: ANIM_DURATION, easing: cubicOut }}
      >
        <div
           class="die-wrapper-inner"
           style="transform: rotate({die.rotation}deg);"
        >
           <Die value={die.value} />
        </div>
      </div>
    {/each}
  </section>
</main>

<style>
  /* DEBUG BORDERS - REMOVE LATER */
  /* main { border: 1px solid red; } */
  /* .rules { border: 1px solid blue; } */
  /* .controls { border: 1px solid green; } */
  /* button { border: 1px solid yellow; } */
  /* .answer { border: 1px solid cyan; } */
  /* .answer-box { border: 1px solid magenta; } */
  /* .dice-area { border: 1px solid orange; } */
  /* .die-wrapper-outer { border: 1px dashed lime; } */
  /* .die-wrapper-inner { border: 1px dotted white; } */
  /* END DEBUG BORDERS */

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem 2rem 2rem;
    min-height: 100vh;
    text-align: center;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .rules {
    display: block;
    margin: 1rem auto;
    max-width: 600px;
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 1rem 4.5rem;
    text-align: left;
    color: #333;
    position: relative;
  }

  .rules h2,
  .rules li {
    color: #333;
  }

  .rules h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0.8rem;
  }

  .rules ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .rules li {
    margin-bottom: 0.5rem;
  }

  .rules-image-absolute {
    position: absolute;
    top: 50%;
    right: calc(85%);
    transform: translateY(-50%);
    width: 300px;
    height: auto;
  }

  .dice-area {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 90%;
    max-width: 850px;
    min-width: 540px;
    aspect-ratio: 7 / 2;
    margin: 1rem auto;
    gap: 30px;
    padding: 10px;
  }

  .die-wrapper-outer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .die-wrapper-inner {
    transition: transform 0.4s cubic-bezier(0, 0, 0.58, 1.0);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    min-height: 40px;
  }

  button {
    margin-bottom: 0;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    cursor: pointer;
    width: 110px;
    text-align: center;
    white-space: pre-line;
    line-height: 1.2;
    vertical-align: middle;
  }

  .answer {
    font-size: 2.0rem;
    font-weight: bold;
    line-height: 1.1;
    color: rgba(255, 255, 255, 0.87);
    background-color: transparent;
    padding: 0;
    min-width: 0;
    text-align: left;
  }

  .answer-box {
    display: inline-block;
    min-width: 40px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 0.3rem 0.5rem;
    margin: 0 0.3em;
    text-align: center;
    vertical-align: middle;
    font-variant-numeric: tabular-nums;
    color: rgba(255, 255, 255, 0.87);
  }

  .answer span {
    display: inline-block;
  }
</style>
