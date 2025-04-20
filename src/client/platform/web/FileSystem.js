class FileSystem {
    static isApp() { return false; }
    static addImages() {}
    static addFolder() {}
    static selectFolder() {}
    static fixPath(path) { return path; }
    static isDirectory(path) { return false; }
    static loadFolder(path, cb) {}
}

export default FileSystem;