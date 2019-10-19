/**
 * Save function will return string contain : 
 * {Barttery: [batterys props], link : [links props]}
 */
function Save_() {
    var exportBatteryProps = [];
    var links = [];
    _ResourceManager.elements.forEach(
        i => {
            exportBatteryProps.push(getProperties(i));
        });
    _ResourceManager.link.forEach(j => {
        links.push(getProperties(j));
    });

    var result = {
        'Battery': exportBatteryProps,
        'link': links
    }
    var string = JSON.stringify(result);
    return (string);
}

/**
 * function Load will convert JSON to batteries format. 
 */
function Load_(input) {
    var input = eval('(' + input + ')');
    _ResourceManager = new Layer;

    input.Battery.forEach(i => {
        _ResourceManager.push(new eBattery(i.x, i.y, i.width, i.height, i.text));
    }
    );
    input.link.forEach(
        j => {
            var from = j.fromNode == 'left' ? [..._ResourceManager.elements][j.fromElement].node.left : [..._ResourceManager.elements][j.fromElement].node.right
            var to = j.toNode == 'left' ? [..._ResourceManager.elements][j.toElement].node.left : [..._ResourceManager.elements][j.toElement].node.right
            from.push(to);
        }
    );
    Board = new Canv(d, _ResourceManager);
    Board.redraw();
    // eventListener = new EventHandler(Canvas);
}

// save and load button. import from internet
var inputElement = document.getElementById("files");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
    var selectedFile = document.getElementById("files").files[0];//获取读取的File对象
    console.log(selectedFile);

    var reader = new FileReader();//这里是核心！！！读取操作就是由它完成的。
    reader.readAsText(selectedFile);//读取文件的内容
    reader.onload = function () {
        console.log(this.result);
        Load_(this.result);

    };
}
var button = document.getElementById("export");
button.addEventListener("click", saveHandler, false);
function saveHandler() {
    let content = Save_();
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "_ResourceManager.json");
}