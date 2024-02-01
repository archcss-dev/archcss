"use strict";
/**
 * @package  : ArchCSS - Modern CSS framework for responsive and attractive websites and applications.
 * @version  : 2.0.0
 * @author   : @bebagodfried - [archCSS dev.](https://archcss.com/team/@bebagodfried)
 * @license  : MIT license
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * AJAX
 * HttpRequest: Create XMLHttpRequest object
 */
let HttpRequest = () => {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest;
    }
    else {
        try {
            return new ActiveXObject('Microsoft.XMLHTTP');
        }
        catch (e) {
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            }
            catch (XMLHttpRequest_ERR) {
                console.error(XMLHttpRequest_ERR);
                return;
            }
        }
    }
};
/** GLOBALS */
/**
 * get: getter
 * @param key
 * @returns
 */
let get = (key) => {
    switch (key) {
        // DOM Objects
        case 'title':
            return document.title;
        case 'charset':
            return document.characterSet;
        case 'baseURI':
            return document.baseURI;
        case 'links':
            return document.links;
        case 'scripts':
            return document.scripts;
        case 'embeds':
            return document.embeds;
        case 'images':
            return document.images;
        case 'readyState':
            return document.readyState;
        // BOM Objects
        case 'cookies':
            return navigator.cookieEnabled;
        case 'language':
            return navigator.language;
        case 'online':
            return navigator.onLine;
        case 'userAgent':
            return navigator.userAgent;
        // Server & location
        case 'host':
            return location.host;
        case 'hostname':
            return location.hostname;
        case 'href':
            return location.href;
        case 'url':
            return location.href;
        case 'pathname':
            return location.pathname;
        case 'port':
            return location.port;
        case 'protocol':
            return location.protocol;
        case 'search':
            return location.search;
        case 'update':
            return document.lastModified;
        // Return https(SSl) state of current page
        case 'https':
            if (location.protocol = 'https') {
                return true;
            }
            else {
                return false;
            }
        // Owner
        case 'author-org':
            return 'archcss-dev';
        case 'author-name':
            return 'Beba Godfried';
        case 'author-right':
            return 'Beba Godfried';
        case 'author-email':
            return 'me@bebagodfried.com';
        case 'author-site':
            return 'https://bebagodfried.com';
        case 'copyright':
            return 'Write with love by @bebagodfried';
        case 'owner':
            return 'archcss-dev - @bebagodfried';
        case 'version':
            return '2.0.0';
        default:
            console.info(`[404]: Reference '${key}' not found!`);
            return null;
    }
};
/**
 * set: setter
 * @param key string
 * @param value string|number
 * @returns void
 */
let set = (key, value = '') => {
    switch (key) {
        // DOM Objects
        case 'title':
            if (value) {
                document.title = `${value}`;
            }
            break;
        // Server & location
        case 'host':
            if (value) {
                location.host = `${value}`;
            }
            break;
        case 'hostname':
            if (value) {
                location.hostname = `${value}`;
            }
            break;
        case 'href':
            if (value) {
                location.href = `${value}`;
            }
            break;
        case 'url':
            if (value) {
                location.href = `${value}`;
            }
            break;
        case 'pathname':
            if (value) {
                location.pathname = `${value}`;
            }
            break;
        case 'port':
            if (value) {
                location.port = `${value}`;
            }
            break;
        case 'protocol':
            if (value) {
                location.protocol = `${value}`;
            }
            break;
        case 'search':
            if (value) {
                location.search = `${value}`;
            }
            break;
        default:
            console.info(`[404]: Reference '${key}' not found!`);
            return null;
    }
};
/** end:GLOBALS **/
/**
 * date: date object
 * @param format string
 * @param type string
 * @returns date
 */
let date = (format = '', type = '') => {
    // New date object
    var date = new Date();
    // return Alwayse two digits
    const digit = function (i) {
        if (i < 10)
            i = '0' + i;
        return i;
    };
    // H: Hours
    const H = date.getHours();
    // i: Minutes
    const i = digit(date.getMinutes());
    // s: Seconds
    const s = digit(date.getSeconds());
    // ms: Seconds
    const ms = date.getMilliseconds();
    // t: Timezone
    const t = date.getTimezoneOffset();
    // Y: Year
    const Y = date.getFullYear();
    // m: Month
    const m = date.getMonth();
    // d: Day
    const d = date.getDate();
    // f: Weekday
    const f = date.getDay();
    switch (format) {
        case 'H': //=> Hours
            if (isset(type)) {
                if (type == 'En') {
                    // return 12 hours format
                    if (H >> 12) {
                        return (H - 12);
                    }
                    else {
                        return H;
                    }
                }
                else if (type == 'Fr') {
                    // return 24 hours format
                    return H;
                }
            }
            else {
                return H;
            }
        case 'i': return i; //=> Minutes
        case 's': return s; //=> Seconds
        case 'ms': return s; //=> Seconds
        case 't': return t; //=> Timezone
        case 'Y': return Y; //=> Year
        case 'm': //=> Month
            if (isset(type)) {
                if (type == 'En') {
                    // return the month in english
                    return months_en[m];
                }
                else if (type == 'Fr') {
                    // return the month in french
                    return months_fr[m];
                }
            }
            else {
                // return the month as number
                return m;
            }
        case 'd': return (d); //=> Day
        case 'f': return f; //=> Weekday
        case 'En': return weekdays_en[f] + ', ' + months_en[m] + ' ' + digit(d) + ', ' + Y;
        case 'Fr': return weekdays_fr[f] + ' ' + digit(d) + ' ' + months_fr[m] + ' ' + Y;
        case 'DD/MM/YY': return digit(d) + '/' + digit(m) + '/' + Y;
        case 'MM/DD/YY': return digit(m) + '/' + digit(d) + '/' + Y;
        case 'DD-MM-YY': return digit(d) + '-' + digit(m) + '-' + Y;
        case 'MM-DD-YY': return digit(m) + '-' + digit(d) + '-' + Y;
        case 'DD/MM': return digit(d) + '/' + digit(m);
        case 'MM/DD': return digit(m) + '/' + digit(d);
        case 'DD-MM': return digit(d) + '-' + digit(m);
        case 'MM-DD': return digit(m) + '-' + digit(d);
        // hours:minutes
        case 'H:i':
            if (isset(type)) {
                if (type == 'En') {
                    // return time in 12 hours format
                    if (H >> 12) {
                        return (H - 12) + ':' + i;
                    }
                    else {
                        return H + ':' + i;
                    }
                }
                else if (type == 'Fr') {
                    // return time in 24 hours format
                    return H + ':' + i;
                }
            }
            else {
                // return time hours:minutes
                return H + ':' + i;
            }
        // hours:minutes:seconds
        case 'H:i:s':
            if (isset(type)) {
                if (type == 'En') {
                    // return time in 12 hours format with seconds
                    if (H >> 12) {
                        return (H - 12) + ':' + i + ':' + s;
                    }
                    else {
                        return H + ':' + i + ':' + s;
                    }
                }
                else if (type == 'Fr') {
                    // return time in 24 hours format with seconds
                    return H + ':' + i + ':' + s;
                }
            }
            else {
                // return time in hours:minutes:seconds
                return H + ':' + i + ':' + s;
            }
        default: return date.toLocaleString();
    }
};
// Days
let weekdays_en = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Tursday', 'Friday', 'Saturday'];
let weekdays_fr = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
// Months
let months_en = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let months_fr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
/** end:date */
/**
 * DOM: Document Objects Manipulation
 * @param el string
 * @param all string
 * @returns Object
 */
let dom = (el, all = true) => {
    try {
        // Remove white space around the element
        if (typeof (el) == 'string' && el != null)
            el = el.trim();
        // By default `all = true` indicate that all `el` are selected
        // all = true
        // all = false
        if (all) {
            return [...document.querySelectorAll(el)];
        }
        else {
            return document.querySelector(el);
        }
    }
    catch (DOM_ERR) {
        // DOM() debug
        // console.error(DOM_ERR)
        console.error('DOM(el: string)' + `:  => '${el}' is not a valid selector.`);
        return null;
    }
};
/**
 * strcopy: send string to clipboard
 * @param text string
 */
let strcopy = (text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield navigator.clipboard.writeText(text);
    }
    catch (err) {
        console.error('Failed to copy text: ', err);
    }
});
/**
 * goto: url redirection
 * @param _location Location
 */
let goto = (_location) => {
    try {
        location.href = _location.toString();
    }
    catch (err) {
        console.error('Failed redirect: ', err);
    }
};
/**
 * get_attribute: Get an attrribute value of element
 * @param el string
 * @param attrib string
 * @returns any
 */
let get_attribute = (el, attrib) => {
    // Element selection
    let dom = select(el);
    // Return the attrribute value of the element
    try {
        return dom.getAttribute(`${attrib}`);
    }
    catch (ATTR_ERR) {
        // Debug get_attrib()
        console.error(`${ATTR_ERR.name}: get_attrib(el: string, attrib: any) => '${el}' has no a ${attrib} attribute.`);
        return null;
    }
};
/**
 * set_attribute: Set an attrribute value of element
 * @param el string
 * @param attrib string
 * @param value any
 */
let set_attribute = (el, attrib, value) => {
    // Element selection
    let dom = select(el);
    // Apply the attrribute value to element
    if (value) {
        dom.setAttribute(`${attrib}`, `${value}`);
    }
    else {
        console.warn('set_attrib(el: string, attrib: any, value?: any)' + `:  => '${el}.atribute(${attrib}) will be empty.`);
        dom.setAttribute(`${attrib}`, '');
    }
};
/** classList */
/**
 * get_classlist: return all defined class of an element
 * @param el string
 * @returns string[]
 */
let get_classlist = (el) => {
    let dom = select(el);
    return dom.classList.value.split();
};
/**
 * set_classlist: add/remove element classes
 * If token is true, adds token (same as [...].classList.add()).
 * If force is false, removes token (same as [...].classList.remove()).
 *
 * @param el string
 * @param tokens string[]
 */
let set_classlist = (el, tokens) => {
    let dom = select(el);
    // check for each token force
    tokens.forEach(key => {
        dom.classList.toggle(key);
    });
};
/** end: classList */
/** Node */
/**
 * create: Create node elements
 * @param el string
 * @returns ElementCreationOptions
 */
let create = (el) => {
    return document.createElement(el);
};
/**
 * select: Node list selector
 * @param el string
 * @param all boolean
 * @returns NodeList
 */
let select = (el, all = false) => {
    try {
        // Remove white space around the element
        if (typeof (el) == 'string' && el != null)
            el = el.trim();
        // By default `all = false` indicate that select the first `el`
        // all = true
        // all = false
        if (all) {
            return [...document.querySelectorAll(el)];
        }
        else {
            return document.querySelector(el);
        }
    }
    catch (select_ERR) {
        // Debug get_attrib()
        console.error(`${select_ERR.name}: select(elememt: string, all?: boolean) => '${el}' is not a valid selector.`);
        return null;
    }
};
/**
 * select_tag: HTMLCollection selector
 * @param el string
 * @returns HTMLCollection
 */
let select_tag = (el) => {
    try {
        // Remove white space around the element
        if (typeof (el) == 'string' && el != null)
            el = el.trim();
        return document.getElementsByTagName(el);
    }
    catch (select_ERR) {
        // Debug select()
        console.error(`${select_ERR.name}: selectTag(tag: string) => '${el}' is not a valid selector.`);
        return null;
    }
};
/**
 * select_id: Element `Id` selector
 * @param el string
 * @returns HTMLElement
 */
let select_id = (el) => {
    try {
        // Remove white space around the element
        if (typeof (el) == 'string' && el != null)
            el = el.trim();
        return document.getElementById(el);
    }
    catch (select_id_ERR) {
        // Debug select_id()
        console.error(`${select_id_ERR.name}: select_id(id: srting) => '${el}' is not a valid selector.`);
        return null;
    }
};
/**
 * drop_all: Remove element(s) list from DOM
 * @param list string[]
 */
let drop_all = (list) => {
    list.forEach(el => {
        // Element selection from list
        const dom = select(el);
        try {
            dom.remove();
        }
        catch (Drop_ERR) {
            // Escape
            return null;
        }
    });
};
/**
 *
 * @param token string[]
 * @returns any
 */
let drop = (token) => {
    // Element selection
    const dom = select(token);
    try {
        dom.remove();
    }
    catch (Drop_ERR) {
        // Escape
        return null;
    }
};
/**
 * echo: replace the content of element(s)
 * @param text string
 * @param el string
 * @param match_all boolean
 * @returns string
 */
let echo = (text, el, match_all = false) => {
    if (isset(el)) {
        if (match_all) {
            // all = true
            // Genearate a list of all `el`
            let list = select(el, match_all);
            // for each element of the list add/replace content
            list.forEach((el) => {
                el.innerHTML = `${text}`;
            });
            // by default
            // add/replace the first `el` occurence
        }
        else {
            try {
                return document.querySelector(el).innerHTML = `${text}`;
            }
            catch (e) {
                return el.innerHTML = `${text}`;
            }
        }
    }
    else {
        console.log(`${text}`);
    }
};
/**
 * get_innerTEXT: Get element text content
 * @param el string
 * @returns string
 */
let get_innerTEXT = (el) => {
    // Element selection
    let dom = select(el);
    return dom.innerTEXT;
};
/**
 * set_innerTEXT: Replace element text content
 * @param el string
 * @param text string
 */
let set_innerTEXT = (el, text) => {
    try {
        document.querySelector(el).innerTEXT = `${text}`;
    }
    catch (error) {
        // Debug set_innerTEXT()
        console.error(error);
    }
};
/**
 * get_innerHTML: Get html content of element
 * @param el string
 * @returns string
 */
let get_innerHTML = (el) => {
    // Get html content of an element
    return document.querySelector(el).innerHTML;
};
/**
 * set_innerHTML: Replace html content of element
 * @param el string
 * @param concent string
 */
let set_innerHTML = (el, concent) => {
    try {
        document.querySelector(el).innerHTML = `${concent}`;
    }
    catch (error) {
        // Debug get_innerHTML()
        console.error(error);
    }
};
/** end:Node */
/**
 * display: display/hide specific DOM element
 * @param el string
 * @param displayValue string
 * @returns string
 */
function _display(el, displayValue) {
    // Element selection
    let dom = select(el);
    // if hidden by style attribute then display as `displayValue`
    if (dom.style.display == 'none') {
        dom.style.display == `${displayValue}`;
        // if displayed by style attribute then change the value to `none`
    }
    else if (dom.style.display == `${displayValue}`) {
        dom.style.display == 'none';
    }
    else {
        // if hidden by class attribute containing `hidden` token
        // then remove the `hidden` class and add the `displayValue` class
        if (dom.classList.contains('hidden')) {
            try {
                dom.classList.remove('hidden');
                dom.classList.add(`${displayValue}`);
            }
            catch (display_ERR) {
                // Debug display() #1
                console.error(display_ERR);
            }
            // if displayed by class attribute as containing `displayValue` token
            // then remove the `displayValue` class and add the `hidden` class
        }
        else if (dom.classList.contains(`${displayValue}`)) {
            try {
                dom.classList.remove(`${displayValue}`);
                dom.classList.add('hidden');
            }
            catch (display_ERR) {
                // Debug display() #2
                console.error(display_ERR);
            }
        }
        else {
            // if hidden by hidden attribute
            // then remove the `hidden` class and add the `displayValue` class
            // Get the attribute
            try {
                let hide = dom.getAttribute('hidden');
                if (isset(hide)) {
                    if (hide == true) {
                        hide = false;
                    }
                    else {
                        hide = true;
                    }
                }
            }
            catch (display_ERR) {
                // Debug display() #3
                console.error(display_ERR);
            }
        }
    }
}
let display = (el, display = 'block') => {
    if (typeof (el) == 'string') {
        _display(el, display);
    }
    else {
        el.forEach((e) => {
            _display(e, display);
        });
    }
};
/**
 * hide: make a hidden element
 * @param el string
 * @returns void
 */
function _hide(el) {
    // Possible classlist values
    const list = ['block', 'inline', 'inline-block', 'flex', 'inline-flex'];
    // Element selection
    const dom = select(el);
    try {
        // for each display token from list
        // if `el` classList.contains a token display then change it to `hidden`
        list.forEach(display => {
            if (dom.classList.contains(`${display}`)) {
                dom.classList.remove(`${display}`);
                dom.classList.add('hidden');
            }
        });
    }
    catch (hide_ERR) {
        // hide `el` by attribute
        let hide = dom.getAttribute('hidden');
        try {
            if (!isset(hide)) {
                return hide = true;
            }
        }
        catch (display_ERR) {
            // Debug hide()
            console.error(display_ERR);
        }
    }
}
let hide = (el) => {
    if (typeof (el) == 'string') {
        _hide(el);
    }
    else {
        el.forEach((e) => {
            _hide(e);
        });
    }
};
/** EventListener */
/**
 * on: envent listener
 * @param event string
 * @param listener Function
 */
let on = (event, listener) => {
    event = event.trim();
    document.addEventListener(event, listener());
};
/**
 * at_scroll: based on scroll offset, this while add/remove some classname to an object
 * @param el string
 * @param add_list string[]
 * @param rm_list string[]
 * @param offset number
 */
let at_scroll = (el, add_list, rm_list = [], offset = 0) => {
    var dom = select(el);
    // Add or remove class based on scroll position
    if (window.scrollY > offset) {
        add_list.forEach(key => {
            dom.classList.add(key);
        });
        rm_list.forEach(key => {
            dom.classList.remove(key);
        });
    }
    else {
        add_list.forEach(key => {
            dom.classList.remove(key);
        });
        rm_list.forEach(key => {
            dom.classList.add(key);
        });
    }
};
/**
 * scroll_to: scroll to element on page
 * @param el string
 */
let scroll_to = (el) => {
    // JavaScript to scroll to the target element
    var dom = select_id(el);
    dom.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
/** Validation */
/**
 * isset: Return true for no-empty Object/var
 * @param key string
 * @returns boolean
 */
let isset = (key) => {
    if (key != null && key != false && key != undefined) {
        return true;
    }
    else if (key != '' && key != ' ') {
        return true;
    }
    else {
        return false;
    }
};
/** Mixin */
/**
 * pop: create advenced pop-up box style
 */
class frame {
    constructor(title) {
        this.title = title;
        this.favicon = "";
        this.content = "";
        this.html = "";
        this.href = "";
        this.titlebar = true;
        this.rounded = true;
        this.shadow = true;
        this.classlist = [];
        this.style = "";
        this.border = true;
        this.overlay = false;
        this.height = 96;
        this.width = 250;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = 0;
        this.index = 8;
        this.timeout = 0;
        this.title = title;
    }
    pop() {
        // Pop
        // #1. Create a new window with basic value
        const WINDOW = create('div');
        // setup
        WINDOW.id = this.title;
        WINDOW.classList.add('rounded', 'select-none');
        WINDOW.style.position = 'fixed';
        // size
        WINDOW.style.height = this.height;
        WINDOW.style.width = this.width;
        // #2. Check window's already exist
        if (select_id(`${WINDOW.id}`)) {
            let el = select_id(WINDOW.id);
            el === null || el === void 0 ? void 0 : el.classList.add('animate-pulse');
            setTimeout(() => {
                el === null || el === void 0 ? void 0 : el.classList.remove('animate-pulse');
            }, 1000);
            return null;
        }
        // #3. classlist: Add more features/tweaks
        if (isset(this.classlist)) {
            this.classlist.forEach(classItem => {
                WINDOW.classList.add(classItem);
            });
        }
        // #4. index/z-index: add a window priority (default: 8)
        if (isset(this.index)) {
            WINDOW.classList.add(`${'z-' + this.index}`);
        }
        else {
            WINDOW.classList.add('z-8');
        }
        // #5. style: choose apearence between dark/light (default: light)
        if (`${this.style}` == 'dark') {
            WINDOW.classList.add('bg-dark-900', 'fg-light');
        }
        else if (`${this.style}` == 'light') {
            WINDOW.classList.add('bg-light', 'fg-dark-900');
        }
        else if (`${this.style}` == 'none') {
            WINDOW.style.color = 'inherit';
        }
        else {
            WINDOW.classList.add('bg-light', 'fg-dark-900');
        }
        // #6. border: enable window border (default: true)
        if (isset(this.border == true)) {
            WINDOW.classList.add('border');
        }
        else if (isset(this.border == false)) {
            // do nothing ...
        }
        else {
            WINDOW.classList.add('border');
        }
        // #7. rounded: enable window rounded border (default: true)
        if (isset(this.rounded == true)) {
            WINDOW.classList.add('rounded');
        }
        else if (isset(this.rounded == false)) {
            // do nothing ...
        }
        else {
            WINDOW.classList.add('rounded');
        }
        // #8. shadow: enable window shadow (default: true)
        if (isset(this.shadow == true)) {
            WINDOW.classList.add('shadow-1');
        }
        else if (isset(this.shadow == false)) {
            // do nothing ...
        }
        else {
            WINDOW.classList.add('shadow-1');
        }
        // #9. [top, right, bottom, left]: value window position
        if (isset(this.top) || isset(this.right) || isset(this.bottom) || isset(this.left)) {
            WINDOW.style.top = this.top;
            WINDOW.style.right = this.right;
            WINDOW.style.bottom = this.bottom;
            WINDOW.style.left = this.left;
        }
        else {
            WINDOW.style.top = '50%';
            WINDOW.style.left = '50%';
            WINDOW.classList.add('translate-center');
        }
        // #10. header/title bar
        // #10.1 Create a title bar 
        const HEADER = create('div');
        HEADER.classList.add('flex', 'items-center', 'justify-between', 'full-width');
        HEADER.style.padding = '.2rem';
        // #10.2 favicon: add an icon as window illustrator
        const FAVICON = create('img');
        if (isset(this.favicon)) {
            FAVICON.src = this.favicon;
            FAVICON.classList.add('size-32');
        }
        // #10.3 Window action bar
        // * title: value the window title/id
        const TITLE = create('span');
        TITLE.classList.add('pl-1', 'line-clamp-1', 'sm:line-clamp-1');
        TITLE.innerHTML = this.title;
        // * add moving icon
        const WIN_Move = create('button');
        WIN_Move.classList.add('bg-none', 'cursor-default', 'fa-solid', 'fa-up-down-left-right', 'p-0', 'rounded-full', 'size-32', 'muted');
        // * add closing button
        const WIN_Close = create('button');
        WIN_Close.classList.add('bg-none', 'fa-solid', 'fa-times', 'hover:bg-danger', 'p-0', 'rounded-full', 'size-32');
        // #11. views: create adaptable content
        var view = '';
        if (isset(this.content)) {
            view = 'p';
        }
        else if (isset(this.html)) {
            view = 'div';
        }
        else if (isset(this.href)) {
            view = 'iframe';
        }
        // - create main window view
        const CONTENT = create(view);
        if (isset(this.content)) {
            CONTENT.classList.add('m-0', 'px-2', 'py-1', 'w-full');
            CONTENT.innerHTML = this.content;
            if (isset(this.titlebar == true)) {
                CONTENT.classList.add('border', 'border-0', 'border-t-1');
            }
        }
        else if (isset(this.html)) {
            CONTENT.classList.add('max-height', 'border-0', 'border-t-1', 'border-white', 'px-2', 'py-1', 'w-full');
            CONTENT.innerHTML = this.html;
        }
        else if (isset(this.href)) {
            CONTENT.classList.add('no-border');
            CONTENT.height = '100%';
            CONTENT.width = '100%';
            CONTENT.src = this.href;
            if (isset(this.titlebar == true)) {
                CONTENT.classList.add('border-0', 'border-t-1', 'border-white');
            }
        }
        // #12. Actions
        // #12.1 draging action (double-click)
        WINDOW.ondblclick = () => {
            let move = get_attribute('.js_focus', 'aria-grabbed');
            WINDOW.classList.toggle('cursor-grabbing');
            if (move == 'true') {
                WINDOW.setAttribute('aria-grabbed', 'false');
                WIN_Move.classList.add('muted');
            }
            else {
                WINDOW.setAttribute('aria-grabbed', 'true');
                WIN_Move.classList.remove('muted');
            }
        };
        WINDOW.addEventListener('mousemove', (e) => {
            let focus = select('.js_focus');
            let drag = get_attribute(`#${focus.id}`, 'aria-grabbed');
            // ajust window option according to cursor position
            if (focus && drag == 'true') {
                let x = e.clientX;
                let y = e.clientY;
                WINDOW.style.left = `${x}px`;
                WINDOW.style.top = `${y}px`;
            }
        });
        // #12.1 closing action (cross button click)
        WIN_Close.onclick = () => {
            drop('.js_focus');
            try {
                // remove window overlay if enabled
                drop('#window_overlay');
            }
            catch (error) {
                return null;
            }
        };
        // #12.2 focus/`switch focus` action priority(hover/click on window)
        WINDOW.addEventListener('mouseover', () => {
            WINDOW.classList.add('js_focus');
            if (!this.index) {
                WINDOW.onclick = () => {
                    let lostFocus = select('.z-8');
                    if (lostFocus) {
                        lostFocus.classList.add('z-7');
                        lostFocus.classList.remove('z-8');
                    }
                    WINDOW.classList.add('z-8');
                };
            }
        });
        // #12.3 lost focus priority
        WINDOW.addEventListener('mouseleave', () => {
            WINDOW.classList.remove('js_focus');
        });
        // #12.4 timeout
        if (isset(this.timeout != 0 && this.timeout != null)) {
            let timeout = this.timeout;
            setTimeout(() => {
                WINDOW.classList.add('animate-fadeOut');
            }, timeout);
            WINDOW.remove();
        }
        // #13. final views
        // # header sections
        //   - favicon & title block
        let div_1 = create('div');
        div_1.classList.add('flex', 'items-center');
        if (isset(this.favicon)) {
            div_1.appendChild(FAVICON);
        }
        div_1.appendChild(TITLE);
        //   - window actions block
        let div_2 = create('div');
        div_2.classList.add('flex', 'items-center', 'g-1');
        div_2.appendChild(WIN_Move);
        div_2.appendChild(WIN_Close);
        HEADER.appendChild(div_1);
        HEADER.appendChild(div_2);
        // #14. Ready header view's
        if (isset(this.titlebar != false)) {
            WINDOW.appendChild(HEADER);
        }
        // #15. Ready content view's
        WINDOW.appendChild(CONTENT);
        // *** overlay options view ***
        if (isset(this.overlay == true)) {
            let overlay = create('div');
            overlay.id = 'window_overlay';
            overlay.classList.add('absolute', 'fullscreen', 'top-0', 'left-0', 'backdrop-blur-10', 'ease-in', 'animate-fadeIn', 'animated-500');
            if (isset(this.index)) {
                let i = this.index;
                overlay.classList.add(`z-${i - 1}`);
            }
            else {
                overlay.classList.add('z-8');
            }
            document.body.appendChild(overlay);
            document.body.appendChild(WINDOW);
        }
        else {
            document.body.appendChild(WINDOW);
        }
    }
}
/**
 * Cookies manage
 */
let set_cookie = (cookieName, cookieValue, cookieExpiry) => {
    try {
        if (isset(cookieExpiry)) {
            document.cookie = `${cookieName = cookieValue}; expires=${cookieExpiry};`;
        }
        else {
            document.cookie = `${cookieName = cookieValue}`;
        }
    }
    catch (Cookie_ERR) {
        console.error(Cookie_ERR);
    }
};
let unset_cookie = (cookieName, cookieExpiry) => {
    try {
        if (isset(cookieExpiry)) {
            document.cookie = `username=${cookieName}; expires=${cookieExpiry};`;
        }
        else {
            document.cookie = `username=${cookieName}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        }
    }
    catch (Cookie_ERR) {
        console.error(Cookie_ERR);
    }
};
