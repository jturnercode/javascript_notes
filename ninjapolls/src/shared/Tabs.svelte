<script>
    // create a custom event to change activeItems status in App.svelte
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    // i think of this as importing items and activeItems from
    //  App.svelte to use below in code
    // I think this is done this way to be able to re-use components without changing root code
    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <!-- set on:click event on li element -->
            <!-- Send item to tabChange() in App.svelte  -->
            <li on:click={() => dispatch("tabChange", item)}>
                <!-- set class to 'active' based on condition -->
                <!-- variable item set in div element -->
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }
    /* active class */
    .active {
        color: red;
        border-bottom: 2px solid red;
        padding-bottom: 8px;
    }
</style>
