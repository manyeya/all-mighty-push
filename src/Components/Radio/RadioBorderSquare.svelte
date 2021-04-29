<script lang="ts">
  import "../tailwind.css";
  import { scale } from "svelte/transition";
  import type { BorderProps } from "src/Types/Radio";
  export let style: BorderProps = {
    size: 2,
    color: "#5F2EEA",
    disabled: false,
  };
  export let value:boolean = true;
</script>

<div
  style="width:{style.size}rem;height:{style.size}rem; opacity:{style.disabled
    ? 0.8
    : 1};"
>
  <div
    class="w-full h-full relative border-8 rounded border p-1"
    style="--border-color:{style.color}"
    on:click={style.disabled
      ? () => (value = true)
      : () => (value = !value)}
  >
    {#if value == true}
      <div
        in:scale={{ duration: 100 }}
        out:scale={{ duration: 200 }}
        style="--selector-color:{style.color}"
        class="relative flex-1 flex items-center justify-center h-full rounded selector"
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
