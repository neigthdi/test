const fs = require('fs');
const path = require('path');

// 获取当前时间
const currentTime = new Date().toISOString();

// 定义 index.md 文件路径
const indexPath = path.join(__dirname, '../docs/index.md');

// 读取 index.md 文件内容
let content = fs.readFileSync(indexPath, 'utf-8');

// 添加时间戳
content = `最后更新时间: ${currentTime}\n\n` + content;

// 写回文件
fs.writeFileSync(indexPath, content, 'utf-8');