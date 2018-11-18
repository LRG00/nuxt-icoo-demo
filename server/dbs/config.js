module.exports =  ({
  dbs: 'mongodb://leeruigan:as123456@ds119702.mlab.com:19702/blog',
  redis: {
    get host () {
      return '127.0.0.1'
    },
    get post () {
      return 6379
    }
  }
})