import {map,filter,find,findLast} from "../services/functions";
const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

function addHello(name){
  return "Hello " + name;
}
function findThree(name){
  return name.length === 3;
}
function findBarney(name){
  return name === "Barney";
}

test("map works to prepend Hello to each name", () => {
  expect(map(names,addHello)).toEqual([
    "Hello Jon",
    "Hello Bob",
    "Hello Ted",
    "Hello Barney",
    "Hello Lilly",
    "Hello Robin",
    "Hello Saul",
    "Hello Axe"
  ]);
});

//filter works to find string with length 3

//find works to find string equal to "Barney"

//findLast works to find the value "Axe"


