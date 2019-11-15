/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const faker = require('faker');

const writeListings = fs.createWriteStream('Images.csv');

const imgNumber = [3, 5, 4, 6];

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  let imgID = 0;
  function write() {
    let ok = true;
    do {
      if (i % 100000 === 0) {
        console.log((id / 10000000 * 100).toFixed(2) + '%');
      }
      i -= 1;
      id += 1;
      for (var k = 0; k < imgNumber[Math.floor(Math.random() * 3)]; k++) {
        imgUrl = faker.image.city();
        imgID += 1;
        const data = `${imgID},${id},${imgUrl}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write()
}

writeTenMillionUsers(writeListings, 'utf-8', () => {
  writeListings.end();
});