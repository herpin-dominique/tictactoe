<script>
  import logo from "../assets/images/logo.svg";
  import cross from "../assets/images/icon-x.svg";
  import circle from "../assets/images/Group 4.svg";
  import { currentPage } from "./stores";

  function startSolo() {
    $currentPage = "gameSolo";
  }
  function startDuo() {
    $currentPage = "gameDuo";
  }
</script>

<div class="container">
  <div class="logo-container">
    <img src={logo} alt="logo" />
  </div>
  <div class="content-container">
    <div class="pick-container">
      <h1>PICK PLAYER 1’S MARK</h1>
      <div class="pick-type">
        <div class="img-container">
          <img src={cross} alt="cross" class="cross-image" />
          <img src={circle} alt="circle" class="circle-image" />
        </div>
      </div>
      <h2>REMEMBER: X GOES FIRST</h2>
    </div>
    <button on:click={startSolo}> NEW GAME (VS CPU) </button>
    <button on:click={startDuo}> NEW GAME (VS PLAYER)</button>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");

  .container {
    width: 460px;
    height: 471px;
  }
  .logo-container {
    margin: auto;
    width: 72px;
    height: 32px;
  }
  .pick-container {
    width: 460px;
    height: 205px;
    margin: 40px 0;
    flex-shrink: 0;
    border-radius: 15px;
    background-color: #1f3641;
    box-shadow: 0px -8px 0px 0px #10212a inset;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    color: #a8bfc9;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 20px;
  }
  .pick-type {
    width: 412px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: #1a2a33;
  }
  h2 {
    color: #a8bfc9;
    text-align: center;
    margin-top: 35px;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    opacity: 0.5;
  }
  button {
    width: 460px;
    height: 67px;
    flex-shrink: 0;
    border-radius: 15px;
    background-color: #f2b137;
    box-shadow: 0px -8px 0px 0px #cc8b13 inset;
    color: #1a2a33;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }
  button:last-child {
    background-color: #31c3bd;
    box-shadow: 0px -8px 0px 0px #118c87 inset;
  }
  .img-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cross-image {
    margin: auto;
    width: 32px;
    height: 32px;
  }
  .circle-image {
    margin-right: 5px;
  }
</style>
