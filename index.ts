import OtpTest from './dist/index'
console.log('OtpTest: ',OtpTest)
const otpTest = new OtpTest()
const { otp, secret } = otpTest.generate()
console.log({ otp, secret })