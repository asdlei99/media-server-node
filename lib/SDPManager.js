const EventEmitter	= require("events").EventEmitter;

/**
 * SDPManager
 */
class SDPManager
{
	/**
	 * @ignore
	 * @hideconstructor
	 * private constructor
	 */
	constructor()
	{
		//SDP O/A state
		this.state = "initial";
		//Create event emitter
		this.emitter = new EventEmitter();
		
		/**
		* The transport is ready
		*
		* @name transport
		* @memberof SDPManager
		* @kind event
		* @argument {Transport} transport An initialized transport
		*/
	}
	
	/**
	 * Get current SDP offer/answer state 
	 * @returns {String} one of "initial","local-offer","remote-offer","stabable".
	 */
	getState()
	{
		return this.state;
	}
	/**
	 * Returns the Transport object created by the SDP O/A
	 * @returns {Transport}
	 */
	getTransport()
	{
		return this.transport;
	}
	/**
	 * Add event listener
	 * @param {String} event	- Event name 
	 * @param {function} listeener	- Event listener
	 * @returns {Transport} 
	 */
	on() 
	{
		//Delegate event listeners to event emitter
		this.emitter.on.apply(this.emitter, arguments);  
		//Return object so it can be chained
		return this;
	}
	
	/**
	 * Add event listener once
	 * @param {String} event	- Event name 
	 * @param {function} listener	- Event listener
	 * @returns {IncomingStream} 
	 */
	once() 
	{
		//Delegate event listeners to event emitter
		this.emitter.once.apply(this.emitter, arguments);
		//Return object so it can be chained
		return this;
	}
	
	/**
	 * Remove event listener
	 * @param {String} event	- Event name 
	 * @param {function} listener	- Event listener
	 * @returns {Transport} 
	 */
	off() 
	{
		//Delegate event listeners to event emitter
		this.emitter.removeListener.apply(this.emitter, arguments);
		//Return object so it can be chained
		return this;
	}

	//OVerriden
	/*
	 * Create local description
	 * @return {String}
	 */
	createLocalDescription(){}
	
	/*
	 * Process remote offer
	 */
	processRemoteDescription(sdp){}
	
}

module.exports = SDPManager;