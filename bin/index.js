#!/usr/bin/env node
var chai = require("chai");
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style

var parseString = require("xml2js").parseString;
const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const superagent = require("superagent");
const config = require("config");

var request = require("request");

//Arguments
const arg = yargs
    .usage("Usage: cdm -c <sumple_count> -s <sample_name_prefix>")
    .option("c", {
        alias: "count",
        describe: "Sample count",
        type: "number",
        demandOption: true,
    })
    .option("s", {
        alias: "sampleprefix",
        describe: "Sample prefix",
        type: "string",
        demandOption: true,
    }).argv;

//Boxen
const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555",
};
const appInfo = chalk.white.bold("CLI Data Maker!");
const msgBox = boxen(appInfo, boxenOptions);

//Authorization (server info)
const username = config.get("server.user");
const password = config.get("server.pass");
//token for Basic Auth
const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");
const url = config.get("server.host");

//console.log(msgBox);
console.log(msgBox);

//#####################   Superagent npm    ####################################

// /GET //BasicAuth
/* superagent
  .get(url + "/samples")
  .set("Authorization", `Basic ${token}`)
  .set("accept", "json")
  .then((res) => {
    // res.body, res.headers, res.status
    expect(res.status).to.eq(200);
    // console.log(JSON.stringify(res.body));
  })
  .catch((err) => {
    // err.message, err.response
    console.log(err.message);
  }); */
//###############################################


//helper methods
var date = new Date();
var ts = date.getTime();

//#####################   Superagent npm    ####################################

//POST //BasicAuth //Counter => argv 
/* var i = 0;
for (i = 0; i < arg.c; i++) {
    //Sends the request as many times as the counter is sent in the argument
    var body = {
        name: `XXX` + arg.s + ts++,
        sample_type_uuid: "f4cce17e-6805-43bb-b5ce-520f9f394401",
    }; //Body object

    superagent
        .post(url + "/samples")
        .send(body) // sends a JSON post body
        .set("Authorization", `Basic ${token}`)
        .set("accept", "json")
        .then((res) => {
            // res.body, res.headers, res.status
            expect(res.status).to.eq(200);
            assert.equal(res.status, 200);
            expect(res.body).to.not.be.null;
            expect(res.body.owner.name).to.be.equal("Andrej Skeledzija");
            //console.log(res.body.owner.name);
            console.log(res.body.name);
        })
        .catch((err) => {
            // err.message, err.response
            console.log(err.message);
        });
} */

///######################################

//#####################   Request npm    ####################################

// /GET //keyToken RAPID API --> COVID-19 data Price 0.00$

const host_url = config.get("server.host-url");
const x_rapidapi_host = config.get("server.x-rapidapi-host");
const x_rapidapi_key = config.get("server.x-rapidapi-key");

//token for Basic Auth
var options = {
    method: 'GET',
    url: host_url + "/help/countries",
    qs: { format: 'json' },
    headers: {
        'x-rapidapi-host': x_rapidapi_host,
        'x-rapidapi-key': x_rapidapi_key,
        useQueryString: true
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});

///######################################