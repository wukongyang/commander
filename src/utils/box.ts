const Box = require("cli-box");
function createBox(anser: createActionType) {
  return new Box({
    w: 50,
    h: 10,
    stringify: false,
    marks: {
      nw: '╭',
      n: '─',
      ne: '╮',
      e: '│',
      se: '╯',
      s: '─',
      sw: '╰',
      w: '│'
    },
    hAlign: 'center',
    vAlign: "center"
  }, `
    Create Project Success!😁
    cd ${anser.projectName}
   
   `
  );
}


export default createBox