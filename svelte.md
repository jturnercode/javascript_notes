# Svelte Notes

## References
https://svelte.dev/tutorial/basics  

https://fireship.io/snippets/setup-google-maps-with-svelte/  

https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started  

Google Maps Example  
https://fireship.io/snippets/setup-google-maps-with-svelte/  


## Start New Project

Use `npx` and `degit` to clone the git repo sveltejs/template without project history.  
"svelte-app" is the name of folder where all files will be downloaded.

    npx degit sveltejs/template appfolder-name

### Install Dependancies

`cd` into appfolder-name and run `npm install` to install the dependancies.  
If you are using yarn, use `yarn` instead of yarn.

    cd appfolder-name
    npm install

### Run Node Development Server

Once the build completes run `npm run dev` or `yarn dev`.

    npm run dev

This command will setup a development server on localhost port 5000 (http://localhost:5000)

To stop the server hold `ctrl+C` in terminal.

## Project Folder Structure

### package.json

File contains the dependencies and scripts (build & dev) required for the project.

### rollup.config.js

This the script that is run when you run `yarn dev` or `yarn build`.

### package-lock.json

This is result of running build and ensures consistent dependancies.

### node_modules folder

Folder where all the dependancies are installed. Genereated when you run the `yarn` or `npm install` command.

### public folder

Contains static assests when you want to go live. Contains:

1. global.css - styles that are applied to the entire application.
2. index.html - the only html file that will be in your for single page application. typically you do not add any code in this file. This file will be served up.
3. favicon.png - just an image.

### src folder

The folder where most of work is done within a svelte app.
The main.js file imports the root component App.svelte and invokes it as a function with the target as the document.body.

In short the App component is rendered inside the body element.

### .svelte files

A .svelte file is a custom file format that uses HTML-like syntax to describe a portion of the UI.
Each .svelte file consists of three types of top-level language blocks

- script - is where the logic and functionality of your app can be maintained (javascript of your UI)
- markup - is the HTML of UI
- style - css for markup section.

Browser does not understand what a .svelte file is.
Rollup with the svelte plugin is needed to parse the file and build a file that the browser understands.

## Components

A .svelte file represents a component.  
A svelte app can contain one or more components.  
_More info to come on components_

## Keys

**Markup + Script**  
Working with .svelte files is wiring up logic to the markup. That is connecting data present in the script section tothe HTNL present in the markup section. (Declarative programming approach)

## Binding Text

Key concept in svelte is the binding of text from script section to the markup section. The `{}` within the markup accepts any valid javascript.

See example code in App.svelte file:

    <script>
        const name = 'Batman'
    </script>

    <main>
        <!-- within curly braces any javascript is valid, even expressions -->
        <h1>Hello {name}</h1>
        <h2>age {2 + 22}</h2>
    </main>

App.svelte is intialized in main.js where is transposed to files needed for the browser.

## Binding HTML

To add/bind HTML elements dynamically to your app use the `@html` prefix. This should be used with caution if using third party data/api as your site may be vunerable to data being sent.

    <script>
        const email = '<a>capecrusader@gmail.com</a>'
    </script>

    <main>
        <!-- Use @html to bind html -->
        <div>{@html email}</div>
    </main>

## Binding Attributes

Adding attributes to HTML tags. This may be useful if you want to dynamically label or modify elements.

    <script>
        const headingid = 'heading'
        const disabled = true
    </script>

    <main>
        <!-- Binding element attributes -->
        <h2 id={headingid}>Element with id={headingid}</h2>

        <!-- shorthand vs disabled={disabled} -->
        <button {disabled}>Bind</button>
    </main>

## Binding Class Attributes

See examples on different ways to assign/bind class attributes to elements.  
Below examples use classes to bind styles to elements.

    <script>
        const status = "success";
        const isPromoted = true;
        const promoted = true;
    </script>

    <main>

        <!-- class attributes -->
        <h2 class="underline">Underline Class</h2>
        <h2 class={status}>Status Color</h2>

        <!-- Use tenary to determine class -->
        <h2 class={isPromoted ? "promoted" : ""}>Tenary Class</h2>

        <!-- Svelte provides special syntax to toggle classes -->
        <h2 class:promoted={isPromoted}>Svelte Class Attribute assignment</h2>

        <!-- shorthand Svelte class if class name equals attribute name -->
        <h2 class:promoted>Svelte shorthand Class Atribute assignment</h2>
    </main>

    <style>
        .underline {
            text-decoration: underline;
        }

        .danger {
            color: orangered;
        }

        .success {
            color: olivedrab;
        }

        .promoted {
            font-style: italic;
        }

    </style>

## Conditional Rendering

Render HTML elements conditionally. Note the svelte syntax for conditional statemets.

    <script>
        const num = 0

    </script>

    <main>

        <!-- If condition is true the element is rendered
        -->
        {#if num == 0}
            <h2>The number is zero</h2>
        {:else if num < 0}
            <h2>The number is negative</h2>
        {:else if num > 0}
            <h2>The number is positive</h2>
        {:else}
            <h2>The number is not a number</h2>
        {/if}
    </main>

## Iterate over Array & Objects

Example code showing iterating over array and objects  

    <script>
        const names = ["Bruce", "Clark", "Diana"];
        const fullnames = [
            { first: "Bruce", last: "Wayne" },
            { first: "Clark", last: "Kent" },
            { first: "Diana", last: "Prince" },
        ];
    </script>

    <main>
        <!-- svelte iterate over array with for each -->
        <!-- Note that index is optional -->
        <h2>List of Names:</h2>
            {#each names as name, index}
        <h3>{index + 1}: {name}</h3>
            {/each}

        <!-- Iterating over objects -->
        {#each fullnames as name, index}
            <h3>{index + 1}: {name.first} {name.last}</h3>
        {/each}
    </main>




## Keys

For example below the `lodash` module needs to be specified in the package.json file under dependencies. stop server and run `npm install` to update your environment.
      
    "dependencies": {
        "lodash": "^4.17.21"
    }

Below is and example of how keys in svelte keep html h3 elements with input box even after a shuffle.  

    <script>
        import { shuffle } from "lodash";

        // Note names is not a constant so it can be shuffled
        let names = ["Bruce", "Clark", "Diana"];
        // shuffleNames function
        const shuffleNames = () => {
            names = shuffle(names);
        };
    </script>

    <main>
        <!-- Using Keys to track elements -->
        <!-- Keys need to be unique, shown below as (name) -->

        {#each names as name (name)}
            <h3>{name}</h3>
            <input placeholder="Last Name" />
        {/each}

        <div>
            <button on:click={shuffleNames}>Shuffle!</button>
        </div>
    </main>


## Event Handling

