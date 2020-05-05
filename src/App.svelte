<script>
  const planets = ["Earth", "Moon", "Mars"];
  let greetee = planets[0];
</script>

<main
  class="flex flex-col items-center justify-center min-h-screen p-8 space-y-6 bg-gray-900">
  <h1
    class="text-6xl font-hairline leading-none tracking-tight text-center text-pink-500 uppercase">
    Hello {greetee}!
  </h1>
  <div class="flex space-x-2">
    {#each planets as planet}
      <button
        class="btn"
        on:click={() => {
          greetee = planet;
        }}>
        {planet}
      </button>
    {/each}
  </div>
</main>

<style>
  .btn {
    @apply font-semibold py-2 px-4 rounded-md text-blue-500 border border-current;
  }

  .btn:hover,
  .btn:focus {
    @apply text-blue-200;
  }
</style>
