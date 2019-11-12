const fs = require('fs');
const faker = require('faker');

faker.locale = "en_US";

const writeListings = fs.createWriteStream('Listings.csv');

const homeType = ['Entire Home', 'Private Room', 'Vacation Home', 'Shared Space', 'Unqiue'];
verified = ['true', 'false'];

function writeTenMillionUsers(writer, encoding, callback) {
    let i = 10000000;
    let id = 0;
    function write() {
      let ok = true;
      do {
        if(i%100000===0) {
          console.log((id/10000000*100).toFixed(2)+'%');
        }
        i -= 1;
        id += 1;
        const description = faker.lorem.words(3);
        const city = faker.address.city();
        const avgRating = Math.floor(Math.random()*500)/100;
        const totalRating = Math.floor(Math.random() * 1000);
        const propertyType = homeType[Math.floor(Math.random() * 5)];
        const plusVerified = verified[Math.floor(Math.random() * 2)];
        const price = Math.floor(Math.random() * 10000)/100;
        const data = `${id},${description},${city},${avgRating},${totalRating},${propertyType},${plusVerified},$${price}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
  // see if we should continue, or wait
  // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
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
