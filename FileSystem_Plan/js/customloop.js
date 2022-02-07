function each(ARRAY, STOP, STEP) {
  function newLoop(FUNC) {
    var condition = false;
    try {
      for (var i = 0; i < ARRAY.length; i++) {
        var proto = {
          i       : i,
          value   : ARRAY[i],
          next    : ARRAY[i + 1] || null,
          prev    : ARRAY[i - 1] || null,
          up      : function(n) { return ARRAY[i + n] || null },
          down    : function(n) { return ARRAY[i - n] || null }
        }
        var _self_ = Object.assign(proto, ARRAY[i])
        var _i_ = i
        condition = FUNC(_self_, _i_)
        if (condition) {
          break
        }
      }
    }
    catch(e) {
      var parentFunction
      var re = /(\w+)@|at (\w+) \(/g
          var aRegexResult = re.exec(e.stack)
          parentFunction = aRegexResult[1] || aRegexResult[2]
      console.error('Each() loop within function "' + parentFunction + '"' + ' failed! ===> ' + e)
    }
  }
  return {
    dothis: newLoop
  }
}

function range(ARRAY, STOP, STEP) {
  function newRange(FUNC) {
    try {
      ARRAY = parseInt(ARRAY)
      var start = 0
      var stop = ARRAY
      var step = 1

      if (typeof STOP !== 'undefined') {
        start = ARRAY
        stop = parseInt(STOP)
      }

      if (typeof STEP !== 'undefined') {
        step = parseInt(STEP)
      }

      for (var i = start; (i < stop && step > -1) || (i > stop && step < 0); i += step) {
        var _self_ = i
        FUNC(_self_)
      }
    }
    catch(e) {
      var parentFunction
      var re = /(\w+)@|at (\w+) \(/g
      var aRegexResult = re.exec(e.stack)
      parentFunction = aRegexResult[1] || aRegexResult[2]
      console.error('Each() loop within function "' + parentFunction + '"' + ' failed! ===> ' + e)
    }
  }
  return {
    dothis: newRange
  }
}
