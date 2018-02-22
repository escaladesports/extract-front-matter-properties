import sync from './sync'
import async from './async'

module.exports = (path, key, options) => {
	options = {
		deep: true,
		sync: false,
		unique: true,
		...options
	}

	if(!options.sync){
		return async(path, key, options)
	}
	else{
		return sync(path, key, options)
	}
}