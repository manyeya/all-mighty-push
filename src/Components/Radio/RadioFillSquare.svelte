<script>
  import "../tailwind.css";
  import { scale } from "svelte/transition";
  export let value = true;
  export let size = 2;
  export let selectedColor = "#e53935";
  export let unSelectedColor = "#D9DBE9";
  export let disabled = false;
</script>

<div style="width:{size}rem;height:{size}rem; opacity:{disabled ? 0.8 : 1};">
  <div
    class="w-full h-full relative rounded unselected"
    style="--unselected-color:{unSelectedColor}"
    on:click={disabled ? () => (value = true) : () => (value = !value)}
  >
    {#if value == true}
      <div
        in:scale={{ duration: 100 }}
        out:scale={{ duration: 200 }}
        style="--selected-color:{selectedColor}"
        class="relative flex-1 flex items-center justify-center h-full rounded selected"
      >
        {#if disabled == true}
          <div
            in:scale={{ duration: 200 }}
            out:scale={{ duration: 300 }}
            class="bg-gray-50"
            style="width:{size / 2}rem;height:{size / 5}rem;"
          />
        {:else}
          <div
            in:scale={{ duration: 200 }}
            out:scale={{ duration: 300 }}
            class="bg-gray-50 rounded"
            style="width:{size / 2}rem;height:{size / 2}rem;"
          />
        {/if}
      </div>
    {/if}
    <input class="opacity-0 w-0 h-0" type="radio" value="${value}" />
  </div>
</div>
<div />

<style>
  .selected {
    cursor: pointer;
    background-color: var(--selected-color);
  }
  .selected:hover,
  .unselected:hover {
    filter: brightness(0.9) contrast(121%);
  }

  .unselected {
    cursor: pointer;
    background-color: var(--unselected-color);
  }
</style>
