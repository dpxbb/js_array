// Homework
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

dog_names.forEach(function findWords(dog_string)
{
    console.log(dog_string)
   
})

// Homework 2
let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

for (let i = 0; i < given_arr.length; i++)
{
    if(i % 2 == 0)
    {
        given_arr.splice(i,1,"even index")
    }
    console.log(given_arr)
}