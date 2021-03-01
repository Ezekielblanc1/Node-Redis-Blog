const { clearCache } = require("../cache")


module.exports = async (req, res, next) => {
    // wait for route handler to finish running
    await next(); 
    
    clearCache(req.body.owner);
}