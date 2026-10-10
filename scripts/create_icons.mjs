import fs from 'fs';
import zlib from 'zlib';

function createPng(width, height, r, g, b, a) {
  // Simple uncompressed valid PNG generator
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcData = Buffer.concat([typeBuf, data]);
    let crc = 0xffffffff;
    for (let i = 0; i < crcData.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ crcData[i]) & 0xff];
    }
    crc = (crc ^ 0xffffffff) >>> 0;
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  // Precompute CRC table
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdr = chunk('IHDR', ihdrData);

  // Raw image data with scanline filter 0
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter 0
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      // Draw amber push-up emblem silhouette or dark slate background
      const distFromCenter = Math.hypot(x - width / 2, y - height / 2);
      const radius = width * 0.44;
      const isRing = Math.abs(distFromCenter - radius * 0.8) < (width * 0.04);
      const isBar = (y > height * 0.65 && y < height * 0.70 && x > width * 0.25 && x < width * 0.75);
      const isHead = Math.hypot(x - width * 0.35, y - height * 0.42) < (width * 0.07);

      if (isRing || isBar || isHead) {
        rawData[pxOffset] = 251;     // Amber
        rawData[pxOffset + 1] = 191; // 191
        rawData[pxOffset + 2] = 36;  // 36
        rawData[pxOffset + 3] = 255;
      } else {
        rawData[pxOffset] = r;
        rawData[pxOffset + 1] = g;
        rawData[pxOffset + 2] = b;
        rawData[pxOffset + 3] = a;
      }
    }
  }

  const idatData = zlib.deflateSync(rawData);
  const idat = chunk('IDAT', idatData);
  const iend = chunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

fs.writeFileSync('public/icon-192.png', createPng(192, 192, 9, 13, 22, 255));
fs.writeFileSync('public/icon-512.png', createPng(512, 512, 9, 13, 22, 255));
fs.writeFileSync('public/icon-maskable-512.png', createPng(512, 512, 9, 13, 22, 255));
console.log('Icons generated successfully');
