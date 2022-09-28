# Javascript Notes

https://www.youtube.com/watch?v=xUI5Tsl2JpY&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=4

## Functions


### Function declaration

Function declaration is one way to declare function. These functions can be hoisted 
Hoisted in essence means that the function can be called before it is declared. This is not good practice in any programming soe function expressions in next section is preferred over function declarations.  
The function is invoked by calling function with `talk()`

    function talk() {

        console.log('HI!')

    }

    // call function
    talk()

### Function Expression

Function experesion is that second way to write functions. This is preferred over functions declarations. These functions need to be established before they are called (not hoisted).

    const speak = function() {

        console.log('Good Day!')
    };

    // invoke function
    speak()


### Functions with parameters



    const work = function(name, company='ufc') {

        console.log('${name} works for ${company}')
    };
