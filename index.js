const OtpTest = require('./dist/index').default
console.log('OtpTest: ',OtpTest)
const otpTest = new OtpTest()
const { otp, secret } = otpTest.generate()
console.log({ otp, secret })