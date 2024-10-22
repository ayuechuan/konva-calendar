export function generateUUID() {
  // 生成一个随机的 4 位十六进制数
  function randomHexDigit() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  // 按照 UUID v4 的格式: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  return (
    randomHexDigit() + randomHexDigit() + '-' + // xxxxxxxx
    randomHexDigit() + '-' +                    // xxxx
    '4' + randomHexDigit().substr(0, 3) + '-' + // 4xxx 保证第13个字符是 4
    ((Math.random() * 4 | 8).toString(16)) + randomHexDigit().substr(0, 3) + '-' + // yxxx 保证第17个字符是 [8, b]
    randomHexDigit() + randomHexDigit() + randomHexDigit() // xxxxxxxxxxxx
  );
}