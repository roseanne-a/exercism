/// <reference path="./global.d.ts" />

//import { STATUS_CODES } from "http";

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time > 0) return "Not done, please wait.";
  if (Number(time) === 0) return "Lasagna is done.";
  if (!time) return "You forgot to set the timer.";
}

export function preparationTime(layers, avgPrepTime = 2) {
  return layers.length * avgPrepTime;
}

export function quantities(layers) {
  let noodlesNeeded = 0;
  let sauceNeeded = 0;

  for (let layer of layers) {
    if (layer === "noodles") noodlesNeeded += 50;
    if (layer === "sauce") sauceNeeded += 0.2;
  }

  return { noodles: noodlesNeeded, sauce: sauceNeeded };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  if (Object.keys(recipe).length === 0) return {};
  const newRecipe = {};

  for (let ingredient of Object.keys(recipe)) {
    newRecipe[ingredient] = (recipe[ingredient] / 2) * portions;
  }

  return newRecipe;
}
