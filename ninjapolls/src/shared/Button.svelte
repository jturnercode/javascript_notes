<script>
    export let type = "primary";
    export let flat = false;
    export let isinverse = false;
</script>

<!-- the type class can be passed when initiated to determine color of button based on css class per 
styles defined below; <Button type='secondary'> for a green button, per above the default will be the 'primary' class unless overwritten -->
<!-- flat is using a conditional expression to determine if flat css class should be applied -->
<!-- Note that if var flat and class flat are the same class:flat={flat} is not needed, note difference with inverse class -->
<!-- with inverse class the isinverse value has to be set if used when componenet is initiated -->
<button class={type} class:flat class:inverse={isinverse}>
    <!-- slot is a way to pass data into component -->
    <!-- instance when Button initiated the text 'Add Poll' which displays on the Button component -->
    <slot />
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }
    .primary {
        background: #d91b42;
        color: white;
    }
    .secondary {
        background: #45c496;
        color: white;
    }
    .flat {
        box-shadow: none;
    }
    /* if we have primary and inverse class */
    .primary.inverse {
        color: #d91b42;
        background: white;
        border: 2px solid #d91b42;
    }
    /* if we have secondary and inverse class */
    .secondary.inverse {
        color: #45c496;
        background: white;
        border: 2px solid #45c496;
    }
</style>
