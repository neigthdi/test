const fs = require('fs');
const path = require('path');

// 定义 index.md 文件路径
const indexPath = path.join(__dirname, '../docs/index.md');

// 读取 index.md 文件内容
let content = fs.readFileSync(indexPath, 'utf-8');

// 定义时间戳的标记
const timestampMarker = '最后更新时间：';

// 删除上一次的时间戳
const lines = content.split('\n');
const filteredLines = lines.filter(line => !line.startsWith(timestampMarker));
content = filteredLines.join('\n');

// 获取当前时间并格式化为 YYYY-MM-DD HH:MM
const currentTime = new Date();
const formattedTime = currentTime.toISOString().replace('T', ' ').substring(0, 16);

// 添加新的时间戳到文件末尾
content += `\n\n${timestampMarker} ${formattedTime}`;

// 写回文件
fs.writeFileSync(indexPath, content, 'utf-8');