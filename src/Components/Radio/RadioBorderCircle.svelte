<script>
  import "../tailwind.css";
  import { scale } from "svelte/transition";
  export let value = true;
  export let size = 2;
  export let color = "#5F2EEA";
  export let disabled = false;
</script>

<div style="width:{size}rem;height:{size}rem; opacity:{disabled ? 0.8 : 1};">
  <div
    class="w-full h-full relative border-8 rounded-full border p-1"
    style="--border-color:{color}"
    on:click={disabled ? () => (value = true) : () => (value = !value)}
  >
    {#if value == true}
      <div
        in:scale={{ duration: 100 }}
        out:scale={{ duration: 200 }}
        style="--selector-color:{color}"
        class="relative flex-1 flex items-center justify-center h-full rounded-full selector"
      />
    {/if}
    <input class="opacity-0 w-0 h-0" type="radio" value="${value}" />
  </div>
</div>
<div />

<style>
  .selector {
    cursor: pointer;
    background-color: var(--border-color);
  }

  .selector:hover,
  .border:hover {
    filter: brightness(0.9) contrast(121%);
  }

  .border {
    cursor: pointer;
    border-color: var(--border-color);
    border-width: 0.3rem;
  }
</style>
