const schedule = require('node-schedule');
const request = require('request');
const cheerio = require('cheerio');
const util = require('util');
const removeNewline = require('newline-remove');
const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');
const urlToParse = 'http://www.inu.ac.kr/cop/haksaStaffSearch/staffSearchView.do?id=inu_011001000000&section=all&select1=&name=';

const start = () => {
  let scheduler = schedule.scheduleJob('00 00 */6 * * *', async () => {
    console.log("crawling execute");
    try{
      let data = await crawlPhonebook();
      if(data){
        // for clean exit, pool release and connect inside.
        let pool = mysql.createPool(dbConfig);
        pool.query = util.promisify(pool.query);

        // DO NOT DELETE FROM. It continuously increase id.
        await pool.query('TRUNCATE employee');
        await pool.query("INSERT INTO employee(organ,detailOrgan,position,name,mainWork,telephone,email) VALUES ?",[data]);
        pool.end();
      }
    }
    catch(error){
      console.error("crawling error");
      console.error(error);
    } // end of try-catch
  }) // end of scheduleJob
}; // end of start

/**
parse HTML from web
@return requestResult
*/
async function crawlPhonebook(){
  let resultArray = [];
  let requestResult = null;
  let count = 0;
  try{
    // util.promisify(request) causes escape letter encoding
    requestResult = await doRequest(urlToParse);
  }
  catch (e){
    console.error('requestError : ' + e);
    return;
  }

  if(!requestResult) return;
  let $ = cheerio.load(requestResult);

  // each is synchronize function
  $('#contents > div > div > table > tbody>tr').each(function(index, ele){
    let organ, detail, position, name, mainwork, telephone, email;
    organ = $(this).children().first();
    detail = organ.next();
    position = detail.next();
    name = position.next();
    mainwork = name.next();
    telephone = mainwork.next();
    email = $(telephone.next()).children().first().attr('href');

    // save as text
    organ = organ.text();
    detail = detail.text();
    position = (removeNewline(position.text())).trim(); // remove '\n', space
    name = name.text();
    mainwork = mainwork.text();
    telephone = telephone.text();
    if (email) {
      // if email is no undefiend
      email = email.substr(7, email.length)
    } else {
      email = null;
    }

    resultArray.push([organ, detail, position, name, mainwork, telephone, email]);
  })
  return resultArray;
}

/**
* Make synchronized request
* @param options for request
* @return Promized request
*/
function doRequest(options) {
  return new Promise(function (resolve, reject) {
    request(options, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}

module.exports = {
  start
};


/**
* testcode
*/
// crawlPhonebook().then(data=>console.log(data));
// start();
