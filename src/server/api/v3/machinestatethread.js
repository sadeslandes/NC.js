'use strict';
let StepNC = require('STEPNode');
let ms = {};
onmessage = (f)=>{
  f=f.data;
  if(f.msg==='setMachineState') {
    ms = new StepNC.machineState(f.path, f.sim);
    if (f.hasOwnProperty('tool'))
      ms.LoadMachine(f.tool);
  } else if(f.msg==='getMachine') {
    let out;
    if(!f.hasOwnProperty('args') || Object.keys(f.args).length <0) {
        Promise.resolve(ms[f.fun]()).then((r)=> {
          postMessage({'cb': f.callback, 'val': r});
        });
        return;
    } else {
      if(!f.args.hasOwnProperty('length')){
        f.args.length = Object.keys(f.args).length;
      }
      //Node Native Module calls need to invoke apply with the relevant object.
      //This next line is hairy, but it basically invokes the function our caller wants with the arguments array we have
        Promise.resolve(ms[f.fun].apply(ms,Array.prototype.slice.call(f.args)))
          .then((r)=>{
            postMessage({'cb': f.callback, 'val': r});
          });
    }
  }
};