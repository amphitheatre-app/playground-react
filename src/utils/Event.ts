import { CallbackFunction } from "../types";


class Event {
    private _cache: { [type: string]: CallbackFunction[] } = {};

    // Bind
    on(type: string, callback: CallbackFunction): this {
        let fns = (this._cache[type] = this._cache[type] || []);
        if (fns.indexOf(callback) === -1) {
            fns.push(callback);
        }
        return this;
    }

    // Trigger
    // emit
    trigger(type: string, data?: any): this {
        let fns = this._cache[type];
        if (Array.isArray(fns)) {
            fns.forEach((fn) => {
                fn(data);
            });
        }
        return this;
    }

    // Unbind
    off(type: string, callback?: CallbackFunction): this {
        let fns = this._cache[type];
        if (Array.isArray(fns)) {
            if (callback) {
                let index = fns.indexOf(callback);
                if (index !== -1) {
                    fns.splice(index, 1);
                }
            } else {
                // Clear all callbacks
                fns.length = 0;
            }
        }
        return this;
    }
}
export const event = new Event();
export default Event;