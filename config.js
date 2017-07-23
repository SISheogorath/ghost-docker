var merge = (require("lodash")).merge;

var config = require(process.env.GHOST_SOURCE + "/config.example.js");

var envKeys = Object.keys(process.env);


config[process.env.NODE_ENV || "development"]  = merge(config[process.env.NODE_ENV || "development"], generateConfig(envKeys, {}, "GHOST", "_"));


module.exports = config;

function generateConfig(keys, config, prefix, delimiter) {
    var baseRegexString = "^" + prefix + delimiter + "([^" + delimiter + "]+)";
    var baseRegex = new RegExp(baseRegexString);
    var objectRegex = new RegExp(baseRegexString + delimiter);
    var newKeys = keys.sort()
    var newKeys = newKeys.filter(function (item) {
        return baseRegex.test(item);
    });

    for(var l = newKeys.length, i = 0; i < l; i++) {
        var newKey = baseRegex.exec(newKeys[i])[1];
        if (objectRegex.test(newKeys[i])) {
            var newPrefix = prefix + delimiter + newKey;
            if (!config[newKey.toLowerCase()])
                config[newKey.toLowerCase()] = {}
            config[newKey.toLowerCase()] = generateConfig(newKeys, config[newKey.toLowerCase()], newPrefix, delimiter)
        } else {
            config[newKey.toLowerCase()] = process.env[prefix + delimiter + newKey];
        }

    }

    return config;
}

