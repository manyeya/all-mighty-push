<script>
  import "../tailwind.css";
  import { scale } from "svelte/transition";
</script>

<div
  style="width:{$$props.size}rem;height:{$$props.size}rem; opacity:{$$props.disabled
    ? 0.8
    : 1};"
>
  <div
    class="w-full h-full relative rounded-full unselected"
    style="--unselected-color:{$$props.unSelectedColor}"
    on:click={$$props.disabled
      ? () => ($$props.value = true)
      : () => ($$props.value = !$$props.value)}
  >
    {#if $$props.value == true}
      <div
        in:scale={{ duration: 100 }}
        out:scale={{ duration: 200 }}
        style="--selected-color:{$$props.selectedColor}"
        class="relative flex-1 flex items-center justify-center h-full rounded-full selected"
      >
        {#if $$props.disabled == true}
          <div
            in:scale={{ duration: 200 }}
            out:scale={{ duration: 300 }}
            class="bg-gray-50"
            style="width:{$$props.size / 2}rem;height:{$$props.size / 5}rem;"
          />
        {:else}
          <div
            in:scale={{ duration: 200 }}
            out:scale={{ duration: 300 }}
            class="bg-gray-50 rounded-full"
            style="width:{$$props.size / 2}rem;height:{$$props.size / 2}rem;"
          />
        {/if}
      </div>
    {/if}
    <input class="opacity-0 w-0 h-0" type="radio" value="${$$props.value}" />
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
