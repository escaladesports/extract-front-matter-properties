export default function findProperty(obj, prop, options, res = []){
	for(let i in obj){
		if(typeof obj[i] === 'object'){
			if(options.deep){
				findProperty(obj[i], prop, options, res)
			}
		}
		else if(i === prop){
			res.push(obj[i])
		}
	}
	return res
}