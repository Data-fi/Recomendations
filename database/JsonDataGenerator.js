/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const faker = require('faker');

const writeListings = fs.createWriteStream('listing.json');

const homeType = ['Entire Home', 'Private Room', 'Vacation Home', 'Shared Space', 'Unqiue'];
const verified = ['true', 'false'];

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  let imgID = 1;
  let roomID = 1;
  function write() {
    let ok = true;
    do {
      if (i % 100000 === 0) {
        console.log((id / 10000000 * 100).toFixed(2) + '%');
      }
      i -= 1;
      id += 1;
      let data = {
        listingID: id,
        Rooms: [
          {
            roomID: roomID++,
            title: faker.lorem.words(3),
            city: faker.address.city(),
            avgRating: Math.floor(Math.random()*500)/100,
            totalRating: Math.floor(Math.random() * 1000),
            propertyType: homeType[Math.floor(Math.random() * 5)],
            plusVerified: verified[Math.floor(Math.random()*2)],
            price: Math.floor(Math.random() * 10000)/100,
            images: [
              {
                imgID: imgID++,
                imgURL: faker.image.city()
              },
              {
                imgID: imgID++,
                imgURL: faker.image.city()
              },
              {
                imgID: imgID++,
                imgURL: faker.image.city()
              }
            ]
          },
          {
            roomID: roomID++,
            title: faker.lorem.words(3),
            city: faker.address.city(),
            avgRating: Math.floor(Math.random()*500)/100,
            totalRating: Math.floor(Math.random() * 1000),
            propertyType: homeType[Math.floor(Math.random() * 5)],
            plusVerified: verified[Math.floor(Math.random()*2)],
            price: Math.floor(Math.random() * 10000)/100,
            images: [
              {
                imgID: imgID++,
                imgURL: faker.image.city()
              },
              {
                imgID: imgID++,
                imgURL: faker.image.city()
              },
              {
                imgID: imgID++,
                imgURL: faker.image.city()
              }
            ]
          },
          {
            roomID: roomID++,
            title: faker.lorem.words(3),
            city: faker.address.city(),
            avgRating: Math.floor(Math.random()*500)/100,
            totalRating: Math.floor(Math.random() * 1000),
            propertyType: homeType[Math.floor(Math.random() * 5)],
            plusVerified: verified[Math.floor(Math.random()*2)],
            price: Math.floor(Math.random() * 10000)/100,
            images: [
              {
                imgID: imgID++,
                imgURL: faker.image.city()
              },
              {
                imgID: imgID++,
                imgURL: faker.image.city()
              },
              {
                imgID: imgID++,
                imgURL: faker.image.city()
              }
            ]
          }
        ]
      }
      let stringData = JSON.stringify(data);
      if (i === 0) {
        writer.write(stringData, encoding, callback);
      } else {
        ok = writer.write(stringData, encoding);
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