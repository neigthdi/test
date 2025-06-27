const fs = require('fs');
const path = require('path');

// 定义 index.md 文件路径
const indexPath = path.join(__dirname, '../docs/index.md');

// 读取 index.md 文件内容
let content = fs.readFileSync(indexPath, 'utf-8');

// 定义时间戳的标记
const timestampMarker = 'Last updated:';

// 删除上一次的时间戳
const lines = content.split('\n');
const filteredLines = lines.filter(line => !line.startsWith(timestampMarker));
content = filteredLines.join('\n');

// 获取当前时间
const currentTime = new Date().toISOString();

// 添加新的时间戳到文件末尾
content += `\n\n${timestampMarker} ${currentTime}`;

// 写回文件
fs.writeFileSync(indexPath, content, 'utf-8');