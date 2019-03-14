import Mock from 'mockjs';

const waitFiles = [{
  id: 0,
  name: '劳动合同1',
  publisher: '智享签平台',
  receiver: '杨康',
  date: '2019-01-01 12:30:29',
  status: 1,
  isDown: false,
  isReport: false,
}];
const finishFiles = [{
  id: 1,
  name: '劳动合同2',
  publisher: '智享签平台',
  receiver: '元登明',
  date: '2019-01-01 12:30:29',
  status: 2,
  isDown: true,
  isReport: true,
}, {
  id: 2,
  name: '劳动合同3',
  publisher: '智享签平台',
  receiver: '吴辉',
  date: '2019-01-01 12:30:29',
  status: 2,
  isDown: true,
  isReport: true,
}];
const expiredFiles = [{
  id: 3,
  name: '劳动合同4',
  publisher: '智享签平台',
  receiver: '元登明',
  date: '2019-01-01 12:30:29',
  status: 3,
  isDown: true,
  isReport: true,
}, {
  id: 4,
  name: '劳动合同5',
  publisher: '智享签平台',
  receiver: '吴辉',
  date: '2019-01-01 12:30:29',
  status: 3,
  isDown: true,
  isReport: true,
}];
const deniedFiles = [{
  id: 5,
  name: '劳动合同6',
  publisher: '智享签平台',
  receiver: '元登明',
  date: '2019-01-01 12:30:29',
  status: 4,
  isDown: true,
  isReport: true,
}, {
  id: 6,
  name: '劳动合同7',
  publisher: '智享签平台',
  receiver: '吴辉',
  date: '2019-01-01 12:30:29',
  status: 4,
  isDown: true,
  isReport: true,
}];

let allFiles = [];
allFiles = allFiles.concat(waitFiles).concat(finishFiles).concat(expiredFiles).concat(deniedFiles);

export default ({
  mock
}) => {
  if (!mock) return;

  let documentList = [allFiles, waitFiles, finishFiles, expiredFiles, deniedFiles];
  Mock.mock('/file/getDocuments', 'get', (res) => {
    let body = JSON.parse(res.body);
    return {
      data: documentList[body.type] || []
    };
  });
};