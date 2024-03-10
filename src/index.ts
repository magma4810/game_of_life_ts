// Запуск игры
// Создаю и добавляю элемент на страницу
// Создаю на этом элементе игру с помощью `createGameOfLife` с размерами поля x и y
import { createGameOfLife } from "./createGameOfLife";

const game1: Element = document.createElement("div");

document.body.append(game1);
createGameOfLife(game1);
