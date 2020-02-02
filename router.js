// 路由模块

const express = require('express');
const router = express.Router();
const service = require('./service.js');

router.get('/',service.showIndex);

// 添加图书
router.get('/addBook',service.addBook);
// 提交表单
router.post('/subBook',service.subBook);

//跳转到编辑页面
router.get('/toEditBook',service.toEditBook);

router.post('/editBook',service.editBook);

// 删除操作
router.get('/deleteBook',service.deleteBook);

module.exports = router;