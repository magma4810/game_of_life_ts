export function gameInit(htmlElement: Element, speedHTML: number) {
    htmlElement.innerHTML = `<button class = "setFirst" style = "float:right">Gosper glider gun</button><br>
  <button class = "setSecond" style = "float:right">Virus</button>
  <button class = "setThird" style = "float:right">Locomotive</button>
  Columns<button class = "minusColumns">-</button>
    <input class = "inputColumns" style = "height:10px; width:15px">  <button class = "plusColumns">+</button><br>
    Rows<button class = "minusRows">-</button>  <input class = "inputRows" style = "height:10px; width:15px">
    <button class = "plusRows">+</button><br>
    Speed<button class = "minusSpeed">-</button><u> 1 step per <u class = "second">${speedHTML / 1000}</u> second </u><button class = "plusSpeed">+</button><br>
    <button class = "start">Start</button>
    <button class = "enterSize">Enter size</button>  <button class="clear">Clear</button><br>
    <div class="field-wrapper"></div>`;
}
