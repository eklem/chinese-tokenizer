const tokenizer = require('./index')('./cedict.txt', 'simplified')
var textString = '起火森林位于葡萄牙中部大佩德罗冈市火灾发生在当地时间日时左右火势迅速向四周蔓延酿成重大火灾夜之间在全国范围内发生了大约起森林大火据葡萄牙新闻报报道火灾已蔓延至莱里亚大区的多个城镇围绕火源四个方向的火势均未得到控制其中有两面的火情十分严峻伤亡人数很可能继续增加'
var textStringWithSpaces = ''
var space = ' '

textArray = tokenizer.tokenize(textString)

for (let item of textArray) {
    var x = item.simplified
    //console.log(x)
    textStringWithSpaces = textStringWithSpaces.concat(x)
    textStringWithSpaces = textStringWithSpaces.concat(space)
}

console.log(textStringWithSpaces)
