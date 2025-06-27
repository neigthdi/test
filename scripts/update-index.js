const fs = require('fs');
const path = require('path');

// 定义 index.md 文件路径
const indexPath = path.join(__dirname, '../docs/index.md');

// 读取 index.md 文件内容
let content = fs.readFileSync(indexPath, 'utf-8');

// 定义时间戳的标记
const timestampMarker = '最后更新时间：';

// 获取当前本地时间并格式化为 YYYY-MM-DD HH:MM
const currentTime = new Date();
const formattedTime = currentTime.getFullYear() +
  '-' + String(currentTime.getMonth() + 1).padStart(2, '0') +
  '-' + String(currentTime.getDate()).padStart(2, '0') +
  ' ' + String(currentTime.getHours()).padStart(2, '0') +
  ':' + String(currentTime.getMinutes()).padStart(2, '0');

// 检查是否已经存在时间戳行
let lines = content.split('\n');
let found = false;

// 遍历每一行，查找并更新时间戳
lines = lines.map(line => {
  if (line.startsWith(timestampMarker)) {
    found = true;
    return `${timestampMarker} ${formattedTime}`;
  }
  return line;
});

// 如果没有找到时间戳行，则添加一行
if (!found) {
  lines.push(`${timestampMarker} ${formattedTime}`);
}

// 将更新后的内容写回文件
fs.writeFileSync(indexPath, lines.join('\n'), 'utf-8');