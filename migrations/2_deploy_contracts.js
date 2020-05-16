const FlightSuretyApp = artifacts.require("FlightSuretyApp");
const FlightSuretyData = artifacts.require("FlightSuretyData");
const fs = require('fs');

module.exports = function (deployer) {

        let firstAirline = '0x19Fe5b8B7A1cB260b8a488c1BFf8C03F3cC45a0E';
        deployer.deploy(FlightSuretyData)
            .then(() => {
                return deployer.deploy(FlightSuretyApp, FlightSuretyData.address)
                    .then(() => {
                        let config = {
                            localhost: {
                                url: 'http://localhost:7545',
                                dataAddress: FlightSuretyData.address,
                                appAddress: FlightSuretyApp.address
                            }
                        }
                        fs.writeFileSync(__dirname + '/../src/dapp/config.json', JSON.stringify(config, null, '\t'), 'utf-8');
                        fs.writeFileSync(__dirname + '/../src/server/config.json', JSON.stringify(config, null, '\t'), 'utf-8');
                    });
            });
}