var schedule = require('node-schedule');
var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');
var pool = mysql.createPool(dbConfig);
const request = require('request')
const cheerio = require('cheerio')
var removeNewline = require('newline-remove')
// var async = require("async");


const start = () => {
    // console.log('cron start');
    var scheduler = schedule.scheduleJob('00 * * * * *', () => {
        // console.log('1. scheduler start!');

        pool.getConnection(async (connectionErr, connection) => {
          if (connectionErr) {
            // console.log("2. connectionErr!");
            console.log(connectionErr);
          } else {
            // console.log("2. connection success!");
            await connection.query("DELETE FROM employee", async function(deleteErr, results) {
              if (deleteErr) {
                // console.log("2. deleteErr!");
                console.log(deleteErr);
              } else {
                // console.log("2. update success!");
              }
            })
          }
          connection.destroy();
        });

        //console.log(employeeInfo);

        pool.getConnection(async (connectionErr, connection) => {
            if (connectionErr) {
              // console.log("4. connectionErr!");
              console.log(connectionErr);
            } else {
              // console.log("4. connection success!");
              // update employee http://www.inu.ac.kr/cop/haksaStaffSearch/staffSearchView.do?id=inu_011001000000&section=all&select1=&name=
              request('http://www.inu.ac.kr/cop/haksaStaffSearch/staffSearchView.do?id=inu_011001000000&section=all&select1=&name=', (requestErr, response, body) => {
                  if (requestErr) {
                    // console.log("3. scheduler-requestError!");
                    console.log(requestErr);
                  } else {
                    // console.log("3. scheduler-request success!");

                    var $ = cheerio.load(body);

                    $('#contents > div > div > table > tbody>tr').each(function(index, ele) {
                      var organ, detail, position, name, mainwork, telephone, email;
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

                        // console.log('\t'+organ+' '+detail+' '+position+' '+name+' '+mainwork+' '+telephone+' '+email);

                        // connection.query("INSERT INTO employee(organ,detailOrgan,position,name,mainWork,telephone,email) VALUES(?,?,?,?,?,?,?)",[organ, detail, position, name, mainwork, telephone, email], async (err,results)=>{
                        //   if(err){
                        //     console.log("insert err!");
                        //     console.log(err);
                        //   }else{
                        //     console.log("insert success!");
                        //     console.log('\t\t'+organ+' '+detail+' '+position+' '+name+' '+mainwork+' '+telephone+' '+email);
                        //   }
                        // })


                      }) // end of $.each
                      connection.destroy();
                    } // end of request-else
                  })  // end of request
                } // end of getConnection-else
              })  //end of getConnection

              // console.log("scheduleJob finished!");
        }) // end of scheduleJob
    }; // end of start

    module.exports = {
      start
    };
