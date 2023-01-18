import create from './create'
import version from './version'

const commands: Record<string, commanderType> = {
	create,
	version
}

export default commands
