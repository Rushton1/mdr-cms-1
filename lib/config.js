var config = {}

config.aws = {};
config.redisSessions = {};
config.redisImageUploader = {};
config.mongodb = {};
config.web = {};
config.imageUploader = {};

config.imageUploader.sizes = [{
    width: 546,
    height: 420
  }, {
    width: 120,
    height: 120
  }, {
    width: 100,
    height: 100
  }, {
    width: 700,
    height: 700
  }
];

config.redisSessions.uri = 'nodejitsudb8227364716.redis.irstack.com';
config.redisSessions.port = 6379;
config.redisSessions.key = 'nodejitsudb8227364716.redis.irstack.com:f327cfe980c971946e80b8e975fbebb4';

config.redisImageUploader.uri = 'nodejitsudb434007956.redis.irstack.com';
config.redisImageUploader.port = 6379;
config.redisImageUploader.key = 'nodejitsudb434007956.redis.irstack.com:f327cfe980c971946e80b8e975fbebb4';

config.aws.accessKeyId = 'AKIAJ4ZER5GTMSOYVWHA';
config.aws.secretAccessKey = '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';
config.aws.endpoint = 's3.amazonaws.com';
config.aws.cdnuri = 'http://d1awf99gd5r8dy.cloudfront.net/';

config.mongodb.uri =  'mongodb://dbadmin:123qweasd@dharma.mongohq.com:10064/gtnominatr5000';

module.exports = config;