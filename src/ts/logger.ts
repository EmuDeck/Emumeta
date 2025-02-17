export const log = (name: string) => {
	return console.info.bind(
			window.console,
			`%c MetaDeck %c ${name} %c`,
			'background: #16a085; color: black;',
			'background: #1abc9c; color: black;',
			'background: transparent;',
	);
};

export const debug = (name: string) => {
	return console.debug.bind(window.console,
			`%c MetaDeck %c ${name} %c`,
			'background: #16a085; color: black;',
			'background: #1abc9c; color: black;',
			'color: blue;'
	);
}

export const error = (name: string) => {
	return console.error.bind(window.console,
			`%c MetaDeck %c ${name} %c`,
			'background: #16a085; color: black;',
			'background: #FF0000;',
			'background: transparent;'
	);
};

export const warn = (name: string) => {
	return console.warn.bind(window.console,
               `%c MetaDeck %c ${name} %c`,
               'background: #16a085; color: black;',
               'background: #c4a000;',
               'background: transparent;'
	);
}

class Logger
{
	get log(): (...args: any[]) => void
	{
		return this._log;
	}
	get debug(): (...args: any[]) => void
	{
		return this._debug;
	}
	get error(): (...args: any[]) => void
	{
		return this._error;
	}

	get warn(): (...args: any[]) => void
	{
		return this._warn;
	}

	constructor(private readonly name: string)
	{
		this.name = name;
	}

	private _log = log.bind(this)(this.name).bind(this);

	private _debug = debug.bind(this)(this.name).bind(this);

	private _error = error.bind(this)(this.name).bind(this);

	private _warn = warn.bind(this)(this.name).bind(this);
}

export default Logger;