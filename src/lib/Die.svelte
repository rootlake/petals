<script>
  export let value = 1; // Default to 1

  // Simple dot patterns for 1-6
  // Positions are approximate percentages for centering within the viewbox
  const patterns = {
    1: [{ cx: 50, cy: 50 }],
    2: [{ cx: 25, cy: 25 }, { cx: 75, cy: 75 }],
    3: [{ cx: 25, cy: 25 }, { cx: 50, cy: 50 }, { cx: 75, cy: 75 }],
    4: [{ cx: 25, cy: 25 }, { cx: 75, cy: 25 }, { cx: 25, cy: 75 }, { cx: 75, cy: 75 }],
    5: [{ cx: 25, cy: 25 }, { cx: 75, cy: 25 }, { cx: 50, cy: 50 }, { cx: 25, cy: 75 }, { cx: 75, cy: 75 }],
    6: [{ cx: 25, cy: 25 }, { cx: 75, cy: 25 }, { cx: 25, cy: 50 }, { cx: 75, cy: 50 }, { cx: 25, cy: 75 }, { cx: 75, cy: 75 }],
  };

  $: dots = patterns[value] || [];
</script>

<svg viewBox="0 0 100 100" class="die">
  <rect width="90" height="90" x="5" y="5" rx="10" ry="10" fill="white" stroke="black" stroke-width="2" />
  {#each dots as dot}
    <circle cx="{dot.cx}" cy="{dot.cy}" r="8" fill="black" />
  {/each}
</svg>

<style>
  .die {
    width: 100px; /* Increased size */
    height: 100px; /* Increased size */
    /* Keep display: block or inline-block as needed */
    display: block; /* Use block for better centering in flex/grid cell */
  }
</style> 