const fs = require('fs');
const path = require('path');

function filterFiles(list, ext) {
    return list.filter((file) => {
        return path.extname(file) == ext;
    });

}

module.exports = function(dir, ext, cb) {
    ext = '.' + ext;

    fs.readdir(dir, (err, list) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null, filterFiles(list, ext));
        }
    });
}