/**
 @constructor
 @abstract
 */
function QueueProvider(config) {
    if(config){
        if (this.constructor === QueueProvider) {
            throw new Error("Can't instantiate abstract class!");
          }
        this.validateConfig(config);
        this.init(config);
    }
}

/**
@abstract
*/
QueueProvider.prototype.init = function(config) {
	// each provider implement its own init
   throw new Error("Abstract method!");
};

/**
@abstract
*/
QueueProvider.prototype.open = function(callback) {
	// each provider implement its own open
   throw new Error("Abstract method!");
};

/**
@abstract
*/
QueueProvider.prototype.listen = function(queueKey) {
	// each provider implement its own listen 
	throw new Error("Abstract method!");	
};

/**
 @abstract
 */
QueueProvider.prototype.validateConfig = function(config){
    // each provider implement its own validateConfig
    throw new Error("Abstract method!");
}

module.exports = QueueProvider;
