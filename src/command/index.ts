import create from "./create"
import version from "./version"


let commands:Record<string,commanderType>={
  create,
  version
}

export default commands