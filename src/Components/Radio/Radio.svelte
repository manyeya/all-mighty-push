<script lang="ts">
  import type { BorderProps, FillProps } from "../../Types/Radio";

  import BorderCircle from "./RadioBorderCircle.svelte";
  import BorderSquare from "./RadioBorderSquare.svelte";
  import FillCircle from "./RadioFillCircle.svelte";
  import FillSquare from "./RadioFillSquare.svelte";

  const fillProps: FillProps = {
    size: 2,
    selectedColor: "#e53935",
    unSelectedColor: "#D9DBE9",
    disabled: false,
  };

  const borderProps: BorderProps = {
    size: 2,
    color: "#5F2EEA",
    disabled: false,
  };

  const options = {
    "border-circle": BorderCircle,
    "border-square": BorderSquare,
    "fill-circle": FillCircle,
    "fill-square": FillSquare,
  };

  export let atom = "border-circle";
  export let fill = false;
</script>

{#if fill}
  <svelte:component this={options[atom]} {...fillProps} />
{:else}
  <svelte:component this={options[atom]} {...borderProps} />
{/if}
