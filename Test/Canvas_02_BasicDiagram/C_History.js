/**
 * this function is history function include pop operation and redo operation;
*/
function history() {
    // initial history instance, Actually here is a singleton function just dont know how to fulfill yet.
    let operation_ = [];
    let recordStep_ = 50;

};

/**
 * Push to history what did for operation
 * @param {Array} OperatedElement - operated elements
 * @param {String} act - type of operation
 * @param {Array} recordInfo - move : elements:[{x:x,y:y}...] | remove : null | linkTo : null
 * @ return
 */

history.prototype.record = function () {
    if (index == recordStep_) {
        index--;
        historyStack.shift();
    }
    // if operation_ full shift first one;
    historyStack[++index] = Save_();
}


history.redo = function () {
    Load_(historyStack[index]);

}

function transition(operateElement, status, action) {
    // HISTORY of move, size adjustment.
    //TODO : this will be a instance, once element doEvent, generate this.
    // this will store in history as a list
    //Once undo, index will call this.redo 
    // action store move/remove/linkTo..
}

var getProperties = {
    do: function (source){
         var input = source;
        let _name = '_' + input.constructor.name;
        if (this[_name]) {
            return this[_name](input);
        } else {
            throw ('history - getProperties - NoProperty info collector: ' + _name);
        }

    },
    _eBattery: function (s) {
        return ({
            'id': s.id,
            'x': s.x,
            'y': s.y,
            'width': s.width,
            'height': s.height,
            'text': s.Text
        });
    },
    _eNode: function (input) {
        return this._eLinkBundle(input);
    },
    _eLinkBundle: function (input) {
        var linksInLinksBundle ={type :'eLinkBundle', from :[],to };
        input.
    },
    _eLink: function (s) {
        return ({
            'fromElement': s.from.parentElement.id,
            'fromNode': s.from.parentNode.type,
            'toElement': s.to.parentElement.id,
            'toNode': s.to.parentNode.type
        });
    }
}

var setProperties = {
    do : function (input,type=null){

    },
    _eBattery :function (input){

    },
    _eLink : function(input){

    },
    _eLinkBundle : function(input){

    },
    _eNode: function(input){

    }

    
}
