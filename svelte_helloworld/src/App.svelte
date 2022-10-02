<script>
  const name = "Batman";
  const email = "<a>capecrusader@gmail.com</a>";
  const headingid = "heading";
  const disabled = true;
  const status = "success";
  const isPromoted = true;
  const promoted = true;

  const num = 0;

  const fullnames = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Diana", last: "Prince" },
  ];

  // Keys
  import { shuffle } from "lodash";
  // Note names is not a constant so it can be shuffled
  let names = ["Bruce", "Clark", "Diana"];
  const shuffleNames = () => {
    names = shuffle(names);
  };

  // event Handling
  let count = 0;
  function handleClick() {
    count += 1;
  }

  import Modal from "./Modal.svelte";
</script>

<Modal />

<main>
  <!-- within curly braces any javascript is valid, even expressions -->
  <h1>Hello {name}</h1>
  <h2>age {2 + 22}</h2>

  <!-- Use @html to bind html -->
  <div>{@html email}</div>

  <!-- Binding element attributes -->
  <h2 id={headingid}>Element with id={headingid}</h2>

  <!-- shorthand vs disabled={disabled} -->
  <button {disabled}>Bind</button>

  <!-- class attributes -->
  <h2 class="underline">Underline Class</h2>
  <h2 class={status}>Status Color</h2>

  <!-- Use tenary to determine class -->
  <h2 class={isPromoted ? "promoted" : ""}>Tenary Class</h2>

  <!-- Svelte provides special syntax to toggle classes -->
  <h2 class:promoted={isPromoted}>Svelte Class Attribute assignment</h2>

  <!-- shorthand Svelte class if class name equals attribute name -->
  <h2 class:promoted>Svelte shorthand Class Atribute assignment</h2>

  <!-- If condition is true the element is rendered
 -->
  {#if num == 0}
    <h2>The number is zero</h2>
  {:else if num < 0}
    <h2>The number is negative</h2>
  {:else if num > 0}
    <h2>The number is positive</h2>
  {:else}
    <h2>The number is not a number</h2>
  {/if}

  <!-- svelte iterate over array with for each -->
  <!-- Note that index is optional -->
  <h2>List of Names:</h2>
  {#each names as name, index}
    <h3>{index + 1}: {name}</h3>
  {/each}

  <!-- Iterating over objects -->
  {#each fullnames as name, index}
    <h3>{index + 1}: {name.first} {name.last}</h3>
  {/each}

  <!-- Using Keys to track elements -->
  <!-- Keys need to be unique, shown below as (name) -->
  {#each names as name (name)}
    <h3>{name}</h3>
    <input placeholder="Last Name" />
  {/each}
  <div>
    <button on:click={shuffleNames}>Shuffle!</button>
  </div>

  <!-- Event Handling -->
  <button on:click={() => (count += 1)}>Count: {count}</button>
  <button on:click={handleClick}>Count: {count}</button>
</main>

<style>
  .underline {
    text-decoration: underline;
  }

  .danger {
    color: orangered;
  }

  .success {
    color: olivedrab;
  }

  .promoted {
    font-style: italic;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
