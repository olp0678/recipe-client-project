import fs from 'fs';
import zlib from 'zlib';

class lab03 {

  syncFileRead(filename) {
      let fileContents = fs.readFileSync(filename, { encoding: 'utf-8'});
      return fileContents;
  }

  asyncFileRead(filename, callback) {
    fs.readFile(filename, function(err, data ){
        if (err){
            return console.error(err);
        }
        callback(data.toString('utf-8'));
    });
  }

  compressFileStream(input, output) {
      var read_stream = fs.createReadStream(input);
      var zip_write_stream = zlib.createGzip();
      var zipe_pip_stream = read_stream.pipe(zip_write_stream);
      var write_stream = fs.createWriteStream(output);
      return zip_write_stream.pipe(write_stream);
  }

  decompressFileStream(input, output) {
    var zip_read_stream = fs.createReadStream(input);
    var unzip_stream = zlib.createGzip();
    var unzip_pipe_stream = zip_read_stream.pipe(unzip_stream);
    var target_write_stream = fs.createWriteStream(output);
    return unzip_pipe_stream.pipe(target_write_stream);
  }

listDirectoryContents(directoryName, callback) {
  fs.readdir(directoryName, (err, items) =>{
      if (err) return console.error(err);
      return callback(items);

  });
}

}

export {lab03};
