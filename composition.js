const prepare = () => {
    return {
        prepare: () => console.log(`preparing....`)
    }
}

const bake = () => {
    return {
        bake: () => console.log(`baking....`)
    }
}

const toss = () => {
    return {
        toss: () => console.log(`tossing....`)
    }
}

const ready = () => {
    return {
        ready: () => console.log(`ready!`),
    }
}

const stuff = () => {
    return {
        stuff: () => console.log(`stuffing the crew...`)
    }
}

const butter = () => {
    return {
        butter: () => console.log(`buttering the crust...`)
    }
}

const createPizza = (size, crust, sauce) => {
    const pizza = {
        size: size,
        crust: crust,
        sauce: sauce,
        toppings: []
    }

    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}

const createSalad = (size, dressing) => {
    return {
        size: size,
        dressing: dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
}

// Compare to ES6 Class syntax with extends and super()
const createStuffedButteredCrustPizza = (pizza) => {
    return {
        ...pizza,
        ...stuff(),
        ...butter()
    }
}

const anotherPizza = createPizza("medium", "thin", "original");
const somebodysPizza = createStuffedButteredCrustPizza(anotherPizza);
// OR
const davesPizza =
    createStuffedButteredCrustPizza(createPizza("medium", "thin", "original"));

const davesSalad = createSalad("side", "ranch");

davesPizza.bake();

// console.log(davesPizza.bake().reverse()); //chaining
davesPizza.stuff();
davesSalad.prepare();
console.log(davesPizza);
console.log(davesSalad);

// what about toppins ? 
// const addTopping = (pizza,topping) => {
//     pizza.toppings.push(topping);
//     return pizza
// }

// const jimPizza = createPizza("meduim","thin","original")
// console.log(jimPizza)
// console.log(addTopping(jimPizza,"peperoni"))
// console.log(jimPizza)

// we need to clone the pizza object to avoid mutatuin

const shallowPizzaClone = (fn) => {
    return (obj,array) => {
        const newObj = {...obj} ;
        return fn(newObj,array)
    }
}

let addTopping = (pizza,toppings) => {
    pizza.toppings = [...pizza.toppings , ...toppings] ;
    return pizza
}

// decorate the addTopping function with shalowPizzaClone
addTopping = shallowPizzaClone(addTopping) ;


const jimPizza = createPizza("meduim","thin","original")
console.log(jimPizza)
console.log(addTopping(jimPizza,["peproni","dhdhd"]))
console.log(jimPizza)


