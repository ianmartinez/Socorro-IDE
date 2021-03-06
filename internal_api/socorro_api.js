function isArray(test) {
    return (test.constructor == Array);
}

function copyArr(arr) {
    var new_arr = [];
    for(var i = 0; i<arr.length; i++)
        new_arr[i] = arr[i];
    return new_arr;
}

function removeAt(arr,pos) {
   return arr.slice(0,pos) + arr.slice(pos + 1);
}

function insertAt(arr,pos,item) {
    var new_arr = copyArr(arr);
    new_arr.splice(pos,0,item);
    return new_arr;
}

const sc_version = ".30";
class SocorroState {
    constructor(_project,_theme,_e) {
        this.project = _project;
        this.e = _e;
        this.theme = _theme;
        this.version = sc_version;
    }
}
class SocorroProject {
    constructor(_file_path,_build_options) {
        this.file_path = _file_path;
        this.build_options = _build_options;
        this.favicon = "favicon.ico";
        this.apple_icon = "apple-touch-icon.png";
    }
}

class SocorroBuildOptions {
    constructor() {
        // Automatically add vendor prefixes on CSS
        this.auto_vendor_prefixes = true;
        
        // Automatically minify to compress size
        this.minify_css = false;
        this.minify_js = false;
        this.minify_html = false;
    }
}

class ElectronApi {
    constructor(_app,_fs,_clipboard,_dialog,_shell) {
        this.app = _app;
        this.files = _fs;
        this.clipboard = _clipboard;
        this.dialog = _dialog;
        this.shell = _shell;
    }
}