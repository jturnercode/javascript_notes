<script>
    let name;
    let beltColour;
    let age;
    let skills = [];

    const handleSubmit = () => {
        console.log(name, beltColour, age, skills);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name} />
    <input type="number" placeholder="age" bind:value={age} />
    <label>Skills:</label>
    <input type="checkbox" bind:group={skills} value="fighting" />fighting<br />
    <input type="checkbox" bind:group={skills} value="sneaking" />fighting<br />
    <input type="checkbox" bind:group={skills} value="running" />fighting<br />
    <label>Belt colour:</label>
    <select bind:value={beltColour}>
        <option value="black">black</option>
        <option value="orange">orange</option>
        <option value="brown">brown</option>
        <option value="white">white</option>
    </select>
    <button>Add Person</button>
</form>
